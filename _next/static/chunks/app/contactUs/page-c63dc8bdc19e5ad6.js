(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{5137:function(e,t,r){Promise.resolve().then(r.bind(r,1630))},9079:function(e,t,r){"use strict";var i,n;e.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(3127)},3127:function(e){"use strict";!function(){var t={229:function(e){var t,r,i,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],u=!1,c=-1;function d(){u&&i&&(u=!1,i.length?l=i.concat(l):c=-1,l.length&&m())}function m(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(i=l,l=[];++c<t;)i&&i[c].run();c=-1,t=l.length}i=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||s(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,i),o=!1}finally{o&&delete r[e]}return a.exports}i.ab="//";var n=i(229);e.exports=n}()},1630:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var i=r(3827),n=r(4090);class a{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},s=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=await fetch(o.origin+e,{method:"POST",headers:r,body:t}),n=await i.text(),s=new a(i.status,n);if(i.ok)return s;throw s},u=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},c=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},d=e=>e.webdriver||!e.languages||0===e.languages.length,m=()=>new a(451,"Unavailable For Headless Browser"),h=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},f=e=>{var t;return!(null===(t=e.list)||void 0===t?void 0:t.length)||!e.watchVariable},p=(e,t)=>e instanceof FormData?e.get(t):e[t],g=(e,t)=>{if(f(e))return!1;h(e.list,e.watchVariable);let r=p(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},b=()=>new a(403,"Forbidden"),v=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},y=async(e,t,r)=>{let i=Number(await r.get(e)||0);return t-Date.now()+i},w=async(e,t,r)=>{if(!t.throttle||!r)return!1;v(t.throttle,t.id);let i=t.id||e;return await y(i,t.throttle,r)>0||(await r.set(i,Date.now().toString()),!1)},x=()=>new a(429,"Too Many Requests"),L=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},j=e=>"string"==typeof e?document.querySelector(e):e;var T={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;let r=s(e);o.publicKey=r.publicKey,o.blockHeadless=r.blockHeadless,o.storageProvider=r.storageProvider,o.blockList=r.blockList,o.limitRate=r.limitRate,o.origin=r.origin||t},send:async(e,t,r,i)=>{let n=s(i),a=n.publicKey||o.publicKey,h=n.blockHeadless||o.blockHeadless,f=o.storageProvider||n.storageProvider,p={...o.blockList,...n.blockList},v={...o.limitRate,...n.limitRate};return h&&d(navigator)?Promise.reject(m()):(u(a,e,t),c(r),r&&g(p,r))?Promise.reject(b()):await w(location.pathname,v,f)?Promise.reject(x()):l("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:a,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:async(e,t,r,i)=>{let n=s(i),a=n.publicKey||o.publicKey,c=n.blockHeadless||o.blockHeadless,h=o.storageProvider||n.storageProvider,f={...o.blockList,...n.blockList},p={...o.limitRate,...n.limitRate};if(c&&d(navigator))return Promise.reject(m());let v=j(r);u(a,e,t),L(v);let y=new FormData(v);return g(f,y)?Promise.reject(b()):await w(location.pathname,p,h)?Promise.reject(x()):(y.append("lib_version","4.3.3"),y.append("service_id",e),y.append("template_id",t),y.append("user_id",a),l("/api/v1.0/email/send-form",y))},EmailJSResponseStatus:a},N=r(9079),_=()=>{let e=(0,n.useRef)();return(0,i.jsx)("section",{className:"text-gray-600 body-font relative",children:(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("div",{className:"",children:(0,i.jsxs)("form",{className:"flex flex-wrap -m-2",ref:e,onSubmit:t=>{t.preventDefault(),T.sendForm(N.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,N.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,e.current,{publicKey:N.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}).then(()=>{console.log("SUCCESS!"),t.target.reset(),alert("Email sent")},e=>{console.log("FAILED...",e.text)})},children:[(0,i.jsx)("div",{className:"p-2 w-1/2",children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("label",{htmlFor:"name",className:"t6 text-neutralLight-neutral20 ",children:"Name"}),(0,i.jsx)("input",{placeholder:"Enter your name and surname...",type:"text",id:"name",name:"your_name",className:"w-full bg-neutralLight-neutral100 bg-opacity-50 rounded border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 text-base outline-none text-neutralLight-neutral20 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),(0,i.jsx)("div",{className:"p-2 w-1/2",children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("label",{htmlFor:"email",className:"t6 text-neutralLight-neutral20 ",children:"Your email"}),(0,i.jsx)("input",{placeholder:"Enter your email address...",type:"email",id:"email",name:"your_email",className:"w-full bg-neutralLight-neutral100 bg-opacity-50 rounded border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 text-base outline-none text-neutralLight-neutral20 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),(0,i.jsx)("div",{className:"p-2 w-full",children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("label",{htmlFor:"message",className:"t6 text-neutralLight-neutral20 ",children:"Tell us more"}),(0,i.jsx)("textarea",{placeholder:"Tell us more...",id:"message",name:"message",className:"w-full bg-neutralLight-neutral100 bg-opacity-50 rounded border border-neutralLight-neutral60 focus:border-blueLight-blue50 focus:bg-neutralLight-neutral100 focus:ring-2 h-32 text-base outline-none text-neutralLight-neutral20 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})]})}),(0,i.jsx)("div",{className:"p-2 flex justify-end items-end w-full",children:(0,i.jsx)("button",{className:"text-neutralLight-neutral100 bg-neutralLight-neutral10 border-0 py-2 px-8 focus:outline-none hover:bg-blueLight-blue50 rounded p3SB transition ease-in-out duration-300 animationSmall",children:"Send message"})})]})})})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=5137)}),_N_E=e.O()}]);