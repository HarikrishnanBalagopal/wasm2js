import { ROOT_ELEM_ID } from "./common";
import { compile, instantiate } from "@haribala/wasm2js";

export const setupJitAotDemo = async (compiledJSCode: string) => {
    console.log('setting up the AOT compiled JIT demo');
    const outputE = document.querySelector('#' + ROOT_ELEM_ID);
    // console.log(outputE);
    outputE.innerHTML = `
  This is a very simple expression compiler.<br>
  You can type in an expression with the following characters (no space!).<br>
  Then click the 'compile' button and it will generate a new WebAssembly module,<br>
  link it into the original wasm module, and run it.
  </p>
  <pre>( ) + - * / 0 1 2 3 4 5 6 7 8 9</pre>
  <button>compile</button>
  <input value="(3+4)*(5+1)"></input>
  <p id="result"></p>
  <p>
  Here's the wasm module:
  </p>
  <pre id="wasm"></pre>
`;

    const $ = (s: string) => document.querySelector(s);
    let table: Array<Function>, u8a: Uint8Array, gen: Function, call: Function;

    function bytes(data: Uint8Array, n: number, doc: string) {
        let s = '';
        for (let x of data.slice(0, n)) {
            s += `${x.toString(16).padStart(2, '0')} `;
        }
        s = s.padEnd(30, ' ');
        s += doc;
        s += '\n';
        $('#wasm').textContent += s;
        return data.slice(n);
    }

    function update(data: Uint8Array) {
        data = bytes(data, 4, 'wasm magic');
        data = bytes(data, 4, 'wasm version');
        data = bytes(data, 2, 'type section, length=5 bytes');
        data = bytes(data, 2, '1 function type');
        data = bytes(data, 3, '0 params, 1 i32 result');
        data = bytes(data, 2, 'function section, length=2 bytes');
        data = bytes(data, 2, '1 function, type 0');
        data = bytes(data, 2, 'export section, length=5 bytes');
        data = bytes(data, 1, '1 export');
        data = bytes(data, 2, 'name "0"');
        data = bytes(data, 2, 'function 0');
        data = bytes(data, 2, `code section, length=${data[1]} bytes`);
        data = bytes(data, 2, `1 function, length=${data[1]} bytes`);
        data = bytes(data, 1, `0 locals`);

        while (data.length) {
            switch (data[0]) {
                case 0x0b: data = bytes(data, 1, `end`); break;
                case 0x41: data = bytes(data, 2, `i32.const ${data[1]}`); break;
                case 0x6a: data = bytes(data, 1, `i32.add`); break;
                case 0x6b: data = bytes(data, 1, `i32.sub`); break;
                case 0x6c: data = bytes(data, 1, `i32.mul`); break;
                case 0x6d: data = bytes(data, 1, `i32.div`); break;
            }
        }
    }

    const ffi = {
        '': {
            'compile': (len: number) => {
                const _data = new Uint8Array(u8a.buffer, 16, len);
                const data = _data.slice();
                update(data);
                const js = compile(data, false);
                const instance = instantiate(js, {});
                // const instance = new WebAssembly.Instance(new WebAssembly.Module(data));
                const func = instance.exports['0'];
                // table.set(0, func);
                table[0] = func as Function;
            }
        }
    };

    // fetch('jit.wasm')
    // .then(response => response.arrayBuffer())
    const instance = instantiate(compiledJSCode, ffi);
    console.log('jit instance', instance);

    // .then(bytes => WebAssembly.instantiate(bytes, ffi))
    // .then(source => {
    // instance = source.instance;
    u8a = new Uint8Array((instance.exports.mem as Uint8Array).buffer);
    gen = instance.exports.gen as Function;
    call = instance.exports.call as Function;
    table = (instance.exports.table as unknown as Array<Function>);
    // });

    $('button').addEventListener('click', () => {
        let input = ($('input') as HTMLInputElement).value;
        for (let i = 0; i < input.length; ++i) {
            u8a[256 + i] = input.charCodeAt(i);
        }
        u8a[256 + input.length] = 0;
        $('#wasm').textContent = '';
        $('#result').textContent = gen() ? `result = ${call()}` : `error`;
    });
};
