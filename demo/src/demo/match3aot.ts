import { ROOT_ELEM_ID } from "./common";
import { instantiate } from "@haribala/wasm2js";
// import { match3_fn } from './match3helper.js';

// function cyrb128(str) {
//     let h1 = 1779033703, h2 = 3144134277,
//         h3 = 1013904242, h4 = 2773480762;
//     for (let i = 0, k; i < str.length; i++) {
//         k = str.charCodeAt(i);
//         h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
//         h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
//         h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
//         h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
//     }
//     h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
//     h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
//     h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
//     h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
//     h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
//     return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
// }

// function sfc32(a, b, c, d) {
//     return function () {
//         a |= 0; b |= 0; c |= 0; d |= 0;
//         var t = (a + b | 0) + d | 0;
//         d = d + 1 | 0;
//         a = b ^ b >>> 9;
//         b = c + (c << 3) | 0;
//         c = (c << 21 | c >>> 11);
//         c = c + t | 0;
//         return (t >>> 0) / 4294967296;
//     }
// }

// function initialize_random() {
//     const seed = cyrb128("apples");
//     const rand = sfc32(seed[0], seed[1], seed[2], seed[3]);
//     return rand;
// }

export const setupMatch3AotDemo = async (compiledJSCode: string) => {
    console.log('setting up the AOT compiled match 3 demo');
    const outputE = document.querySelector('#' + ROOT_ELEM_ID);
    // console.log(outputE);
    outputE.innerHTML = '';

    const W = 150;
    const H = 150;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    outputE.appendChild(canvas);
    {
        const s = document.createElement('style');
        s.innerHTML = `#${ROOT_ELEM_ID} {
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin: 0;
        width: 100%;
        height: 100%;
      }
      canvas {
        object-fit: contain;
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
      }`;
        outputE.appendChild(s);
    }

    // const my_prng = initialize_random();
    // let _my_logger_counter = 0;
    // const mylogger = (...args) => {
    //     const id = args[0];
    //     const rest = JSON.stringify(args.slice(1));
    //     console.log(`[LOG ${_my_logger_counter++} ${id}] ${rest}`);
    //   };
    const importObject: any = { 'Math': { 'random': Math.random } };
    // const importObject: any = {
    //     'Math': { 'random': my_prng },
    //     'debug': {
    //         'loggeri32': mylogger,
    //         'loggerf32': mylogger,
    //     }
    // };
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire2.wasm'), imports)).instance;
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire.wasm'), imports)).instance;
    // const instance = await instantiate(compiledModule, imports);
    const instance = instantiate(compiledJSCode, importObject);
    // console.log('DEBUG match3_fn', match3_fn);
    // const instance = await instantiateAot(match3_fn, importObject);
    console.log('match 3 instance', instance);
    //    const instance = new WebAssembly.Instance(new WebAssembly.Module(data), imports);
    if (!(instance.exports.mem instanceof Uint8Array)) throw new Error('expected an export called "mem" of type Uint8Array');

    const w = 150, h = 150;

    const context = canvas.getContext('2d');
    const imageData = context.createImageData(w, h);

    function clamp(min: number, x: number, max: number) {
        return Math.min(Math.max(x, min), max);
    }

    const exports = instance.exports;

    const input = new Uint8Array((exports.mem as Uint8Array).buffer, 0x0000, 3);
    const canvasData = new Uint8Array((exports.mem as Uint8Array).buffer, 0x1100, w * h * 4);

    function convertEventMouseLocation(event: any) {
        const target = event.target;
        const cw = target.clientWidth, ch = target.clientHeight;
        let size, ow, oh;
        if (cw < ch) {
            size = cw;
            ow = 0;
            oh = (ch - cw) / 2;
        } else {
            size = ch;
            ow = (cw - ch) / 2;
            oh = 0;
        }
        let offsetX = event.clientX - target.offsetLeft;
        let offsetY = event.clientY - target.offsetTop;
        return [clamp(0, w * (offsetX - ow) / size, w - 1),
        clamp(0, h * (offsetY - oh) / size, h - 1)];
    }

    function mouseEventHandler(event: MouseEvent) {
        let [x, y] = convertEventMouseLocation(event);
        // console.log('DEBUG javascript x, y, buttons:', x, y, event.buttons);
        input[0] = x;
        input[1] = y;
        input[2] = event.buttons;
        // console.log('DEBUG javascript: input', JSON.stringify(input));
    }

    canvas.addEventListener('mousemove', mouseEventHandler);
    canvas.addEventListener('mousedown', mouseEventHandler);
    canvas.addEventListener('mouseup', mouseEventHandler);

    let running = false;
    (function update() {
        requestAnimationFrame(update);
        if (running) return;
        running = true;
        // console.log('---------------------------');
        (exports.run as Function)();
        imageData.data.set(canvasData);
        context.putImageData(imageData, 0, 0);
        running = false;
    })();
};
