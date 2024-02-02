import { decode } from "../common/leb128.js";
import { TEXT_DECODER } from "../common/utf8.js";
import {
    I_BLOCK, I_BR, I_BR_IF, I_BR_TABLE, I_CALL, I_CALL_INDIRECT, I_DATA_DROP, I_ELSE, I_END, I_I32_ADD,
    I_I32_CONST, I_I32_LOAD, I_I32_LOAD_16_U, I_I32_LOAD_8_U, I_I32_STORE, I_I32_STORE_8,
    I_IF, I_LOCAL_GET, I_LOCAL_SET, I_LOCAL_TEE, I_LOOP, I_MEMORY_COPY, I_MEMORY_FILL,
    I_MEMORY_INIT, I_NOP, I_UNREACHABLE,
} from "../common/instructions.js";
import { BranchTable, ValueType } from "../common/types.js";
import {
    EOF, FuncType, Limits, MyParserAst,
    MyWasmModuleBlockType, MyWasmModuleExport, MyWasmModuleFuncInst, MyWasmModuleImport,
    MyWasmModuleImportExportType, Parser, ParserResult, ParserResultType, U32Obj,
} from "./types.js";

const mapP = <T1, T2>(f: (_: T1) => T2) => (p: Parser<T1>): Parser<T2> => (ts) => {
    const t1s = p(ts);
    if (t1s.type === ParserResultType.ERROR) return t1s;
    return {
        type: ParserResultType.RESULT,
        rest: t1s.rest,
        result: f(t1s.result),
    };
};

const PByte = (byte: number, keyword?: string): Parser<number> => (ts) => {
    if (ts.length < 1 || ts[0] !== byte) return { type: ParserResultType.ERROR, rest: ts, error: [`${byte}`, ts] };
    return { type: ParserResultType.RESULT, rest: new Uint8Array(ts.buffer, ts.byteOffset + 1), result: byte };
};

const PKeyword = (ks: Array<number>): Parser<Array<number>> => (ts: Uint8Array) => {
    if (ts.length < ks.length) return { type: ParserResultType.ERROR, rest: ts, error: [JSON.stringify(ks), ts] };
    for (let i = 0; i < ks.length; i++) if (ts[i] !== ks[i]) return { type: ParserResultType.ERROR, rest: ts, error: [JSON.stringify(ks), ts] };
    return { type: ParserResultType.RESULT, rest: new Uint8Array(ts.buffer, ts.byteOffset + ks.length), result: ks };
};

const PChoice = (desc: string) => <T>(ps: Array<Parser<any>>): Parser<T> => (ts) => {
    for (let p of ps) {
        const t1s = p(ts);
        if (t1s.type === ParserResultType.ERROR) {
            continue;
        }
        return t1s;
    }
    return {
        type: ParserResultType.ERROR,
        rest: ts,
        error: [desc, ts]
    };
};

// When the result of the 1st parser is bytes we can chain a 2nd parser on that result.
const PChain = <T>(p2: Parser<T>) => (p1: Parser<Uint8Array>): Parser<T> => (ts) => {
    const t1 = p1(ts);
    if (t1.type === ParserResultType.ERROR) return t1;
    const t2 = p2(t1.result);
    if (t2.type === ParserResultType.ERROR) return { type: ParserResultType.ERROR, rest: t1.rest, error: t2.error };
    return { type: ParserResultType.RESULT, rest: t1.rest, result: t2.result };
};

const PSeq = (ps: Array<Parser<unknown>>): Parser<Array<unknown>> => (ts) => {
    const result: Array<unknown> = [];
    let rest = ts;
    for (let p of ps) {
        const t1s = p(rest);
        if (t1s.type === ParserResultType.ERROR) return t1s;
        result.push(t1s.result);
        rest = t1s.rest;
    }
    return { type: ParserResultType.RESULT, rest, result };
};

const PMany = <T>(p: Parser<T>): Parser<Array<T>> => (ts) => {
    const result = [];
    let rest = ts;
    while (true) {
        const curr = p(rest);
        if (curr.type === ParserResultType.ERROR) {
            return { type: ParserResultType.RESULT, rest, result };
        }
        result.push(curr.result);
        rest = curr.rest;
    }
};

const PMany1 = <T>(p: Parser<T>): Parser<Array<T>> => (ts) => {
    const t1s = p(ts);
    if (t1s.type === ParserResultType.ERROR) return t1s;
    const result = [t1s.result];
    let rest = t1s.rest;
    while (true) {
        const t2s = p(rest);
        if (t2s.type === ParserResultType.ERROR) {
            return { type: ParserResultType.RESULT, rest, result };
        }
        result.push(t2s.result);
        rest = t2s.rest;
    }
};

