(function (import_object) {
    const func0 = import_object['console']['log'];
    function func1(local0, local1, local2, local3) {
        const stack = [];
        stack.push(local0);
        stack.push(local2);
        stack.push(stack.pop() + stack.pop());
        stack.push(local1);
        stack.push(local3);
        stack.push(stack.pop() + stack.pop());
        return stack;
    }
    function func2(local0, local1) {
        const stack = [];
        stack.push(local0);
        func0(stack.pop());
        stack.push(local1);
        func0(stack.pop());
    }
    function func3() {
        const stack = [];
        stack.push(10);
        stack.push(3);
        stack.push(10);
        stack.push(3);
        {
            const args = stack.slice(-4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            stack.push(...func1(...args));
        }
        {
            const args = stack.slice(-2);
            stack.pop();
            stack.pop();
            func2(...args);
        }
    }
    const wasmExports = {
    };
    func3();
    return { exports: wasmExports };
})