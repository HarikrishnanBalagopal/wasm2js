import { PAGE_SIZE, MY_CTX_FN } from "../common/constants";
import { safeJSONstringify } from "../common/utils";
import {
    BLOCK_TYPE_EMPTY, DEBUG_INST_HEX_TO_NAME, I_BLOCK, I_BR, I_BR_IF, I_BR_TABLE, I_CALL,
    I_DATA_DROP,
    I_DROP, I_ELSE, I_END, I_F32_ABS, I_F32_ADD, I_F32_CONST, I_F32_CONVERT_I32_S, I_F32_CONVERT_I32_U,
    I_F32_COPYSIGN, I_F32_DIV, I_F32_FLOOR, I_F32_GE, I_F32_GT, I_F32_LE, I_F32_LOAD, I_F32_LT, I_F32_MAX,
    I_F32_MIN, I_F32_MUL, I_F32_NEG, I_F32_SQRT, I_F32_STORE, I_F32_SUB, I_F32_TRUNC, I_F64_CONST, I_F64_MUL,
    I_F64_NEAREST, I_GLOBAL_GET, I_GLOBAL_SET, I_I32_ADD, I_I32_AND, I_I32_CONST, I_I32_DIV_S, I_I32_DIV_U,
    I_I32_EQ, I_I32_EQZ, I_I32_EXTEND_8_S, I_I32_GE_S, I_I32_GE_U, I_I32_GT_S, I_I32_GT_U, I_I32_LE_S, I_I32_LE_U,
    I_I32_LOAD, I_I32_LOAD_16_S, I_I32_LOAD_16_U, I_I32_LOAD_8_S, I_I32_LOAD_8_U, I_I32_LT_S, I_I32_LT_U, I_I32_MUL,
    I_I32_NE, I_I32_OR, I_I32_REM_S, I_I32_REM_U, I_I32_ROTL, I_I32_SHL, I_I32_SHR_S, I_I32_SHR_U, I_I32_STORE,
    I_I32_STORE_16, I_I32_STORE_8, I_I32_SUB, I_I32_TRUNC_F32_S, I_I32_TRUNC_F32_U, I_I32_TRUNC_F64_U, I_I32_TRUNC_SAT_F32_S, I_I32_TRUNC_SAT_F32_U, I_I32_TRUNC_SAT_F64_S, I_I32_TRUNC_SAT_F64_U, I_I32_XOR,
    I_I64_AND,
    I_I64_CONST, I_I64_CTZ, I_I64_EQ, I_I64_EQZ, I_I64_LOAD, I_I64_NE, I_I64_OR, I_I64_STORE, I_I64_TRUNC_SAT_F32_S, I_I64_TRUNC_SAT_F32_U, I_I64_TRUNC_SAT_F64_S, I_I64_TRUNC_SAT_F64_U, I_I64_XOR, I_IF, I_LOCAL_GET, I_LOCAL_SET, I_LOCAL_TEE, I_LOOP, I_MEMORY_COPY, I_MEMORY_FILL, I_MEMORY_INIT, I_NOP, I_RETURN, I_SELECT, I_UNREACHABLE, I_VARIABLE_0XFC, I_VARIABLE_0XFD
} from "../executor/instructions";
import { ValueType } from "../executor/types";
import { PModule } from "./parser";
import { MyParserAst, MyParserAstCodeInst, MyWasmImportObject, MyWasmInstance, MyWasmModuleBlockType, MyWasmModuleGlobal, MyWasmModuleImportExportType, ParserResultType } from "./types";

type IfElseBody = {
    "blockType": number;
    "trueBody": Array<MyParserAstCodeInst>;
    "falseBody"?: Array<MyParserAstCodeInst>;
};


type CompilationContextStack = {
    is_loop: boolean;
    label: string;
};

type CompilationContext = {
    newId: number;
    func_type_idx: number;
    funcs: Array<number>;
    types: Array<MyWasmModuleBlockType>;
    stack: Array<CompilationContextStack>;
};

const newCompilationContext = (): CompilationContext => ({
    newId: 0,
    func_type_idx: -1,
    funcs: [],
    types: [],
    stack: [],
});

const range = (n: number): Array<number> => [...Array(n).keys()];

const my_stringify = (x: any) => {
    return JSON.stringify(x, (_, value) => typeof value === 'bigint' ? value.toString() : value);
};

