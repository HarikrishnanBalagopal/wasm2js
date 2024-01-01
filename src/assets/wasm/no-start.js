(function (import_object) {
    const func0 = import_object['console']['log'];
    function func1() {
        const stack = [];
        stack.push(1);
        stack.push(2);
        stack.push(stack.pop() + stack.pop());
        func0(stack.pop());
    }
    const wasmExports = {
        "main": func1,
    };
    return { exports: wasmExports };
})