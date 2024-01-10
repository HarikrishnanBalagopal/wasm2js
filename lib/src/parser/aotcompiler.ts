import {
    BLOCK_TYPE_EMPTY, DEBUG_INST_HEX_TO_NAME, I_BLOCK, I_BR, I_BR_IF, I_BR_TABLE, I_CALL,
    I_DATA_DROP, I_DROP, I_ELSE, I_END, I_F32_ABS, I_F32_ADD, I_F32_CONST, I_F32_CONVERT_I32_S, I_F32_CONVERT_I32_U,
    I_F32_COPYSIGN, I_F32_DIV, I_F32_FLOOR, I_F32_GE, I_F32_GT, I_F32_LE, I_F32_LOAD, I_F32_LT, I_F32_MAX,
    I_F32_MIN, I_F32_MUL, I_F32_NE, I_F32_NEG, I_F32_SQRT, I_F32_STORE, I_F32_SUB, I_F32_TRUNC, I_F64_CONST, I_F64_MUL,
    I_F64_NEAREST, I_GLOBAL_GET, I_GLOBAL_SET, I_I32_ADD, I_I32_AND, I_I32_CONST, I_I32_CTZ, I_I32_DIV_S, I_I32_DIV_U,
    I_I32_EQ, I_I32_EQZ, I_I32_EXTEND_8_S, I_I32_GE_S, I_I32_GE_U, I_I32_GT_S, I_I32_GT_U, I_I32_LE_S, I_I32_LE_U,
    I_I32_LOAD, I_I32_LOAD_16_S, I_I32_LOAD_16_U, I_I32_LOAD_8_S, I_I32_LOAD_8_U, I_I32_LT_S, I_I32_LT_U, I_I32_MUL,
    I_I32_NE, I_I32_OR, I_I32_REM_S, I_I32_REM_U, I_I32_ROTL, I_I32_SHL, I_I32_SHR_S, I_I32_SHR_U, I_I32_STORE,
    I_I32_STORE_16, I_I32_STORE_8, I_I32_SUB, I_I32_TRUNC_F32_S, I_I32_TRUNC_F32_U, I_I32_TRUNC_F64_U,
    I_I32_TRUNC_SAT_F32_S, I_I32_TRUNC_SAT_F32_U, I_I32_TRUNC_SAT_F64_S, I_I32_TRUNC_SAT_F64_U, I_I32_WRAP_I64,
    I_I32_XOR, I_I64_ADD,
    I_I64_AND, I_I64_CONST, I_I64_CTZ, I_I64_EQ, I_I64_EQZ, I_I64_EXTEND_I32_U, I_I64_LOAD, I_I64_LOAD_32_U, I_I64_MUL,
    I_I64_NE, I_I64_OR, I_I64_POPCNT, I_I64_SHL, I_I64_SHR_S, I_I64_SHR_U, I_I64_STORE, I_I64_STORE_32, I_I64_SUB,
    I_I64_TRUNC_SAT_F32_S, I_I64_TRUNC_SAT_F32_U, I_I64_TRUNC_SAT_F64_S, I_I64_TRUNC_SAT_F64_U, I_I64_XOR, I_IF,
    I_LOCAL_GET, I_LOCAL_SET, I_LOCAL_TEE, I_LOOP, I_MEMORY_COPY, I_MEMORY_FILL, I_MEMORY_INIT, I_NOP, I_RETURN,
    I_SELECT, I_UNREACHABLE, I_VARIABLE_0XFC, I_VARIABLE_0XFD,
} from "../common/instructions.js";
import {
    MyParserAst, MyParserAstCodeInst, MyWasmImportObject, MyWasmInstance,
    MyWasmModuleBlockType, MyWasmModuleGlobal, MyWasmModuleImportExportType, ParserResultType,
} from "./types.js";
import {
    PAGE_SIZE, MY_CTZ_FN, MOST_NEG_S_I64, MOST_POS_U_I64, MOST_POS_S_I64,
    MOST_NEG_S_I32, MOST_POS_S_I32, MOST_POS_U_I32,
} from "../common/constants.js";
import { safeJSONstringify } from "../common/utils.js";
import { ValueType } from "../common/types.js";
import { PModule } from "./parser.js";

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

