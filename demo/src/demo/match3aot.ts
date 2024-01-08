import { ELEM_ID } from "./common";
import { instantiateAot } from "@haribala/wasm2js";
import { match3_fn } from './match3helper.js';

export const setupMatch3AotDemo = async (compiledJSCode: string) => {
    console.log('setting up the AOT compiled match 3 demo');
    const outputE = document.querySelector('#' + ELEM_ID);
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
        s.innerHTML = `body {
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

    const importObject: any = { Math };
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire2.wasm'), imports)).instance;
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire.wasm'), imports)).instance;
    // const instance = await instantiate(compiledModule, imports);
    // const instance = await instantiateAot(compiledJSCode, importObject);
    console.log('DEBUG match3_fn', match3_fn);
    const instance = await instantiateAot(match3_fn, importObject);
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
        input[0] = x;
        input[1] = y;
        input[2] = event.buttons;
    }

    canvas.addEventListener('mousemove', mouseEventHandler);
    canvas.addEventListener('mousedown', mouseEventHandler);
    canvas.addEventListener('mouseup', mouseEventHandler);

    let running = false;
    (function update() {
        requestAnimationFrame(update);
        if (running) return;
        running = true;
        (exports.run as Function)();
        imageData.data.set(canvasData);
        context.putImageData(imageData, 0, 0);
        running = false;
    })();
};
