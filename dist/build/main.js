(()=>{"use strict";var e={706:(e,t,n)=>{var r=n(294),o=n(935),a=n(435),c="GET_USER_NAME",u=function(){return function(e){e({type:c,payload:{name:"Ник!",test:1}})}},l=n(727);const i=function(e){(0,r.useEffect)((function(){}),[]);var t=(0,a.I0)(),n=(0,a.v9)((function(e){return e.user.name}));return r.createElement("div",{className:"ui-counter"},r.createElement("p",{className:"ui-counter__title"},"Counter Widget"),r.createElement("div",{className:"ui-counter__body"},r.createElement("p",{className:"ui-counter__body__name"},n)),r.createElement("div",{className:"ui-counter__body",onClick:function(){console.log("Тык"),t(u())}},"Тык"),r.createElement(l.rU,{to:"/about"},"Test to about"))};var s=n(154),m=n.n(s),p=n(977);const f=function(e){return r.createElement(r.Suspense,{fallback:e.fallback},r.createElement(p.AW,{path:e.path,render:function(t){return e.redirect?r.createElement(p.l_,{to:e.redirect}):e.component&&r.createElement(e.component,m()({},t,{routes:e.routes}))}}))};var b=[{path:"/",exact:!0,component:i,fallback:r.createElement("div",null," Loading... ")},{path:"/home",redirect:"/",component:i,fallback:r.createElement("div",null," Loading... ")},{path:"/about",component:function(e){var t=e.routes;console.log(t),(0,r.useEffect)((function(){}),[]);var n=(0,a.I0)(),o=(0,a.v9)((function(e){return e.user.name}));return r.createElement("div",{className:"ui-counter"},r.createElement("p",{className:"ui-counter__title"},"Test About Page"),r.createElement("div",{className:"ui-counter__body"},r.createElement("p",{className:"ui-counter__body__name"},o)),r.createElement("div",{className:"ui-counter__body",onClick:function(){console.log("Тык"),n(u())}},"Тык"),r.createElement("div",null,r.createElement(l.rU,{to:"/home"},"Test to home")),r.createElement("div",null,r.createElement(l.rU,{to:"/about/text"},"Test to sub text")),r.createElement("div",null,r.createElement(l.rU,{to:"/about/image"},"Test to sub image")),r.createElement(p.rs,null,t.map((function(e){return r.createElement(f,m()({key:e.path},e))}))))},routes:[{path:"/about/text",component:function(e){return console.log(e),r.createElement("div",null,"AboutSubText")}},{path:"/about/image",component:function(){return r.createElement("div",null,"AboutSubImage")}}],fallback:r.createElement("div",null," Loading... ")}];const d=function(e){var t=e.routes;return r.createElement(p.rs,null,t.map((function(e){return r.createElement(f,m()({key:e.path},e))})))},v=function(){return r.createElement("div",{className:"ui-app"},r.createElement(d,{routes:b}))};var E=n(676),h=n(894),g=n(500),y=n(713),_=n.n(y);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){_()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w={name:"Юрий",test:2};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return j(j({},e),t.payload);default:return e}}const x=(0,E.UY)({user:k,user2:k});var N=[h.Z];(0,E.MT)(x,{},(0,g.Uo)(E.md.apply(void 0,N)));const P=function(){return r.createElement(v,null)};o.hydrate(r.createElement(l.VK,null,r.createElement(P,null)),document.getElementById("app"))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[706,736]],r=()=>{};function o(){for(var r,o=0;o<t.length;o++){for(var a=t[o],c=!0,u=1;u<a.length;u++){var l=a[u];0!==e[l]&&(c=!1)}c&&(t.splice(o--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},c=c.slice();for(var e=0;e<c.length;e++)a(c[e]);return(r=o)()};var a=o=>{for(var a,c,[l,i,s,m]=o,p=0,f=[];p<l.length;p++)c=l[p],n.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(a in i)n.o(i,a)&&(n.m[a]=i[a]);for(s&&s(n),u(o);f.length;)f.shift()();return m&&t.push.apply(t,m),r()},c=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[],u=c.push.bind(c);c.push=a})(),n.x()})();
//# sourceMappingURL=main.js.map