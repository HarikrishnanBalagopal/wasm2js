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
import { compileAot, instantiateAot } from '@haribala/wasm2js';

const fetch_and_execute = async () => {
    // fetch the wasm binary
    const res = await fetch('/url/to/myapp.wasm');
    if (!res.ok) throw new Error('failed to fetch the wasm module');
    const wasmBytes = new Uint8Array(await res.arrayBuffer());
    // compile the wasm binary to javascript code
    const jsCode = await compileAot(wasmBytes);
    // the generated code is a string, so you can print it
    console.log(jsCode);
    // create an instance of the wasm module
    const importObject = { /* imports required by the wasm module */ };
    // NOTE: instantiateAot will also call the 'start' function if it exists
    // https://webassembly.github.io/spec/core/text/modules.html#start-function
    const instance = await instantiateAot(jsCode, importObject);
    // call your wasm function
    const result = instance.exports.myfunc( /* arguments required by the function */ );
    return result;
};

fetch_and_execute().then(console.log).catch(console.error);
```

## To do

- Add support for importing tables
- Add support for imported global variable immutability (const)
- Add support for vector/SIMD WASM instructions
- Add option to optimize the generated JS code. Example: local.get 0, local.get 1, i32.add, local.set 0