export const compileAotHelper = async (ctx: CompilationContext, body: Array<MyParserAstCodeInst>): Promise<Array<string>> => {
    console.log('DEBUG compileAotHelper called with ctx:', JSON.stringify(ctx), 'and body:', body);
    const jsCode: Array<string> = [];
    for (let inst of body) {
        const instName = DEBUG_INST_HEX_TO_NAME[inst.opCode];
        console.log('compiling inst:', inst, instName);
        const debugData = 'data' in inst ? ' ' + my_stringify(inst.data).slice(0, 64) : '';
        jsCode.push(`// opcode: ${inst.opCode} ${instName}${debugData}`);
        // jsCode.push(`console.log('opcode: ${inst.opCode} ${instName}${debugData}');`);
        switch (inst.opCode) {
            case I_UNREACHABLE: {
                jsCode.push('throw new Error("unreachable code");');
                break;
            }
            case I_NOP: {
                break;
            }
            case I_BLOCK: {
                console.log('DEBUG block', inst.data);
                const instData = inst.data as { blockType: number; body: Array<MyParserAstCodeInst> };
                if (instData.blockType !== BLOCK_TYPE_EMPTY) {
                    if (instData.blockType === ValueType.I32) {
                        /*
                        A structured instruction can consume input and produce output on the operand stack
                        according to its annotated block type. It is given either as a type index that refers
                        to a suitable function type, or as an optional value type inline, which is a shorthand
                        for the function type: [] -> [valtype].
                        */
                        // TODO: is this correct?
                        console.log('SPECIAL CASE of I32 block type');
                        const block_idx = `block_with_result_${ctx.newId++}`;
                        ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                        const blockJsCode = await compileAotHelper(ctx, instData.body);
                        jsCode.push(`${block_idx}: {`);
                        jsCode.push(...blockJsCode.map(x => '    ' + x));
                        jsCode.push('}');
                        break;
                    }
                    throw new Error('TODO: implement non-empty block type');
                }
                const block_idx = `block_${ctx.newId++}`;
                ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                const blockJsCode = await compileAotHelper(ctx, instData.body);
                jsCode.push(`${block_idx}: {`);
                jsCode.push(...blockJsCode.map(x => '    ' + x));
                jsCode.push('}');
                // throw new Error('TODO: implement block');
                break;
            }
            case I_LOOP: {
                console.log('DEBUG loop', inst.data);
                const instData = inst.data as { blockType: number; body: Array<MyParserAstCodeInst> };
                if (instData.blockType !== BLOCK_TYPE_EMPTY) throw new Error('TODO: implement non-empty loop type');
                const block_idx = `loop_${ctx.newId++}`;
                ctx.stack.push({ 'is_loop': true, 'label': block_idx });
                const loopJsCode = await compileAotHelper(ctx, instData.body);
                jsCode.push(`${block_idx}: while (true) {`);
                jsCode.push(...loopJsCode.map(x => '    ' + x));
                jsCode.push(
                    `    break ${block_idx};`,
                    '}',
                );
                // throw new Error('TODO: implement loop');
                break;
            }
            case I_IF: {
                // console.log('I_IF', inst);
                const instData = inst.data as IfElseBody;
                const block_idx = `if_${ctx.newId++}`;
                ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                jsCode.push(`${block_idx}: if (stack.pop() !== 0) {`);
                const trueJsCode = await compileAotHelper(ctx, instData.trueBody);
                jsCode.push(...trueJsCode.map(x => '    ' + x));
                if (instData.falseBody) {
                    // console.log('***********************');
                    // console.log('***********************');
                    // console.log('stack', JSON.stringify(ctx.stack));
                    // console.log('***********************');
                    // console.log('***********************');
                    // ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                    jsCode.push('} else {');
                    const falseJsCode = await compileAotHelper(ctx, instData.falseBody);
                    jsCode.push(...falseJsCode.map(x => '    ' + x));
                    // console.log('!!!!!!!!!!!!!!!!!!!!!!!');
                    // console.log('!!!!!!!!!!!!!!!!!!!!!!!');
                    // console.log('stack', JSON.stringify(ctx.stack));
                    // console.log('!!!!!!!!!!!!!!!!!!!!!!!');
                    // console.log('!!!!!!!!!!!!!!!!!!!!!!!');
                }
                jsCode.push('}');
                break;
            }
            case I_ELSE: {
                // console.log('DEBUG I_ELSE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                break;
            }
            case I_END: {
                console.log('DEBUG I_END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> stack:', JSON.stringify(ctx.stack));
                if (ctx.stack.length === 0) throw new Error('trying to I_END with an empty stack');
                ctx.stack.pop();
                console.log('stack:', JSON.stringify(ctx.stack));
                // throw new Error('TODO: implement I_END');
                break;
            }
            case I_BR: {
                console.log('I_BR inst', inst, 'stack', JSON.stringify(ctx.stack));
                // throw new Error('TODO: implement I_BR');
                const instData = inst.data as number;
                if (ctx.stack.length === 0) {
                    console.log('I_BR inst', inst);
                    throw new Error('trying to br with an empty stack');
                }
                const targetIdx = ctx.stack.length - 1 - instData;
                const target = ctx.stack[targetIdx];
                if (targetIdx === 0) {
                    console.log('break to a function instead of a block or loop, target:', target);
                    const func_type = ctx.types[ctx.func_type_idx];
                    if (func_type.results.length === 0) jsCode.push('return;');
                    else if (func_type.results.length === 1) jsCode.push('return stack.pop();');
                    else jsCode.push(`return stack.slice(-${func_type.results.length});`);
                    break;
                }
                jsCode.push(`${target.is_loop ? 'continue' : 'break'} ${target.label};`);
                break;
            }
            case I_BR_IF: {
                // throw new Error('TODO: reimplement I_BR_IF for blocks');
                // if (inst.data !== 0) {
                //     console.log('I_BR_IF inst', inst);
                //     throw new Error('TODO: implement I_BR_IF');
                // }
                console.log('I_BR_IF inst', inst, 'stack', JSON.stringify(ctx.stack));
                const instData = inst.data as number;
                if (ctx.stack.length === 0) {
                    console.log('I_BR_IF inst', inst);
                    throw new Error('trying to br_if with an empty stack');
                }
                const targetIdx = ctx.stack.length - 1 - instData;
                const target = ctx.stack[targetIdx];
                if (targetIdx === 0) {
                    console.log('break (conditional) to a function instead of a block or loop, target:', target);
                    const func_type = ctx.types[ctx.func_type_idx];
                    if (func_type.results.length === 0) jsCode.push('if (stack.pop() !== 0) { return; }');
                    else if (func_type.results.length === 1) jsCode.push('if (stack.pop() !== 0) { return stack.pop(); }');
                    else jsCode.push(`if (stack.pop() !== 0) { return stack.slice(-${func_type.results.length}); }`);
                    break;
                }
                jsCode.push(`if (stack.pop() !== 0) { ${target.is_loop ? 'continue' : 'break'} ${target.label}; }`);
                // throw new Error('TODO: need to know if we are in a loop or block');
                break;
            }
            case I_BR_TABLE: {
                const instData = inst.data as { def: number; branches: Array<number> };
                console.log('I_BR_TABLE instData:', instData);
                if (instData.def >= ctx.stack.length) throw new Error('not enough stack elements for def branch');
                if (Math.max(...instData.branches) >= ctx.stack.length) throw new Error('not enough stack elements for the various branch');
                if (instData.branches.length === 0) {
                    console.log('DEBUG: I_BR_TABLE with only a default branch');
                    const target = ctx.stack[ctx.stack.length - 1 - instData.def];
                    jsCode.push(
                        'stack.pop();',
                        `${target.is_loop ? 'continue' : 'break'} ${target.label};`,
                    );
                    break;
                }
                console.log('DEBUG: I_BR_TABLE with multiple branches and a default branch');
                jsCode.push(
                    '{',
                    '    const target_idx = stack.pop();',
                );
                for (let bidx = 0; bidx < instData.branches.length; bidx++) {
                    const bb = instData.branches[bidx];
                    const target = ctx.stack[ctx.stack.length - 1 - bb];
                    if (bidx === 0) {
                        jsCode.push(`    if(target_idx === ${bidx}) { ${target.is_loop ? 'continue' : 'break'} ${target.label}; }`);
                    } else {
                        jsCode.push(`    else if(target_idx === ${bidx}) { ${target.is_loop ? 'continue' : 'break'} ${target.label}; }`);
                    }
                }
                const target = ctx.stack[ctx.stack.length - 1 - instData.def];
                jsCode.push(
                    `    else { ${target.is_loop ? 'continue' : 'break'} ${target.label}; }`,
                    '}',
                );
                // throw new Error('TODO: not implemented I_BR_TABLE');
                break;
            }
            case I_RETURN: {
                console.log('DEBUG I_RETURN inst:', inst);
                // https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/return
                const func_type = ctx.types[ctx.func_type_idx];
                if (func_type.results.length === 0) {
                    jsCode.push('return;');
                    break;
                }
                if (func_type.results.length === 1) {
                    jsCode.push('return stack.pop();');
                    break;
                }
                jsCode.push(`return stack.slice(-${func_type.results.length});`);
                // throw new Error('TODO: implement I_RETURN');
                break;
            }
            case I_CALL: {
                // TODO: think about how the stack works and also fix function indices??????????????????????
                console.log('I_CALL', inst, 'ctx:', JSON.stringify(ctx));
                const funcIdx = inst.data as number;
                // console.log('DEBUG funcIdx', funcIdx);
                // jsCode.push(`stack.push(func${funcIdx}());`);
                if (funcIdx >= ctx.funcs.length) throw new Error('function index is outside the range of the funcs array');
                const func_type_idx = ctx.funcs[funcIdx];
                if (func_type_idx >= ctx.types.length) throw new Error('function type index is outside the range of the types array');
                const func_type = ctx.types[func_type_idx];
                console.log('calling a function of funcIdx', funcIdx, ' func_type_idx', func_type_idx, ' func_type', func_type);
                if (func_type.params.length === 0 && func_type.results.length === 0) {
                    // no params and no results
                    jsCode.push(`func${funcIdx}();`);
                    break;
                }
                if (func_type.params.length === 0) {
                    // only results
                    if (func_type.results.length === 1) {
                        jsCode.push(`stack.push(func${funcIdx}());`);
                    } else {
                        jsCode.push(`stack.push(...func${funcIdx}());`);
                    }
                    break;
                }
                if (func_type.results.length === 0) {
                    // only params
                    if (func_type.params.length === 1) {
                        jsCode.push(`func${funcIdx}(stack.pop());`);
                    } else {
                        jsCode.push(
                            '{',
                            `    const args = stack.slice(-${func_type.params.length});`,
                            ...range(func_type.params.length).map(() => '    stack.pop();'),
                            `    func${funcIdx}(...args);`,
                            '}',
                        );
                    }
                    break;
                }
                // params and results
                if (func_type.results.length === 1) {
                    if (func_type.params.length === 1) {
                        jsCode.push(`stack.push(func${funcIdx}(stack.pop()));`);
                    } else {
                        jsCode.push(
                            '{',
                            `    const args = stack.slice(-${func_type.params.length});`,
                            ...range(func_type.params.length).map(() => '    stack.pop();'),
                            `    stack.push(func${funcIdx}(...args));`,
                            '}',
                        );
                    }
                } else {
                    if (func_type.params.length === 1) {
                        jsCode.push(`stack.push(...func${funcIdx}(stack.pop()));`);
                    } else {
                        jsCode.push(
                            '{',
                            `    const args = stack.slice(-${func_type.params.length});`,
                            ...range(func_type.params.length).map(() => '    stack.pop();'),
                            `    stack.push(...func${funcIdx}(...args));`,
                            '}',
                        );
                    }
                }
                // throw new Error('TODO: implement call');
                break;
            }
            case I_DROP: {
                jsCode.push('stack.pop();');
                break;
            }
            case I_SELECT: {
                jsCode.push(
                    '{',
                    '    const condition = stack.pop();',
                    '    const x2 = stack.pop();',
                    '    const x1 = stack.pop();',
                    '    stack.push(condition !== 0 ? x1 : x2)',
                    '}',
                )
                break;
            }
            case I_LOCAL_GET: {
                jsCode.push(`stack.push(local${inst.data});`);
                break;
            }
            case I_LOCAL_SET: {
                jsCode.push(`local${inst.data} = stack.pop();`);
                break;
            }
            case I_LOCAL_TEE: {
                jsCode.push(`local${inst.data} = stack[stack.length - 1];`);
                break;
            }
            case I_GLOBAL_GET: {
                jsCode.push(`stack.push(global${inst.data});`);
                break;
            }
            case I_GLOBAL_SET: {
                jsCode.push(`global${inst.data} = stack.pop();`);
                break;
            }
            case I_I32_LOAD: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).getInt32(0, true));`);
                break;
            }
            case I_I64_LOAD: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 8).getBigInt64(0, true));`);
                break;
            }
            case I_F32_LOAD: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).getFloat32(0, true));`);
                break;
            }
            case I_I32_LOAD_8_S: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 1).getInt8(0));`);
                break;
            }
            case I_I32_LOAD_8_U: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 1).getUint8(0));`);
                break;
            }
            case I_I32_LOAD_16_S: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 2).getInt16(0, true));`);
                break;
            }
            case I_I32_LOAD_16_U: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 2).getUint16(0, true));`);
                break;
            }
            case I_I32_STORE: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    `    new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).setInt32(0, x, true);`,
                    '}',
                );
                break;
            }
            case I_I64_STORE: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    `    new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 8).setBigUint64(0, BigInt(x), true);`,
                    '}',
                );
                break;
            }
            case I_F32_STORE: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    `    new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).setFloat32(0, x, true);`,
                    '}',
                );
                break;
            }
            case I_I32_STORE_8: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    `    memory0[${instData.offset} + stack.pop()] = x;`,
                    '}',
                );
                break;
            }
            case I_I32_STORE_16: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    `    new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 2).setInt16(0, x, true);`,
                    '}',
                );
                break;
            }
            case I_I32_CONST: {
                jsCode.push(`stack.push(${inst.data});`);
                break;
            }
            case I_I64_CONST: {
                // console.log('inst', inst);
                // throw new Error('TODO: implement I_I64_CONST');
                jsCode.push(`stack.push(${inst.data});`);
                break;
            }
            case I_F32_CONST: {
                jsCode.push(`stack.push(${inst.data});`);
                break;
            }
            case I_F64_CONST: {
                jsCode.push(`stack.push(${inst.data});`);
                break;
            }
            case I_I32_EQZ: {
                jsCode.push('stack.push(stack.pop() === 0 ? 1 : 0);');
                break;
            }
            case I_I32_EQ: {
                jsCode.push('stack.push(stack.pop() === stack.pop() ? 1 : 0);');
                break;
            }
            case I_I32_NE: {
                jsCode.push('stack.push(stack.pop() !== stack.pop() ? 1 : 0);');
                break;
            }
            case I_I32_LT_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() < x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_LT_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() < x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_GT_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() > x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_GT_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() > x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_LE_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() <= x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_LE_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() <= x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_GE_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >= x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_GE_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >= x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I64_EQZ: {
                jsCode.push('stack.push(stack.pop() === 0 ? 1 : 0);');
                break;
            }
            case I_I64_EQ: {
                jsCode.push('stack.push(stack.pop() === stack.pop() ? 1 : 0);');
                break;
            }
            case I_I64_NE: {
                jsCode.push('stack.push(stack.pop() !== stack.pop() ? 1 : 0);');
                break;
            }
            case I_F32_LT: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() < x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_F32_GT: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() > x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_F32_LE: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() <= x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_F32_GE: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >= x ? 1 : 0);',
                    '}',
                );
                break;
            }
            case I_I32_ADD: {
                jsCode.push('stack.push(stack.pop() + stack.pop());');
                break;
            }
            case I_I32_SUB: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() - x);',
                    '}',
                );
                break;
            }
            case I_I32_MUL: {
                jsCode.push('stack.push(stack.pop() * stack.pop());');
                break;
            }
            case I_I32_DIV_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(Math.floor(stack.pop() / x));',
                    '}',
                );
                break;
            }
            case I_I32_DIV_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(Math.floor(stack.pop() / x));',
                    '}',
                );
                break;
            }
            case I_I32_REM_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() % x);',
                    '}',
                );
                break;
            }
            case I_I32_REM_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() % x);',
                    '}',
                );
                break;
            }
            case I_I32_AND: {
                jsCode.push('stack.push(stack.pop() & stack.pop());');
                break;
            }
            case I_I32_OR: {
                jsCode.push('stack.push(stack.pop() | stack.pop());');
                break;
            }
            case I_I32_XOR: {
                jsCode.push('stack.push(stack.pop() ^ stack.pop());');
                break;
            }
            case I_I32_SHL: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() << x);',
                    '}',
                );
                break;
            }
            case I_I32_SHR_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >> x);',
                    '}',
                );
                break;
            }
            case I_I32_SHR_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >>> x);',
                    '}',
                );
                break;
            }
            case I_I32_ROTL: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const v = stack.pop();',
                    '    stack.push((v << x) | (v >>> (32-x)));',
                    '}',
                );
                break;
            }
            case I_I64_CTZ: {
                jsCode.push(`stack.push(${MY_CTX_FN}(stack.pop()));`);
                break;
            }
            case I_I64_AND: {
                jsCode.push('stack.push(stack.pop() & stack.pop());');
                break;
            }
            case I_I64_OR: {
                jsCode.push('stack.push(stack.pop() | stack.pop());');
                break;
            }
            case I_I64_XOR: {
                jsCode.push('stack.push(stack.pop() ^ stack.pop());');
                break;
            }
            case I_F32_ABS: {
                jsCode.push('stack.push(Math.abs(stack.pop()));');
                break;
            }
            case I_F32_NEG: {
                jsCode.push('stack.push(-stack.pop());');
                break;
            }
            case I_F32_FLOOR: {
                jsCode.push('stack.push(Math.floor(stack.pop()));');
                break;
            }
            case I_F32_TRUNC: {
                jsCode.push('stack.push(Math.trunc(stack.pop()));');
                break;
            }
            case I_F32_SQRT: {
                jsCode.push('stack.push(Math.sqrt(stack.pop()));');
                break;
            }
            case I_F32_ADD: {
                jsCode.push('stack.push(stack.pop() + stack.pop());');
                break;
            }
            case I_F32_SUB: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() - x);',
                    '}',
                );
                break;
            }
            case I_F32_MUL: {
                jsCode.push('stack.push(stack.pop() * stack.pop());');
                break;
            }
            case I_F32_DIV: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() / x);',
                    '}',
                );
                break;
            }
            case I_F32_MIN: {
                jsCode.push(
                    '{',
                    '    const x2 = stack.pop();',
                    '    const x1 = stack.pop();',
                    '    stack.push(x1 < x2 ? x1 : x2);',
                    '}',
                );
                break;
            }
            case I_F32_MAX: {
                jsCode.push(
                    '{',
                    '    const x2 = stack.pop();',
                    '    const x1 = stack.pop();',
                    '    stack.push(x1 > x2 ? x1 : x2);',
                    '}',
                );
                break;
            }
            case I_F32_COPYSIGN: {
                jsCode.push(
                    '{',
                    '    const x2 = stack.pop();',
                    '    const x1 = stack.pop();',
                    '    stack.push(((x1 >= 0 && x2 >= 0) || (x1 < 0 && x2 < 0)) ? x1 : -x1);',
                    '}',
                );
                break;
            }
            case I_F64_NEAREST: {
                jsCode.push('stack.push(Math.round(stack.pop()));');
                break;
            }
            case I_F64_MUL: {
                jsCode.push('stack.push(stack.pop() * stack.pop());');
                break;
            }
            case I_I32_TRUNC_F32_S: {
                jsCode.push('stack.push(Math.trunc(stack.pop()));');
                break;
            }
            case I_I32_TRUNC_F32_U: {
                jsCode.push('stack.push(Math.trunc(stack.pop()));');
                break;
            }
            case I_I32_TRUNC_F64_U: {
                jsCode.push('stack.push(Math.trunc(stack.pop()));');
                break;
            }
            case I_F32_CONVERT_I32_S: {
                // TODO: nothing to do? JS numbers are already floats?
                break;
            }
            case I_F32_CONVERT_I32_U: {
                // TODO: nothing to do? JS numbers are already floats?
                break;
            }
            case I_I32_EXTEND_8_S: {
                // TODO: nothing to do here? already 32 bit or higher?
                // console.log('inst', inst);
                // throw new Error('TODO: implement I_I32_EXTEND_8_S');
                break;
            }
            case I_VARIABLE_0XFC: {
                const instData = inst.data as Array<number>;
                console.log('TODO: I_VARIABLE_0XFC instData:', instData);
                if (!Array.isArray(instData) || instData.length === 0) throw new Error('invalid I_VARIABLE_0XFC');
                const xx = instData[0];
                if (xx === I_I32_TRUNC_SAT_F32_S) {
                    throw new Error('TODO: implement I_I32_TRUNC_SAT_F32_S');
                }
                if (xx === I_I32_TRUNC_SAT_F32_U) {
                    throw new Error('TODO: implement I_I32_TRUNC_SAT_F32_U');
                }
                if (xx === I_I32_TRUNC_SAT_F64_S) {
                    throw new Error('TODO: implement I_I32_TRUNC_SAT_F64_S');
                }
                if (xx === I_I32_TRUNC_SAT_F64_U) {
                    throw new Error('TODO: implement I_I32_TRUNC_SAT_F64_U');
                }
                if (xx === I_I64_TRUNC_SAT_F32_S) {
                    throw new Error('TODO: implement I_I64_TRUNC_SAT_F32_S');
                }
                if (xx === I_I64_TRUNC_SAT_F32_U) {
                    throw new Error('TODO: implement I_I64_TRUNC_SAT_F32_U');
                }
                if (xx === I_I64_TRUNC_SAT_F64_S) {
                    throw new Error('TODO: implement I_I64_TRUNC_SAT_F64_S');
                }
                if (xx === I_I64_TRUNC_SAT_F64_U) {
                    throw new Error('TODO: implement I_I64_TRUNC_SAT_F64_U');
                }

                if (xx === I_MEMORY_INIT) {
                    throw new Error('TODO: implement I_MEMORY_INIT');
                }
                if (xx === I_DATA_DROP) {
                    throw new Error('TODO: implement I_DATA_DROP');
                }
                if (xx === I_MEMORY_COPY) {
                    throw new Error('TODO: implement I_MEMORY_COPY');
                }
                if (xx === I_MEMORY_FILL) {
                    jsCode.push(
                        '{',
                        '    const n = stack.pop();',
                        '    const value = stack.pop();',
                        '    const dest = stack.pop();',
                        '    memory0.fill(value, dest, dest + n);',
                        '}',
                    );
                    break;
                    // throw new Error('TODO: implement I_MEMORY_FILL');
                }

                throw new Error('TODO: implement I_VARIABLE_0XFC');
                break;
            }
            case I_VARIABLE_0XFD: {
                throw new Error('TODO: implement I_VARIABLE_0XFD');
                break;
            }
            default: {
                jsCode.push(`// TODO: unknown op code, cannot compile, inst: ${safeJSONstringify(inst)}`);
                // console.log(jsCode.join('\n'));
                throw new Error(`unknown op code, cannot compile, inst: ${safeJSONstringify(inst)}`);
            }
        }
    }
    return jsCode;
};

