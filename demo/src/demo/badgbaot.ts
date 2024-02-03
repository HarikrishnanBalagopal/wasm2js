import { ELEM_ID } from "./common";
import { instantiate } from "@haribala/wasm2js";

export const setupBadGBAotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled BadGB demo');
  const outputE = document.querySelector('#' + ELEM_ID);
  outputE.innerHTML = `<div id="game">
  <canvas width="160" height="144"></canvas>
</div>
<button id="load" class="capsuleBtn">Load</button>
<div id="gp">
  <div id="gp_dpad">
    <div id="gp_left"></div>
    <div id="gp_right"></div>
    <div id="gp_up"></div>
    <div id="gp_down"></div>
  </div>
  <div id="gp_select" class="capsuleBtn">Select</div>
  <div id="gp_start" class="capsuleBtn">Start</div>
  <div id="gp_b" class="roundBtn">B</div>
  <div id="gp_a" class="roundBtn">A</div>
</div>
<input type="file" id="openfile" hidden>`;

  {
    const s = document.createElement('style');
    s.innerHTML = `/* mobile gamepad CSS and JS copied from
    https://github.com/chrismaltby/gb-studio/blob/v2beta/appData/js-emulator/index.html
    (see LICENSE.gbstudio)
    */
    body {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: #eee;
      margin: 0;
      width: 100%;
      height: 100%;
      user-select: none;
      -webkit-user-select: none;
    }
    
    #game {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      touch-action: none;
      text-align: center;
    }
    
    #load {
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      opacity: 0.5;
    }
    
    canvas {
      object-fit: contain;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
      height: 100%;
    }
    
    #gp {
      display: none;
      position: fixed;
      bottom: 0px;
      height: 210px;
      width: 100%;
      touch-action: none;
      opacity: 0.8;
    }
    
    #gp_dpad {
      position: absolute;
      bottom: 20px;
      left: 0px;
      width: 184px;
      height: 184px;
    }
    
    #gp_dpad:before {
      content: "";
      display: block;
      width: 48px;
      height: 48px;
      background: #5c5c5c;
      background: radial-gradient(
        ellipse at center,
        #5c5c5c 0%,
        #555 59%,
        #5c5c5c 60%
      );
      position: absolute;
      left: 68px;
      top: 68px;
    }
    
    #gp_left {
      position: absolute;
      left: 20px;
      top: 68px;
      width: 48px;
      height: 48px;
      background: #666;
      background: radial-gradient(ellipse at center, #666 0%, #5c5c5c 80%);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    
    #gp_right {
      position: absolute;
      left: 116px;
      top: 68px;
      width: 48px;
      height: 48px;
      background: #666;
      background: radial-gradient(ellipse at center, #666 0%, #5c5c5c 80%);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    
    #gp_up {
      position: absolute;
      left: 68px;
      top: 20px;
      width: 48px;
      height: 48px;
      background: #666;
      background: radial-gradient(ellipse at center, #666 0%, #5c5c5c 80%);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    
    #gp_down {
      position: absolute;
      left: 68px;
      top: 116px;
      width: 48px;
      height: 48px;
      background: #666;
      background: radial-gradient(ellipse at center, #666 0%, #5c5c5c 80%);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    
    #gp_a {
      position: absolute;
      bottom: 110px;
      right: 20px;
    }
    
    #gp_b {
      position: absolute;
      bottom: 80px;
      right: 100px;
    }
    
    .roundBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 32px;
      color: #440f1f;
      line-height: 64px;
      width: 64px;
      height: 64px;
      border-radius: 64px;
      background: #870a4c;
      background: radial-gradient(ellipse at center, #ab1465 0%, #8b1e57 100%);
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    }
    
    .capsuleBtn {
      font-weight: bold;
      font-size: 10px;
      color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 40px;
      text-transform: uppercase;
      width: 64px;
      height: 32px;
      border-radius: 40px;
      background: #222;
      background: radial-gradient(ellipse at center, #666 0%, #555 100%);
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    }
    
    #gp_start {
      position: absolute;
      bottom: 20px;
      right: 15px;
    }
    
    #gp_select {
      position: absolute;
      bottom: 20px;
      right: 100px;
    }
    
    .btnPressed {
      opacity: 0.5;
    }
    
    @media only screen and (max-width: 640px) {
      #game canvas {
        margin-top: 0px;
        width: 100%;
        max-width: 480px;
        border: 0px;
        border-radius: 0px;
      }
    }
    
    @media only screen and (max-device-width: 812px) and (orientation: portrait) {
      body {
        margin: 0;
      }
    
      #game {
        width: 100%;
        position: fixed;
        touch-action: none;
      }
    
      #game canvas {
        margin: 0;
        display: block;
        width: 100% !important;
        height: auto !important;
      }
    }
    
    @media only screen and (max-device-width: 320px) and (orientation: portrait) {
      #gp_dpad {
        left: -5px;
        bottom: -5px;
      }
    
      #gp_a {
        right: 5px;
        bottom: 95px;
      }
    
      #gp_b {
        right: 80px;
      }
    
      #gp_start {
        right: 5px;
      }
    
      #gp_select {
        right: 80px;
      }
    }
    
    @media only screen and (max-width: 500px) and (max-height: 400px) {
      #gp {
        display: none;
      }
    }
    
    /* Small devices in landscape */
    @media only screen and (max-device-width: 300px) and (orientation: landscape) {
      html,
      body {
        height: 100%;
      }
      body {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    
      #game:after {
        content: "PLEASE ROTATE ↻";
        font-size: 24px;
        font-weight: bold;
        color: #fff;
      }
    
      #game canvas {
        display: none;
        max-width: 480px;
      }
    
      #gp {
        display: none;
      }
    }
    
    /* Devices large enough for landscape */
    @media only screen and (min-width: 300px) and (orientation: landscape) {
      #gp {
        bottom: 50%;
        transform: translateY(50%);
        opacity: 0.5;
      }
    }`;
    outputE.appendChild(s);
  }

  // -----------------------------------------

  const $ = document.querySelector.bind(document);
  const w = 160, h = 144;
  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const imageData = context.createImageData(w, h);
  const deadzone = 0.1;

  $('#load').addEventListener('click', () => { $('#openfile').click(); });

  let module: any, emulator: any;
  (async function () {
    // let response = await fetch('badgb.wasm');
    // let bytes = await response.arrayBuffer();
    // module = await WebAssembly.compile(bytes);

    // Load porklike by default
    let romResponse = await fetch('/assets/wasm/porklike.gb');
    let romBytes = await romResponse.arrayBuffer();
    // let instance = await WebAssembly.instantiate(module);
    let instance = instantiate(compiledJSCode, {});
    emulator = new Emulator(instance, romBytes);
  })();

  $('#openfile').addEventListener('change', async (event: any) => {
    let file = event.target.files[0];
    if (!file) return;

    if (emulator) emulator.destroy();

    let romBytes = await readFile(file);
    // let instance = await WebAssembly.instantiate(module);
    let instance = instantiate(compiledJSCode, {});
    emulator = new Emulator(instance, romBytes);
  });

  function readFile(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = (event: any) => reject(event.error);
      reader.onloadend = event => resolve(event.target.result);
      reader.readAsArrayBuffer(file);
    });
  }

  let myerror: any = null;

  class Emulator {
    exports: any;
    canvasData: Uint8Array;
    extram: Uint8Array;
    keys: Uint8Array;
    bindings: { sel: string; type: string; fn: any; }[];
    touchEnabled: boolean;
    extramIntervalId: number;
    sha1: string;
    running: boolean;
    constructor(instance: any, romBytes: any) {
      this.exports = instance.exports;
      const buffer = this.exports.mem.buffer;

      this.canvasData = new Uint8Array(buffer, 0x118000, w * h * 4);
      const romData = new Uint8Array(buffer, 0x10000, 1 << 20);
      this.extram = new Uint8Array(buffer, 0x110000, 0x8000);
      romData.set(new Uint8Array(romBytes));
      this.keys = new Uint8Array(buffer, 0x0c, 4);

      this.bindings = [
        { sel: '', type: 'keydown', fn: this.onKey.bind(this, true) },
        { sel: '', type: 'keyup', fn: this.onKey.bind(this, false) },
        { sel: '#gp_select', type: 'touchstart', fn: this.btnTouch.bind(this, 2, 1, true) },
        { sel: '#gp_select', type: 'touchend', fn: this.btnTouch.bind(this, 2, 1, false) },
        { sel: '#gp_start', type: 'touchstart', fn: this.btnTouch.bind(this, 3, 1, true) },
        { sel: '#gp_start', type: 'touchend', fn: this.btnTouch.bind(this, 3, 1, false) },
        { sel: '#gp_b', type: 'touchstart', fn: this.btnTouch.bind(this, 1, 1, true) },
        { sel: '#gp_b', type: 'touchend', fn: this.btnTouch.bind(this, 1, 1, false) },
        { sel: '#gp_a', type: 'touchstart', fn: this.btnTouch.bind(this, 0, 1, true) },
        { sel: '#gp_a', type: 'touchend', fn: this.btnTouch.bind(this, 0, 1, false) },
        { sel: '#gp_dpad', type: 'touchstart', fn: this.dpadTouchStartMove.bind(this) },
        { sel: '#gp_dpad', type: 'touchmove', fn: this.dpadTouchStartMove.bind(this) },
        { sel: '#gp_dpad', type: 'touchend', fn: this.dpadTouchEnd.bind(this) },
        { sel: '', type: 'touchstart', fn: this.touchRestore.bind(this) },
      ];

      this.updateBinding(true);
      this.touchEnabled = 'ontouchstart' in document.documentElement;
      this.updateOnscreenGamepad();

      // Save ExtRam
      this.extramIntervalId = -1;
      crypto.subtle.digest('sha-1', romBytes).then(result => {
        this.sha1 = Array.from(new Uint8Array(result)).map(x => x.toString(16).padStart(2, '0')).join('');
        const loadedExtram = localStorage.getItem(this.sha1);
        if (loadedExtram) {
          this.extram.set(JSON.parse(loadedExtram));
        }
        this.extramIntervalId = setInterval(() => {
          localStorage.setItem(this.sha1,
            JSON.stringify(Array.from(this.extram)));
        }, 1000);
      }).finally(() => {
        this.running = true;
        this.update();
      });
    }

    destroy() {
      clearInterval(this.extramIntervalId);
      this.running = false;
      this.updateBinding(false);
    }

    updateBinding(bind: any) {
      for (let binding of this.bindings) {
        const el = binding.sel ? $(binding.sel) : window;
        if (bind) {
          el.addEventListener(binding.type, binding.fn);
        } else {
          el.removeEventListener(binding.type, binding.fn);
        }
      }
    }

    setKey(index: any, isButton: any, down: boolean) {
      const clearMask = 1 << index;
      const setMask = ~(down ? clearMask : 0);
      const f = (i: any) => this.keys[i] = (this.keys[i] | clearMask) & setMask;
      f(isButton ? 2 : 1);
      f(3);
    }

    setJoypRight(down: boolean) { this.setKey(0, 0, down); }
    setJoypLeft(down: boolean) { this.setKey(1, 0, down); }
    setJoypUp(down: boolean) { this.setKey(2, 0, down); }
    setJoypDown(down: boolean) { this.setKey(3, 0, down); }
    setJoypA(down: boolean) { this.setKey(0, 1, down); }
    setJoypB(down: boolean) { this.setKey(1, 1, down); }
    setJoypSelect(down: boolean) { this.setKey(2, 1, down); }
    setJoypStart(down: boolean) { this.setKey(3, 1, down); }

    onKey(down: boolean, event: KeyboardEvent) {
      switch (event.code) {
        case 'ArrowDown': this.setJoypDown(down); break;
        case 'ArrowUp': this.setJoypUp(down); break;
        case 'ArrowLeft': this.setJoypLeft(down); break;
        case 'ArrowRight': this.setJoypRight(down); break;
        case 'Enter': this.setJoypStart(down); break;
        case 'Tab': this.setJoypSelect(down); break;
        case 'KeyZ': this.setJoypB(down); break;
        case 'KeyX': this.setJoypA(down); break;
      }

      if (down && this.touchEnabled) {
        this.touchEnabled = false;
        this.updateOnscreenGamepad();
      }
      event.preventDefault();
    }

    update() {
      if(myerror) return;
      if (this.running) {
        requestAnimationFrame(this.update.bind(this));
      }
      try {
        this.exports.run();
      } catch(e) {
        console.error('failed to error:', e);
        myerror = e;
      }
      imageData.data.set(this.canvasData);
      context.putImageData(imageData, 0, 0);
    }

    updateOnscreenGamepad() {
      $('#gp').style.display = this.touchEnabled ? 'block' : 'none';
    }

    btnTouch(index: number, isButton: boolean, down: boolean) {
      this.setKey(index, isButton, down);
      (event.currentTarget as any).classList.toggle('btnPressed', down);
      event.preventDefault();
    }

    dpadTouchStartMove(event: any) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (2 * (event.targetTouches[0].clientX - rect.left)) / rect.width - 1;
      const y = (2 * (event.targetTouches[0].clientY - rect.top)) / rect.height - 1;

      if (Math.abs(x) > deadzone) {
        if (y > x && y < -x) {
          this.setJoypLeft(true);
          this.setJoypRight(false);
        } else if (y < x && y > -x) {
          this.setJoypLeft(false);
          this.setJoypRight(true);
        }
      } else {
        this.setJoypLeft(false);
        this.setJoypRight(false);
      }

      if (Math.abs(y) > deadzone) {
        if (x > y && x < -y) {
          this.setJoypUp(true);
          this.setJoypDown(false);
        } else if (x < y && x > -y) {
          this.setJoypUp(false);
          this.setJoypDown(true);
        }
      } else {
        this.setJoypUp(false);
        this.setJoypDown(false);
      }
      event.preventDefault();
    }

    dpadTouchEnd(event: any) {
      this.setJoypLeft(false);
      this.setJoypRight(false);
      this.setJoypUp(false);
      this.setJoypDown(false);
      event.preventDefault();
    }

    touchRestore() {
      this.touchEnabled = true;
      this.updateOnscreenGamepad();
    }
  }
};
