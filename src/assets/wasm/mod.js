(function (import_object) {
    let global0 = import_object['']['rate'];
    if (!import_object[''] || !import_object['']['mem']) {
        throw new Error('failed to find the memory import in the import object:  mem');
    }
    const memory0 = import_object['']['mem'];
    if (!import_object[''] || !import_object['']['init']) {
        throw new Error('failed to find the function import in the import object:  init');
    }
    const func0 = import_object['']['init'];
    if (!import_object[''] || !import_object['']['draw']) {
        throw new Error('failed to find the function import in the import object:  draw');
    }
    const func1 = import_object['']['draw'];
    let global1 = 0;
    let global2 = 0;
    let global3 = 0;
    let global4 = 0.5;
    let global5 = 0;
    let global6 = 6;
    let global7 = 0;
    let global8 = 0;
    let global9 = 0;
    let global10 = 0;
    let global11 = 0;
    let global12 = 1;
    let global13 = 6;
    let global14 = -1;
    let global15 = -1;
    let global16 = 0;
    memory0.set([2,1,3,20,10,30,5,22,12,32,4,21,11,31,4,8,5,6,23,13,7,29,19,4,6,5,9,26,16,7,8,8,4,6,7,24,14,4,4,5,8,28,18,7,8,25,15,6,9,27,17,6,4,4,8,4,4,9,8,17,59,59,59,59,16,59,59,59,59,59,59,59,29,59,19,17,59,1,0,2,10,6,17,34,44,26,48,40,20,59,59,1,59,1,37,16,18,59,0,8,59,12,59,8,0,11,15,7,0,8,7,59,8,59,7,59,7,0,16,227,15,197,15,168,15,139,15,111,15,82,15,54,15,244,16,212,16,181,16,151,16,120,16,90,16,60,16,30,16,0,16,26,15,65,14,116,13,179,12,253,11,80,11,174,10,20,10,131,9,251,8,122,8,0,8,141,7,33,7,186,6], 0);
    function func2(local0) {
        const stack = [];
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":1}
        stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 11 I_END
        return stack.pop();
    }
    function func3(local0, local1) {
        const stack = [];
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 1
        stack.push(local1);
        // opcode: 74 I_I32_GT_S
        {
            const x = stack.pop();
            stack.push(stack.pop() > x ? 1 : 0);
        }
        // opcode: 27 I_SELECT
        {
            const condition = stack.pop();
            const x2 = stack.pop();
            const x1 = stack.pop();
            stack.push(condition !== 0 ? x1 : x2)
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 72 I_I32_LT_S
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
        // opcode: 11 I_END
        return stack.pop();
    }
    function func4() {
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
        // opcode: 65 I_I32_CONST 66488
        stack.push(66488);
        // opcode: 33 I_LOCAL_SET 2
        local2 = stack.pop();
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":65,"data":1},{"opCode":32,"dat
        loop_0: while (true) {
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
            // opcode: 34 I_LOCAL_TEE 4
            local4 = stack[stack.length - 1];
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 35 I_GLOBAL_GET 3
            stack.push(global3);
            // opcode: 32 I_LOCAL_GET 4
            stack.push(local4);
            // opcode: 35 I_GLOBAL_GET 3
            stack.push(global3);
            // opcode: 79 I_I32_GE_U
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            // opcode: 27 I_SELECT
            {
                const condition = stack.pop();
                const x2 = stack.pop();
                const x1 = stack.pop();
                stack.push(condition !== 0 ? x1 : x2)
            }
            // opcode: 36 I_GLOBAL_SET 3
            global3 = stack.pop();
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 2
            local2 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 66616
            stack.push(66616);
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
        // opcode: 65 I_I32_CONST 66486
        stack.push(66486);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 127
        stack.push(127);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 36 I_GLOBAL_SET 1
        global1 = stack.pop();
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":3}
        stack.push(new DataView(memory0.buffer, 3 + stack.pop(), 1).getUint8(0));
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":26}
        stack.push(new DataView(memory0.buffer, 26 + stack.pop(), 1).getUint8(0));
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":2}
        stack.push(new DataView(memory0.buffer, 2 + stack.pop(), 1).getUint8(0));
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":26}
        stack.push(new DataView(memory0.buffer, 26 + stack.pop(), 1).getUint8(0));
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":1}
        stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 5
        stack.push(5);
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":26}
        stack.push(new DataView(memory0.buffer, 26 + stack.pop(), 1).getUint8(0));
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 32 I_LOCAL_GET 2
        stack.push(local2);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 2
        stack.push(2);
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":26}
        stack.push(new DataView(memory0.buffer, 26 + stack.pop(), 1).getUint8(0));
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 34 I_LOCAL_TEE 0
        local0 = stack[stack.length - 1];
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 65 I_I32_CONST 59
        stack.push(59);
        // opcode: 73 I_I32_LT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        // opcode: 108 I_I32_MUL
        stack.push(stack.pop() * stack.pop());
        // opcode: 36 I_GLOBAL_SET 2
        global2 = stack.pop();
        // opcode: 35 I_GLOBAL_GET 2
        stack.push(global2);
        // opcode: 35 I_GLOBAL_GET 3
        stack.push(global3);
        // opcode: 16 I_CALL 0
        {
            const args = stack.slice(-2);
            stack.pop();
            stack.pop();
            func0(...args);
        }
        // opcode: 65 I_I32_CONST 66620
        stack.push(66620);
        // opcode: 35 I_GLOBAL_GET 3
        stack.push(global3);
        // opcode: 35 I_GLOBAL_GET 2
        stack.push(global2);
        // opcode: 108 I_I32_MUL
        stack.push(stack.pop() * stack.pop());
        // opcode: 65 I_I32_CONST 8
        stack.push(8);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 33 I_LOCAL_SET 5
        local5 = stack.pop();
        // opcode: 65 I_I32_CONST 65566
        stack.push(65566);
        // opcode: 33 I_LOCAL_SET 2
        local2 = stack.pop();
        // opcode: 65 I_I32_CONST 195
        stack.push(195);
        // opcode: 33 I_LOCAL_SET 3
        local3 = stack.pop();
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":2},{"opCode":65,"dat
        loop_1: while (true) {
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 65 I_I32_CONST 12
            stack.push(12);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 16 I_CALL 2
            stack.push(func2(stack.pop()));
            // opcode: 33 I_LOCAL_SET 6
            local6 = stack.pop();
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 65 I_I32_CONST 16
            stack.push(16);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 16 I_CALL 2
            stack.push(func2(stack.pop()));
            // opcode: 33 I_LOCAL_SET 7
            local7 = stack.pop();
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 65 I_I32_CONST 18
            stack.push(18);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 16 I_CALL 2
            stack.push(func2(stack.pop()));
            // opcode: 33 I_LOCAL_SET 8
            local8 = stack.pop();
            // opcode: 32 I_LOCAL_GET 7
            stack.push(local7);
            // opcode: 32 I_LOCAL_GET 8
            stack.push(local8);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 32 I_LOCAL_GET 6
            stack.push(local6);
            // opcode: 75 I_I32_GT_U
            {
                const x = stack.pop();
                stack.push(stack.pop() > x ? 1 : 0);
            }
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":7},{"opCode":65,
            if_2: if (stack.pop() !== 0) {
                // opcode: 32 I_LOCAL_GET 7
                stack.push(local7);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 77 I_I32_LE_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() <= x ? 1 : 0);
                }
                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":7},{"opCode":65,
                if_3: if (stack.pop() !== 0) {
                    // opcode: 32 I_LOCAL_GET 7
                    stack.push(local7);
                    // opcode: 65 I_I32_CONST 1
                    stack.push(1);
                    // opcode: 118 I_I32_SHR_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >>> x);
                    }
                    // opcode: 33 I_LOCAL_SET 7
                    local7 = stack.pop();
                    // opcode: 5 I_ELSE
                } else {
                    // opcode: 32 I_LOCAL_GET 6
                    stack.push(local6);
                    // opcode: 32 I_LOCAL_GET 7
                    stack.push(local7);
                    // opcode: 107 I_I32_SUB
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    // opcode: 33 I_LOCAL_SET 8
                    local8 = stack.pop();
                    // opcode: 11 I_END
                }
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 8
            stack.push(local8);
            // opcode: 65 I_I32_CONST 4
            stack.push(4);
            // opcode: 73 I_I32_LT_U
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":6},{"opCode":33,
            if_4: if (stack.pop() !== 0) {
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 33 I_LOCAL_SET 7
                local7 = stack.pop();
                // opcode: 65 I_I32_CONST 0
                stack.push(0);
                // opcode: 33 I_LOCAL_SET 8
                local8 = stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 32 I_LOCAL_GET 5
            stack.push(local5);
            // opcode: 54 I_I32_STORE {"align":2,"offset":0}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 32 I_LOCAL_GET 7
            stack.push(local7);
            // opcode: 179 I_F32_CONVERT_I32_U
            // opcode: 56 I_F32_STORE {"align":2,"offset":4}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 4 + stack.pop(), 4).setFloat32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 32 I_LOCAL_GET 8
            stack.push(local8);
            // opcode: 179 I_F32_CONVERT_I32_U
            // opcode: 56 I_F32_STORE {"align":2,"offset":8}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 8 + stack.pop(), 4).setFloat32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":14}
            stack.push(new DataView(memory0.buffer, 14 + stack.pop(), 1).getUint8(0));
            // opcode: 65 I_I32_CONST 15
            stack.push(15);
            // opcode: 113 I_I32_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":12}
            {
                const x = stack.pop();
                memory0[12 + stack.pop()] = x;
            }
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":15}
            stack.push(new DataView(memory0.buffer, 15 + stack.pop(), 1).getUint8(0));
            // opcode: 65 I_I32_CONST 127
            stack.push(127);
            // opcode: 113 I_I32_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 65 I_I32_CONST 64
            stack.push(64);
            // opcode: 16 I_CALL 3
            {
                const args = stack.slice(-2);
                stack.pop();
                stack.pop();
                stack.push(func3(...args));
            }
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":13}
            {
                const x = stack.pop();
                memory0[13 + stack.pop()] = x;
            }
            // opcode: 32 I_LOCAL_GET 5
            stack.push(local5);
            // opcode: 32 I_LOCAL_GET 6
            stack.push(local6);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 33 I_LOCAL_SET 5
            local5 = stack.pop();
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 65 I_I32_CONST 14
            stack.push(14);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 33 I_LOCAL_SET 3
            local3 = stack.pop();
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 65 I_I32_CONST 30
            stack.push(30);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 2
            local2 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 66466
            stack.push(66466);
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
        // opcode: 35 I_GLOBAL_GET 2
        stack.push(global2);
        // opcode: 65 I_I32_CONST 4
        stack.push(4);
        // opcode: 75 I_I32_GT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() > x ? 1 : 0);
        }
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":4},{"opCode":65,
        if_5: if (stack.pop() !== 0) {
            // opcode: 35 I_GLOBAL_GET 4
            stack.push(global4);
            // opcode: 65 I_I32_CONST 2
            stack.push(2);
            // opcode: 179 I_F32_CONVERT_I32_U
            // opcode: 148 I_F32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 36 I_GLOBAL_SET 4
            global4 = stack.pop();
            // opcode: 65 I_I32_CONST 3579364
            stack.push(3579364);
            // opcode: 36 I_GLOBAL_SET 5
            global5 = stack.pop();
            // opcode: 5 I_ELSE
        } else {
            // opcode: 65 I_I32_CONST 3546836
            stack.push(3546836);
            // opcode: 36 I_GLOBAL_SET 5
            global5 = stack.pop();
            // opcode: 11 I_END
        }
        // opcode: 35 I_GLOBAL_GET 0
        stack.push(global0);
        // opcode: 65 I_I32_CONST 50
        stack.push(50);
        // opcode: 110 I_I32_DIV_U
        {
            const x = stack.pop();
            stack.push(Math.floor(stack.pop() / x));
        }
        // opcode: 36 I_GLOBAL_SET 6
        global6 = stack.pop();
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":65,"data":629},{"opCode":32,"d
        loop_6: while (true) {
            // opcode: 65 I_I32_CONST 629
            stack.push(629);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 65 I_I32_CONST 52
            stack.push(52);
            // opcode: 108 I_I32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 0
            local0 = stack[stack.length - 1];
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":36}
            {
                const x = stack.pop();
                memory0[36 + stack.pop()] = x;
            }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 65 I_I32_CONST 127
            stack.push(127);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 1
            local1 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 3
            stack.push(3);
            // opcode: 113 I_I32_AND
            stack.push(stack.pop() & stack.pop());
            // opcode: 65 I_I32_CONST 2
            stack.push(2);
            // opcode: 79 I_I32_GE_U
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            // opcode: 108 I_I32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":35}
            {
                const x = stack.pop();
                memory0[35 + stack.pop()] = x;
            }
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 35 I_GLOBAL_GET 2
            stack.push(global2);
            // opcode: 73 I_I32_LT_U
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_6; }
            // opcode: 11 I_END
            break loop_6;
        }
        // opcode: 16 I_CALL 5
        func5();
        // opcode: 11 I_END
    }
    function func5() {
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
        // opcode: 65 I_I32_CONST 629
        stack.push(629);
        // opcode: 33 I_LOCAL_SET 3
        local3 = stack.pop();
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 35 I_GLOBAL_GET 2
        stack.push(global2);
        // opcode: 65 I_I32_CONST 52
        stack.push(52);
        // opcode: 108 I_I32_MUL
        stack.push(stack.pop() * stack.pop());
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 33 I_LOCAL_SET 0
        local0 = stack.pop();
        // opcode: 35 I_GLOBAL_GET 12
        stack.push(global12);
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 107 I_I32_SUB
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        // opcode: 36 I_GLOBAL_SET 12
        global12 = stack.pop();
        // opcode: 35 I_GLOBAL_GET 12
        stack.push(global12);
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 76 I_I32_LE_S
        {
            const x = stack.pop();
            stack.push(stack.pop() <= x ? 1 : 0);
        }
        // opcode: 34 I_LOCAL_TEE 1
        local1 = stack[stack.length - 1];
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":13},{"opCode":36
        if_0: if (stack.pop() !== 0) {
            // opcode: 35 I_GLOBAL_GET 13
            stack.push(global13);
            // opcode: 36 I_GLOBAL_SET 12
            global12 = stack.pop();
            // opcode: 35 I_GLOBAL_GET 11
            stack.push(global11);
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 72 I_I32_LT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":8},{"opCode":65,
            if_1: if (stack.pop() !== 0) {
                // opcode: 35 I_GLOBAL_GET 8
                stack.push(global8);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 36 I_GLOBAL_SET 9
                global9 = stack.pop();
                // opcode: 65 I_I32_CONST 0
                stack.push(0);
                // opcode: 36 I_GLOBAL_SET 11
                global11 = stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 35 I_GLOBAL_GET 9
            stack.push(global9);
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 78 I_I32_GE_S
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":9},{"opCode":35,
            if_2: if (stack.pop() !== 0) {
                // opcode: 35 I_GLOBAL_GET 9
                stack.push(global9);
                // opcode: 35 I_GLOBAL_GET 1
                stack.push(global1);
                // opcode: 78 I_I32_GE_S
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >= x ? 1 : 0);
                }
                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":0},{"opCode":36,
                if_3: if (stack.pop() !== 0) {
                    // opcode: 65 I_I32_CONST 0
                    stack.push(0);
                    // opcode: 36 I_GLOBAL_SET 9
                    global9 = stack.pop();
                    // opcode: 65 I_I32_CONST 0
                    stack.push(0);
                    // opcode: 36 I_GLOBAL_SET 11
                    global11 = stack.pop();
                    // opcode: 11 I_END
                }
                // opcode: 35 I_GLOBAL_GET 9
                stack.push(global9);
                // opcode: 36 I_GLOBAL_SET 8
                global8 = stack.pop();
                // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":3},{"opCode":65,"dat
                loop_4: while (true) {
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 65 I_I32_CONST 0
                    stack.push(0);
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":38}
                    {
                        const x = stack.pop();
                        memory0[38 + stack.pop()] = x;
                    }
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 65 I_I32_CONST 52
                    stack.push(52);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 34 I_LOCAL_TEE 3
                    local3 = stack[stack.length - 1];
                    // opcode: 32 I_LOCAL_GET 0
                    stack.push(local0);
                    // opcode: 73 I_I32_LT_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() < x ? 1 : 0);
                    }
                    // opcode: 13 I_BR_IF 0
                    if (stack.pop() !== 0) { continue loop_4; }
                    // opcode: 11 I_END
                    break loop_4;
                }
                // opcode: 65 I_I32_CONST 629
                stack.push(629);
                // opcode: 33 I_LOCAL_SET 3
                local3 = stack.pop();
                // opcode: 65 I_I32_CONST -1
                stack.push(-1);
                // opcode: 36 I_GLOBAL_SET 9
                global9 = stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 35 I_GLOBAL_GET 11
            stack.push(global11);
            // opcode: 36 I_GLOBAL_SET 10
            global10 = stack.pop();
            // opcode: 35 I_GLOBAL_GET 8
            stack.push(global8);
            // opcode: 35 I_GLOBAL_GET 10
            stack.push(global10);
            // opcode: 16 I_CALL 1
            {
                const args = stack.slice(-2);
                stack.pop();
                stack.pop();
                func1(...args);
            }
            // opcode: 35 I_GLOBAL_GET 10
            stack.push(global10);
            // opcode: 65 I_I32_CONST 1
            stack.push(1);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 36 I_GLOBAL_SET 11
            global11 = stack.pop();
            // opcode: 35 I_GLOBAL_GET 11
            stack.push(global11);
            // opcode: 65 I_I32_CONST 64
            stack.push(64);
            // opcode: 79 I_I32_GE_U
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":-1},{"opCode":36
            if_5: if (stack.pop() !== 0) {
                // opcode: 65 I_I32_CONST -1
                stack.push(-1);
                // opcode: 36 I_GLOBAL_SET 11
                global11 = stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 35 I_GLOBAL_GET 8
            stack.push(global8);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":66488}
            stack.push(new DataView(memory0.buffer, 66488 + stack.pop(), 1).getUint8(0));
            // opcode: 65 I_I32_CONST 6
            stack.push(6);
            // opcode: 116 I_I32_SHL
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            // opcode: 35 I_GLOBAL_GET 10
            stack.push(global10);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 35 I_GLOBAL_GET 2
            stack.push(global2);
            // opcode: 108 I_I32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 65 I_I32_CONST 4
            stack.push(4);
            // opcode: 108 I_I32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 65 I_I32_CONST 66620
            stack.push(66620);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 33 I_LOCAL_SET 2
            local2 = stack.pop();
            // opcode: 11 I_END
        }
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
        loop_6: while (true) {
            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
            block_7: {
                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                block_8: {
                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                    block_9: {
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":1},{"opCode":4,"data
                        block_10: {
                            // opcode: 32 I_LOCAL_GET 1
                            stack.push(local1);
                            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":3},{"opCode":32,
                            if_11: if (stack.pop() !== 0) {
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 2
                                stack.push(local2);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":0}
                                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                                // opcode: 34 I_LOCAL_TEE 4
                                local4 = stack[stack.length - 1];
                                // opcode: 65 I_I32_CONST 15
                                stack.push(15);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 65 I_I32_CONST 8
                                stack.push(8);
                                // opcode: 116 I_I32_SHL
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                // opcode: 32 I_LOCAL_GET 2
                                stack.push(local2);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":1}
                                stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
                                // opcode: 114 I_I32_OR
                                stack.push(stack.pop() | stack.pop());
                                // opcode: 59 I_I32_STORE_16 {"align":1,"offset":28}
                                {
                                    const x = stack.pop();
                                    new DataView(memory0.buffer, 28 + stack.pop(), 2).setInt16(0, x, true);
                                }
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 2
                                stack.push(local2);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":2}
                                stack.push(new DataView(memory0.buffer, 2 + stack.pop(), 1).getUint8(0));
                                // opcode: 34 I_LOCAL_TEE 5
                                local5 = stack[stack.length - 1];
                                // opcode: 65 I_I32_CONST 4
                                stack.push(4);
                                // opcode: 118 I_I32_SHR_U
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() >>> x);
                                }
                                // opcode: 32 I_LOCAL_GET 4
                                stack.push(local4);
                                // opcode: 65 I_I32_CONST 16
                                stack.push(16);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 114 I_I32_OR
                                stack.push(stack.pop() | stack.pop());
                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":30}
                                {
                                    const x = stack.pop();
                                    memory0[30 + stack.pop()] = x;
                                }
                                // opcode: 32 I_LOCAL_GET 5
                                stack.push(local5);
                                // opcode: 65 I_I32_CONST 15
                                stack.push(15);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 33 I_LOCAL_SET 6
                                local6 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 2
                                stack.push(local2);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":3}
                                stack.push(new DataView(memory0.buffer, 3 + stack.pop(), 1).getUint8(0));
                                // opcode: 33 I_LOCAL_SET 8
                                local8 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 65 I_I32_CONST 15
                                stack.push(15);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 33 I_LOCAL_SET 9
                                local9 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 65 I_I32_CONST 4
                                stack.push(4);
                                // opcode: 118 I_I32_SHR_U
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() >>> x);
                                }
                                // opcode: 33 I_LOCAL_SET 10
                                local10 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 2
                                stack.push(local2);
                                // opcode: 65 I_I32_CONST 4
                                stack.push(4);
                                // opcode: 106 I_I32_ADD
                                stack.push(stack.pop() + stack.pop());
                                // opcode: 33 I_LOCAL_SET 2
                                local2 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 6
                                stack.push(local6);
                                // opcode: 65 I_I32_CONST 14
                                stack.push(14);
                                // opcode: 70 I_I32_EQ
                                stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":16},{"opCode":32
                                if_12: if (stack.pop() !== 0) {
                                    // opcode: 65 I_I32_CONST 16
                                    stack.push(16);
                                    // opcode: 32 I_LOCAL_GET 10
                                    stack.push(local10);
                                    // opcode: 114 I_I32_OR
                                    stack.push(stack.pop() | stack.pop());
                                    // opcode: 33 I_LOCAL_SET 6
                                    local6 = stack.pop();
                                    // opcode: 32 I_LOCAL_GET 9
                                    stack.push(local9);
                                    // opcode: 33 I_LOCAL_SET 8
                                    local8 = stack.pop();
                                    // opcode: 65 I_I32_CONST 0
                                    stack.push(0);
                                    // opcode: 33 I_LOCAL_SET 10
                                    local10 = stack.pop();
                                    // opcode: 11 I_END
                                }
                                // opcode: 32 I_LOCAL_GET 6
                                stack.push(local6);
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":14},{"opCode":33
                                if_13: if (stack.pop() !== 0) {
                                    // opcode: 65 I_I32_CONST 14
                                    stack.push(14);
                                    // opcode: 33 I_LOCAL_SET 6
                                    local6 = stack.pop();
                                    // opcode: 11 I_END
                                }
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 107 I_I32_SUB
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                // opcode: 33 I_LOCAL_SET 11
                                local11 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 6
                                stack.push(local6);
                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":31}
                                {
                                    const x = stack.pop();
                                    memory0[31 + stack.pop()] = x;
                                }
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":32}
                                {
                                    const x = stack.pop();
                                    memory0[32 + stack.pop()] = x;
                                }
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 65 I_I32_CONST 0
                                stack.push(0);
                                // opcode: 54 I_I32_STORE {"align":2,"offset":39}
                                {
                                    const x = stack.pop();
                                    new DataView(memory0.buffer, 39 + stack.pop(), 4).setInt32(0, x, true);
                                }
                                // opcode: 32 I_LOCAL_GET 6
                                stack.push(local6);
                                // opcode: 65 I_I32_CONST 29
                                stack.push(29);
                                // opcode: 71 I_I32_NE
                                stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 114 I_I32_OR
                                stack.push(stack.pop() | stack.pop());
                                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":3},{"opCode":16,
                                if_14: if (stack.pop() !== 0) {
                                    // opcode: 32 I_LOCAL_GET 3
                                    stack.push(local3);
                                    // opcode: 16 I_CALL 6
                                    func6(stack.pop());
                                    // opcode: 11 I_END
                                }
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
                                                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":6},{"opCode":14,"dat
                                                                                        block_29: {
                                                                                            // opcode: 32 I_LOCAL_GET 6
                                                                                            stack.push(local6);
                                                                                            // opcode: 14 I_BR_TABLE {"branches":[19,19,19,14,17,19,17,17,13,19,19,12,11,10,19,9,19,8
                                                                                            {
                                                                                                const target_idx = stack.pop();
                                                                                                if(target_idx === 0) { break block_7; }
                                                                                                else if(target_idx === 1) { break block_7; }
                                                                                                else if(target_idx === 2) { break block_7; }
                                                                                                else if(target_idx === 3) { break block_15; }
                                                                                                else if(target_idx === 4) { break block_9; }
                                                                                                else if(target_idx === 5) { break block_7; }
                                                                                                else if(target_idx === 6) { break block_9; }
                                                                                                else if(target_idx === 7) { break block_9; }
                                                                                                else if(target_idx === 8) { break block_16; }
                                                                                                else if(target_idx === 9) { break block_7; }
                                                                                                else if(target_idx === 10) { break block_7; }
                                                                                                else if(target_idx === 11) { break block_17; }
                                                                                                else if(target_idx === 12) { break block_18; }
                                                                                                else if(target_idx === 13) { break block_19; }
                                                                                                else if(target_idx === 14) { break block_7; }
                                                                                                else if(target_idx === 15) { break block_20; }
                                                                                                else if(target_idx === 16) { break block_7; }
                                                                                                else if(target_idx === 17) { break block_21; }
                                                                                                else if(target_idx === 18) { break block_22; }
                                                                                                else if(target_idx === 19) { break block_7; }
                                                                                                else if(target_idx === 20) { break block_23; }
                                                                                                else if(target_idx === 21) { break block_7; }
                                                                                                else if(target_idx === 22) { break block_24; }
                                                                                                else if(target_idx === 23) { break block_25; }
                                                                                                else if(target_idx === 24) { break block_7; }
                                                                                                else if(target_idx === 25) { break block_7; }
                                                                                                else if(target_idx === 26) { break block_26; }
                                                                                                else if(target_idx === 27) { break block_27; }
                                                                                                else if(target_idx === 28) { break block_28; }
                                                                                                else if(target_idx === 29) { break block_7; }
                                                                                                else if(target_idx === 30) { break block_29; }
                                                                                                else { break block_7; }
                                                                                            }
                                                                                            // opcode: 11 I_END
                                                                                        }
                                                                                        // opcode: 35 I_GLOBAL_GET 13
                                                                                        stack.push(global13);
                                                                                        // opcode: 35 I_GLOBAL_GET 13
                                                                                        stack.push(global13);
                                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                                        stack.push(local8);
                                                                                        // opcode: 108 I_I32_MUL
                                                                                        stack.push(stack.pop() * stack.pop());
                                                                                        // opcode: 106 I_I32_ADD
                                                                                        stack.push(stack.pop() + stack.pop());
                                                                                        // opcode: 36 I_GLOBAL_SET 12
                                                                                        global12 = stack.pop();
                                                                                        // opcode: 12 I_BR 18
                                                                                        break block_7;
                                                                                        // opcode: 11 I_END
                                                                                    }
                                                                                    // opcode: 32 I_LOCAL_GET 8
                                                                                    stack.push(local8);
                                                                                    // opcode: 13 I_BR_IF 17
                                                                                    if (stack.pop() !== 0) { break block_7; }
                                                                                    // opcode: 32 I_LOCAL_GET 3
                                                                                    stack.push(local3);
                                                                                    // opcode: 65 I_I32_CONST 0
                                                                                    stack.push(0);
                                                                                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":34}
                                                                                    {
                                                                                        const x = stack.pop();
                                                                                        memory0[34 + stack.pop()] = x;
                                                                                    }
                                                                                    // opcode: 12 I_BR 17
                                                                                    break block_7;
                                                                                    // opcode: 11 I_END
                                                                                }
                                                                                // opcode: 32 I_LOCAL_GET 11
                                                                                stack.push(local11);
                                                                                // opcode: 33 I_LOCAL_SET 8
                                                                                local8 = stack.pop();
                                                                                // opcode: 11 I_END
                                                                            }
                                                                            // opcode: 32 I_LOCAL_GET 3
                                                                            stack.push(local3);
                                                                            // opcode: 32 I_LOCAL_GET 3
                                                                            stack.push(local3);
                                                                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":34}
                                                                            stack.push(new DataView(memory0.buffer, 34 + stack.pop(), 1).getUint8(0));
                                                                            // opcode: 32 I_LOCAL_GET 8
                                                                            stack.push(local8);
                                                                            // opcode: 106 I_I32_ADD
                                                                            stack.push(stack.pop() + stack.pop());
                                                                            // opcode: 65 I_I32_CONST 64
                                                                            stack.push(64);
                                                                            // opcode: 16 I_CALL 3
                                                                            {
                                                                                const args = stack.slice(-2);
                                                                                stack.pop();
                                                                                stack.pop();
                                                                                stack.push(func3(...args));
                                                                            }
                                                                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":34}
                                                                            {
                                                                                const x = stack.pop();
                                                                                memory0[34 + stack.pop()] = x;
                                                                            }
                                                                            // opcode: 12 I_BR 15
                                                                            break block_7;
                                                                            // opcode: 11 I_END
                                                                        }
                                                                        // opcode: 0 I_UNREACHABLE
                                                                        throw new Error("unreachable code");
                                                                        // opcode: 11 I_END
                                                                    }
                                                                    // opcode: 32 I_LOCAL_GET 8
                                                                    stack.push(local8);
                                                                    // opcode: 69 I_I32_EQZ
                                                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                                                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":3},{"opCode":35,
                                                                    if_30: if (stack.pop() !== 0) {
                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                        stack.push(local3);
                                                                        // opcode: 35 I_GLOBAL_GET 10
                                                                        stack.push(global10);
                                                                        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":38}
                                                                        {
                                                                            const x = stack.pop();
                                                                            memory0[38 + stack.pop()] = x;
                                                                        }
                                                                        // opcode: 11 I_END
                                                                    }
                                                                    // opcode: 32 I_LOCAL_GET 3
                                                                    stack.push(local3);
                                                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":38}
                                                                    stack.push(new DataView(memory0.buffer, 38 + stack.pop(), 1).getUint8(0));
                                                                    // opcode: 35 I_GLOBAL_GET 10
                                                                    stack.push(global10);
                                                                    // opcode: 78 I_I32_GE_S
                                                                    {
                                                                        const x = stack.pop();
                                                                        stack.push(stack.pop() >= x ? 1 : 0);
                                                                    }
                                                                    // opcode: 35 I_GLOBAL_GET 9
                                                                    stack.push(global9);
                                                                    // opcode: 65 I_I32_CONST 0
                                                                    stack.push(0);
                                                                    // opcode: 78 I_I32_GE_S
                                                                    {
                                                                        const x = stack.pop();
                                                                        stack.push(stack.pop() >= x ? 1 : 0);
                                                                    }
                                                                    // opcode: 114 I_I32_OR
                                                                    stack.push(stack.pop() | stack.pop());
                                                                    // opcode: 13 I_BR_IF 13
                                                                    if (stack.pop() !== 0) { break block_7; }
                                                                    // opcode: 35 I_GLOBAL_GET 14
                                                                    stack.push(global14);
                                                                    // opcode: 65 I_I32_CONST 0
                                                                    stack.push(0);
                                                                    // opcode: 72 I_I32_LT_S
                                                                    {
                                                                        const x = stack.pop();
                                                                        stack.push(stack.pop() < x ? 1 : 0);
                                                                    }
                                                                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":8},{"opCode":36,
                                                                    if_31: if (stack.pop() !== 0) {
                                                                        // opcode: 32 I_LOCAL_GET 8
                                                                        stack.push(local8);
                                                                        // opcode: 36 I_GLOBAL_SET 14
                                                                        global14 = stack.pop();
                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                        stack.push(local3);
                                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":36}
                                                                        stack.push(new DataView(memory0.buffer, 36 + stack.pop(), 1).getUint8(0));
                                                                        // opcode: 36 I_GLOBAL_SET 15
                                                                        global15 = stack.pop();
                                                                        // opcode: 11 I_END
                                                                    }
                                                                    // opcode: 35 I_GLOBAL_GET 15
                                                                    stack.push(global15);
                                                                    // opcode: 32 I_LOCAL_GET 3
                                                                    stack.push(local3);
                                                                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":36}
                                                                    stack.push(new DataView(memory0.buffer, 36 + stack.pop(), 1).getUint8(0));
                                                                    // opcode: 71 I_I32_NE
                                                                    stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                                                    // opcode: 13 I_BR_IF 13
                                                                    if (stack.pop() !== 0) { break block_7; }
                                                                    // opcode: 35 I_GLOBAL_GET 14
                                                                    stack.push(global14);
                                                                    // opcode: 69 I_I32_EQZ
                                                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                                                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":3},{"opCode":35,
                                                                    if_32: if (stack.pop() !== 0) {
                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                        stack.push(local3);
                                                                        // opcode: 35 I_GLOBAL_GET 10
                                                                        stack.push(global10);
                                                                        // opcode: 65 I_I32_CONST 1
                                                                        stack.push(1);
                                                                        // opcode: 106 I_I32_ADD
                                                                        stack.push(stack.pop() + stack.pop());
                                                                        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":38}
                                                                        {
                                                                            const x = stack.pop();
                                                                            memory0[38 + stack.pop()] = x;
                                                                        }
                                                                        // opcode: 5 I_ELSE
                                                                    } else {
                                                                        // opcode: 32 I_LOCAL_GET 3
                                                                        stack.push(local3);
                                                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":38}
                                                                        stack.push(new DataView(memory0.buffer, 38 + stack.pop(), 1).getUint8(0));
                                                                        // opcode: 36 I_GLOBAL_SET 11
                                                                        global11 = stack.pop();
                                                                        // opcode: 11 I_END
                                                                    }
                                                                    // opcode: 35 I_GLOBAL_GET 14
                                                                    stack.push(global14);
                                                                    // opcode: 65 I_I32_CONST 1
                                                                    stack.push(1);
                                                                    // opcode: 107 I_I32_SUB
                                                                    {
                                                                        const x = stack.pop();
                                                                        stack.push(stack.pop() - x);
                                                                    }
                                                                    // opcode: 36 I_GLOBAL_SET 14
                                                                    global14 = stack.pop();
                                                                    // opcode: 12 I_BR 13
                                                                    break block_7;
                                                                    // opcode: 11 I_END
                                                                }
                                                                // opcode: 32 I_LOCAL_GET 8
                                                                stack.push(local8);
                                                                // opcode: 65 I_I32_CONST 8
                                                                stack.push(8);
                                                                // opcode: 78 I_I32_GE_S
                                                                {
                                                                    const x = stack.pop();
                                                                    stack.push(stack.pop() >= x ? 1 : 0);
                                                                }
                                                                // opcode: 13 I_BR_IF 12
                                                                if (stack.pop() !== 0) { break block_7; }
                                                                // opcode: 32 I_LOCAL_GET 3
                                                                stack.push(local3);
                                                                // opcode: 32 I_LOCAL_GET 8
                                                                stack.push(local8);
                                                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":43}
                                                                {
                                                                    const x = stack.pop();
                                                                    memory0[43 + stack.pop()] = x;
                                                                }
                                                                // opcode: 12 I_BR 12
                                                                break block_7;
                                                                // opcode: 11 I_END
                                                            }
                                                            // opcode: 32 I_LOCAL_GET 11
                                                            stack.push(local11);
                                                            // opcode: 33 I_LOCAL_SET 8
                                                            local8 = stack.pop();
                                                            // opcode: 11 I_END
                                                        }
                                                        // opcode: 32 I_LOCAL_GET 3
                                                        stack.push(local3);
                                                        // opcode: 32 I_LOCAL_GET 3
                                                        stack.push(local3);
                                                        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":24}
                                                        stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 2).getUint16(0, true));
                                                        // opcode: 32 I_LOCAL_GET 8
                                                        stack.push(local8);
                                                        // opcode: 107 I_I32_SUB
                                                        {
                                                            const x = stack.pop();
                                                            stack.push(stack.pop() - x);
                                                        }
                                                        // opcode: 65 I_I32_CONST 65535
                                                        stack.push(65535);
                                                        // opcode: 16 I_CALL 3
                                                        {
                                                            const args = stack.slice(-2);
                                                            stack.pop();
                                                            stack.pop();
                                                            stack.push(func3(...args));
                                                        }
                                                        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":24}
                                                        {
                                                            const x = stack.pop();
                                                            new DataView(memory0.buffer, 24 + stack.pop(), 2).setInt16(0, x, true);
                                                        }
                                                        // opcode: 12 I_BR 10
                                                        break block_7;
                                                        // opcode: 11 I_END
                                                    }
                                                    // opcode: 32 I_LOCAL_GET 8
                                                    stack.push(local8);
                                                    // opcode: 69 I_I32_EQZ
                                                    stack.push(stack.pop() === 0 ? 1 : 0);
                                                    // opcode: 13 I_BR_IF 9
                                                    if (stack.pop() !== 0) { break block_7; }
                                                    // opcode: 32 I_LOCAL_GET 8
                                                    stack.push(local8);
                                                    // opcode: 65 I_I32_CONST 32
                                                    stack.push(32);
                                                    // opcode: 72 I_I32_LT_S
                                                    {
                                                        const x = stack.pop();
                                                        stack.push(stack.pop() < x ? 1 : 0);
                                                    }
                                                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":8},{"opCode":36,
                                                    if_33: if (stack.pop() !== 0) {
                                                        // opcode: 32 I_LOCAL_GET 8
                                                        stack.push(local8);
                                                        // opcode: 36 I_GLOBAL_SET 12
                                                        global12 = stack.pop();
                                                        // opcode: 32 I_LOCAL_GET 8
                                                        stack.push(local8);
                                                        // opcode: 36 I_GLOBAL_SET 13
                                                        global13 = stack.pop();
                                                        // opcode: 5 I_ELSE
                                                    } else {
                                                        // opcode: 35 I_GLOBAL_GET 0
                                                        stack.push(global0);
                                                        // opcode: 65 I_I32_CONST 5
                                                        stack.push(5);
                                                        // opcode: 108 I_I32_MUL
                                                        stack.push(stack.pop() * stack.pop());
                                                        // opcode: 32 I_LOCAL_GET 8
                                                        stack.push(local8);
                                                        // opcode: 65 I_I32_CONST 1
                                                        stack.push(1);
                                                        // opcode: 116 I_I32_SHL
                                                        {
                                                            const x = stack.pop();
                                                            stack.push(stack.pop() << x);
                                                        }
                                                        // opcode: 110 I_I32_DIV_U
                                                        {
                                                            const x = stack.pop();
                                                            stack.push(Math.floor(stack.pop() / x));
                                                        }
                                                        // opcode: 36 I_GLOBAL_SET 6
                                                        global6 = stack.pop();
                                                        // opcode: 11 I_END
                                                    }
                                                    // opcode: 12 I_BR 9
                                                    break block_7;
                                                    // opcode: 11 I_END
                                                }
                                                // opcode: 35 I_GLOBAL_GET 14
                                                stack.push(global14);
                                                // opcode: 65 I_I32_CONST 0
                                                stack.push(0);
                                                // opcode: 78 I_I32_GE_S
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() >= x ? 1 : 0);
                                                }
                                                // opcode: 13 I_BR_IF 8
                                                if (stack.pop() !== 0) { break block_7; }
                                                // opcode: 35 I_GLOBAL_GET 9
                                                stack.push(global9);
                                                // opcode: 65 I_I32_CONST 0
                                                stack.push(0);
                                                // opcode: 72 I_I32_LT_S
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() < x ? 1 : 0);
                                                }
                                                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":35,"data":8},{"opCode":65,
                                                if_34: if (stack.pop() !== 0) {
                                                    // opcode: 35 I_GLOBAL_GET 8
                                                    stack.push(global8);
                                                    // opcode: 65 I_I32_CONST 1
                                                    stack.push(1);
                                                    // opcode: 106 I_I32_ADD
                                                    stack.push(stack.pop() + stack.pop());
                                                    // opcode: 36 I_GLOBAL_SET 9
                                                    global9 = stack.pop();
                                                    // opcode: 11 I_END
                                                }
                                                // opcode: 32 I_LOCAL_GET 10
                                                stack.push(local10);
                                                // opcode: 65 I_I32_CONST 10
                                                stack.push(10);
                                                // opcode: 108 I_I32_MUL
                                                stack.push(stack.pop() * stack.pop());
                                                // opcode: 32 I_LOCAL_GET 9
                                                stack.push(local9);
                                                // opcode: 106 I_I32_ADD
                                                stack.push(stack.pop() + stack.pop());
                                                // opcode: 36 I_GLOBAL_SET 11
                                                global11 = stack.pop();
                                                // opcode: 35 I_GLOBAL_GET 11
                                                stack.push(global11);
                                                // opcode: 65 I_I32_CONST 64
                                                stack.push(64);
                                                // opcode: 72 I_I32_LT_S
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() < x ? 1 : 0);
                                                }
                                                // opcode: 13 I_BR_IF 8
                                                if (stack.pop() !== 0) { break block_7; }
                                                // opcode: 65 I_I32_CONST 0
                                                stack.push(0);
                                                // opcode: 36 I_GLOBAL_SET 11
                                                global11 = stack.pop();
                                                // opcode: 12 I_BR 8
                                                break block_7;
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 32 I_LOCAL_GET 3
                                            stack.push(local3);
                                            // opcode: 32 I_LOCAL_GET 8
                                            stack.push(local8);
                                            // opcode: 65 I_I32_CONST 64
                                            stack.push(64);
                                            // opcode: 16 I_CALL 3
                                            {
                                                const args = stack.slice(-2);
                                                stack.pop();
                                                stack.pop();
                                                stack.push(func3(...args));
                                            }
                                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":34}
                                            {
                                                const x = stack.pop();
                                                memory0[34 + stack.pop()] = x;
                                            }
                                            // opcode: 12 I_BR 7
                                            break block_7;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 35 I_GLOBAL_GET 14
                                        stack.push(global14);
                                        // opcode: 65 I_I32_CONST 0
                                        stack.push(0);
                                        // opcode: 78 I_I32_GE_S
                                        {
                                            const x = stack.pop();
                                            stack.push(stack.pop() >= x ? 1 : 0);
                                        }
                                        // opcode: 13 I_BR_IF 6
                                        if (stack.pop() !== 0) { break block_7; }
                                        // opcode: 32 I_LOCAL_GET 8
                                        stack.push(local8);
                                        // opcode: 36 I_GLOBAL_SET 9
                                        global9 = stack.pop();
                                        // opcode: 65 I_I32_CONST 0
                                        stack.push(0);
                                        // opcode: 36 I_GLOBAL_SET 11
                                        global11 = stack.pop();
                                        // opcode: 12 I_BR 6
                                        break block_7;
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 35 I_GLOBAL_GET 2
                                    stack.push(global2);
                                    // opcode: 65 I_I32_CONST 4
                                    stack.push(4);
                                    // opcode: 70 I_I32_EQ
                                    stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                    // opcode: 13 I_BR_IF 5
                                    if (stack.pop() !== 0) { break block_7; }
                                    // opcode: 32 I_LOCAL_GET 3
                                    stack.push(local3);
                                    // opcode: 32 I_LOCAL_GET 8
                                    stack.push(local8);
                                    // opcode: 65 I_I32_CONST 127
                                    stack.push(127);
                                    // opcode: 16 I_CALL 3
                                    {
                                        const args = stack.slice(-2);
                                        stack.pop();
                                        stack.pop();
                                        stack.push(func3(...args));
                                    }
                                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":35}
                                    {
                                        const x = stack.pop();
                                        memory0[35 + stack.pop()] = x;
                                    }
                                    // opcode: 12 I_BR 5
                                    break block_7;
                                    // opcode: 11 I_END
                                }
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 69 I_I32_EQZ
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                // opcode: 13 I_BR_IF 4
                                if (stack.pop() !== 0) { break block_7; }
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":37}
                                {
                                    const x = stack.pop();
                                    memory0[37 + stack.pop()] = x;
                                }
                                // opcode: 5 I_ELSE
                            } else {
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":31}
                                stack.push(new DataView(memory0.buffer, 31 + stack.pop(), 1).getUint8(0));
                                // opcode: 33 I_LOCAL_SET 6
                                local6 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32}
                                stack.push(new DataView(memory0.buffer, 32 + stack.pop(), 1).getUint8(0));
                                // opcode: 33 I_LOCAL_SET 8
                                local8 = stack.pop();
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":39}
                                stack.push(new DataView(memory0.buffer, 39 + stack.pop(), 1).getUint8(0));
                                // opcode: 65 I_I32_CONST 1
                                stack.push(1);
                                // opcode: 106 I_I32_ADD
                                stack.push(stack.pop() + stack.pop());
                                // opcode: 34 I_LOCAL_TEE 12
                                local12 = stack[stack.length - 1];
                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":39}
                                {
                                    const x = stack.pop();
                                    memory0[39 + stack.pop()] = x;
                                }
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
                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":6},{"opCode":14,"dat
                                                    block_40: {
                                                        // opcode: 32 I_LOCAL_GET 6
                                                        stack.push(local6);
                                                        // opcode: 14 I_BR_TABLE {"branches":[10,5,4,7,8,7,8,8,10,10,9,10,10,10,3,10,10,10,10,10,
                                                        {
                                                            const target_idx = stack.pop();
                                                            if(target_idx === 0) { break block_7; }
                                                            else if(target_idx === 1) { break block_35; }
                                                            else if(target_idx === 2) { break block_36; }
                                                            else if(target_idx === 3) { break block_10; }
                                                            else if(target_idx === 4) { break block_9; }
                                                            else if(target_idx === 5) { break block_10; }
                                                            else if(target_idx === 6) { break block_9; }
                                                            else if(target_idx === 7) { break block_9; }
                                                            else if(target_idx === 8) { break block_7; }
                                                            else if(target_idx === 9) { break block_7; }
                                                            else if(target_idx === 10) { break block_8; }
                                                            else if(target_idx === 11) { break block_7; }
                                                            else if(target_idx === 12) { break block_7; }
                                                            else if(target_idx === 13) { break block_7; }
                                                            else if(target_idx === 14) { break block_37; }
                                                            else if(target_idx === 15) { break block_7; }
                                                            else if(target_idx === 16) { break block_7; }
                                                            else if(target_idx === 17) { break block_7; }
                                                            else if(target_idx === 18) { break block_7; }
                                                            else if(target_idx === 19) { break block_7; }
                                                            else if(target_idx === 20) { break block_7; }
                                                            else if(target_idx === 21) { break block_7; }
                                                            else if(target_idx === 22) { break block_7; }
                                                            else if(target_idx === 23) { break block_7; }
                                                            else if(target_idx === 24) { break block_7; }
                                                            else if(target_idx === 25) { break block_38; }
                                                            else if(target_idx === 26) { break block_7; }
                                                            else if(target_idx === 27) { break block_7; }
                                                            else if(target_idx === 28) { break block_39; }
                                                            else if(target_idx === 29) { break block_40; }
                                                            else { break block_7; }
                                                        }
                                                        // opcode: 11 I_END
                                                    }
                                                    // opcode: 32 I_LOCAL_GET 8
                                                    stack.push(local8);
                                                    // opcode: 32 I_LOCAL_GET 12
                                                    stack.push(local12);
                                                    // opcode: 71 I_I32_NE
                                                    stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                                    // opcode: 13 I_BR_IF 9
                                                    if (stack.pop() !== 0) { break block_7; }
                                                    // opcode: 32 I_LOCAL_GET 3
                                                    stack.push(local3);
                                                    // opcode: 16 I_CALL 6
                                                    func6(stack.pop());
                                                    // opcode: 12 I_BR 9
                                                    break block_7;
                                                    // opcode: 11 I_END
                                                }
                                                // opcode: 32 I_LOCAL_GET 8
                                                stack.push(local8);
                                                // opcode: 32 I_LOCAL_GET 12
                                                stack.push(local12);
                                                // opcode: 71 I_I32_NE
                                                stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                                // opcode: 13 I_BR_IF 8
                                                if (stack.pop() !== 0) { break block_7; }
                                                // opcode: 32 I_LOCAL_GET 3
                                                stack.push(local3);
                                                // opcode: 65 I_I32_CONST 0
                                                stack.push(0);
                                                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":34}
                                                {
                                                    const x = stack.pop();
                                                    memory0[34 + stack.pop()] = x;
                                                }
                                                // opcode: 12 I_BR 8
                                                break block_7;
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 32 I_LOCAL_GET 12
                                            stack.push(local12);
                                            // opcode: 32 I_LOCAL_GET 8
                                            stack.push(local8);
                                            // opcode: 72 I_I32_LT_S
                                            {
                                                const x = stack.pop();
                                                stack.push(stack.pop() < x ? 1 : 0);
                                            }
                                            // opcode: 13 I_BR_IF 7
                                            if (stack.pop() !== 0) { break block_7; }
                                            // opcode: 32 I_LOCAL_GET 3
                                            stack.push(local3);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":39}
                                            {
                                                const x = stack.pop();
                                                memory0[39 + stack.pop()] = x;
                                            }
                                            // opcode: 32 I_LOCAL_GET 3
                                            stack.push(local3);
                                            // opcode: 65 I_I32_CONST 0
                                            stack.push(0);
                                            // opcode: 54 I_I32_STORE {"align":2,"offset":12}
                                            {
                                                const x = stack.pop();
                                                new DataView(memory0.buffer, 12 + stack.pop(), 4).setInt32(0, x, true);
                                            }
                                            // opcode: 12 I_BR 7
                                            break block_7;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 2 I_BLOCK {"blockType":127,"body":[{"opCode":2,"data":{"blockType":64,"bod
                                        block_with_result_41: {
                                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                            block_42: {
                                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                block_43: {
                                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                                    block_44: {
                                                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":12},{"opCode":14,"da
                                                        block_45: {
                                                            // opcode: 32 I_LOCAL_GET 12
                                                            stack.push(local12);
                                                            // opcode: 14 I_BR_TABLE {"branches":[1,2,3],"def":0}
                                                            {
                                                                const target_idx = stack.pop();
                                                                if(target_idx === 0) { break block_44; }
                                                                else if(target_idx === 1) { break block_43; }
                                                                else if(target_idx === 2) { break block_42; }
                                                                else { break block_45; }
                                                            }
                                                            // opcode: 11 I_END
                                                        }
                                                        // opcode: 32 I_LOCAL_GET 3
                                                        stack.push(local3);
                                                        // opcode: 65 I_I32_CONST 0
                                                        stack.push(0);
                                                        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":39}
                                                        {
                                                            const x = stack.pop();
                                                            memory0[39 + stack.pop()] = x;
                                                        }
                                                        // opcode: 12 I_BR 10
                                                        break block_7;
                                                        // opcode: 11 I_END
                                                    }
                                                    // opcode: 65 I_I32_CONST 0
                                                    stack.push(0);
                                                    // opcode: 12 I_BR 2
                                                    break block_with_result_41;
                                                    // opcode: 11 I_END
                                                }
                                                // opcode: 32 I_LOCAL_GET 8
                                                stack.push(local8);
                                                // opcode: 65 I_I32_CONST 4
                                                stack.push(4);
                                                // opcode: 118 I_I32_SHR_U
                                                {
                                                    const x = stack.pop();
                                                    stack.push(stack.pop() >>> x);
                                                }
                                                // opcode: 12 I_BR 1
                                                break block_with_result_41;
                                                // opcode: 11 I_END
                                            }
                                            // opcode: 32 I_LOCAL_GET 8
                                            stack.push(local8);
                                            // opcode: 65 I_I32_CONST 15
                                            stack.push(15);
                                            // opcode: 113 I_I32_AND
                                            stack.push(stack.pop() & stack.pop());
                                            // opcode: 12 I_BR 0
                                            break block_with_result_41;
                                            // opcode: 11 I_END
                                        }
                                        // opcode: 32 I_LOCAL_GET 3
                                        stack.push(local3);
                                        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":42}
                                        {
                                            const x = stack.pop();
                                            memory0[42 + stack.pop()] = x;
                                        }
                                        // opcode: 12 I_BR 6
                                        break block_7;
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 32 I_LOCAL_GET 11
                                    stack.push(local11);
                                    // opcode: 33 I_LOCAL_SET 8
                                    local8 = stack.pop();
                                    // opcode: 11 I_END
                                }
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 32 I_LOCAL_GET 3
                                stack.push(local3);
                                // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":24}
                                stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 2).getUint16(0, true));
                                // opcode: 32 I_LOCAL_GET 8
                                stack.push(local8);
                                // opcode: 107 I_I32_SUB
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                // opcode: 65 I_I32_CONST 65535
                                stack.push(65535);
                                // opcode: 16 I_CALL 3
                                {
                                    const args = stack.slice(-2);
                                    stack.pop();
                                    stack.pop();
                                    stack.push(func3(...args));
                                }
                                // opcode: 59 I_I32_STORE_16 {"align":1,"offset":24}
                                {
                                    const x = stack.pop();
                                    new DataView(memory0.buffer, 24 + stack.pop(), 2).setInt16(0, x, true);
                                }
                                // opcode: 11 I_END
                            }
                            // opcode: 12 I_BR 3
                            break block_7;
                            // opcode: 11 I_END
                        }
                        // opcode: 32 I_LOCAL_GET 3
                        stack.push(local3);
                        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":24}
                        stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 2).getUint16(0, true));
                        // opcode: 33 I_LOCAL_SET 14
                        local14 = stack.pop();
                        // opcode: 32 I_LOCAL_GET 3
                        stack.push(local3);
                        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":26}
                        stack.push(new DataView(memory0.buffer, 26 + stack.pop(), 2).getUint16(0, true));
                        // opcode: 33 I_LOCAL_SET 15
                        local15 = stack.pop();
                        // opcode: 32 I_LOCAL_GET 3
                        stack.push(local3);
                        // opcode: 32 I_LOCAL_GET 14
                        stack.push(local14);
                        // opcode: 32 I_LOCAL_GET 15
                        stack.push(local15);
                        // opcode: 72 I_I32_LT_S
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        // opcode: 4 I_IF {"blockType":127,"trueBody":[{"opCode":32,"data":15},{"opCode":3
                        if_46: if (stack.pop() !== 0) {
                            // opcode: 32 I_LOCAL_GET 15
                            stack.push(local15);
                            // opcode: 32 I_LOCAL_GET 14
                            stack.push(local14);
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":37}
                            stack.push(new DataView(memory0.buffer, 37 + stack.pop(), 1).getUint8(0));
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 34 I_LOCAL_TEE 14
                            local14 = stack[stack.length - 1];
                            // opcode: 32 I_LOCAL_GET 14
                            stack.push(local14);
                            // opcode: 32 I_LOCAL_GET 15
                            stack.push(local15);
                            // opcode: 74 I_I32_GT_S
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() > x ? 1 : 0);
                            }
                            // opcode: 27 I_SELECT
                            {
                                const condition = stack.pop();
                                const x2 = stack.pop();
                                const x1 = stack.pop();
                                stack.push(condition !== 0 ? x1 : x2)
                            }
                            // opcode: 5 I_ELSE
                        } else {
                            // opcode: 32 I_LOCAL_GET 15
                            stack.push(local15);
                            // opcode: 32 I_LOCAL_GET 14
                            stack.push(local14);
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":37}
                            stack.push(new DataView(memory0.buffer, 37 + stack.pop(), 1).getUint8(0));
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 34 I_LOCAL_TEE 14
                            local14 = stack[stack.length - 1];
                            // opcode: 32 I_LOCAL_GET 14
                            stack.push(local14);
                            // opcode: 32 I_LOCAL_GET 15
                            stack.push(local15);
                            // opcode: 72 I_I32_LT_S
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
                            // opcode: 11 I_END
                        }
                        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":24}
                        {
                            const x = stack.pop();
                            new DataView(memory0.buffer, 24 + stack.pop(), 2).setInt16(0, x, true);
                        }
                        // opcode: 12 I_BR 1
                        break block_8;
                        // opcode: 11 I_END
                    }
                    // opcode: 32 I_LOCAL_GET 3
                    stack.push(local3);
                    // opcode: 32 I_LOCAL_GET 6
                    stack.push(local6);
                    // opcode: 65 I_I32_CONST 7
                    stack.push(7);
                    // opcode: 70 I_I32_EQ
                    stack.push(stack.pop() === stack.pop() ? 1 : 0);
                    // opcode: 34 I_LOCAL_TEE 7
                    local7 = stack[stack.length - 1];
                    // opcode: 65 I_I32_CONST 2
                    stack.push(2);
                    // opcode: 116 I_I32_SHL
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 33 I_LOCAL_SET 16
                    local16 = stack.pop();
                    // opcode: 32 I_LOCAL_GET 1
                    stack.push(local1);
                    // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":10},{"opCode":4,
                    if_47: if (stack.pop() !== 0) {
                        // opcode: 32 I_LOCAL_GET 10
                        stack.push(local10);
                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":3},{"opCode":32,
                        if_48: if (stack.pop() !== 0) {
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":45}
                            {
                                const x = stack.pop();
                                memory0[45 + stack.pop()] = x;
                            }
                            // opcode: 11 I_END
                        }
                        // opcode: 32 I_LOCAL_GET 9
                        stack.push(local9);
                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":3},{"opCode":32,
                        if_49: if (stack.pop() !== 0) {
                            // opcode: 32 I_LOCAL_GET 3
                            stack.push(local3);
                            // opcode: 32 I_LOCAL_GET 9
                            stack.push(local9);
                            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":46}
                            {
                                const x = stack.pop();
                                memory0[46 + stack.pop()] = x;
                            }
                            // opcode: 11 I_END
                        }
                        // opcode: 5 I_ELSE
                    } else {
                        // opcode: 32 I_LOCAL_GET 16
                        stack.push(local16);
                        // opcode: 32 I_LOCAL_GET 16
                        stack.push(local16);
                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":44}
                        stack.push(new DataView(memory0.buffer, 44 + stack.pop(), 1).getUint8(0));
                        // opcode: 32 I_LOCAL_GET 16
                        stack.push(local16);
                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":45}
                        stack.push(new DataView(memory0.buffer, 45 + stack.pop(), 1).getUint8(0));
                        // opcode: 106 I_I32_ADD
                        stack.push(stack.pop() + stack.pop());
                        // opcode: 58 I_I32_STORE_8 {"align":0,"offset":44}
                        {
                            const x = stack.pop();
                            memory0[44 + stack.pop()] = x;
                        }
                        // opcode: 11 I_END
                    }
                    // opcode: 32 I_LOCAL_GET 16
                    stack.push(local16);
                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":44}
                    stack.push(new DataView(memory0.buffer, 44 + stack.pop(), 1).getUint8(0));
                    // opcode: 33 I_LOCAL_SET 18
                    local18 = stack.pop();
                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                    block_50: {
                        // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                        block_51: {
                            // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                            block_52: {
                                // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":2,"data":{"blockType":64,"body
                                block_53: {
                                    // opcode: 2 I_BLOCK {"blockType":64,"body":[{"opCode":32,"data":16},{"opCode":45,"da
                                    block_54: {
                                        // opcode: 32 I_LOCAL_GET 16
                                        stack.push(local16);
                                        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":43}
                                        stack.push(new DataView(memory0.buffer, 43 + stack.pop(), 1).getUint8(0));
                                        // opcode: 65 I_I32_CONST 3
                                        stack.push(3);
                                        // opcode: 113 I_I32_AND
                                        stack.push(stack.pop() & stack.pop());
                                        // opcode: 14 I_BR_TABLE {"branches":[3,2,1],"def":0}
                                        {
                                            const target_idx = stack.pop();
                                            if(target_idx === 0) { break block_51; }
                                            else if(target_idx === 1) { break block_52; }
                                            else if(target_idx === 2) { break block_53; }
                                            else { break block_54; }
                                        }
                                        // opcode: 11 I_END
                                    }
                                    // opcode: 35 I_GLOBAL_GET 16
                                    stack.push(global16);
                                    // opcode: 65 I_I32_CONST 20
                                    stack.push(20);
                                    // opcode: 118 I_I32_SHR_U
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() >>> x);
                                    }
                                    // opcode: 65 I_I32_CONST 255
                                    stack.push(255);
                                    // opcode: 107 I_I32_SUB
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() - x);
                                    }
                                    // opcode: 33 I_LOCAL_SET 17
                                    local17 = stack.pop();
                                    // opcode: 35 I_GLOBAL_GET 16
                                    stack.push(global16);
                                    // opcode: 65 I_I32_CONST 65
                                    stack.push(65);
                                    // opcode: 108 I_I32_MUL
                                    stack.push(stack.pop() * stack.pop());
                                    // opcode: 65 I_I32_CONST 17
                                    stack.push(17);
                                    // opcode: 106 I_I32_ADD
                                    stack.push(stack.pop() + stack.pop());
                                    // opcode: 65 I_I32_CONST 536870911
                                    stack.push(536870911);
                                    // opcode: 113 I_I32_AND
                                    stack.push(stack.pop() & stack.pop());
                                    // opcode: 36 I_GLOBAL_SET 16
                                    global16 = stack.pop();
                                    // opcode: 12 I_BR 3
                                    break block_50;
                                    // opcode: 11 I_END
                                }
                                // opcode: 65 I_I32_CONST 255
                                stack.push(255);
                                // opcode: 32 I_LOCAL_GET 18
                                stack.push(local18);
                                // opcode: 65 I_I32_CONST 32
                                stack.push(32);
                                // opcode: 113 I_I32_AND
                                stack.push(stack.pop() & stack.pop());
                                // opcode: 65 I_I32_CONST 4
                                stack.push(4);
                                // opcode: 116 I_I32_SHL
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                // opcode: 107 I_I32_SUB
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                // opcode: 33 I_LOCAL_SET 17
                                local17 = stack.pop();
                                // opcode: 12 I_BR 2
                                break block_50;
                                // opcode: 11 I_END
                            }
                            // opcode: 65 I_I32_CONST 255
                            stack.push(255);
                            // opcode: 32 I_LOCAL_GET 18
                            stack.push(local18);
                            // opcode: 65 I_I32_CONST 32
                            stack.push(32);
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 65 I_I32_CONST 63
                            stack.push(63);
                            // opcode: 113 I_I32_AND
                            stack.push(stack.pop() & stack.pop());
                            // opcode: 65 I_I32_CONST 3
                            stack.push(3);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 107 I_I32_SUB
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            // opcode: 33 I_LOCAL_SET 17
                            local17 = stack.pop();
                            // opcode: 12 I_BR 1
                            break block_50;
                            // opcode: 11 I_END
                        }
                        // opcode: 11 I_END
                    }
                    // opcode: 32 I_LOCAL_GET 16
                    stack.push(local16);
                    // opcode: 32 I_LOCAL_GET 7
                    stack.push(local7);
                    // opcode: 106 I_I32_ADD
                    stack.push(stack.pop() + stack.pop());
                    // opcode: 32 I_LOCAL_GET 17
                    stack.push(local17);
                    // opcode: 32 I_LOCAL_GET 16
                    stack.push(local16);
                    // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":46}
                    stack.push(new DataView(memory0.buffer, 46 + stack.pop(), 1).getUint8(0));
                    // opcode: 108 I_I32_MUL
                    stack.push(stack.pop() * stack.pop());
                    // opcode: 65 I_I32_CONST 7
                    stack.push(7);
                    // opcode: 32 I_LOCAL_GET 7
                    stack.push(local7);
                    // opcode: 107 I_I32_SUB
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    // opcode: 118 I_I32_SHR_U
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >>> x);
                    }
                    // opcode: 58 I_I32_STORE_8 {"align":0,"offset":40}
                    {
                        const x = stack.pop();
                        memory0[40 + stack.pop()] = x;
                    }
                    // opcode: 11 I_END
                }
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 65 I_I32_CONST 5
                stack.push(5);
                // opcode: 73 I_I32_LT_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                // opcode: 65 I_I32_CONST 7
                stack.push(7);
                // opcode: 32 I_LOCAL_GET 6
                stack.push(local6);
                // opcode: 70 I_I32_EQ
                stack.push(stack.pop() === stack.pop() ? 1 : 0);
                // opcode: 114 I_I32_OR
                stack.push(stack.pop() | stack.pop());
                // opcode: 32 I_LOCAL_GET 1
                stack.push(local1);
                // opcode: 114 I_I32_OR
                stack.push(stack.pop() | stack.pop());
                // opcode: 13 I_BR_IF 0
                if (stack.pop() !== 0) { break block_7; }
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":34}
                stack.push(new DataView(memory0.buffer, 34 + stack.pop(), 1).getUint8(0));
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 65 I_I32_CONST 4
                stack.push(4);
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 65 I_I32_CONST 15
                stack.push(15);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 107 I_I32_SUB
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                // opcode: 65 I_I32_CONST 64
                stack.push(64);
                // opcode: 16 I_CALL 3
                {
                    const args = stack.slice(-2);
                    stack.pop();
                    stack.pop();
                    stack.push(func3(...args));
                }
                // opcode: 58 I_I32_STORE_8 {"align":0,"offset":34}
                {
                    const x = stack.pop();
                    memory0[34 + stack.pop()] = x;
                }
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 6
            stack.push(local6);
            // opcode: 69 I_I32_EQZ
            stack.push(stack.pop() === 0 ? 1 : 0);
            // opcode: 69 I_I32_EQZ
            stack.push(stack.pop() === 0 ? 1 : 0);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 114 I_I32_OR
            stack.push(stack.pop() | stack.pop());
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":65,"data":6848},{"opCode":
            if_55: if (stack.pop() !== 0) {
                // opcode: 65 I_I32_CONST 6848
                stack.push(6848);
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":24}
                stack.push(new DataView(memory0.buffer, 24 + stack.pop(), 2).getUint16(0, true));
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":40}
                stack.push(new DataView(memory0.buffer, 40 + stack.pop(), 1).getUint8(0));
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":42}
                stack.push(new DataView(memory0.buffer, 42 + stack.pop(), 1).getUint8(0));
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 116 I_I32_SHL
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":149}
                stack.push(new DataView(memory0.buffer, 149 + stack.pop(), 2).getUint16(0, true));
                // opcode: 108 I_I32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 65 I_I32_CONST 11
                stack.push(11);
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 34 I_LOCAL_TEE 13
                local13 = stack[stack.length - 1];
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 118 I_I32_SHR_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() >>> x);
                }
                // opcode: 32 I_LOCAL_GET 13
                stack.push(local13);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 34 I_LOCAL_TEE 13
                local13 = stack[stack.length - 1];
                // opcode: 32 I_LOCAL_GET 13
                stack.push(local13);
                // opcode: 65 I_I32_CONST 14
                stack.push(14);
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
                // opcode: 33 I_LOCAL_SET 13
                local13 = stack.pop();
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 35 I_GLOBAL_GET 5
                stack.push(global5);
                // opcode: 32 I_LOCAL_GET 13
                stack.push(local13);
                // opcode: 110 I_I32_DIV_U
                {
                    const x = stack.pop();
                    stack.push(Math.floor(stack.pop() / x));
                }
                // opcode: 179 I_F32_CONVERT_I32_U
                // opcode: 35 I_GLOBAL_GET 0
                stack.push(global0);
                // opcode: 179 I_F32_CONVERT_I32_U
                // opcode: 149 I_F32_DIV
                {
                    const x = stack.pop();
                    stack.push(stack.pop() / x);
                }
                // opcode: 56 I_F32_STORE {"align":2,"offset":16}
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 16 + stack.pop(), 4).setFloat32(0, x, true);
                }
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":34}
                stack.push(new DataView(memory0.buffer, 34 + stack.pop(), 1).getUint8(0));
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":41}
                stack.push(new DataView(memory0.buffer, 41 + stack.pop(), 1).getUint8(0));
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 65 I_I32_CONST 64
                stack.push(64);
                // opcode: 16 I_CALL 3
                {
                    const args = stack.slice(-2);
                    stack.pop();
                    stack.pop();
                    stack.push(func3(...args));
                }
                // opcode: 179 I_F32_CONVERT_I32_U
                // opcode: 35 I_GLOBAL_GET 4
                stack.push(global4);
                // opcode: 148 I_F32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 67 I_F32_CONST 0.03125
                stack.push(0.03125);
                // opcode: 148 I_F32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 56 I_F32_STORE {"align":2,"offset":20}
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 20 + stack.pop(), 4).setFloat32(0, x, true);
                }
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 3
            stack.push(local3);
            // opcode: 65 I_I32_CONST 52
            stack.push(52);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 3
            local3 = stack[stack.length - 1];
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 73 I_I32_LT_U
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_6; }
            // opcode: 11 I_END
            break loop_6;
        }
        // opcode: 11 I_END
    }
    function func6(local0) {
        const stack = [];
        let local1 = 0;
        let local2 = 0;
        let local3 = 0;
        let local4 = 0;
        let local5 = 0;
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":30}
        stack.push(new DataView(memory0.buffer, 30 + stack.pop(), 1).getUint8(0));
        // opcode: 34 I_LOCAL_TEE 1
        local1 = stack[stack.length - 1];
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 107 I_I32_SUB
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        // opcode: 65 I_I32_CONST 31
        stack.push(31);
        // opcode: 73 I_I32_LT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":0},{"opCode":32,
        if_0: if (stack.pop() !== 0) {
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 65 I_I32_CONST 14
            stack.push(14);
            // opcode: 108 I_I32_MUL
            stack.push(stack.pop() * stack.pop());
            // opcode: 65 I_I32_CONST 181
            stack.push(181);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 34 I_LOCAL_TEE 2
            local2 = stack[stack.length - 1];
            // opcode: 54 I_I32_STORE {"align":2,"offset":4}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 4 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 54 I_I32_STORE {"align":2,"offset":8}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 8 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":12}
            stack.push(new DataView(memory0.buffer, 12 + stack.pop(), 2).getUint16(0, true));
            // opcode: 59 I_I32_STORE_16 {"align":1,"offset":33}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 33 + stack.pop(), 2).setInt16(0, x, true);
            }
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 42 I_F32_LOAD {"align":2,"offset":8}
            stack.push(new DataView(memory0.buffer, 8 + stack.pop(), 4).getFloat32(0, true));
            // opcode: 67 I_F32_CONST 0
            stack.push(0);
            // opcode: 95 I_F32_LE
            {
                const x = stack.pop();
                stack.push(stack.pop() <= x ? 1 : 0);
            }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 40 I_I32_LOAD {"align":2,"offset":0}
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getInt32(0, true));
            // opcode: 69 I_I32_EQZ
            stack.push(stack.pop() === 0 ? 1 : 0);
            // opcode: 114 I_I32_OR
            stack.push(stack.pop() | stack.pop());
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { break if_0; }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 54 I_I32_STORE {"align":2,"offset":0}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 11 I_END
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":31}
        stack.push(new DataView(memory0.buffer, 31 + stack.pop(), 1).getUint8(0));
        // opcode: 34 I_LOCAL_TEE 3
        local3 = stack[stack.length - 1];
        // opcode: 65 I_I32_CONST 9
        stack.push(9);
        // opcode: 70 I_I32_EQ
        stack.push(stack.pop() === stack.pop() ? 1 : 0);
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":0},{"opCode":32,
        if_1: if (stack.pop() !== 0) {
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32}
            stack.push(new DataView(memory0.buffer, 32 + stack.pop(), 1).getUint8(0));
            // opcode: 65 I_I32_CONST 8
            stack.push(8);
            // opcode: 116 I_I32_SHL
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            // opcode: 54 I_I32_STORE {"align":2,"offset":8}
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 8 + stack.pop(), 4).setInt32(0, x, true);
            }
            // opcode: 11 I_END
        }
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 65 I_I32_CONST 21
        stack.push(21);
        // opcode: 70 I_I32_EQ
        stack.push(stack.pop() === stack.pop() ? 1 : 0);
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":0},{"opCode":32,
        if_2: if (stack.pop() !== 0) {
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":32}
            stack.push(new DataView(memory0.buffer, 32 + stack.pop(), 1).getUint8(0));
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":33}
            {
                const x = stack.pop();
                memory0[33 + stack.pop()] = x;
            }
            // opcode: 11 I_END
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":28}
        stack.push(new DataView(memory0.buffer, 28 + stack.pop(), 2).getUint16(0, true));
        // opcode: 34 I_LOCAL_TEE 4
        local4 = stack[stack.length - 1];
        // opcode: 69 I_I32_EQZ
        stack.push(stack.pop() === 0 ? 1 : 0);
        // opcode: 13 I_BR_IF 0
        if (stack.pop() !== 0) { return; }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 4
        stack.push(local4);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":33}
        stack.push(new DataView(memory0.buffer, 33 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 15
        stack.push(15);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 116 I_I32_SHL
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":117}
        stack.push(new DataView(memory0.buffer, 117 + stack.pop(), 2).getUint16(0, true));
        // opcode: 108 I_I32_MUL
        stack.push(stack.pop() * stack.pop());
        // opcode: 65 I_I32_CONST 11
        stack.push(11);
        // opcode: 118 I_I32_SHR_U
        {
            const x = stack.pop();
            stack.push(stack.pop() >>> x);
        }
        // opcode: 34 I_LOCAL_TEE 5
        local5 = stack[stack.length - 1];
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 118 I_I32_SHR_U
        {
            const x = stack.pop();
            stack.push(stack.pop() >>> x);
        }
        // opcode: 32 I_LOCAL_GET 5
        stack.push(local5);
        // opcode: 65 I_I32_CONST 1
        stack.push(1);
        // opcode: 113 I_I32_AND
        stack.push(stack.pop() & stack.pop());
        // opcode: 106 I_I32_ADD
        stack.push(stack.pop() + stack.pop());
        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":26}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 26 + stack.pop(), 2).setInt16(0, x, true);
        }
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 65 I_I32_CONST 3
        stack.push(3);
        // opcode: 70 I_I32_EQ
        stack.push(stack.pop() === stack.pop() ? 1 : 0);
        // opcode: 32 I_LOCAL_GET 3
        stack.push(local3);
        // opcode: 65 I_I32_CONST 5
        stack.push(5);
        // opcode: 70 I_I32_EQ
        stack.push(stack.pop() === stack.pop() ? 1 : 0);
        // opcode: 114 I_I32_OR
        stack.push(stack.pop() | stack.pop());
        // opcode: 13 I_BR_IF 0
        if (stack.pop() !== 0) { return; }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 40 I_I32_LOAD {"align":2,"offset":4}
        stack.push(new DataView(memory0.buffer, 4 + stack.pop(), 4).getInt32(0, true));
        // opcode: 54 I_I32_STORE {"align":2,"offset":0}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 47 I_I32_LOAD_16_U {"align":1,"offset":26}
        stack.push(new DataView(memory0.buffer, 26 + stack.pop(), 2).getUint16(0, true));
        // opcode: 59 I_I32_STORE_16 {"align":1,"offset":24}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 24 + stack.pop(), 2).setInt16(0, x, true);
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 40 I_I32_LOAD {"align":2,"offset":8}
        stack.push(new DataView(memory0.buffer, 8 + stack.pop(), 4).getInt32(0, true));
        // opcode: 179 I_F32_CONVERT_I32_U
        // opcode: 56 I_F32_STORE {"align":2,"offset":12}
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 12 + stack.pop(), 4).setFloat32(0, x, true);
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":43}
        stack.push(new DataView(memory0.buffer, 43 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 4
        stack.push(4);
        // opcode: 73 I_I32_LT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":0},{"opCode":65,
        if_3: if (stack.pop() !== 0) {
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":44}
            {
                const x = stack.pop();
                memory0[44 + stack.pop()] = x;
            }
            // opcode: 11 I_END
        }
        // opcode: 32 I_LOCAL_GET 0
        stack.push(local0);
        // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":47}
        stack.push(new DataView(memory0.buffer, 47 + stack.pop(), 1).getUint8(0));
        // opcode: 65 I_I32_CONST 4
        stack.push(4);
        // opcode: 73 I_I32_LT_U
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":0},{"opCode":65,
        if_4: if (stack.pop() !== 0) {
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 58 I_I32_STORE_8 {"align":0,"offset":48}
            {
                const x = stack.pop();
                memory0[48 + stack.pop()] = x;
            }
            // opcode: 11 I_END
        }
        // opcode: 11 I_END
    }
    function func7(local0) {
        const stack = [];
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
        // opcode: 65 I_I32_CONST 4096
        stack.push(4096);
        // opcode: 65 I_I32_CONST 0
        stack.push(0);
        // opcode: 65 I_I32_CONST 32768
        stack.push(32768);
        // opcode: 252 undefined [11,0]
        {
            const n = stack.pop();
            const value = stack.pop();
            const dest = stack.pop();
            memory0.fill(value, dest, dest + n);
        }
        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":35,"data":6},{"opCode":35,"dat
        loop_0: while (true) {
            // opcode: 35 I_GLOBAL_GET 6
            stack.push(global6);
            // opcode: 35 I_GLOBAL_GET 7
            stack.push(global7);
            // opcode: 107 I_I32_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 16 I_CALL 3
            {
                const args = stack.slice(-2);
                stack.pop();
                stack.pop();
                stack.push(func3(...args));
            }
            // opcode: 33 I_LOCAL_SET 2
            local2 = stack.pop();
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 33 I_LOCAL_SET 3
            local3 = stack.pop();
            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":1},{"opCode":34,"dat
            loop_1: while (true) {
                // opcode: 32 I_LOCAL_GET 1
                stack.push(local1);
                // opcode: 34 I_LOCAL_TEE 5
                local5 = stack[stack.length - 1];
                // opcode: 32 I_LOCAL_GET 2
                stack.push(local2);
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 33 I_LOCAL_SET 7
                local7 = stack.pop();
                // opcode: 65 I_I32_CONST 629
                stack.push(629);
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 65 I_I32_CONST 52
                stack.push(52);
                // opcode: 108 I_I32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 34 I_LOCAL_TEE 4
                local4 = stack[stack.length - 1];
                // opcode: 42 I_F32_LOAD {"align":2,"offset":12}
                stack.push(new DataView(memory0.buffer, 12 + stack.pop(), 4).getFloat32(0, true));
                // opcode: 33 I_LOCAL_SET 10
                local10 = stack.pop();
                // opcode: 32 I_LOCAL_GET 4
                stack.push(local4);
                // opcode: 42 I_F32_LOAD {"align":2,"offset":16}
                stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 4).getFloat32(0, true));
                // opcode: 33 I_LOCAL_SET 12
                local12 = stack.pop();
                // opcode: 32 I_LOCAL_GET 4
                stack.push(local4);
                // opcode: 40 I_I32_LOAD {"align":2,"offset":0}
                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getInt32(0, true));
                // opcode: 34 I_LOCAL_TEE 8
                local8 = stack[stack.length - 1];
                // opcode: 42 I_F32_LOAD {"align":2,"offset":4}
                stack.push(new DataView(memory0.buffer, 4 + stack.pop(), 4).getFloat32(0, true));
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 42 I_F32_LOAD {"align":2,"offset":8}
                stack.push(new DataView(memory0.buffer, 8 + stack.pop(), 4).getFloat32(0, true));
                // opcode: 34 I_LOCAL_TEE 17
                local17 = stack[stack.length - 1];
                // opcode: 146 I_F32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 33 I_LOCAL_SET 18
                local18 = stack.pop();
                // opcode: 32 I_LOCAL_GET 4
                stack.push(local4);
                // opcode: 45 I_I32_LOAD_8_U {"align":0,"offset":35}
                stack.push(new DataView(memory0.buffer, 35 + stack.pop(), 1).getUint8(0));
                // opcode: 179 I_F32_CONVERT_I32_U
                // opcode: 67 I_F32_CONST 127
                stack.push(127);
                // opcode: 149 I_F32_DIV
                {
                    const x = stack.pop();
                    stack.push(stack.pop() / x);
                }
                // opcode: 34 I_LOCAL_TEE 16
                local16 = stack[stack.length - 1];
                // opcode: 32 I_LOCAL_GET 4
                stack.push(local4);
                // opcode: 42 I_F32_LOAD {"align":2,"offset":20}
                stack.push(new DataView(memory0.buffer, 20 + stack.pop(), 4).getFloat32(0, true));
                // opcode: 34 I_LOCAL_TEE 15
                local15 = stack[stack.length - 1];
                // opcode: 148 I_F32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 33 I_LOCAL_SET 14
                local14 = stack.pop();
                // opcode: 67 I_F32_CONST 1
                stack.push(1);
                // opcode: 32 I_LOCAL_GET 16
                stack.push(local16);
                // opcode: 147 I_F32_SUB
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                // opcode: 32 I_LOCAL_GET 15
                stack.push(local15);
                // opcode: 148 I_F32_MUL
                stack.push(stack.pop() * stack.pop());
                // opcode: 33 I_LOCAL_SET 13
                local13 = stack.pop();
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 40 I_I32_LOAD {"align":2,"offset":0}
                stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getInt32(0, true));
                // opcode: 33 I_LOCAL_SET 9
                local9 = stack.pop();
                // opcode: 32 I_LOCAL_GET 5
                stack.push(local5);
                // opcode: 32 I_LOCAL_GET 7
                stack.push(local7);
                // opcode: 73 I_I32_LT_U
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                // opcode: 32 I_LOCAL_GET 8
                stack.push(local8);
                // opcode: 69 I_I32_EQZ
                stack.push(stack.pop() === 0 ? 1 : 0);
                // opcode: 69 I_I32_EQZ
                stack.push(stack.pop() === 0 ? 1 : 0);
                // opcode: 113 I_I32_AND
                stack.push(stack.pop() & stack.pop());
                // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":3,"data":{"blockType":64,"
                if_2: if (stack.pop() !== 0) {
                    // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":10},{"opCode":32,"da
                    loop_3: while (true) {
                        // opcode: 32 I_LOCAL_GET 10
                        stack.push(local10);
                        // opcode: 32 I_LOCAL_GET 18
                        stack.push(local18);
                        // opcode: 96 I_F32_GE
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() >= x ? 1 : 0);
                        }
                        // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":17},{"opCode":67
                        if_4: if (stack.pop() !== 0) {
                            // opcode: 32 I_LOCAL_GET 17
                            stack.push(local17);
                            // opcode: 67 I_F32_CONST 1
                            stack.push(1);
                            // opcode: 95 I_F32_LE
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() <= x ? 1 : 0);
                            }
                            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":32,"data":18},{"opCode":33
                            if_5: if (stack.pop() !== 0) {
                                // opcode: 32 I_LOCAL_GET 18
                                stack.push(local18);
                                // opcode: 33 I_LOCAL_SET 10
                                local10 = stack.pop();
                                // opcode: 12 I_BR 3
                                break if_2;
                                // opcode: 11 I_END
                            }
                            // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":10},{"opCode":32,"da
                            loop_6: while (true) {
                                // opcode: 32 I_LOCAL_GET 10
                                stack.push(local10);
                                // opcode: 32 I_LOCAL_GET 17
                                stack.push(local17);
                                // opcode: 147 I_F32_SUB
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                // opcode: 34 I_LOCAL_TEE 10
                                local10 = stack[stack.length - 1];
                                // opcode: 32 I_LOCAL_GET 18
                                stack.push(local18);
                                // opcode: 96 I_F32_GE
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() >= x ? 1 : 0);
                                }
                                // opcode: 13 I_BR_IF 0
                                if (stack.pop() !== 0) { continue loop_6; }
                                // opcode: 11 I_END
                                break loop_6;
                            }
                            // opcode: 11 I_END
                        }
                        // opcode: 32 I_LOCAL_GET 10
                        stack.push(local10);
                        // opcode: 32 I_LOCAL_GET 7
                        stack.push(local7);
                        // opcode: 32 I_LOCAL_GET 5
                        stack.push(local5);
                        // opcode: 107 I_I32_SUB
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() - x);
                        }
                        // opcode: 179 I_F32_CONVERT_I32_U
                        // opcode: 32 I_LOCAL_GET 12
                        stack.push(local12);
                        // opcode: 148 I_F32_MUL
                        stack.push(stack.pop() * stack.pop());
                        // opcode: 146 I_F32_ADD
                        stack.push(stack.pop() + stack.pop());
                        // opcode: 32 I_LOCAL_GET 18
                        stack.push(local18);
                        // opcode: 150 I_F32_MIN
                        {
                            const x2 = stack.pop();
                            const x1 = stack.pop();
                            stack.push(x1 < x2 ? x1 : x2);
                        }
                        // opcode: 33 I_LOCAL_SET 11
                        local11 = stack.pop();
                        // opcode: 3 I_LOOP {"blockType":64,"body":[{"opCode":32,"data":5},{"opCode":32,"dat
                        loop_7: while (true) {
                            // opcode: 32 I_LOCAL_GET 5
                            stack.push(local5);
                            // opcode: 32 I_LOCAL_GET 7
                            stack.push(local7);
                            // opcode: 79 I_I32_GE_U
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >= x ? 1 : 0);
                            }
                            // opcode: 13 I_BR_IF 2
                            if (stack.pop() !== 0) { break if_2; }
                            // opcode: 32 I_LOCAL_GET 5
                            stack.push(local5);
                            // opcode: 65 I_I32_CONST 1
                            stack.push(1);
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 34 I_LOCAL_TEE 5
                            local5 = stack[stack.length - 1];
                            // opcode: 65 I_I32_CONST 2
                            stack.push(2);
                            // opcode: 116 I_I32_SHL
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            // opcode: 34 I_LOCAL_TEE 6
                            local6 = stack[stack.length - 1];
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 42 I_F32_LOAD {"align":2,"offset":4092}
                            stack.push(new DataView(memory0.buffer, 4092 + stack.pop(), 4).getFloat32(0, true));
                            // opcode: 32 I_LOCAL_GET 14
                            stack.push(local14);
                            // opcode: 32 I_LOCAL_GET 9
                            stack.push(local9);
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 169 I_I32_TRUNC_F32_U
                            stack.push(Math.trunc(stack.pop()));
                            // opcode: 106 I_I32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 44 I_I32_LOAD_8_S {"align":0,"offset":0}
                            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getInt8(0));
                            // opcode: 178 I_F32_CONVERT_I32_S
                            // opcode: 67 I_F32_CONST 128
                            stack.push(128);
                            // opcode: 149 I_F32_DIV
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() / x);
                            }
                            // opcode: 34 I_LOCAL_TEE 15
                            local15 = stack[stack.length - 1];
                            // opcode: 148 I_F32_MUL
                            stack.push(stack.pop() * stack.pop());
                            // opcode: 146 I_F32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 56 I_F32_STORE {"align":2,"offset":4092}
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 4092 + stack.pop(), 4).setFloat32(0, x, true);
                            }
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 32 I_LOCAL_GET 6
                            stack.push(local6);
                            // opcode: 42 I_F32_LOAD {"align":2,"offset":20476}
                            stack.push(new DataView(memory0.buffer, 20476 + stack.pop(), 4).getFloat32(0, true));
                            // opcode: 32 I_LOCAL_GET 13
                            stack.push(local13);
                            // opcode: 32 I_LOCAL_GET 15
                            stack.push(local15);
                            // opcode: 148 I_F32_MUL
                            stack.push(stack.pop() * stack.pop());
                            // opcode: 146 I_F32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 56 I_F32_STORE {"align":2,"offset":20476}
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 20476 + stack.pop(), 4).setFloat32(0, x, true);
                            }
                            // opcode: 32 I_LOCAL_GET 10
                            stack.push(local10);
                            // opcode: 32 I_LOCAL_GET 12
                            stack.push(local12);
                            // opcode: 146 I_F32_ADD
                            stack.push(stack.pop() + stack.pop());
                            // opcode: 34 I_LOCAL_TEE 10
                            local10 = stack[stack.length - 1];
                            // opcode: 32 I_LOCAL_GET 11
                            stack.push(local11);
                            // opcode: 93 I_F32_LT
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() < x ? 1 : 0);
                            }
                            // opcode: 13 I_BR_IF 0
                            if (stack.pop() !== 0) { continue loop_7; }
                            // opcode: 11 I_END
                            break loop_7;
                        }
                        // opcode: 32 I_LOCAL_GET 5
                        stack.push(local5);
                        // opcode: 32 I_LOCAL_GET 7
                        stack.push(local7);
                        // opcode: 73 I_I32_LT_U
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        // opcode: 13 I_BR_IF 0
                        if (stack.pop() !== 0) { continue loop_3; }
                        // opcode: 11 I_END
                        break loop_3;
                    }
                    // opcode: 11 I_END
                }
                // opcode: 32 I_LOCAL_GET 4
                stack.push(local4);
                // opcode: 32 I_LOCAL_GET 10
                stack.push(local10);
                // opcode: 56 I_F32_STORE {"align":2,"offset":12}
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 12 + stack.pop(), 4).setFloat32(0, x, true);
                }
                // opcode: 32 I_LOCAL_GET 3
                stack.push(local3);
                // opcode: 65 I_I32_CONST 1
                stack.push(1);
                // opcode: 106 I_I32_ADD
                stack.push(stack.pop() + stack.pop());
                // opcode: 34 I_LOCAL_TEE 3
                local3 = stack[stack.length - 1];
                // opcode: 35 I_GLOBAL_GET 2
                stack.push(global2);
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
            // opcode: 35 I_GLOBAL_GET 7
            stack.push(global7);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 36 I_GLOBAL_SET 7
            global7 = stack.pop();
            // opcode: 35 I_GLOBAL_GET 7
            stack.push(global7);
            // opcode: 35 I_GLOBAL_GET 6
            stack.push(global6);
            // opcode: 70 I_I32_EQ
            stack.push(stack.pop() === stack.pop() ? 1 : 0);
            // opcode: 4 I_IF {"blockType":64,"trueBody":[{"opCode":16,"data":5},{"opCode":65,
            if_8: if (stack.pop() !== 0) {
                // opcode: 16 I_CALL 5
                func5();
                // opcode: 65 I_I32_CONST 0
                stack.push(0);
                // opcode: 36 I_GLOBAL_SET 7
                global7 = stack.pop();
                // opcode: 11 I_END
            }
            // opcode: 32 I_LOCAL_GET 1
            stack.push(local1);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 106 I_I32_ADD
            stack.push(stack.pop() + stack.pop());
            // opcode: 33 I_LOCAL_SET 1
            local1 = stack.pop();
            // opcode: 32 I_LOCAL_GET 0
            stack.push(local0);
            // opcode: 32 I_LOCAL_GET 2
            stack.push(local2);
            // opcode: 107 I_I32_SUB
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            // opcode: 34 I_LOCAL_TEE 0
            local0 = stack[stack.length - 1];
            // opcode: 65 I_I32_CONST 0
            stack.push(0);
            // opcode: 74 I_I32_GT_S
            {
                const x = stack.pop();
                stack.push(stack.pop() > x ? 1 : 0);
            }
            // opcode: 13 I_BR_IF 0
            if (stack.pop() !== 0) { continue loop_0; }
            // opcode: 11 I_END
            break loop_0;
        }
        // opcode: 11 I_END
    }
    const wasmExports = {
        "run": func7,
    };
    func4();
    return { exports: wasmExports };
})