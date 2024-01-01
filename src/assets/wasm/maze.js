(function (import_object) {
    if (!import_object['Math'] || !import_object['Math']['random']) {
        throw new Error('failed to find the import in the import object: Math random');
    }
    const func0 = import_object['Math']['random'];
    if (!import_object['Math'] || !import_object['Math']['sin']) {
        throw new Error('failed to find the import in the import object: Math sin');
    }
    const func1 = import_object['Math']['sin'];
    if (!import_object['env'] || !import_object['env']['t']) {
        throw new Error('failed to find the import in the import object: env t');
    }
    const func2 = import_object['env']['t'];
    let global0 = 0;
    let global1 = 90;
    let global2 = 3548;
    let global3 = 21;
    let global4 = 21;
    let global5 = 0.7853981852531433;
    let global6 = 0;
    let global7 = 0;
    const global8 = 120;
    const global9 = 0;
    const global10 = 0.5;
    const global11 = 1;
    let global12 = 0;
    let global13 = 0;
    const memory0 = new Uint8Array(5 * 65536);
    memory0.set([8,170,4,0,255,2,3,0,3,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,3,85,4,255,255,242,3,255,8,170,255,2,7,0,255,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,82,6,85,254,213,242,7,255,254,0,86,5,85,253,2,128,86,5,85,254,10,160,6,85,254,41,104,6,85,254,165,90,6,85,255,149,59,85,254,149,90,6,85,254,165,104,6,85,254,41,160,6,85,253,10,128,86,5,85,253,2,0,86,5,85,253,10,128,86,5,85,254,41,160,6,85,254,165,104,6,85,254,149,90,59,85,255,90,6,85,254,149,104,6,85,254,165,160,6,85,253,41,128,86,5,85,255,10,0,4,8,12,16,20,24,28,32,32,36,36,40,44,44,44,48,52,56,60,4,0,8,12,20,16,24,28,0,0,24,0,24,0,0,0,24,0,0,22,22,0,4,0,24,22,0,2,2,0,16,0,24,24,254,0,2,0,16,0,22,24,234,0,22,0,0,0,0,24,0,232,24,0,4,0], 3216);
    memory0.set([243,95,95,255,159,37,37,255,81,10,10,255,121,14,14,255,194,76,76,255,127,29,29,255,81,10,10,255,96,11,11,255,203,200,184,255,155,151,129,255,129,149,175,255,181,181,181,255,16,255,16,255,16,239,16,255,16,223,16,255,16,207,16,255], 4528);
    function func3() {
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
        stack.push(Infinity);
        local1 = stack.pop();
        stack.push(3500);
        local0 = stack.pop();
        loop_0: while (true) {
            stack.push(global3);
            stack.push(local0);
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getInt8(0));
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local2 = stack[stack.length - 1];
            stack.push(global7);
            stack.push(-stack.pop());
            stack.push(stack.pop() * stack.pop());
            stack.push(global4);
            stack.push(local0);
            stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getInt8(0));
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local3 = stack[stack.length - 1];
            stack.push(global6);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            stack.push(local0);
            stack.push(new DataView(memory0.buffer, 2 + stack.pop(), 1).getInt8(0));
            local4 = stack[stack.length - 1];
            stack.push(global7);
            stack.push(-stack.pop());
            stack.push(stack.pop() * stack.pop());
            stack.push(local0);
            stack.push(new DataView(memory0.buffer, 3 + stack.pop(), 1).getInt8(0));
            local5 = stack[stack.length - 1];
            stack.push(global6);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            local6 = stack[stack.length - 1];
            {
                const x = stack.pop();
                stack.push(stack.pop() / x);
            }
            local8 = stack[stack.length - 1];
            stack.push(global9);
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            stack.push(local8);
            stack.push(global11);
            {
                const x = stack.pop();
                stack.push(stack.pop() <= x ? 1 : 0);
            }
            stack.push(stack.pop() & stack.pop());
            stack.push(local4);
            stack.push(local3);
            stack.push(stack.pop() * stack.pop());
            stack.push(local2);
            stack.push(local5);
            stack.push(stack.pop() * stack.pop());
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            stack.push(local6);
            {
                const x = stack.pop();
                stack.push(stack.pop() / x);
            }
            local7 = stack[stack.length - 1];
            stack.push(global9);
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            stack.push(stack.pop() & stack.pop());
            stack.push(local7);
            stack.push(local1);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            stack.push(stack.pop() & stack.pop());
            if_1: if (stack.pop() !== 0) {
                stack.push(local7);
                local1 = stack.pop();
                stack.push(local8);
                stack.push(local0);
                stack.push(new DataView(memory0.buffer, 4 + stack.pop(), 1).getUint8(0));
                stack.push(stack.pop() * stack.pop());
                global12 = stack.pop();
                stack.push(local0);
                global13 = stack.pop();
            }
            stack.push(local0);
            stack.push(8);
            stack.push(stack.pop() + stack.pop());
            local0 = stack[stack.length - 1];
            stack.push(global2);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
        stack.push(local1);
        return stack[0];
    }
    function func4(local0) {
        const stack = [];
        stack.push(local0);
        stack.push(local0);
        stack.push(stack.pop() + stack.pop());
        local0 = stack[stack.length - 1];
        stack.push(local0);
        stack.push(Math.floor(stack.pop()));
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        stack.push(32);
        stack.push(stack.pop() * stack.pop());
        return stack[0];
    }
    function func5(local0, local1, local2, local3, local4) {
        const stack = [];
        stack.push(local2);
        stack.push(6);
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        stack.push(local1);
        stack.push(local0);
        stack.push(10);
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        stack.push(local4);
        stack.push(func4(stack.pop()));
        stack.push(Math.trunc(stack.pop()));
        stack.push(5);
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        stack.push(local3);
        stack.push(func4(stack.pop()));
        stack.push(Math.trunc(stack.pop()));
        stack.push(stack.pop() + stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(new DataView(memory0.buffer, 688 + stack.pop(), 1).getUint8(0));
        stack.push(stack.pop() + stack.pop());
        stack.push(new DataView(memory0.buffer, 3472 + stack.pop(), 1).getUint8(0));
        stack.push(stack.pop() + stack.pop());
        stack.push(new DataView(memory0.buffer, 4528 + stack.pop(), 4).getInt32(0, true));
        return stack[0];
    }
    function func6(local0, local1) {
        const stack = [];
        let local2 = 0;
        stack.push(local1);
        stack.push(local1);
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getFloat32(0, true));
        stack.push(local0);
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
        stack.push(local0);
        stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        stack.push(0.0078125);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(0.875);
        stack.push(stack.pop() * stack.pop());
        local2 = stack[stack.length - 1];
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setFloat32(0, x, true);
        }
        stack.push(local2);
        return stack[0];
    }
    function func7() {
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
        let local35 = 0;
        let local36 = 0;
        let local37 = 0;
        let local38 = 0;
        stack.push(global5);
        stack.push(func1(stack.pop()));
        local25 = stack[stack.length - 1];
        global6 = stack.pop();
        stack.push(global5);
        stack.push(1.5707963705062866);
        stack.push(stack.pop() + stack.pop());
        stack.push(func1(stack.pop()));
        local26 = stack[stack.length - 1];
        global7 = stack.pop();
        stack.push(global1);
        stack.push(1);
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        global1 = stack.pop();
        block_0: {
            block_1: {
                block_2: {
                    block_3: {
                        block_4: {
                            block_5: {
                                stack.push(global0);
                                {
                                    const target_idx = stack.pop();
                                    if(target_idx === 0) { break block_5; }
                                    else if(target_idx === 1) { break block_4; }
                                    else if(target_idx === 2) { break block_3; }
                                    else if(target_idx === 3) { break block_2; }
                                    else { break block_1; }
                                }
                            }
                            loop_6: while (true) {
                                stack.push(local14);
                                stack.push(2);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() << x);
                                }
                                stack.push(global8);
                                stack.push(local14);
                                stack.push(global11);
                                stack.push(stack.pop() + stack.pop());
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() / x);
                                }
                                local23 = stack[stack.length - 1];
                                {
                                    const x = stack.pop();
                                    new DataView(memory0.buffer, 2736 + stack.pop(), 4).setFloat32(0, x, true);
                                }
                                stack.push(local23);
                                stack.push(Math.sqrt(stack.pop()));
                                local23 = stack.pop();
                                loop_7: while (true) {
                                    stack.push(local0);
                                    stack.push(local0);
                                    stack.push(63);
                                    stack.push(stack.pop() & stack.pop());
                                    stack.push(new DataView(memory0.buffer, 4528 + stack.pop(), 1).getUint8(0));
                                    stack.push(local23);
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() / x);
                                    }
                                    stack.push(Math.trunc(stack.pop()));
                                    stack.push(255);
                                    stack.push(local0);
                                    stack.push(3);
                                    stack.push(stack.pop() & stack.pop());
                                    stack.push(3);
                                    stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                                    {
                                        const condition = stack.pop();
                                        const x2 = stack.pop();
                                        const x1 = stack.pop();
                                        stack.push(condition !== 0 ? x1 : x2)
                                    }
                                    {
                                        const x = stack.pop();
                                        memory0[4592 + stack.pop()] = x;
                                    }
                                    stack.push(local0);
                                    stack.push(1);
                                    stack.push(stack.pop() + stack.pop());
                                    local0 = stack[stack.length - 1];
                                    stack.push(63);
                                    stack.push(stack.pop() & stack.pop());
                                    if (stack.pop() !== 0) { continue loop_7; }
                                    break loop_7;
                                }
                                stack.push(local14);
                                stack.push(1);
                                stack.push(stack.pop() + stack.pop());
                                local14 = stack[stack.length - 1];
                                stack.push(120);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() < x ? 1 : 0);
                                }
                                if (stack.pop() !== 0) { continue loop_6; }
                                break loop_6;
                            }
                            stack.push(684);
                            local2 = stack.pop();
                            loop_8: while (true) {
                                stack.push(local1);
                                stack.push(new DataView(memory0.buffer, 3216 + stack.pop(), 1).getInt8(0));
                                local3 = stack[stack.length - 1];
                                stack.push(0);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() <= x ? 1 : 0);
                                }
                                local4 = stack[stack.length - 1];
                                if_9: if (stack.pop() !== 0) {
                                    stack.push(0);
                                    stack.push(local3);
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() - x);
                                    }
                                    local3 = stack.pop();
                                } else {
                                    stack.push(local1);
                                    stack.push(1);
                                    stack.push(stack.pop() + stack.pop());
                                    local1 = stack.pop();
                                }
                                loop_10: while (true) {
                                    stack.push(local2);
                                    stack.push(4);
                                    stack.push(stack.pop() + stack.pop());
                                    local2 = stack[stack.length - 1];
                                    stack.push(local1);
                                    stack.push(local4);
                                    stack.push(stack.pop() + stack.pop());
                                    local1 = stack[stack.length - 1];
                                    stack.push(new DataView(memory0.buffer, 3216 + stack.pop(), 1).getUint8(0));
                                    local5 = stack[stack.length - 1];
                                    stack.push(local5);
                                    stack.push(6);
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    stack.push(stack.pop() | stack.pop());
                                    stack.push(local5);
                                    stack.push(12);
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    stack.push(stack.pop() | stack.pop());
                                    stack.push(local5);
                                    stack.push(18);
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() << x);
                                    }
                                    stack.push(stack.pop() | stack.pop());
                                    stack.push(50529027);
                                    stack.push(stack.pop() & stack.pop());
                                    {
                                        const x = stack.pop();
                                        new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
                                    }
                                    stack.push(local3);
                                    stack.push(1);
                                    {
                                        const x = stack.pop();
                                        stack.push(stack.pop() - x);
                                    }
                                    local3 = stack[stack.length - 1];
                                    if (stack.pop() !== 0) { continue loop_10; }
                                    break loop_10;
                                }
                                stack.push(local1);
                                stack.push(1);
                                stack.push(stack.pop() + stack.pop());
                                local1 = stack[stack.length - 1];
                                stack.push(256);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() < x ? 1 : 0);
                                }
                                if (stack.pop() !== 0) { continue loop_8; }
                                break loop_8;
                            }
                            stack.push(1);
                            global0 = stack.pop();
                            break block_0;
                        }
                        stack.push(global1);
                        stack.push(stack.pop() === 0 ? 1 : 0);
                        if_11: if (stack.pop() !== 0) {
                            stack.push(4);
                            global0 = stack.pop();
                            stack.push(120);
                            global1 = stack.pop();
                        }
                        break block_0;
                    }
                    stack.push(4);
                    stack.push(0);
                    {
                        const x = stack.pop();
                        new DataView(memory0.buffer, 0 + stack.pop(), 8).setBigUint64(0, BigInt(x), true);
                    }
                    stack.push(201326848);
                    local6 = stack.pop();
                    stack.push(158);
                    local10 = stack.pop();
                    loop_12: while (true) {
                        stack.push(local6);
                        stack.push(255);
                        stack.push(stack.pop() & stack.pop());
                        stack.push(local6);
                        {
                            const x = stack.pop();
                            memory0[16 + stack.pop()] = x;
                        }
                        stack.push(local7);
                        stack.push(12);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() % x);
                        }
                        stack.push(11);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        if_13: if (stack.pop() !== 0) {
                            stack.push(local10);
                            stack.push(2);
                            stack.push(stack.pop() + stack.pop());
                            local10 = stack[stack.length - 1];
                            stack.push(local6);
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                            }
                        }
                        stack.push(local7);
                        stack.push(12);
                        {
                            const x = stack.pop();
                            stack.push(Math.floor(stack.pop() / x));
                        }
                        stack.push(11);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        if_14: if (stack.pop() !== 0) {
                            stack.push(local10);
                            stack.push(2);
                            stack.push(stack.pop() + stack.pop());
                            local10 = stack[stack.length - 1];
                            stack.push(local6);
                            stack.push(16);
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() >>> x);
                            }
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                            }
                        }
                        stack.push(local6);
                        stack.push(16843009);
                        stack.push(stack.pop() + stack.pop());
                        local6 = stack.pop();
                        stack.push(local7);
                        stack.push(1);
                        stack.push(stack.pop() + stack.pop());
                        local7 = stack[stack.length - 1];
                        stack.push(144);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        if (stack.pop() !== 0) { continue loop_12; }
                        break loop_12;
                    }
                    stack.push(264);
                    local12 = stack.pop();
                    loop_15: while (true) {
                        stack.push(func0());
                        stack.push(local12);
                        stack.push(stack.pop() * stack.pop());
                        stack.push(Math.trunc(stack.pop()));
                        stack.push(1);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() << x);
                        }
                        local10 = stack[stack.length - 1];
                        stack.push(new DataView(memory0.buffer, 160 + stack.pop(), 1).getUint8(0));
                        stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 1).getUint8(0));
                        local8 = stack[stack.length - 1];
                        stack.push(local10);
                        stack.push(new DataView(memory0.buffer, 161 + stack.pop(), 1).getUint8(0));
                        stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 1).getUint8(0));
                        local9 = stack[stack.length - 1];
                        stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                        if_16: if (stack.pop() !== 0) {
                            stack.push(local10);
                            stack.push(local12);
                            stack.push(1);
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() - x);
                            }
                            local12 = stack[stack.length - 1];
                            stack.push(1);
                            {
                                const x = stack.pop();
                                stack.push(stack.pop() << x);
                            }
                            stack.push(new DataView(memory0.buffer, 160 + stack.pop(), 2).getUint16(0, true));
                            {
                                const x = stack.pop();
                                new DataView(memory0.buffer, 160 + stack.pop(), 2).setInt16(0, x, true);
                            }
                            stack.push(144);
                            local7 = stack.pop();
                            loop_17: while (true) {
                                stack.push(local7);
                                stack.push(new DataView(memory0.buffer, 15 + stack.pop(), 1).getUint8(0));
                                stack.push(local9);
                                stack.push(stack.pop() === stack.pop() ? 1 : 0);
                                if_18: if (stack.pop() !== 0) {
                                    stack.push(local7);
                                    stack.push(local8);
                                    {
                                        const x = stack.pop();
                                        memory0[15 + stack.pop()] = x;
                                    }
                                }
                                stack.push(local7);
                                stack.push(1);
                                {
                                    const x = stack.pop();
                                    stack.push(stack.pop() - x);
                                }
                                local7 = stack[stack.length - 1];
                                if (stack.pop() !== 0) { continue loop_17; }
                                break loop_17;
                            }
                        }
                        stack.push(local12);
                        stack.push(121);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() > x ? 1 : 0);
                        }
                        if (stack.pop() !== 0) { continue loop_15; }
                        break loop_15;
                    }
                    stack.push(160);
                    local10 = stack.pop();
                    stack.push(3540);
                    local11 = stack.pop();
                    loop_19: while (true) {
                        stack.push(local11);
                        stack.push(8);
                        stack.push(stack.pop() + stack.pop());
                        local11 = stack[stack.length - 1];
                        stack.push(local10);
                        stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getUint8(0));
                        local7 = stack[stack.length - 1];
                        stack.push(12);
                        {
                            const x = stack.pop();
                            stack.push(Math.floor(stack.pop() / x));
                        }
                        stack.push(8);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() << x);
                        }
                        stack.push(local7);
                        stack.push(12);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() % x);
                        }
                        stack.push(stack.pop() | stack.pop());
                        stack.push(1);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() << x);
                        }
                        {
                            const x = stack.pop();
                            new DataView(memory0.buffer, 0 + stack.pop(), 2).setInt16(0, x, true);
                        }
                        stack.push(local11);
                        stack.push(103096123904);
                        stack.push(85916254210);
                        stack.push(local7);
                        stack.push(local10);
                        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getUint8(0));
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() - x);
                        }
                        stack.push(1);
                        stack.push(stack.pop() === stack.pop() ? 1 : 0);
                        {
                            const condition = stack.pop();
                            const x2 = stack.pop();
                            const x1 = stack.pop();
                            stack.push(condition !== 0 ? x1 : x2)
                        }
                        {
                            const x = stack.pop();
                            new DataView(memory0.buffer, 2 + stack.pop(), 8).setBigUint64(0, BigInt(x), true);
                        }
                        stack.push(local10);
                        stack.push(2);
                        stack.push(stack.pop() + stack.pop());
                        local10 = stack[stack.length - 1];
                        stack.push(402);
                        {
                            const x = stack.pop();
                            stack.push(stack.pop() < x ? 1 : 0);
                        }
                        if (stack.pop() !== 0) { continue loop_19; }
                        break loop_19;
                    }
                    stack.push(4516);
                    global2 = stack.pop();
                    stack.push(3);
                    global0 = stack.pop();
                    stack.push(1);
                    func2(stack.pop());
                    break block_0;
                }
                stack.push(global5);
                stack.push(0);
                stack.push(4);
                {
                    const args = stack.slice(-2);
                    stack.pop();
                    stack.pop();
                    stack.push(func6(...args));
                }
                stack.push(stack.pop() + stack.pop());
                global5 = stack.pop();
                stack.push(global5);
                stack.push(global5);
                stack.push(6.2831854820251465);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() / x);
                }
                stack.push(Math.trunc(stack.pop()));
                stack.push(6.2831854820251465);
                stack.push(stack.pop() * stack.pop());
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                global5 = stack.pop();
                stack.push(2);
                stack.push(8);
                {
                    const args = stack.slice(-2);
                    stack.pop();
                    stack.pop();
                    stack.push(func6(...args));
                }
                local28 = stack[stack.length - 1];
                stack.push(global9);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                if_20: if (stack.pop() !== 0) {
                    stack.push(local28);
                    stack.push(-stack.pop());
                    local28 = stack.pop();
                    stack.push(global6);
                    stack.push(-stack.pop());
                    global6 = stack.pop();
                    stack.push(global7);
                    stack.push(-stack.pop());
                    global7 = stack.pop();
                }
                stack.push(local28);
                stack.push(global9);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() > x ? 1 : 0);
                }
                if_21: if (stack.pop() !== 0) {
                    stack.push(global3);
                    stack.push(global6);
                    stack.push(func3());
                    stack.push(0.001953125);
                    stack.push(stack.pop() + stack.pop());
                    stack.push(local28);
                    {
                        const x2 = stack.pop();
                        const x1 = stack.pop();
                        stack.push(x1 < x2 ? x1 : x2);
                    }
                    local27 = stack[stack.length - 1];
                    stack.push(stack.pop() * stack.pop());
                    stack.push(stack.pop() + stack.pop());
                    global3 = stack.pop();
                    stack.push(global4);
                    stack.push(global7);
                    stack.push(local27);
                    stack.push(stack.pop() * stack.pop());
                    stack.push(stack.pop() + stack.pop());
                    global4 = stack.pop();
                    stack.push(global13);
                    stack.push(new DataView(memory0.buffer, 3 + stack.pop(), 1).getInt8(0));
                    stack.push(global13);
                    stack.push(new DataView(memory0.buffer, 4 + stack.pop(), 1).getUint8(0));
                    local31 = stack[stack.length - 1];
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() / x);
                    }
                    stack.push(-stack.pop());
                    local29 = stack[stack.length - 1];
                    stack.push(global3);
                    stack.push(global13);
                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 1).getInt8(0));
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    stack.push(stack.pop() * stack.pop());
                    stack.push(global13);
                    stack.push(new DataView(memory0.buffer, 2 + stack.pop(), 1).getInt8(0));
                    stack.push(local31);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() / x);
                    }
                    local30 = stack[stack.length - 1];
                    stack.push(global4);
                    stack.push(global13);
                    stack.push(new DataView(memory0.buffer, 1 + stack.pop(), 1).getInt8(0));
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    stack.push(stack.pop() * stack.pop());
                    stack.push(stack.pop() + stack.pop());
                    local32 = stack.pop();
                    stack.push(0.25);
                    stack.push(local32);
                    stack.push(Math.abs(stack.pop()));
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    local27 = stack[stack.length - 1];
                    stack.push(global9);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() > x ? 1 : 0);
                    }
                    if_22: if (stack.pop() !== 0) {
                        stack.push(global3);
                        stack.push(local29);
                        stack.push(local27);
                        stack.push(local32);
                        {
                            const x2 = stack.pop();
                            const x1 = stack.pop();
                            stack.push(((x1 >= 0 && x2 >= 0) || (x1 < 0 && x2 < 0)) ? x1 : -x1);
                        }
                        local27 = stack[stack.length - 1];
                        stack.push(stack.pop() * stack.pop());
                        stack.push(stack.pop() + stack.pop());
                        global3 = stack.pop();
                        stack.push(global4);
                        stack.push(local30);
                        stack.push(local27);
                        stack.push(stack.pop() * stack.pop());
                        stack.push(stack.pop() + stack.pop());
                        global4 = stack.pop();
                    }
                }
                stack.push(global3);
                stack.push(22);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() > x ? 1 : 0);
                }
                stack.push(global4);
                stack.push(22);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() > x ? 1 : 0);
                }
                stack.push(stack.pop() & stack.pop());
                if_23: if (stack.pop() !== 0) {
                    stack.push(0);
                    func2(stack.pop());
                    stack.push(4);
                    global0 = stack.pop();
                    stack.push(120);
                    global1 = stack.pop();
                    stack.push(3548);
                    global2 = stack.pop();
                }
                break block_0;
            }
            stack.push(global10);
            stack.push(global3);
            stack.push(global10);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            stack.push(global1);
            stack.push(global8);
            {
                const x = stack.pop();
                stack.push(stack.pop() / x);
            }
            local27 = stack[stack.length - 1];
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            global3 = stack.pop();
            stack.push(global10);
            stack.push(global4);
            stack.push(global10);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            stack.push(local27);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            global4 = stack.pop();
            stack.push(0.7853981852531433);
            stack.push(global5);
            stack.push(0.7853981852531433);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            stack.push(local27);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            global5 = stack.pop();
            stack.push(global1);
            stack.push(stack.pop() === 0 ? 1 : 0);
            if_24: if (stack.pop() !== 0) {
                stack.push(2);
                global0 = stack.pop();
                stack.push(15);
                global1 = stack.pop();
            }
        }
        loop_25: while (true) {
            stack.push(local25);
            stack.push(local13);
            stack.push(160);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            stack.push(160);
            {
                const x = stack.pop();
                stack.push(stack.pop() / x);
            }
            local24 = stack[stack.length - 1];
            stack.push(local26);
            stack.push(-stack.pop());
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            global6 = stack.pop();
            stack.push(local26);
            stack.push(local24);
            stack.push(local25);
            stack.push(stack.pop() * stack.pop());
            stack.push(stack.pop() + stack.pop());
            global7 = stack.pop();
            stack.push(global8);
            stack.push(func3());
            {
                const x = stack.pop();
                stack.push(stack.pop() / x);
            }
            local33 = stack[stack.length - 1];
            stack.push(Math.trunc(stack.pop()));
            local21 = stack[stack.length - 1];
            stack.push(120);
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            if_26: if (stack.pop() !== 0) {
                stack.push(120);
                local21 = stack.pop();
            }
            stack.push(164608);
            stack.push(local13);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(stack.pop() + stack.pop());
            local16 = stack.pop();
            stack.push(local21);
            local22 = stack.pop();
            stack.push(global12);
            local34 = stack.pop();
            stack.push(global10);
            stack.push(local33);
            {
                const x = stack.pop();
                stack.push(stack.pop() / x);
            }
            local37 = stack.pop();
            stack.push(global13);
            stack.push(new DataView(memory0.buffer, 5 + stack.pop(), 1).getUint8(0));
            local17 = stack[stack.length - 1];
            local19 = stack.pop();
            stack.push(global13);
            stack.push(new DataView(memory0.buffer, 6 + stack.pop(), 1).getUint8(0));
            local18 = stack[stack.length - 1];
            local20 = stack.pop();
            stack.push(0);
            local14 = stack.pop();
            loop_27: while (true) {
                stack.push(local14);
                stack.push(local21);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                if_28: if (stack.pop() !== 0) {
                    stack.push(global10);
                    stack.push(local14);
                    stack.push(local37);
                    stack.push(stack.pop() * stack.pop());
                    local38 = stack[stack.length - 1];
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    local35 = stack.pop();
                    stack.push(global10);
                    stack.push(local38);
                    stack.push(stack.pop() + stack.pop());
                    local36 = stack.pop();
                } else {
                    stack.push(global3);
                    stack.push(global6);
                    stack.push(local14);
                    stack.push(2);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() << x);
                    }
                    stack.push(new DataView(memory0.buffer, 2736 + stack.pop(), 4).getFloat32(0, true));
                    local27 = stack[stack.length - 1];
                    stack.push(stack.pop() * stack.pop());
                    stack.push(stack.pop() + stack.pop());
                    local34 = stack.pop();
                    stack.push(global4);
                    stack.push(global7);
                    stack.push(local27);
                    stack.push(stack.pop() * stack.pop());
                    stack.push(stack.pop() + stack.pop());
                    local35 = stack[stack.length - 1];
                    local36 = stack.pop();
                    stack.push(local14);
                    local22 = stack.pop();
                    stack.push(0);
                    local17 = stack.pop();
                    stack.push(8);
                    local18 = stack.pop();
                    stack.push(1);
                    local19 = stack.pop();
                    stack.push(12);
                    local20 = stack.pop();
                }
                stack.push(local16);
                stack.push(local14);
                stack.push(1280);
                stack.push(stack.pop() * stack.pop());
                local15 = stack[stack.length - 1];
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                stack.push(local17);
                stack.push(local18);
                stack.push(local22);
                stack.push(local34);
                stack.push(local35);
                {
                    const args = stack.slice(-5);
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.push(func5(...args));
                }
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
                }
                stack.push(local16);
                stack.push(local15);
                stack.push(stack.pop() + stack.pop());
                stack.push(local19);
                stack.push(local20);
                stack.push(local22);
                stack.push(local34);
                stack.push(local36);
                {
                    const args = stack.slice(-5);
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.push(func5(...args));
                }
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 1280 + stack.pop(), 4).setInt32(0, x, true);
                }
                stack.push(local14);
                stack.push(1);
                stack.push(stack.pop() + stack.pop());
                local14 = stack[stack.length - 1];
                stack.push(120);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                if (stack.pop() !== 0) { continue loop_27; }
                break loop_27;
            }
            stack.push(local13);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local13 = stack[stack.length - 1];
            stack.push(320);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if (stack.pop() !== 0) { continue loop_25; }
            break loop_25;
        }
    }
    const wasmExports = {
        "run": func7,
        "mem": memory0,
    };
    return { exports: wasmExports };
})