import { ELEM_ID } from "./common";
import { compile, instantiate } from "@haribala/wasm2js";

export const setupQuineAotDemo = async (_: string) => {
  console.log('setting up the AOT compiled quine demo');
  const outputE = document.querySelector('#' + ELEM_ID);
  // console.log(outputE);
  outputE.innerHTML = `
<p>
  Click this button to compile, run, and extract the quine!
</p>
<button id="button-quine">Click me</button>
<p>
  Compiled <span id="span-count">0 times</span>.<br>
  Here's the data:<br>
  <pre id="pre-quine"></pre>
</p>
`;

  const $ = (s: string) => document.querySelector(s);
  let data = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x04, 0x01, 0x60,
    0x00, 0x00, 0x03, 0x02, 0x01, 0x00, 0x05, 0x03, 0x01, 0x00, 0x01, 0x07,
    0x04, 0x01, 0x00, 0x02, 0x00, 0x08, 0x01, 0x00, 0x0a, 0x20, 0x01, 0x1e,
    0x01, 0x01, 0x7f, 0x03, 0x40, 0x20, 0x00, 0x20, 0x00, 0x28, 0x02, 0x00,
    0x36, 0x02, 0x4a, 0x20, 0x00, 0x41, 0x04, 0x6a, 0x22, 0x00, 0x41, 0xca,
    0x00, 0x49, 0x0d, 0x00, 0x0b, 0x0b, 0x0b, 0x50, 0x01, 0x00, 0x41, 0x00,
    0x0b, 0x4a,

    0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x04, 0x01, 0x60,
    0x00, 0x00, 0x03, 0x02, 0x01, 0x00, 0x05, 0x03, 0x01, 0x00, 0x01, 0x07,
    0x04, 0x01, 0x00, 0x02, 0x00, 0x08, 0x01, 0x00, 0x0a, 0x20, 0x01, 0x1e,
    0x01, 0x01, 0x7f, 0x03, 0x40, 0x20, 0x00, 0x20, 0x00, 0x28, 0x02, 0x00,
    0x36, 0x02, 0x4a, 0x20, 0x00, 0x41, 0x04, 0x6a, 0x22, 0x00, 0x41, 0xca,
    0x00, 0x49, 0x0d, 0x00, 0x0b, 0x0b, 0x0b, 0x50, 0x01, 0x00, 0x41, 0x00,
    0x0b, 0x4a
  ]);
  const length = data.length;
  console.log('length', length);

  const reference_data = data.slice(); // hard copy
  const compare_arrays = (xs: Uint8Array, ys: Uint8Array) => {
    console.log('compare_arrays xs', xs, 'ys', ys);
    if (xs.length !== length) throw new Error('unequal lengths 1');
    if (xs.length !== ys.length) throw new Error('unequal lengths 2');
    if (xs.byteLength !== ys.byteLength) throw new Error('unequal byteLengths');
    for (let i = 0; i < length; i++) {
      if (xs[i] !== ys[i]) throw new Error(`failed on index ${i} ${xs[i]} ${ys[i]}`);
    }
    console.log('the 2 arrays are exactly equal');
  };

  let count = 0;

  function update() {
    const row = 16;
    let s = '';
    let left = data;
    do {
      for (let x of left.slice(0, row)) {
        s += `${x.toString(16).padStart(2, '0')} `;
      }
      s += '\n';
      left = left.slice(row);
    } while (left.length);

    $('#pre-quine').textContent = s;
    $('#span-count').textContent = `${count} time${count == 1 ? '' : 's'}`;
  }

  update();

  $('#button-quine').addEventListener('click', async () => {
    // const instance = new WebAssembly.Instance(new WebAssembly.Module(data));
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire2.wasm'), imports)).instance;
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire.wasm'), imports)).instance;
    // const instance = await instantiate(compiledModule, imports);
    console.log('clicked');
    compare_arrays(reference_data, data);
    const myAotCompiledJSCode = compile(data, false);
    // const myAotCompiledJSCode = await compileAot(data, true);
    // const myAotCompiledJSCode = await compileAot(reference_data, false);
    const instance = instantiate(myAotCompiledJSCode, {});
    console.log('quine instance', instance);
    const memory = instance.exports[''];
    const _data = new Uint8Array((memory as Uint8Array).buffer, 0, length);
    data = _data.slice(); // hard copy necessary to prevent garbage collection
    console.log('data', data.byteLength, data.length, data);
    count++;
    update();
    compare_arrays(reference_data, data);
  });
};
