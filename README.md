# WASM to JS compiler

A compiler (decompiler?) from WebAssembly to Javascript written in Typescript.

https://www.npmjs.com/package/@haribala/wasm2js

Demos: https://haribala.dev/wasm2js

NOTE: This library is not the same as packages like
https://github.com/thlorenz/wasm2js , https://github.com/mafintosh/wat2js , etc.
which only embed the WASM binary in a Javascript module.
Unlike the above packages, this library parses the WASM binary
and compiles the abstract syntax tree to Javascript code instruction by instruction.
The result is similar to porting your WASM app to Javascript line by line.

Technically it might be called a decompiler since we are going from
a low-level assembly language (WASM) to a high-level language (Javascript).

## Usage

```js
import { compile, instantiate } from '@haribala/wasm2js';

const fetch_wasm_binary = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('failed to fetch the wasm binary');
    const wasmBytes = new Uint8Array(await res.arrayBuffer());
    return wasmBytes;
};

const compile_and_execute = async (wasmBytes) => {
    // Compile the wasm binary to javascript code.
    // The generated code is a string, so you can print it.
    const jsCode = compile(wasmBytes);
    console.log('javascript code:');
    console.log(jsCode);
    // Create an instance of the wasm module.
    // NOTE: instantiateAot will also call the 'start' function if it exists.
    // https://webassembly.github.io/spec/core/text/modules.html#start-function
    const importObject = { /* imports required by the wasm module */ };
    const instance = instantiate(jsCode, importObject);
    console.log('instance:', instance);
    // Call an exported wasm function.
    const result = instance.exports.myfunc( /* arguments */ );
    return result;
};

fetch_wasm_binary('/url/to/myapp.wasm')
    .then(compile_and_execute)
    .then(console.log)
    .catch(console.error);
```

# API

```typescript
const compile: (
    wasmBytes: Uint8Array,
    debug_mode?: boolean = false,
    strict_maths?: boolean = true,
) => string;

const instantiate: (
    compiledJSCode: string,
    importObject: object,
) => MyWasmInstance;
```

The `debug_mode` optional parameter adds comments to the generated Javascript code so that it's easier to understand which WASM instructions got compiled to what JS. It also adds extra checks and `console.log` statements in the code to help detect bugs.

The `strict_maths` optional parameter is necessary for getting correct results from signed and unsigned math operations. However, it leads to a bigger code size and might slow down the execution.

## To do

- Add support for imported global variable immutability (const)
- Add support for vector/SIMD WASM instructions
- Add option to optimize the generated JS code. Example: `local.get 0, local.get 1, i32.add, local.set 0` -> `x = x + y`
