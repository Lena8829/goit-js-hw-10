import{i}from"./vendor-77e16229.js";const o=document.querySelector(".form"),n=o.querySelector("input[name='delay']"),m=o.querySelector("input[name='state']");o.addEventListener("submit",a);function a(l){l.preventDefault();const t=parseInt(n.value),s=m.value;console.log(s),new Promise((e,r)=>{setTimeout(()=>{s==="fulfilled"?e(t):s==="rejected"&&r(t)},t)}).then(e=>{i.success({title:"Fulfilled promise",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{i.error({title:"Rejected promise",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=2-snackbar-7a466626.js.map
