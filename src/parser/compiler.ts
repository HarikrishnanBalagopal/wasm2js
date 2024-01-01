import { PAGE_SIZE } from "../common/constants";
import { safeJSONstringify } from "../common/utils";
import { executor } from "../executor/executor";
import { I_BLOCK, I_I32_CONST, I_IF, I_LOOP } from "../executor/instructions";
import { ExecResult, StackValue } from "../executor/types";
import { PModule } from "./parser";
import { HostFunc, MyParserAst, MyParserAstCodeInst, MyWasmImportObject, MyWasmInstance, MyWasmModule, MyWasmModuleFunc, MyWasmModuleImportExportType, ParserResultType } from "./types";

export const flatten = (xs: Array<MyParserAstCodeInst>): Array<MyParserAstCodeInst> => {
    return xs.flatMap(inst => {
        // console.log('x', x);
        if (inst.opCode === I_BLOCK || inst.opCode === I_LOOP) {
            const t0 = inst as { opCode: number; data: { blockType: unknown; body: Array<MyParserAstCodeInst> } };
            const t1 = flatten(t0.data.body);
            return [
                { opCode: inst.opCode, data: { blockType: t0.data.blockType, bodyLength: t1.length } },
                ...t1,
            ];
        }
        if (inst.opCode === I_IF) {
            const t0 = inst as { opCode: number; data: { blockType: unknown; trueBody: Array<MyParserAstCodeInst>; falseBody?: Array<MyParserAstCodeInst> } };
            return [
                {
                    opCode: inst.opCode,
                    data: {
                        blockType: t0.data.blockType,
                        trueBodyLength: t0.data.trueBody.length,
                        falseBodyLength: t0.data.falseBody?.length,
                    },
                },
                ...flatten(t0.data.trueBody),
                ...(t0.data.falseBody ? flatten(t0.data.falseBody) : []),
            ];
        };
        return inst;
    });
};

export const createHostFunction = (f: Function): HostFunc => {
    return ((args: Array<number | bigint>) => {
        const result = f(...args);
        if (Array.isArray(result)) return result;
        return (result === undefined) ? [] : [result];
    });
};

export const compile = async (wasmBytes: Uint8Array): Promise<MyWasmModule> => {
    const result = PModule(wasmBytes);
    if (result.type !== ParserResultType.RESULT) throw new Error(`parsing failed. ${safeJSONstringify(result)}`);
    const ast: MyParserAst = result.result;
    // console.log('DEBUG ast:', ast);
    // console.log('DEBUG>> ast.codes', safeJSONstringify(ast.codes));
    const flattenedCodes = ast.codes.map(code => ({
        locals: code.locals,
        body: flatten(code.body),
    }));
    const flattenedAst: MyParserAst = { ...ast, codes: flattenedCodes };
    // console.log('DEBUG flattened ast:', flattenedAst);
    const compiledModule: MyWasmModule = {
        start: flattenedAst.start,
        imports: flattenedAst.imports,
        exports: flattenedAst.exports,
        funcs: flattenedAst.funcs.map((f, i) => ({ typeIdx: f, locals: flattenedAst.codes[i].locals, body: flattenedAst.codes[i].body })),
        types: flattenedAst.types,
        mems: flattenedAst.mems,
        datas: flattenedAst.datas,
    };
    return compiledModule;
};

export const instantiate = async (compiledModule: MyWasmModule, importObject: MyWasmImportObject): Promise<MyWasmInstance> => {
    // console.log('DEBUG compiledModule', compiledModule);
    const instance: MyWasmInstance = {
        exports: {},
        store: {
            funcs: compiledModule.funcs.slice(),
            tables: [],
            mems: compiledModule.mems.map(x => ({ ...x, data: new Uint8Array(x.min * PAGE_SIZE) })),
            globals: [],
            elems: [],
            datas: compiledModule.datas,
            types: compiledModule.types,
        }
    };
    // imports --------------------
    // imported functions
    const importedFuncs: Array<MyWasmModuleFunc> = compiledModule.imports.filter(imp => imp.type === MyWasmModuleImportExportType.FUNC).map(imp => {
        const found = importObject[imp.module]?.[imp.name];
        if (found === undefined) throw new Error(`failed to find the import ${safeJSONstringify(imp)}`);
        return { typeIdx: imp.typeIdx, locals: [], body: [], hostFunc: createHostFunction(found) };
    });
    instance.store.funcs = [...importedFuncs, ...instance.store.funcs];
    // imports --------------------
    // exports --------------------
    // exported functions
    const createExportedFunction = (funcIdx: number) => (...args: Array<number | bigint>): Array<number | bigint> => {
        const result = executor(instance.store, funcIdx, args);
        return result.stack.map(x => (x as StackValue).value);
    };
    compiledModule.exports.filter(exp => exp.type === MyWasmModuleImportExportType.FUNC).forEach(exp => {
        if (exp.idx < 0 || exp.idx >= instance.store.funcs.length) throw new Error(`failed to find the export ${safeJSONstringify(exp)}`);
        instance.exports[exp.name] = createExportedFunction(exp.idx);
    });
    // exported memories
    compiledModule.exports.filter(exp => exp.type === MyWasmModuleImportExportType.MEM).forEach(exp => {
        // console.log('DEBUG mem exp', exp);
        instance.exports[exp.name] = instance.store.mems[exp.idx].data;
    });
    // exports --------------------
    // data -----------------------
    {
        const getOffset = (insts: Array<MyParserAstCodeInst>): number => {
            if (insts.length === 0) return 0;
            if (insts[0].opCode !== I_I32_CONST) throw new Error('expected a i32.const inst in offset expr');
            return (insts[0].data as number);
        };
        instance.store.datas.forEach(dataS => {
            const offset = dataS.type === 'active' ? getOffset(dataS.offsetExpr) : 0;
            instance.store.mems[0].data.set(dataS.data, offset);
        });
    }
    // data -----------------------
    // execute the start function
    if (compiledModule.start >= 0) {
        executor(instance.store, compiledModule.start, []);
    }
    // execute the start function
    return instance;
};