const PManyN = (n: number) => <T>(p: Parser<T>): Parser<Array<T>> => (ts) => {
    const result = [];
    let rest = ts;
    for (let i = 0; i < n; i++) {
        const curr = p(rest);
        if (curr.type === ParserResultType.ERROR) return curr;
        result.push(curr.result);
        rest = curr.rest;
    }
    return { type: ParserResultType.RESULT, rest, result };
};

const PMaybe = <T>(p: Parser<T>): Parser<T | null> => (ts) => {
    const curr = p(ts);
    if (curr.type === ParserResultType.RESULT) return curr;
    return { type: ParserResultType.RESULT, rest: ts, result: null };
}

const PEOF: Parser<null> = (ts) => ts.length === 0 ?
    { type: ParserResultType.RESULT, rest: ts, result: null } :
    { type: ParserResultType.ERROR, rest: ts, error: [EOF, ts] };

const PI32 = PByte(ValueType.I32);
const PI64 = PByte(ValueType.I64);
const PF32 = PByte(ValueType.F32);
const PF64 = PByte(ValueType.F64);
const PNumType = PChoice('numtype')([PI32, PI64, PF32, PF64]);

const PV128 = PByte(ValueType.V128);
const PVecType = PChoice('vectype')([PV128]);

const PFuncRef = PByte(ValueType.FuncRef);
const PExternRef = PByte(ValueType.ExternRef);
const PRefType = PChoice('reftype')([PFuncRef, PExternRef]);

const PValType = PChoice('valtype')([PNumType, PVecType, PRefType]);

const PNumU32: Parser<U32Obj> = (ts) => {
    if (ts.length === 0) return {
        type: ParserResultType.ERROR,
        rest: ts,
        error: ['u32', ts],
    };
    const res = [];
    let i = 0;
    for (; i < ts.length && i < 5; i++) {
        res.push(ts[i]);
        if ((ts[i] & 0x80) === 0x00) {
            i++; // next valid byte
            break;
        }
    }
    {
        const last = res[res.length - 1];
        if ((last & 0x80) !== 0x00) {
            return { type: ParserResultType.ERROR, rest: ts, error: ['u32', ts] };
        }
    }
    const value = decode(new Uint8Array(res), false);
    return {
        type: ParserResultType.RESULT,
        rest: new Uint8Array(ts.buffer, ts.byteOffset + i),
        result: { type: 'u32', value },
    };
};

const PNumI32: Parser<{ type: 'i32', value: number }> = (ts) => {
    if (ts.length === 0) return { type: ParserResultType.ERROR, rest: ts, error: ['i32', ts] };
    const res = [];
    let i = 0;
    for (; i < ts.length && i < 5; i++) {
        res.push(ts[i]);
        if ((ts[i] & 0x80) === 0x00) {
            i++; // next valid byte
            break;
        }
    }
    {
        const last = res[res.length - 1];
        if ((last & 0x80) !== 0x00) {
            return { type: ParserResultType.ERROR, rest: ts, error: ['i32', ts] };
        }
    }
    const value = Number(decode(new Uint8Array(res), true));
    return {
        type: ParserResultType.RESULT,
        rest: new Uint8Array(ts.buffer, ts.byteOffset + i),
        result: { type: 'i32', value },
    };
};

const PNumU64: Parser<{ type: 'u64', value: bigint }> = (ts) => {
    if (ts.length === 0) return { type: ParserResultType.ERROR, rest: ts, error: ['u64', ts] };
    const res = [];
    let i = 0;
    for (; i < ts.length && i < 10; i++) {
        res.push(ts[i]);
        if ((ts[i] & 0x80) === 0x00) {
            i++; // next valid byte
            break;
        }
    }
    {
        const last = res[res.length - 1];
        if ((last & 0x80) !== 0x00) {
            return { type: ParserResultType.ERROR, rest: ts, error: ['u64', ts] };
        }
    }
    const value = decode(new Uint8Array(res), false);
    return {
        type: ParserResultType.RESULT,
        rest: new Uint8Array(ts.buffer, ts.byteOffset + i),
        result: { type: 'u64', value },
    };
};

const PNumI64: Parser<{ type: 'i64', value: bigint }> = (ts) => {
    if (ts.length === 0) return { type: ParserResultType.ERROR, rest: ts, error: ['i64', ts] };
    const res = [];
    let i = 0;
    for (; i < ts.length && i < 10; i++) {
        res.push(ts[i]);
        if ((ts[i] & 0x80) === 0x00) {
            i++; // next valid byte
            break;
        }
    }
    {
        const last = res[res.length - 1];
        if ((last & 0x80) !== 0x00) {
            return { type: ParserResultType.ERROR, rest: ts, error: ['i64', ts] };
        }
    }
    const value = decode(new Uint8Array(res), true);
    return {
        type: ParserResultType.RESULT,
        rest: new Uint8Array(ts.buffer, ts.byteOffset + i),
        result: { type: 'i64', value },
    };
};

