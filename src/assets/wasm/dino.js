(function (import_object) {
    if (!import_object['Math'] || !import_object['Math']['random']) {
        throw new Error('failed to find the import in the import object: Math random');
    }
    const func0 = import_object['Math']['random'];
    const memory0 = new Uint8Array(2 * 65536);
    const global0 = 0;
    const global1 = 50;
    let global2 = 0;
    let global3 = 0;
    let global4 = 0;
    let global5 = 0;
    let global6 = -0.5;
    memory0.set([7,0,0,134,66,0,0,0,0,7,0,0,134,66,0,0,128,66,7,0,0,134,66,0,0,0,67,7,0,0,134,66,0,0,64,67,7,0,0,134,66,0,0,128,67,7,0,0,134,66,0,0,160,67,6,0,0,32,66,0,0,0,0,6,0,0,32,66,0,0,0,67,6,0,0,32,66,0,0,128,67,6,0,0,32,66,0,0,192,67,0,0,18,75,46,0,4,0,0,21,75,54,0,4,0,0,24,75,54,0,4,0,0,27,75,54,0,4,0,0,30,75,46,0,4,0,3,39,75,25,25,5,1,0,33,30,15,25,1,2,0,36,0,67,0,4,3,0,3,0,0,0,0,3,1,6,0,0,0,0,3,2,12,0,0,0,0,3,0,0,0,0,0,0,0,6,6,1,7,1,0,0,0,0,0,0,0,0,9,9,9,9,0,0,3,3,0,0,0,0,0,3,0,3,0,3,0,3,0,0,3,3,0,0,0,0,184,1,0,112,3,0,40,5,3,224,6,3,76,8,6,184,9,9,10,11,12,96,12,15,88,14,18,250,14,21,10,19,24,218,19,27,26,21,30,92,22,20,22,171,28,13,171,13,26,172,19,18,172,28,18,172,9,18,172,40,26,172,26,8,37,64,5,171,23,14,172,23,16,172,3,5,172,50,8,172,145,197,149,41,149,136,40,149,41,13,24,114,40,129,101,113,102,66,74,35,25,65,110,126,156,171,201,231,19,226,50,225,65,225,50,242,64,184,170,18,7,60,8,234,133,227,135,12,203,195,196,3,201,67,2,97,72,17,121,145,120,160,120,32,193,120,24,140,161,148,135,143,139,7,150,135,157,7,165,7,82,150,67,155,120,152,144,25,121,16,9,121,216,212,33,32,64,21,98,100,66,30,196,183,40,232,100,161,32,145,144,144,144,10,11,130,166,240,177,131,50,5,64,96,232,156,160,220,220,216,72,132,196,68,208,132,132,196,196,136,2,33,160,80,96,42,22,20,38,21,20,85,124,37,117,99,67,208,8,78,12,8,128,209,48,32,9,70,99,16,50,96,68,65,66,66,224,11,0,4,21,48,199,193,85,65,81,34,49,33,210,36,49,33,68,82,100,33,36,54,133,36,54,87,37,54,55,103,168,0,4,134,65,80,16,32,7,140,10,163,18,33,42,54,54,41,15,42,74,25,77,73,56,108,88,44,112,130,146,112,66,74,209,56,84,12,137,144,227,48,144,18,199,135,16,18,230,104,20,106,66,208,145,40,12,201,156,131,33,32,115,40,24,33,33,33,67,34,193,144,5,1,99,197,161,40,28,89,153,10,65,72,178,98,40,8,56,129,8,195,66,140,40,9,135,196,16,161,212,219,3,73,197,131,196,201,139,133,12,146,75,197,67,5,197,131,73,196,60,8,16,129,76,32,24,21,15,27,15,31,42,31,69,113,132,35,227,33,229,193,230,161,232,33,68,200,71,138,43,76,45,14,223,213,31,2,153,123,243,47,229,161,230,129,234,65,236,33,64,9,224,122,46,107,211,3,205,67,201,131,201,131,133,83,72,72,152,132,132,68,152,148,152,144,84,72,144,132,148,140,160,80,28,200,32,146,138,10,12,146,144,8,154,25,17,17,154,17,9,9,10,10,3,29,4,21,18,131,224,36,103,32,96,8,13,15,135,144,145,160,18,25,6,18,36,58,0,128,6,130,196,132,134,2,64,34,0,130,3,131,36,36,42,100,36,16,179,56,144,148,140,144,239,209,144,160,25,138,161,144,16,0,0,0], 40);
    memory0.set([9,0,0,72,66,0,0,176,65,1,0,0,92,66,0,0,150,67,1,0,0,92,66,0,0,22,68,1,0,0,92,66,0,0,97,68,255], 20443);
    function func1(local0, local1, local2) {
        const stack = [];
        loop_0: while (true) {
            stack.push(local0);
            stack.push(local1);
            stack.push(memory0[0 + stack.pop()]);
            {
                const x = stack.pop();
                memory0[0 + stack.pop()] = x;
            }
            stack.push(local1);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local1 = stack.pop();
            stack.push(local0);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local0 = stack[stack.length - 1];
            stack.push(local2);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
    }
    function func2() {
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
        stack.push(7);
        local2 = stack.pop();
        stack.push(827);
        local7 = stack.pop();
        loop_0: while (true) {
            stack.push(local1);
            stack.push(16);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if_1: if (stack.pop() !== 0) {
                stack.push(local0);
                stack.push(local6);
                stack.push(new DataView(memory0.buffer, 336 + stack.pop(), 2).getUint16(0, true));
                stack.push(local1);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                stack.push(stack.pop() | stack.pop());
                local0 = stack.pop();
                stack.push(local1);
                stack.push(16);
                stack.push(stack.pop() + stack.pop());
                local1 = stack.pop();
                stack.push(local6);
                stack.push(2);
                stack.push(stack.pop() + stack.pop());
                local6 = stack.pop();
            }
            stack.push(local0);
            stack.push(1);
            stack.push(local2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(1);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            stack.push(stack.pop() & stack.pop());
            local3 = stack.pop();
            stack.push(local0);
            stack.push(local2);
            {
                const x = stack.pop();
                stack.push(stack.pop() >>> x);
            }
            local0 = stack.pop();
            stack.push(local1);
            stack.push(local2);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local1 = stack.pop();
            block_2: {
                block_3: {
                    block_4: {
                        block_5: {
                            block_6: {
                                stack.push(local9);
                                {
                                    const target_idx = stack.pop();
                                    if(target_idx === 0) { break block_6; }
                                    else if(target_idx === 1) { break block_5; }
                                    else if(target_idx === 2) { break block_2; }
                                    else { break block_3; }
                                }
                            }
                            stack.push(local3);
                            local4 = stack[stack.length - 1];
                            stack.push(stack.pop() === 0 ? 1 : 0);
                            if (stack.pop() !== 0) { break block_4; }
                            stack.push(1);
                            local9 = stack.pop();
                            stack.push(4);
                            local2 = stack.pop();
                            continue loop_0;
                        }
                        stack.push(local7);
                        stack.push(local3);
                        {
                            const x = stack.pop();
                            memory0[0 + stack.pop()] = x;
                        }
                        stack.push(local7);
                        stack.push(1);
                        stack.push(stack.pop() + stack.pop());
                        local7 = stack.pop();
                        stack.push(local4);
                        stack.push(1);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() - x);
                        }
                        local4 = stack[stack.length - 1];
                        if (stack.pop() !== 0) { continue loop_0; }
                    }
                    stack.push(2);
                    local9 = stack.pop();
                    stack.push(7);
                    local2 = stack.pop();
                    continue loop_0;
                }
                stack.push(local7);
                stack.push(local7);
                stack.push(local5);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                stack.push(local7);
                stack.push(local3);
                stack.push(stack.pop() + stack.pop());
                local7 = stack[stack.length - 1];
                {
                    const args = stack.slice(-3);
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    func1(...args);
                }
                stack.push(0);
                local9 = stack.pop();
                continue loop_0;
            }
            stack.push(local3);
            local5 = stack.pop();
            stack.push(3);
            local9 = stack.pop();
            stack.push(local6);
            stack.push(494);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
        loop_7: while (true) {
            stack.push(local6);
            stack.push(memory0[333 + stack.pop()]);
            local10 = stack[stack.length - 1];
            if_8: if (stack.pop() !== 0) {
                stack.push(local7);
                stack.push(local11);
                {
                    const x = stack.pop();
                    memory0[0 + stack.pop()] = x;
                }
                stack.push(local7);
                stack.push(1);
                stack.push(stack.pop() + stack.pop());
                stack.push(local7);
                stack.push(local7);
                stack.push(local10);
                stack.push(stack.pop() + stack.pop());
                local7 = stack[stack.length - 1];
                {
                    const args = stack.slice(-3);
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    func1(...args);
                }
            }
            stack.push(local11);
            stack.push(stack.pop() === 0 ? 1 : 0);
            local11 = stack.pop();
            stack.push(local6);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local6 = stack[stack.length - 1];
            stack.push(1984);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if (stack.pop() !== 0) { continue loop_7; }
            break loop_7;
        }
    }
    function func3(local0, local1, local2, local3) {
        const stack = [];
        let local4 = 0;
        let local5 = 0;
        let local6 = 0;
        let local7 = 0;
        let local8 = 0;
        let local9 = 0;
        let local10 = 0;
        let local11 = 0;
        stack.push(local2);
        stack.push(memory0[297 + stack.pop()]);
        local4 = stack[stack.length - 1];
        local9 = stack.pop();
        stack.push(local2);
        stack.push(memory0[298 + stack.pop()]);
        local5 = stack.pop();
        stack.push(local2);
        stack.push(memory0[299 + stack.pop()]);
        stack.push(24);
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        local6 = stack.pop();
        stack.push(local0);
        stack.push(0);
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        if_0: if (stack.pop() !== 0) {
            stack.push(local4);
            stack.push(local0);
            stack.push(stack.pop() + stack.pop());
            local4 = stack.pop();
            stack.push(local3);
            stack.push(local0);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local3 = stack.pop();
            stack.push(0);
            local0 = stack.pop();
        } else {
            stack.push(local0);
            stack.push(local4);
            stack.push(stack.pop() + stack.pop());
            stack.push(300);
            {
                const x = stack.pop();
                stack.push(stack.pop() > x ? 1 : 0);
            }
            if_1: if (stack.pop() !== 0) {
                stack.push(300);
                stack.push(local0);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                local4 = stack.pop();
            }
        }
        stack.push(local4);
        stack.push(0);
        {
            const x = stack.pop();
            stack.push(stack.pop() > x ? 1 : 0);
        }
        if_2: if (stack.pop() !== 0) {
            stack.push(local1);
            stack.push(300);
            stack.push(stack.pop() * stack.pop());
            stack.push(local0);
            stack.push(stack.pop() + stack.pop());
            local7 = stack.pop();
            loop_3: while (true) {
                stack.push(0);
                local10 = stack.pop();
                loop_4: while (true) {
                    stack.push(local3);
                    stack.push(local10);
                    stack.push(stack.pop() + stack.pop());
                    stack.push(memory0[2317 + stack.pop()]);
                    if_5: if (stack.pop() !== 0) {
                        stack.push(local11);
                        stack.push(local7);
                        stack.push(local10);
                        stack.push(stack.pop() + stack.pop());
                        stack.push(2);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() << x);
                        }
                        local8 = stack[stack.length - 1];
                        stack.push(memory0[20483 + stack.pop()]);
                        stack.push(172);
                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                        stack.push(stack.pop() | stack.pop());
                        local11 = stack.pop();
                        stack.push(local8);
                        stack.push(local6);
                        {
                            const x = stack.pop();
                            new DataView(memory0.buffer, 20480 + stack.pop(), 4).setInt32(0, x, true);
                        }
                    }
                    stack.push(local10);
                    stack.push(1);
                    stack.push(stack.pop() + stack.pop());
                    local10 = stack[stack.length - 1];
                    stack.push(local4);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() < x ? 1 : 0);
                    }
                    if (stack.pop() !== 0) { continue loop_4; }
                    break loop_4;
                }
                stack.push(local7);
                stack.push(300);
                stack.push(stack.pop() + stack.pop());
                local7 = stack.pop();
                stack.push(local3);
                stack.push(local9);
                stack.push(stack.pop() + stack.pop());
                local3 = stack.pop();
                stack.push(local5);
                stack.push(1);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                local5 = stack[stack.length - 1];
                if (stack.pop() !== 0) { continue loop_3; }
                break loop_3;
            }
        }
        stack.push(local11);
        return stack[0];
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
        let local9 = 0;
        let local10 = 0;
        let local11 = 0;
        stack.push(20480);
        stack.push(20479);
        stack.push(110480);
        {
            const args = stack.slice(-3);
            stack.pop();
            stack.pop();
            stack.pop();
            func1(...args);
        }
        stack.push(global2);
        stack.push(1);
        stack.push(stack.pop() + stack.pop());
        global2 = stack.pop();
        stack.push(global6);
        stack.push(0.001953125);
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        stack.push(-1);
        {
            const x2 = stack.pop();
            const x1 = stack.pop();
            stack.push(x1 > x2 ? x1 : x2);
        }
        global6 = stack.pop();
        stack.push(0);
        stack.push(memory0[0 + stack.pop()]);
        local0 = stack.pop();
        stack.push(5);
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getFloat32(0, true));
        local11 = stack.pop();
        block_0: {
            block_1: {
                block_2: {
                    block_3: {
                        block_4: {
                            block_5: {
                                block_6: {
                                    stack.push(global4);
                                    {
                                        const target_idx = stack.pop();
                                        if(target_idx === 0) { break block_5; }
                                        else if(target_idx === 1) { break block_4; }
                                        else if(target_idx === 2) { break block_3; }
                                        else if(target_idx === 3) { break block_2; }
                                        else { break block_6; }
                                    }
                                }
                                stack.push(11);
                                local1 = stack.pop();
                                stack.push(global0);
                                global6 = stack.pop();
                                stack.push(local0);
                                stack.push(stack.pop() === 0 ? 1 : 0);
                                stack.push(global2);
                                stack.push(global3);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                stack.push(20);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() <= x ? 1 : 0);
                                }
                                stack.push(stack.pop() | stack.pop());
                                if (stack.pop() !== 0) { break block_0; }
                                stack.push(0);
                                global3 = stack.pop();
                                stack.push(0);
                                global2 = stack.pop();
                                stack.push(global0);
                                global5 = stack.pop();
                                stack.push(-0.5);
                                global6 = stack.pop();
                            }
                            stack.push(9);
                            local1 = stack.pop();
                            stack.push(global1);
                            local11 = stack.pop();
                            stack.push(4);
                            stack.push(20443);
                            stack.push(40);
                            {
                                const args = stack.slice(-3);
                                stack.pop();
                                stack.pop();
                                stack.pop();
                                func1(...args);
                            }
                            stack.push(1);
                            global4 = stack.pop();
                        }
                        stack.push(local0);
                        stack.push(2);
                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                        stack.push(9);
                        stack.push(stack.pop() + stack.pop());
                        local1 = stack.pop();
                        stack.push(local0);
                        stack.push(1);
                        stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                        if (stack.pop() !== 0) { break block_1; }
                        stack.push(2);
                        global4 = stack.pop();
                        stack.push(-6);
                        global5 = stack.pop();
                    }
                    stack.push(local0);
                    stack.push(1);
                    stack.push(stack.pop() === stack.pop() ? 1 : 0);
                    stack.push(local11);
                    stack.push(30);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >= x ? 1 : 0);
                    }
                    stack.push(stack.pop() | stack.pop());
                    stack.push(local11);
                    stack.push(10);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() >= x ? 1 : 0);
                    }
                    stack.push(stack.pop() & stack.pop());
                    if (stack.pop() !== 0) { break block_2; }
                    stack.push(3);
                    global4 = stack.pop();
                    stack.push(-1);
                    global5 = stack.pop();
                }
                stack.push(8);
                local1 = stack.pop();
                stack.push(local11);
                stack.push(global5);
                stack.push(stack.pop() + stack.pop());
                local11 = stack.pop();
                stack.push(global5);
                stack.push(0.4000000059604645);
                stack.push(stack.pop() + stack.pop());
                global5 = stack.pop();
                stack.push(local11);
                stack.push(global1);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() <= x ? 1 : 0);
                }
                if (stack.pop() !== 0) { break block_1; }
                stack.push(1);
                global4 = stack.pop();
                stack.push(global1);
                local11 = stack.pop();
                stack.push(global0);
                global5 = stack.pop();
            }
            stack.push(global3);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            global3 = stack.pop();
        }
        stack.push(4);
        stack.push(local1);
        {
            const x = stack.pop();
            memory0[0 + stack.pop()] = x;
        }
        stack.push(5);
        stack.push(local11);
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setFloat32(0, x, true);
        }
        stack.push(121);
        local2 = stack.pop();
        loop_7: while (true) {
            stack.push(local2);
            stack.push(new DataView(memory0.buffer, 5 + stack.pop(), 4).getFloat32(0, true));
            stack.push(Math.trunc(stack.pop()));
            stack.push(local2);
            stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 4).getFloat32(0, true));
            stack.push(Math.trunc(stack.pop()));
            stack.push(local2);
            stack.push(memory0[0 + stack.pop()]);
            stack.push(7);
            stack.push(stack.pop() * stack.pop());
            local6 = stack[stack.length - 1];
            stack.push(memory0[131 + stack.pop()]);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(global2);
            stack.push(15);
            stack.push(stack.pop() & stack.pop());
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() >>> x);
            }
            stack.push(stack.pop() + stack.pop());
            local4 = stack[stack.length - 1];
            stack.push(memory0[220 + stack.pop()]);
            stack.push(stack.pop() + stack.pop());
            stack.push(local6);
            stack.push(memory0[132 + stack.pop()]);
            stack.push(local4);
            stack.push(memory0[236 + stack.pop()]);
            stack.push(stack.pop() + stack.pop());
            local5 = stack[stack.length - 1];
            stack.push(memory0[252 + stack.pop()]);
            stack.push(local5);
            stack.push(new DataView(memory0.buffer, 253 + stack.pop(), 2).getUint16(0, true));
            {
                const args = stack.slice(-4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(func3(...args));
            }
            stack.push(local2);
            stack.push(4);
            stack.push(stack.pop() === stack.pop() ? 1 : 0);
            stack.push(stack.pop() & stack.pop());
            if_8: if (stack.pop() !== 0) {
                stack.push(4);
                global4 = stack.pop();
            }
            stack.push(local2);
            stack.push(new DataView(memory0.buffer, 5 + stack.pop(), 4).getFloat32(0, true));
            stack.push(local6);
            stack.push(memory0[136 + stack.pop()]);
            stack.push(global6);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            local10 = stack[stack.length - 1];
            stack.push(-64);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if_9: if (stack.pop() !== 0) {
                stack.push(local2);
                stack.push(func0());
                stack.push(local6);
                stack.push(memory0[130 + stack.pop()]);
                stack.push(1);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                local7 = stack[stack.length - 1];
                stack.push(memory0[215 + stack.pop()]);
                stack.push(stack.pop() * stack.pop());
                stack.push(Math.trunc(stack.pop()));
                stack.push(local7);
                stack.push(memory0[214 + stack.pop()]);
                stack.push(stack.pop() + stack.pop());
                local3 = stack[stack.length - 1];
                {
                    const x = stack.pop();
                    memory0[0 + stack.pop()] = x;
                }
                stack.push(local10);
                stack.push(384);
                stack.push(stack.pop() + stack.pop());
                stack.push(local3);
                stack.push(7);
                stack.push(stack.pop() * stack.pop());
                local6 = stack[stack.length - 1];
                stack.push(memory0[133 + stack.pop()]);
                stack.push(3);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                stack.push(stack.pop() + stack.pop());
                local10 = stack.pop();
                stack.push(local2);
                stack.push(local6);
                stack.push(memory0[134 + stack.pop()]);
                stack.push(func0());
                stack.push(local6);
                stack.push(memory0[135 + stack.pop()]);
                stack.push(stack.pop() * stack.pop());
                stack.push(stack.pop() + stack.pop());
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 1 + stack.pop(), 4).setFloat32(0, x, true);
                }
            }
            stack.push(local2);
            stack.push(local10);
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 5 + stack.pop(), 4).setFloat32(0, x, true);
            }
            stack.push(local2);
            stack.push(9);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local2 = stack[stack.length - 1];
            stack.push(0);
            {
                const x = stack.pop();
                stack.push(stack.pop() > x ? 1 : 0);
            }
            if (stack.pop() !== 0) { continue loop_7; }
            break loop_7;
        }
        stack.push(global3);
        local9 = stack.pop();
        stack.push(300);
        local8 = stack.pop();
        loop_10: while (true) {
            stack.push(local8);
            stack.push(4);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local8 = stack[stack.length - 1];
            stack.push(4);
            stack.push(33);
            stack.push(6092);
            stack.push(local9);
            stack.push(10);
            {
                const x = stack.pop();
                stack.push(stack.pop() % x);
            }
            stack.push(15);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            {
                const args = stack.slice(-4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(func3(...args));
            }
            stack.pop();
            stack.push(local9);
            stack.push(10);
            {
                const x = stack.pop();
                stack.push(Math.floor(stack.pop() / x));
            }
            local9 = stack[stack.length - 1];
            if (stack.pop() !== 0) { continue loop_10; }
            break loop_10;
        }
        stack.push(global4);
        stack.push(4);
        stack.push(stack.pop() === stack.pop() ? 1 : 0);
        if_11: if (stack.pop() !== 0) {
            stack.push(125);
            stack.push(33);
            stack.push(36);
            stack.push(6242);
            {
                const args = stack.slice(-4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(func3(...args));
            }
            stack.pop();
        }
    }
    const wasmExports = {
        "run": func4,
        "mem": memory0,
    };
    func2();
    return { exports: wasmExports };
})