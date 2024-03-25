(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{5137:function(e,t,r){Promise.resolve().then(r.bind(r,7284))},7284:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var a=r(3827),i=r(4090);class l{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},s=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},n=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=await fetch(o.origin+e,{method:"POST",headers:r,body:t}),i=await a.text(),s=new l(a.status,i);if(a.ok)return s;throw s},u=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},c=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},m=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new l(451,"Unavailable For Headless Browser"),h=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},p=e=>{var t;return!(null===(t=e.list)||void 0===t?void 0:t.length)||!e.watchVariable},b=(e,t)=>e instanceof FormData?e.get(t):e[t],g=(e,t)=>{if(p(e))return!1;h(e.list,e.watchVariable);let r=b(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},f=()=>new l(403,"Forbidden"),y=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},v=async(e,t,r)=>{let a=Number(await r.get(e)||0);return t-Date.now()+a},x=async(e,t,r)=>{if(!t.throttle||!r)return!1;y(t.throttle,t.id);let a=t.id||e;return await v(a,t.throttle,r)>0||(await r.set(a,Date.now().toString()),!1)},w=()=>new l(429,"Too Many Requests"),j=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},L=e=>"string"==typeof e?document.querySelector(e):e;var k={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;let r=s(e);o.publicKey=r.publicKey,o.blockHeadless=r.blockHeadless,o.storageProvider=r.storageProvider,o.blockList=r.blockList,o.limitRate=r.limitRate,o.origin=r.origin||t},send:async(e,t,r,a)=>{let i=s(a),l=i.publicKey||o.publicKey,h=i.blockHeadless||o.blockHeadless,p=o.storageProvider||i.storageProvider,b={...o.blockList,...i.blockList},y={...o.limitRate,...i.limitRate};return h&&m(navigator)?Promise.reject(d()):(u(l,e,t),c(r),r&&g(b,r))?Promise.reject(f()):await x(location.pathname,y,p)?Promise.reject(w()):n("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:l,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:async(e,t,r,a)=>{let i=s(a),l=i.publicKey||o.publicKey,c=i.blockHeadless||o.blockHeadless,h=o.storageProvider||i.storageProvider,p={...o.blockList,...i.blockList},b={...o.limitRate,...i.limitRate};if(c&&m(navigator))return Promise.reject(d());let y=L(r);u(l,e,t),j(y);let v=new FormData(y);return g(p,v)?Promise.reject(f()):await x(location.pathname,b,h)?Promise.reject(w()):(v.append("lib_version","4.3.3"),v.append("service_id",e),v.append("template_id",t),v.append("user_id",l),n("/api/v1.0/email/send-form",v))},EmailJSResponseStatus:l},_=e=>{let{type:t,placeholder:r,value:i,onChange:l,id:o,name:s}=e;return(0,a.jsx)("input",{type:t,placeholder:r,value:i,onChange:l,id:o,name:s,className:"w-full bg-neutralLight-neutral100 bg-opacity-50 rounded-[0.5rem] border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 text-base outline-none text-neutralLight-neutral20 py-[0.875rem] px-[1rem] leading-[1.32rem]  transition-colors duration-200 ease-in-out"})},S=e=>{let{type:t,placeholder:r,value:i,onChange:l,id:o,name:s}=e;return(0,a.jsx)("textarea",{type:t,placeholder:r,value:i,onChange:l,id:o,name:s,className:"w-full bg-neutralLight-neutral100 bg-opacity-50 rounded-[0.5rem] border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 h-32 text-base outline-none py-[0.875rem] px-[1rem] resize-none leading-[1.32rem]  transition-colors duration-200 ease-in-out"})},N=e=>{let{label:t,placeholder:r,type:i,id:l,name:o,fieldType:s,errors:n}=e,u="textarea"===s?"w-full":"w-1/2";return(0,a.jsx)("div",{className:"p-2 ".concat(u),children:(0,a.jsxs)("div",{className:"relative flex flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:l,className:"t6 text-neutralLight-neutral20",children:t}),(0,a.jsx)("textarea"===s?S:_,{placeholder:r,type:i,id:l,name:o,fieldType:s}),n[o]&&(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"text-red-600 p3",children:n[o]})})]})})},P=(e,t,r)=>{let a={};return e||(a.your_name="Name field cannot be empty"),t?/\S+@\S+\.\S+/.test(t)||(a.your_email="Invalid email address"):a.your_email="Email field cannot be empty",r||(a.message="Message field cannot be empty"),a},T=()=>{let e=(0,i.useRef)(),[t,r]=(0,i.useState)({});return(0,a.jsx)("section",{className:"text-gray-600 body-font relative",children:(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("form",{className:"flex flex-wrap -m-2",ref:e,onSubmit:t=>{t.preventDefault();let a=P(t.target.your_name.value,t.target.your_email.value,t.target.message.value);if(Object.keys(a).length>0){r(a);return}k.sendForm("service_2uv74q5","template_xaybe5z",e.current,{publicKey:"8R-AYnxdNLn7bPJLY"}).then(()=>{console.log("SUCCESS!"),t.target.reset(),r({}),alert("Email sent")},e=>{console.error("FAILED...",e),e.text?console.error("Error Text:",e.text):console.error("Unknown Error:",e)}).catch(e=>{console.error("Catch Error:",e)})},children:[(0,a.jsx)(N,{label:"Your name",placeholder:"Enter your name and surname...",type:"text",id:"name",name:"your_name",fieldType:"input",errors:t}),(0,a.jsx)(N,{label:"Your email",placeholder:"Enter your email...",type:"text",id:"email",name:"your_email",fieldType:"input",errors:t}),(0,a.jsx)(N,{label:"Tell us more",placeholder:"Tell us more...",type:"text",id:"message",name:"message",fieldType:"textarea",errors:t}),(0,a.jsx)("div",{className:"p-2 flex justify-end items-end w-full",children:(0,a.jsx)("button",{className:"text-neutralLight-neutral100 bg-neutralLight-neutral10 border-0 py-[0.635rem] px-[1.25rem] focus:outline-none hover:bg-blueLight-blue50 rounded-[0.5rem] p3SB transition ease-in-out duration-300 animationSmall h-[2.75rem]",children:"Send message"})})]})})})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=5137)}),_N_E=e.O()}]);