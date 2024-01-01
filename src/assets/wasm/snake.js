(function (import_object) {
    if (!import_object['Math'] || !import_object['Math']['random']) {
        throw new Error('failed to find the import in the import object: Math random');
    }
    const func0 = import_object['Math']['random'];
    if (!import_object['Math'] || !import_object['Math']['sin']) {
        throw new Error('failed to find the import in the import object: Math sin');
    }
    const func1 = import_object['Math']['sin'];
    const memory0 = new Uint8Array(6 * 65536);
    let global0 = 0;
    let global1 = 0;
    let global2 = 0;
    let global3 = 0;
    let global4 = 0;
    let global5 = 0;
    let global6 = 0;
    let global7 = 0;
    let global8 = 0;
    let global9 = 0;
    let global10 = 0;
    let global11 = 0;
    let global12 = 30;
    let global13 = 0;
    let global14 = 0;
    memory0.set([0,0,0,0,0,0,128,1,224,7,240,15,240,15,248,31,248,31,240,15,240,15,224,7,128,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,1,192,3,224,7,224,7,192,3,128,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,1,192,3,192,3,128,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,7,248,31,252,63,60,62,28,60,128,63,224,31,240,7,248,1,124,56,124,60,252,63,248,31,224,15,0,0,0,0,60,56,62,124,30,126,30,127,30,127,158,127,222,127,254,123,254,121,254,120,126,120,126,124,62,124,30,124,0,0,0,0,192,1,192,3,224,7,240,7,240,15,248,15,248,31,124,62,60,62,254,63,254,127,254,127,30,120,14,112,0,0,0,0,0,112,30,120,62,120,254,120,252,123,248,127,224,127,192,127,240,127,248,123,254,120,126,120,62,120,14,112,0,0,0,0,254,15,254,63,254,127,252,127,0,124,0,120,252,127,252,127,252,127,0,120,28,126,254,127,254,63,254,15,0,0,0,0,248,15,252,63,254,127,254,127,30,124,0,120,0,120,0,120,0,120,0,120,62,126,254,127,254,63,252,15,0,0,0,0,224,31,248,63,252,63,252,60,60,56,60,124,252,127,252,127,248,127,240,127,248,121,254,120,126,120,30,112,0,0,0,0,240,7,248,31,252,63,254,127,62,124,30,120,30,120,30,120,30,120,62,124,124,126,252,63,248,31,240,7,0,0,0,0,224,1,224,15,224,31,224,31,224,29,224,1,224,1,192,1,192,1,192,1,192,3,252,63,252,63,252,63,0,0,0,0,224,7,240,31,248,31,252,63,124,124,60,124,124,56,248,0,248,1,240,7,224,15,254,63,254,127,254,127,0,0,0,0,248,15,252,63,254,127,254,127,62,120,252,51,254,7,254,7,254,3,62,56,254,127,254,127,252,63,248,31,0,0,0,0,56,30,60,30,60,62,60,60,60,124,60,120,252,127,252,127,252,63,60,0,60,0,60,0,60,0,28,0,0,0,0,0,252,127,252,127,252,127,0,120,0,120,240,127,248,127,252,127,60,56,60,0,124,120,252,127,248,127,240,63,0,0,0,0,248,15,252,31,252,63,0,62,0,60,240,127,252,127,252,127,62,124,30,124,62,126,254,63,252,63,248,15,0,0,0,0,248,63,254,127,254,127,254,63,126,0,124,0,252,0,248,3,240,7,224,15,192,31,128,63,0,63,0,28,0,0,0,0,224,7,240,31,248,63,124,62,60,60,60,30,248,63,252,63,254,127,62,124,30,120,254,63,252,63,248,31,0,0,0,0,240,31,252,63,252,127,62,124,30,120,30,126,254,63,254,63,254,15,62,0,126,120,252,127,248,127,240,63,0,0,3,4,5,6,7,3,8,10,9,7,10,10,10,10,10], 0);
    memory0.set([0,0,0,0,40,169,33,255,40,169,33,255,238,238,238,255,255,254,107,255,255,33,55,255,255,33,55,255,0,0,0,0,255,39,184,255], 656);
    function func2(local0, local1, local2, local3) {
        const stack = [];
        loop_0: while (true) {
            stack.push(local0);
            stack.push(local3);
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 9216 + stack.pop(), 2).setInt16(0, x, true);
            }
            stack.push(local0);
            stack.push(local1);
            stack.push(stack.pop() + stack.pop());
            local0 = stack[stack.length - 1];
            stack.push(local2);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
    }
    function func3(local0, local1) {
        const stack = [];
        stack.push(local0);
        stack.push(global13);
        stack.push(local1);
        {
            const x = stack.pop();
            stack.push(Math.floor(stack.pop() / x));
        }
        stack.push(10);
        {
            const x = stack.pop();
            stack.push(stack.pop() % x);
        }
        stack.push(10);
        stack.push(stack.pop() + stack.pop());
        {
            const x = stack.pop();
            memory0[650 + stack.pop()] = x;
        }
    }
    function func4(local0) {
        const stack = [];
        stack.push(local0);
        global13 = stack.pop();
        stack.push(0);
        stack.push(10000);
        {
            const args = stack.slice(-2);
            stack.pop();
            stack.pop();
            func3(...args);
        }
        stack.push(1);
        stack.push(1000);
        {
            const args = stack.slice(-2);
            stack.pop();
            stack.pop();
            func3(...args);
        }
        stack.push(2);
        stack.push(100);
        {
            const args = stack.slice(-2);
            stack.pop();
            stack.pop();
            func3(...args);
        }
    }
    function func5() {
        const stack = [];
        stack.push(660);
        stack.push(-14571224);
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
        }
        stack.push(664);
        stack.push(-14571224);
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
        }
        stack.push(80);
        global4 = stack.pop();
        stack.push(180);
        global5 = stack.pop();
        stack.push(1024);
        global1 = stack.pop();
        stack.push(0.6000000238418579);
        global2 = stack.pop();
        stack.push(12);
        global3 = stack.pop();
        stack.push(0);
        global8 = stack.pop();
        stack.push(40);
        global9 = stack.pop();
        stack.push(0);
        func4(stack.pop());
        func7();
    }
    function func6(local0) {
        const stack = [];
        stack.push(local0);
        stack.push(func0());
        stack.push(stack.pop() * stack.pop());
        stack.push(Math.trunc(stack.pop()));
        return stack[0];
    }
    function func7() {
        const stack = [];
        stack.push(200);
        stack.push(func6(stack.pop()));
        stack.push(20);
        stack.push(stack.pop() + stack.pop());
        global10 = stack.pop();
        stack.push(270);
        stack.push(func6(stack.pop()));
        stack.push(30);
        stack.push(stack.pop() + stack.pop());
        global11 = stack.pop();
    }
    function func8(local0) {
        const stack = [];
        stack.push(local0);
        stack.push(global14);
        stack.push(func0());
        stack.push(0.5);
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(Math.trunc(stack.pop()));
        return stack[0];
    }
    function func9(local0, local1, local2, local3) {
        const stack = [];
        let local4 = 0;
        let local5 = 0;
        let local6 = 0;
        stack.push(local0);
        stack.push(func8(stack.pop()));
        local0 = stack.pop();
        stack.push(local1);
        stack.push(func8(stack.pop()));
        local1 = stack.pop();
        stack.push(local1);
        stack.push(240);
        stack.push(stack.pop() * stack.pop());
        stack.push(local0);
        stack.push(stack.pop() + stack.pop());
        local5 = stack.pop();
        stack.push(16);
        local1 = stack.pop();
        loop_0: while (true) {
            stack.push(16);
            local0 = stack.pop();
            stack.push(local2);
            stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 2).getUint16(0, true));
            local6 = stack.pop();
            stack.push(local2);
            stack.push(2);
            stack.push(stack.pop() + stack.pop());
            local2 = stack.pop();
            loop_1: while (true) {
                stack.push(local6);
                stack.push(1);
                {
                    const x = stack.pop();
                    const v = stack.pop();
                    stack.push((v << x) | (v >>> (32-x)));
                }
                local6 = stack.pop();
                stack.push(local6);
                stack.push(65536);
                stack.push(stack.pop() & stack.pop());
                if_2: if (stack.pop() !== 0) {
                    stack.push(local4);
                    stack.push(local5);
                    stack.push(memory0[9216 + stack.pop()]);
                    stack.push(stack.pop() | stack.pop());
                    local4 = stack.pop();
                    stack.push(local5);
                    stack.push(local3);
                    {
                        const x = stack.pop();
                        memory0[9216 + stack.pop()] = x;
                    }
                }
                stack.push(local5);
                stack.push(1);
                stack.push(stack.pop() + stack.pop());
                local5 = stack.pop();
                stack.push(local0);
                stack.push(1);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                local0 = stack[stack.length - 1];
                if (stack.pop() !== 0) { continue loop_1; }
                break loop_1;
            }
            stack.push(local5);
            stack.push(224);
            stack.push(stack.pop() + stack.pop());
            local5 = stack.pop();
            stack.push(local1);
            stack.push(1);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local1 = stack[stack.length - 1];
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
        stack.push(local4);
        return stack[0];
    }
    function func10(local0, local1) {
        const stack = [];
        stack.push(global4);
        stack.push(global6);
        stack.push(8);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(global7);
        stack.push(local0);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(Math.trunc(stack.pop()));
        stack.push(global5);
        stack.push(global7);
        stack.push(8);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(global6);
        stack.push(local0);
        stack.push(-stack.pop());
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(Math.trunc(stack.pop()));
        stack.push(64);
        stack.push(local1);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(func9(...args));
        }
        return stack[0];
    }
    function func11(local0, local1) {
        const stack = [];
        let local2 = 0;
        stack.push(global8);
        if_0: if (stack.pop() !== 0) {
            stack.push(global8);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            local2 = stack.pop();
            loop_1: while (true) {
                stack.push(local2);
                stack.push(new DataView(memory0.buffer, 764 + stack.pop(), 2).getInt16(0, true));
                stack.push(local2);
                stack.push(new DataView(memory0.buffer, 766 + stack.pop(), 2).getInt16(0, true));
                stack.push(0);
                stack.push(local0);
                {
                    const args = stack.slice(-4);
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.push(func9(...args));
                }
                stack.pop();
                stack.push(local2);
                stack.push(4);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                local2 = stack[stack.length - 1];
                if (stack.pop() !== 0) { continue loop_1; }
                break loop_1;
            }
            stack.push(global4);
            stack.push(Math.trunc(stack.pop()));
            stack.push(global5);
            stack.push(Math.trunc(stack.pop()));
            stack.push(0);
            stack.push(local0);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            {
                const args = stack.slice(-4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(func9(...args));
            }
            stack.pop();
            stack.push(2.5);
            stack.push(local1);
            {
                const args = stack.slice(-2);
                stack.pop();
                stack.pop();
                stack.push(func10(...args));
            }
            stack.push(-2.5);
            stack.push(local1);
            {
                const args = stack.slice(-2);
                stack.pop();
                stack.pop();
                stack.push(func10(...args));
            }
            stack.push(stack.pop() | stack.pop());
        } else {
            stack.push(0);
        }
        return stack[0];
    }
    function func12() {
        const stack = [];
        stack.push(global10);
        stack.push(global11);
        stack.push(32);
        stack.push(8);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(func9(...args));
        }
        stack.pop();
    }
    function func13(local0, local1) {
        const stack = [];
        stack.push(local0);
        stack.push(local0);
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getInt32(0, true));
        stack.push(local1);
        stack.push(stack.pop() + stack.pop());
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setInt32(0, x, true);
        }
    }
    function func14(local0) {
        const stack = [];
        let local1 = 0;
        stack.push(global9);
        stack.push(2);
        {
            const x = stack.pop();
            stack.push(stack.pop() << x);
        }
        local1 = stack.pop();
        loop_0: while (true) {
            stack.push(local1);
            stack.push(local1);
            stack.push(new DataView(memory0.buffer, 760 + stack.pop(), 4).getInt32(0, true));
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 764 + stack.pop(), 4).setInt32(0, x, true);
            }
            stack.push(local1);
            stack.push(4);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local1 = stack[stack.length - 1];
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
        stack.push(0);
        stack.push(global4);
        stack.push(Math.trunc(stack.pop()));
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 768 + stack.pop(), 2).setInt16(0, x, true);
        }
        stack.push(0);
        stack.push(global5);
        stack.push(Math.trunc(stack.pop()));
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 770 + stack.pop(), 2).setInt16(0, x, true);
        }
        stack.push(global1);
        stack.push(local0);
        stack.push(global3);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        stack.push(4095);
        stack.push(stack.pop() & stack.pop());
        global1 = stack.pop();
        stack.push(global1);
        stack.push(1024);
        stack.push(stack.pop() + stack.pop());
        stack.push(0.0015339808305725455);
        stack.push(stack.pop() * stack.pop());
        stack.push(func1(stack.pop()));
        global6 = stack.pop();
        stack.push(global1);
        stack.push(0.0015339808305725455);
        stack.push(stack.pop() * stack.pop());
        stack.push(func1(stack.pop()));
        global7 = stack.pop();
        stack.push(global4);
        stack.push(global6);
        stack.push(global2);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        global4 = stack.pop();
        stack.push(global5);
        stack.push(global7);
        stack.push(global2);
        stack.push(stack.pop() * stack.pop());
        stack.push(stack.pop() + stack.pop());
        global5 = stack.pop();
        stack.push(global8);
        stack.push(global9);
        {
            const x = stack.pop();
            stack.push(stack.pop() < x ? 1 : 0);
        }
        if_1: if (stack.pop() !== 0) {
            stack.push(global8);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            global8 = stack.pop();
        }
        stack.push(1);
        stack.push(4);
        {
            const args = stack.slice(-2);
            stack.pop();
            stack.pop();
            stack.push(func11(...args));
        }
        local1 = stack.pop();
        stack.push(local1);
        stack.push(1);
        stack.push(stack.pop() & stack.pop());
        if_2: if (stack.pop() !== 0) {
            stack.push(2);
            global0 = stack.pop();
            stack.push(5);
            global14 = stack.pop();
            stack.push(0);
            global12 = stack.pop();
        }
        stack.push(local1);
        stack.push(8);
        stack.push(stack.pop() & stack.pop());
        if_3: if (stack.pop() !== 0) {
            func7();
            stack.push(2);
            global14 = stack.pop();
            stack.push(global3);
            stack.push(40);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if_4: if (stack.pop() !== 0) {
                stack.push(global3);
                stack.push(1);
                stack.push(stack.pop() + stack.pop());
                global3 = stack.pop();
                stack.push(global2);
                stack.push(0.05000000074505806);
                stack.push(stack.pop() + stack.pop());
                global2 = stack.pop();
                stack.push(660);
                stack.push(775);
                {
                    const args = stack.slice(-2);
                    stack.pop();
                    stack.pop();
                    func13(...args);
                }
                stack.push(664);
                stack.push(775);
                {
                    const args = stack.slice(-2);
                    stack.pop();
                    stack.pop();
                    func13(...args);
                }
            }
            stack.push(global9);
            stack.push(900);
            {
                const x = stack.pop();
                stack.push(stack.pop() < x ? 1 : 0);
            }
            if_5: if (stack.pop() !== 0) {
                stack.push(global9);
                stack.push(10);
                stack.push(stack.pop() + stack.pop());
                global9 = stack.pop();
            }
            stack.push(global13);
            stack.push(100);
            stack.push(stack.pop() + stack.pop());
            func4(stack.pop());
        }
    }
    function func15(local0, local1, local2, local3) {
        const stack = [];
        let local4 = 0;
        stack.push(local0);
        stack.push(85);
        stack.push(stack.pop() + stack.pop());
        local4 = stack.pop();
        loop_0: while (true) {
            stack.push(local0);
            stack.push(local1);
            stack.push(local2);
            stack.push(memory0[0 + stack.pop()]);
            stack.push(5);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(local3);
            {
                const args = stack.slice(-4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                stack.push(func9(...args));
            }
            stack.pop();
            stack.push(local2);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local2 = stack.pop();
            stack.push(local0);
            stack.push(17);
            stack.push(stack.pop() + stack.pop());
            local0 = stack[stack.length - 1];
            stack.push(local4);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
    }
    function func16() {
        const stack = [];
        let local0 = 0;
        let local1 = 0;
        stack.push(global12);
        stack.push(1);
        stack.push(stack.pop() + stack.pop());
        global12 = stack.pop();
        stack.push(global14);
        stack.push(0.10000000149011612);
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        stack.push(0);
        {
            const x2 = stack.pop();
            const x1 = stack.pop();
            stack.push(x1 > x2 ? x1 : x2);
        }
        global14 = stack.pop();
        stack.push(0);
        stack.push(memory0[705 + stack.pop()]);
        stack.push(0);
        stack.push(memory0[704 + stack.pop()]);
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        local1 = stack.pop();
        stack.push(0);
        stack.push(2);
        stack.push(76800);
        stack.push(0);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func2(...args);
        }
        stack.push(0);
        stack.push(2);
        stack.push(480);
        stack.push(771);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func2(...args);
        }
        stack.push(76320);
        stack.push(2);
        stack.push(76800);
        stack.push(771);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func2(...args);
        }
        stack.push(480);
        stack.push(240);
        stack.push(76320);
        stack.push(771);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func2(...args);
        }
        stack.push(718);
        stack.push(240);
        stack.push(76558);
        stack.push(771);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func2(...args);
        }
        stack.push(8);
        stack.push(8);
        stack.push(645);
        stack.push(3);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func15(...args);
        }
        stack.push(146);
        stack.push(8);
        stack.push(650);
        stack.push(3);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            func15(...args);
        }
        block_0: {
            block_1: {
                block_2: {
                    block_3: {
                        block_4: {
                            stack.push(global0);
                            {
                                const target_idx = stack.pop();
                                if(target_idx === 0) { break block_2; }
                                else if(target_idx === 1) { break block_3; }
                                else { break block_4; }
                            }
                        }
                        stack.push(5);
                        stack.push(5);
                        {
                            const args = stack.slice(-2);
                            stack.pop();
                            stack.pop();
                            stack.push(func11(...args));
                        }
                        stack.pop();
                        break block_1;
                    }
                    func12();
                    stack.push(local1);
                    func14(stack.pop());
                    func12();
                    break block_0;
                }
                stack.push(-1);
                func14(stack.pop());
            }
            stack.push(76);
            stack.push(132);
            stack.push(640);
            stack.push(3);
            {
                const args = stack.slice(-4);
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                func15(...args);
            }
            stack.push(local1);
            stack.push(global12);
            stack.push(60);
            {
                const x = stack.pop();
                stack.push(stack.pop() >= x ? 1 : 0);
            }
            stack.push(stack.pop() & stack.pop());
            if_5: if (stack.pop() !== 0) {
                func5();
                stack.push(1);
                global0 = stack.pop();
            }
        }
        loop_6: while (true) {
            stack.push(local0);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(local0);
            stack.push(memory0[9216 + stack.pop()]);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(new DataView(memory0.buffer, 656 + stack.pop(), 4).getInt32(0, true));
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 86016 + stack.pop(), 4).setInt32(0, x, true);
            }
            stack.push(local0);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local0 = stack[stack.length - 1];
            stack.push(76800);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_6; }
            break loop_6;
        }
    }
    const wasmExports = {
        "run": func16,
        "mem": memory0,
    };
    func5();
    return { exports: wasmExports };
})