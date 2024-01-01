import { safeJSONstringify } from "../common/utils";
import { MyWasmInstanceStore, MyWasmModuleBlockType, MyWasmModuleFunc, MyWasmModuleFuncInst } from "../parser/types";
import { BLOCK_TYPE_EMPTY, DEBUG_INST_HEX_TO_NAME, I_BLOCK, I_BR, I_BR_IF, I_BR_TABLE, I_CALL, I_DROP, I_ELSE, I_END, I_F64_CONST, I_F64_LT, I_F64_MUL, I_F64_NEAREST, I_I32_ADD, I_I32_AND, I_I32_CONST, I_I32_EQZ, I_I32_GT_S, I_I32_LOAD, I_I32_LOAD_16_U, I_I32_LOAD_8_U, I_I32_LT_S, I_I32_LT_U, I_I32_MUL, I_I32_NE, I_I32_OR, I_I32_SHL, I_I32_SHR_U, I_I32_STORE, I_I32_STORE_8, I_I32_SUB, I_I32_TRUNC_F64_U, I_IF, I_LOCAL_GET, I_LOCAL_SET, I_LOCAL_TEE, I_LOOP, I_NOP, I_UNREACHABLE } from "./instructions";
import { ExecResult, Stack, StackEntryType, ValueType, StackFrame, StackValue, FrameLocal, StackEntry, StackLabel, DEBUG_VALUE_TYPE_HEX_TO_NAME, BranchTable } from "./types";

type TArg = number | bigint;

const MAX_INSTRUCTIONS = 10000000;
let GLOBAL_WATCHDOG_COUNTER = 0;
const RING_BUFFER: Array<unknown> = [];
const RING_BUFFER_SIZE = 20;
let RING_BUFFER_IDX = 0;
(function () {
    for (let i = 0; i < RING_BUFFER_SIZE; i++)RING_BUFFER.push('');
})();
const push_into_ring_buffer = (s: unknown) => {
    RING_BUFFER[RING_BUFFER_IDX] = s;
    RING_BUFFER_IDX = (RING_BUFFER_IDX + 1) % RING_BUFFER_SIZE;
};

