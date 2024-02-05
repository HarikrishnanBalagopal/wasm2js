import { ROOT_ELEM_ID } from "./common";
import { instantiate } from "@haribala/wasm2js";
// import {dat} from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.6/build/dat.gui.min.js';

export const setupRayAotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled ray demo');
  const outputE = document.querySelector('#' + ROOT_ELEM_ID);
  outputE.innerHTML = '';
  // outputE.innerHTML = `<script src="https://cdn.jsdelivr.net/npm/dat.gui@0.7.6/build/dat.gui.min.js"></script>
  // <canvas width="320" height="200"></canvas>`;
  outputE.innerHTML = `<canvas width="320" height="200"></canvas>`;
  // const {dat} = await import('https://cdn.jsdelivr.net/npm/dat.gui@0.7.6/build/dat.gui.min.js');

  {
    const s = document.createElement('style');
    s.innerHTML = `body {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: #ccc;
      margin: 0;
      width: 100%;
      height: 100%;
    }
    canvas {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .ui-wrap {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.25);
      width: 30%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;

      display: none;
    }
    .ui {
      padding: 1em;
      margin: auto;
    }
    .value {
      min-width: 4em;
    }`;
    outputE.appendChild(s);
  }

  let mem: Uint8Array | undefined = undefined;
  const importObject: any = { Math };
  const instance = instantiate(compiledJSCode, importObject);

  let canvasData = new Uint8Array((instance.exports.mem as Uint8Array).buffer, 1024, 256000);
  let canvas = document.querySelector('canvas');
  let context = canvas.getContext('2d');
  let imageData = context.createImageData(320, 200);
  mem = (instance.exports.mem as Uint8Array);
  setTimeout(() => {
    let ranges = [
      ['x.a', -10, 10, 0.1],
      ['x.b', -3, 3, 0.01],
      ['x.c', 0, 2 * Math.PI, 0.1],
      ['x.d', -10, 10, 0.1],

      ['y.a', -10, 10, 0.1],
      ['y.b', -3, 3, 0.01],
      ['y.c', 0, 2 * Math.PI, 0.1],
      ['y.d', -20, 10, 0.1],

      ['z.a', -10, 10, 0.1],
      ['z.b', -3, 3, 0.01],
      ['z.c', 0, 2 * Math.PI, 0.1],
      ['z.d', -30, -5, 0.1],

      ['r.a', -3, 3, 0.1],
      ['r.b', -3, 3, 0.01],
      ['r.c', 0, 2 * Math.PI, 0.1],
      ['r.d', 0, 5, 0.1],

      ['R.a', 0, 1, 0.01],
      ['R.b', -3, 3, 0.01],
      ['R.c', 0, 2 * Math.PI, 0.1],
      ['R.d', 0, 1, 0.01],

      ['G.a', 0, 1, 0.01],
      ['G.b', -3, 3, 0.01],
      ['G.c', 0, 2 * Math.PI, 0.1],
      ['G.d', 0, 1, 0.01],

      ['B.a', 0, 1, 0.01],
      ['B.b', -3, 3, 0.01],
      ['B.c', 0, 2 * Math.PI, 0.1],
      ['B.d', 0, 1, 0.01],
    ];

    let spheres: any = [{}, {}, {}];
    let gui = new (window as any).dat.GUI();

    function updateUI() {
      for (let i = 0; i < 3; ++i) {
        let f = gui.addFolder(`sphere ${i}`);
        let f32 = new Float32Array(mem.buffer, 124 + i * 16 * 7, 16 * 7);
        let j = 0;
        for (let j = 0; j < ranges.length; ++j) {
          let [name, min, max, step] = ranges[j];
          spheres[i][name] = f32[j];
          f.add(spheres[i], name, min, max, step).onChange((value: any) => {
            f32[j] = value;
          });
        }
      }
    }

    (function update(time: number) {
      requestAnimationFrame(update);
      (instance.exports.run as Function)(time);
      imageData.data.set(canvasData);
      context.putImageData(imageData, 0, 0);
    })(0.0);

    updateUI();
  }, 10.0);

};
