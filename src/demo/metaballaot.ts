import { ELEM_ID } from "./common";
import { instantiateAot } from "../parser/aotcompiler";

export const setupMetaBallAotDemo = async (compiledJSCode: string) => {
    console.log('setting up the AOT compiled snake demo');
    const outputE = document.querySelector('#' + ELEM_ID);
    outputE.innerHTML = '';

    const W = 320;
    const H = 200;
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
        background-color: #d4195d;
        margin: 0;
        width: 100%;
        height: 100%;
      }
      canvas {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }`;
        outputE.appendChild(s);
    }

    let blobCount = Math.min(Math.max((window.outerWidth / 80), 4), 10) | 0;
    let blobs: any = null;
    document.body.addEventListener('click', () => blobs && blobs(blobCount), true);

    const imports = { '': { rand: Math.random } };
    const instance = await instantiateAot(compiledJSCode, imports);
    console.log('AOT metaball instance', instance);

    blobs = instance.exports.blobs;
    blobs(blobCount);
    const canvasData = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 1024, 256000);
    const context = canvas.getContext('2d');
    const imageData = context.createImageData(320, 200);
    (function update() {
        requestAnimationFrame(update);
        (instance.exports.run as Function)();
        imageData.data.set(canvasData);
        context.putImageData(imageData, 0, 0);
    })();
};
