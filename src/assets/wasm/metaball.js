(function (import_object) {
    if (!import_object[''] || !import_object['']['rand']) {
        throw new Error('failed to find the import in the import object:  rand');
    }
    const func0 = import_object['']['rand'];
    const memory0 = new Uint8Array(4 * 65536);
    let global0 = 0;
    memory0.set([0,0,72,67,0,0,72,66,205,204,204,62,205,204,76,190,0,0,200,66,0,0,72,66,205,204,204,62,205,204,76,190,0,0,240,65,0,0,160,65], 984);
    function func1(local0) {
        const stack = [];
        let local1 = 0;
        let local2 = 0;
        stack.push(local0);
        stack.push(20);
        stack.push(stack.pop() * stack.pop());
        global0 = stack.pop();
        loop_0: while (true) {
            stack.push(local1);
            stack.push(1);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(40);
            {
                const x = stack.pop();
                stack.push(stack.pop() % x);
            }
            local2 = stack.pop();
            stack.push(local1);
            stack.push(func0());
            stack.push(local2);
            stack.push(new DataView(memory0.buffer, 984 + stack.pop(), 4).getFloat32(0, true));
            stack.push(stack.pop() * stack.pop());
            stack.push(local2);
            stack.push(new DataView(memory0.buffer, 988 + stack.pop(), 4).getFloat32(0, true));
            stack.push(stack.pop() + stack.pop());
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 0 + stack.pop(), 4).setFloat32(0, x, true);
            }
            stack.push(local1);
            stack.push(4);
            stack.push(stack.pop() + stack.pop());
            local1 = stack[stack.length - 1];
            stack.push(global0);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
    }
    function func2(local0, local1, local2) {
        const stack = [];
        let local3 = 0;
        let local4 = 0;
        stack.push(local2);
        stack.push(local0);
        stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getFloat32(0, true));
        stack.push(local0);
        stack.push(new DataView(memory0.buffer, 4 + stack.pop(), 4).getFloat32(0, true));
        local4 = stack[stack.length - 1];
        stack.push(stack.pop() + stack.pop());
        local3 = stack[stack.length - 1];
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        stack.push(Math.abs(stack.pop()));
        stack.push(local2);
        stack.push(local1);
        {
            const x = stack.pop();
            stack.push(stack.pop() - x);
        }
        {
            const x = stack.pop();
            stack.push(stack.pop() > x ? 1 : 0);
        }
        if_0: if (stack.pop() !== 0) {
            stack.push(local0);
            stack.push(local4);
            stack.push(-stack.pop());
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 4 + stack.pop(), 4).setFloat32(0, x, true);
            }
        }
        stack.push(local0);
        stack.push(local3);
        {
            const x = stack.pop();
            new DataView(memory0.buffer, 0 + stack.pop(), 4).setFloat32(0, x, true);
        }
    }
    function func3() {
        const stack = [];
        let local0 = 0;
        let local1 = 0;
        let local2 = 0;
        let local3 = 0;
        let local4 = 0;
        loop_0: while (true) {
            stack.push(local0);
            stack.push(local0);
            stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 4).getFloat32(0, true));
            local3 = stack[stack.length - 1];
            stack.push(160);
            {
                const args = stack.slice(-3);
                stack.pop();
                stack.pop();
                stack.pop();
                func2(...args);
            }
            stack.push(local0);
            stack.push(8);
            stack.push(stack.pop() + stack.pop());
            stack.push(local3);
            stack.push(100);
            {
                const args = stack.slice(-3);
                stack.pop();
                stack.pop();
                stack.pop();
                func2(...args);
            }
            stack.push(local0);
            stack.push(20);
            stack.push(stack.pop() + stack.pop());
            local0 = stack[stack.length - 1];
            stack.push(global0);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
        loop_1: while (true) {
            stack.push(0);
            local1 = stack.pop();
            loop_2: while (true) {
                stack.push(0);
                local0 = stack.pop();
                stack.push(0);
                local4 = stack.pop();
                loop_3: while (true) {
                    stack.push(local4);
                    stack.push(local0);
                    stack.push(new DataView(memory0.buffer, 16 + stack.pop(), 4).getFloat32(0, true));
                    local3 = stack[stack.length - 1];
                    stack.push(local3);
                    stack.push(stack.pop() * stack.pop());
                    stack.push(local1);
                    stack.push(local0);
                    stack.push(new DataView(memory0.buffer, 0 + stack.pop(), 4).getFloat32(0, true));
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    local3 = stack[stack.length - 1];
                    stack.push(local3);
                    stack.push(stack.pop() * stack.pop());
                    stack.push(local2);
                    stack.push(local0);
                    stack.push(new DataView(memory0.buffer, 8 + stack.pop(), 4).getFloat32(0, true));
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    local3 = stack[stack.length - 1];
                    stack.push(local3);
                    stack.push(stack.pop() * stack.pop());
                    stack.push(stack.pop() + stack.pop());
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() / x);
                    }
                    stack.push(stack.pop() + stack.pop());
                    local4 = stack.pop();
                    stack.push(local0);
                    stack.push(20);
                    stack.push(stack.pop() + stack.pop());
                    local0 = stack[stack.length - 1];
                    stack.push(global0);
                    stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                    if (stack.pop() !== 0) { continue loop_3; }
                    break loop_3;
                }
                stack.push(local2);
                stack.push(320);
                stack.push(stack.pop() * stack.pop());
                stack.push(local1);
                stack.push(stack.pop() + stack.pop());
                stack.push(2);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                stack.push(local4);
                stack.push(1);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() - x);
                }
                stack.push(1);
                {
                    const x2 = stack.pop();
                    const x1 = stack.pop();
                    stack.push(x1 < x2 ? x1 : x2);
                }
                stack.push(0);
                {
                    const x2 = stack.pop();
                    const x1 = stack.pop();
                    stack.push(x1 > x2 ? x1 : x2);
                }
                stack.push(255);
                stack.push(stack.pop() * stack.pop());
                stack.push(Math.trunc(stack.pop()));
                stack.push(24);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() << x);
                }
                stack.push(7590937);
                stack.push(stack.pop() | stack.pop());
                {
                    const x = stack.pop();
                    new DataView(memory0.buffer, 1024 + stack.pop(), 4).setInt32(0, x, true);
                }
                stack.push(local1);
                stack.push(1);
                stack.push(stack.pop() + stack.pop());
                local1 = stack[stack.length - 1];
                stack.push(320);
                stack.push(stack.pop() !== stack.pop() ? 1 : 0);
                if (stack.pop() !== 0) { continue loop_2; }
                break loop_2;
            }
            stack.push(local2);
            stack.push(1);
            stack.push(stack.pop() + stack.pop());
            local2 = stack[stack.length - 1];
            stack.push(200);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_1; }
            break loop_1;
        }
    }
    const wasmExports = {
        "blobs": func1,
        "run": func3,
        "mem": memory0,
    };
    return { exports: wasmExports };
})