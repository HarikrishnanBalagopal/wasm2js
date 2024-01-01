# WASM to JS compiler

A compiler (decompiler?) from WASM to JS written in Typescript.

## Usage

```js
import { compileAot, instantiateAot } from "@haribala/wasm2js/parser/aotcompiler";
const myAotCompiledJSCode = await compileAot(wasmBytes);
const importObject = { /* imports required by the wasm module */ };
const instance = await instantiateAot(compiledJSCode, importObject);
```

## Development

Install dependencies

```shell
$ pnpm install
```

Build and run the development server

```shell
$ pnpm run dev
```
