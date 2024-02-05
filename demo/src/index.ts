import { compile } from "@haribala/wasm2js";

import { setupBadGBAotDemo } from "./demo/badgbaot";
import { setupDinoAotDemo } from "./demo/dinoaot";
import { setupFireAotDemo } from "./demo/fireaot";
import { setupMazeAotDemo } from "./demo/mazeaot";
import { setupMetaBallAotDemo } from "./demo/metaballaot";
import { setupModAotDemo } from "./demo/modaot";
import { setupRayAotDemo } from "./demo/rayaot";
import { setupSnakeAotDemo } from "./demo/snakeaot";
import { setupMatch3AotDemo } from "./demo/match3aot";
import { setupQuineAotDemo } from "./demo/quineaot";
import { setupJitAotDemo } from "./demo/jitaot";

const clickHandler = async (target: string) => {
    // const target = (e.target as HTMLOptionElement).value;
    // if (target === default_url) return;

    const wasmUrl = `${window.location.pathname}assets/wasm/${target}.wasm`;
    console.log('fetching wasm module', wasmUrl);
    const response = await fetch(wasmUrl);
    if (!response.ok) throw new Error('failed to fetch');
    const wasmBytes = new Uint8Array(await response.arrayBuffer());
    console.log('wasm module bytes:', wasmBytes);
    // const myAotCompiledJSCode = compile(wasmBytes, true);
    const myAotCompiledJSCode = compile(wasmBytes, false);
    console.log('myAotCompiledJSCode:');
    console.log(myAotCompiledJSCode);

    if (target === 'quine') return await setupQuineAotDemo(myAotCompiledJSCode);
    if (target === 'fire') return await setupFireAotDemo(myAotCompiledJSCode);
    if (target === 'jit') return await setupJitAotDemo(myAotCompiledJSCode);
    if (target === 'dino') return await setupDinoAotDemo(myAotCompiledJSCode);
    if (target === 'snake') return await setupSnakeAotDemo(myAotCompiledJSCode);
    if (target === 'metaball') return await setupMetaBallAotDemo(myAotCompiledJSCode);
    if (target === 'maze') return await setupMazeAotDemo(myAotCompiledJSCode);
    if (target === 'mod') return await setupModAotDemo(myAotCompiledJSCode);
    if (target === 'ray') return await setupRayAotDemo(myAotCompiledJSCode);
    if (target === 'match3') return await setupMatch3AotDemo(myAotCompiledJSCode);
    if (target === 'badgb') return await setupBadGBAotDemo(myAotCompiledJSCode);
    throw new Error(`unsupported demo: ${target}`);
};

const setup = () => {
    console.log('setup start');
    {
        const styleE = document.createElement('style');
        styleE.innerHTML = `
h1 {
    font-family: sans-serif;
}
.div-screenshot-wrapper {
    display: grid;
    background-color: black;
    padding: 0.2em;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.1em;
}
.div-screenshot-wrapper > img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    aspect-ratio: 1;
    cursor: pointer;
}
.div-screenshot-wrapper > img:hover {
    transform: scale(1.2);
    transition: all 0.2s;
}
`;
        document.head.appendChild(styleE);
    }
    // const wasmSelectE = document.createElement('select');
    // const default_url = '---';
    // const urls = [
    //     default_url,
    //     // 'no-start',
    //     // 'test-add-vec2',
    //     // 'add',
    //     // 'fib',
    //     'quine',
    //     'fire',
    //     'jit',
    //     'metaball',
    //     'inflate',
    //     'chip8',
    //     'ray',
    //     'snake',
    //     'dino',
    //     'maze',
    //     'match3',
    //     'mod',
    //     'badgb',
    // ];
    // urls.forEach(s => {
    //     const optionE = document.createElement('option');
    //     optionE.setAttribute('value', s);
    //     optionE.textContent = s;
    //     wasmSelectE.appendChild(optionE);
    // });
    // wasmSelectE.addEventListener('change', e => {
    //     const target = (e.target as HTMLOptionElement).value;
    //     if (target === default_url) return;
    //     clickHandler(target);
    // });
    // const controlsE = document.createElement('div');
    // controlsE.classList.add('controls');
    // controlsE.appendChild(wasmSelectE);

    const rootE = document.querySelector('#root');
    const header = document.createElement('h1');
    header.textContent = 'WASM to JS Demos';
    rootE.appendChild(header);

    const create_link = (s: string, parent?: HTMLElement) => {
        const p_link = document.createElement('a');
        p_link.textContent = s;
        p_link.setAttribute('href', s);
        (parent ? parent : rootE).appendChild(p_link);
        const p_link_br = document.createElement('br');
        (parent ? parent : rootE).appendChild(p_link_br);
    };

    const p_info = document.createElement('p');
    p_info.textContent = 'Each of the below demos were compiled (decompiled?) from a WebAssembly binary to Javascript code using the library:';
    create_link('https://github.com/HarikrishnanBalagopal/wasm2js', p_info);
    create_link('https://www.npmjs.com/package/@haribala/wasm2js', p_info);
    rootE.appendChild(p_info);
    const p_info_ref = document.createElement('p');
    p_info_ref.textContent = 'The demos were taken and adapted to work with Wasm2JS from this repo:';
    create_link('https://github.com/binji/raw-wasm', p_info_ref);
    rootE.appendChild(p_info_ref);
    // rootE.appendChild(controlsE);
    {
        // add screenshots
        const wrapper = document.createElement('div');
        wrapper.classList.add('div-screenshot-wrapper');
        [
            'quine.png',
            'fire.jpg',
            'jit.png',
            'metaball.jpg',
            'inflate.jpg',
            'chip8.jpg',
            'ray.jpg',
            'snake.jpg',
            'dino.png',
            'maze.jpg',
            'match3.jpg',
            'mod.jpg',
            'badgb.png',
        ].forEach(s => {
            const img = document.createElement('img');
            img.setAttribute('src', `${window.location.pathname}assets/images/screenshots/${s}`);
            img.setAttribute('alt', s);
            const target = s.slice(0, s.lastIndexOf('.'));
            console.log('target', target);
            img.addEventListener('click', () => clickHandler(target));
            wrapper.appendChild(img);
        });
        rootE.appendChild(wrapper);
    }
    console.log('setup end');
};

const main = async (): Promise<void> => {
    if (!window || !((window as any).WASM2JS_DEMO_MODE)) return;
    console.log('main start');
    setup();
    console.log('main end');
};

main().catch(console.error);

export { main };
