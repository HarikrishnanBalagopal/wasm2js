import { ValueType } from "../common/types";
export type Limits = {
    min: number;
    max?: number;
}
export type FuncType = {
    params: Array<unknown>;
    results: Array<unknown>;
}
export enum ParserResultType {
    RESULT = 'result',
    ERROR = 'error',
}
export type ParserResult<T> = {
    type: ParserResultType.RESULT;
    rest: Uint8Array;
    result: T;
} | {
    type: ParserResultType.ERROR;
    rest: Uint8Array;
    error: [string, Uint8Array];
}
export type Parser<T> = (ts: Uint8Array) => ParserResult<T>;
export const EOF = 'EOF';
export type U32Obj = { type: 'u32', value: bigint };
export interface MyParserAstCodeInst {
    opCode: number;
    data?: unknown;
}
export enum MyWasmModuleImportExportType {
    FUNC = 0x00,
    TABLE = 0x01,
    MEM = 0x02,
    GLOBAL = 0x03,
};
export type MyWasmModuleImport = {
    type: MyWasmModuleImportExportType;
    typeIdx: number;
    module: string;
    name: string;
};
export type MyWasmModuleExport = {
    type: MyWasmModuleImportExportType;
    name: string;
    idx: number;
};
export type MyWasmModuleFuncInst = {
    opCode: number;
    data?: unknown;
};
export type HostFunc = (args: Array<number | bigint>) => Array<number | bigint>;
export type MyWasmModuleFunc = {
    typeIdx: number;
    locals: Array<ValueType>;
    body: Array<MyWasmModuleFuncInst>;
    hostFunc?: HostFunc;
};
export type MyWasmModuleBlockType = {
    params: Array<ValueType>;
    results: Array<ValueType>;
};
export type MyWasmModuleMem = Limits;
export type MyParserAstData = {
    type: 'active',
    offsetExpr: Array<MyParserAstCodeInst>,
    data: Uint8Array,
} | {
    type: 'passive',
    data: Uint8Array,
};
export type MyWasmModule = {
    imports: Array<MyWasmModuleImport>;
    exports: Array<MyWasmModuleExport>;
    funcs: Array<MyWasmModuleFunc>;
    types: Array<MyWasmModuleBlockType>;
    mems: Array<MyWasmModuleMem>;
    datas: Array<MyParserAstData>;
    start: number;
};
export type MyWasmInstanceStoreMem = MyWasmModuleMem & { data: Uint8Array };
// https://webassembly.github.io/spec/core/exec/runtime.html#store
export type MyWasmInstanceStore = {
    funcs: Array<MyWasmModuleFunc>;
    tables: Array<unknown>;
    mems: Array<MyWasmInstanceStoreMem>;
    globals: Array<unknown>;
    elems: Array<unknown>;
    datas: Array<MyParserAstData>;
    // extras:
    types: Array<MyWasmModuleBlockType>;
};
export type MyWasmInstance = {
    exports: { [name: string]: Function | Uint8Array };
    store: MyWasmInstanceStore;
};
export type MyWasmImportObject = {
    [mod: string]: {
        [name: string]: Function;
    }
};
export type MyWasmModuleGlobal = {
    type: ValueType;
    mut: boolean;
    expr: Array<MyWasmModuleFuncInst>;
};
export type MyParserAstCode = { locals: Array<ValueType>; body: Array<MyParserAstCodeInst> };
export type MyParserAstMem = Limits;
export type MyParserAst = {
    type: 'module';
    types: Array<MyWasmModuleBlockType>;
    imports: Array<MyWasmModuleImport>;
    funcs: Array<number>;
    tables: Array<unknown>;
    mems: Array<MyParserAstMem>;
    globals: Array<MyWasmModuleGlobal>;
    exports: Array<MyWasmModuleExport>;
    start: number;
    codes: Array<MyParserAstCode>;
    datas: Array<MyParserAstData>;
};

export type MyCompiledInstance = {
    exports: {
        memory0: Uint8Array;
        compiledFunc0: Function;
        compiledFunc1: Function;
    }
};
