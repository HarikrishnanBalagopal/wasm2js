(function (import_object) {
    if (!import_object[''] || !import_object['']['rand']) {
        throw new Error('failed to find the import in the import object:  rand');
    }
    const func0 = import_object['']['rand'];
    const memory0 = new Uint8Array(5 * 65536);
    memory0.set([7,7,7,255,31,7,7,255,47,15,7,255,71,15,7,255,87,23,7,255,103,31,7,255,119,31,7,255,143,39,7,255,159,47,7,255,175,63,7,255,191,71,7,255,199,71,7,255,223,79,7,255,223,87,7,255,223,87,7,255,215,95,7,255,215,95,7,255,215,103,15,255,207,111,15,255,207,119,15,255,207,127,15,255,207,135,23,255,199,135,23,255,199,143,23,255,199,151,31,255,191,159,31,255,191,159,31,255,191,167,39,255,191,167,39,255,191,175,47,255,183,175,47,255,183,183,47,255,183,183,55,255,207,207,111,255,223,223,159,255,239,239,199,255,255,255,255,255], 268800);
    function func1() {
        const stack = [];
        let local0 = 0;
        stack.push(320);
        local0 = stack.pop();
        loop_0: while (true) {
            stack.push(local0);
            stack.push(36);
            {
                const x = stack.pop();
                memory0[53439 + stack.pop()] = x;
            }
            stack.push(local0);
            stack.push(1);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local0 = stack[stack.length - 1];
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
    }
    function func2() {
        const stack = [];
        let local0 = 0;
        let local1 = 0;
        let local2 = 0;
        loop_0: while (true) {
            loop_1: while (true) {
                stack.push(local0);
                stack.push(320);
                stack.push(stack.pop() + stack.pop());
                local0 = stack[stack.length - 1];
                stack.push(memory0[0 + stack.pop()]);
                local1 = stack[stack.length - 1];
                if_2: if (stack.pop() !== 0) {
                    stack.push(func0());
                    stack.push(3);
                    stack.push(stack.pop() * stack.pop());
                    stack.push(Math.round(stack.pop()));
                    stack.push(Math.trunc(stack.pop()));
                    stack.push(3);
                    stack.push(stack.pop() & stack.pop());
                    local2 = stack.pop();
                    stack.push(local0);
                    stack.push(local2);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    stack.push(319);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    stack.push(local1);
                    stack.push(local2);
                    stack.push(1);
                    stack.push(stack.pop() & stack.pop());
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    {
                        const x = stack.pop();
                        memory0[0 + stack.pop()] = x;
                    }
                } else {
                    stack.push(local0);
                    stack.push(320);
                    {
                        const x = stack.pop();
                        stack.push(stack.pop() - x);
                    }
                    stack.push(0);
                    {
                        const x = stack.pop();
                        memory0[0 + stack.pop()] = x;
                    }
                }
                stack.push(local0);
                stack.push(53440);
                {
                    const x = stack.pop();
                    stack.push(stack.pop() < x ? 1 : 0);
                }
                if (stack.pop() !== 0) { continue loop_1; }
                break loop_1;
            }
            stack.push(local0);
            stack.push(53439);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local0 = stack[stack.length - 1];
            stack.push(320);
            stack.push(stack.pop() !== stack.pop() ? 1 : 0);
            if (stack.pop() !== 0) { continue loop_0; }
            break loop_0;
        }
        stack.push(53760);
        local0 = stack.pop();
        loop_3: while (true) {
            stack.push(local0);
            stack.push(1);
            {
                const x = stack.pop();
                stack.push(stack.pop() - x);
            }
            local0 = stack.pop();
            stack.push(local0);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(local0);
            stack.push(memory0[0 + stack.pop()]);
            stack.push(2);
            {
                const x = stack.pop();
                stack.push(stack.pop() << x);
            }
            stack.push(new DataView(memory0.buffer, 268800 + stack.pop(), 4).getInt32(0, true));
            {
                const x = stack.pop();
                new DataView(memory0.buffer, 53760 + stack.pop(), 4).setInt32(0, x, true);
            }
            stack.push(local0);
            if (stack.pop() !== 0) { continue loop_3; }
            break loop_3;
        }
    }
    const wasmExports = {
        "run": func2,
        "mem": memory0,
    };
    func1();
    return { exports: wasmExports };
})