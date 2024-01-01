import { ELEM_ID } from "./common";
import { compile, instantiate } from "../parser/compiler";
import { MyWasmModule } from "../parser/types";

export const setupFireDemo = async (compiledModule: MyWasmModule) => {
    console.log('setting up the fire demo');
    const outputE = document.querySelector('#' + ELEM_ID);
    // console.log(outputE);
    outputE.innerHTML = '';

    const W = 320;
    const H = 168;
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
            justify-content: flex-end;
            background-color: #070707;
            margin: 0;
            width: 100%;
            height: 100%;
          }
          canvas {
            width: 100vw;
            height: 52.5vw;
          }`;
        outputE.appendChild(s);
    }

    const imports = { '': { rand: Math.random } };
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire2.wasm'), imports)).instance;
    // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/fire.wasm'), imports)).instance;
    const instance = await instantiate(compiledModule, imports);
    console.log('fire instance', instance);
    //    const instance = new WebAssembly.Instance(new WebAssembly.Module(data), imports);
    const canvasData = new Uint8Array((instance.exports.mem as unknown as Uint8Array).buffer, 53760, 215040);

    const context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, W, H);
    const imageData = context.createImageData(W, H);

    let running = false;
    const update = () => {
        requestAnimationFrame(update);
        if (running) return;
        running = true;
        (instance.exports.run as Function)();
        imageData.data.set(canvasData);
        context.putImageData(imageData, 0, 0);
        running = false;
    };

    // const wot1 = new Uint8Array(327680);
    // wot1.fill(36);
    // console.log('wot1', wot1);
    // const wot = new Uint8Array(wot1.buffer, 53760, 215040);
    // imageData.data.set(wot);
    // context.putImageData(imageData, 0, 0);


    update();
};
