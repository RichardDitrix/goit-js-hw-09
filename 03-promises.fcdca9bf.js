var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("fbklV");var r=n("iQIUW");function i(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector("form.form").addEventListener("submit",(e=>{e.preventDefault();const{elements:t}=e.currentTarget,o=Number(t.amount.value),n=Number(t.step.value);let l=Number(t.delay.value);for(let e=0;e<o;e+=1)i(e+1,l).then((({position:e,delay:t})=>r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`))).catch((({position:e,delay:t})=>r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))),l+=n}));
//# sourceMappingURL=03-promises.fcdca9bf.js.map