export const compileAot = async (wasmBytes: Uint8Array): Promise<string> => {
    //, importObject: MyWasmImportObject): Promise<string> => {
    // console.log('DEBUG compileAot called with importObject:', importObject);
    console.log('DEBUG compileAot called with wasmBytes:', wasmBytes);
    const result = PModule(wasmBytes);
    if (result.type !== ParserResultType.RESULT) throw new Error(`parsing failed. ${safeJSONstringify(result)}`);
    const ast: MyParserAst = result.result;
    console.log('DEBUG >>>>>>>>>> ast:', ast);

    // Total JS Code (lines)
    const allJsCodeLines = [];

    // imports
    const importJsCode: Array<string> = [];

    // TODO: imported tables

    // imported globals
    const importedGlobals = ast.imports.filter(x => x.type === MyWasmModuleImportExportType.GLOBAL);
    const importedGlobalsLength = importedGlobals.length;
    importJsCode.push(...importedGlobals.map((g, i) => {
        // console.log('!!!!!!!!!! importedGlobals g:', g);
        return `let global${i} = import_object['${g.module}']['${g.name}'];`;
        // {
        //     'module': "",
        //     'name': "rate",
        //     'type': 3,
        //     'typeIdx': [127, 0],
        // }
    }));

    // imported memories
    const importedMemories = ast.imports.filter(x => x.type === MyWasmModuleImportExportType.MEM);
    if (importedMemories.length > 0) {
        if (importedMemories.length > 1) throw new Error('maximum one memory is supported as of now');
        const importedMemory = importedMemories[0];
        console.log('DEBUG importedMemory', importedMemory);
        importJsCode.push(
            `if (!import_object['${importedMemory.module}'] || !import_object['${importedMemory.module}']['${importedMemory.name}']) {`,
            `    throw new Error('failed to find the memory import in the import object: ${importedMemory.module} ${importedMemory.name}');`,
            '}',
            `const memory0 = import_object['${importedMemory.module}']['${importedMemory.name}'];`,
        );
    }

    // imported functions
    const importedFuncs = ast.imports.filter(x => x.type === MyWasmModuleImportExportType.FUNC);
    const importedFuncsTypeIdxs = importedFuncs.map(x => x.typeIdx);
    const importedFuncsLength = importedFuncs.length;
    console.log('importedFuncsTypeIdxs', importedFuncsTypeIdxs, 'importedFuncsLength', importedFuncsLength);
    importedFuncs.forEach((x, i) => {
        importJsCode.push(
            `if (!import_object['${x.module}'] || !import_object['${x.module}']['${x.name}']) {`,
            `    throw new Error('failed to find the function import in the import object: ${x.module} ${x.name}');`,
            '}',
            `const func${i} = import_object['${x.module}']['${x.name}'];`,
            `const ${MY_CTX_FN} = (x) => { const s = x.toString(2); let c = 0; for(let i = s.length-1; i >= 0; i--,c++){if(s[i]!=='0')break;} return c; };`, // TODO: is this the best place for it?
        );
    });
    console.log('importJsCode', importJsCode);
    allJsCodeLines.push(...importJsCode);

    // globals
    const eval_global_expr = (g: MyWasmModuleGlobal): number => {
        if (g.expr.length === 0) return 0;
        if (g.expr.length !== 2) throw new Error('bad expression');
        const inst = g.expr[0];
        if (
            inst.opCode === I_I32_CONST ||
            inst.opCode === I_I64_CONST ||
            inst.opCode === I_F32_CONST ||
            inst.opCode === I_F64_CONST
        ) {
            return inst.data as number;
        } else {
            throw new Error('bad expression, invalid opCode');
        }
    };
    const globalsJsCode = ast.globals.map((g, i) => `${g.mut ? 'let' : 'const'} global${importedGlobalsLength + i} = ${eval_global_expr(g)};`);
    allJsCodeLines.push(...globalsJsCode);

    // built-in memories
    const memJsCode = ast.mems.map((m, i) => `const memory${i} = new Uint8Array(${m.min} * ${PAGE_SIZE});`);
    allJsCodeLines.push(...memJsCode);

    // data sections
    const dataJsCode = ast.datas.map(x => {
        console.log('ast.datas.map(x', x);
        if (x.type !== 'active') throw new Error('TODO: support passive data sections');
        const offset = x.offsetExpr[0].data as number;
        return `memory0.set([${x.data}], ${offset});`;
    });
    console.log('dataJsCode', dataJsCode);
    allJsCodeLines.push(...dataJsCode);

    // function bodies
    for (let i = 0; i < ast.funcs.length; i++) {
        const func_type_idx = ast.funcs[i];
        const func_type = ast.types[func_type_idx];
        const code = ast.codes[i];
        const localsJsCode = code.locals.map((x, i) => `    let local${func_type.params.length + i} = 0;`);
        console.log('----------------------------------------------');
        console.log('DEBUG compiling function, i:', i, 'func_type:', func_type, 'code:', code);
        const func_params = func_type.params.length === 0 ? '' : range(func_type.params.length).map(x => `local${x}`).join(', ');
        const funcJSCode = [
            `function func${importedFuncsLength + i}(${func_params}) {`,
            // `    console.log("compiledFunc${i}");`,
            '    const stack = [];',
            ...localsJsCode,
        ];
        const ctx = newCompilationContext();
        ctx.func_type_idx = func_type_idx;
        ctx.funcs = [
            ...importedFuncsTypeIdxs,
            ...ast.funcs,
        ];
        ctx.types = ast.types;
        ctx.stack.push({ is_loop: false, label: `top_level_func_${i}` });
        const funcBodyJsCode = await compileAotHelper(ctx, code.body);
        funcJSCode.push(...funcBodyJsCode.map(x => '    ' + x));
        if (func_type.results.length > 0) {
            if (func_type.results.length === 1) {
                funcJSCode.push('    return stack.pop();');
            } else {
                funcJSCode.push(`    return stack.slice(-${func_type.results.length});`);
            }
        }
        funcJSCode.push('}');
        // console.log('DEBUG compiled function js code:');
        // console.log(jsCode.join('\n'));
        allJsCodeLines.push(...funcJSCode);
        // exportJsCode.push(`    compiledFunc${i},`);
    }

    // exports
    const exportJsCode = [
        'const wasmExports = {',
        ...ast.exports.filter(x => x.type === MyWasmModuleImportExportType.FUNC).map(x => `    "${x.name}": func${x.idx},`),
        ...ast.exports.filter(x => x.type === MyWasmModuleImportExportType.MEM).map(x => `    "${x.name}": memory${x.idx},`),
        '};',
    ];
    allJsCodeLines.push(...exportJsCode);

    // start
    if (ast.start >= 0) {
        allJsCodeLines.push(`func${ast.start}();`);
    }
    // start

    const finalJSCode = '(function (import_object) {\n    ' + allJsCodeLines.join('\n    ') + '\n    return { exports: wasmExports };\n})';
    // console.log('DEBUG final compiled global module code:');
    // console.log(finalIffeJsCode);
    return finalJSCode;
    // const evaluatedJsCode = eval(finalIffeJsCode);
    // console.log('t2', t2);
    // return evaluatedJsCode;
};

export const instantiateAot = async (compiledJSCode: string, importObject: MyWasmImportObject): Promise<MyWasmInstance> => {
    const createInstance = eval(compiledJSCode);
    return createInstance(importObject);
};