const PNumF32: Parser<{ type: 'f32', value: number }> = (ts) => {
    if (ts.length < 4) return { type: ParserResultType.ERROR, rest: ts, error: ['f32', ts] };
    const value = new DataView(ts.buffer, ts.byteOffset, 4).getFloat32(0, true);
    return { type: ParserResultType.RESULT, rest: new Uint8Array(ts.buffer, ts.byteOffset + 4), result: { type: 'f32', value } };
};

const PNumF64: Parser<{ type: 'f64', value: number }> = (ts) => {
    if (ts.length < 8) return { type: ParserResultType.ERROR, rest: ts, error: ['f64', ts] };
    const value = new DataView(ts.buffer, ts.byteOffset, 8).getFloat64(0, true);
    // console.log('DEBUG >> $$ value', value, 'ts', ts.slice(0, 8));
    return { type: ParserResultType.RESULT, rest: new Uint8Array(ts.buffer, ts.byteOffset + 8), result: { type: 'f64', value } };
};

const PSpecificNumU32 = (x: number): Parser<number> => (ts) => {
    const curr = PNumU32(ts);
    if (curr.type === ParserResultType.ERROR) return curr;
    const actual = Number(curr.result.value);
    if (actual !== x) return { type: ParserResultType.ERROR, rest: ts, error: [`num u32 - ${x}`, ts] };
    return { type: ParserResultType.RESULT, rest: curr.rest, result: x };
};

const PVec = <T>(p: Parser<T>): Parser<Array<T>> => (ts) => {
    const curr = PNumU32(ts);
    if (curr.type === ParserResultType.ERROR) return curr;
    const n = Number(curr.result.value);
    return PManyN(n)(p)(curr.rest);
};

const PVecBytes: Parser<Uint8Array> = (ts) => {
    const curr = PNumU32(ts);
    // console.log('ts', ts[0], ts[1], ' - curr: ', curr);
    if (curr.type === ParserResultType.ERROR) return curr;
    const n = Number(curr.result.value);
    // console.log('0. n', n);
    if (curr.rest.length < n) return { type: ParserResultType.ERROR, rest: curr.rest, error: ['vec-bytes', curr.rest] };
    // console.log('1. curr', curr);
    const result = new Uint8Array(curr.rest.buffer, curr.rest.byteOffset, n);
    // console.log('2. result', result);
    const rest = new Uint8Array(curr.rest.buffer, curr.rest.byteOffset + n);
    return { type: ParserResultType.RESULT, rest, result };
};

const PString = mapP<Uint8Array, string>(res => TEXT_DECODER.decode(res))(PVecBytes);

const PResultType = PVec(PValType);
const PFuncType = mapP<Array<unknown>, { type: 'functype', value: FuncType }>(res => ({
    type: 'functype',
    value: {
        params: res[1] as Array<unknown>,
        results: res[2] as Array<unknown>,
    },
}))(
    PSeq([PByte(0x60, 'functype'), PResultType, PResultType])
);

type TPLimits = { type: 'limits', value: Limits };
const PLimits: Parser<TPLimits> = mapP<Array<unknown>, { type: 'limits', value: Limits }>(res => ({
    type: 'limits',
    value: {
        min: Number((res as Array<U32Obj>)[1].value),
        max: Number((res as Array<U32Obj>)[2]?.value),
    },
}))(PChoice('limits')([
    PSeq([PByte(0x00, 'limits'), PNumU32]),
    PSeq([PByte(0x01, 'limits-with-max'), PNumU32, PNumU32]),
]));

const PMemType = PLimits;

const PTableType = mapP<Array<unknown>, Object>(res => ({
    'type': res[0],
    'limits': (res[1] as TPLimits).value,
}))(PSeq([PRefType, PLimits]));

const PGlobalType = PSeq([PValType, PChoice('mut')([PByte(0x00, 'const'), PByte(0x01, 'var')])]);

const PIndex = mapP<U32Obj, number>(res => Number(res.value))(PNumU32);

const PMemArg = mapP(res => ({
    align: Number((res as Array<U32Obj>)[0].value),
    offset: Number((res as Array<U32Obj>)[1].value)
}))(PSeq([PNumU32, PNumU32]));

