# WASM to JS compiler

A compiler (decompiler?) from WASM to JS written in Typescript.

## Usage

```js
import { compileAot, instantiateAot } from '@haribala/wasm2js/src/parser/aotcompiler';

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
    // This is a feature of WASM itself https://webassembly.github.io/spec/core/text/modules.html#start-function
    const instance = await instantiateAot(jsCode, importObject);
    // call your wasm function
    const result = instance.exports.myfunc( /* arguments required by the function */ );
    return result;
};

fetch_and_execute().catch(console.error);
```

## To do

- Add support for importing tables
- Add support for imported global variable immutability (const)
- Add support for vector/SIMD WASM instructions
- Add option to optimize the generated JS code. Example: local.get 0, local.get 1, i32.add, local.set 0

## Development

Install dependencies (run only once)

```shell
$ pnpm install
```

Run the WebPack development server

```shell
$ pnpm run dev
```

In your browser you can try the various demos that are included.
Demos were taken from https://github.com/binji/raw-wasm and modified
slightly to run with this library.


If you want to build the final bundle in production mode:

```shell
$ pnpm run build
```
