"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||p;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={sidebar_label:"Browser"},l="Browser class",s={unversionedId:"api/puppeteer.browser",id:"api/puppeteer.browser",title:"Browser class",description:"Browser represents a browser instance that is either:",source:"@site/../docs/api/puppeteer.browser.md",sourceDirName:"api",slug:"/api/puppeteer.browser",permalink:"/next/api/puppeteer.browser",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Browser"},sidebar:"api",previous:{title:"Puppeteer.unregisterCustomQueryHandler",permalink:"/next/api/puppeteer.puppeteer.unregistercustomqueryhandler"},next:{title:"Browser.browserContexts",permalink:"/next/api/puppeteer.browser.browsercontexts"}},i={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:u};function c(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"browser-class"}),"Browser class"),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.browser"}),"Browser")," represents a browser instance that is either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"connected to via ",(0,a.kt)("a",n({parentName:"li"},{href:"/next/api/puppeteer.puppeteer.connect"}),"Puppeteer.connect()")," or - launched by ",(0,a.kt)("a",n({parentName:"li"},{href:"/next/api/puppeteer.puppeteernode.launch"}),"PuppeteerNode.launch()"),".")),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.browser"}),"Browser")," ",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.eventemitter"}),"emits")," various events which are documented in the ",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.browserevent"}),"BrowserEvent")," enum."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare abstract class Browser extends EventEmitter<BrowserEvents>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Extends:")," ",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.eventemitter"}),"EventEmitter"),"<",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.browserevents"}),"BrowserEvents"),">"),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"Browser")," class."),(0,a.kt)("h2",n({},{id:"example-1"}),"Example 1"),(0,a.kt)("p",null,"Using a ",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.browser"}),"Browser")," to create a ",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.page"}),"Page"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://example.com');\nawait browser.close();\n")),(0,a.kt)("h2",n({},{id:"example-2"}),"Example 2"),(0,a.kt)("p",null,"Disconnecting from and reconnecting to a ",(0,a.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.browser"}),"Browser"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n// Store the endpoint to be able to reconnect to the browser.\nconst browserWSEndpoint = browser.wsEndpoint();\n// Disconnect puppeteer from the browser.\nbrowser.disconnect();\n\n// Use the endpoint to reestablish a connection\nconst browser2 = await puppeteer.connect({browserWSEndpoint});\n// Close the browser.\nawait browser2.close();\n")),(0,a.kt)("h2",n({},{id:"properties"}),"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"connected"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Whether Puppeteer is connected to this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser"),".")))),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.browsercontexts"}),"browserContexts()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Gets a list of open ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),"."),(0,a.kt)("p",null,"In a newly-created ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser"),", this will return a single instance of ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"BrowserContext"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.close"}),"close()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Closes this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser")," and all associated ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.page"}),"pages"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.createincognitobrowsercontext"}),"createIncognitoBrowserContext(options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Creates a new incognito ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),"."),(0,a.kt)("p",null,"This won't share cookies/cache with other ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.defaultbrowsercontext"}),"defaultBrowserContext()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Gets the default ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.disconnect"}),"disconnect()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Disconnects Puppeteer from this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser"),", but leaves the process running.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.isconnected"}),"isConnected()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Whether Puppeteer is connected to this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.newpage"}),"newPage()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Creates a new ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.page"}),"page")," in the ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.defaultbrowsercontext"}),"default browser context"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.pages"}),"pages()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Gets a list of all open ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.page"}),"pages")," inside this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"Browser"),"."),(0,a.kt)("p",null,"If there ar multiple ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),", this returns all ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.page"}),"pages")," in all ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.process"}),"process()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Gets the associated ",(0,a.kt)("a",n({parentName:"td"},{href:"https://nodejs.org/api/child_process.html#class-childprocess"}),"ChildProcess"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.target"}),"target()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Gets the ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.target"}),"target")," associated with the ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.defaultbrowsercontext"}),"default browser context"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.targets"}),"targets()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Gets all active ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.target"}),"targets"),"."),(0,a.kt)("p",null,"In case of multiple ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),", this returns all ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.target"}),"targets")," in all ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.useragent"}),"userAgent()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Gets this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser's")," original user agent."),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.page"}),"Pages")," can override the user agent with ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.page.setuseragent"}),"Page.setUserAgent()"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.version"}),"version()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Gets a string representing this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser's")," name and version."),(0,a.kt)("p",null,"For headless browser, this is similar to ",(0,a.kt)("code",null,'"',"HeadlessChrome/61.0.3153.0",'"'),". For non-headless or new-headless, this is similar to ",(0,a.kt)("code",null,'"',"Chrome/61.0.3153.0",'"'),". For Firefox, it is similar to ",(0,a.kt)("code",null,'"',"Firefox/116.0a1",'"'),"."),(0,a.kt)("p",null,"The format of ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.version"}),"Browser.version()")," might change with future releases of browsers."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.waitfortarget"}),"waitForTarget(predicate, options)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Waits until a ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.target"}),"target")," matching the given ",(0,a.kt)("code",null,"predicate")," appears and returns it."),(0,a.kt)("p",null,"This will look all open ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browsercontext"}),"browser contexts"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser.wsendpoint"}),"wsEndpoint()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("p",null,"Gets the WebSocket URL to connect to this ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.browser"}),"browser"),"."),(0,a.kt)("p",null,"This is usually used with ",(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.puppeteer.connect"}),"Puppeteer.connect()"),"."),(0,a.kt)("p",null,"You can find the debugger URL (",(0,a.kt)("code",null,"webSocketDebuggerUrl"),") from ",(0,a.kt)("code",null,"http://${host}:${port}/json/version"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",n({parentName:"td"},{href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target"}),"browser endpoint")," for more information."))))))}c.isMDXComponent=!0}}]);