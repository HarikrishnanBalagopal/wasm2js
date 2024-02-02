import { compileAot, instantiateAot } from "@haribala/wasm2js";

import { ELEM_ID } from "./demo/common";
import { setupBadGBAotDemo } from "./demo/badgbaot";
import { setupDinoAotDemo } from "./demo/dinoaot";
import { setupFireAotDemo } from "./demo/fireaot";
import { setupMazeAotDemo } from "./demo/mazeaot";
import { setupMetaBallAotDemo } from "./demo/metaballaot";
import { setupModAotDemo } from "./demo/modaot";
import { setupRayAotDemo } from "./demo/rayaot";
import { setupSnakeAotDemo } from "./demo/snakeaot";
import { setupTestAddVec2AotDemo } from "./demo/testaddvec2aot";
import { setupFibAotDemo } from "./demo/fibaot";
import { setupMatch3AotDemo } from "./demo/match3aot";
import { setupQuineAotDemo } from "./demo/quineaot";
import { setupJitAotDemo } from "./demo/jitaot";

const setup = () => {
    console.log('setup start');
    const wasmSelectE = document.createElement('select');
    const default_url = '---';
    const urls = [
        default_url,
        // 'no-start',
        // 'test-add-vec2',
        // 'add',
        // 'fib',
        'quine',
        'fire',
        'jit',
        'metaball',
        'inflate',
        'chip8',
        'ray',
        'snake',
        'dino',
        'maze',
        'match3',
        'mod',
        'badgb',
    ];
    urls.forEach(s => {
        const optionE = document.createElement('option');
        optionE.setAttribute('value', s);
        optionE.textContent = s;
        wasmSelectE.appendChild(optionE);
    });
    wasmSelectE.addEventListener('change', async (e) => {
        const target = (e.target as HTMLOptionElement).value;
        if (target === default_url) return;

        const wasmUrl = `${window.location.pathname}assets/wasm/${target}.wasm`;
        console.log(wasmUrl);
        const response = await fetch(wasmUrl);
        if (!response.ok) throw new Error('failed to fetch');
        const wasmBytes = new Uint8Array(await response.arrayBuffer());
        console.log('wasm module bytes:', wasmBytes);
        const myAotCompiledJSCode = await compileAot(wasmBytes, true);
        // const myAotCompiledJSCode = await compileAot(wasmBytes, false);
        console.log('myAotCompiledJSCode:');
        console.log(myAotCompiledJSCode);

        if (target === 'fire') return await setupFireAotDemo(myAotCompiledJSCode);
        if (target === 'quine') return await setupQuineAotDemo(myAotCompiledJSCode);
        if (target === 'jit') return await setupJitAotDemo(myAotCompiledJSCode);
        if (target === 'test-add-vec2') return await setupTestAddVec2AotDemo(myAotCompiledJSCode);
        if (target === 'fib') return await setupFibAotDemo(myAotCompiledJSCode);
        if (target === 'dino') return await setupDinoAotDemo(myAotCompiledJSCode);
        if (target === 'snake') return await setupSnakeAotDemo(myAotCompiledJSCode);
        if (target === 'metaball') return await setupMetaBallAotDemo(myAotCompiledJSCode);
        if (target === 'maze') return await setupMazeAotDemo(myAotCompiledJSCode);
        if (target === 'mod') return await setupModAotDemo(myAotCompiledJSCode);
        if (target === 'ray') return await setupRayAotDemo(myAotCompiledJSCode);
        if (target === 'match3') return await setupMatch3AotDemo(myAotCompiledJSCode);
        if (target === 'badgb') return await setupBadGBAotDemo(myAotCompiledJSCode);
        throw new Error(`unsupported demo: ${target}`);
    });
    const controlsE = document.createElement('div');
    controlsE.classList.add('controls');
    controlsE.appendChild(wasmSelectE);
    const outputE = document.createElement('div');
    outputE.id = ELEM_ID;
    outputE.classList.add('output');
    const rootE = document.querySelector('#root');
    rootE.appendChild(controlsE);
    rootE.appendChild(outputE);
    console.log('setup end');
};

const main = async (): Promise<void> => {
    if (!window || !((window as any).WASM2JS_DEMO_MODE)) return;
    console.log('main start');
    setup();
    console.log('main end');
};

main().catch(console.error);

export {
    main,
    compileAot,
    instantiateAot,
};