export const compileAotHelper = async (
    ctx: CompilationContext,
    body: Array<MyParserAstCodeInst>,
    debug_mode: boolean = false,
    strict_maths: boolean = false,
): Promise<Array<string>> => {
    if (debug_mode) {
        console.log('DEBUG compileAotHelper called with ctx:', JSON.stringify(ctx), 'and body:', body);
    }
    const jsCode: Array<string> = [];
    for (let inst of body) {
        if (debug_mode) {
            const instName = DEBUG_INST_HEX_TO_NAME[inst.opCode];
            console.log('compiling inst:', inst, instName);
            const debugData = 'data' in inst ? ' ' + my_stringify(inst.data).slice(0, 64) : '';
            jsCode.push(`// opcode: ${inst.opCode} ${instName}${debugData}`);
            // jsCode.push(`console.log('opcode: ${inst.opCode} ${instName}${debugData}');`);
        }
        switch (inst.opCode) {
            case I_UNREACHABLE: {
                jsCode.push('throw new Error("unreachable code");');
                break;
            }
            case I_NOP: {
                break;
            }
            case I_BLOCK: {
                if (debug_mode) console.log('DEBUG block', inst.data);
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
                        console.log('Warning: SPECIAL CASE of I32 block type');
                        const block_idx = `block_with_result_${ctx.newId++}`;
                        ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                        const blockJsCode = await compileAotHelper(ctx, instData.body, debug_mode, strict_maths);
                        jsCode.push(`${block_idx}: {`);
                        jsCode.push(...blockJsCode.map(x => '    ' + x));
                        jsCode.push('}');
                        break;
                    }
                    throw new Error('TODO: implement non-empty block type');
                }
                const block_idx = `block_${ctx.newId++}`;
                ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                const blockJsCode = await compileAotHelper(ctx, instData.body, debug_mode, strict_maths);
                jsCode.push(`${block_idx}: {`);
                jsCode.push(...blockJsCode.map(x => '    ' + x));
                jsCode.push('}');
                // throw new Error('TODO: implement block');
                break;
            }
            case I_LOOP: {
                if (debug_mode) console.log('DEBUG loop', inst.data);
                const instData = inst.data as { blockType: number; body: Array<MyParserAstCodeInst> };
                if (instData.blockType !== BLOCK_TYPE_EMPTY) throw new Error('TODO: implement non-empty loop type');
                const block_idx = `loop_${ctx.newId++}`;
                ctx.stack.push({ 'is_loop': true, 'label': block_idx });
                const loopJsCode = await compileAotHelper(ctx, instData.body, debug_mode, strict_maths);
                // const rand_id = Math.floor(Math.random() * 10000);
                // const loop_counter_var = `__my_debug_loop_counter_${rand_id}`;
                // jsCode.push(`let ${loop_counter_var} = 0;`);
                jsCode.push(`${block_idx}: while (true) {`);
                // jsCode.push(`    if(${loop_counter_var} % 1000 === 0) console.log("I_LOOP DEBUG ${loop_counter_var}", ${loop_counter_var});`);
                // jsCode.push(`    ${loop_counter_var}++;`);
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
                const trueJsCode = await compileAotHelper(ctx, instData.trueBody, debug_mode, strict_maths);
                jsCode.push(...trueJsCode.map(x => '    ' + x));
                if (instData.falseBody) {
                    // console.log('***********************');
                    // console.log('***********************');
                    // console.log('stack', JSON.stringify(ctx.stack));
                    // console.log('***********************');
                    // console.log('***********************');
                    // ctx.stack.push({ 'is_loop': false, 'label': block_idx });
                    jsCode.push('} else {');
                    const falseJsCode = await compileAotHelper(ctx, instData.falseBody, debug_mode, strict_maths);
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
                if (debug_mode) console.log('DEBUG I_END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> stack:', JSON.stringify(ctx.stack));
                if (ctx.stack.length === 0) throw new Error('trying to I_END with an empty stack');
                ctx.stack.pop();
                if (debug_mode) console.log('stack:', JSON.stringify(ctx.stack));
                // throw new Error('TODO: implement I_END');
                break;
            }
            case I_BR: {
                if (debug_mode) console.log('I_BR inst', inst, 'stack', JSON.stringify(ctx.stack));
                // throw new Error('TODO: implement I_BR');
                const instData = inst.data as number;
                if (ctx.stack.length === 0) {
                    if (debug_mode) console.log('I_BR inst', inst);
                    throw new Error('trying to br with an empty stack');
                }
                const targetIdx = ctx.stack.length - 1 - instData;
                const target = ctx.stack[targetIdx];
                if (targetIdx === 0) {
                    console.log('I_BR break to a function instead of a block or loop, target:', target);
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
                if (debug_mode) console.log('I_BR_IF inst', inst, 'stack', JSON.stringify(ctx.stack));
                const instData = inst.data as number;
                if (ctx.stack.length === 0) {
                    if (debug_mode) console.log('I_BR_IF inst', inst);
                    throw new Error('trying to br_if with an empty stack');
                }
                const targetIdx = ctx.stack.length - 1 - instData;
                const target = ctx.stack[targetIdx];
                if (targetIdx === 0) {
                    if (debug_mode) console.log('I_BR_IF break (conditional) to a function instead of a block or loop, target:', target);
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
                if (debug_mode) console.log('I_BR_TABLE instData:', instData);
                if (instData.def >= ctx.stack.length) throw new Error('not enough stack elements for def branch');
                if (Math.max(...instData.branches) >= ctx.stack.length) throw new Error('not enough stack elements for the various branch');
                if (instData.branches.length === 0) {
                    if (debug_mode) console.log('DEBUG: I_BR_TABLE with only a default branch');
                    const target = ctx.stack[ctx.stack.length - 1 - instData.def];
                    jsCode.push(
                        'stack.pop();',
                        `${target.is_loop ? 'continue' : 'break'} ${target.label};`,
                    );
                    break;
                }
                if (debug_mode) console.log('DEBUG: I_BR_TABLE with multiple branches and a default branch');
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
                // console.log('DEBUG I_RETURN inst:', inst);
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
                if (debug_mode) console.log('I_CALL', inst, 'ctx:', JSON.stringify(ctx));
                const funcIdx = inst.data as number;
                // console.log('DEBUG funcIdx', funcIdx);
                // jsCode.push(`stack.push(func${funcIdx}());`);
                if (funcIdx >= ctx.funcs.length) throw new Error('function index is outside the range of the funcs array');
                const func_type_idx = ctx.funcs[funcIdx];
                if (func_type_idx >= ctx.types.length) throw new Error('function type index is outside the range of the types array');
                const func_type = ctx.types[func_type_idx];
                if (debug_mode) console.log('I_CALL calling a function of funcIdx', funcIdx, ' func_type_idx', func_type_idx, ' func_type', func_type);
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
                            // '    console.log("I_CALL DEBUG args:", args);', // TODO: DEBUG
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
                            // '    console.log("I_CALL DEBUG args:", args);', // TODO: DEBUG
                            ...range(func_type.params.length).map(() => '    stack.pop();'),
                            // `    stack.push(func${funcIdx}(...args));`,
                            `    const result = func${funcIdx}(...args);`,
                            '    stack.push(result);', // TODO: DEBUG
                            // '    console.log("I_CALL DEBUG result:", result);', // TODO: DEBUG
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
                    '    stack.push(condition !== 0 ? x1 : x2);',
                    '}',
                )
                break;
            }
            case I_LOCAL_GET: {
                // jsCode.push(`stack.push(local${inst.data});`);
                // jsCode.push(`if (${inst.data} === 2) { console.log("I_LOCAL_GET DEBUG local${inst.data}", local${inst.data}); }`);
                jsCode.push(`stack.push(local${inst.data});`);
                break;
            }
            case I_LOCAL_SET: {
                // jsCode.push(`local${inst.data} = stack.pop();`);
                jsCode.push('{');
                jsCode.push(`    local${inst.data} = stack.pop();`);
                // jsCode.push(`    if (${inst.data} === 2) { console.log("I_LOCAL_SET local${inst.data}", local${inst.data}); }`);
                // jsCode.push(`    console.log("I_LOCAL_SET local${inst.data}", local${inst.data});`);
                jsCode.push(`    if(local${inst.data} < ${MOST_NEG_S_I64}n) throw new Error('I_LOCAL_SET DEBUG local${inst.data} less than most negative');`);
                jsCode.push('}');
                break;
            }
            case I_LOCAL_TEE: {
                jsCode.push(`local${inst.data} = stack[stack.length - 1];`);
                break;
            }
            case I_GLOBAL_GET: {
                // jsCode.push(`stack.push(global${inst.data});`);
                jsCode.push('{');
                jsCode.push(`    const g = global${inst.data};`);
                jsCode.push('    stack.push(g);');
                // jsCode.push('    console.log("I_GLOBAL_GET g", g);');
                jsCode.push(`    if(g < ${MOST_NEG_S_I64}n) throw new Error('I_GLOBAL_GET g less than most negative');`);
                jsCode.push('}');
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
                jsCode.push('{');
                jsCode.push(`    const x = stack.pop();`);
                jsCode.push(`    const o = ${instData.offset};`);
                jsCode.push('    try {');
                // jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).getFloat32(0, true));`);
                jsCode.push(`        stack.push(new DataView(memory0.buffer, o + x, 4).getFloat32(0, true));`);
                jsCode.push('    } catch(e) {');
                // jsCode.push('        throw new Error(`failed on I_F32_LOAD ${e}`);');
                // jsCode.push(`        console.log('x', x);`);
                // jsCode.push(`        console.log('o', o);`);
                // jsCode.push(`        console.log('memory0', memory0);`);
                // jsCode.push('        debugger;');
                jsCode.push('        throw new Error("DEBUG getFloat32");');
                jsCode.push('    }');
                jsCode.push('}');
                break;
            }
            case I_I32_LOAD_8_S: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 1).getInt8(0));`);
                // jsCode.push('console.log("I_I32_LOAD_8_S DEBUG stack top:", stack[stack.length-1]);');
                break;
            }
            case I_I32_LOAD_8_U: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 1).getUint8(0));`);
                // jsCode.push('{');
                // jsCode.push('    const off = stack.pop();');
                // jsCode.push(`    const res = new DataView(memory0.buffer, ${instData.offset} + off, 1).getUint8(0);`);
                // jsCode.push(`    stack.push(res);`);
                // jsCode.push('    console.log("off", off, "res", res);');
                // jsCode.push('}');
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
            case I_I64_LOAD_32_U: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(`stack.push(BigInt(new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).getUint32(0, true)));`);
                break;
            }
            case I_I32_STORE: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const a = stack.pop();',
                    `    const offset = ${instData.offset};`,
                    '    const address = offset + a;',
                    '    if (address < 0) {',
                    '        console.error("I_I32_STORE DEBUG a", a, "offset", offset, "address", address);',
                    '        debugger;',
                    '        throw new Error("I_I32_STORE the address is negative");',
                    '    }',
                    `    new DataView(memory0.buffer, address, 4).setInt32(0, x, true);`,
                    // `    new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).setInt32(0, x, true);`,
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
            case I_I64_STORE_32: {
                const instData = inst.data as { "align": number; "offset": number; };
                jsCode.push(
                    '{',
                    '    const x = Number(stack.pop() & 0xFFFFFFFFn);',
                    `    new DataView(memory0.buffer, ${instData.offset} + stack.pop(), 4).setInt32(0, x, true);`,
                    '}',
                );
                break;
            }
            case I_I32_CONST: {
                jsCode.push(`stack.push(${inst.data});`);
                break;
            }
            case I_I64_CONST: {
                jsCode.push(`stack.push(${inst.data}n);`);
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
                if (!strict_maths) {
                    jsCode.push(
                        '{',
                        '    const x = stack.pop();',
                        '    stack.push(stack.pop() < x ? 1 : 0);',
                        '}',
                    );
                } else {
                    jsCode.push(
                        '{',
                        '    const y = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    const x = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    stack.push(x < y ? 1 : 0);',
                        '}',
                    );
                }
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
                if (!strict_maths) {
                    jsCode.push(
                        '{',
                        '    const x = stack.pop();',
                        '    stack.push(stack.pop() > x ? 1 : 0);',
                        '}',
                    );
                } else {
                    jsCode.push(
                        '{',
                        '    const y = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    const x = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    stack.push(x > y ? 1 : 0);',
                        '}',
                    );
                }
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
                if (!strict_maths) {
                    jsCode.push(
                        '{',
                        '    const x = stack.pop();',
                        '    stack.push(stack.pop() <= x ? 1 : 0);',
                        '}',
                    );
                } else {
                    jsCode.push(
                        '{',
                        '    const y = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    const x = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    stack.push(x <= y ? 1 : 0);',
                        '}',
                    );
                }
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
                if (!strict_maths) {
                    jsCode.push(
                        '{',
                        '    const x = stack.pop();',
                        '    stack.push(stack.pop() >= x ? 1 : 0);',
                        '}',
                    );
                } else {
                    jsCode.push(
                        '{',
                        '    const y = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    const x = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    stack.push(x >= y ? 1 : 0);',
                        '}',
                    );
                }
                break;
            }
            case I_I64_EQZ: {
                jsCode.push('stack.push(stack.pop() === 0n ? 1 : 0);');
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
            case I_F32_NE: {
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
            case I_I32_CTZ: {
                jsCode.push(`stack.push(${MY_CTZ_FN}(stack.pop(), false));`);
                break;
            }
            case I_I32_ADD: {
                // jsCode.push('stack.push(stack.pop() + stack.pop());');
                jsCode.push(
                    '{',
                    // '    const sp_x = stack.pop() + stack.pop();',
                    '    const y = stack.pop();',
                    '    const x = stack.pop();',
                    '    const sp_x = x + y;',
                    `    const sp_x_1 = (sp_x < ${MOST_NEG_S_I32}) ? (sp_x + ${MOST_POS_U_I32}) : sp_x;`,
                    `    const sp_x_2 = (sp_x_1 > ${MOST_POS_S_I32}) ? (sp_x_1 - ${MOST_POS_U_I32}) : sp_x_1;`,
                    '    stack.push(sp_x_2);',
                    // '    if(sp_x_2 < 0) console.log("I_I32_ADD x", x, "y", y, "sp_x", sp_x, "sp_x_1", sp_x_1, "sp_x_2", sp_x_2);',
                    '}',
                );
                break;
            }
            case I_I32_SUB: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const sp_x = stack.pop() - x;',
                    `    const sp_x_1 = (sp_x < ${MOST_NEG_S_I32}) ? (sp_x + ${MOST_POS_U_I32}) : sp_x;`,
                    `    const sp_x_2 = (sp_x_1 > ${MOST_POS_S_I32}) ? (sp_x_1 - ${MOST_POS_U_I32}) : sp_x_1;`,
                    '    stack.push(sp_x_2);',
                    '}',
                );
                break;
            }
            case I_I32_MUL: {
                // jsCode.push('stack.push(stack.pop() * stack.pop());');
                jsCode.push(
                    '{',
                    `    const sp_x = Number(BigInt.asIntN(32, BigInt(stack.pop() * stack.pop())));`,
                    `    const sp_x_1 = (sp_x < ${MOST_NEG_S_I32}) ? (sp_x + ${MOST_POS_U_I32}) : sp_x;`,
                    `    const sp_x_2 = (sp_x_1 > ${MOST_POS_S_I32}) ? (sp_x_1 - ${MOST_POS_U_I32}) : sp_x_1;`,
                    '    stack.push(sp_x_2);',
                    '}',
                );
                break;
            }
            case I_I32_DIV_S: {
                if (!strict_maths) {
                    jsCode.push(
                        '{',
                        '    const x = stack.pop();',
                        // DIV_S truncates towards 0 ((-9n)/(10n) === 0n)
                        // https://webassembly.github.io/spec/core/exec/numerics.html#xref-exec-numerics-op-idiv-s-mathrm-idiv-s-n-i-1-i-2
                        '    stack.push(Math.trunc(stack.pop() / x));',
                        '}',
                    );
                } else {
                    jsCode.push(
                        '{',
                        '    const y = BigInt.asIntN(32, BigInt(stack.pop()));',
                        '    const x = BigInt.asIntN(32, BigInt(stack.pop()));',
                        '    stack.push(Number(x / y));',
                        '}',
                    );
                }
                break;
            }
            case I_I32_DIV_U: {
                if (!strict_maths) {
                    jsCode.push(
                        '{',
                        '    const x = stack.pop();',
                        // DIV_U truncates towards 0 ((9n)/(10n) === 0n)
                        // https://webassembly.github.io/spec/core/exec/numerics.html#xref-exec-numerics-op-idiv-u-mathrm-idiv-u-n-i-1-i-2
                        '    stack.push(Math.trunc(stack.pop() / x));',
                        '}',
                    );
                } else {
                    jsCode.push(
                        '{',
                        '    const y = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    const x = BigInt.asUintN(32, BigInt(stack.pop()));',
                        '    stack.push(Number(x / y));',
                        '}',
                    );
                }
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
                if (!strict_maths) {
                    jsCode.push(
                        'stack.push(stack.pop() ^ stack.pop());',
                    );
                } else {
                    jsCode.push(
                        'const x2 = Number(BigInt.asUintN(32, BigInt(stack.pop())));',
                        'const x1 = Number(BigInt.asUintN(32, BigInt(stack.pop())));',
                        'stack.push(x1 ^ x2);',
                    );
                }
                break;
            }
            case I_I32_SHL: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push((stack.pop() << x) & 0xFFFFFFFF);',
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
                    '    const by = stack.pop();',
                    // '    stack.push(stack.pop() >>> x);',
                    '    const value = stack.pop();',
                    '    const shifted = value >>> by;',
                    '    stack.push(shifted);',
                    // '    console.log("I_I32_SHR_U DEBUG value", value, "by", by, "shifted", shifted);',
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
                jsCode.push(`stack.push(BigInt(${MY_CTZ_FN}(stack.pop(), true)));`);
                break;
            }
            case I_I64_POPCNT: {
                // jsCode.push('stack.push(stack.pop().toString(2).split("").filter(x => x==="1").length);');
                jsCode.push('stack.push(BigInt(BigInt.asUintN(64, stack.pop()).toString(2).split("").filter(x => x==="1").length));');
                break;
            }
            case I_I64_ADD: {
                // jsCode.push('stack.push(stack.pop() + stack.pop());');
                jsCode.push(
                    '{',
                    '    const sp_x = stack.pop() + stack.pop();',
                    `    const sp_x_1 = (sp_x < ${MOST_NEG_S_I64}n) ? (sp_x + ${MOST_POS_U_I64}n) : sp_x;`,
                    `    const sp_x_2 = (sp_x_1 > ${MOST_POS_S_I64}n) ? (sp_x_1 - ${MOST_POS_U_I64}n) : sp_x_1;`,
                    '    stack.push(sp_x_2);',
                    '}',
                );
                break;
            }
            case I_I64_SUB: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    // '    stack.push(stack.pop() - x);',
                    '    const sp = stack.pop();',
                    '    const sp_x = sp - x;',
                    // '    console.log("I_I64_SUB x", x, "sp", sp, "sp_x", sp_x);',
                    `    const sp_x_1 = (sp_x < ${MOST_NEG_S_I64}n) ? (sp_x + ${MOST_POS_U_I64}n) : sp_x;`,
                    `    const sp_x_2 = (sp_x_1 > ${MOST_POS_S_I64}n) ? (sp_x_1 - ${MOST_POS_U_I64}n) : sp_x_1;`,
                    '    stack.push(sp_x_2);',
                    // '    console.log("I_I64_SUB x", x, "sp", sp, "sp_x", sp_x, "sp_x_1", sp_x_2, "sp_x_2", sp_x_2);',
                    `    if(x < ${MOST_NEG_S_I64}n) throw new Error('I_I64_SUB x less than most negative');`,
                    `    if(sp < ${MOST_NEG_S_I64}n) throw new Error('I_I64_SUB sp less than most negative');`,
                    `    if(sp_x_2 < ${MOST_NEG_S_I64}n) throw new Error('I_I64_SUB sp_x_2 less than most negative');`,
                    '}',
                );
                break;
            }
            case I_I64_MUL: {
                // jsCode.push('stack.push(stack.pop() * stack.pop());');
                jsCode.push(
                    '{',
                    `    const sp_x = BigInt.asIntN(64, stack.pop() * stack.pop());`,
                    `    const sp_x_1 = (sp_x < ${MOST_NEG_S_I64}n) ? (sp_x + ${MOST_POS_U_I64}n) : sp_x;`,
                    `    const sp_x_2 = (sp_x_1 > ${MOST_POS_S_I64}n) ? (sp_x_1 - ${MOST_POS_U_I64}n) : sp_x_1;`,
                    '    stack.push(sp_x_2);',
                    '}',
                );
                break;
            }
            case I_I64_AND: {
                // jsCode.push('stack.push(stack.pop() & stack.pop());');
                jsCode.push('{');
                jsCode.push('    const y = stack.pop();');
                jsCode.push('    const x = stack.pop();');
                jsCode.push('    const z = x & y;');
                jsCode.push('    stack.push(z);');
                // jsCode.push('    console.log("I_I64_AND x", x, "y", y, "z", z);');
                // jsCode.push('    if(x < 0) throw new Error("I_I64_AND x is negative");'); // BigInt.asUintN(bwidth, BigInt(x))
                // jsCode.push('    if(y < 0) throw new Error("I_I64_AND y is negative");'); // BigInt.asUintN(bwidth, BigInt(x))
                // jsCode.push('    if(z < 0) throw new Error("I_I64_AND z is negative");'); // BigInt.asUintN(bwidth, BigInt(x))
                jsCode.push(`    if(x < ${MOST_NEG_S_I64}n) throw new Error('I_I64_AND x less than most negative');`);
                jsCode.push(`    if(y < ${MOST_NEG_S_I64}n) throw new Error('I_I64_AND y less than most negative');`);
                jsCode.push(`    if(z < ${MOST_NEG_S_I64}n) throw new Error('I_I64_AND z less than most negative');`);
                jsCode.push('}');
                // jsCode.push('    if(y === (x-1n)) debugger;');
                // jsCode.push('    stack.push(x & y);');
                break;
            }
            case I_I64_OR: {
                jsCode.push('stack.push(stack.pop() | stack.pop());');
                break;
            }
            case I_I64_XOR: {
                // jsCode.push('stack.push(stack.pop() ^ stack.pop());');
                jsCode.push(
                    '{',
                    // '    const safeJSONstringify = (x) => JSON.stringify(x, (_, value) => typeof value === "bigint" ? value.toString() : value);',
                    // '    console.log("stack", safeJSONstringify(stack));',
                    '    const x2 = BigInt.asUintN(64, stack.pop());',
                    '    const x1 = BigInt.asUintN(64, stack.pop());',
                    '    const x3 = x1 ^ x2;',
                    // '    console.log("I_I64_XOR x1", x1, "x2", x2, "x3", x3);',
                    `    if(x1 < ${MOST_NEG_S_I64}n) throw new Error('I_I64_XOR x1 less than most negative');`,
                    `    if(x2 < ${MOST_NEG_S_I64}n) throw new Error('I_I64_XOR x2 less than most negative');`,
                    // `    if(x3 < ${MOST_NEG_S_I64}n) throw new Error('I_I64_XOR x3 less than most negative');`,
                    `    if(x3 < ${MOST_NEG_S_I64}n) { console.log("I_I64_XOR x1", x1, "x2", x2, "x3", x3); throw new Error('I_I64_XOR x3 less than most negative'); }`,
                    '    stack.push(x3);',
                    // '    console.log("stack", safeJSONstringify(stack));',
                    '    if(x3 > 0xFFFFFFFFFFFFFFFFn) throw new Error("I_I64_XOR something is wrong");',
                    '}',
                );
                break;
            }
            case I_I64_SHL: {
                jsCode.push(
                    '{',
                    // '    const safeJSONstringify = (x) => JSON.stringify(x, (_, value) => typeof value === "bigint" ? value.toString() : value);',
                    // '    console.log("I_I64_SHL stack", safeJSONstringify(stack));',
                    '    const by = stack.pop();',
                    '    const value = stack.pop();',
                    // '    console.log("I_I64_SHL value", value, "by", by);',
                    // '    try {',
                    '    const shifted = (value << by) & 0xFFFFFFFFFFFFFFFFn;',
                    // '    console.log("I_I64_SHL shifted", shifted);',
                    '    stack.push(shifted);',
                    // '    } catch(e) { console.error("I_I64_SHL", e); debugger; }',
                    // '    console.log("I_I64_SHL shifted", shifted, "value", value, "by", by);',
                    // '    console.log("I_I64_SHL stack", safeJSONstringify(stack));',
                    // '    if(stack.length >= 2 && stack[0] > 0xFFFFFFFFFFFFFFFFn) throw new Error("I_I64_SHL something is wrong");',
                    // '    stack.push(stack.pop() << x);',
                    // '    stack.push((stack.pop() << x) & 0xFFFFFFFFFFFFFFFFn);',
                    '}',
                );
                break;
            }
            case I_I64_SHR_S: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >> x);',
                    '}',
                );
                break;
            }
            case I_I64_SHR_U: {
                // > TypeError: BigInts have no unsigned right shift, use >> instead
                // https://stackoverflow.com/questions/71937328/how-to-implement-unsigned-right-shift-for-bigint-in-javascript
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    stack.push(stack.pop() >> x);',
                    '}',
                );
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
                    '    const y = stack.pop();',
                    '    const x = stack.pop();',
                    '    const z = x / y;',
                    // '    console.log("I_F32_DIV DEBUG x", x, "y", y, "z", z);',
                    '    stack.push(z);',
                    // '    stack.push(stack.pop() / x);',
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
            case I_I32_WRAP_I64: {
                // jsCode.push('stack.push(Number(stack.pop() & 0xFFFFFFFFn));');
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const y = BigInt.asIntN(32, x);',
                    '    const z = Number(y);',
                    '    stack.push(z);',
                    '}',
                );
                break;
            }
            case I_I32_TRUNC_F32_S: {
                // jsCode.push('stack.push(Math.trunc(stack.pop()));');
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const y = Math.trunc(x);',
                    // '    console.log("I_I32_TRUNC_F32_S DEBUG x", x, "y", y);',
                    '    if(!Number.isFinite(x)) throw new Error("I_I32_TRUNC_F32_S not finite");',
                    // > RuntimeError: float unrepresentable in integer range
                    `    if(x < ${MOST_NEG_S_I32} || x > ${MOST_POS_S_I32}) throw new Error("I_I32_TRUNC_F32_S float unrepresentable in integer range");`,
                    '    stack.push(y);',
                    '}',
                );
                break;
            }
            case I_I32_TRUNC_F32_U: {
                // jsCode.push('stack.push(Math.trunc(stack.pop()));');
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const y = Math.trunc(x);',
                    // '    console.log("I_I32_TRUNC_F32_S DEBUG x", x, "y", y);',
                    '    if(!Number.isFinite(x)) throw new Error("I_I32_TRUNC_F32_S not finite");',
                    // > RuntimeError: float unrepresentable in integer range
                    `    if(x < 0 || x > ${MOST_POS_S_I32}) throw new Error("I_I32_TRUNC_F32_S float unrepresentable in integer range");`,
                    '    stack.push(y);',
                    '}',
                );
                break;
            }
            case I_I32_TRUNC_F64_U: {
                // jsCode.push('stack.push(Math.trunc(stack.pop()));');
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    '    const y = Math.trunc(x);',
                    // '    console.log("I_I32_TRUNC_F32_S DEBUG x", x, "y", y);',
                    '    if(!Number.isFinite(x)) throw new Error("I_I32_TRUNC_F32_S not finite");',
                    // > RuntimeError: float unrepresentable in integer range
                    `    if(x < 0 || x > ${MOST_POS_S_I32}) throw new Error("I_I32_TRUNC_F32_S float unrepresentable in integer range");`,
                    '    stack.push(y);',
                    '}',
                );
                break;
            }
            case I_I64_EXTEND_I32_U: {
                jsCode.push(
                    '{',
                    '    const x = stack.pop();',
                    // '    console.log("I_I64_EXTEND_I32_U DEBUG x", x);',
                    '    const y = BigInt(x);',
                    // '    console.log("I_I64_EXTEND_I32_U DEBUG y", y);',
                    '    const z = BigInt.asUintN(32, y);',
                    // '    console.log("I_I64_EXTEND_I32_U DEBUG z", z);',
                    '    stack.push(z);',
                    '}',
                );
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
                jsCode.push('stack.push(Number(BigInt.asIntN(8, BigInt(stack.pop()))));');
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

export const compileAot = async (
    wasmBytes: Uint8Array,
    debug_mode: boolean = false,
    strict_maths: boolean = true,
): Promise<string> => {
    //, importObject: MyWasmImportObject): Promise<string> => {
    // console.log('DEBUG compileAot called with importObject:', importObject);
    if (debug_mode) console.log('DEBUG compileAot called with wasmBytes:', wasmBytes);
    const result = PModule(wasmBytes);
    if (result.type !== ParserResultType.RESULT) throw new Error(`parsing failed. ${safeJSONstringify(result)}`);
    const ast: MyParserAst = result.result;
    if (debug_mode) console.log('DEBUG ast:', ast);

    // Total JS Code (lines)
    const allJsCodeLines = [];

    // imports
    const importJsCode: Array<string> = [
        // TODO: is this the best place for the count trailing zeros helper function?
        `function ${MY_CTZ_FN}(x, i64) {`,
        '    const bwidth = i64 ? 64 : 32;',
        '    const s = BigInt.asUintN(bwidth, BigInt(x)).toString(2).padStart(bwidth, "0");',
        '    let count = 0;',
        '    for (let i = s.length-1; i >= 0; i--, count++) {',
        '        if (s[i] !== "0") {',
        '            break;',
        '        }',
        '    }',
        '    if(count < 0 || count > bwidth) {',
        '        console.error("x", x, "s", s, "count", count);',
        '        throw new Error("DEBUG: CTZ count is incorrect");', // DEBUG: TODO
        '    }',
        '    return count;',
        '}',
    ];

    // TODO: imported tables

    // imported globals
    const importedGlobals = ast.imports.filter(x => x.type === MyWasmModuleImportExportType.GLOBAL);
    const importedGlobalsLength = importedGlobals.length;
    importedGlobals.forEach((g, i) => {
        // console.log('!!!!!!!!!! importedGlobals g:', g);
        const mutability = 'let'; // TODO: change this to 'const' based on mutability/type of the imported global.
        importJsCode.push(
            `if (!('${g.module}' in import_object) || !('${g.name}' in import_object['${g.module}'])) {`,
            `    throw new Error('failed to find the global import in the import object: ${g.module} ${g.name}');`,
            '}',
            `${mutability} global${i} = import_object['${g.module}']['${g.name}'];`,
        );
        // return `let global${i} = import_object['${g.module}']['${g.name}'];`;
        // {
        //     'module': "",
        //     'name': "rate",
        //     'type': 3,
        //     'typeIdx': [127, 0],
        // }
    });

    // imported memories
    const importedMemories = ast.imports.filter(x => x.type === MyWasmModuleImportExportType.MEM);
    if (importedMemories.length > 0) {
        if (importedMemories.length > 1) throw new Error('maximum one memory import is supported currently');
        const importedMemory = importedMemories[0];
        if (debug_mode) console.log('DEBUG importedMemory', importedMemory);
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
    if (debug_mode) console.log('DEBUG importedFuncsTypeIdxs', importedFuncsTypeIdxs, 'importedFuncsLength', importedFuncsLength);
    importedFuncs.forEach((x, i) => {
        importJsCode.push(
            `if (!import_object['${x.module}'] || !import_object['${x.module}']['${x.name}']) {`,
            `    throw new Error('failed to find the function import in the import object: ${x.module} ${x.name}');`,
            '}',
            `const func${i} = import_object['${x.module}']['${x.name}'];`,
        );
    });
    if (debug_mode) console.log('DEBUG importJsCode', importJsCode);
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
    const globalsJsCode = ast.globals.map((g, i) => `${g.mut ? 'let' : 'const'} global${importedGlobalsLength + i} = ${eval_global_expr(g)}${g.type === ValueType.I64 ? 'n' : ''};`);
    allJsCodeLines.push(...globalsJsCode);

    // built-in memories
    const memJsCode = ast.mems.map((m, i) => `const memory${i} = new Uint8Array(${m.min} * ${PAGE_SIZE});`);
    allJsCodeLines.push(...memJsCode);

    // data sections
    const dataJsCode = ast.datas.map(x => {
        if (debug_mode) console.log('ast.datas.map(x', x);
        if (x.type !== 'active') throw new Error('TODO: support passive data sections');
        const offset = x.offsetExpr[0].data as number;
        return `memory0.set([${x.data}], ${offset});`;
    });
    if (debug_mode) console.log('DEBUG dataJsCode', dataJsCode);
    allJsCodeLines.push(...dataJsCode);

    // function bodies
    for (let i = 0; i < ast.funcs.length; i++) {
        const func_type_idx = ast.funcs[i];
        const func_type = ast.types[func_type_idx];
        const code = ast.codes[i];
        // TODO: better local declaration/initialization
        const localsJsCode = code.locals.map((x, i) => `    let local${func_type.params.length + i} = ${x === ValueType.I64 ? '0n' : '0'};`);
        if (debug_mode) {
            console.log('----------------------------------------------');
            console.log('DEBUG compiling function, i:', i, 'func_type:', func_type, 'code:', code);
        }
        const func_params = func_type.params.length === 0 ? '' : range(func_type.params.length).map(x => `local${x}`).join(', ');
        const funcJSCode = [
            `function func${importedFuncsLength + i}(${func_params}) {`,
            // `    console.log("compiledFunc${i}");`,
            '    const stack = [];',
            // debug_mode ? '    debugger;' : '',
            // `    console.log("------------------------\\nfunc${importedFuncsLength + i} called with:", ${func_params ? func_params + ', ' : ''}"\\n------------------------\\n");`,
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
        const funcBodyJsCode = await compileAotHelper(ctx, code.body, debug_mode, strict_maths);
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