export const executor = (store: MyWasmInstanceStore, funcIdx: number, args: Array<TArg>): ExecResult => {
    // console.log('DEBUG executor -> store', store, 'funcIdx', funcIdx, 'args', args);
    const func = store.funcs[funcIdx] as MyWasmModuleFunc;
    // console.log('DEBUG func', safeJSONstringify(func));
    const funcType = store.types[func.typeIdx];
    if (funcType.params.length !== args.length) throw new Error(`executor got invalid number of arguments. expected: ${funcType.params.length} actual: ${args.length}`);
    // console.log('DEBUG first args', safeJSONstringify(args));
    // console.log('DEBUG first func.locals', safeJSONstringify(func.locals));
    const getLocalsFromArgsAndFuncs = (t1Args: Array<TArg>, t1FType: MyWasmModuleBlockType, t1Func: MyWasmModuleFunc): Array<FrameLocal> => {
        if (t1Args.length !== t1FType.params.length) throw new Error(`got invalid number of arguments. expected: ${t1FType.params.length} actual: ${t1Args.length}`);
        return [
            ...t1Args.map((a, i) => ({ valueType: t1FType.params[i], value: a })),
            ...t1Func.locals.map(l => ({ valueType: l, value: l === ValueType.I64 || l === ValueType.V128 ? 0n : 0 })),
        ]
    };
    const locals: Array<FrameLocal> = getLocalsFromArgsAndFuncs(args, funcType, func);
    // console.log('DEBUG first locals', safeJSONstringify(locals));
    // ---------------------------------------------------
    // execution stack
    const stack: Stack = [];
    {
        const frame: StackFrame = { type: StackEntryType.FRAME, prevFrameIdx: -1, funcIdx, locals };
        const label: StackLabel = { type: StackEntryType.LABEL, prevLabelIdx: -1, instIdx: -1 };
        stack.push(frame, label);
        // console.log('DEBUG first frame', safeJSONstringify(frame), 'first label', safeJSONstringify(label));
    }
    let currInstructions: Array<MyWasmModuleFuncInst> = func.body;
    let currFrameIdx: number = 0;
    let currLabelIdx: number = 1;
    let currInstIdx = 0;
    // ---------------------------------------------------
    // execution loop
    const safe_pop_check = (xs: Array<ValueType>): void => {
        if (xs.length === 0) return;
        if (xs.length > stack.length) throw new Error(`expected atleast ${xs.length} values on the stack. got: ${stack.length}`);
        const actuals = stack.slice(-xs.length);
        for (let i = 0; i < xs.length; i++) {
            const expectedValueType = xs[i];
            const actual = actuals[i];
            const expectedValueTypeName = DEBUG_VALUE_TYPE_HEX_TO_NAME[expectedValueType]
            if (actual.type !== StackEntryType.VALUE) throw new Error(`expected a value. got: ${safeJSONstringify(actual)}`);
            const actualValueTypeName = DEBUG_VALUE_TYPE_HEX_TO_NAME[actual.valueType];
            if (actual.valueType !== expectedValueType) throw new Error(`expected a value type of ${expectedValueTypeName} . got: ${actualValueTypeName} ${safeJSONstringify(actual)}`);
        }
    }

    const generic_branch_jump = (labelIdx: number) => {
        // console.log('generic break/branch jump code');
        let labelsLeftToFind = labelIdx; // we already found one label
        let targetLabelStackIdx = currLabelIdx;
        while (labelsLeftToFind > 0 && targetLabelStackIdx >= 0) {
            targetLabelStackIdx = (stack[currLabelIdx] as StackLabel).prevLabelIdx; // TODO: assuming we don't break out of the current frame
            labelsLeftToFind--;
        }
        // for (; targetLabelStackIdx >= 0; targetLabelStackIdx--) {
        //     if (stack[targetLabelStackIdx].type === StackEntryType.LABEL) {
        //         labelsLeftToFind--;
        //         if (labelsLeftToFind <= 0) break;
        //     }
        // }
        if (labelsLeftToFind > 0) throw new Error('failed to find the number of labels we need');
        const targetLabel = stack[targetLabelStackIdx] as StackLabel;
        // console.log('targetLabel', targetLabel);
        if (targetLabel.instIdx < 0) {
            // console.log('DEBUG>> targetLabelStackIdx:', targetLabelStackIdx, 'targetLabel', targetLabel);
            throw new Error(`the target label inst index ${targetLabel.instIdx} is negative`);
        }
        const instThatCreatedTheLabel = currInstructions[targetLabel.instIdx]; // TODO: assuming we don't break out of the current frame
        // console.log('instThatCreatedTheLabel', instThatCreatedTheLabel);
        if (instThatCreatedTheLabel.opCode === I_LOOP) {
            // continue the loop
            const blockType = (instThatCreatedTheLabel.data as { blockType: number }).blockType;
            // console.log('check the stack to see if loop params values are on the stack, blockType:', blockType);
            if (blockType !== BLOCK_TYPE_EMPTY) throw new Error('only empty block type is supported right now in generic break/branch jump for loops');
            if (stack[stack.length - 1].type !== StackEntryType.LABEL) throw new Error('expected no values on the stack');
            while (stack.length > targetLabelStackIdx + 1) stack.pop(); // unwind the stack until we reach the label (keep the label)
            currLabelIdx = targetLabelStackIdx;
            // console.log('DEBUG @@@@@@@ keep some and pop some labels', safeJSONstringify(stack));
            // if blocktype wasn't empty we would put the param values back on the stack
            currInstIdx = targetLabel.instIdx; // will be incremented by the for loop
            return;
        }
        if (instThatCreatedTheLabel.opCode === I_BLOCK) {
            const instData = instThatCreatedTheLabel.data as { blockType: number; bodyLength: number };
            if (instData.blockType !== BLOCK_TYPE_EMPTY) throw new Error('only empty block type is supported right now in generic break/branch jump for I_BLOCK');
            if (stack[stack.length - 1].type !== StackEntryType.LABEL) throw new Error('expected no values on the stack');
            while (stack.length > targetLabelStackIdx) stack.pop(); // unwind the stack until and including the label
            // console.log('instData', instData);
            const endInstIdx = targetLabel.instIdx + instData.bodyLength;
            const endInst = currInstructions[endInstIdx];
            // console.log('endInstIdx', endInstIdx, 'endInst', endInst);
            if (endInst.opCode !== I_END) throw new Error('expected an end inst');
            if (targetLabel.prevLabelIdx < 0) throw new Error('the previous label index is neagtive');
            currLabelIdx = targetLabel.prevLabelIdx;
            // console.log('DEBUG @@@@@@@ keep some and pop some labels', safeJSONstringify(stack));
            // if blocktype wasn't empty we would put the result values back on the stack
            currInstIdx = endInstIdx; // will be incremented by the for loop
            return;
        }
        throw new Error('TODO: implement generic break/branch jump for non-loop/block insts');
    };
    for (; currInstIdx < currInstructions.length; currInstIdx++) {
        // GLOBAL_WATCHDOG_COUNTER++;
        // if (GLOBAL_WATCHDOG_COUNTER > MAX_INSTRUCTIONS) {
        //     console.error('DEBUG>> watchdog tripped');
        //     console.log('currInstIdx', currInstIdx, 'RING_BUFFER_IDX', RING_BUFFER_IDX, RING_BUFFER, currInstructions);
        //     throw new Error(`watchdog: exceeded the max number of instructions ${GLOBAL_WATCHDOG_COUNTER}`);
        // }
        const inst = currInstructions[currInstIdx];
        {
            const instName = DEBUG_INST_HEX_TO_NAME[inst.opCode] ?? '<unknown opcode>';
            // push_into_ring_buffer({ instName, inst, 'stack': safeJSONstringify(stack) });
            const currFrame = stack[currFrameIdx] as StackFrame;
            const currLabel = stack[currLabelIdx] as StackLabel;
            // console.log(
            //     'DEBUG >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> executing inst:',
            //     'instName',
            //     instName,
            //     inst,
            //     'currFrameIdx',
            //     currFrameIdx,
            //     'currLabelIdx',
            //     currLabelIdx,
            //     'currFrame',
            //     safeJSONstringify(currFrame),
            //     'currLabel',
            //     safeJSONstringify(currLabel),
            //     'stack',
            //     safeJSONstringify(stack),
            // );
            if (!currFrame || currFrame.type !== StackEntryType.FRAME) throw new Error('failed to get the current frame');
            if (!currLabel || currLabel.type !== StackEntryType.LABEL) throw new Error('failed to get the current label');
        }
        switch (inst.opCode) {
            case I_UNREACHABLE: {
                throw new Error('reached an unreachable instruction!!!!');
            }
            case I_NOP: {
                break;
            }
            case I_BLOCK: {
                // console.log('I_BLOCK: inst', inst);
                const instData = inst.data as { blockType: number, bodyLength: number };
                if (instData.blockType !== BLOCK_TYPE_EMPTY) throw new Error('TODO: I_BLOCK only empty block type is supported right now');
                const newLabel: StackLabel = { type: StackEntryType.LABEL, prevLabelIdx: currLabelIdx, instIdx: currInstIdx };
                stack.push(newLabel);
                currLabelIdx = stack.length - 1;
                break;
            }
            case I_LOOP: {
                const currFrame = stack[currFrameIdx] as StackFrame;
                // console.log('I_LOOP: inst', inst, 'currFrame.locals', safeJSONstringify(currFrame.locals));
                const blockType = (inst.data as { blockType: number }).blockType;
                // console.log('blockType', blockType);
                if (blockType === BLOCK_TYPE_EMPTY) {
                    stack.push({ type: StackEntryType.LABEL, prevLabelIdx: currLabelIdx, instIdx: currInstIdx }); // save the start of the loop for continuation
                    currLabelIdx = stack.length - 1;
                    // console.log('DEBUG @@@@@@@ pushed new label', safeJSONstringify(stack[stack.length - 1]));
                    break;
                }
                throw new Error('non-empty block type for loop isnt supported yet');
                break;
            }
            case I_IF: {
                /*
                I_IF: inst 
                {
                    opCode: 4,
                    data: {blockType: 64, trueBodyLength: 20, falseBodyLength: 6},
                }
                */
                // console.log('I_IF: inst', inst);
                // console.log('checking condition');
                // safe_pop_check([ValueType.I32]);
                const topElem = stack.pop() as StackValue;
                // console.log('topElem', safeJSONstringify(topElem));
                const instData = inst.data as ({ blockType: number, trueBodyLength: number, falseBodyLength?: number });
                // console.log('instData', instData);
                if (instData.blockType !== BLOCK_TYPE_EMPTY) {
                    if (instData.blockType !== ValueType.I32 &&
                        instData.blockType !== ValueType.I64 &&
                        instData.blockType !== ValueType.F32 &&
                        instData.blockType !== ValueType.F64) {
                        throw new Error('TODO: implement if condition for non-empty/value type block type');
                    }
                }
                // if (topElem.type !== StackEntryType.VALUE) throw new Error('expected a value on top of the stack');
                if (topElem.value === 0) {
                    // console.log('if condition is false');
                    const elseInstIdx = currInstIdx + instData.trueBodyLength;
                    const elseInst = currInstructions[elseInstIdx];
                    if (elseInst.opCode !== I_ELSE) {
                        if (elseInst.opCode === I_END && instData.falseBodyLength === undefined) {
                            // console.log('there is no else block to execute');
                            currInstIdx = elseInstIdx; // will be incremented in the for loop
                            break;
                        }
                        throw new Error('expected an else block instruction');
                    }
                    // console.log('DEBUG the else block', elseInst);
                    stack.push({ type: StackEntryType.LABEL, prevLabelIdx: currLabelIdx, instIdx: currInstIdx });
                    currLabelIdx = stack.length - 1;
                    // console.log('DEBUG @@@@@@@ pushed new label', safeJSONstringify(stack[stack.length - 1]));
                    currInstIdx = elseInstIdx; // will be incremented in the for loop
                    break;
                }
                // throw new Error('TODO: implement IF true condition');
                // console.log('if condition is true');
                stack.push({ type: StackEntryType.LABEL, prevLabelIdx: currLabelIdx, instIdx: currInstIdx });
                currLabelIdx = stack.length - 1;
                // console.log('DEBUG @@@@@@@ pushed new label', safeJSONstringify(stack[stack.length - 1]));
                break;
            }
            case I_ELSE: {
                // console.log('fall through to end (from if true block)');
                // console.log('I_ELSE: inst', inst);
                // throw new Error('TODO: implement ELSE');
                const currLabel = stack[currLabelIdx] as StackLabel;
                if (currLabel.instIdx < 0) throw new Error('the current label inst index is negative');
                const instThatCreatedTheLabel = currInstructions[currLabel.instIdx];
                if (instThatCreatedTheLabel.opCode !== I_IF) throw new Error('failed, expected to find an if inst');
                const instData = instThatCreatedTheLabel.data as ({ blockType: number, trueBodyLength: number, falseBodyLength?: number });
                // console.log('instData', instData);
                let result = null;
                if (instData.blockType !== BLOCK_TYPE_EMPTY) {
                    if (instData.blockType !== ValueType.I32 &&
                        instData.blockType !== ValueType.I64 &&
                        instData.blockType !== ValueType.F32 &&
                        instData.blockType !== ValueType.F64) {
                        throw new Error('TODO: implement else (if) condition with non-empty/value type block type');
                    }
                    // console.log('gather results from the stack');
                    // safe_pop_check([ValueType.I32]); // TODO: can be other value types
                    result = stack.pop();
                }
                while (stack.length > currLabelIdx) stack.pop(); // remove the current label
                if (result) stack.push(result);
                currLabelIdx = currLabel.prevLabelIdx;
                currInstIdx = currLabel.instIdx + instData.trueBodyLength + (instData.falseBodyLength ?? 0); // skip the else block
                const ifElseEndInst = currInstructions[currInstIdx];
                if (ifElseEndInst.opCode !== I_END) throw new Error('expected the if/else/end block to have an end');
                break;
            }
            case I_END: {
                // console.log('I_END: inst', inst);
                const isFuncEnd = currFrameIdx === currLabelIdx - 1;
                // console.log('currLabelIdx', currLabelIdx, 'isFuncEnd', isFuncEnd);
                const currLabel = stack[currLabelIdx] as StackLabel;
                // console.log('current label', currLabel);
                if (isFuncEnd) {
                    // console.log('ending the current function');
                    const currFrame = stack[currFrameIdx] as StackFrame;
                    // console.log('curr frame', currFrame);
                    const stackPrevFrameIdx = currFrame.prevFrameIdx;
                    if (stackPrevFrameIdx < 0) return { stack };

                    const prevFrame = stack[stackPrevFrameIdx] as StackFrame;
                    // console.log('previous frame', prevFrame);
                    const prevFunc = store.funcs[prevFrame.funcIdx];
                    // console.log('previous func', prevFunc);
                    const prevInsts = prevFunc.body;
                    // console.log('previous insts', prevInsts);

                    const currFunc = store.funcs[currFrame.funcIdx];
                    // console.log('current func', currFunc);
                    const currFuncType = store.types[currFunc.typeIdx];
                    // console.log('current func type', currFuncType);

                    if (currLabel.instIdx < 0) throw new Error(`the currLabel.instIdx ${currLabel.instIdx} is negative`);
                    const instThatCreatedTheLabel = prevInsts[currLabel.instIdx];
                    // console.log('instThatCreatedTheLabel from previous call frame', instThatCreatedTheLabel);
                    if (instThatCreatedTheLabel.opCode !== I_CALL) {
                        throw new Error(`expected the instruction that created the label to be a call ${safeJSONstringify(instThatCreatedTheLabel)}`);
                    }
                    // console.log('set the insts and inst index to the previous set');
                    currInstructions = prevInsts;
                    currInstIdx = currLabel.instIdx; // will be incremented in the for loop
                    const popUntilAndIncludingThis = currFrameIdx;
                    currFrameIdx = stackPrevFrameIdx;
                    currLabelIdx = currLabel.prevLabelIdx;

                    // console.log('gather results for current function:', currFuncType.results, 'from the stack', safeJSONstringify(stack));
                    const currResults: Array<StackValue> = (currFuncType.results.length === 0) ? [] : (stack.slice(-currFuncType.results.length) as Array<StackValue>);
                    if (currResults.some(x => x.type !== StackEntryType.VALUE)) throw new Error('expected the function result on the stack');
                    while (stack.length > popUntilAndIncludingThis) stack.pop(); // remove the current frame and label
                    stack.push(...currResults);
                    // console.log('DEBUG @@@@@@@ pop some labels and push func results', safeJSONstringify(stack));
                    // console.log('pushed the results:', safeJSONstringify(currResults), 'back onto the stack', safeJSONstringify(stack));
                    break;
                }
                // console.log('ending a loop/block/ifelse');
                if (currLabel.instIdx < 0) throw new Error(`the currLabel.instIdx ${currLabel.instIdx} is negative`);
                const instThatCreatedTheLabel = currInstructions[currLabel.instIdx];
                // console.log('instThatCreatedTheLabel from current call frame', instThatCreatedTheLabel);
                if (instThatCreatedTheLabel.opCode === I_BLOCK ||
                    instThatCreatedTheLabel.opCode === I_LOOP ||
                    instThatCreatedTheLabel.opCode === I_IF) {
                    // validate
                    // { blockType: number, bodyLength: number}
                    const blockType = (instThatCreatedTheLabel.data as { blockType: number }).blockType;
                    // console.log('validate: check the stack to see if the loop params values are on the stack');
                    let result = null;
                    if (blockType !== BLOCK_TYPE_EMPTY) {
                        if (blockType !== ValueType.I32 &&
                            blockType !== ValueType.I64 &&
                            blockType !== ValueType.F32 &&
                            blockType !== ValueType.F64) {
                            throw new Error('only empty/value type block type is supported right now in i_end');
                        }
                        // safe_pop_check([ValueType.I32]); // TODO: other value types
                        result = stack.pop();
                    }
                    if (blockType === BLOCK_TYPE_EMPTY && currLabelIdx !== stack.length - 1) throw new Error('expected no values on the stack'); // the label should be on top of the stack
                    while (stack.length > currLabelIdx) stack.pop(); // pop the label (and any values) from the stack
                    if (result) stack.push(result);
                    currLabelIdx = currLabel.prevLabelIdx;
                    break;
                }
                throw new Error('TODO: implement end for non-loop-block-if insts');
            }
            case I_BR: {
                // console.log('I_BR inst', inst);
                // throw new Error('TODO: implement I_BR');
                const labelIdx = inst.data as number;
                // console.log('labelIdx', labelIdx);
                generic_branch_jump(labelIdx);
                break;
            }
            case I_BR_IF: {
                const labelIdx = inst.data as number;
                // console.log('I_BR_IF labelIdx:', labelIdx);
                // console.log('checking condition');
                // safe_pop_check([ValueType.I32]);
                const topElem = stack.pop() as StackValue;
                // console.log('topElem', safeJSONstringify(topElem));
                // if (topElem.type !== StackEntryType.VALUE) throw new Error('expected a value on top of the stack');
                if (topElem.value === 0) {
                    // console.log('br_if condition is false');
                    break;
                }
                // console.log('br_if condition is true, break');
                generic_branch_jump(labelIdx);
                break;
            }
            case I_BR_TABLE: {
                // console.log('I_BR_TABLE inst', inst);
                // safe_pop_check([ValueType.I32]);
                const instData = inst.data as BranchTable;
                // console.log('instData', instData);
                const branchIdx = (stack.pop() as StackValue).value as number;
                const labelIdx = (branchIdx >= 0 && branchIdx < instData.branches.length) ? (instData.branches[branchIdx]) : (instData.def);
                // console.log('labelIdx', labelIdx);
                // if (labelIdx === instData.def) console.log('jumping to default branch');
                generic_branch_jump(labelIdx);
                break;
            }
            case I_CALL: {
                const newFuncIdx = inst.data as number;
                // console.log('I_CALL: calling the function at index:', newFuncIdx);
                const newFunc = store.funcs[newFuncIdx] as MyWasmModuleFunc;
                // console.log('newFunc', newFunc);
                const newFuncType = store.types[newFunc.typeIdx];
                // console.log('newFuncType', newFuncType);
                // console.log('gather args:', newFuncType.params, 'from the stack', safeJSONstringify(stack));
                for (let xx = 1; xx <= newFuncType.params.length; xx++) {
                    if (stack[stack.length - xx].type !== StackEntryType.VALUE) throw new Error('expected stack values for function call');
                }
                const newArgs: Array<TArg> = (newFuncType.params.length === 0) ? [] : stack.slice(-newFuncType.params.length).map(x => (x as StackValue).value);
                for (let i = 0; i < newFuncType.params.length; i++) stack.pop();
                // console.log('gathered args:', safeJSONstringify(newArgs), 'and the new stack', safeJSONstringify(stack));
                if (newFunc.hostFunc) {
                    // console.log('calling a host function from WASM');
                    const res = newFunc.hostFunc(newArgs);
                    if (res.length !== newFuncType.results.length) {
                        throw new Error(`host function returned incorrect number of results. expected: ${newFuncType.results.length} actual: ${res.length}`);
                    }
                    const hostFuncResults: Array<StackValue> = res.map((r, i) => ({ type: StackEntryType.VALUE, valueType: newFuncType.results[i], value: r }));
                    stack.push(...hostFuncResults);
                    // console.log('call to host function over', safeJSONstringify(stack));
                    break;
                }
                // console.log('calling a normal WASM function');
                const locals: Array<FrameLocal> = getLocalsFromArgsAndFuncs(newArgs, newFuncType, newFunc);
                const newFrame: StackFrame = { type: StackEntryType.FRAME, prevFrameIdx: currFrameIdx, funcIdx: newFuncIdx, locals };
                stack.push(newFrame);
                currFrameIdx = stack.length - 1;
                const newLabel: StackLabel = { type: StackEntryType.LABEL, prevLabelIdx: currLabelIdx, instIdx: currInstIdx };
                stack.push(newLabel);
                currLabelIdx = stack.length - 1;
                // console.log('DEBUG @@@@@@@ push new labels', safeJSONstringify(stack[stack.length - 1]));
                currInstructions = newFunc.body;
                currInstIdx = -1; // becomes 0 after increment
                break;
            }
            case I_DROP: {
                // console.log('I_DROP inst', inst);
                // safe_pop_check([ValueType.I32]); // TODO: not always I32
                stack.pop();
                break;
            }
            case I_LOCAL_GET: {
                // console.log('I_LOCAL_GET inst', inst);
                const currFrame = stack[currFrameIdx] as StackFrame;
                // console.log('I_LOCAL_GET inst', inst, 'currFrame.locals', safeJSONstringify(currFrame.locals));
                const idx = inst.data as number;
                const l1 = currFrame.locals[idx];
                stack.push({ type: StackEntryType.VALUE, valueType: l1.valueType, value: l1.value });
                break;
            }
            case I_LOCAL_SET: {
                // safe_pop_check([ValueType.I32]); // TODO: not always I32
                const currFrame = stack[currFrameIdx] as StackFrame;
                // console.log('I_LOCAL_SET inst', inst, 'currFrame.locals', safeJSONstringify(currFrame.locals));
                const idx = inst.data as number;
                const value = (stack.pop() as StackValue).value;
                const newLocal = { ...currFrame.locals[idx], value };
                // console.log('local idx', idx, 'newLocal', safeJSONstringify(newLocal));
                currFrame.locals[idx] = newLocal;
                break;
            }
            case I_LOCAL_TEE: {
                // safe_pop_check([ValueType.I32]); // TODO: not always I32
                const currFrame = stack[currFrameIdx] as StackFrame;
                // console.log('I_LOCAL_TEE inst', inst, 'currFrame.locals', safeJSONstringify(currFrame.locals));
                const idx = inst.data as number;
                const value = (stack[stack.length - 1] as StackValue).value;
                const newLocal = { ...currFrame.locals[idx], value };
                // console.log('local idx', idx, 'newLocal', safeJSONstringify(newLocal));
                currFrame.locals[idx] = newLocal;
                break;
            }
            case I_I32_LOAD: {
                // safe_pop_check([ValueType.I32]);
                // console.log('I_I32_LOAD inst', inst, 'store.mems', store.mems);
                if (store.mems.length !== 1) throw new Error('expected exactly one memory');
                const mem = store.mems[0].data;
                const offset = (inst.data as { offset: number }).offset ?? 0;
                const idx = (stack.pop() as StackValue).value as number;
                const address = idx + offset;
                const value = new DataView(mem.buffer, address, 4).getUint32(0, true);
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_LOAD_8_U: {
                // safe_pop_check([ValueType.I32]);
                // console.log('I_I32_LOAD_8_U inst', inst, 'store.mems', store.mems);
                if (store.mems.length !== 1) throw new Error('expected exactly one memory');
                const mem = store.mems[0].data;
                const offset = (inst.data as { offset: number }).offset ?? 0;
                const idx = (stack.pop() as StackValue).value as number;
                const address = idx + offset;
                const value = new DataView(mem.buffer, address, 1).getUint8(0);
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_LOAD_16_U: {
                // safe_pop_check([ValueType.I32]);
                // console.log('I_I32_LOAD_16_U inst', inst, 'store.mems', store.mems);
                if (store.mems.length !== 1) throw new Error('expected exactly one memory');
                const mem = store.mems[0].data;
                const offset = (inst.data as { offset: number }).offset ?? 0;
                const idx = (stack.pop() as StackValue).value as number;
                const address = idx + offset;
                const value = new DataView(mem.buffer, address, 2).getUint16(0, true);
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_STORE: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                // console.log('I_I32_STORE_8 inst', inst, 'store.mems', store.mems);
                if (store.mems.length !== 1) throw new Error('expected exactly one memory');
                const mem = store.mems[0].data;
                const offset = (inst.data as { offset: number }).offset ?? 0;
                const value = (stack.pop() as StackValue).value as number;
                const idx = (stack.pop() as StackValue).value as number;
                const address = idx + offset;
                new DataView(mem.buffer, address, 4).setInt32(0, value, true);
                break;
            }
            case I_I32_STORE_8: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                // console.log('I_I32_STORE_8 inst', inst, 'store.mems', store.mems);
                if (store.mems.length !== 1) throw new Error('expected exactly one memory');
                const mem = store.mems[0].data;
                const offset = (inst.data as { offset: number }).offset ?? 0;
                const value = (stack.pop() as StackValue).value as number;
                const idx = (stack.pop() as StackValue).value as number;
                const address = idx + offset;
                try {
                    new DataView(mem.buffer, address, 1).setInt8(0, value);
                } catch (e) {
                    console.error('DEBUG>> failed');
                    console.log('currInstIdx', currInstIdx, 'currFrameIdx', currFrameIdx, 'currLabelIdx', currLabelIdx, 'RING_BUFFER_IDX', RING_BUFFER_IDX);
                    console.log('RING_BUFFER', RING_BUFFER, 'currInstructions', currInstructions);
                    console.log('currFrame', stack[currFrameIdx], 'currLabel', stack[currLabelIdx]);
                    console.log('stack', stack);
                    console.log('I_I32_STORE_8 inst', inst, 'store.mems', store.mems);
                    console.log('mem.buffer', mem.buffer, 'address', address);
                    throw e;
                }
                break;
            }
            case I_I32_CONST: {
                // console.log('I_I32CONST inst.data', inst.data);
                const value = inst.data as number;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                // safe_pop_check([ValueType.I32]);
                break;
            }
            case I_F64_CONST: {
                // console.log('I_F64_CONST inst.data', inst.data);
                const value = inst.data as number;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.F64, value });
                // safe_pop_check([ValueType.F64]);
                break;
            }
            case I_I32_EQZ: {
                // console.log('I_I32_EQZ inst', inst);
                // safe_pop_check([ValueType.I32]);
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 === 0 ? 1 : 0;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_NE: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 !== x2 ? 1 : 0;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_LT_S: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 < x2 ? 1 : 0;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_LT_U: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 < x2 ? 1 : 0;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_GT_S: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 > x2 ? 1 : 0;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_F64_LT: {
                // safe_pop_check([ValueType.F64, ValueType.F64]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 < x2 ? 1 : 0;
                // console.log('x1', x1, 'x2', x2, 'value', value);
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_ADD: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 + x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_SUB: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 - x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_MUL: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 * x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_AND: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 & x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_OR: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 | x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_SHL: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 << x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_I32_SHR_U: {
                // safe_pop_check([ValueType.I32, ValueType.I32]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 >>> x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            case I_F64_NEAREST: {
                // safe_pop_check([ValueType.F64]);
                const x1 = (stack.pop() as StackValue).value as number;
                const value = Math.round(x1);
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.F64, value });
                break;
            }
            case I_F64_MUL: {
                // safe_pop_check([ValueType.F64, ValueType.F64]);
                const x2 = (stack.pop() as StackValue).value as number;
                const x1 = (stack.pop() as StackValue).value as number;
                const value = x1 * x2;
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.F64, value });
                break;
            }
            case I_I32_TRUNC_F64_U: {
                // safe_pop_check([ValueType.F64]);
                const x1 = (stack.pop() as StackValue).value as number;
                const value = Math.trunc(x1);
                stack.push({ type: StackEntryType.VALUE, valueType: ValueType.I32, value });
                break;
            }
            default: {
                throw new Error(`unknown op code: ${safeJSONstringify(inst)} ${inst.opCode.toString(16)}`);
            }
        }
    }
    throw new Error('unexpected, reached the end of the executor');
};