const PPlainInst = mapP(res => {
    if (Array.isArray(res)) {
        if (res.length === 2) {
            const t1 = res[1] as { type: string; value: unknown };
            if (
                t1.type === 'u32' ||
                t1.type === 'i32' ||
                t1.type === 'i64' ||
                t1.type === 'f32' ||
                t1.type === 'f64'
            ) {
                return { opCode: res[0], data: t1.value };
            }
            return { opCode: res[0], data: res[1] };
        }
        return { opCode: res[0], data: res.slice(1) };
    }
    return { opCode: res };
})(PChoice('plaininst')([
    PByte(I_UNREACHABLE, 'unreachable'),
    PByte(I_NOP, 'nop'),
    PSeq([PByte(I_BR, 'br'), PIndex]),
    PSeq([PByte(I_BR_IF, 'br_if'), PIndex]),
    mapP<[number, Array<number>, number], [number, BranchTable]>(res => [res[0], { branches: res[1], def: res[2] }])(
        PSeq([PByte(I_BR_TABLE, 'br_table'), PVec(PIndex), PIndex]) as Parser<[number, Array<number>, number]>
    ),
    PByte(0x0F, 'return'),
    PSeq([PByte(I_CALL, 'call'), PIndex]),
    mapP<Array<unknown>, [number, object]>(
        res => [res[0] as number, { 'typeIdx': res[1], 'tableIdx': res[2] }]
    )(PSeq([PByte(I_CALL_INDIRECT, 'call_indirect'), PIndex, PIndex])),
    // reference
    PSeq([PByte(0xD0, 'ref.null'), PRefType]),
    PByte(0xD1, 'ref.is_null'),
    PSeq([PByte(0xD2, 'ref.func'), PIndex]),
    // parameteric
    PByte(0x1A, 'drop'),
    PByte(0x1B, 'select'),
    PSeq([PByte(0x1C, 'select'), PVec(PValType)]),
    // variable
    PSeq([PByte(I_LOCAL_GET, 'local.get'), PIndex]),
    PSeq([PByte(I_LOCAL_SET, 'local.set'), PIndex]),
    PSeq([PByte(I_LOCAL_TEE, 'local.tee'), PIndex]),
    PSeq([PByte(0x23, 'global.get'), PIndex]),
    PSeq([PByte(0x24, 'global.set'), PIndex]),
    // table
    PSeq([PByte(0x25, 'table.get'), PIndex]),
    PSeq([PByte(0x26, 'table.set'), PIndex]),
    PSeq([PByte(0xFC, 'table.init'), PSpecificNumU32(12), PIndex, PIndex]),
    PSeq([PByte(0xFC, 'elem.drop'), PSpecificNumU32(13), PIndex]),
    PSeq([PByte(0xFC, 'table.copy'), PSpecificNumU32(14), PIndex, PIndex]),
    PSeq([PByte(0xFC, 'table.grow'), PSpecificNumU32(15), PIndex]),
    PSeq([PByte(0xFC, 'table.size'), PSpecificNumU32(16), PIndex]),
    PSeq([PByte(0xFC, 'table.fill'), PSpecificNumU32(17), PIndex]),
    // memory
    PSeq([PByte(I_I32_LOAD, 'i32.load'), PMemArg]),
    PSeq([PByte(0x29, 'i64.load'), PMemArg]),
    PSeq([PByte(0x2A, 'f32.load'), PMemArg]),
    PSeq([PByte(0x2B, 'f64.load'), PMemArg]),
    PSeq([PByte(0x2C, 'i32.load8_s'), PMemArg]),
    PSeq([PByte(I_I32_LOAD_8_U, 'i32.load8_u'), PMemArg]),
    PSeq([PByte(0x2E, 'i32.load16_s'), PMemArg]),
    PSeq([PByte(I_I32_LOAD_16_U, 'i32.load16_u'), PMemArg]),
    PSeq([PByte(0x30, 'i64.load8_s'), PMemArg]),
    PSeq([PByte(0x31, 'i64.load8_u'), PMemArg]),
    PSeq([PByte(0x32, 'i64.load16_s'), PMemArg]),
    PSeq([PByte(0x33, 'i64.load16_u'), PMemArg]),
    PSeq([PByte(0x34, 'i64.load32_s'), PMemArg]),
    PSeq([PByte(0x35, 'i64.load32_u'), PMemArg]),
    PSeq([PByte(I_I32_STORE, 'i32.store'), PMemArg]),
    PSeq([PByte(0x37, 'i64.store'), PMemArg]),
    PSeq([PByte(0x38, 'f32.store'), PMemArg]),
    PSeq([PByte(0x39, 'f64.store'), PMemArg]),
    PSeq([PByte(I_I32_STORE_8, 'i32.store8'), PMemArg]),
    PSeq([PByte(0x3B, 'i32.store16'), PMemArg]),
    PSeq([PByte(0x3C, 'i64.store8'), PMemArg]),
    PSeq([PByte(0x3D, 'i64.store16'), PMemArg]),
    PSeq([PByte(0x3E, 'i64.store32'), PMemArg]),
    PSeq([PByte(0x3F, 'memory.size'), PByte(0x00, 'memory.size')]),
    PSeq([PByte(0x40, 'memory.grow'), PByte(0x00, 'memory.grow')]),
    PSeq([PByte(0xFC, 'memory.init'), PSpecificNumU32(I_MEMORY_INIT), PIndex, PByte(0x00, 'memory.init')]),
    PSeq([PByte(0xFC, 'data.drop'), PSpecificNumU32(I_DATA_DROP), PIndex]),
    PSeq([PByte(0xFC, 'memory.copy'), PSpecificNumU32(I_MEMORY_COPY), PByte(0x00, 'memory.copy'), PByte(0x00, 'memory.copy')]),
    PSeq([PByte(0xFC, 'memory.fill'), PSpecificNumU32(I_MEMORY_FILL), PByte(0x00, 'memory.fill')]),
    // numeric
    PSeq([PByte(I_I32_CONST, 'i32.const'), PNumI32]),
    PSeq([PByte(0x42, 'i64.const'), PNumI64]),
    PSeq([PByte(0x43, 'f32.const'), PNumF32]),
    PSeq([PByte(0x44, 'f64.const'), PNumF64]),
    // single byte numeric instructions
    PByte(0x45, 'i32.eqz'),
    PByte(0x46, 'i32.eq'),
    PByte(0x47, 'i32.ne'),
    PByte(0x48, 'i32.lt_s'),
    PByte(0x49, 'i32.lt_u'),
    PByte(0x4A, 'i32.gt_s'),
    PByte(0x4B, 'i32.gt_u'),
    PByte(0x4C, 'i32.le_s'),
    PByte(0x4D, 'i32.le_u'),
    PByte(0x4E, 'i32.ge_s'),
    PByte(0x4F, 'i32.ge_u'),

    PByte(0x50, 'i64.eqz'),
    PByte(0x51, 'i64.eq'),
    PByte(0x52, 'i64.ne'),
    PByte(0x53, 'i64.lt_s'),
    PByte(0x54, 'i64.lt_u'),
    PByte(0x55, 'i64.gt_s'),
    PByte(0x56, 'i64.gt_u'),
    PByte(0x57, 'i64.le_s'),
    PByte(0x58, 'i64.le_u'),
    PByte(0x59, 'i64.ge_s'),
    PByte(0x5A, 'i64.ge_u'),

    PByte(0x5B, 'f32.eq'),
    PByte(0x5C, 'f32.ne'),
    PByte(0x5D, 'f32.lt'),
    PByte(0x5E, 'f32.gt'),
    PByte(0x5F, 'f32.le'),
    PByte(0x60, 'f32.ge'),

    PByte(0x61, 'f64.eq'),
    PByte(0x62, 'f64.ne'),
    PByte(0x63, 'f64.lt'),
    PByte(0x64, 'f64.gt'),
    PByte(0x65, 'f64.le'),
    PByte(0x66, 'f64.ge'),

    PByte(0x67, 'i32.clz'),
    PByte(0x68, 'i32.ctz'),
    PByte(0x69, 'i32.popcnt'),
    PByte(I_I32_ADD, 'i32.add'),
    PByte(0x6B, 'i32.sub'),
    PByte(0x6C, 'i32.mul'),
    PByte(0x6D, 'i32.div_s'),
    PByte(0x6E, 'i32.div_u'),
    PByte(0x6F, 'i32.rem_s'),
    PByte(0x70, 'i32.rem_u'),
    PByte(0x71, 'i32.and'),
    PByte(0x72, 'i32.or'),
    PByte(0x73, 'i32.xor'),
    PByte(0x74, 'i32.shl'),
    PByte(0x75, 'i32.shr_s'),
    PByte(0x76, 'i32.shr_u'),
    PByte(0x77, 'i32.rotl'),
    PByte(0x78, 'i32.rotr'),

    PByte(0x79, 'i64.clz'),
    PByte(0x7A, 'i64.ctz'),
    PByte(0x7B, 'i64.popcnt'),
    PByte(0x7C, 'i64.add'),
    PByte(0x7D, 'i64.sub'),
    PByte(0x7E, 'i64.mul'),
    PByte(0x7F, 'i64.div_s'),
    PByte(0x80, 'i64.div_u'),
    PByte(0x81, 'i64.rem_s'),
    PByte(0x82, 'i64.rem_u'),
    PByte(0x83, 'i64.and'),
    PByte(0x84, 'i64.or'),
    PByte(0x85, 'i64.xor'),
    PByte(0x86, 'i64.shl'),
    PByte(0x87, 'i64.shr_s'),
    PByte(0x88, 'i64.shr_u'),
    PByte(0x89, 'i64.rotl'),
    PByte(0x8A, 'i64.rotr'),


    PByte(0x8B, 'f32.abs'),
    PByte(0x8C, 'f32.neg'),
    PByte(0x8D, 'f32.ceil'),
    PByte(0x8E, 'f32.floor'),
    PByte(0x8F, 'f32.trunc'),
    PByte(0x90, 'f32.nearest'),
    PByte(0x91, 'f32.sqrt'),
    PByte(0x92, 'f32.add'),
    PByte(0x93, 'f32.sub'),
    PByte(0x94, 'f32.mul'),
    PByte(0x95, 'f32.div'),
    PByte(0x96, 'f32.min'),
    PByte(0x97, 'f32.max'),
    PByte(0x98, 'f32.copysign'),

    PByte(0x99, 'f64.abs'),
    PByte(0x9A, 'f64.neg'),
    PByte(0x9B, 'f64.ceil'),
    PByte(0x9C, 'f64.floor'),
    PByte(0x9D, 'f64.trunc'),
    PByte(0x9E, 'f64.nearest'),
    PByte(0x9F, 'f64.sqrt'),
    PByte(0xA0, 'f64.add'),
    PByte(0xA1, 'f64.sub'),
    PByte(0xA2, 'f64.mul'),
    PByte(0xA3, 'f64.div'),
    PByte(0xA4, 'f64.min'),
    PByte(0xA5, 'f64.max'),
    PByte(0xA6, 'f64.copysign'),

    PByte(0xA7, 'i32.wrap_i64'),
    PByte(0xA8, 'i32.trunc_f32_s'),
    PByte(0xA9, 'i32.trunc_f32_u'),
    PByte(0xAA, 'i32.trunc_f64_s'),
    PByte(0xAB, 'i32.trunc_f64_u'),
    PByte(0xAC, 'i64.extend_i32_s'),
    PByte(0xAD, 'i64.extend_i32_u'),
    PByte(0xAE, 'i64.trunc_f32_s'),
    PByte(0xAF, 'i64.trunc_f32_u'),
    PByte(0xB0, 'i64.trunc_f64_s'),
    PByte(0xB1, 'i64.trunc_f64_u'),
    PByte(0xB2, 'f32.convert_i32_s'),
    PByte(0xB3, 'f32.convert_i32_u'),
    PByte(0xB4, 'f32.convert_i64_s'),
    PByte(0xB5, 'f32.convert_i64_u'),
    PByte(0xB6, 'f32.demote_f64'),
    PByte(0xB7, 'f64.convert_i32_s'),
    PByte(0xB8, 'f64.convert_i32_u'),
    PByte(0xB9, 'f64.convert_i64_s'),
    PByte(0xBA, 'f64.convert_i64_u'),
    PByte(0xBB, 'f64.promote_f32'),
    PByte(0xBC, 'i32.reinterpret_f32'),
    PByte(0xBD, 'i64.reinterpret_f64'),
    PByte(0xBE, 'f32.reinterpret_i32'),
    PByte(0xBF, 'f64.reinterpret_i64'),

    PByte(0xC0, 'i32.extend8_s'),
    PByte(0xC1, 'i32.extend16_s'),
    PByte(0xC2, 'i64.extend8_s'),
    PByte(0xC3, 'i64.extend16_s'),
    PByte(0xC4, 'i64.extend32_s'),

    PSeq([PByte(0xFC, 'ixx.trunc_sat_fxx_su'), PNumU32]),
    PSeq([PByte(0xFD, 'vector_instruction'), PNumU32, PMemArg]),
]));

