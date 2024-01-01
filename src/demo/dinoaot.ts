import { ELEM_ID } from "./common";
import { instantiateAot } from "../parser/aotcompiler";

export const setupDinoAotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled dino demo');
  const outputE = document.querySelector('#' + ELEM_ID);
  outputE.innerHTML = '';

  const W = 300;
  const H = 75;
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

  const imports: any = { Math };
  const instance = await instantiateAot(compiledJSCode, imports);
  console.log('AOT dino instance', instance);

  const canvasData = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 0x5000, 90000);
  const context = canvas.getContext('2d');
  const imageData = context.createImageData(W, H);
  const u8 = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 0, 4);
  const onkey = (down: boolean, event: KeyboardEvent) => {
    let bit;
    switch (event.code) {
      case 'ArrowUp': bit = 1; break;
      case 'ArrowDown': bit = 2; break;
      default: return;
    }
    if (down) {
      u8[0] |= bit;
    } else {
      u8[0] &= ~bit;
    }
  };
  document.addEventListener('keydown', onkey.bind(null, 1), false);
  document.addEventListener('keyup', onkey.bind(null, 0), false);

  let error = null;
  console.log('done setting up the dino demo');
  (function update() {
    if(error) return;
    requestAnimationFrame(update);
    // console.log('started rendering frame');
    try {
      (instance.exports.run as CallableFunction)();
    } catch (e) {
      console.error('failed to update. error:', e);
      error = e;
    }
    imageData.data.set(canvasData);
    context.putImageData(imageData, 0, 0);
    // console.log('done rendering frame');
  })();

  // const imports = { '': { rand: Math.random } };
  // const instance = (await WebAssembly.instantiateStreaming( fetch('/assets/wasm/dino.wasm'), imports)).instance;
  // // const instance = await instantiate(compiledModule, imports);
  // console.log('dino instance', instance);
  // //    const instance = new WebAssembly.Instance(new WebAssembly.Module(data), imports);
  // const canvasData = new Uint8Array((instance.exports.mem as unknown as Uint8Array).buffer, 53760, 215040);

  // const context = canvas.getContext('2d');
  // context.fillStyle = 'black';
  // context.fillRect(0, 0, W, H);
  // const imageData = context.createImageData(W, H);

  // let running = false;
  // const update = () => {
  //     requestAnimationFrame(update);
  //     if (running) return;
  //     running = true;
  //     (instance.exports.run as Function)();
  //     imageData.data.set(canvasData);
  //     context.putImageData(imageData, 0, 0);
  //     running = false;
  // };

  // const wot1 = new Uint8Array(327680);
  // wot1.fill(36);
  // console.log('wot1', wot1);
  // const wot = new Uint8Array(wot1.buffer, 53760, 215040);
  // imageData.data.set(wot);
  // context.putImageData(imageData, 0, 0);


  // update();
};
