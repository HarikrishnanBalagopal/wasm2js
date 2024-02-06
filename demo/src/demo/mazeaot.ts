import { ROOT_ELEM_ID } from "./common";
import { instantiate } from "@haribala/wasm2js";

export const setupMazeAotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled maze demo');
  const outputE = document.querySelector('#' + ROOT_ELEM_ID);
  outputE.innerHTML = '';

  const span_timer = document.createElement('span');
  span_timer.textContent = '0.0 / 0.0';
  span_timer.classList.add('timer');
  outputE.appendChild(span_timer);

  const W = 320;
  const H = 240;
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
      background-color: #555;
      margin: 0;
      width: 100%;
      height: 100%;
    }
    canvas {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
    .timer {
      position: absolute;
      top: 0;
      right: 0;
      font-size: xx-large;
      background-color: #0000009c;
      color: white;
      text-shadow: 1px 1px 2px black;
      width: fit-content;
      padding: 8px;
      margin: 8px;
      font-variant-numeric: tabular-nums;
    }`;
    outputE.appendChild(s);
  }



  // --------------------

  let timerRunning = false;
  let startTime = 0;
  let bestTime = Infinity;
  const now = () => +new Date();
  let env = {
    t: (start: boolean) => {
      if (start) {
        startTime = now();
      } else {
        let elapsed = (now() - startTime);
        if (elapsed < bestTime) {
          bestTime = elapsed;
        }
        // Reuse startTime as the final time in the display.
        startTime = elapsed;
      }
      timerRunning = start;
    },
  };

  setInterval(() => {
    const toSec = (x: number) => { return x == Infinity ? '\u221e' : (x / 1000).toFixed(2); };
    let timer = document.querySelector('.timer');
    let elapsed = timerRunning ? (now() - startTime) : startTime;
    timer.textContent = `${toSec(elapsed)} / ${toSec(bestTime)}`;
  }, 100);

  const importObject: any = { Math, env };
  const instance = instantiate(compiledJSCode, importObject);
  let canvasData = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 0x3000, 307200);
  let context = canvas.getContext('2d');
  let imageData = context.createImageData(320, 240);
  let u8 = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 0, 4);
  let onkey = (down: number, event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowLeft': u8[0] = down; break;
      case 'ArrowRight': u8[1] = down; break;
      case 'ArrowUp': u8[2] = down; break;
      case 'ArrowDown': u8[3] = down; break;
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