const PBlockType = PChoice('blocktype')([
    PByte(0x40, 'empty-block-type'),
    PValType,
    PNumI32, // type index. This should be a 33 bit signed leb128 (if x >= 0) integer
]);

function PBlockInst(ts: Uint8Array): ParserResult<unknown> {
    return PChoice('blockinst')([
        mapP(res => {
            const t1 = (res as Array<unknown>);
            return { opCode: t1[0], data: { blockType: t1[1], body: [...(t1[2] as Array<unknown>), { opCode: I_END }] } };
        })(PSeq([PByte(I_BLOCK, 'block'), PBlockType, PMany(PInst), PByte(I_END, 'end')])),
        mapP(res => {
            const t1 = (res as Array<unknown>);
            return { opCode: t1[0], data: { blockType: t1[1], body: [...(t1[2] as Array<unknown>), { opCode: I_END }] } };
        })(PSeq([PByte(I_LOOP, 'loop'), PBlockType, PMany(PInst), PByte(I_END, 'end')])),
        mapP(res => {
            const t1 = (res as Array<unknown>);
            return { opCode: t1[0], data: { blockType: t1[1], trueBody: [...(t1[2] as Array<unknown>), { opCode: I_END }] } };
        })(PSeq([PByte(I_IF, 'if'), PBlockType, PMany(PInst), PByte(I_END, 'end')])),
        mapP(res => {
            const t1 = (res as Array<unknown>);
            return {
                opCode: t1[0],
                data: {
                    blockType: t1[1],
                    trueBody: [...(t1[2] as Array<unknown>), { opCode: 0x05 }],
                    falseBody: [...(t1[4] as Array<unknown>), { opCode: I_END }],
                }
            };
        })(PSeq([PByte(I_IF, 'if'), PBlockType, PMany(PInst), PByte(I_ELSE, 'else'), PMany(PInst), PByte(I_END, 'end')])),
    ])(ts);
}

