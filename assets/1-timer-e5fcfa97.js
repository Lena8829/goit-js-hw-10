import{f as y,i as D}from"./vendor-77e16229.js";//! Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
const i=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");n.addEventListener("click",M);let s,d;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],s<new Date?(D.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1,console.log(e[0])}};y("#datetime-picker",v);function M(){n.disabled=!0,i.disabled=!0;const t=s-new Date;if(t<=0){clearInterval(d),a(0),n.disabled=!1,i.disabled=!1;return}d=setInterval(()=>{const r=s-new Date;if(r<=0){clearInterval(d),a(0),n.disabled=!1,i.disabled=!1;return}a(r)},1e3),a(t)}function k(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function o(e){return String(e).padStart(2,"0")}function a(e){const{days:t,hours:c,minutes:r,seconds:u}=k(e);S.textContent=o(t),b.textContent=o(c),p.textContent=o(r),q.textContent=o(u)}
//# sourceMappingURL=1-timer-e5fcfa97.js.map