import { ELEM_ID } from "./common";
import { instantiateAot } from "@haribala/wasm2js";

export const setupFibAotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled fibonacci demo');
  const outputE = document.querySelector('#' + ELEM_ID);
  outputE.innerHTML = '';

  const importObject = { 'console': { 'log': console.log } };
  const instance = await instantiateAot(compiledJSCode, importObject);
  console.log('fibonacci instance', instance);
  const result = (instance.exports.fib as Function)(10);
  outputE.textContent = `fibonacci(10) = ${result}`;
};
