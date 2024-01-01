import { ELEM_ID } from "./common";
import { instantiateAot } from "../parser/aotcompiler";

export const setupTestAddVec2AotDemo = async (compiledJSCode: string) => {
  console.log('setting up the AOT compiled test addvec2 demo');
  const outputE = document.querySelector('#' + ELEM_ID);
  outputE.innerHTML = '';
  const outputDiv = document.createElement('pre');
  outputE.appendChild(outputDiv);
  const mylogger = (x: number): void => {
    if (outputDiv.textContent === '') outputDiv.textContent = `${x}`;
    else outputDiv.textContent += `\n${x}`;
  };
  const importObject = { 'console': { 'log': mylogger } };
  const instance = await instantiateAot(compiledJSCode, importObject);
  console.log('test addvec2 instance', instance);
};
