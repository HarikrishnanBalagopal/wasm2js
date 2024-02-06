import { ROOT_ELEM_ID } from "./common";
import { instantiate } from "@haribala/wasm2js";

export const setupSnakeAotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled snake demo');
  const outputE = document.querySelector('#' + ROOT_ELEM_ID);
  outputE.innerHTML = '';

  const W = 240;
  const H = 320;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  outputE.appendChild(canvas);
  {
    const s = document.createElement('style');
    s.innerHTML = `
    body{
      margin: 0;
    }
    #${ROOT_ELEM_ID} {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: #555;
      margin: 0;
      width: 100%;
      height: 100%;
    }
    canvas {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }`;
    outputE.appendChild(s);
  }

  const imports: any = { Math };
  const instance = instantiate(compiledJSCode, imports);
  console.log('AOT snake instance', instance);

  const canvasData = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 0x15000, 307200);
  const context = canvas.getContext('2d');
  const imageData = context.createImageData(240, 320);
  const u8 = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 0x2c0, 2);
  let onkey = (down: number, event: KeyboardEvent) => {
    switch (event.code) {
      default:
      case 'ArrowLeft': u8[0] = down; break;
      case 'ArrowRight': u8[1] = down; break;
    }
  };
  document.addEventListener('keydown', onkey.bind(null, 1), false);
  document.addEventListener('keyup', onkey.bind(null, 0), false);

  (function update() {
    requestAnimationFrame(update);
    (instance.exports.run as Function)();
    imageData.data.set(canvasData);
    context.putImageData(imageData, 0, 0);
  })();
};