function PInst(ts: Uint8Array): ParserResult<unknown> {
    // console.log('ts[0:4]', ts[0], ts[1], ts[2], ts[3]);
    return PChoice('inst')([
        PPlainInst,
        PBlockInst,
    ])(ts);
}

// const PSaveBytes = <T>(p: Parser<T>): Parser<{ original: T, input: Uint8Array }> => (ts) => {
//     const curr = p(ts);
//     if (curr.type === ParserResultType.ERROR) return curr;
//     const input = new Uint8Array(ts.buffer, ts.byteOffset, curr.rest.byteOffset - ts.byteOffset);
//     return { type: ParserResultType.RESULT, rest: curr.rest, result: { original: curr.result, input } };
// };
// const PExpr = PSaveBytes(PSeq([PMany(PInst), PByte(I_END, 'end')]));
const PExpr = mapP(res => [
    ...(res as Array<Array<unknown>>)[0],
    { opCode: I_END },
])(PSeq([PMany(PInst), PByte(I_END, 'end')]));

const PSection = <T>(sectionType: number, sectionName: string, p: Parser<T>): Parser<{ type: string, value: T }> => (ts) => {
    const curr = PSeq([PByte(sectionType, 'section-type'), PVecBytes])(ts);
    if (curr.type === ParserResultType.ERROR) return curr;
    const t1 = p((curr.result as [unknown, Uint8Array])[1]);
    if (t1.type === ParserResultType.ERROR) return t1;
    return { type: ParserResultType.RESULT, rest: t1.rest, result: { type: sectionName, value: t1.result } };
};

