const MAX_FRAMES=4096;export const instantiateAot=async(compiledJSCode,importObject)=>{const createInstance=eval(compiledJSCode);return createInstance(importObject)};class Player extends AudioWorkletProcessor{constructor(t){super(t),console.log("Hi! from audio worklet options:",t),this.mem=null,this.run=null,this.channels=null,this.playing=!1,this.sampleRate=t.processorOptions.sampleRate,this.module=t.processorOptions.module,this.port.onmessage=this.onmessage.bind(this)}onmessage(t){switch(t.data.msg){case"load":this.load(t.data.file);break;case"play":this.playing=t.data.value}}async load(t){console.log("worklet.js - load - file:",t);const e=1+Math.ceil(t.byteLength/65536),s=65536*e;console.log("NUM_PAGES",e,"MEM_SIZE",s),this.mem=new Uint8Array(s),this.channels=[new Float32Array(this.mem.buffer,4096,MAX_FRAMES),new Float32Array(this.mem.buffer,4096+4*MAX_FRAMES,MAX_FRAMES)],new Uint8Array(this.mem.buffer,65536).set(new Uint8Array(t));const o={"":{rate:sampleRate,init:t=>this.port.postMessage({msg:"init",channels:t}),draw:(t,e)=>this.port.postMessage({msg:"draw",pattern:t,row:e}),mem:this.mem}},a=await instantiateAot(this.module,o);this.run=a.exports.run}process(t,e,s){if(this.run&&this.playing){const t=e[0];let s=0,o=t[0].length;for(;s<o;){const e=Math.min(t[0].length,MAX_FRAMES);this.run(e);for(let o=0;o<t.length;++o)t[o].set(this.channels[o].subarray(0,e),s);s+=e}}return!0}}registerProcessor("player",Player);