"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||p;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_label:"Browser.wsEndpoint"},i="Browser.wsEndpoint() method",s={unversionedId:"api/puppeteer.browser.wsendpoint",id:"version-21.5.1/api/puppeteer.browser.wsendpoint",title:"Browser.wsEndpoint() method",description:"Gets the WebSocket URL to connect to this browser.",source:"@site/versioned_docs/version-21.5.1/api/puppeteer.browser.wsendpoint.md",sourceDirName:"api",slug:"/api/puppeteer.browser.wsendpoint",permalink:"/api/puppeteer.browser.wsendpoint",draft:!1,tags:[],version:"21.5.1",frontMatter:{sidebar_label:"Browser.wsEndpoint"},sidebar:"api",previous:{title:"Browser.waitForTarget",permalink:"/api/puppeteer.browser.waitfortarget"},next:{title:"BrowserContext",permalink:"/api/puppeteer.browsercontext"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],u={toc:c};function f(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"browserwsendpoint-method"}),"Browser.wsEndpoint() method"),(0,n.kt)("p",null,"Gets the WebSocket URL to connect to this ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.browser"}),"browser"),"."),(0,n.kt)("p",null,"This is usually used with ",(0,n.kt)("a",o({parentName:"p"},{href:"/api/puppeteer.puppeteer.connect"}),"Puppeteer.connect()"),"."),(0,n.kt)("p",null,"You can find the debugger URL (",(0,n.kt)("inlineCode",{parentName:"p"},"webSocketDebuggerUrl"),") from ",(0,n.kt)("inlineCode",{parentName:"p"},"http://${host}:${port}/json/version"),"."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",o({parentName:"p"},{href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target"}),"browser endpoint")," for more information."),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class Browser {\n  abstract wsEndpoint(): string;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"string"),(0,n.kt)("h2",o({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The format is always ",(0,n.kt)("inlineCode",{parentName:"p"},"ws://${host}:${port}/devtools/browser/<id>"),"."))}f.isMDXComponent=!0}}]);