// const PSection = <T>(sectionTypeByte: number, p: Parser<T>): Parser<T> => (ts) => {
//     if (ts.length < 2 || ts[0] !== sectionTypeByte) return { type: ParserResultType.ERROR, rest: ts, error: [`${sectionTypeByte}`, ts] };
//     const t1s = PNumU32(new Uint8Array(ts.buffer, ts.byteOffset + 1));
//     if (t1s.type === ParserResultType.ERROR) return t1s;
//     const sectionSize = Number(t1s.result.value);
//     if (t1s.rest.length !== sectionSize) return { type: ParserResultType.ERROR, rest: t1s.rest, error: [`section-size-${sectionSize}`, t1s.rest] };
//     return p(t1s.rest);
// };

const PCustomSection = PSection(0x00, 'section-custom', PSeq([PString, PVecBytes]));

const PTypeSection = PSection(0x01, 'section-type', PVec(PFuncType));

const PImportDesc = mapP<
    [number, number],
    { type: MyWasmModuleImportExportType, typeIdx: number }>(res => ({ type: res[0], typeIdx: res[1] }))(PChoice('importdesc')([
        PSeq([PByte(MyWasmModuleImportExportType.FUNC, 'func'), PIndex]),
        PSeq([PByte(MyWasmModuleImportExportType.GLOBAL, 'table'), PTableType]),
        PSeq([PByte(MyWasmModuleImportExportType.MEM, 'mem'), PMemType]),
        PSeq([PByte(MyWasmModuleImportExportType.GLOBAL, 'global'), PGlobalType]),
    ]));

const PImport = mapP<
    [
        string,
        string,
        { type: MyWasmModuleImportExportType, typeIdx: number },
    ],
    { type: 'import', value: MyWasmModuleImport }>(res => ({
        type: 'import',
        value: {
            module: res[0],
            name: res[1],
            type: res[2].type,
            typeIdx: res[2].typeIdx,
        },
    }))(PSeq([PString, PString, PImportDesc]) as Parser<[
        string,
        string,
        { type: MyWasmModuleImportExportType, typeIdx: number },
    ]>);
const PImportSection = PSection(0x02, 'section-import', PVec(PImport));

const PFuncSection = PSection(0x03, 'section-func', PVec(PIndex));

const PTable = PTableType;
const PTableSection = PSection(0x04, 'section-table', PVec(PTable));

const PMem = PMemType;
const PMemSection = PSection(0x05, 'section-mem', PVec(PMem));

const PGlobal = mapP<
    [[ValueType, 0 | 1], Array<MyWasmModuleFuncInst>],
    {
        type: ValueType,
        mut: boolean,
        expr: Array<MyWasmModuleFuncInst>,
    }
>(res => ({
    type: res[0][0],
    mut: res[0][1] === 1,
    expr: res[1],
}))(
    PSeq([PGlobalType, PExpr]) as Parser<[[ValueType, 0 | 1], Array<MyWasmModuleFuncInst>]>
);
const PGlobalSection = PSection(0x06, 'section-global', PVec(PGlobal));

