# WASM to JS compiler

A compiler (decompiler?) from WASM to JS written in Typescript.

## Usage

```js
import { compileAot, instantiateAot } from '@haribala/wasm2js/src/parser/aotcompiler';

const fetch_and_execute = async () => {
    const res = await fetch('/url/to/myapp.wasm');
    if (!res.ok) throw new Error('failed to fetch the wasm module');
    const wasmBytes = new Uint8Array(await res.arrayBuffer());
    const jsCode = await compileAot(wasmBytes);
    const importObject = { /* imports required by the wasm module */ };
    const instance = await instantiateAot(jsCode, importObject);
    const result = instance.exports.myfunc( /* arguments required by the function */ );
};
```

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
