import { ROOT_ELEM_ID } from "./common";
import { instantiate } from "@haribala/wasm2js";

export const setupChip8AotDemo = async (compiledJSCode: string) => {
    console.log('setting up the AOT compiled chip8 demo');
    const outputE = document.querySelector('#' + ROOT_ELEM_ID);
    // console.log(outputE);
    outputE.innerHTML = '';

    const W = 64;
    const H = 32;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    outputE.appendChild(canvas);
    {
        const s = document.createElement('style');
        s.innerHTML = `
body {
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
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
}
`;
        outputE.appendChild(s);
        // <button id="load">load</button>
        const button = document.createElement('button');
        button.setAttribute('id', 'load');
        button.textContent = 'load';
        outputE.appendChild(button);
        // <input type="file" id="openfile" hidden>
        const inputE = document.createElement('input');
        inputE.setAttribute('type', 'file');
        inputE.setAttribute('id', 'openfile');
        inputE.setAttribute('hidden', 'true');
        outputE.appendChild(inputE);
    }

    let $ = (s: string) => document.querySelector(s);
    let step = 20;
    let keyDownFn: Function;
    let keyUpFn: Function;

    const defaultRomBytes = (new Uint8Array([
        0x63, 0x07, 0xc1, 0xff, 0xa2, 0x6c, 0xf1, 0x1e, 0xf0, 0x65, 0x40, 0x00,
        0x12, 0x02, 0x84, 0x00, 0xc5, 0x1f, 0xa2, 0x4c, 0xf5, 0x1e, 0xf0, 0x65,
        0xc8, 0x03, 0x48, 0x00, 0x12, 0x26, 0x86, 0x40, 0x86, 0x02, 0x46, 0x00,
        0x12, 0x02, 0xa3, 0x6c, 0x80, 0x60, 0xf0, 0x55, 0x84, 0x63, 0xa2, 0x6c,
        0xf1, 0x1e, 0x80, 0x40, 0xf0, 0x55, 0xa3, 0x6c, 0x82, 0x10, 0x81, 0x32,
        0x81, 0x1e, 0x81, 0x1e, 0x81, 0x1e, 0x82, 0x26, 0x82, 0x26, 0x82, 0x26,
        0xd1, 0x21, 0x12, 0x02, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x81,
        0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xc1, 0x83, 0x0f, 0x1e, 0x3c, 0x78,
        0xf0, 0xe1, 0xc3, 0x87, 0x1f, 0x3e, 0x7c, 0xf8, 0xf1, 0xe3, 0xc7, 0x8f,
        0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xc7, 0xff, 0xff,
        0xff, 0xff, 0xff, 0xff, 0xff, 0x83, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0x02, 0x3f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x04, 0x1f, 0xf8,
        0x67, 0xcf, 0x13, 0x3f, 0xfc, 0x84, 0x0f, 0xf9, 0xa7, 0x8e, 0x73, 0x7f,
        0xf8, 0x68, 0x0f, 0xf9, 0xa7, 0x96, 0x70, 0xff, 0xf8, 0x18, 0x13, 0xf8,
        0x67, 0x36, 0x70, 0xff, 0xf0, 0x04, 0x21, 0xf9, 0xa7, 0x02, 0x73, 0x7f,
        0xe0, 0x02, 0x40, 0xf8, 0x21, 0x3a, 0x73, 0x3f, 0xc0, 0x02, 0x81, 0xf8,
        0x61, 0x3b, 0x13, 0x3f, 0xc0, 0x43, 0x02, 0x7f, 0xff, 0xff, 0xff, 0xff,
        0x80, 0xfe, 0x04, 0x3f, 0xff, 0xff, 0xff, 0xff, 0x80, 0xff, 0x08, 0x39,
        0xc9, 0xd0, 0xc3, 0xff, 0xc0, 0x3f, 0x90, 0x79, 0xc9, 0xd3, 0x9f, 0xff,
        0xc0, 0x0f, 0xe0, 0xf9, 0xc9, 0xd3, 0x9f, 0xff, 0xe0, 0x07, 0xe1, 0x79,
        0xcc, 0xb0, 0xc7, 0xff, 0xf0, 0x03, 0x12, 0x79, 0xcc, 0xb3, 0xe3, 0xff,
        0xf8, 0x03, 0x0c, 0xf8, 0x4e, 0x70, 0x87, 0xff, 0xfc, 0x03, 0x00, 0xf8,
        0x4e, 0x70, 0x87, 0xff, 0xfc, 0x01, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xfe, 0x01, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01, 0x01, 0xf9,
        0xce, 0x61, 0x08, 0x47, 0xff, 0x00, 0x03, 0xf9, 0xcc, 0x61, 0x09, 0xc3,
        0xff, 0x80, 0x03, 0xf8, 0x4c, 0xb3, 0x99, 0xcb, 0xff, 0x80, 0x07, 0xf8,
        0x09, 0xb3, 0x98, 0x43, 0xff, 0x07, 0x87, 0xf9, 0x28, 0x13, 0x99, 0xc7,
        0xff, 0x03, 0x87, 0xf9, 0x29, 0xd3, 0x98, 0x43, 0xff, 0x01, 0x07, 0xf9,
        0xe9, 0xd3, 0x98, 0x49, 0xff, 0x01, 0x07, 0xff, 0xff, 0xff, 0xff, 0xff,
        0xff, 0x01, 0x07, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x01, 0x07, 0xff,
        0xff, 0xff, 0xff, 0xff, 0x00
    ])).buffer;

    const my_open_file = ($('#openfile') as HTMLInputElement);
    $('#load').addEventListener('click', () => { my_open_file.click(); });

    // let module;
    (async function () {
        // let response = await fetch('chip8.wasm');
        // let bytes = await response.arrayBuffer();
        // module = await WebAssembly.compile(bytes);
        loadRom(defaultRomBytes);
    })();

    function readFile(file: File): Promise<ArrayBuffer> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = event => reject((event as any).error);
            reader.onloadend = event => resolve(event.target.result as ArrayBuffer);
            reader.readAsArrayBuffer(file);
        });
    }

    my_open_file.addEventListener('change', async event => {
        let file = (event.target as HTMLInputElement).files[0];
        if (!file) return;

        let romBytes = await readFile(file);
        loadRom(romBytes);
    });

    async function loadRom(romBytes: ArrayBufferLike) {
        // let instance = await WebAssembly.instantiate(module, { Math });
        // let instance = await WebAssembly.instantiate(module, { Math });
        const importObject: any = { Math };
        const instance = instantiate(compiledJSCode, importObject);
        let mem = instance.exports.mem as Uint8Array;

        let u16 = new Uint16Array(mem.buffer, 0x10, 1);
        let setkey = (index: number, down: boolean) => {
            if (down) {
                u16[0] |= (1 << index);
            } else {
                u16[0] &= ~(1 << index);
            }
        };

        let onkey = (down: boolean, event: KeyboardEvent) => {
            switch (event.code) {
                case 'Digit1': setkey(1, down); break;
                case 'Digit2': setkey(2, down); break;
                case 'Digit3': setkey(3, down); break;
                case 'Digit4': setkey(12, down); break;
                case 'KeyQ': setkey(4, down); break;
                case 'KeyW': setkey(5, down); break;
                case 'KeyE': setkey(6, down); break;
                case 'KeyR': setkey(13, down); break;
                case 'KeyA': setkey(7, down); break;
                case 'KeyS': setkey(8, down); break;
                case 'KeyD': setkey(9, down); break;
                case 'KeyF': setkey(14, down); break;
                case 'KeyZ': setkey(10, down); break;
                case 'KeyX': setkey(0, down); break;
                case 'KeyC': setkey(11, down); break;
                case 'KeyV': setkey(15, down); break;
                case 'ArrowUp': setkey(5, down); break;
                case 'ArrowLeft': setkey(7, down); break;
                case 'ArrowDown': setkey(8, down); break;
                case 'ArrowRight': setkey(9, down); break;
            }
        };
        if (keyDownFn) { window.removeEventListener('keydown', keyDownFn as any); }
        if (keyUpFn) { window.removeEventListener('keyup', keyUpFn as any); }
        keyDownFn = onkey.bind(null, 1);
        keyUpFn = onkey.bind(null, 0);
        window.addEventListener('keydown', keyDownFn as any, false);
        window.addEventListener('keyup', keyUpFn as any, false);

        let rom = new Uint8Array(mem.buffer, 0x200, 0xe00);
        rom.set(new Uint8Array(romBytes));

        // let canvas = document.querySelector('canvas');
        let canvasData = new Uint8Array(mem.buffer, 0x1000, 8192);
        let context = canvas.getContext('2d');
        let imageData = context.createImageData(64, 32);

        (function update() {
            requestAnimationFrame(update);
            if (step) {
                (instance.exports.run as Function)(step);
            }
            imageData.data.set(canvasData);
            context.putImageData(imageData, 0, 0);
        })();
    }
};
