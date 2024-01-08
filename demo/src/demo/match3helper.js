export const match3_fn = (function (import_object) {
    function __my_wasm2js_helper_ctz(x) {
        const s = x.toString(2);
        let count = 0;
        for (let i = s.length-1; i >= 0; i--, count++) {
            if (s[i] !== "0") {
                break;
            }
        }
        return count;
    }
    if (!import_object['Math'] || !import_object['Math']['random']) {
        throw new Error('failed to find the function import in the import object: Math random');
    }
    const func0 = import_object['Math']['random'];
    let global0 = 0;
    let global1 = -1n;
    let global2 = 0;
    let global3 = 1;
    let global4 = 0n;
    let global5 = 0n;
    const memory0 = new Uint8Array(2 * 65536);
    memory0.set([249,139,64,25,21,12,80,25,128,83,75,25,1,1,198,76,76,25,125,181,25,25,121,231,254,25,243,113,125,25,229,245,22,25,162,112,85,25,95,66,86,25,117,136,251,25,179,255,106,25,96,26,122,25,154,26,176,25,26,26,26,43,43,0,5,0,7,60,60,1,9,42,60,0,1,27,26,26,59,1,8,44,1,15,77,0,2,27,5,8,0,23,1,8,44,59,61,1,8,76,44,59,77,1,40,1,8,2,1,44,42,76,94,0,1,61,0,48,1,15,0,73,59,76,77,77,61,44,1,88,76,1,15,6,104,5,120,42,1,8,0,24,107,1,24,47,26,43,111,47,43,44,107,111,43,111,0,1,107,1,5,111,111,47,108,3,12,59,44,0,12,6,8,47,1,8,107,47,106,59,107,59,44,47,44,31,42,44,43,0,1,59,27,7,128,1,128,59,1,128,94,94,46,2,128,75,1,15,7,128,5,248,5,8,0,115,1,9,42,1,115,1,144,2,123,0,15,79,109,79,109,111,27,42,111,77,111,0,3,27,107,0,13,0,19,1,136,2,33,107,3,32,47,107,127,3,8,42,143,2,24,27,42,144,112,2,8,122,145,129,77,77,109,47,26,0,8,157,157,109,0,88,144,48,157,162,45,0,104,122,26,155,162,3,128,145,145,3,7,128,128,1,9,138,128,0,1,33,26,26,129,1,8,144,3,15,0,17,5,8,129,128,80,125,128,77,128,144,7,8,2,1,6,8,147,128,78,94,93,78,126,33,147,128,0,255,77,125,33,35,131,1,16,142,35,26,147,2,63,35,26,35,1,104,35,35,26,0,9,145,26,0,7,26,26,77,77,2,128,74,77,77,29,0,6,29,1,56,2,6,189,196,1,11,77,77,196,1,8,205,213,213,196,196,212,213,85,45,60,204,213,213,213,60,75,42,60,2,1,27,0,8,77,0,2,7,8,6,24,1,59,60,27,26,59,76,77,77,61,44,26,26,42,60,76,1,15,26,26,43,60,60,43,2,113,43,3,7,26,230,230,3,7,94,94,1,9,218,99,0,1,38,26,26,182,80,176,176,80,224,26,218,128,93,125,0,3,38,218,80,94,78,0,3,38,134,3,8,224,246,87,94,78,0,3,231,246,247,93,237,0,3,231,59,71,71,71,77,236,236,44,0,128,76,77,61,0,128,43,1,8,44,0,136,0,129,61,59,0,24,59,0,159,59,44,59,60,1,128,0,8,44,1,128,42,60,3,131,26,26,40,3,7,250,8,3,8,8,24,8,250,8,8,0,4,24,25,24,25,25,25,24,9,1,6,0,1,9,250,24,217,213,25,217,213,8,250,25,25,213,21,213,21,40,0,8,1,1,1,8,217,21,213,7,8,26,2,49,9,26,0,8,213,213,213,0,8,250,0,54,21,1,102,8,25,25,3,101,8,4,108,5,1,74,29,4,8,77,3,8,85,77,2,17,202,213,213,37,2,23,0,72,1,8,77,94,77,94,1,25,213,206,77,206,0,42,202,213,94,0,2,0,31,205,0,32,0,42,77,2,1,29,202,85,77,94,94,94,77,77,0,62,101,94,206,213,213,3,31,0,66,74,3,32,5,117,88,153,125,0,1,153,88,74,86,86,74,74,74,152,152,88,152,122,152,89,29,153,153,0,24,146,82,125,153,152,128,129,125,153,153,122,122,122,153,153,29,89,153,122,153,89,86,88,33,89,153,0,48,153,153,74,50,50,38,38,38,54,88,0,13,0,3,0,48,153,152,74,88,56,168,243,56,109,145,249,21,184,113,17,91,196,156,110,171,247,197,184,110,17,247,165,184,110,145,107,164,0,15,121,164,184,145,177,104,164,56,61,177,33,0,124,27,27,27,26,29,30,26,26,31,28,26,26,32,27,26,26,30,0,150,28,31,0,24,32,26,26,1,243,39,2,36,28,26,27,28,27,26,28,0,44,28,2,8,1,16,0,4,27,3,3,89,4,1,25,2,1,26,26,4,15,7,8,7,8,7,8,7,8,26,57,7,1,2,1,153,2,1,26,26,7,8,7,8,7,8,7,8,4,119,2,8,25], 3328);
    function func1() {
        const stack = [];
        let local0 = 0;
        let local1 = 0;
        let local2 = 0;
        let local3 = 0;
        let local4 = 0;
        let local5 = 0;
        let local6 = 0;
        let local7 = 0;
        let local8 = 0;
        let local9 = 0;
        let local10 = 0;
        let local11 = 0;
        let local12 = 0;
        let local13 = 0;
        let local14 = 0;
        let local15 = 0n;
        let local16 = 0n;
        let local17 = 0n;
        let local18 = 0n;
        let local19 = 0n;
        let local20 = 0n;
        let local21 = 0;
        let local22 = 0;
        let local23 = 0;
        let local24 = 0;
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":5},{"opCode":65,"dat
        loop_0: while (true) {
            // opcode: 32 I_LOCAL_GET 5
            stack.push(local5);
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 54 I_I32_STORE {"align":2,"offset":4352}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 4352 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 5
            stack.push(local5);
            // opcode: 65 I_I32_CONST 4
            stack.push(4);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 5
            local5 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 90000
            stack.push(90000);
            // opcode: 72 I_I32_LT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
        block_1: {
            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
            block_2: {
                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                block_3: {
                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                    block_4: {
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                        block_5: {
                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                            block_6: {
                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                block_7: {
                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                    block_8: {
                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                        block_9: {
                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":35,"data":2},{"opCode":14,"dat
                                            block_10: {
                                                // opcode: 35 I_GLOBAL_GET 2
                                                stack.push(global2);
                                                // opcode: 14 I_BR_TABLE {"branches":[4,0,1,5,6],"def":7}
                                                {
                                                    const target_idx = stack.pop();
                                                    if(target_idx === 0) { break block_6; }
                                                    else if(target_idx === 1) { break block_10; }
                                                    else if(target_idx === 2) { break block_9; }
                                                    else if(target_idx === 3) { break block_5; }
                                                    else if(target_idx === 4) { break block_4; }
                                                    else { break block_3; }
                                                }
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                            // opcode: 65 I_I32_CONST 1
                                            stack.push(1);
                                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                            // opcode: 16 I_CALL 4
                                            {
                                                const args = stack.slice(-2);
                                                stack.pop();
                                                stack.pop();
                                                stack.push(func4(...args));
                                            }
                                            // opcode: 34 I_LOCAL_TEE 15
                                            local15 = stack[stack.length - 1];
                                            // opcode: 35 I_GLOBAL_GET 4
                                            stack.push(global4);
                                            // opcode: 66 I_I64_CONST "-1"
                                            stack.push(-1n);
                                            // opcode: 133 I_I64_XOR
                                            stack.push(stack.pop() ^ stack.pop());
                                            // opcode: 131 I_I64_AND
                                            stack.push(stack.pop() & stack.pop());
                                            // opcode: 65 I_I32_CONST 134806780
                                            stack.push(134806780);
                                            // opcode: 16 I_CALL 6
                                            {
                                                const args = stack.slice(-2);
                                                stack.pop();
                                                stack.pop();
                                                func6(...args);
                                            }
                                            // opcode: 32 I_LOCAL_GET 15
                                            stack.push(local15);
                                            // opcode: 36 I_GLOBAL_SET 5
                                            global5 = stack.pop();
                                            // opcode: 65 I_I32_CONST 2
                                            stack.push(2);
                                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                            // opcode: 69 I_I32_EQZ
                                            stack.push(stack.pop() === 0 ? 1 : 0);
                                            // opcode: 32 I_LOCAL_GET 15
                                            stack.push(local15);
                                            // opcode: 80 I_I64_EQZ
                                            stack.push(stack.pop() === 0n ? 1 : 0);
                                            // opcode: 114 I_I32_OR
                                            stack.push(stack.pop() | stack.pop());
                                            // opcode: 13 I_BR_IF 2
                                            if (stack.pop() !== 0) { break block_7; }
                                            // opcode: 65 I_I32_CONST 3
                                            stack.push(3);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 65 I_I32_CONST 2
                                            stack.push(2);
                                            // opcode: 36 I_GLOBAL_SET 2
                                            global2 = stack.pop();
                                            // opcode: 12 I_BR 2
                                            break block_7;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 65 I_I32_CONST 0
                                        stack.push(0);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 65 I_I32_CONST 3
                                        stack.push(3);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 107 I_I32_SUB
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() - x);
                                        }
                                        // opcode: 178 I_F32_CONVERT_I32_S
                                        // opcode: 34 I_LOCAL_TEE 21
                                        local21 = stack[stack.length - 1];
                                        // opcode: 139 I_F32_ABS
                                        stack.push(Math.abs(stack.pop()));
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 65 I_I32_CONST 4
                                        stack.push(4);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 107 I_I32_SUB
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() - x);
                                        }
                                        // opcode: 178 I_F32_CONVERT_I32_S
                                        // opcode: 34 I_LOCAL_TEE 22
                                        local22 = stack[stack.length - 1];
                                        // opcode: 139 I_F32_ABS
                                        stack.push(Math.abs(stack.pop()));
                                        // opcode: 93 I_F32_LT
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() < x ? 1 : 0);
                                        }
                                        // opcode: 4 I_IF {"blockType":125,"trueBody":[{"opCode":32,"data":22},{"opCode":1
                                        if_11: if (stack.pop() !== 0) {
                                            // opcode: 32 I_LOCAL_GET 22
                                            stack.push(local22);
                                            // opcode: 139 I_F32_ABS
                                            stack.push(Math.abs(stack.pop()));
                                            // opcode: 67 I_F32_CONST 17
                                            stack.push(17);
                                            // opcode: 150 I_F32_MIN
                                            {
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(x1 < x2 ? x1 : x2);
                                            }
                                            // opcode: 32 I_LOCAL_GET 22
                                            stack.push(local22);
                                            // opcode: 152 I_F32_COPYSIGN
                                            {
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(((x1 >= 0 && x2 >= 0) || (x1 < 0 && x2 < 0)) ? x1 : -x1);
                                            }
                                            // opcode: 33 I_LOCAL_SET 22
                                            local22 = stack.pop();
                                            // opcode: 67 I_F32_CONST 0
                                            stack.push(0);
                                            // opcode: 5 I_ELSE
                                        } else {
                                            // opcode: 67 I_F32_CONST 0
                                            stack.push(0);
                                            // opcode: 33 I_LOCAL_SET 22
                                            local22 = stack.pop();
                                            // opcode: 32 I_LOCAL_GET 21
                                            stack.push(local21);
                                            // opcode: 139 I_F32_ABS
                                            stack.push(Math.abs(stack.pop()));
                                            // opcode: 67 I_F32_CONST 17
                                            stack.push(17);
                                            // opcode: 150 I_F32_MIN
                                            {
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(x1 < x2 ? x1 : x2);
                                            }
                                            // opcode: 32 I_LOCAL_GET 21
                                            stack.push(local21);
                                            // opcode: 152 I_F32_COPYSIGN
                                            {
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(((x1 >= 0 && x2 >= 0) || (x1 < 0 && x2 < 0)) ? x1 : -x1);
                                            }
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 34 I_LOCAL_TEE 21
                                        local21 = stack[stack.length - 1];
                                        // opcode: 168 I_I32_TRUNC_F32_S
                                        stack.push(Math.trunc(stack.pop()));
                                        // opcode: 65 I_I32_CONST 3
                                        stack.push(3);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 106 I_I32_ADD
                                        stack.push(stack.pop() + stack.pop());
                                        // opcode: 32 I_LOCAL_GET 22
                                        stack.push(local22);
                                        // opcode: 168 I_I32_TRUNC_F32_S
                                        stack.push(Math.trunc(stack.pop()));
                                        // opcode: 65 I_I32_CONST 4
                                        stack.push(4);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 106 I_I32_ADD
                                        stack.push(stack.pop() + stack.pop());
                                        // opcode: 16 I_CALL 4
                                        {
                                            const args = stack.slice(-2);
                                            stack.pop();
                                            stack.pop();
                                            stack.push(func4(...args));
                                        }
                                        // opcode: 34 I_LOCAL_TEE 15
                                        local15 = stack[stack.length - 1];
                                        // opcode: 16 I_CALL 5
                                        stack.push(func5(stack.pop()));
                                        // opcode: 33 I_LOCAL_SET 11
                                        local11 = stack.pop();
                                        // opcode: 32 I_LOCAL_GET 15
                                        stack.push(local15);
                                        // opcode: 80 I_I64_EQZ
                                        stack.push(stack.pop() === 0n ? 1 : 0);
                                        // opcode: 69 I_I32_EQZ
                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":5},{"opCode":16,
                                        if_12: if (stack.pop() !== 0) {
                                            // opcode: 35 I_GLOBAL_GET 5
                                            stack.push(global5);
                                            // opcode: 16 I_CALL 5
                                            stack.push(func5(stack.pop()));
                                            // opcode: 34 I_LOCAL_TEE 12
                                            local12 = stack[stack.length - 1];
                                            // opcode: 32 I_LOCAL_GET 22
                                            stack.push(local22);
                                            // opcode: 168 I_I32_TRUNC_F32_S
                                            stack.push(Math.trunc(stack.pop()));
                                            // opcode: 65 I_I32_CONST 8
                                            stack.push(8);
                                            // opcode: 116 I_I32_SHL
                                            {
                                                const x = stack.pop();
                                                stack.push(stack.pop() << x);
                                            }
                                            // opcode: 32 I_LOCAL_GET 21
                                            stack.push(local21);
                                            // opcode: 168 I_I32_TRUNC_F32_S
                                            stack.push(Math.trunc(stack.pop()));
                                            // opcode: 114 I_I32_OR
                                            stack.push(stack.pop() | stack.pop());
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":2816}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 2816 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 35 I_GLOBAL_GET 5
                                            stack.push(global5);
                                            // opcode: 32 I_LOCAL_GET 15
                                            stack.push(local15);
                                            // opcode: 82 I_I64_NE
                                            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":11},{"opCode":32
                                            if_13: if (stack.pop() !== 0) {
                                                // opcode: 32 I_LOCAL_GET 11
                                                stack.push(local11);
                                                // opcode: 32 I_LOCAL_GET 22
                                                stack.push(local22);
                                                // opcode: 140 I_F32_NEG
                                                stack.push(-stack.pop());
                                                // opcode: 168 I_I32_TRUNC_F32_S
                                                stack.push(Math.trunc(stack.pop()));
                                                // opcode: 65 I_I32_CONST 8
                                                stack.push(8);
                                                // opcode: 116 I_I32_SHL
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() << x);
                                                }
                                                // opcode: 32 I_LOCAL_GET 21
                                                stack.push(local21);
                                                // opcode: 140 I_F32_NEG
                                                stack.push(-stack.pop());
                                                // opcode: 168 I_I32_TRUNC_F32_S
                                                stack.push(Math.trunc(stack.pop()));
                                                // opcode: 114 I_I32_OR
                                                stack.push(stack.pop() | stack.pop());
                                                // opcode: 59 I_I32_STORE_16 {"align":1,"offset":2816}
                                                {
                                                    const x = stack.pop();
                                                    new DataView(memory0.buffer, 2816 + stack.pop(), 2).setInt16(0, x, true);
                                                }
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 65 I_I32_CONST 2
                                        stack.push(2);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                        // opcode: 13 I_BR_IF 1
                                        if (stack.pop() !== 0) { break block_7; }
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 36 I_GLOBAL_SET 2
                                        global2 = stack.pop();
                                        // opcode: 32 I_LOCAL_GET 15
                                        stack.push(local15);
                                        // opcode: 80 I_I64_EQZ
                                        stack.push(stack.pop() === 0n ? 1 : 0);
                                        // opcode: 35 I_GLOBAL_GET 5
                                        stack.push(global5);
                                        // opcode: 32 I_LOCAL_GET 15
                                        stack.push(local15);
                                        // opcode: 81 I_I64_EQ
                                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                        // opcode: 114 I_I32_OR
                                        stack.push(stack.pop() | stack.pop());
                                        // opcode: 13 I_BR_IF 0
                                        if (stack.pop() !== 0) { break block_8; }
                                        // opcode: 32 I_LOCAL_GET 15
                                        stack.push(local15);
                                        // opcode: 35 I_GLOBAL_GET 5
                                        stack.push(global5);
                                        // opcode: 16 I_CALL 3
                                        {
                                            const args = stack.slice(-2);
                                            stack.pop();
                                            stack.pop();
                                            func3(...args);
                                        }
                                        // opcode: 65 I_I32_CONST 8
                                        stack.push(8);
                                        // opcode: 16 I_CALL 2
                                        stack.push(func2(stack.pop()));
                                        // opcode: 36 I_GLOBAL_SET 1
                                        global1 = stack.pop();
                                        // opcode: 35 I_GLOBAL_GET 1
                                        stack.push(global1);
                                        // opcode: 80 I_I64_EQZ
                                        stack.push(stack.pop() === 0n ? 1 : 0);
                                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":15},{"opCode":35
                                        if_14: if (stack.pop() !== 0) {
                                            // opcode: 32 I_LOCAL_GET 15
                                            stack.push(local15);
                                            // opcode: 35 I_GLOBAL_GET 5
                                            stack.push(global5);
                                            // opcode: 16 I_CALL 3
                                            {
                                                const args = stack.slice(-2);
                                                stack.pop();
                                                stack.pop();
                                                func3(...args);
                                            }
                                            // opcode: 5 I_ELSE
                                        } else {
                                            // opcode: 32 I_LOCAL_GET 11
                                            stack.push(local11);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":2304}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 2304 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 32 I_LOCAL_GET 12
                                            stack.push(local12);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":2304}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 2304 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 32 I_LOCAL_GET 11
                                            stack.push(local11);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":2816}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 2816 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 32 I_LOCAL_GET 12
                                            stack.push(local12);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":2816}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 2816 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 12 I_BR 7
                                            break block_2;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 32 I_LOCAL_GET 15
                                    stack.push(local15);
                                    // opcode: 35 I_GLOBAL_GET 5
                                    stack.push(global5);
                                    // opcode: 132 I_I64_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 16 I_CALL 6
                                    {
                                        const args = stack.slice(-2);
                                        stack.pop();
                                        stack.pop();
                                        func6(...args);
                                    }
                                    // opcode: 11 I_END
                                }
                                // opcode: 35 I_GLOBAL_GET 4
                                stack.push(global4);
                                // opcode: 32 I_LOCAL_GET 15
                                stack.push(local15);
                                // opcode: 66 I_I64_CONST "-1"
                                stack.push(-1n);
                                // opcode: 133 I_I64_XOR
                                stack.push(stack.pop() ^ stack.pop());
                                // opcode: 131 I_I64_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 16 I_CALL 6
                                {
                                    const args = stack.slice(-2);
                                    stack.pop();
                                    stack.pop();
                                    func6(...args);
                                }
                                // opcode: 32 I_LOCAL_GET 15
                                stack.push(local15);
                                // opcode: 36 I_GLOBAL_SET 4
                                global4 = stack.pop();
                                // opcode: 12 I_BR 5
                                break block_1;
                                // opcode: 11 I_END
                            }
                            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":0},{"opCode":45,"dat
                            loop_15: while (true) {
                                // opcode: 32 I_LOCAL_GET 0
                                stack.push(local0);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":3328}
                                stack.push(new DataView(memory0.buffer, 3328 + stack.pop(), 1).getUint8(0));
                                // opcode: 34 I_LOCAL_TEE 4
                                local4 = stack[stack.length - 1];
                                // opcode: 65 I_I32_CONST 7
                                stack.push(7);
                                // opcode: 76 I_I32_LE_S
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() <= x ? 1 : 0);
                                }
                                // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":32,"data":1},{"opCode":32
                                if_16: if (stack.pop() !== 0) {
                                    // opcode: 32 I_LOCAL_GET 1
                                    stack.push(local1);
                                    // opcode: 32 I_LOCAL_GET 4
                                    stack.push(local4);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 65 I_I32_CONST 3
                                    stack.push(3);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 33 I_LOCAL_SET 3
                                    local3 = stack.pop();
                                    // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":1},{"opCode":32,"dat
                                    loop_17: while (true) {
                                        // opcode: 32 I_LOCAL_GET 1
                                        stack.push(local1);
                                        // opcode: 32 I_LOCAL_GET 1
                                        stack.push(local1);
                                        // opcode: 32 I_LOCAL_GET 0
                                        stack.push(local0);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":3329}
                                        stack.push(new DataView(memory0.buffer, 3329 + stack.pop(), 1).getUint8(0));
                                        // opcode: 107 I_I32_SUB
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() - x);
                                        }
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":196}
                                        stack.push(new DataView(memory0.buffer, 196 + stack.pop(), 1).getUint8(0));
                                        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":196}
                                        {
                                            const x = stack.pop();
                                            memory0[196 + stack.pop()] = x;
                                        }
                                        // opcode: 32 I_LOCAL_GET 1
                                        stack.push(local1);
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 106 I_I32_ADD
                                        stack.push(stack.pop() + stack.pop());
                                        // opcode: 34 I_LOCAL_TEE 1
                                        local1 = stack[stack.length - 1];
                                        // opcode: 32 I_LOCAL_GET 3
                                        stack.push(local3);
                                        // opcode: 72 I_I32_LT_S
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() < x ? 1 : 0);
                                        }
                                        // opcode: 13 I_BR_IF 0
                                        if (stack.pop() !== 0) { continue loop_17; }
                                        // opcode: 11 I_END
                                        break loop_17;
                                    }
                                    // opcode: 65 I_I32_CONST 2
                                    stack.push(2);
                                    // opcode: 5 I_ELSE
                                } else {
                                    // opcode: 32 I_LOCAL_GET 1
                                    stack.push(local1);
                                    // opcode: 65 I_I32_CONST 1
                                    stack.push(1);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 34 I_LOCAL_TEE 1
                                    local1 = stack[stack.length - 1];
                                    // opcode: 32 I_LOCAL_GET 4
                                    stack.push(local4);
                                    // opcode: 65 I_I32_CONST 230
                                    stack.push(230);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":195}
                                    {
                                        const x = stack.pop();
                                        memory0[195 + stack.pop()] = x;
                                    }
                                    // opcode: 65 I_I32_CONST 1
                                    stack.push(1);
                                    // opcode: 11 I_END
                                }
                                // opcode: 32 I_LOCAL_GET 0
                                stack.push(local0);
                                // opcode: 106 I_I32_ADD
                                stack.push(stack.pop() + stack.pop());
                                // opcode: 34 I_LOCAL_TEE 0
                                local0 = stack[stack.length - 1];
                                // opcode: 65 I_I32_CONST 924
                                stack.push(924);
                                // opcode: 72 I_I32_LT_S
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() < x ? 1 : 0);
                                }
                                // opcode: 13 I_BR_IF 0
                                if (stack.pop() !== 0) { continue loop_15; }
                                // opcode: 11 I_END
                                break loop_15;
                            }
                            // opcode: 11 I_END
                        }
                        // opcode: 35 I_GLOBAL_GET 3
                        stack.push(global3);
                        // opcode: 13 I_BR_IF 3
                        if (stack.pop() !== 0) { break block_1; }
                        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":6},{"opCode":32,"dat
                        loop_18: while (true) {
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 41 I_I64_LOAD {"align":3,"offset":1792}
                            stack.push(new DataView(memory0.buffer, 1792 + stack.pop(), 8).getBigInt64(0, true));
                            // opcode: 35 I_GLOBAL_GET 1
                            stack.push(global1);
                            // opcode: 66 I_I64_CONST "-1"
                            stack.push(-1n);
                            // opcode: 133 I_I64_XOR
                            stack.push(stack.pop() ^ stack.pop());
                            // opcode: 131 I_I64_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 55 I_I64_STORE {"align":3,"offset":1792}
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 1792 + stack.pop(), 8).setBigUint64(0, BigInt(x), true);
                            }
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 65 I_I32_CONST 8
                            stack.push(8);
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 34 I_LOCAL_TEE 6
                            local6 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 64
                            stack.push(64);
                            // opcode: 73 I_I32_LT_U
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() < x ? 1 : 0);
                            }
                            // opcode: 13 I_BR_IF 0
                            if (stack.pop() !== 0) { continue loop_18; }
                            // opcode: 11 I_END
                            break loop_18;
                        }
                        // opcode: 35 I_GLOBAL_GET 1
                        stack.push(global1);
                        // opcode: 33 I_LOCAL_SET 16
                        local16 = stack.pop();
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":3,"data":{"blockType":64,"body
                        block_19: {
                            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":16},{"opCode":80},{"
                            loop_20: while (true) {
                                // opcode: 32 I_LOCAL_GET 16
                                stack.push(local16);
                                // opcode: 80 I_I64_EQZ
                                stack.push(stack.pop() === 0n ? 1 : 0);
                                // opcode: 13 I_BR_IF 1
                                if (stack.pop() !== 0) { break block_19; }
                                // opcode: 66 I_I64_CONST "1"
                                stack.push(1n);
                                // opcode: 32 I_LOCAL_GET 16
                                stack.push(local16);
                                // opcode: 122 I_I64_CTZ
                                stack.push(BigInt(__my_wasm2js_helper_ctz(stack.pop())));
                                // opcode: 34 I_LOCAL_TEE 17
                                local17 = stack[stack.length - 1];
                                // opcode: 134 I_I64_SHL
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                // opcode: 33 I_LOCAL_SET 18
                                local18 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 16
                                stack.push(local16);
                                // opcode: 66 I_I64_CONST "-1"
                                stack.push(-1n);
                                // opcode: 133 I_I64_XOR
                                stack.push(stack.pop() ^ stack.pop());
                                // opcode: 66 I_I64_CONST "72340172838076673"
                                stack.push(72340172838076673n);
                                // opcode: 32 I_LOCAL_GET 17
                                stack.push(local17);
                                // opcode: 134 I_I64_SHL
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                // opcode: 131 I_I64_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 34 I_LOCAL_TEE 19
                                local19 = stack[stack.length - 1];
                                // opcode: 80 I_I64_EQZ
                                stack.push(stack.pop() === 0n ? 1 : 0);
                                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":16,"data":0},{"opCode":67,
                                if_21: if (stack.pop() !== 0) {
                                    // opcode: 16 I_CALL 0
                                    stack.push(func0());
                                    // opcode: 67 I_F32_CONST 8
                                    stack.push(8);
                                    // opcode: 148 I_F32_MUL
                                    stack.push(stack.pop() * stack.pop());
                                    // opcode: 169 I_I32_TRUNC_F32_U
                                    stack.push(Math.trunc(stack.pop()));
                                    // opcode: 65 I_I32_CONST 3
                                    stack.push(3);
                                    // opcode: 116 I_I32_SHL
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    // opcode: 34 I_LOCAL_TEE 7
                                    local7 = stack[stack.length - 1];
                                    // opcode: 32 I_LOCAL_GET 7
                                    stack.push(local7);
                                    // opcode: 41 I_I64_LOAD {"align":3,"offset":1792}
                                    stack.push(new DataView(memory0.buffer, 1792 + stack.pop(), 8).getBigInt64(0, true));
                                    // opcode: 32 I_LOCAL_GET 18
                                    stack.push(local18);
                                    // opcode: 132 I_I64_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 55 I_I64_STORE {"align":3,"offset":1792}
                                    {
                                        const x = stack.pop();
                                        new DataView(memory0.buffer, 1792 + stack.pop(), 8).setBigUint64(0, BigInt(x), true);
                                    }
                                    // opcode: 32 I_LOCAL_GET 17
                                    stack.push(local17);
                                    // opcode: 66 I_I64_CONST "56"
                                    stack.push(56n);
                                    // opcode: 124 I_I64_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 33 I_LOCAL_SET 20
                                    local20 = stack.pop();
                                    // opcode: 5 I_ELSE
                                } else {
                                    // opcode: 66 I_I64_CONST "1"
                                    stack.push(1n);
                                    // opcode: 32 I_LOCAL_GET 19
                                    stack.push(local19);
                                    // opcode: 122 I_I64_CTZ
                                    stack.push(BigInt(__my_wasm2js_helper_ctz(stack.pop())));
                                    // opcode: 34 I_LOCAL_TEE 20
                                    local20 = stack[stack.length - 1];
                                    // opcode: 134 I_I64_SHL
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    // opcode: 32 I_LOCAL_GET 18
                                    stack.push(local18);
                                    // opcode: 16 I_CALL 3
                                    {
                                        const args = stack.slice(-2);
                                        stack.pop();
                                        stack.pop();
                                        func3(...args);
                                    }
                                    // opcode: 32 I_LOCAL_GET 16
                                    stack.push(local16);
                                    // opcode: 66 I_I64_CONST "1"
                                    stack.push(1n);
                                    // opcode: 32 I_LOCAL_GET 20
                                    stack.push(local20);
                                    // opcode: 134 I_I64_SHL
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    // opcode: 132 I_I64_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 33 I_LOCAL_SET 16
                                    local16 = stack.pop();
                                    // opcode: 11 I_END
                                }
                                // opcode: 32 I_LOCAL_GET 17
                                stack.push(local17);
                                // opcode: 66 I_I64_CONST "2"
                                stack.push(2n);
                                // opcode: 134 I_I64_SHL
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                // opcode: 167 I_I32_WRAP_I64
                                stack.push(Number(stack.pop() & 0xFFFFFFFFn));
                                // opcode: 32 I_LOCAL_GET 17
                                stack.push(local17);
                                // opcode: 32 I_LOCAL_GET 20
                                stack.push(local20);
                                // opcode: 125 I_I64_SUB
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                // opcode: 66 I_I64_CONST "3"
                                stack.push(3n);
                                // opcode: 135 I_I64_SHR_S
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() >> x);
                                }
                                // opcode: 66 I_I64_CONST "17"
                                stack.push(17n);
                                // opcode: 126 I_I64_MUL
                                stack.push(stack.pop() * stack.pop());
                                // opcode: 66 I_I64_CONST "255"
                                stack.push(255n);
                                // opcode: 131 I_I64_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 66 I_I64_CONST "8"
                                stack.push(8n);
                                // opcode: 134 I_I64_SHL
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                // opcode: 62 I_I64_STORE_32 {"align":2,"offset":2304}
                                {
                                    const x = Number(stack.pop() & 0xFFFFFFFFn);
                                    new DataView(memory0.buffer, 2304 + stack.pop(), 4).setInt32(0, x, true);
                                }
                                // opcode: 32 I_LOCAL_GET 18
                                stack.push(local18);
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 16 I_CALL 6
                                {
                                    const args = stack.slice(-2);
                                    stack.pop();
                                    stack.pop();
                                    func6(...args);
                                }
                                // opcode: 32 I_LOCAL_GET 16
                                stack.push(local16);
                                // opcode: 32 I_LOCAL_GET 16
                                stack.push(local16);
                                // opcode: 66 I_I64_CONST "1"
                                stack.push(1n);
                                // opcode: 125 I_I64_SUB
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                // opcode: 131 I_I64_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 33 I_LOCAL_SET 16
                                local16 = stack.pop();
                                // opcode: 12 I_BR 0
                                continue loop_20;
                                // opcode: 11 I_END
                                break loop_20;
                            }
                            // opcode: 11 I_END
                        }
                        // opcode: 65 I_I32_CONST 4
                        stack.push(4);
                        // opcode: 36 I_GLOBAL_SET 2
                        global2 = stack.pop();
                        // opcode: 12 I_BR 3
                        break block_1;
                        // opcode: 11 I_END
                    }
                    // opcode: 35 I_GLOBAL_GET 3
                    stack.push(global3);
                    // opcode: 13 I_BR_IF 2
                    if (stack.pop() !== 0) { break block_1; }
                    // opcode: 65 I_I32_CONST 8
                    stack.push(8);
                    // opcode: 16 I_CALL 2
                    stack.push(func2(stack.pop()));
                    // opcode: 36 I_GLOBAL_SET 1
                    global1 = stack.pop();
                    // opcode: 65 I_I32_CONST 72
                    stack.push(72);
                    // opcode: 16 I_CALL 2
                    stack.push(func2(stack.pop()));
                    // opcode: 80 I_I64_EQZ
                    stack.push(stack.pop() === 0n ? 1 : 0);
                    // opcode: 69 I_I32_EQZ
                    stack.push(stack.pop() === 0 ? 1 : 0);
                    // opcode: 13 I_BR_IF 1
                    if (stack.pop() !== 0) { break block_2; }
                    // opcode: 66 I_I64_CONST "-1"
                    stack.push(-1n);
                    // opcode: 65 I_I32_CONST 67436286
                    stack.push(67436286);
                    // opcode: 16 I_CALL 6
                    {
                        const args = stack.slice(-2);
                        stack.pop();
                        stack.pop();
                        func6(...args);
                    }
                    // opcode: 65 I_I32_CONST 5
                    stack.push(5);
                    // opcode: 36 I_GLOBAL_SET 2
                    global2 = stack.pop();
                    // opcode: 11 I_END
                }
                // opcode: 65 I_I32_CONST 8
                stack.push(8);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 65 I_I32_CONST 1104
                stack.push(1104);
                // opcode: 65 I_I32_CONST 40
                stack.push(40);
                // opcode: 65 I_I32_CONST 8
                stack.push(8);
                // opcode: 65 I_I32_CONST 80
                stack.push(80);
                // opcode: 65 I_I32_CONST 8
                stack.push(8);
                // opcode: 65 I_I32_CONST 3
                stack.push(3);
                // opcode: 65 I_I32_CONST 7
                stack.push(7);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 16 I_CALL 8
                {
                    const args = stack.slice(-10);
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    func8(...args);
                }
                // opcode: 35 I_GLOBAL_GET 3
                stack.push(global3);
                // opcode: 65 I_I32_CONST 2
                stack.push(2);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                // opcode: 69 I_I32_EQZ
                stack.push(stack.pop() === 0 ? 1 : 0);
                // opcode: 114 I_I32_OR
                stack.push(stack.pop() | stack.pop());
                // opcode: 13 I_BR_IF 1
                if (stack.pop() !== 0) { break block_1; }
                // opcode: 66 I_I64_CONST "-1"
                stack.push(-1n);
                // opcode: 36 I_GLOBAL_SET 1
                global1 = stack.pop();
                // opcode: 65 I_I32_CONST -64
                stack.push(-64);
                // opcode: 36 I_GLOBAL_SET 0
                global0 = stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 35 I_GLOBAL_GET 0
            stack.push(global0);
            // opcode: 35 I_GLOBAL_GET 1
            stack.push(global1);
            // opcode: 123 I_I64_POPCNT
            stack.push(stack.pop().toString(2).split("").filter(x => x==="1").length);
            // opcode: 167 I_I32_WRAP_I64
            stack.push(Number(stack.pop() & 0xFFFFFFFFn));
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 36 I_GLOBAL_SET 0
            global0 = stack.pop();
            // opcode: 35 I_GLOBAL_GET 1
            stack.push(global1);
            // opcode: 65 I_I32_CONST -235862008
            stack.push(-235862008);
            // opcode: 16 I_CALL 6
            {
                const args = stack.slice(-2);
                stack.pop();
                stack.pop();
                func6(...args);
            }
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 65 I_I32_CONST 3
            stack.push(3);
            // opcode: 35 I_GLOBAL_GET 1
            stack.push(global1);
            // opcode: 80 I_I64_EQZ
            stack.push(stack.pop() === 0n ? 1 : 0);
            // opcode: 27 I_SELECT
            {
                const condition = stack.pop();
                const x2 = stack.pop();
                const x1 = stack.pop();
                stack.push(condition !== 0 ? x1 : x2)
            }
            // opcode: 36 I_GLOBAL_SET 2
            global2 = stack.pop();
            // opcode: 11 I_END
        }
        // opcode: 67 I_F32_CONST 1
        stack.push(1);
        // opcode: 33 I_LOCAL_SET 24
        local24 = stack.pop();
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":9},{"opCode":32,"dat
        loop_22: while (true) {
            // opcode: 32 I_LOCAL_GET 9
            stack.push(local9);
            // opcode: 32 I_LOCAL_GET 9
            stack.push(local9);
            // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":2560}
            stack.push(new DataView(memory0.buffer, 2560 + stack.pop(), 1).getInt8(0));
            // opcode: 34 I_LOCAL_TEE 10
            local10 = stack[stack.length - 1];
            // opcode: 32 I_LOCAL_GET 9
            stack.push(local9);
            // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":2816}
            stack.push(new DataView(memory0.buffer, 2816 + stack.pop(), 1).getInt8(0));
            // opcode: 32 I_LOCAL_GET 10
            stack.push(local10);
            // opcode: 107 I_I32_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 178 I_F32_CONVERT_I32_S
            // opcode: 32 I_LOCAL_GET 8
            stack.push(local8);
            // opcode: 42 I_F32_LOAD {"align":2,"offset":3072}
            {
                const x = stack.pop();
                const o = 3072;
                try {
                    stack.push(new DataView(memory0.buffer, o + x, 4).getFloat32(0, true));
                } catch(e) {
                    // console.log('x', x);
                    // console.log('o', o);
                    // console.log('memory0', memory0);
                    debugger;
                    throw new Error('DEBUG failed!');
                }
            }
            // opcode: 67 I_F32_CONST 0.004999999888241291
            stack.push(0.004999999888241291);
            // opcode: 146 I_F32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 67 I_F32_CONST 1
            stack.push(1);
            // opcode: 150 I_F32_MIN
            {
                const x2 = stack.pop();
                const x1 = stack.pop();
                stack.push(x1 < x2 ? x1 : x2);
            }
            // opcode: 34 I_LOCAL_TEE 23
            local23 = stack[stack.length - 1];
            // opcode: 67 I_F32_CONST 3
            stack.push(3);
            // opcode: 32 I_LOCAL_GET 23
            stack.push(local23);
            // opcode: 32 I_LOCAL_GET 23
            stack.push(local23);
            // opcode: 67 I_F32_CONST 3
            stack.push(3);
            // opcode: 147 I_F32_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 148 I_F32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 146 I_F32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 148 I_F32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 148 I_F32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 168 I_I32_TRUNC_F32_S
            stack.push(Math.trunc(stack.pop()));
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":2304}
            {
                const x = stack.pop();
                memory0[2304 + stack.pop()] = x;
            }
            // opcode: 32 I_LOCAL_GET 8
            stack.push(local8);
            // opcode: 32 I_LOCAL_GET 23
            stack.push(local23);
            // opcode: 56 I_F32_STORE {"align":2,"offset":3072}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 3072 + stack.pop(), 4).setFloat32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 24
            stack.push(local24);
            // opcode: 32 I_LOCAL_GET 23
            stack.push(local23);
            // opcode: 148 I_F32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 33 I_LOCAL_SET 24
            local24 = stack.pop();
            // opcode: 32 I_LOCAL_GET 9
            stack.push(local9);
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 9
            local9 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 252
            stack.push(252);
            // opcode: 113 I_I32_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 33 I_LOCAL_SET 8
            local8 = stack.pop();
            // opcode: 32 I_LOCAL_GET 9
            stack.push(local9);
            // opcode: 65 I_I32_CONST 256
            stack.push(256);
            // opcode: 72 I_I32_LT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_22; }
            // opcode: 11 I_END
            break loop_22;
        }
        // opcode: 32 I_LOCAL_GET 24
        stack.push(local24);
        // opcode: 67 I_F32_CONST 1
        stack.push(1);
        // opcode: 92 I_F32_NE
        stack.push(stack.pop() !== stack.pop() ? 1 : 0);
        // opcode: 36 I_GLOBAL_SET 3
        global3 = stack.pop();
        // opcode: 66 I_I64_CONST "-1"
        stack.push(-1n);
        // opcode: 16 I_CALL 7
        func7(stack.pop());
        // opcode: 32 I_LOCAL_GET 15
        stack.push(local15);
        // opcode: 16 I_CALL 7
        func7(stack.pop());
        // opcode: 65 I_I32_CONST 111
        stack.push(111);
        // opcode: 33 I_LOCAL_SET 13
        local13 = stack.pop();
        // opcode: 65 I_I32_CONST 1000
        stack.push(1000);
        // opcode: 33 I_LOCAL_SET 14
        local14 = stack.pop();
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":13},{"opCode":65,"da
        loop_23: while (true) {
            // opcode: 32 I_LOCAL_GET 13
            stack.push(local13);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 13
            local13 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 65 I_I32_CONST 1024
            stack.push(1024);
            // opcode: 35 I_GLOBAL_GET 0
            stack.push(global0);
            // opcode: 32 I_LOCAL_GET 14
            stack.push(local14);
            // opcode: 110 I_I32_DIV_U
            {
                const x = stack.pop();
                stack.push(Math.floor(stack.pop() / x));
            }
            // opcode: 65 I_I32_CONST 10
            stack.push(10);
            // opcode: 112 I_I32_REM_U
            {
                const x = stack.pop();
                stack.push(stack.pop() % x);
            }
            // opcode: 65 I_I32_CONST 3
            stack.push(3);
            // opcode: 116 I_I32_SHL
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 65 I_I32_CONST 3
            stack.push(3);
            // opcode: 65 I_I32_CONST 7
            stack.push(7);
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 16 I_CALL 8
            {
                const args = stack.slice(-10);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                func8(...args);
            }
            // opcode: 32 I_LOCAL_GET 14
            stack.push(local14);
            // opcode: 65 I_I32_CONST 10
            stack.push(10);
            // opcode: 110 I_I32_DIV_U
            {
                const x = stack.pop();
                stack.push(Math.floor(stack.pop() / x));
            }
            // opcode: 34 I_LOCAL_TEE 14
            local14 = stack[stack.length - 1];
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_23; }
            // opcode: 11 I_END
            break loop_23;
        }
        // opcode: 11 I_END
    }
    function func2(local0) {
        const stack = [];
        let local1 = 0n;
        let local2 = 0n;
        let local3 = 0n;
        let local4 = 0n;
        let local5 = 0;
        let local6 = 0;
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":5},{"opCode":41,"dat
        loop_0: while (true) {
            // opcode: 32 I_LOCAL_GET 5
            stack.push(local5);
            // opcode: 41 I_I64_LOAD {"align":3,"offset":1792}
            stack.push(new DataView(memory0.buffer, 1792 + stack.pop(), 8).getBigInt64(0, true));
            // opcode: 33 I_LOCAL_SET 2
            local2 = stack.pop();
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 33 I_LOCAL_SET 6
            local6 = stack.pop();
            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":6},{"opCode":53,"dat
            loop_1: while (true) {
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 53 I_I64_LOAD_32_U {"align":2,"offset":1400}
                stack.push(BigInt(new DataView(memory0.buffer, 1400 + stack.pop(), 4).getUint32(0, true)));
                // opcode: 33 I_LOCAL_SET 3
                local3 = stack.pop();
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 116 I_I32_SHL
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                // opcode: 41 I_I64_LOAD {"align":3,"offset":1472}
                stack.push(new DataView(memory0.buffer, 1472 + stack.pop(), 8).getBigInt64(0, true));
                // opcode: 33 I_LOCAL_SET 4
                local4 = stack.pop();
                // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":4},{"opCode":66,"dat
                loop_2: while (true) {
                    // opcode: 32 I_LOCAL_GET 4
                    stack.push(local4);
                    // opcode: 66 I_I64_CONST "1"
                    stack.push(1n);
                    // opcode: 131 I_I64_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 167 I_I32_WRAP_I64
                    stack.push(Number(stack.pop() & 0xFFFFFFFFn));
                    // opcode: 32 I_LOCAL_GET 2
                    stack.push(local2);
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 131 I_I64_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 81 I_I64_EQ
                    stack.push(stack.pop() === stack.pop() ? 1 : 0);
                    // opcode: 113 I_I32_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":1},{"opCode":32,
                    if_3: if (stack.pop() !== 0) {
                        // opcode: 32 I_LOCAL_GET 1
                        stack.push(local1);
                        // opcode: 32 I_LOCAL_GET 3
                        stack.push(local3);
                        // opcode: 132 I_I64_OR
                        stack.push(stack.pop() | stack.pop());
                        // opcode: 33 I_LOCAL_SET 1
                        local1 = stack.pop();
                        // opcode: 11 I_END
                    }
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 66 I_I64_CONST "1"
                    stack.push(1n);
                    // opcode: 134 I_I64_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 33 I_LOCAL_SET 3
                    local3 = stack.pop();
                    // opcode: 32 I_LOCAL_GET 4
                    stack.push(local4);
                    // opcode: 66 I_I64_CONST "1"
                    stack.push(1n);
                    // opcode: 136 I_I64_SHR_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >>> x);
                    }
                    // opcode: 34 I_LOCAL_TEE 4
                    local4 = stack[stack.length - 1];
                    // opcode: 80 I_I64_EQZ
                    stack.push(stack.pop() === 0n ? 1 : 0);
                    // opcode: 69 I_I32_EQZ
                    stack.push(stack.pop() === 0 ? 1 : 0);
                    // opcode: 13 I_BR_IF 0
                    if (stack.pop() !== 0) { continue loop_2; }
                    // opcode: 11 I_END
                    break loop_2;
                }
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 65 I_I32_CONST 4
                stack.push(4);
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 34 I_LOCAL_TEE 6
                local6 = stack[stack.length - 1];
                // opcode: 32 I_LOCAL_GET 0
                stack.push(local0);
                // opcode: 73 I_I32_LT_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                // opcode: 13 I_BR_IF 0
                if (stack.pop() !== 0) { continue loop_1; }
                // opcode: 11 I_END
                break loop_1;
            }
            // opcode: 32 I_LOCAL_GET 5
            stack.push(local5);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 5
            local5 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 64
            stack.push(64);
            // opcode: 73 I_I32_LT_U
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 11 I_END
        return stack.pop();
    }
    function func3(local0, local1) {
        const stack = [];
        let local2 = 0;
        let local3 = 0n;
        let local4 = 0n;
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":2},{"opCode":41,"dat
        loop_0: while (true) {
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 41 I_I64_LOAD {"align":3,"offset":1792}
            stack.push(new DataView(memory0.buffer, 1792 + stack.pop(), 8).getBigInt64(0, true));
            // opcode: 34 I_LOCAL_TEE 3
            local3 = stack[stack.length - 1];
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 132 I_I64_OR
            stack.push(stack.pop() | stack.pop());
            // opcode: 34 I_LOCAL_TEE 4
            local4 = stack[stack.length - 1];
            // opcode: 131 I_I64_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 123 I_I64_POPCNT
            stack.push(stack.pop().toString(2).split("").filter(x => x==="1").length);
            // opcode: 66 I_I64_CONST "1"
            stack.push(1n);
            // opcode: 81 I_I64_EQ
            stack.push(stack.pop() === stack.pop() ? 1 : 0);
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":2},{"opCode":32,
            if_1: if (stack.pop() !== 0) {
                // opcode: 32 I_LOCAL_GET 2
                stack.push(local2);
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 32 I_LOCAL_GET 4
                stack.push(local4);
                // opcode: 133 I_I64_XOR
                stack.push(stack.pop() ^ stack.pop());
                // opcode: 55 I_I64_STORE {"align":3,"offset":1792}
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 1792 + stack.pop(), 8).setBigUint64(0, BigInt(x), true);
                }
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 2
            local2 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 64
            stack.push(64);
            // opcode: 72 I_I32_LT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 11 I_END
    }
    function func4(local0, local1) {
        const stack = [];
        // opcode: 66 I_I64_CONST "1"
        stack.push(1n);
        // opcode: 65 I_I32_CONST 147
        stack.push(147);
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 107 I_I32_SUB
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        // opcode: 34 I_LOCAL_TEE 1
        local1 = stack[stack.length - 1];
        // opcode: 65 I_I32_CONST 17
        stack.push(17);
        // opcode: 109 I_I32_DIV_S
        {
            const x = stack.pop();
            stack.push(Math.floor(stack.pop() / x));
        }
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 108 I_I32_MUL
        stack.push(stack.pop() * stack.pop());
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 7
        stack.push(7);
        // opcode: 107 I_I32_SUB
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        // opcode: 34 I_LOCAL_TEE 0
        local0 = stack[stack.length - 1];
        // opcode: 65 I_I32_CONST 17
        stack.push(17);
        // opcode: 109 I_I32_DIV_S
        {
            const x = stack.pop();
            stack.push(Math.floor(stack.pop() / x));
        }
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 173 I_I64_EXTEND_I32_U
        stack.push(BigInt(stack.pop()));
        // opcode: 134 I_I64_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 66 I_I64_CONST "0"
        stack.push(0n);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 136
        stack.push(136);
        // opcode: 73 I_I32_LT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 65 I_I32_CONST 136
        stack.push(136);
        // opcode: 73 I_I32_LT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 27 I_SELECT
        {
            const condition = stack.pop();
            const x2 = stack.pop();
            const x1 = stack.pop();
            stack.push(condition !== 0 ? x1 : x2)
        }
        // opcode: 11 I_END
        return stack.pop();
    }
    function func5(local0) {
        const stack = [];
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 122 I_I64_CTZ
        stack.push(BigInt(__my_wasm2js_helper_ctz(stack.pop())));
        // opcode: 167 I_I32_WRAP_I64
        stack.push(Number(stack.pop() & 0xFFFFFFFFn));
        // opcode: 65 I_I32_CONST 2
        stack.push(2);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 11 I_END
        return stack.pop();
    }
    function func6(local0, local1) {
        const stack = [];
        let local2 = 0;
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":0},{"opCode":80},{"o
        loop_0: while (true) {
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 80 I_I64_EQZ
            stack.push(stack.pop() === 0n ? 1 : 0);
            // opcode: 13 I_BR_IF 1
            if (stack.pop() !== 0) { return; }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 16 I_CALL 5
            stack.push(func5(stack.pop()));
            // opcode: 34 I_LOCAL_TEE 2
            local2 = stack[stack.length - 1];
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 40 I_I32_LOAD {"align":2,"offset":2304}
            stack.push(new DataView(memory0.buffer, 2304 + stack.pop(), 4).getInt32(0, true));
            // opcode: 54 I_I32_STORE {"align":2,"offset":2560}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 2560 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 54 I_I32_STORE {"align":2,"offset":2816}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 2816 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 67 I_F32_CONST 1
            stack.push(1);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 42 I_F32_LOAD {"align":2,"offset":3072}
            {
                const x = stack.pop();
                const o = 3072;
                try {
                    stack.push(new DataView(memory0.buffer, o + x, 4).getFloat32(0, true));
                } catch(e) {
                    console.log('x', x);
                    console.log('o', o);
                    console.log('memory0', memory0);
                    debugger;
                }
            }
            // opcode: 147 I_F32_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 56 I_F32_STORE {"align":2,"offset":3072}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 3072 + stack.pop(), 4).setFloat32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 66 I_I64_CONST "1"
            stack.push(1n);
            // opcode: 125 I_I64_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 131 I_I64_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 33 I_LOCAL_SET 0
            local0 = stack.pop();
            // opcode: 12 I_BR 0
            continue loop_0;
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 11 I_END
    }
    function func7(local0) {
        const stack = [];
        let local1 = 0;
        let local2 = 0;
        let local3 = 0;
        let local4 = 0n;
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":1},{"opCode":41,"dat
        loop_0: while (true) {
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 41 I_I64_LOAD {"align":3,"offset":1792}
            stack.push(new DataView(memory0.buffer, 1792 + stack.pop(), 8).getBigInt64(0, true));
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 131 I_I64_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 33 I_LOCAL_SET 4
            local4 = stack.pop();
            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":3,"data":{"blockType":64,"body
            block_1: {
                // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":4},{"opCode":80},{"o
                loop_2: while (true) {
                    // opcode: 32 I_LOCAL_GET 4
                    stack.push(local4);
                    // opcode: 80 I_I64_EQZ
                    stack.push(stack.pop() === 0n ? 1 : 0);
                    // opcode: 13 I_BR_IF 1
                    if (stack.pop() !== 0) { break block_1; }
                    // opcode: 65 I_I32_CONST 7
                    stack.push(7);
                    // opcode: 32 I_LOCAL_GET 4
                    stack.push(local4);
                    // opcode: 122 I_I64_CTZ
                    stack.push(BigInt(__my_wasm2js_helper_ctz(stack.pop())));
                    // opcode: 167 I_I32_WRAP_I64
                    stack.push(Number(stack.pop() & 0xFFFFFFFFn));
                    // opcode: 34 I_LOCAL_TEE 2
                    local2 = stack[stack.length - 1];
                    // opcode: 65 I_I32_CONST 7
                    stack.push(7);
                    // opcode: 113 I_I32_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 65 I_I32_CONST 17
                    stack.push(17);
                    // opcode: 108 I_I32_MUL
                    stack.push(stack.pop() * stack.pop());
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 32 I_LOCAL_GET 2
                    stack.push(local2);
                    // opcode: 65 I_I32_CONST 2
                    stack.push(2);
                    // opcode: 116 I_I32_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 34 I_LOCAL_TEE 3
                    local3 = stack[stack.length - 1];
                    // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":2304}
                    stack.push(new DataView(memory0.buffer, 2304 + stack.pop(), 1).getInt8(0));
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 65 I_I32_CONST 131
                    stack.push(131);
                    // opcode: 32 I_LOCAL_GET 2
                    stack.push(local2);
                    // opcode: 65 I_I32_CONST 3
                    stack.push(3);
                    // opcode: 118 I_I32_SHR_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >>> x);
                    }
                    // opcode: 65 I_I32_CONST 17
                    stack.push(17);
                    // opcode: 108 I_I32_MUL
                    stack.push(stack.pop() * stack.pop());
                    // opcode: 107 I_I32_SUB
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":2305}
                    stack.push(new DataView(memory0.buffer, 2305 + stack.pop(), 1).getInt8(0));
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 32 I_LOCAL_GET 1
                    stack.push(local1);
                    // opcode: 65 I_I32_CONST 4
                    stack.push(4);
                    // opcode: 116 I_I32_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 65 I_I32_CONST 16
                    stack.push(16);
                    // opcode: 65 I_I32_CONST 16
                    stack.push(16);
                    // opcode: 65 I_I32_CONST 16
                    stack.push(16);
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":2306}
                    stack.push(new DataView(memory0.buffer, 2306 + stack.pop(), 1).getInt8(0));
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 65 I_I32_CONST 16
                    stack.push(16);
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":2307}
                    stack.push(new DataView(memory0.buffer, 2307 + stack.pop(), 1).getInt8(0));
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 65 I_I32_CONST 15
                    stack.push(15);
                    // opcode: 16 I_CALL 8
                    {
                        const args = stack.slice(-10);
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        stack.pop();
                        func8(...args);
                    }
                    // opcode: 32 I_LOCAL_GET 4
                    stack.push(local4);
                    // opcode: 32 I_LOCAL_GET 4
                    stack.push(local4);
                    // opcode: 66 I_I64_CONST "1"
                    stack.push(1n);
                    // opcode: 125 I_I64_SUB
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    // opcode: 131 I_I64_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 33 I_LOCAL_SET 4
                    local4 = stack.pop();
                    // opcode: 12 I_BR 0
                    continue loop_2;
                    // opcode: 11 I_END
                    break loop_2;
                }
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 1
            local1 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 64
            stack.push(64);
            // opcode: 72 I_I32_LT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 11 I_END
    }
    function func8(local0, local1, local2, local3, local4, local5, local6, local7, local8, local9) {
        const stack = [];
        let local10 = 0;
        let local11 = 0;
        let local12 = 0;
        let local13 = 0;
        let local14 = 0;
        let local15 = 0;
        let local16 = 0;
        let local17 = 0;
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 178 I_F32_CONVERT_I32_S
        // opcode: 32 I_LOCAL_GET 5
        stack.push(local5);
        // opcode: 178 I_F32_CONVERT_I32_S
        // opcode: 149 I_F32_DIV
        {
            const x = stack.pop();
            stack.push(stack.pop() / x);
        }
        // opcode: 33 I_LOCAL_SET 16
        local16 = stack.pop();
        // opcode: 32 I_LOCAL_GET 4
        stack.push(local4);
        // opcode: 178 I_F32_CONVERT_I32_S
        // opcode: 32 I_LOCAL_GET 6
        stack.push(local6);
        // opcode: 178 I_F32_CONVERT_I32_S
        // opcode: 149 I_F32_DIV
        {
            const x = stack.pop();
            stack.push(stack.pop() / x);
        }
        // opcode: 33 I_LOCAL_SET 17
        local17 = stack.pop();
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":65,"data":0},{"opCode":33,"dat
        loop_0: while (true) {
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 33 I_LOCAL_SET 10
            local10 = stack.pop();
            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":2},{"opCode":32,"dat
            loop_1: while (true) {
                // opcode: 32 I_LOCAL_GET 2
                stack.push(local2);
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 32 I_LOCAL_GET 11
                stack.push(local11);
                // opcode: 178 I_F32_CONVERT_I32_S
                // opcode: 32 I_LOCAL_GET 17
                stack.push(local17);
                // opcode: 148 I_F32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 168 I_I32_TRUNC_F32_S
                stack.push(Math.trunc(stack.pop()));
                // opcode: 108 I_I32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 32 I_LOCAL_GET 10
                stack.push(local10);
                // opcode: 178 I_F32_CONVERT_I32_S
                // opcode: 32 I_LOCAL_GET 16
                stack.push(local16);
                // opcode: 148 I_F32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 168 I_I32_TRUNC_F32_S
                stack.push(Math.trunc(stack.pop()));
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 34 I_LOCAL_TEE 14
                local14 = stack[stack.length - 1];
                // opcode: 32 I_LOCAL_GET 7
                stack.push(local7);
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":256}
                stack.push(new DataView(memory0.buffer, 256 + stack.pop(), 1).getUint8(0));
                // opcode: 32 I_LOCAL_GET 14
                stack.push(local14);
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 65 I_I32_CONST 3
                stack.push(3);
                // opcode: 32 I_LOCAL_GET 7
                stack.push(local7);
                // opcode: 107 I_I32_SUB
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                // opcode: 116 I_I32_SHL
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 32 I_LOCAL_GET 9
                stack.push(local9);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 33 I_LOCAL_SET 15
                local15 = stack.pop();
                // opcode: 32 I_LOCAL_GET 15
                stack.push(local15);
                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":0},{"opCode":32,
                if_2: if (stack.pop() !== 0) {
                    // opcode: 32 I_LOCAL_GET 0
                    stack.push(local0);
                    // opcode: 32 I_LOCAL_GET 10
                    stack.push(local10);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 34 I_LOCAL_TEE 12
                    local12 = stack[stack.length - 1];
                    // opcode: 65 I_I32_CONST 150
                    stack.push(150);
                    // opcode: 79 I_I32_GE_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >= x ? 1 : 0);
                    }
                    // opcode: 32 I_LOCAL_GET 1
                    stack.push(local1);
                    // opcode: 32 I_LOCAL_GET 11
                    stack.push(local11);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 34 I_LOCAL_TEE 13
                    local13 = stack[stack.length - 1];
                    // opcode: 65 I_I32_CONST 150
                    stack.push(150);
                    // opcode: 79 I_I32_GE_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >= x ? 1 : 0);
                    }
                    // opcode: 114 I_I32_OR
                    stack.push(stack.pop() | stack.pop());
                    // opcode: 13 I_BR_IF 0
                    if (stack.pop() !== 0) { break if_2; }
                    // opcode: 32 I_LOCAL_GET 13
                    stack.push(local13);
                    // opcode: 65 I_I32_CONST 150
                    stack.push(150);
                    // opcode: 108 I_I32_MUL
                    stack.push(stack.pop() * stack.pop());
                    // opcode: 32 I_LOCAL_GET 12
                    stack.push(local12);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 65 I_I32_CONST 4
                    stack.push(4);
                    // opcode: 108 I_I32_MUL
                    stack.push(stack.pop() * stack.pop());
                    // opcode: 32 I_LOCAL_GET 15
                    stack.push(local15);
                    // opcode: 65 I_I32_CONST 2
                    stack.push(2);
                    // opcode: 116 I_I32_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 40 I_I32_LOAD {"align":2,"offset":192}
                    stack.push(new DataView(memory0.buffer, 192 + stack.pop(), 4).getInt32(0, true));
                    // opcode: 54 I_I32_STORE {"align":2,"offset":4352}
                    {
                        const x = stack.pop();
                        new DataView(memory0.buffer, 4352 + stack.pop(), 4).setInt32(0, x, true);
                    }
                    // opcode: 11 I_END
                }
                // opcode: 32 I_LOCAL_GET 10
                stack.push(local10);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 34 I_LOCAL_TEE 10
                local10 = stack[stack.length - 1];
                // opcode: 32 I_LOCAL_GET 5
                stack.push(local5);
                // opcode: 72 I_I32_LT_S
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                // opcode: 13 I_BR_IF 0
                if (stack.pop() !== 0) { continue loop_1; }
                // opcode: 11 I_END
                break loop_1;
            }
            // opcode: 32 I_LOCAL_GET 11
            stack.push(local11);
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 11
            local11 = stack[stack.length - 1];
            // opcode: 32 I_LOCAL_GET 6
            stack.push(local6);
            // opcode: 72 I_I32_LT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 11 I_END
    }
    const wasmExports = {
        "run": func1,
        "mem": memory0,
    };
    return { exports: wasmExports };
})