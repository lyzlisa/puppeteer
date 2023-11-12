"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51244],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"BrowserContext"},i="BrowserContext class",l={unversionedId:"api/puppeteer.browsercontext",id:"api/puppeteer.browsercontext",title:"BrowserContext class",description:"BrowserContext represents individual sessions within a browser.",source:"@site/../docs/api/puppeteer.browsercontext.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext",permalink:"/next/api/puppeteer.browsercontext",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"BrowserContext"},sidebar:"api",previous:{title:"Browser.wsEndpoint",permalink:"/next/api/puppeteer.browser.wsendpoint"},next:{title:"BrowserContext.browser",permalink:"/next/api/puppeteer.browsercontext.browser"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:u};function d(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"browsercontext-class"}),"BrowserContext class"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browsercontext"}),"BrowserContext")," represents individual sessions within a ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browser"}),"browser"),"."),(0,n.kt)("p",null,"When a ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browser"}),"browser")," is launched, it has a single ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browsercontext"}),"browser context")," by default. Others can be created using ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browser.createincognitobrowsercontext"}),"Browser.createIncognitoBrowserContext()"),"."),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browsercontext"}),"BrowserContext")," ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.eventemitter"}),"emits")," various events which are documented in the ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browsercontextevent"}),"BrowserContextEvent")," enum."),(0,n.kt)("p",null,"If a ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.page"}),"page")," opens another ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.page"}),"page"),", e.g. using ",(0,n.kt)("inlineCode",{parentName:"p"},"window.open"),", the popup will belong to the parent ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.page.browsercontext"}),"page's browser context"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export declare abstract class BrowserContext extends EventEmitter<BrowserContextEvents>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.eventemitter"}),"EventEmitter"),"<",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browsercontextevents"}),"BrowserContextEvents"),">"),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"BrowserContext")," class."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Creating an incognito ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"// Create a new incognito browser context\nconst context = await browser.createIncognitoBrowserContext();\n// Create a new page inside context.\nconst page = await context.newPage();\n// ... do stuff with page ...\nawait page.goto('https://example.com');\n// Dispose context once it's no longer needed.\nawait context.close();\n")),(0,n.kt)("h2",a({},{id:"properties"}),"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"closed"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Whether this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context")," is closed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"string ","|"," undefined"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Identifier for this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.browser"}),"browser()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets the ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser")," associated with this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.clearpermissionoverrides"}),"clearPermissionOverrides()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Clears all permission overrides for this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.close"}),"close()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Closes this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context")," and all associated ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.page"}),"pages"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.isincognito"}),"isIncognito()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Whether this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context")," is incognito."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browser.defaultbrowsercontext"}),"default browser context")," is the only non-incognito browser context."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.newpage"}),"newPage()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Creates a new ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.page"}),"page")," in this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.overridepermissions"}),"overridePermissions(origin, permissions)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Grants this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context")," the given ",(0,n.kt)("code",null,"permissions")," within the given ",(0,n.kt)("code",null,"origin"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.pages"}),"pages()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets a list of all open ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.page"}),"pages")," inside this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.targets"}),"targets()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Gets all active ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.target"}),"targets")," inside this ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext.waitfortarget"}),"waitForTarget(predicate, options)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("p",null,"Waits until a ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.target"}),"target")," matching the given ",(0,n.kt)("code",null,"predicate")," appears and returns it."),(0,n.kt)("p",null,"This will look all open ",(0,n.kt)("a",a({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),"."))))))}d.isMDXComponent=!0}}]);