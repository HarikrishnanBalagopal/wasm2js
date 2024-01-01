import { setupBadGBAotDemo } from "./demo/badgbaot";
import { ELEM_ID } from "./demo/common";
import { setupDinoAotDemo } from "./demo/dinoaot";
import { setupFireDemo } from "./demo/fire";
import { setupFireAotDemo } from "./demo/fireaot";
import { setupMazeAotDemo } from "./demo/mazeaot";
import { setupMetaBallAotDemo } from "./demo/metaballaot";
import { setupModAotDemo } from "./demo/modaot";
import { setupRayAotDemo } from "./demo/rayaot";
import { setupSnakeAotDemo } from "./demo/snakeaot";
import { setupTestAddVec2AotDemo } from "./demo/testaddvec2aot";
import { compileAot } from "./parser/aotcompiler";
import { compile, instantiate } from "./parser/compiler";
import { MyWasmModule } from "./parser/types";

const fetchAndExecute = async (compiledModule: MyWasmModule): Promise<void> => {
    // console.log('compiled module:', compiledModule);
    let res = '';
    const importObject = { 'console': { 'log': (x: number) => { res += `${x}\n`; console.log(x); console.log(res); } }, '': { 'rand': Math.random } };
    const instance = await instantiate(compiledModule, importObject);
    console.log('module instance:', instance);
};

const setup = () => {
    console.log('setup start');
    const wasmSelectE = document.createElement('select');
    const default_url = '---';
    const urls = [
        default_url,
        'no-start',
        'test-add-vec2',
        'add',
        'fib2',
        'metaball',
        'jit',
        'quine',
        'snake',
        'dino',
        'fire',
        'fire2',
        'chip8',
        'ray',
        'inflate',
        'mod',
        'maze',
        'match3',
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

        const wasmUrl = `/assets/wasm/${target}.wasm`;
        console.log(wasmUrl);
        const response = await fetch(wasmUrl);
        if (!response.ok) throw new Error('failed to fetch');
        const wasmBytes = new Uint8Array(await response.arrayBuffer());
        console.log('wasm module bytes:', wasmBytes);
        const compiledModule = await compile(wasmBytes);
        const myAotCompiledJSCode = await compileAot(wasmBytes); //, myAotImportObject);
        console.log('myAotCompiledJSCode:');
        console.log(myAotCompiledJSCode);

        console.log('compiled module:', compiledModule);

        if (target === 'fire') return await setupFireAotDemo(myAotCompiledJSCode);
        if (target === 'test-add-vec2') return await setupTestAddVec2AotDemo(myAotCompiledJSCode);
        if (target === 'fire2') return await setupFireDemo(compiledModule);
        // if (target === 'dino') return await setupDinoDemo(compiledModule);
        if (target === 'dino') return await setupDinoAotDemo(myAotCompiledJSCode);
        if (target === 'snake') return await setupSnakeAotDemo(myAotCompiledJSCode);
        if (target === 'metaball') return await setupMetaBallAotDemo(myAotCompiledJSCode);
        if (target === 'maze') return await setupMazeAotDemo(myAotCompiledJSCode);
        if (target === 'mod') return await setupModAotDemo(myAotCompiledJSCode);
        if (target === 'ray') return await setupRayAotDemo(myAotCompiledJSCode);
        if (target === 'badgb') return await setupBadGBAotDemo(myAotCompiledJSCode);

        await fetchAndExecute(compiledModule);
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
    console.log('main start');
    setup();
    console.log('main end');
};

main().catch(console.error);
