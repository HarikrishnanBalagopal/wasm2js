export enum ValueType {
    I32 = 0x7F,
    I64 = 0x7E,
    F32 = 0x7D,
    F64 = 0x7C,
    V128 = 0x7B,
    FuncRef = 0x70,
    ExternRef = 0x6F,
}
export type TableType = ValueType.FuncRef | ValueType.ExternRef;
export const DEBUG_VALUE_TYPE_NAME_TO_HEX = {
    'I32': 0x7F,
    'I64': 0x7E,
    'F32': 0x7D,
    'F64': 0x7C,
    'V128': 0x7B,
    'FuncRef': 0x70,
    'ExternRef': 0x6F,
};
export const DEBUG_VALUE_TYPE_HEX_TO_NAME = Object.fromEntries(Object.entries(DEBUG_VALUE_TYPE_NAME_TO_HEX).map(([x, y]) => [y, x]));
export type BranchTable = {
    branches: Array<number>;
    def: number;
};
export type Instruction = {
    opCode: number;
    data?: unknown;
};
export enum StackEntryType {
    VALUE,
    LABEL,
    FRAME,
}
export type FrameLocal = {
    valueType: ValueType;
    value: number | bigint;
};
export type StackValue = {
    type: StackEntryType.VALUE;
    valueType: ValueType;
    value: number | bigint;
};
export type StackLabel = {
    type: StackEntryType.LABEL;
    prevLabelIdx: number;
    instIdx: number;
};
export type StackFrame = {
    type: StackEntryType.FRAME;
    prevFrameIdx: number;
    funcIdx: number;
    locals: Array<FrameLocal>;
};
export type StackEntry = StackValue | StackLabel | StackFrame;
export type Stack = Array<StackEntry>;
export type ExecResult = {
    stack: Stack;
};
export type Code = {
    locals: Array<FrameLocal>;
    body: Array<Instruction>;
};
export type FuncType = {
    type: 'functype';
    value: { params: Array<number>, results: Array<number> };
};