const PExportDesc = PChoice('exportdesc')([
    PSeq([PByte(0x00, 'func'), PIndex]),
    PSeq([PByte(0x01, 'table'), PIndex]),
    PSeq([PByte(0x02, 'mem'), PIndex]),
    PSeq([PByte(0x03, 'global'), PIndex]),
]);
const PExport = mapP<
    [string, [number, number]],
    MyWasmModuleExport>(res => ({ name: res[0], type: res[1][0], idx: res[1][1] }))(
        PSeq([PString, PExportDesc]) as Parser<[string, [number, number]]>
    );
const PExportSection = PSection(0x07, 'section-export', PVec(PExport));

const PStart = PIndex;
const PStartSection = PSection(0x08, 'section-start', PStart);

const PLocals = mapP<unknown[], Array<ValueType>>(res => {
    const xs: Array<ValueType> = [];
    // console.log('DEBUG !!!!!!!!!!>>>>> res', res);
    const t1num = (res[0] as U32Obj).value;
    const t1 = res[1] as ValueType;
    for (let i = 0; i < t1num; i++) xs.push(t1);
    // console.log('DEBUG !!!!!!!!!!>>>>> xs', xs);
    return xs;
})(PSeq([PNumU32, PValType]));
const PFunc = mapP(res => ({ locals: (res as Array<unknown>)[0], body: (res as Array<unknown>)[1] }))(PSeq([
    mapP<Array<unknown>, Array<unknown>>(res => res.flat())(PVec(PLocals)),
    PExpr,
]));
const PCode = PChain(PFunc)(PVecBytes);
const PCodeSection = PSection(0x0A, 'section-code', PVec(PCode));

const PData = PChoice('data-segment')([
    mapP((res) => {
        const t1 = res as [0, Array<unknown>, Uint8Array];
        return { type: 'active', offsetExpr: t1[1], data: t1[2] };
    })(PSeq([PSpecificNumU32(0), PExpr, PVecBytes])),
    mapP((res) => {
        const t1 = res as [1, Uint8Array];
        return { type: 'passive', data: t1[1] };
    })(PSeq([PSpecificNumU32(1), PVecBytes])),
]);
const PDataSection = PSection(0x0B, 'section-data', PVec(PData));

const PDataCountSection = PSection(0x0C, 'section-data-count', PNumU32);

const PMagic = PKeyword([0x00, 0x61, 0x73, 0x6D]);
const PVersion = PKeyword([0x01, 0x00, 0x00, 0x00]);

interface Section {
    type: string;
    value: Array<unknown> | number;
}

export const PModule = mapP<Array<unknown>, MyParserAst>(res => {
    const sections = res.slice(2).filter(x => x !== null) as Array<Section>;
    const ast: MyParserAst = {
        type: 'module',
        types: [],
        imports: [],
        funcs: [],
        tables: [],
        mems: [],
        globals: [],
        exports: [],
        start: -1,
        codes: [],
        datas: [],
    };
    const sectionTypes = [
        'section-type', 'section-import', 'section-func', 'section-table', 'section-mem',
        'section-global', 'section-export', 'section-start', 'section-code', 'section-data',
    ];
    sectionTypes.forEach(t => {
        const currXs = sections.filter(s => s.type === t);
        if (currXs.length > 1) throw new Error(`expected exactly one section of type ${t}`);
        if (currXs.length === 0) return;
        const section: Section = currXs[0];
        if (t === 'section-start') {
            ast.start = section.value as number;
            return;
        }
        if (t === 'section-type') {
            ast.types = (section.value as Array<any>).map(x => x.value) as Array<MyWasmModuleBlockType>;
            return;
        }
        if (t === 'section-import') {
            ast.imports = (section.value as Array<any>).map(x => x.value) as Array<MyWasmModuleImport>;
            return;
        }
        if (t === 'section-mem') {
            // console.log('t', t, 'section', section);
            ast.mems = (section.value as Array<any>).map(x => x.value) as Array<Limits>;
            return;
        }
        if (t === 'section-data') {
            // console.log('t', t, 'section', section);
            ast.datas = (section.value as Array<any>); //.map(x => x.value);
            return;
        }
        // if (t === 'section-code') {
        // console.log('DEBUG >>>> section-code', section);
        // ans.codes = (section.value as Array<any>).map(x => x.value) as Array<MyWasmModuleImport>;
        // return;
        // }
        const fieldName: string = t.replace(/^section-/, '') + 's';
        const keyName = fieldName as 'types'; // TODO: very bad hack
        ast[keyName] = section.value as any;
    });
    return ast;
})(PSeq([
    PMagic,
    PVersion,
    PMaybe(PTypeSection),
    PMaybe(PImportSection),
    PMaybe(PFuncSection),
    PMaybe(PTableSection),
    PMaybe(PMemSection),
    PMaybe(PGlobalSection),
    PMaybe(PExportSection),
    PMaybe(PStartSection),
    // elem sec
    PMaybe(PDataCountSection),
    PMaybe(PCodeSection),
    PMaybe(PDataSection),
    PEOF,
]));
