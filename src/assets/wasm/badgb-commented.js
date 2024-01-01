(function (import_object) {
    let global0 = 81920;
    let global1 = 1114112;
    let global2 = 0;
    let global3 = 0;
    let global4 = 32;
    let global5 = 0;
    const global6 = 65280;
    const memory0 = new Uint8Array(19 * 65536);
    memory0.set([19,0,216,0,77,1,176,1,254,255,0,1,255,239,223,207,1,0,3,2,5,4,0,7,0,2,4,8,0,2,4,4,128,128,16,16,255,255,255,255,99,165,255,255,0,0,255,255,0,0,0,255,255,255,255,255,255,132,132,255,148,58,58,255,0,0,0,255,255,0,7,255,8,37,199,0,15,239,224,32,248,184,23,198,4,11,231,226,32,248,160,25,207,193,29,255,118,19,192,64,20,255,205,30,207,1,8,255,201,28,207,9,13,255,254,2,255,230,4,199,6,12,248,176,26,248,128,21,199,3,10,248,168,26,231,192,28,231,7,14,199,2,9,255,203,38,255,198,0,255,214,2,255,222,3,255,206,1,225,192,30,207,197,31,255,233,33,255,47,17,255,249,36,255,195,30,248,152,24,239,232,35,248,136,22,199,199,30,255,217,27,247,55,18,255,246,6,248,144,23,255,238,5,247,243,34,255,39,16,0,0,7,248,48,2,200,0,0,192,64,3,200,8,1,192,192,5,192,128,4], 0);
    memory0.set([0,172], 65283);
    memory0.set([145], 65344);
    function func0() {
        const stack = [];
        // opcode: 35 I_GLOBAL_GET 5
        stack.push(global5);
        // opcode: 65 I_I32_CONST 4
        stack.push(4);
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 36 I_GLOBAL_SET 5
        global5 = stack.pop();
        // opcode: 11 I_END
    }
    function func1(local0, local1) {
        const stack = [];
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":1},{"opCode":65,"dat
        loop_0: while (true) {
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 65 I_I32_CONST 3
            stack.push(3);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 33 I_LOCAL_SET 1
            local1 = stack.pop();
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
            // opcode: 113 I_I32_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":1}
            stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
            // opcode: 71 I_I32_NE
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":2}
        stack.push(new DataView(memory0.buffer, 2 + stack.pop(), 1).getUint8(0));
        // opcode: 11 I_END
        return stack[0];
    }
    function func2(local0, local1, local2) {
        const stack = [];
        let local3 = 0;
        // opcode: 16 I_CALL 0
        func0();
        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
        block_0: {
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
                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":0},{"opCode":65,"dat
                                            block_9: {
                                                // opcode: 32 I_LOCAL_GET 0
                                                stack.push(local0);
                                                // opcode: 65 I_I32_CONST 13
                                                stack.push(13);
                                                // opcode: 118 I_I32_SHR_U
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() >>> x);
                                                }
                                                // opcode: 14 I_BR_TABLE {"branches":[1,0,2,3,8,4,8],"def":5}
                                                {
                                                    const target_idx = stack.pop();
                                                    if(target_idx === 0) { break block_8; }
                                                    else if(target_idx === 1) { break block_9; }
                                                    else if(target_idx === 2) { break block_7; }
                                                    else if(target_idx === 3) { break block_6; }
                                                    else if(target_idx === 4) { break block_1; }
                                                    else if(target_idx === 5) { break block_5; }
                                                    else if(target_idx === 6) { break block_1; }
                                                    else { break block_4; }
                                                }
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 32 I_LOCAL_GET 2
                                            stack.push(local2);
                                            // opcode: 13 I_BR_IF 0
                                            if (stack.pop() !== 0) { break block_8; }
                                            // opcode: 65 I_I32_CONST 65536
                                            stack.push(65536);
                                            // opcode: 32 I_LOCAL_GET 1
                                            stack.push(local1);
                                            // opcode: 65 I_I32_CONST 63
                                            stack.push(63);
                                            // opcode: 113 I_I32_AND
                                            stack.push(stack.pop() & stack.pop());
                                            // opcode: 65 I_I32_CONST 1
                                            stack.push(1);
                                            // opcode: 32 I_LOCAL_GET 1
                                            stack.push(local1);
                                            // opcode: 27 I_SELECT
                                            {
                                                const condition = stack.pop();
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(condition !== 0 ? x1 : x2)
                                            }
                                            // opcode: 65 I_I32_CONST 14
                                            stack.push(14);
                                            // opcode: 116 I_I32_SHL
                                            {
                                                const x = stack.pop();
                                                stack.push(stack.pop() << x);
                                            }
                                            // opcode: 106 I_I32_ADD
                                            stack.push(stack.pop() + stack.pop());
                                            // opcode: 36 I_GLOBAL_SET 0
                                            global0 = stack.pop();
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 65 I_I32_CONST 65536
                                        stack.push(65536);
                                        // opcode: 32 I_LOCAL_GET 0
                                        stack.push(local0);
                                        // opcode: 106 I_I32_ADD
                                        stack.push(stack.pop() + stack.pop());
                                        // opcode: 33 I_LOCAL_SET 0
                                        local0 = stack.pop();
                                        // opcode: 12 I_BR 7
                                        break block_0;
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 32 I_LOCAL_GET 2
                                    stack.push(local2);
                                    // opcode: 69 I_I32_EQZ
                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                    // opcode: 13 I_BR_IF 0
                                    if (stack.pop() !== 0) { break block_6; }
                                    // opcode: 32 I_LOCAL_GET 1
                                    stack.push(local1);
                                    // opcode: 65 I_I32_CONST 3
                                    stack.push(3);
                                    // opcode: 75 I_I32_GT_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() > x ? 1 : 0);
                                    }
                                    // opcode: 13 I_BR_IF 0
                                    if (stack.pop() !== 0) { break block_6; }
                                    // opcode: 65 I_I32_CONST 1114112
                                    stack.push(1114112);
                                    // opcode: 32 I_LOCAL_GET 1
                                    stack.push(local1);
                                    // opcode: 65 I_I32_CONST 13
                                    stack.push(13);
                                    // opcode: 116 I_I32_SHL
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 36 I_GLOBAL_SET 1
                                    global1 = stack.pop();
                                    // opcode: 11 I_END
                                }
                                // opcode: 35 I_GLOBAL_GET 0
                                stack.push(global0);
                                // opcode: 32 I_LOCAL_GET 0
                                stack.push(local0);
                                // opcode: 65 I_I32_CONST 16383
                                stack.push(16383);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 106 I_I32_ADD
                                stack.push(stack.pop() + stack.pop());
                                // opcode: 33 I_LOCAL_SET 0
                                local0 = stack.pop();
                                // opcode: 12 I_BR 5
                                break block_0;
                                // opcode: 11 I_END
                            }
                            // opcode: 35 I_GLOBAL_GET 1
                            stack.push(global1);
                            // opcode: 32 I_LOCAL_GET 0
                            stack.push(local0);
                            // opcode: 65 I_I32_CONST 8191
                            stack.push(8191);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 33 I_LOCAL_SET 0
                            local0 = stack.pop();
                            // opcode: 12 I_BR 3
                            break block_1;
                            // opcode: 11 I_END
                        }
                        // opcode: 32 I_LOCAL_GET 0
                        stack.push(local0);
                        // opcode: 65 I_I32_CONST 65024
                        stack.push(65024);
                        // opcode: 73 I_I32_LT_U
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        // opcode: 13 I_BR_IF 2
                        if (stack.pop() !== 0) { break block_1; }
                        // opcode: 32 I_LOCAL_GET 2
                        stack.push(local2);
                        // opcode: 13 I_BR_IF 1
                        if (stack.pop() !== 0) { break block_2; }
                        // opcode: 32 I_LOCAL_GET 0
                        stack.push(local0);
                        // opcode: 65 I_I32_CONST 65350
                        stack.push(65350);
                        // opcode: 71 I_I32_NE
                        stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                        // opcode: 13 I_BR_IF 0
                        if (stack.pop() !== 0) { break block_3; }
                        // opcode: 65 I_I32_CONST 159
                        stack.push(159);
                        // opcode: 33 I_LOCAL_SET 3
                        local3 = stack.pop();
                        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":3},{"opCode":32,"dat
                        loop_10: while (true) {
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 32 I_LOCAL_GET 1
                            stack.push(local1);
                            // opcode: 65 I_I32_CONST 8
                            stack.push(8);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 114 I_I32_OR
                            stack.push(stack.pop() | stack.pop());
                            // opcode: 16 I_CALL 3
                            stack.push(func3(stack.pop()));
                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":65024}
                            {
                                const x = stack.pop();
                                memory0[65024 + stack.pop()] = x;
                            }
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 65 I_I32_CONST 1
                            stack.push(1);
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 34 I_LOCAL_TEE 3
                            local3 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 78 I_I32_GE_S
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >= x ? 1 : 0);
                            }
                            // opcode: 13 I_BR_IF 0
                            if (stack.pop() !== 0) { continue loop_10; }
                            // opcode: 11 I_END
                            break loop_10;
                        }
                        // opcode: 11 I_END
                    }
                    // opcode: 32 I_LOCAL_GET 0
                    stack.push(local0);
                    // opcode: 32 I_LOCAL_GET 1
                    stack.push(local1);
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":0}
                    {
                        const x = stack.pop();
                        memory0[0 + stack.pop()] = x;
                    }
                    // opcode: 11 I_END
                }
                // opcode: 32 I_LOCAL_GET 0
                stack.push(local0);
                // opcode: 65 I_I32_CONST 65280
                stack.push(65280);
                // opcode: 71 I_I32_NE
                stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                // opcode: 13 I_BR_IF 1
                if (stack.pop() !== 0) { break block_0; }
                // opcode: 35 I_GLOBAL_GET 6
                stack.push(global6);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                // opcode: 65 I_I32_CONST 255
                stack.push(255);
                // opcode: 115 I_I32_XOR
                stack.push(stack.pop() ^ stack.pop());
                // opcode: 65 I_I32_CONST 4
                stack.push(4);
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 65 I_I32_CONST 3
                stack.push(3);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":12}
                stack.push(new DataView(memory0.buffer, 12 + stack.pop(), 1).getUint8(0));
                // opcode: 15 I_RETURN
                return stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { break block_0; }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":0}
            {
                const x = stack.pop();
                memory0[0 + stack.pop()] = x;
            }
            // opcode: 11 I_END
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        // opcode: 15 I_RETURN
        return stack.pop();
        // opcode: 0 I_UNREACHABLE
        throw new Error("unreachable code");
        // opcode: 11 I_END
        return stack[0];
    }
    function func3(local0) {
        const stack = [];
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 16 I_CALL 2
        {
            const args = stack.slice(-3);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(func2(...args));
        }
        // opcode: 11 I_END
        return stack[0];
    }
    function func4() {
        const stack = [];
        let local0 = 0;
        // opcode: 65 I_I32_CONST 10
        stack.push(10);
        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
        // opcode: 34 I_LOCAL_TEE 0
        local0 = stack[stack.length - 1];
        // opcode: 16 I_CALL 3
        stack.push(func3(stack.pop()));
        // opcode: 65 I_I32_CONST 10
        stack.push(10);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
        }
        // opcode: 11 I_END
        return stack[0];
    }
    function func5(local0) {
        const stack = [];
        let local1 = 0;
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
        // opcode: 34 I_LOCAL_TEE 1
        local1 = stack[stack.length - 1];
        // opcode: 16 I_CALL 3
        stack.push(func3(stack.pop()));
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 16 I_CALL 3
        stack.push(func3(stack.pop()));
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 65 I_I32_CONST 2
        stack.push(2);
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
        }
        // opcode: 11 I_END
        return stack[0];
    }
    function func6(local0) {
        const stack = [];
        let local1 = 0;
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 107 I_I32_SUB
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        // opcode: 34 I_LOCAL_TEE 1
        local1 = stack[stack.length - 1];
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 118 I_I32_SHR_U
        {
            const x = stack.pop();
            stack.push(stack.pop() >>> x);
        }
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 16 I_CALL 2
        {
            const args = stack.slice(-3);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(func2(...args));
        }
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 107 I_I32_SUB
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        // opcode: 34 I_LOCAL_TEE 1
        local1 = stack[stack.length - 1];
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 16 I_CALL 2
        {
            const args = stack.slice(-3);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(func2(...args));
        }
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
        }
        // opcode: 16 I_CALL 0
        func0();
        // opcode: 15 I_RETURN
        return;
        // opcode: 11 I_END
    }
    function func7(local0, local1, local2) {
        const stack = [];
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 65 I_I32_CONST 7
        stack.push(7);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 34 I_LOCAL_TEE 2
        local2 = stack[stack.length - 1];
        // opcode: 65 I_I32_CONST 6
        stack.push(6);
        // opcode: 70 I_I32_EQ
        stack.push(stack.pop() === stack.pop() ? 1 : 0);
        // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":65,"data":4},{"opCode":47
        if_0: if (stack.pop() !== 0) {
            // opcode: 65 I_I32_CONST 4
            stack.push(4);
            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 16 I_CALL 2
            {
                const args = stack.slice(-3);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(func2(...args));
            }
            // opcode: 5 I_ELSE
        } else {
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 69 I_I32_EQZ
            stack.push(stack.pop() === 0 ? 1 : 0);
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":2},{"opCode":45,
            if_1: if (stack.pop() !== 0) {
                // opcode: 32 I_LOCAL_GET 2
                stack.push(local2);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":16}
                stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 1).getUint8(0));
                // opcode: 32 I_LOCAL_GET 0
                stack.push(local0);
                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":0}
                {
                    const x = stack.pop();
                    memory0[0 + stack.pop()] = x;
                }
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":16}
            stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 1).getUint8(0));
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
            // opcode: 11 I_END
        }
        // opcode: 11 I_END
        return stack[0];
    }
    function func8(local0, local1) {
        const stack = [];
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 16 I_CALL 7
        {
            const args = stack.slice(-3);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(func7(...args));
        }
        // opcode: 11 I_END
        return stack[0];
    }
    function func9(local0, local1, local2, local3, local4) {
        const stack = [];
        // opcode: 65 I_I32_CONST 6
        stack.push(6);
        // opcode: 65 I_I32_CONST 6
        stack.push(6);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 69 I_I32_EQZ
        stack.push(stack.pop() === 0 ? 1 : 0);
        // opcode: 65 I_I32_CONST 7
        stack.push(7);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 65 I_I32_CONST 6
        stack.push(6);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 65 I_I32_CONST 5
        stack.push(5);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 32 I_LOCAL_GET 4
        stack.push(local4);
        // opcode: 65 I_I32_CONST 4
        stack.push(4);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":0}
        {
            const x = stack.pop();
            memory0[0 + stack.pop()] = x;
        }
        // opcode: 11 I_END
    }
    function func10(local0, local1, local2) {
        const stack = [];
        let local3 = 0;
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 4
        stack.push(4);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 65 I_I32_CONST 7
        stack.push(7);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 34 I_LOCAL_TEE 3
        local3 = stack[stack.length - 1];
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32769}
        stack.push(new DataView(memory0.buffer, 32769 + stack.pop(), 1).getUint8(0));
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 65 I_I32_CONST 7
        stack.push(7);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 34 I_LOCAL_TEE 2
        local2 = stack[stack.length - 1];
        // opcode: 118 I_I32_SHR_U
        {
            const x = stack.pop();
            stack.push(stack.pop() >>> x);
        }
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32768}
        stack.push(new DataView(memory0.buffer, 32768 + stack.pop(), 1).getUint8(0));
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 118 I_I32_SHR_U
        {
            const x = stack.pop();
            stack.push(stack.pop() >>> x);
        }
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 11 I_END
        return stack[0];
    }
    function func11() {
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
        let local15 = 0;
        let local16 = 0;
        let local17 = 0;
        let local18 = 0;
        let local19 = 0;
        let local20 = 0;
        let local21 = 0;
        let local22 = 0;
        let local23 = 0;
        let local24 = 0;
        let local25 = 0;
        let local26 = 0;
        let local27 = 0;
        let local28 = 0;
        let local29 = 0;
        let local30 = 0;
        let local31 = 0;
        let local32 = 0;
        let local33 = 0;
        let local34 = 0;
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":35,"data":5},{"opCode":33,"dat
        loop_0: while (true) {
            // opcode: 35 I_GLOBAL_GET 5
            stack.push(global5);
            // opcode: 33 I_LOCAL_SET 16
            local16 = stack.pop();
            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
            block_1: {
                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                block_2: {
                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                    block_3: {
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                        block_4: {
                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":35,"data":2},{"opCode":35,"dat
                            block_5: {
                                // opcode: 35 I_GLOBAL_GET 2
                                stack.push(global2);
                                // opcode: 35 I_GLOBAL_GET 6
                                stack.push(global6);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":15}
                                stack.push(new DataView(memory0.buffer, 15 + stack.pop(), 1).getUint8(0));
                                // opcode: 34 I_LOCAL_TEE 31
                                local31 = stack[stack.length - 1];
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 35 I_GLOBAL_GET 6
                                stack.push(global6);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":255}
                                stack.push(new DataView(memory0.buffer, 255 + stack.pop(), 1).getUint8(0));
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 13 I_BR_IF 0
                                if (stack.pop() !== 0) { break block_5; }
                                // opcode: 35 I_GLOBAL_GET 3
                                stack.push(global3);
                                // opcode: 13 I_BR_IF 1
                                if (stack.pop() !== 0) { break block_4; }
                                // opcode: 12 I_BR 2
                                break block_3;
                                // opcode: 11 I_END
                            }
                            // opcode: 35 I_GLOBAL_GET 6
                            stack.push(global6);
                            // opcode: 32 I_LOCAL_GET 31
                            stack.push(local31);
                            // opcode: 32 I_LOCAL_GET 31
                            stack.push(local31);
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 32 I_LOCAL_GET 31
                            stack.push(local31);
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 34 I_LOCAL_TEE 33
                            local33 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 255
                            stack.push(255);
                            // opcode: 115 I_I32_XOR
                            stack.push(stack.pop() ^ stack.pop());
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":15}
                            {
                                const x = stack.pop();
                                memory0[15 + stack.pop()] = x;
                            }
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 36 I_GLOBAL_SET 2
                            global2 = stack.pop();
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 36 I_GLOBAL_SET 3
                            global3 = stack.pop();
                            // opcode: 65 I_I32_CONST 10
                            stack.push(10);
                            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                            // opcode: 16 I_CALL 6
                            func6(stack.pop());
                            // opcode: 65 I_I32_CONST 10
                            stack.push(10);
                            // opcode: 65 I_I32_CONST 56
                            stack.push(56);
                            // opcode: 32 I_LOCAL_GET 33
                            stack.push(local33);
                            // opcode: 65 I_I32_CONST 3
                            stack.push(3);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                            }
                            // opcode: 16 I_CALL 0
                            func0();
                            // opcode: 12 I_BR 2
                            break block_2;
                            // opcode: 11 I_END
                        }
                        // opcode: 12 I_BR 1
                        break block_2;
                        // opcode: 11 I_END
                    }
                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                    block_6: {
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                        block_7: {
                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                            block_8: {
                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                block_9: {
                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                    block_10: {
                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                        block_11: {
                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                            block_12: {
                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                block_13: {
                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                    block_14: {
                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                        block_15: {
                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                            block_16: {
                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                block_17: {
                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                    block_18: {
                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                        block_19: {
                                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                            block_20: {
                                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                block_21: {
                                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                    block_22: {
                                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                        block_23: {
                                                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                            block_24: {
                                                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                block_25: {
                                                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                    block_26: {
                                                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                        block_27: {
                                                                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                            block_28: {
                                                                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                block_29: {
                                                                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                    block_30: {
                                                                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                        block_31: {
                                                                                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                            block_32: {
                                                                                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                block_33: {
                                                                                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                    block_34: {
                                                                                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                        block_35: {
                                                                                                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                            block_36: {
                                                                                                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                                block_37: {
                                                                                                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                                    block_38: {
                                                                                                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                                        block_39: {
                                                                                                                                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                                            block_40: {
                                                                                                                                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                                                                                                                                block_41: {
                                                                                                                                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":16,"data":4},{"opCode":33,"dat
                                                                                                                                                                    block_42: {
                                                                                                                                                                        // opcode: 16 I_CALL 4
                                                                                                                                                                        stack.push(func4());
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 0
                                                                                                                                                                        local0 = stack.pop();
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 0
                                                                                                                                                                        stack.push(local0);
                                                                                                                                                                        // opcode: 65 I_I32_CONST 8
                                                                                                                                                                        stack.push(8);
                                                                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 2
                                                                                                                                                                        local2 = stack.pop();
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 0
                                                                                                                                                                        stack.push(local0);
                                                                                                                                                                        // opcode: 65 I_I32_CONST 3
                                                                                                                                                                        stack.push(3);
                                                                                                                                                                        // opcode: 118 I_I32_SHR_U
                                                                                                                                                                        {
                                                                                                                                                                            const x = stack.pop();
                                                                                                                                                                            stack.push(stack.pop() >>> x);
                                                                                                                                                                        }
                                                                                                                                                                        // opcode: 65 I_I32_CONST 7
                                                                                                                                                                        stack.push(7);
                                                                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 3
                                                                                                                                                                        local3 = stack.pop();
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 0
                                                                                                                                                                        stack.push(local0);
                                                                                                                                                                        // opcode: 65 I_I32_CONST 4
                                                                                                                                                                        stack.push(4);
                                                                                                                                                                        // opcode: 118 I_I32_SHR_U
                                                                                                                                                                        {
                                                                                                                                                                            const x = stack.pop();
                                                                                                                                                                            stack.push(stack.pop() >>> x);
                                                                                                                                                                        }
                                                                                                                                                                        // opcode: 65 I_I32_CONST 3
                                                                                                                                                                        stack.push(3);
                                                                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 4
                                                                                                                                                                        local4 = stack.pop();
                                                                                                                                                                        // opcode: 65 I_I32_CONST 6
                                                                                                                                                                        stack.push(6);
                                                                                                                                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                                                                                                                                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 9
                                                                                                                                                                        local9 = stack.pop();
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 9
                                                                                                                                                                        stack.push(local9);
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                                                                                                                        stack.push(local3);
                                                                                                                                                                        // opcode: 65 I_I32_CONST 3
                                                                                                                                                                        stack.push(3);
                                                                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32}
                                                                                                                                                                        stack.push(new DataView(memory0.buffer, 32 + stack.pop(), 1).getUint8(0));
                                                                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                                                                                                                        stack.push(local3);
                                                                                                                                                                        // opcode: 65 I_I32_CONST 1
                                                                                                                                                                        stack.push(1);
                                                                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                                                                        // opcode: 115 I_I32_XOR
                                                                                                                                                                        stack.push(stack.pop() ^ stack.pop());
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 7
                                                                                                                                                                        local7 = stack.pop();
                                                                                                                                                                        // opcode: 65 I_I32_CONST 7
                                                                                                                                                                        stack.push(7);
                                                                                                                                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                                                                                                                                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 8
                                                                                                                                                                        local8 = stack.pop();
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 0
                                                                                                                                                                        stack.push(local0);
                                                                                                                                                                        // opcode: 65 I_I32_CONST 65
                                                                                                                                                                        stack.push(65);
                                                                                                                                                                        // opcode: 16 I_CALL 1
                                                                                                                                                                        {
                                                                                                                                                                            const args = stack.slice(-2);
                                                                                                                                                                            stack.pop();
                                                                                                                                                                            stack.pop();
                                                                                                                                                                            stack.push(func1(...args));
                                                                                                                                                                        }
                                                                                                                                                                        // opcode: 33 I_LOCAL_SET 1
                                                                                                                                                                        local1 = stack.pop();
                                                                                                                                                                        // opcode: 32 I_LOCAL_GET 1
                                                                                                                                                                        stack.push(local1);
                                                                                                                                                                        // opcode: 14 I_BR_TABLE {"branches":[0,0,0,0,0,0,0,2,3,4,5,6,7,8,9,10,11,12,13,15,1,1,1,
                                                                                                                                                                        {
                                                                                                                                                                            const target_idx = stack.pop();
                                                                                                                                                                            if(target_idx === 0) { break block_42; }
                                                                                                                                                                            else if(target_idx === 1) { break block_42; }
                                                                                                                                                                            else if(target_idx === 2) { break block_42; }
                                                                                                                                                                            else if(target_idx === 3) { break block_42; }
                                                                                                                                                                            else if(target_idx === 4) { break block_42; }
                                                                                                                                                                            else if(target_idx === 5) { break block_42; }
                                                                                                                                                                            else if(target_idx === 6) { break block_42; }
                                                                                                                                                                            else if(target_idx === 7) { break block_40; }
                                                                                                                                                                            else if(target_idx === 8) { break block_39; }
                                                                                                                                                                            else if(target_idx === 9) { break block_38; }
                                                                                                                                                                            else if(target_idx === 10) { break block_37; }
                                                                                                                                                                            else if(target_idx === 11) { break block_36; }
                                                                                                                                                                            else if(target_idx === 12) { break block_35; }
                                                                                                                                                                            else if(target_idx === 13) { break block_34; }
                                                                                                                                                                            else if(target_idx === 14) { break block_33; }
                                                                                                                                                                            else if(target_idx === 15) { break block_32; }
                                                                                                                                                                            else if(target_idx === 16) { break block_31; }
                                                                                                                                                                            else if(target_idx === 17) { break block_30; }
                                                                                                                                                                            else if(target_idx === 18) { break block_29; }
                                                                                                                                                                            else if(target_idx === 19) { break block_27; }
                                                                                                                                                                            else if(target_idx === 20) { break block_41; }
                                                                                                                                                                            else if(target_idx === 21) { break block_41; }
                                                                                                                                                                            else if(target_idx === 22) { break block_41; }
                                                                                                                                                                            else if(target_idx === 23) { break block_41; }
                                                                                                                                                                            else if(target_idx === 24) { break block_41; }
                                                                                                                                                                            else if(target_idx === 25) { break block_41; }
                                                                                                                                                                            else if(target_idx === 26) { break block_41; }
                                                                                                                                                                            else if(target_idx === 27) { break block_18; }
                                                                                                                                                                            else if(target_idx === 28) { break block_17; }
                                                                                                                                                                            else if(target_idx === 29) { break block_16; }
                                                                                                                                                                            else if(target_idx === 30) { break block_15; }
                                                                                                                                                                            else if(target_idx === 31) { break block_14; }
                                                                                                                                                                            else if(target_idx === 32) { break block_13; }
                                                                                                                                                                            else if(target_idx === 33) { break block_12; }
                                                                                                                                                                            else if(target_idx === 34) { break block_11; }
                                                                                                                                                                            else if(target_idx === 35) { break block_10; }
                                                                                                                                                                            else if(target_idx === 36) { break block_9; }
                                                                                                                                                                            else if(target_idx === 37) { break block_8; }
                                                                                                                                                                            else { break block_7; }
                                                                                                                                                                        }
                                                                                                                                                                        // opcode: 11 I_END
                                                                                                                                                                    }
                                                                                                                                                                    // opcode: 16 I_CALL 4
                                                                                                                                                                    stack.push(func4());
                                                                                                                                                                    // opcode: 33 I_LOCAL_SET 5
                                                                                                                                                                    local5 = stack.pop();
                                                                                                                                                                    // opcode: 32 I_LOCAL_GET 1
                                                                                                                                                                    stack.push(local1);
                                                                                                                                                                    // opcode: 14 I_BR_TABLE {"branches":[15,16,17,18,21],"def":22}
                                                                                                                                                                    {
                                                                                                                                                                        const target_idx = stack.pop();
                                                                                                                                                                        if(target_idx === 0) { break block_26; }
                                                                                                                                                                        else if(target_idx === 1) { break block_25; }
                                                                                                                                                                        else if(target_idx === 2) { break block_24; }
                                                                                                                                                                        else if(target_idx === 3) { break block_23; }
                                                                                                                                                                        else if(target_idx === 4) { break block_20; }
                                                                                                                                                                        else { break block_19; }
                                                                                                                                                                    }
                                                                                                                                                                    // opcode: 11 I_END
                                                                                                                                                                }
                                                                                                                                                                // opcode: 65 I_I32_CONST 0
                                                                                                                                                                stack.push(0);
                                                                                                                                                                // opcode: 65 I_I32_CONST 1
                                                                                                                                                                stack.push(1);
                                                                                                                                                                // opcode: 32 I_LOCAL_GET 0
                                                                                                                                                                stack.push(local0);
                                                                                                                                                                // opcode: 16 I_CALL 7
                                                                                                                                                                {
                                                                                                                                                                    const args = stack.slice(-3);
                                                                                                                                                                    stack.pop();
                                                                                                                                                                    stack.pop();
                                                                                                                                                                    stack.pop();
                                                                                                                                                                    stack.push(func7(...args));
                                                                                                                                                                }
                                                                                                                                                                // opcode: 34 I_LOCAL_TEE 6
                                                                                                                                                                local6 = stack[stack.length - 1];
                                                                                                                                                                // opcode: 33 I_LOCAL_SET 5
                                                                                                                                                                local5 = stack.pop();
                                                                                                                                                                // opcode: 32 I_LOCAL_GET 1
                                                                                                                                                                stack.push(local1);
                                                                                                                                                                // opcode: 65 I_I32_CONST 20
                                                                                                                                                                stack.push(20);
                                                                                                                                                                // opcode: 107 I_I32_SUB
                                                                                                                                                                {
                                                                                                                                                                    const x = stack.pop();
                                                                                                                                                                    stack.push(stack.pop() - x);
                                                                                                                                                                }
                                                                                                                                                                // opcode: 14 I_BR_TABLE {"branches":[12,14,15,16,17,20],"def":21}
                                                                                                                                                                {
                                                                                                                                                                    const target_idx = stack.pop();
                                                                                                                                                                    if(target_idx === 0) { break block_28; }
                                                                                                                                                                    else if(target_idx === 1) { break block_26; }
                                                                                                                                                                    else if(target_idx === 2) { break block_25; }
                                                                                                                                                                    else if(target_idx === 3) { break block_24; }
                                                                                                                                                                    else if(target_idx === 4) { break block_23; }
                                                                                                                                                                    else if(target_idx === 5) { break block_20; }
                                                                                                                                                                    else { break block_19; }
                                                                                                                                                                }
                                                                                                                                                                // opcode: 11 I_END
                                                                                                                                                            }
                                                                                                                                                            // opcode: 12 I_BR 35
                                                                                                                                                            break block_1;
                                                                                                                                                            // opcode: 11 I_END
                                                                                                                                                        }
                                                                                                                                                        // opcode: 32 I_LOCAL_GET 4
                                                                                                                                                        stack.push(local4);
                                                                                                                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":24}
                                                                                                                                                        stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 1).getUint8(0));
                                                                                                                                                        // opcode: 65 I_I32_CONST 10
                                                                                                                                                        stack.push(10);
                                                                                                                                                        // opcode: 16 I_CALL 5
                                                                                                                                                        stack.push(func5(stack.pop()));
                                                                                                                                                        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                                                                                                                        {
                                                                                                                                                            const x = stack.pop();
                                                                                                                                                            new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                                                                                                                        }
                                                                                                                                                        // opcode: 12 I_BR 34
                                                                                                                                                        break block_1;
                                                                                                                                                        // opcode: 11 I_END
                                                                                                                                                    }
                                                                                                                                                    // opcode: 32 I_LOCAL_GET 4
                                                                                                                                                    stack.push(local4);
                                                                                                                                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":28}
                                                                                                                                                    stack.push(new DataView(memory0.buffer, 28 + stack.pop(), 1).getUint8(0));
                                                                                                                                                    // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                                                                                                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                                                                                                                    // opcode: 32 I_LOCAL_GET 8
                                                                                                                                                    stack.push(local8);
                                                                                                                                                    // opcode: 32 I_LOCAL_GET 2
                                                                                                                                                    stack.push(local2);
                                                                                                                                                    // opcode: 16 I_CALL 2
                                                                                                                                                    {
                                                                                                                                                        const args = stack.slice(-3);
                                                                                                                                                        stack.pop();
                                                                                                                                                        stack.pop();
                                                                                                                                                        stack.pop();
                                                                                                                                                        stack.push(func2(...args));
                                                                                                                                                    }
                                                                                                                                                    // opcode: 32 I_LOCAL_GET 2
                                                                                                                                                    stack.push(local2);
                                                                                                                                                    // opcode: 69 I_I32_EQZ
                                                                                                                                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                                                    // opcode: 65 I_I32_CONST 7
                                                                                                                                                    stack.push(7);
                                                                                                                                                    // opcode: 16 I_CALL 7
                                                                                                                                                    {
                                                                                                                                                        const args = stack.slice(-3);
                                                                                                                                                        stack.pop();
                                                                                                                                                        stack.pop();
                                                                                                                                                        stack.pop();
                                                                                                                                                        stack.push(func7(...args));
                                                                                                                                                    }
                                                                                                                                                    // opcode: 32 I_LOCAL_GET 4
                                                                                                                                                    stack.push(local4);
                                                                                                                                                    // opcode: 65 I_I32_CONST 2
                                                                                                                                                    stack.push(2);
                                                                                                                                                    // opcode: 73 I_I32_LT_U
                                                                                                                                                    {
                                                                                                                                                        const x = stack.pop();
                                                                                                                                                        stack.push(stack.pop() < x ? 1 : 0);
                                                                                                                                                    }
                                                                                                                                                    // opcode: 13 I_BR_IF 33
                                                                                                                                                    if (stack.pop() !== 0) { break block_1; }
                                                                                                                                                    // opcode: 65 I_I32_CONST 4
                                                                                                                                                    stack.push(4);
                                                                                                                                                    // opcode: 65 I_I32_CONST 4
                                                                                                                                                    stack.push(4);
                                                                                                                                                    // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                                                                                                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                                                                                                                    // opcode: 65 I_I32_CONST 5
                                                                                                                                                    stack.push(5);
                                                                                                                                                    // opcode: 32 I_LOCAL_GET 4
                                                                                                                                                    stack.push(local4);
                                                                                                                                                    // opcode: 65 I_I32_CONST 2
                                                                                                                                                    stack.push(2);
                                                                                                                                                    // opcode: 108 I_I32_MUL
                                                                                                                                                    stack.push(stack.pop() * stack.pop());
                                                                                                                                                    // opcode: 107 I_I32_SUB
                                                                                                                                                    {
                                                                                                                                                        const x = stack.pop();
                                                                                                                                                        stack.push(stack.pop() - x);
                                                                                                                                                    }
                                                                                                                                                    // opcode: 106 I_I32_ADD
                                                                                                                                                    stack.push(stack.pop() + stack.pop());
                                                                                                                                                    // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                                                                                                                    {
                                                                                                                                                        const x = stack.pop();
                                                                                                                                                        new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                                                                                                                    }
                                                                                                                                                    // opcode: 12 I_BR 33
                                                                                                                                                    break block_1;
                                                                                                                                                    // opcode: 11 I_END
                                                                                                                                                }
                                                                                                                                                // opcode: 32 I_LOCAL_GET 4
                                                                                                                                                stack.push(local4);
                                                                                                                                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":24}
                                                                                                                                                stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 1).getUint8(0));
                                                                                                                                                // opcode: 34 I_LOCAL_TEE 10
                                                                                                                                                local10 = stack[stack.length - 1];
                                                                                                                                                // opcode: 32 I_LOCAL_GET 10
                                                                                                                                                stack.push(local10);
                                                                                                                                                // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                                                                                                                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                                                                                                                // opcode: 65 I_I32_CONST -1
                                                                                                                                                stack.push(-1);
                                                                                                                                                // opcode: 65 I_I32_CONST 1
                                                                                                                                                stack.push(1);
                                                                                                                                                // opcode: 32 I_LOCAL_GET 2
                                                                                                                                                stack.push(local2);
                                                                                                                                                // opcode: 27 I_SELECT
                                                                                                                                                {
                                                                                                                                                    const condition = stack.pop();
                                                                                                                                                    const x2 = stack.pop();
                                                                                                                                                    const x1 = stack.pop();
                                                                                                                                                    stack.push(condition !== 0 ? x1 : x2)
                                                                                                                                                }
                                                                                                                                                // opcode: 106 I_I32_ADD
                                                                                                                                                stack.push(stack.pop() + stack.pop());
                                                                                                                                                // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                                                                                                                {
                                                                                                                                                    const x = stack.pop();
                                                                                                                                                    new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                                                                                                                }
                                                                                                                                                // opcode: 12 I_BR 31
                                                                                                                                                break block_2;
                                                                                                                                                // opcode: 11 I_END
                                                                                                                                            }
                                                                                                                                            // opcode: 65 I_I32_CONST 0
                                                                                                                                            stack.push(0);
                                                                                                                                            // opcode: 65 I_I32_CONST 1
                                                                                                                                            stack.push(1);
                                                                                                                                            // opcode: 32 I_LOCAL_GET 3
                                                                                                                                            stack.push(local3);
                                                                                                                                            // opcode: 16 I_CALL 7
                                                                                                                                            {
                                                                                                                                                const args = stack.slice(-3);
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                stack.push(func7(...args));
                                                                                                                                            }
                                                                                                                                            // opcode: 33 I_LOCAL_SET 6
                                                                                                                                            local6 = stack.pop();
                                                                                                                                            // opcode: 32 I_LOCAL_GET 0
                                                                                                                                            stack.push(local0);
                                                                                                                                            // opcode: 65 I_I32_CONST 1
                                                                                                                                            stack.push(1);
                                                                                                                                            // opcode: 113 I_I32_AND
                                                                                                                                            stack.push(stack.pop() & stack.pop());
                                                                                                                                            // opcode: 33 I_LOCAL_SET 13
                                                                                                                                            local13 = stack.pop();
                                                                                                                                            // opcode: 32 I_LOCAL_GET 6
                                                                                                                                            stack.push(local6);
                                                                                                                                            // opcode: 65 I_I32_CONST -1
                                                                                                                                            stack.push(-1);
                                                                                                                                            // opcode: 65 I_I32_CONST 1
                                                                                                                                            stack.push(1);
                                                                                                                                            // opcode: 32 I_LOCAL_GET 13
                                                                                                                                            stack.push(local13);
                                                                                                                                            // opcode: 27 I_SELECT
                                                                                                                                            {
                                                                                                                                                const condition = stack.pop();
                                                                                                                                                const x2 = stack.pop();
                                                                                                                                                const x1 = stack.pop();
                                                                                                                                                stack.push(condition !== 0 ? x1 : x2)
                                                                                                                                            }
                                                                                                                                            // opcode: 106 I_I32_ADD
                                                                                                                                            stack.push(stack.pop() + stack.pop());
                                                                                                                                            // opcode: 34 I_LOCAL_TEE 6
                                                                                                                                            local6 = stack[stack.length - 1];
                                                                                                                                            // opcode: 32 I_LOCAL_GET 3
                                                                                                                                            stack.push(local3);
                                                                                                                                            // opcode: 16 I_CALL 8
                                                                                                                                            {
                                                                                                                                                const args = stack.slice(-2);
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                stack.push(func8(...args));
                                                                                                                                            }
                                                                                                                                            // opcode: 65 I_I32_CONST 16
                                                                                                                                            stack.push(16);
                                                                                                                                            // opcode: 32 I_LOCAL_GET 6
                                                                                                                                            stack.push(local6);
                                                                                                                                            // opcode: 65 I_I32_CONST 255
                                                                                                                                            stack.push(255);
                                                                                                                                            // opcode: 113 I_I32_AND
                                                                                                                                            stack.push(stack.pop() & stack.pop());
                                                                                                                                            // opcode: 32 I_LOCAL_GET 13
                                                                                                                                            stack.push(local13);
                                                                                                                                            // opcode: 32 I_LOCAL_GET 6
                                                                                                                                            stack.push(local6);
                                                                                                                                            // opcode: 32 I_LOCAL_GET 13
                                                                                                                                            stack.push(local13);
                                                                                                                                            // opcode: 106 I_I32_ADD
                                                                                                                                            stack.push(stack.pop() + stack.pop());
                                                                                                                                            // opcode: 65 I_I32_CONST 15
                                                                                                                                            stack.push(15);
                                                                                                                                            // opcode: 113 I_I32_AND
                                                                                                                                            stack.push(stack.pop() & stack.pop());
                                                                                                                                            // opcode: 69 I_I32_EQZ
                                                                                                                                            stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                                            // opcode: 65 I_I32_CONST 0
                                                                                                                                            stack.push(0);
                                                                                                                                            // opcode: 16 I_CALL 9
                                                                                                                                            {
                                                                                                                                                const args = stack.slice(-5);
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                stack.pop();
                                                                                                                                                func9(...args);
                                                                                                                                            }
                                                                                                                                            // opcode: 12 I_BR 31
                                                                                                                                            break block_1;
                                                                                                                                            // opcode: 11 I_END
                                                                                                                                        }
                                                                                                                                        // opcode: 16 I_CALL 4
                                                                                                                                        stack.push(func4());
                                                                                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                                                                                        stack.push(local3);
                                                                                                                                        // opcode: 16 I_CALL 8
                                                                                                                                        {
                                                                                                                                            const args = stack.slice(-2);
                                                                                                                                            stack.pop();
                                                                                                                                            stack.pop();
                                                                                                                                            stack.push(func8(...args));
                                                                                                                                        }
                                                                                                                                        // opcode: 12 I_BR 30
                                                                                                                                        break block_1;
                                                                                                                                        // opcode: 11 I_END
                                                                                                                                    }
                                                                                                                                    // opcode: 32 I_LOCAL_GET 4
                                                                                                                                    stack.push(local4);
                                                                                                                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":24}
                                                                                                                                    stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 1).getUint8(0));
                                                                                                                                    // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                                                                                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                                                                                                    // opcode: 33 I_LOCAL_SET 10
                                                                                                                                    local10 = stack.pop();
                                                                                                                                    // opcode: 65 I_I32_CONST 128
                                                                                                                                    stack.push(128);
                                                                                                                                    // opcode: 65 I_I32_CONST 1
                                                                                                                                    stack.push(1);
                                                                                                                                    // opcode: 65 I_I32_CONST 0
                                                                                                                                    stack.push(0);
                                                                                                                                    // opcode: 65 I_I32_CONST 4
                                                                                                                                    stack.push(4);
                                                                                                                                    // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                                                                                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                                                                                                    // opcode: 34 I_LOCAL_TEE 11
                                                                                                                                    local11 = stack[stack.length - 1];
                                                                                                                                    // opcode: 65 I_I32_CONST 4095
                                                                                                                                    stack.push(4095);
                                                                                                                                    // opcode: 113 I_I32_AND
                                                                                                                                    stack.push(stack.pop() & stack.pop());
                                                                                                                                    // opcode: 32 I_LOCAL_GET 10
                                                                                                                                    stack.push(local10);
                                                                                                                                    // opcode: 65 I_I32_CONST 4095
                                                                                                                                    stack.push(4095);
                                                                                                                                    // opcode: 113 I_I32_AND
                                                                                                                                    stack.push(stack.pop() & stack.pop());
                                                                                                                                    // opcode: 106 I_I32_ADD
                                                                                                                                    stack.push(stack.pop() + stack.pop());
                                                                                                                                    // opcode: 65 I_I32_CONST 4095
                                                                                                                                    stack.push(4095);
                                                                                                                                    // opcode: 75 I_I32_GT_U
                                                                                                                                    {
                                                                                                                                        const x = stack.pop();
                                                                                                                                        stack.push(stack.pop() > x ? 1 : 0);
                                                                                                                                    }
                                                                                                                                    // opcode: 32 I_LOCAL_GET 11
                                                                                                                                    stack.push(local11);
                                                                                                                                    // opcode: 32 I_LOCAL_GET 10
                                                                                                                                    stack.push(local10);
                                                                                                                                    // opcode: 106 I_I32_ADD
                                                                                                                                    stack.push(stack.pop() + stack.pop());
                                                                                                                                    // opcode: 65 I_I32_CONST 65535
                                                                                                                                    stack.push(65535);
                                                                                                                                    // opcode: 75 I_I32_GT_U
                                                                                                                                    {
                                                                                                                                        const x = stack.pop();
                                                                                                                                        stack.push(stack.pop() > x ? 1 : 0);
                                                                                                                                    }
                                                                                                                                    // opcode: 16 I_CALL 9
                                                                                                                                    {
                                                                                                                                        const args = stack.slice(-5);
                                                                                                                                        stack.pop();
                                                                                                                                        stack.pop();
                                                                                                                                        stack.pop();
                                                                                                                                        stack.pop();
                                                                                                                                        stack.pop();
                                                                                                                                        func9(...args);
                                                                                                                                    }
                                                                                                                                    // opcode: 65 I_I32_CONST 4
                                                                                                                                    stack.push(4);
                                                                                                                                    // opcode: 32 I_LOCAL_GET 11
                                                                                                                                    stack.push(local11);
                                                                                                                                    // opcode: 32 I_LOCAL_GET 10
                                                                                                                                    stack.push(local10);
                                                                                                                                    // opcode: 106 I_I32_ADD
                                                                                                                                    stack.push(stack.pop() + stack.pop());
                                                                                                                                    // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                                                                                                    {
                                                                                                                                        const x = stack.pop();
                                                                                                                                        new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                                                                                                    }
                                                                                                                                    // opcode: 12 I_BR 28
                                                                                                                                    break block_2;
                                                                                                                                    // opcode: 11 I_END
                                                                                                                                }
                                                                                                                                // opcode: 65 I_I32_CONST 1
                                                                                                                                stack.push(1);
                                                                                                                                // opcode: 33 I_LOCAL_SET 13
                                                                                                                                local13 = stack.pop();
                                                                                                                                // opcode: 12 I_BR 26
                                                                                                                                break block_6;
                                                                                                                                // opcode: 11 I_END
                                                                                                                            }
                                                                                                                            // opcode: 16 I_CALL 4
                                                                                                                            stack.push(func4());
                                                                                                                            // opcode: 33 I_LOCAL_SET 10
                                                                                                                            local10 = stack.pop();
                                                                                                                            // opcode: 32 I_LOCAL_GET 0
                                                                                                                            stack.push(local0);
                                                                                                                            // opcode: 65 I_I32_CONST 24
                                                                                                                            stack.push(24);
                                                                                                                            // opcode: 71 I_I32_NE
                                                                                                                            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                                                                                                            // opcode: 32 I_LOCAL_GET 7
                                                                                                                            stack.push(local7);
                                                                                                                            // opcode: 113 I_I32_AND
                                                                                                                            stack.push(stack.pop() & stack.pop());
                                                                                                                            // opcode: 13 I_BR_IF 27
                                                                                                                            if (stack.pop() !== 0) { break block_1; }
                                                                                                                            // opcode: 65 I_I32_CONST 10
                                                                                                                            stack.push(10);
                                                                                                                            // opcode: 65 I_I32_CONST 10
                                                                                                                            stack.push(10);
                                                                                                                            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                                                                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                                                                                            // opcode: 32 I_LOCAL_GET 10
                                                                                                                            stack.push(local10);
                                                                                                                            // opcode: 192 I_I32_EXTEND_8_S
                                                                                                                            // opcode: 106 I_I32_ADD
                                                                                                                            stack.push(stack.pop() + stack.pop());
                                                                                                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                                                                                            {
                                                                                                                                const x = stack.pop();
                                                                                                                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                                                                                            }
                                                                                                                            // opcode: 12 I_BR 26
                                                                                                                            break block_2;
                                                                                                                            // opcode: 11 I_END
                                                                                                                        }
                                                                                                                        // opcode: 65 I_I32_CONST 0
                                                                                                                        stack.push(0);
                                                                                                                        // opcode: 34 I_LOCAL_TEE 10
                                                                                                                        local10 = stack[stack.length - 1];
                                                                                                                        // opcode: 33 I_LOCAL_SET 14
                                                                                                                        local14 = stack.pop();
                                                                                                                        // opcode: 32 I_LOCAL_GET 9
                                                                                                                        stack.push(local9);
                                                                                                                        // opcode: 65 I_I32_CONST 64
                                                                                                                        stack.push(64);
                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                        // opcode: 33 I_LOCAL_SET 13
                                                                                                                        local13 = stack.pop();
                                                                                                                        // opcode: 32 I_LOCAL_GET 9
                                                                                                                        stack.push(local9);
                                                                                                                        // opcode: 65 I_I32_CONST 32
                                                                                                                        stack.push(32);
                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                        // opcode: 32 I_LOCAL_GET 13
                                                                                                                        stack.push(local13);
                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                                                                        stack.push(local8);
                                                                                                                        // opcode: 65 I_I32_CONST 15
                                                                                                                        stack.push(15);
                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                        // opcode: 65 I_I32_CONST 9
                                                                                                                        stack.push(9);
                                                                                                                        // opcode: 75 I_I32_GT_U
                                                                                                                        {
                                                                                                                            const x = stack.pop();
                                                                                                                            stack.push(stack.pop() > x ? 1 : 0);
                                                                                                                        }
                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                        // opcode: 114 I_I32_OR
                                                                                                                        stack.push(stack.pop() | stack.pop());
                                                                                                                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":6},{"opCode":33,
                                                                                                                        if_43: if (stack.pop() !== 0) {
                                                                                                                            // opcode: 65 I_I32_CONST 6
                                                                                                                            stack.push(6);
                                                                                                                            // opcode: 33 I_LOCAL_SET 10
                                                                                                                            local10 = stack.pop();
                                                                                                                            // opcode: 11 I_END
                                                                                                                        }
                                                                                                                        // opcode: 32 I_LOCAL_GET 9
                                                                                                                        stack.push(local9);
                                                                                                                        // opcode: 65 I_I32_CONST 16
                                                                                                                        stack.push(16);
                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                        // opcode: 32 I_LOCAL_GET 13
                                                                                                                        stack.push(local13);
                                                                                                                        // opcode: 69 I_I32_EQZ
                                                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                                                                        stack.push(local8);
                                                                                                                        // opcode: 65 I_I32_CONST 153
                                                                                                                        stack.push(153);
                                                                                                                        // opcode: 75 I_I32_GT_U
                                                                                                                        {
                                                                                                                            const x = stack.pop();
                                                                                                                            stack.push(stack.pop() > x ? 1 : 0);
                                                                                                                        }
                                                                                                                        // opcode: 113 I_I32_AND
                                                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                                                        // opcode: 114 I_I32_OR
                                                                                                                        stack.push(stack.pop() | stack.pop());
                                                                                                                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":10},{"opCode":65
                                                                                                                        if_44: if (stack.pop() !== 0) {
                                                                                                                            // opcode: 32 I_LOCAL_GET 10
                                                                                                                            stack.push(local10);
                                                                                                                            // opcode: 65 I_I32_CONST 96
                                                                                                                            stack.push(96);
                                                                                                                            // opcode: 114 I_I32_OR
                                                                                                                            stack.push(stack.pop() | stack.pop());
                                                                                                                            // opcode: 33 I_LOCAL_SET 10
                                                                                                                            local10 = stack.pop();
                                                                                                                            // opcode: 65 I_I32_CONST 1
                                                                                                                            stack.push(1);
                                                                                                                            // opcode: 33 I_LOCAL_SET 14
                                                                                                                            local14 = stack.pop();
                                                                                                                            // opcode: 11 I_END
                                                                                                                        }
                                                                                                                        // opcode: 65 I_I32_CONST 65
                                                                                                                        stack.push(65);
                                                                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                                                                        stack.push(local8);
                                                                                                                        // opcode: 65 I_I32_CONST -1
                                                                                                                        stack.push(-1);
                                                                                                                        // opcode: 65 I_I32_CONST 1
                                                                                                                        stack.push(1);
                                                                                                                        // opcode: 32 I_LOCAL_GET 13
                                                                                                                        stack.push(local13);
                                                                                                                        // opcode: 27 I_SELECT
                                                                                                                        {
                                                                                                                            const condition = stack.pop();
                                                                                                                            const x2 = stack.pop();
                                                                                                                            const x1 = stack.pop();
                                                                                                                            stack.push(condition !== 0 ? x1 : x2)
                                                                                                                        }
                                                                                                                        // opcode: 32 I_LOCAL_GET 10
                                                                                                                        stack.push(local10);
                                                                                                                        // opcode: 108 I_I32_MUL
                                                                                                                        stack.push(stack.pop() * stack.pop());
                                                                                                                        // opcode: 106 I_I32_ADD
                                                                                                                        stack.push(stack.pop() + stack.pop());
                                                                                                                        // opcode: 65 I_I32_CONST 7
                                                                                                                        stack.push(7);
                                                                                                                        // opcode: 16 I_CALL 8
                                                                                                                        {
                                                                                                                            const args = stack.slice(-2);
                                                                                                                            stack.pop();
                                                                                                                            stack.pop();
                                                                                                                            stack.push(func8(...args));
                                                                                                                        }
                                                                                                                        // opcode: 65 I_I32_CONST 0
                                                                                                                        stack.push(0);
                                                                                                                        // opcode: 65 I_I32_CONST 0
                                                                                                                        stack.push(0);
                                                                                                                        // opcode: 32 I_LOCAL_GET 14
                                                                                                                        stack.push(local14);
                                                                                                                        // opcode: 16 I_CALL 9
                                                                                                                        {
                                                                                                                            const args = stack.slice(-5);
                                                                                                                            stack.pop();
                                                                                                                            stack.pop();
                                                                                                                            stack.pop();
                                                                                                                            stack.pop();
                                                                                                                            stack.pop();
                                                                                                                            func9(...args);
                                                                                                                        }
                                                                                                                        // opcode: 12 I_BR 26
                                                                                                                        break block_1;
                                                                                                                        // opcode: 11 I_END
                                                                                                                    }
                                                                                                                    // opcode: 65 I_I32_CONST 7
                                                                                                                    stack.push(7);
                                                                                                                    // opcode: 32 I_LOCAL_GET 8
                                                                                                                    stack.push(local8);
                                                                                                                    // opcode: 65 I_I32_CONST 255
                                                                                                                    stack.push(255);
                                                                                                                    // opcode: 115 I_I32_XOR
                                                                                                                    stack.push(stack.pop() ^ stack.pop());
                                                                                                                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":0}
                                                                                                                    {
                                                                                                                        const x = stack.pop();
                                                                                                                        memory0[0 + stack.pop()] = x;
                                                                                                                    }
                                                                                                                    // opcode: 65 I_I32_CONST 144
                                                                                                                    stack.push(144);
                                                                                                                    // opcode: 65 I_I32_CONST 1
                                                                                                                    stack.push(1);
                                                                                                                    // opcode: 65 I_I32_CONST 1
                                                                                                                    stack.push(1);
                                                                                                                    // opcode: 65 I_I32_CONST 1
                                                                                                                    stack.push(1);
                                                                                                                    // opcode: 65 I_I32_CONST 0
                                                                                                                    stack.push(0);
                                                                                                                    // opcode: 16 I_CALL 9
                                                                                                                    {
                                                                                                                        const args = stack.slice(-5);
                                                                                                                        stack.pop();
                                                                                                                        stack.pop();
                                                                                                                        stack.pop();
                                                                                                                        stack.pop();
                                                                                                                        stack.pop();
                                                                                                                        func9(...args);
                                                                                                                    }
                                                                                                                    // opcode: 12 I_BR 25
                                                                                                                    break block_1;
                                                                                                                    // opcode: 11 I_END
                                                                                                                }
                                                                                                                // opcode: 65 I_I32_CONST 128
                                                                                                                stack.push(128);
                                                                                                                // opcode: 65 I_I32_CONST 1
                                                                                                                stack.push(1);
                                                                                                                // opcode: 65 I_I32_CONST 0
                                                                                                                stack.push(0);
                                                                                                                // opcode: 65 I_I32_CONST 0
                                                                                                                stack.push(0);
                                                                                                                // opcode: 32 I_LOCAL_GET 9
                                                                                                                stack.push(local9);
                                                                                                                // opcode: 65 I_I32_CONST 16
                                                                                                                stack.push(16);
                                                                                                                // opcode: 113 I_I32_AND
                                                                                                                stack.push(stack.pop() & stack.pop());
                                                                                                                // opcode: 69 I_I32_EQZ
                                                                                                                stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                                                // opcode: 65 I_I32_CONST 1
                                                                                                                stack.push(1);
                                                                                                                // opcode: 32 I_LOCAL_GET 2
                                                                                                                stack.push(local2);
                                                                                                                // opcode: 27 I_SELECT
                                                                                                                {
                                                                                                                    const condition = stack.pop();
                                                                                                                    const x2 = stack.pop();
                                                                                                                    const x1 = stack.pop();
                                                                                                                    stack.push(condition !== 0 ? x1 : x2)
                                                                                                                }
                                                                                                                // opcode: 16 I_CALL 9
                                                                                                                {
                                                                                                                    const args = stack.slice(-5);
                                                                                                                    stack.pop();
                                                                                                                    stack.pop();
                                                                                                                    stack.pop();
                                                                                                                    stack.pop();
                                                                                                                    stack.pop();
                                                                                                                    func9(...args);
                                                                                                                }
                                                                                                                // opcode: 12 I_BR 24
                                                                                                                break block_1;
                                                                                                                // opcode: 11 I_END
                                                                                                            }
                                                                                                            // opcode: 32 I_LOCAL_GET 6
                                                                                                            stack.push(local6);
                                                                                                            // opcode: 32 I_LOCAL_GET 3
                                                                                                            stack.push(local3);
                                                                                                            // opcode: 16 I_CALL 8
                                                                                                            {
                                                                                                                const args = stack.slice(-2);
                                                                                                                stack.pop();
                                                                                                                stack.pop();
                                                                                                                stack.push(func8(...args));
                                                                                                            }
                                                                                                            // opcode: 12 I_BR 23
                                                                                                            break block_1;
                                                                                                            // opcode: 11 I_END
                                                                                                        }
                                                                                                        // opcode: 65 I_I32_CONST 1
                                                                                                        stack.push(1);
                                                                                                        // opcode: 36 I_GLOBAL_SET 3
                                                                                                        global3 = stack.pop();
                                                                                                        // opcode: 12 I_BR 22
                                                                                                        break block_1;
                                                                                                        // opcode: 11 I_END
                                                                                                    }
                                                                                                    // opcode: 65 I_I32_CONST 0
                                                                                                    stack.push(0);
                                                                                                    // opcode: 34 I_LOCAL_TEE 14
                                                                                                    local14 = stack[stack.length - 1];
                                                                                                    // opcode: 33 I_LOCAL_SET 13
                                                                                                    local13 = stack.pop();
                                                                                                    // opcode: 12 I_BR 4
                                                                                                    break block_21;
                                                                                                    // opcode: 11 I_END
                                                                                                }
                                                                                                // opcode: 65 I_I32_CONST 0
                                                                                                stack.push(0);
                                                                                                // opcode: 33 I_LOCAL_SET 13
                                                                                                local13 = stack.pop();
                                                                                                // opcode: 32 I_LOCAL_GET 9
                                                                                                stack.push(local9);
                                                                                                // opcode: 65 I_I32_CONST 4
                                                                                                stack.push(4);
                                                                                                // opcode: 118 I_I32_SHR_U
                                                                                                {
                                                                                                    const x = stack.pop();
                                                                                                    stack.push(stack.pop() >>> x);
                                                                                                }
                                                                                                // opcode: 65 I_I32_CONST 1
                                                                                                stack.push(1);
                                                                                                // opcode: 113 I_I32_AND
                                                                                                stack.push(stack.pop() & stack.pop());
                                                                                                // opcode: 33 I_LOCAL_SET 14
                                                                                                local14 = stack.pop();
                                                                                                // opcode: 12 I_BR 3
                                                                                                break block_21;
                                                                                                // opcode: 11 I_END
                                                                                            }
                                                                                            // opcode: 65 I_I32_CONST 1
                                                                                            stack.push(1);
                                                                                            // opcode: 33 I_LOCAL_SET 14
                                                                                            local14 = stack.pop();
                                                                                            // opcode: 12 I_BR 1
                                                                                            break block_22;
                                                                                            // opcode: 11 I_END
                                                                                        }
                                                                                        // opcode: 32 I_LOCAL_GET 9
                                                                                        stack.push(local9);
                                                                                        // opcode: 65 I_I32_CONST 4
                                                                                        stack.push(4);
                                                                                        // opcode: 118 I_I32_SHR_U
                                                                                        {
                                                                                            const x = stack.pop();
                                                                                            stack.push(stack.pop() >>> x);
                                                                                        }
                                                                                        // opcode: 65 I_I32_CONST 1
                                                                                        stack.push(1);
                                                                                        // opcode: 113 I_I32_AND
                                                                                        stack.push(stack.pop() & stack.pop());
                                                                                        // opcode: 69 I_I32_EQZ
                                                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                                                        // opcode: 33 I_LOCAL_SET 14
                                                                                        local14 = stack.pop();
                                                                                        // opcode: 11 I_END
                                                                                    }
                                                                                    // opcode: 65 I_I32_CONST 1
                                                                                    stack.push(1);
                                                                                    // opcode: 33 I_LOCAL_SET 13
                                                                                    local13 = stack.pop();
                                                                                    // opcode: 32 I_LOCAL_GET 5
                                                                                    stack.push(local5);
                                                                                    // opcode: 65 I_I32_CONST 255
                                                                                    stack.push(255);
                                                                                    // opcode: 115 I_I32_XOR
                                                                                    stack.push(stack.pop() ^ stack.pop());
                                                                                    // opcode: 33 I_LOCAL_SET 5
                                                                                    local5 = stack.pop();
                                                                                    // opcode: 11 I_END
                                                                                }
                                                                                // opcode: 65 I_I32_CONST 0
                                                                                stack.push(0);
                                                                                // opcode: 32 I_LOCAL_GET 8
                                                                                stack.push(local8);
                                                                                // opcode: 32 I_LOCAL_GET 5
                                                                                stack.push(local5);
                                                                                // opcode: 106 I_I32_ADD
                                                                                stack.push(stack.pop() + stack.pop());
                                                                                // opcode: 32 I_LOCAL_GET 14
                                                                                stack.push(local14);
                                                                                // opcode: 106 I_I32_ADD
                                                                                stack.push(stack.pop() + stack.pop());
                                                                                // opcode: 34 I_LOCAL_TEE 10
                                                                                local10 = stack[stack.length - 1];
                                                                                // opcode: 65 I_I32_CONST 255
                                                                                stack.push(255);
                                                                                // opcode: 113 I_I32_AND
                                                                                stack.push(stack.pop() & stack.pop());
                                                                                // opcode: 32 I_LOCAL_GET 13
                                                                                stack.push(local13);
                                                                                // opcode: 32 I_LOCAL_GET 8
                                                                                stack.push(local8);
                                                                                // opcode: 65 I_I32_CONST 15
                                                                                stack.push(15);
                                                                                // opcode: 113 I_I32_AND
                                                                                stack.push(stack.pop() & stack.pop());
                                                                                // opcode: 32 I_LOCAL_GET 5
                                                                                stack.push(local5);
                                                                                // opcode: 65 I_I32_CONST 15
                                                                                stack.push(15);
                                                                                // opcode: 113 I_I32_AND
                                                                                stack.push(stack.pop() & stack.pop());
                                                                                // opcode: 106 I_I32_ADD
                                                                                stack.push(stack.pop() + stack.pop());
                                                                                // opcode: 32 I_LOCAL_GET 14
                                                                                stack.push(local14);
                                                                                // opcode: 106 I_I32_ADD
                                                                                stack.push(stack.pop() + stack.pop());
                                                                                // opcode: 65 I_I32_CONST 15
                                                                                stack.push(15);
                                                                                // opcode: 75 I_I32_GT_U
                                                                                {
                                                                                    const x = stack.pop();
                                                                                    stack.push(stack.pop() > x ? 1 : 0);
                                                                                }
                                                                                // opcode: 32 I_LOCAL_GET 13
                                                                                stack.push(local13);
                                                                                // opcode: 115 I_I32_XOR
                                                                                stack.push(stack.pop() ^ stack.pop());
                                                                                // opcode: 32 I_LOCAL_GET 10
                                                                                stack.push(local10);
                                                                                // opcode: 65 I_I32_CONST 255
                                                                                stack.push(255);
                                                                                // opcode: 75 I_I32_GT_U
                                                                                {
                                                                                    const x = stack.pop();
                                                                                    stack.push(stack.pop() > x ? 1 : 0);
                                                                                }
                                                                                // opcode: 32 I_LOCAL_GET 13
                                                                                stack.push(local13);
                                                                                // opcode: 115 I_I32_XOR
                                                                                stack.push(stack.pop() ^ stack.pop());
                                                                                // opcode: 16 I_CALL 9
                                                                                {
                                                                                    const args = stack.slice(-5);
                                                                                    stack.pop();
                                                                                    stack.pop();
                                                                                    stack.pop();
                                                                                    stack.pop();
                                                                                    stack.pop();
                                                                                    func9(...args);
                                                                                }
                                                                                // opcode: 32 I_LOCAL_GET 3
                                                                                stack.push(local3);
                                                                                // opcode: 65 I_I32_CONST 7
                                                                                stack.push(7);
                                                                                // opcode: 70 I_I32_EQ
                                                                                stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                                                                // opcode: 13 I_BR_IF 16
                                                                                if (stack.pop() !== 0) { break block_1; }
                                                                                // opcode: 65 I_I32_CONST 7
                                                                                stack.push(7);
                                                                                // opcode: 32 I_LOCAL_GET 10
                                                                                stack.push(local10);
                                                                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":0}
                                                                                {
                                                                                    const x = stack.pop();
                                                                                    memory0[0 + stack.pop()] = x;
                                                                                }
                                                                                // opcode: 12 I_BR 16
                                                                                break block_1;
                                                                                // opcode: 11 I_END
                                                                            }
                                                                            // opcode: 65 I_I32_CONST 0
                                                                            stack.push(0);
                                                                            // opcode: 32 I_LOCAL_GET 8
                                                                            stack.push(local8);
                                                                            // opcode: 32 I_LOCAL_GET 5
                                                                            stack.push(local5);
                                                                            // opcode: 113 I_I32_AND
                                                                            stack.push(stack.pop() & stack.pop());
                                                                            // opcode: 65 I_I32_CONST 7
                                                                            stack.push(7);
                                                                            // opcode: 16 I_CALL 8
                                                                            {
                                                                                const args = stack.slice(-2);
                                                                                stack.pop();
                                                                                stack.pop();
                                                                                stack.push(func8(...args));
                                                                            }
                                                                            // opcode: 65 I_I32_CONST 0
                                                                            stack.push(0);
                                                                            // opcode: 65 I_I32_CONST 1
                                                                            stack.push(1);
                                                                            // opcode: 65 I_I32_CONST 0
                                                                            stack.push(0);
                                                                            // opcode: 16 I_CALL 9
                                                                            {
                                                                                const args = stack.slice(-5);
                                                                                stack.pop();
                                                                                stack.pop();
                                                                                stack.pop();
                                                                                stack.pop();
                                                                                stack.pop();
                                                                                func9(...args);
                                                                            }
                                                                            // opcode: 12 I_BR 15
                                                                            break block_1;
                                                                            // opcode: 11 I_END
                                                                        }
                                                                        // opcode: 65 I_I32_CONST 0
                                                                        stack.push(0);
                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                        stack.push(local8);
                                                                        // opcode: 32 I_LOCAL_GET 5
                                                                        stack.push(local5);
                                                                        // opcode: 114 I_I32_OR
                                                                        stack.push(stack.pop() | stack.pop());
                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                        stack.push(local8);
                                                                        // opcode: 32 I_LOCAL_GET 5
                                                                        stack.push(local5);
                                                                        // opcode: 115 I_I32_XOR
                                                                        stack.push(stack.pop() ^ stack.pop());
                                                                        // opcode: 32 I_LOCAL_GET 0
                                                                        stack.push(local0);
                                                                        // opcode: 65 I_I32_CONST 16
                                                                        stack.push(16);
                                                                        // opcode: 113 I_I32_AND
                                                                        stack.push(stack.pop() & stack.pop());
                                                                        // opcode: 27 I_SELECT
                                                                        {
                                                                            const condition = stack.pop();
                                                                            const x2 = stack.pop();
                                                                            const x1 = stack.pop();
                                                                            stack.push(condition !== 0 ? x1 : x2)
                                                                        }
                                                                        // opcode: 65 I_I32_CONST 7
                                                                        stack.push(7);
                                                                        // opcode: 16 I_CALL 8
                                                                        {
                                                                            const args = stack.slice(-2);
                                                                            stack.pop();
                                                                            stack.pop();
                                                                            stack.push(func8(...args));
                                                                        }
                                                                        // opcode: 65 I_I32_CONST 0
                                                                        stack.push(0);
                                                                        // opcode: 65 I_I32_CONST 0
                                                                        stack.push(0);
                                                                        // opcode: 65 I_I32_CONST 0
                                                                        stack.push(0);
                                                                        // opcode: 16 I_CALL 9
                                                                        {
                                                                            const args = stack.slice(-5);
                                                                            stack.pop();
                                                                            stack.pop();
                                                                            stack.pop();
                                                                            stack.pop();
                                                                            stack.pop();
                                                                            func9(...args);
                                                                        }
                                                                        // opcode: 12 I_BR 14
                                                                        break block_1;
                                                                        // opcode: 11 I_END
                                                                    }
                                                                    // opcode: 65 I_I32_CONST 0
                                                                    stack.push(0);
                                                                    // opcode: 33 I_LOCAL_SET 7
                                                                    local7 = stack.pop();
                                                                    // opcode: 65 I_I32_CONST 3
                                                                    stack.push(3);
                                                                    // opcode: 36 I_GLOBAL_SET 2
                                                                    global2 = stack.pop();
                                                                    // opcode: 11 I_END
                                                                }
                                                                // opcode: 16 I_CALL 0
                                                                func0();
                                                                // opcode: 32 I_LOCAL_GET 0
                                                                stack.push(local0);
                                                                // opcode: 65 I_I32_CONST 201
                                                                stack.push(201);
                                                                // opcode: 71 I_I32_NE
                                                                stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                                                // opcode: 32 I_LOCAL_GET 7
                                                                stack.push(local7);
                                                                // opcode: 113 I_I32_AND
                                                                stack.push(stack.pop() & stack.pop());
                                                                // opcode: 13 I_BR_IF 12
                                                                if (stack.pop() !== 0) { break block_1; }
                                                                // opcode: 65 I_I32_CONST 10
                                                                stack.push(10);
                                                                // opcode: 65 I_I32_CONST 8
                                                                stack.push(8);
                                                                // opcode: 16 I_CALL 5
                                                                stack.push(func5(stack.pop()));
                                                                // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                                {
                                                                    const x = stack.pop();
                                                                    new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                                }
                                                                // opcode: 12 I_BR 12
                                                                break block_1;
                                                                // opcode: 11 I_END
                                                            }
                                                            // opcode: 32 I_LOCAL_GET 4
                                                            stack.push(local4);
                                                            // opcode: 65 I_I32_CONST 1
                                                            stack.push(1);
                                                            // opcode: 116 I_I32_SHL
                                                            {
                                                                const x = stack.pop();
                                                                stack.push(stack.pop() << x);
                                                            }
                                                            // opcode: 65 I_I32_CONST 8
                                                            stack.push(8);
                                                            // opcode: 16 I_CALL 5
                                                            stack.push(func5(stack.pop()));
                                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                            {
                                                                const x = stack.pop();
                                                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                            }
                                                            // opcode: 12 I_BR 11
                                                            break block_1;
                                                            // opcode: 11 I_END
                                                        }
                                                        // opcode: 32 I_LOCAL_GET 0
                                                        stack.push(local0);
                                                        // opcode: 65 I_I32_CONST 7
                                                        stack.push(7);
                                                        // opcode: 113 I_I32_AND
                                                        stack.push(stack.pop() & stack.pop());
                                                        // opcode: 65 I_I32_CONST 7
                                                        stack.push(7);
                                                        // opcode: 70 I_I32_EQ
                                                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                                        // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":32,"data":0},{"opCode":65
                                                        if_45: if (stack.pop() !== 0) {
                                                            // opcode: 32 I_LOCAL_GET 0
                                                            stack.push(local0);
                                                            // opcode: 65 I_I32_CONST 56
                                                            stack.push(56);
                                                            // opcode: 113 I_I32_AND
                                                            stack.push(stack.pop() & stack.pop());
                                                            // opcode: 5 I_ELSE
                                                        } else {
                                                            // opcode: 65 I_I32_CONST 10
                                                            stack.push(10);
                                                            // opcode: 16 I_CALL 5
                                                            stack.push(func5(stack.pop()));
                                                            // opcode: 11 I_END
                                                        }
                                                        // opcode: 33 I_LOCAL_SET 10
                                                        local10 = stack.pop();
                                                        // opcode: 32 I_LOCAL_GET 0
                                                        stack.push(local0);
                                                        // opcode: 65 I_I32_CONST 1
                                                        stack.push(1);
                                                        // opcode: 113 I_I32_AND
                                                        stack.push(stack.pop() & stack.pop());
                                                        // opcode: 69 I_I32_EQZ
                                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                                        // opcode: 32 I_LOCAL_GET 7
                                                        stack.push(local7);
                                                        // opcode: 113 I_I32_AND
                                                        stack.push(stack.pop() & stack.pop());
                                                        // opcode: 13 I_BR_IF 10
                                                        if (stack.pop() !== 0) { break block_1; }
                                                        // opcode: 32 I_LOCAL_GET 0
                                                        stack.push(local0);
                                                        // opcode: 65 I_I32_CONST 4
                                                        stack.push(4);
                                                        // opcode: 113 I_I32_AND
                                                        stack.push(stack.pop() & stack.pop());
                                                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":10},{"opCode":47
                                                        if_46: if (stack.pop() !== 0) {
                                                            // opcode: 65 I_I32_CONST 10
                                                            stack.push(10);
                                                            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                            // opcode: 16 I_CALL 6
                                                            func6(stack.pop());
                                                            // opcode: 5 I_ELSE
                                                        } else {
                                                            // opcode: 16 I_CALL 0
                                                            func0();
                                                            // opcode: 11 I_END
                                                        }
                                                        // opcode: 65 I_I32_CONST 10
                                                        stack.push(10);
                                                        // opcode: 32 I_LOCAL_GET 10
                                                        stack.push(local10);
                                                        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                                        {
                                                            const x = stack.pop();
                                                            new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                                        }
                                                        // opcode: 12 I_BR 10
                                                        break block_1;
                                                        // opcode: 11 I_END
                                                    }
                                                    // opcode: 32 I_LOCAL_GET 4
                                                    stack.push(local4);
                                                    // opcode: 65 I_I32_CONST 1
                                                    stack.push(1);
                                                    // opcode: 116 I_I32_SHL
                                                    {
                                                        const x = stack.pop();
                                                        stack.push(stack.pop() << x);
                                                    }
                                                    // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                                    // opcode: 16 I_CALL 6
                                                    func6(stack.pop());
                                                    // opcode: 12 I_BR 9
                                                    break block_1;
                                                    // opcode: 11 I_END
                                                }
                                                // opcode: 32 I_LOCAL_GET 0
                                                stack.push(local0);
                                                // opcode: 65 I_I32_CONST 16
                                                stack.push(16);
                                                // opcode: 113 I_I32_AND
                                                stack.push(stack.pop() & stack.pop());
                                                // opcode: 33 I_LOCAL_SET 10
                                                local10 = stack.pop();
                                                // opcode: 32 I_LOCAL_GET 2
                                                stack.push(local2);
                                                // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":65,"data":10},{"opCode":1
                                                if_47: if (stack.pop() !== 0) {
                                                    // opcode: 65 I_I32_CONST 10
                                                    stack.push(10);
                                                    // opcode: 16 I_CALL 5
                                                    stack.push(func5(stack.pop()));
                                                    // opcode: 5 I_ELSE
                                                } else {
                                                    // opcode: 65 I_I32_CONST 65280
                                                    stack.push(65280);
                                                    // opcode: 32 I_LOCAL_GET 0
                                                    stack.push(local0);
                                                    // opcode: 65 I_I32_CONST 2
                                                    stack.push(2);
                                                    // opcode: 113 I_I32_AND
                                                    stack.push(stack.pop() & stack.pop());
                                                    // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":65,"data":0},{"opCode":45
                                                    if_48: if (stack.pop() !== 0) {
                                                        // opcode: 65 I_I32_CONST 0
                                                        stack.push(0);
                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                                        // opcode: 5 I_ELSE
                                                    } else {
                                                        // opcode: 16 I_CALL 4
                                                        stack.push(func4());
                                                        // opcode: 11 I_END
                                                    }
                                                    // opcode: 106 I_I32_ADD
                                                    stack.push(stack.pop() + stack.pop());
                                                    // opcode: 11 I_END
                                                }
                                                // opcode: 32 I_LOCAL_GET 8
                                                stack.push(local8);
                                                // opcode: 32 I_LOCAL_GET 10
                                                stack.push(local10);
                                                // opcode: 16 I_CALL 2
                                                {
                                                    const args = stack.slice(-3);
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.push(func2(...args));
                                                }
                                                // opcode: 32 I_LOCAL_GET 10
                                                stack.push(local10);
                                                // opcode: 69 I_I32_EQZ
                                                stack.push(stack.pop() === 0 ? 1 : 0);
                                                // opcode: 65 I_I32_CONST 7
                                                stack.push(7);
                                                // opcode: 16 I_CALL 7
                                                {
                                                    const args = stack.slice(-3);
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.push(func7(...args));
                                                }
                                                // opcode: 12 I_BR 8
                                                break block_1;
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 65 I_I32_CONST 10
                                            stack.push(10);
                                            // opcode: 65 I_I32_CONST 4
                                            stack.push(4);
                                            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                            }
                                            // opcode: 12 I_BR 7
                                            break block_1;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 32 I_LOCAL_GET 0
                                        stack.push(local0);
                                        // opcode: 65 I_I32_CONST 251
                                        stack.push(251);
                                        // opcode: 70 I_I32_EQ
                                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                        // opcode: 65 I_I32_CONST 3
                                        stack.push(3);
                                        // opcode: 108 I_I32_MUL
                                        stack.push(stack.pop() * stack.pop());
                                        // opcode: 36 I_GLOBAL_SET 2
                                        global2 = stack.pop();
                                        // opcode: 12 I_BR 6
                                        break block_1;
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 32 I_LOCAL_GET 0
                                    stack.push(local0);
                                    // opcode: 65 I_I32_CONST 16
                                    stack.push(16);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":65,"data":4},{"opCode":5}
                                    if_49: if (stack.pop() !== 0) {
                                        // opcode: 65 I_I32_CONST 4
                                        stack.push(4);
                                        // opcode: 5 I_ELSE
                                    } else {
                                        // opcode: 16 I_CALL 0
                                        func0();
                                        // opcode: 65 I_I32_CONST 8
                                        stack.push(8);
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 65 I_I32_CONST 8
                                    stack.push(8);
                                    // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                    // opcode: 34 I_LOCAL_TEE 12
                                    local12 = stack[stack.length - 1];
                                    // opcode: 16 I_CALL 4
                                    stack.push(func4());
                                    // opcode: 34 I_LOCAL_TEE 10
                                    local10 = stack[stack.length - 1];
                                    // opcode: 192 I_I32_EXTEND_8_S
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                    {
                                        const x = stack.pop();
                                        new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                    }
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 65 I_I32_CONST 1
                                    stack.push(1);
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 32 I_LOCAL_GET 12
                                    stack.push(local12);
                                    // opcode: 65 I_I32_CONST 15
                                    stack.push(15);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 32 I_LOCAL_GET 10
                                    stack.push(local10);
                                    // opcode: 65 I_I32_CONST 15
                                    stack.push(15);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 65 I_I32_CONST 15
                                    stack.push(15);
                                    // opcode: 75 I_I32_GT_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() > x ? 1 : 0);
                                    }
                                    // opcode: 32 I_LOCAL_GET 12
                                    stack.push(local12);
                                    // opcode: 65 I_I32_CONST 255
                                    stack.push(255);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 32 I_LOCAL_GET 10
                                    stack.push(local10);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 65 I_I32_CONST 255
                                    stack.push(255);
                                    // opcode: 75 I_I32_GT_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() > x ? 1 : 0);
                                    }
                                    // opcode: 16 I_CALL 9
                                    {
                                        const args = stack.slice(-5);
                                        stack.pop();
                                        stack.pop();
                                        stack.pop();
                                        stack.pop();
                                        stack.pop();
                                        func9(...args);
                                    }
                                    // opcode: 12 I_BR 4
                                    break block_2;
                                    // opcode: 11 I_END
                                }
                                // opcode: 65 I_I32_CONST 8
                                stack.push(8);
                                // opcode: 65 I_I32_CONST 4
                                stack.push(4);
                                // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                                // opcode: 59 I_I32_STORE_16 {"align":1,"offset":0}
                                {
                                    const x = stack.pop();
                                    new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                                }
                                // opcode: 12 I_BR 3
                                break block_2;
                                // opcode: 11 I_END
                            }
                            // opcode: 65 I_I32_CONST 10
                            stack.push(10);
                            // opcode: 16 I_CALL 5
                            stack.push(func5(stack.pop()));
                            // opcode: 34 I_LOCAL_TEE 10
                            local10 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 8
                            stack.push(8);
                            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":0}
                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
                            // opcode: 34 I_LOCAL_TEE 12
                            local12 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 16 I_CALL 2
                            {
                                const args = stack.slice(-3);
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                stack.push(func2(...args));
                            }
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 65 I_I32_CONST 1
                            stack.push(1);
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 32 I_LOCAL_GET 12
                            stack.push(local12);
                            // opcode: 65 I_I32_CONST 8
                            stack.push(8);
                            // opcode: 118 I_I32_SHR_U
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >>> x);
                            }
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 16 I_CALL 2
                            {
                                const args = stack.slice(-3);
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                stack.push(func2(...args));
                            }
                            // opcode: 12 I_BR 2
                            break block_2;
                            // opcode: 11 I_END
                        }
                        // opcode: 65 I_I32_CONST 0
                        stack.push(0);
                        // opcode: 33 I_LOCAL_SET 13
                        local13 = stack.pop();
                        // opcode: 16 I_CALL 4
                        stack.push(func4());
                        // opcode: 33 I_LOCAL_SET 0
                        local0 = stack.pop();
                        // opcode: 11 I_END
                    }
                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                    block_50: {
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                        block_51: {
                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                            block_52: {
                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                block_53: {
                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                    block_54: {
                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                        block_55: {
                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":0},{"opCode":65,"dat
                                            block_56: {
                                                // opcode: 32 I_LOCAL_GET 0
                                                stack.push(local0);
                                                // opcode: 65 I_I32_CONST 3
                                                stack.push(3);
                                                // opcode: 118 I_I32_SHR_U
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() >>> x);
                                                }
                                                // opcode: 65 I_I32_CONST 7
                                                stack.push(7);
                                                // opcode: 113 I_I32_AND
                                                stack.push(stack.pop() & stack.pop());
                                                // opcode: 33 I_LOCAL_SET 3
                                                local3 = stack.pop();
                                                // opcode: 65 I_I32_CONST 0
                                                stack.push(0);
                                                // opcode: 65 I_I32_CONST 1
                                                stack.push(1);
                                                // opcode: 32 I_LOCAL_GET 0
                                                stack.push(local0);
                                                // opcode: 16 I_CALL 7
                                                {
                                                    const args = stack.slice(-3);
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.push(func7(...args));
                                                }
                                                // opcode: 34 I_LOCAL_TEE 6
                                                local6 = stack[stack.length - 1];
                                                // opcode: 65 I_I32_CONST 1
                                                stack.push(1);
                                                // opcode: 32 I_LOCAL_GET 3
                                                stack.push(local3);
                                                // opcode: 116 I_I32_SHL
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() << x);
                                                }
                                                // opcode: 33 I_LOCAL_SET 15
                                                local15 = stack.pop();
                                                // opcode: 32 I_LOCAL_GET 0
                                                stack.push(local0);
                                                // opcode: 65 I_I32_CONST 209
                                                stack.push(209);
                                                // opcode: 16 I_CALL 1
                                                {
                                                    const args = stack.slice(-2);
                                                    stack.pop();
                                                    stack.pop();
                                                    stack.push(func1(...args));
                                                }
                                                // opcode: 33 I_LOCAL_SET 1
                                                local1 = stack.pop();
                                                // opcode: 32 I_LOCAL_GET 1
                                                stack.push(local1);
                                                // opcode: 14 I_BR_TABLE {"branches":[0,1,2,4,5],"def":6}
                                                {
                                                    const target_idx = stack.pop();
                                                    if(target_idx === 0) { break block_56; }
                                                    else if(target_idx === 1) { break block_55; }
                                                    else if(target_idx === 2) { break block_54; }
                                                    else if(target_idx === 3) { break block_52; }
                                                    else if(target_idx === 4) { break block_51; }
                                                    else { break block_50; }
                                                }
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 32 I_LOCAL_GET 6
                                            stack.push(local6);
                                            // opcode: 65 I_I32_CONST 7
                                            stack.push(7);
                                            // opcode: 118 I_I32_SHR_U
                                            {
                                                const x = stack.pop();
                                                stack.push(stack.pop() >>> x);
                                            }
                                            // opcode: 33 I_LOCAL_SET 14
                                            local14 = stack.pop();
                                            // opcode: 32 I_LOCAL_GET 6
                                            stack.push(local6);
                                            // opcode: 65 I_I32_CONST 1
                                            stack.push(1);
                                            // opcode: 116 I_I32_SHL
                                            {
                                                const x = stack.pop();
                                                stack.push(stack.pop() << x);
                                            }
                                            // opcode: 32 I_LOCAL_GET 9
                                            stack.push(local9);
                                            // opcode: 65 I_I32_CONST 4
                                            stack.push(4);
                                            // opcode: 118 I_I32_SHR_U
                                            {
                                                const x = stack.pop();
                                                stack.push(stack.pop() >>> x);
                                            }
                                            // opcode: 65 I_I32_CONST 1
                                            stack.push(1);
                                            // opcode: 113 I_I32_AND
                                            stack.push(stack.pop() & stack.pop());
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 32 I_LOCAL_GET 14
                                            stack.push(local14);
                                            // opcode: 32 I_LOCAL_GET 0
                                            stack.push(local0);
                                            // opcode: 65 I_I32_CONST 32
                                            stack.push(32);
                                            // opcode: 113 I_I32_AND
                                            stack.push(stack.pop() & stack.pop());
                                            // opcode: 27 I_SELECT
                                            {
                                                const condition = stack.pop();
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(condition !== 0 ? x1 : x2)
                                            }
                                            // opcode: 32 I_LOCAL_GET 0
                                            stack.push(local0);
                                            // opcode: 65 I_I32_CONST 16
                                            stack.push(16);
                                            // opcode: 113 I_I32_AND
                                            stack.push(stack.pop() & stack.pop());
                                            // opcode: 27 I_SELECT
                                            {
                                                const condition = stack.pop();
                                                const x2 = stack.pop();
                                                const x1 = stack.pop();
                                                stack.push(condition !== 0 ? x1 : x2)
                                            }
                                            // opcode: 106 I_I32_ADD
                                            stack.push(stack.pop() + stack.pop());
                                            // opcode: 33 I_LOCAL_SET 10
                                            local10 = stack.pop();
                                            // opcode: 12 I_BR 2
                                            break block_53;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 32 I_LOCAL_GET 6
                                        stack.push(local6);
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 33 I_LOCAL_SET 14
                                        local14 = stack.pop();
                                        // opcode: 32 I_LOCAL_GET 6
                                        stack.push(local6);
                                        // opcode: 192 I_I32_EXTEND_8_S
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 117 I_I32_SHR_S
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() >> x);
                                        }
                                        // opcode: 32 I_LOCAL_GET 6
                                        stack.push(local6);
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 118 I_I32_SHR_U
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() >>> x);
                                        }
                                        // opcode: 65 I_I32_CONST 0
                                        stack.push(0);
                                        // opcode: 32 I_LOCAL_GET 9
                                        stack.push(local9);
                                        // opcode: 65 I_I32_CONST 3
                                        stack.push(3);
                                        // opcode: 116 I_I32_SHL
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() << x);
                                        }
                                        // opcode: 65 I_I32_CONST 128
                                        stack.push(128);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 32 I_LOCAL_GET 14
                                        stack.push(local14);
                                        // opcode: 65 I_I32_CONST 7
                                        stack.push(7);
                                        // opcode: 116 I_I32_SHL
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() << x);
                                        }
                                        // opcode: 32 I_LOCAL_GET 0
                                        stack.push(local0);
                                        // opcode: 65 I_I32_CONST 16
                                        stack.push(16);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 27 I_SELECT
                                        {
                                            const condition = stack.pop();
                                            const x2 = stack.pop();
                                            const x1 = stack.pop();
                                            stack.push(condition !== 0 ? x1 : x2)
                                        }
                                        // opcode: 32 I_LOCAL_GET 0
                                        stack.push(local0);
                                        // opcode: 65 I_I32_CONST 32
                                        stack.push(32);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 27 I_SELECT
                                        {
                                            const condition = stack.pop();
                                            const x2 = stack.pop();
                                            const x1 = stack.pop();
                                            stack.push(condition !== 0 ? x1 : x2)
                                        }
                                        // opcode: 106 I_I32_ADD
                                        stack.push(stack.pop() + stack.pop());
                                        // opcode: 32 I_LOCAL_GET 0
                                        stack.push(local0);
                                        // opcode: 65 I_I32_CONST 48
                                        stack.push(48);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 65 I_I32_CONST 32
                                        stack.push(32);
                                        // opcode: 70 I_I32_EQ
                                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                        // opcode: 27 I_SELECT
                                        {
                                            const condition = stack.pop();
                                            const x2 = stack.pop();
                                            const x1 = stack.pop();
                                            stack.push(condition !== 0 ? x1 : x2)
                                        }
                                        // opcode: 33 I_LOCAL_SET 10
                                        local10 = stack.pop();
                                        // opcode: 12 I_BR 1
                                        break block_53;
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 33 I_LOCAL_SET 14
                                    local14 = stack.pop();
                                    // opcode: 32 I_LOCAL_GET 6
                                    stack.push(local6);
                                    // opcode: 65 I_I32_CONST 4
                                    stack.push(4);
                                    // opcode: 116 I_I32_SHL
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    // opcode: 32 I_LOCAL_GET 6
                                    stack.push(local6);
                                    // opcode: 65 I_I32_CONST 4
                                    stack.push(4);
                                    // opcode: 118 I_I32_SHR_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() >>> x);
                                    }
                                    // opcode: 114 I_I32_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 33 I_LOCAL_SET 10
                                    local10 = stack.pop();
                                    // opcode: 11 I_END
                                }
                                // opcode: 32 I_LOCAL_GET 10
                                stack.push(local10);
                                // opcode: 32 I_LOCAL_GET 0
                                stack.push(local0);
                                // opcode: 16 I_CALL 8
                                {
                                    const args = stack.slice(-2);
                                    stack.pop();
                                    stack.pop();
                                    stack.push(func8(...args));
                                }
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 32 I_LOCAL_GET 13
                                stack.push(local13);
                                // opcode: 32 I_LOCAL_GET 10
                                stack.push(local10);
                                // opcode: 65 I_I32_CONST 255
                                stack.push(255);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 114 I_I32_OR
                                stack.push(stack.pop() | stack.pop());
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 32 I_LOCAL_GET 14
                                stack.push(local14);
                                // opcode: 16 I_CALL 9
                                {
                                    const args = stack.slice(-5);
                                    stack.pop();
                                    stack.pop();
                                    stack.pop();
                                    stack.pop();
                                    stack.pop();
                                    func9(...args);
                                }
                                // opcode: 12 I_BR 4
                                break block_1;
                                // opcode: 11 I_END
                            }
                            // opcode: 65 I_I32_CONST 16
                            stack.push(16);
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 32 I_LOCAL_GET 15
                            stack.push(local15);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 65 I_I32_CONST 1
                            stack.push(1);
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 16 I_CALL 9
                            {
                                const args = stack.slice(-5);
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                func9(...args);
                            }
                            // opcode: 12 I_BR 3
                            break block_1;
                            // opcode: 11 I_END
                        }
                        // opcode: 32 I_LOCAL_GET 6
                        stack.push(local6);
                        // opcode: 32 I_LOCAL_GET 15
                        stack.push(local15);
                        // opcode: 65 I_I32_CONST 255
                        stack.push(255);
                        // opcode: 115 I_I32_XOR
                        stack.push(stack.pop() ^ stack.pop());
                        // opcode: 113 I_I32_AND
                        stack.push(stack.pop() & stack.pop());
                        // opcode: 32 I_LOCAL_GET 0
                        stack.push(local0);
                        // opcode: 16 I_CALL 8
                        {
                            const args = stack.slice(-2);
                            stack.pop();
                            stack.pop();
                            stack.push(func8(...args));
                        }
                        // opcode: 12 I_BR 2
                        break block_1;
                        // opcode: 11 I_END
                    }
                    // opcode: 32 I_LOCAL_GET 6
                    stack.push(local6);
                    // opcode: 32 I_LOCAL_GET 15
                    stack.push(local15);
                    // opcode: 114 I_I32_OR
                    stack.push(stack.pop() | stack.pop());
                    // opcode: 32 I_LOCAL_GET 0
                    stack.push(local0);
                    // opcode: 16 I_CALL 8
                    {
                        const args = stack.slice(-2);
                        stack.pop();
                        stack.pop();
                        stack.push(func8(...args));
                    }
                    // opcode: 12 I_BR 1
                    break block_1;
                    // opcode: 11 I_END
                }
                // opcode: 16 I_CALL 0
                func0();
                // opcode: 11 I_END
            }
            // opcode: 35 I_GLOBAL_GET 5
            stack.push(global5);
            // opcode: 32 I_LOCAL_GET 16
            stack.push(local16);
            // opcode: 107 I_I32_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 33 I_LOCAL_SET 16
            local16 = stack.pop();
            // opcode: 35 I_GLOBAL_GET 6
            stack.push(global6);
            // opcode: 35 I_GLOBAL_GET 6
            stack.push(global6);
            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":3}
            stack.push(new DataView(memory0.buffer, 3 + stack.pop(), 2).getUint16(0, true));
            // opcode: 32 I_LOCAL_GET 16
            stack.push(local16);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":3}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 3 + stack.pop(), 2).setInt16(0, x, true);
            }
            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":35,"data":6},{"opCode":45,"dat
            loop_57: while (true) {
                // opcode: 35 I_GLOBAL_GET 6
                stack.push(global6);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":64}
                stack.push(new DataView(memory0.buffer, 64 + stack.pop(), 1).getUint8(0));
                // opcode: 34 I_LOCAL_TEE 17
                local17 = stack[stack.length - 1];
                // opcode: 65 I_I32_CONST 128
                stack.push(128);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":4},{"opCode":65,
                if_58: if (stack.pop() !== 0) {
                    // opcode: 35 I_GLOBAL_GET 4
                    stack.push(global4);
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 36 I_GLOBAL_SET 4
                    global4 = stack.pop();
                    // opcode: 35 I_GLOBAL_GET 4
                    stack.push(global4);
                    // opcode: 65 I_I32_CONST 456
                    stack.push(456);
                    // opcode: 71 I_I32_NE
                    stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                    // opcode: 13 I_BR_IF 0
                    if (stack.pop() !== 0) { break if_58; }
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":68}
                    stack.push(new DataView(memory0.buffer, 68 + stack.pop(), 1).getUint8(0));
                    // opcode: 34 I_LOCAL_TEE 18
                    local18 = stack[stack.length - 1];
                    // opcode: 65 I_I32_CONST 144
                    stack.push(144);
                    // opcode: 73 I_I32_LT_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() < x ? 1 : 0);
                    }
                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":159},{"opCode":3
                    if_59: if (stack.pop() !== 0) {
                        // opcode: 65 I_I32_CONST 159
                        stack.push(159);
                        // opcode: 33 I_LOCAL_SET 10
                        local10 = stack.pop();
                        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":17},{"opCode":65,"da
                        loop_60: while (true) {
                            // opcode: 32 I_LOCAL_GET 17
                            stack.push(local17);
                            // opcode: 65 I_I32_CONST 32
                            stack.push(32);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 69 I_I32_EQZ
                            stack.push(stack.pop() === 0 ? 1 : 0);
                            // opcode: 32 I_LOCAL_GET 18
                            stack.push(local18);
                            // opcode: 35 I_GLOBAL_GET 6
                            stack.push(global6);
                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":74}
                            stack.push(new DataView(memory0.buffer, 74 + stack.pop(), 1).getUint8(0));
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 34 I_LOCAL_TEE 21
                            local21 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 72 I_I32_LT_S
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() < x ? 1 : 0);
                            }
                            // opcode: 114 I_I32_OR
                            stack.push(stack.pop() | stack.pop());
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 35 I_GLOBAL_GET 6
                            stack.push(global6);
                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":75}
                            stack.push(new DataView(memory0.buffer, 75 + stack.pop(), 1).getUint8(0));
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 65 I_I32_CONST 7
                            stack.push(7);
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 34 I_LOCAL_TEE 20
                            local20 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 72 I_I32_LT_S
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() < x ? 1 : 0);
                            }
                            // opcode: 114 I_I32_OR
                            stack.push(stack.pop() | stack.pop());
                            // opcode: 34 I_LOCAL_TEE 19
                            local19 = stack[stack.length - 1];
                            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":10},{"opCode":35
                            if_61: if (stack.pop() !== 0) {
                                // opcode: 32 I_LOCAL_GET 10
                                stack.push(local10);
                                // opcode: 35 I_GLOBAL_GET 6
                                stack.push(global6);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":67}
                                stack.push(new DataView(memory0.buffer, 67 + stack.pop(), 1).getUint8(0));
                                // opcode: 106 I_I32_ADD
                                stack.push(stack.pop() + stack.pop());
                                // opcode: 33 I_LOCAL_SET 20
                                local20 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 18
                                stack.push(local18);
                                // opcode: 35 I_GLOBAL_GET 6
                                stack.push(global6);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":66}
                                stack.push(new DataView(memory0.buffer, 66 + stack.pop(), 1).getUint8(0));
                                // opcode: 106 I_I32_ADD
                                stack.push(stack.pop() + stack.pop());
                                // opcode: 33 I_LOCAL_SET 21
                                local21 = stack.pop();
                                // opcode: 11 I_END
                            }
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 33 I_LOCAL_SET 22
                            local22 = stack.pop();
                            // opcode: 65 I_I32_CONST 7
                            stack.push(7);
                            // opcode: 65 I_I32_CONST 6
                            stack.push(6);
                            // opcode: 32 I_LOCAL_GET 17
                            stack.push(local17);
                            // opcode: 65 I_I32_CONST 8
                            stack.push(8);
                            // opcode: 65 I_I32_CONST 64
                            stack.push(64);
                            // opcode: 32 I_LOCAL_GET 19
                            stack.push(local19);
                            // opcode: 27 I_SELECT
                            {
                                const condition = stack.pop();
                                const x2 = stack.pop();
                                const x1 = stack.pop();
                                stack.push(condition !== 0 ? x1 : x2)
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
                            // opcode: 65 I_I32_CONST 10
                            stack.push(10);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 32 I_LOCAL_GET 21
                            stack.push(local21);
                            // opcode: 65 I_I32_CONST 3
                            stack.push(3);
                            // opcode: 118 I_I32_SHR_U
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >>> x);
                            }
                            // opcode: 65 I_I32_CONST 31
                            stack.push(31);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 65 I_I32_CONST 5
                            stack.push(5);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 114 I_I32_OR
                            stack.push(stack.pop() | stack.pop());
                            // opcode: 32 I_LOCAL_GET 20
                            stack.push(local20);
                            // opcode: 65 I_I32_CONST 3
                            stack.push(3);
                            // opcode: 118 I_I32_SHR_U
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >>> x);
                            }
                            // opcode: 65 I_I32_CONST 31
                            stack.push(31);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 114 I_I32_OR
                            stack.push(stack.pop() | stack.pop());
                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32768}
                            stack.push(new DataView(memory0.buffer, 32768 + stack.pop(), 1).getUint8(0));
                            // opcode: 33 I_LOCAL_SET 23
                            local23 = stack.pop();
                            // opcode: 32 I_LOCAL_GET 23
                            stack.push(local23);
                            // opcode: 65 I_I32_CONST 256
                            stack.push(256);
                            // opcode: 32 I_LOCAL_GET 23
                            stack.push(local23);
                            // opcode: 192 I_I32_EXTEND_8_S
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 32 I_LOCAL_GET 17
                            stack.push(local17);
                            // opcode: 65 I_I32_CONST 16
                            stack.push(16);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 27 I_SELECT
                            {
                                const condition = stack.pop();
                                const x2 = stack.pop();
                                const x1 = stack.pop();
                                stack.push(condition !== 0 ? x1 : x2)
                            }
                            // opcode: 32 I_LOCAL_GET 21
                            stack.push(local21);
                            // opcode: 32 I_LOCAL_GET 20
                            stack.push(local20);
                            // opcode: 65 I_I32_CONST 7
                            stack.push(7);
                            // opcode: 115 I_I32_XOR
                            stack.push(stack.pop() ^ stack.pop());
                            // opcode: 16 I_CALL 10
                            {
                                const args = stack.slice(-3);
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                stack.push(func10(...args));
                            }
                            // opcode: 33 I_LOCAL_SET 24
                            local24 = stack.pop();
                            // opcode: 32 I_LOCAL_GET 17
                            stack.push(local17);
                            // opcode: 65 I_I32_CONST 2
                            stack.push(2);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":17},{"opCode":65
                            if_62: if (stack.pop() !== 0) {
                                // opcode: 32 I_LOCAL_GET 17
                                stack.push(local17);
                                // opcode: 65 I_I32_CONST 2
                                stack.push(2);
                                // opcode: 118 I_I32_SHR_U
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() >>> x);
                                }
                                // opcode: 65 I_I32_CONST 1
                                stack.push(1);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 33 I_LOCAL_SET 30
                                local30 = stack.pop();
                                // opcode: 65 I_I32_CONST 65024
                                stack.push(65024);
                                // opcode: 33 I_LOCAL_SET 25
                                local25 = stack.pop();
                                // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":18},{"opCode":32,"da
                                loop_63: while (true) {
                                    // opcode: 32 I_LOCAL_GET 18
                                    stack.push(local18);
                                    // opcode: 32 I_LOCAL_GET 25
                                    stack.push(local25);
                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                    // opcode: 107 I_I32_SUB
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() - x);
                                    }
                                    // opcode: 65 I_I32_CONST 16
                                    stack.push(16);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 65 I_I32_CONST 15
                                    stack.push(15);
                                    // opcode: 65 I_I32_CONST 7
                                    stack.push(7);
                                    // opcode: 32 I_LOCAL_GET 30
                                    stack.push(local30);
                                    // opcode: 27 I_SELECT
                                    {
                                        const condition = stack.pop();
                                        const x2 = stack.pop();
                                        const x1 = stack.pop();
                                        stack.push(condition !== 0 ? x1 : x2)
                                    }
                                    // opcode: 34 I_LOCAL_TEE 29
                                    local29 = stack[stack.length - 1];
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 32 I_LOCAL_GET 25
                                    stack.push(local25);
                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":3}
                                    stack.push(new DataView(memory0.buffer, 3 + stack.pop(), 1).getUint8(0));
                                    // opcode: 34 I_LOCAL_TEE 27
                                    local27 = stack[stack.length - 1];
                                    // opcode: 65 I_I32_CONST 64
                                    stack.push(64);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 27 I_SELECT
                                    {
                                        const condition = stack.pop();
                                        const x2 = stack.pop();
                                        const x1 = stack.pop();
                                        stack.push(condition !== 0 ? x1 : x2)
                                    }
                                    // opcode: 115 I_I32_XOR
                                    stack.push(stack.pop() ^ stack.pop());
                                    // opcode: 33 I_LOCAL_SET 21
                                    local21 = stack.pop();
                                    // opcode: 32 I_LOCAL_GET 10
                                    stack.push(local10);
                                    // opcode: 32 I_LOCAL_GET 25
                                    stack.push(local25);
                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":1}
                                    stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
                                    // opcode: 107 I_I32_SUB
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() - x);
                                    }
                                    // opcode: 65 I_I32_CONST 8
                                    stack.push(8);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 65 I_I32_CONST 7
                                    stack.push(7);
                                    // opcode: 32 I_LOCAL_GET 27
                                    stack.push(local27);
                                    // opcode: 65 I_I32_CONST 32
                                    stack.push(32);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 27 I_SELECT
                                    {
                                        const condition = stack.pop();
                                        const x2 = stack.pop();
                                        const x1 = stack.pop();
                                        stack.push(condition !== 0 ? x1 : x2)
                                    }
                                    // opcode: 115 I_I32_XOR
                                    stack.push(stack.pop() ^ stack.pop());
                                    // opcode: 33 I_LOCAL_SET 20
                                    local20 = stack.pop();
                                    // opcode: 32 I_LOCAL_GET 25
                                    stack.push(local25);
                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":2}
                                    stack.push(new DataView(memory0.buffer, 2 + stack.pop(), 1).getUint8(0));
                                    // opcode: 34 I_LOCAL_TEE 28
                                    local28 = stack[stack.length - 1];
                                    // opcode: 32 I_LOCAL_GET 30
                                    stack.push(local30);
                                    // opcode: 65 I_I32_CONST 255
                                    stack.push(255);
                                    // opcode: 115 I_I32_XOR
                                    stack.push(stack.pop() ^ stack.pop());
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 32 I_LOCAL_GET 28
                                    stack.push(local28);
                                    // opcode: 32 I_LOCAL_GET 30
                                    stack.push(local30);
                                    // opcode: 114 I_I32_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 32 I_LOCAL_GET 21
                                    stack.push(local21);
                                    // opcode: 65 I_I32_CONST 8
                                    stack.push(8);
                                    // opcode: 73 I_I32_LT_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() < x ? 1 : 0);
                                    }
                                    // opcode: 27 I_SELECT
                                    {
                                        const condition = stack.pop();
                                        const x2 = stack.pop();
                                        const x1 = stack.pop();
                                        stack.push(condition !== 0 ? x1 : x2)
                                    }
                                    // opcode: 32 I_LOCAL_GET 21
                                    stack.push(local21);
                                    // opcode: 32 I_LOCAL_GET 20
                                    stack.push(local20);
                                    // opcode: 16 I_CALL 10
                                    {
                                        const args = stack.slice(-3);
                                        stack.pop();
                                        stack.pop();
                                        stack.pop();
                                        stack.push(func10(...args));
                                    }
                                    // opcode: 33 I_LOCAL_SET 26
                                    local26 = stack.pop();
                                    // opcode: 32 I_LOCAL_GET 20
                                    stack.push(local20);
                                    // opcode: 65 I_I32_CONST 8
                                    stack.push(8);
                                    // opcode: 73 I_I32_LT_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() < x ? 1 : 0);
                                    }
                                    // opcode: 32 I_LOCAL_GET 21
                                    stack.push(local21);
                                    // opcode: 32 I_LOCAL_GET 29
                                    stack.push(local29);
                                    // opcode: 77 I_I32_LE_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() <= x ? 1 : 0);
                                    }
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 32 I_LOCAL_GET 27
                                    stack.push(local27);
                                    // opcode: 65 I_I32_CONST 128
                                    stack.push(128);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 69 I_I32_EQZ
                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                    // opcode: 32 I_LOCAL_GET 24
                                    stack.push(local24);
                                    // opcode: 69 I_I32_EQZ
                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                    // opcode: 114 I_I32_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 32 I_LOCAL_GET 26
                                    stack.push(local26);
                                    // opcode: 69 I_I32_EQZ
                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                    // opcode: 69 I_I32_EQZ
                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":26},{"opCode":33
                                    if_64: if (stack.pop() !== 0) {
                                        // opcode: 32 I_LOCAL_GET 26
                                        stack.push(local26);
                                        // opcode: 33 I_LOCAL_SET 24
                                        local24 = stack.pop();
                                        // opcode: 65 I_I32_CONST 1
                                        stack.push(1);
                                        // opcode: 32 I_LOCAL_GET 27
                                        stack.push(local27);
                                        // opcode: 65 I_I32_CONST 16
                                        stack.push(16);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 69 I_I32_EQZ
                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                        // opcode: 69 I_I32_EQZ
                                        stack.push(stack.pop() === 0 ? 1 : 0);
                                        // opcode: 106 I_I32_ADD
                                        stack.push(stack.pop() + stack.pop());
                                        // opcode: 33 I_LOCAL_SET 22
                                        local22 = stack.pop();
                                        // opcode: 12 I_BR 2
                                        break if_62;
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 32 I_LOCAL_GET 25
                                    stack.push(local25);
                                    // opcode: 65 I_I32_CONST 4
                                    stack.push(4);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 34 I_LOCAL_TEE 25
                                    local25 = stack[stack.length - 1];
                                    // opcode: 65 I_I32_CONST 65184
                                    stack.push(65184);
                                    // opcode: 73 I_I32_LT_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() < x ? 1 : 0);
                                    }
                                    // opcode: 13 I_BR_IF 0
                                    if (stack.pop() !== 0) { continue loop_63; }
                                    // opcode: 11 I_END
                                    break loop_63;
                                }
                                // opcode: 11 I_END
                            }
                            // opcode: 32 I_LOCAL_GET 18
                            stack.push(local18);
                            // opcode: 65 I_I32_CONST 160
                            stack.push(160);
                            // opcode: 108 I_I32_MUL
                            stack.push(stack.pop() * stack.pop());
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 65 I_I32_CONST 2
                            stack.push(2);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 32 I_LOCAL_GET 22
                            stack.push(local22);
                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":65351}
                            stack.push(new DataView(memory0.buffer, 65351 + stack.pop(), 1).getUint8(0));
                            // opcode: 32 I_LOCAL_GET 24
                            stack.push(local24);
                            // opcode: 65 I_I32_CONST 1
                            stack.push(1);
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
                            // opcode: 65 I_I32_CONST 3
                            stack.push(3);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 32 I_LOCAL_GET 22
                            stack.push(local22);
                            // opcode: 65 I_I32_CONST 2
                            stack.push(2);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 65 I_I32_CONST 7
                            stack.push(7);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 65 I_I32_CONST 2
                            stack.push(2);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 40 I_I32_LOAD {"align":2,"offset":36}
                            stack.push(new DataView(memory0.buffer, 36 + stack.pop(), 4).getInt32(0, true));
                            // opcode: 54 I_I32_STORE {"align":2,"offset":1146880}
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 1146880 + stack.pop(), 4).setInt32(0, x, true);
                            }
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 65 I_I32_CONST 1
                            stack.push(1);
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 34 I_LOCAL_TEE 10
                            local10 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 0
                            stack.push(0);
                            // opcode: 78 I_I32_GE_S
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >= x ? 1 : 0);
                            }
                            // opcode: 13 I_BR_IF 0
                            if (stack.pop() !== 0) { continue loop_60; }
                            // opcode: 11 I_END
                            break loop_60;
                        }
                        // opcode: 11 I_END
                    }
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 32 I_LOCAL_GET 18
                    stack.push(local18);
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 65 I_I32_CONST 154
                    stack.push(154);
                    // opcode: 112 I_I32_REM_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() % x);
                    }
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":68}
                    {
                        const x = stack.pop();
                        memory0[68 + stack.pop()] = x;
                    }
                    // opcode: 65 I_I32_CONST 0
                    stack.push(0);
                    // opcode: 36 I_GLOBAL_SET 4
                    global4 = stack.pop();
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 32 I_LOCAL_GET 31
                    stack.push(local31);
                    // opcode: 32 I_LOCAL_GET 18
                    stack.push(local18);
                    // opcode: 65 I_I32_CONST 143
                    stack.push(143);
                    // opcode: 70 I_I32_EQ
                    stack.push(stack.pop() === stack.pop() ? 1 : 0);
                    // opcode: 34 I_LOCAL_TEE 10
                    local10 = stack[stack.length - 1];
                    // opcode: 114 I_I32_OR
                    stack.push(stack.pop() | stack.pop());
                    // opcode: 32 I_LOCAL_GET 18
                    stack.push(local18);
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":69}
                    stack.push(new DataView(memory0.buffer, 69 + stack.pop(), 1).getUint8(0));
                    // opcode: 70 I_I32_EQ
                    stack.push(stack.pop() === stack.pop() ? 1 : 0);
                    // opcode: 34 I_LOCAL_TEE 34
                    local34 = stack[stack.length - 1];
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":65}
                    stack.push(new DataView(memory0.buffer, 65 + stack.pop(), 1).getUint8(0));
                    // opcode: 34 I_LOCAL_TEE 32
                    local32 = stack[stack.length - 1];
                    // opcode: 65 I_I32_CONST 6
                    stack.push(6);
                    // opcode: 118 I_I32_SHR_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >>> x);
                    }
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 113 I_I32_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 113 I_I32_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 116 I_I32_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 114 I_I32_OR
                    stack.push(stack.pop() | stack.pop());
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":15}
                    {
                        const x = stack.pop();
                        memory0[15 + stack.pop()] = x;
                    }
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 32 I_LOCAL_GET 32
                    stack.push(local32);
                    // opcode: 65 I_I32_CONST 253
                    stack.push(253);
                    // opcode: 113 I_I32_AND
                    stack.push(stack.pop() & stack.pop());
                    // opcode: 32 I_LOCAL_GET 34
                    stack.push(local34);
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 116 I_I32_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 114 I_I32_OR
                    stack.push(stack.pop() | stack.pop());
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":65}
                    {
                        const x = stack.pop();
                        memory0[65 + stack.pop()] = x;
                    }
                    // opcode: 32 I_LOCAL_GET 10
                    stack.push(local10);
                    // opcode: 13 I_BR_IF 3
                    if (stack.pop() !== 0) { break top_level_func_11; }
                    // opcode: 5 I_ELSE
                } else {
                    // opcode: 35 I_GLOBAL_GET 6
                    stack.push(global6);
                    // opcode: 65 I_I32_CONST 0
                    stack.push(0);
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":68}
                    {
                        const x = stack.pop();
                        memory0[68 + stack.pop()] = x;
                    }
                    // opcode: 65 I_I32_CONST 0
                    stack.push(0);
                    // opcode: 36 I_GLOBAL_SET 4
                    global4 = stack.pop();
                    // opcode: 11 I_END
                }
                // opcode: 32 I_LOCAL_GET 16
                stack.push(local16);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 107 I_I32_SUB
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                // opcode: 34 I_LOCAL_TEE 16
                local16 = stack[stack.length - 1];
                // opcode: 13 I_BR_IF 0
                if (stack.pop() !== 0) { continue loop_57; }
                // opcode: 11 I_END
                break loop_57;
            }
            // opcode: 12 I_BR 0
            continue loop_0;
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 11 I_END
    }
    const wasmExports = {
        "run": func11,
        "mem": memory0,
    };
    return { exports: wasmExports };
})