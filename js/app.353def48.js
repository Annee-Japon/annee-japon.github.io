!function(){"use strict";var t,n={8162:function(t,n,e){e(4747);var r=function(){"IntersectionObserver"in window?document.querySelectorAll("[data-animate]").forEach((function(t){new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("animate")}))}),{root:null,threshold:[.1]}).observe(t)})):document.body.classList.add("no-animation")};e(1539),e(8674),e(4916),e(3123),e(9600),e(7042),e(5306);var o={p:"<p>{{ content }}</p>",li:"<li>{{ content }}</li>"},i="fetch"in window;i||document.body.classList.add("no-i18n");var a=localStorage.getItem("i18n-selected")||"fr";function c(t){return fetch("".concat("/public/i18n","/").concat(t,".json"),{cache:"no-cache"}).then((function(t){return t.json()}))}function u(t,n){var e=n.split(".");if(e[0]in t)return e.length>1?u(t[e[0]],e.slice(1).join(".")):t[e[0]]}function s(t){document.querySelectorAll("[data-i18n]").forEach((function(n){!function(t,n){for(;n.firstChild;)n.firstChild.remove();if("string"!=typeof t){var e=o[n.hasAttribute("data-template")&&n.getAttribute("data-template")||"p"];t.forEach((function(t){n.insertAdjacentHTML("beforeend",e.replace("{{ content }}",t))}))}else n.insertAdjacentHTML("afterbegin",t)}(u(t,n.getAttribute("data-i18n")),n)}))}window.addEventListener("DOMContentLoaded",(function(){i?function(){var t=document.querySelector("[data-lang-switcher]");document.querySelector("[data-lang-switcher-open]").addEventListener("click",(function(){t.classList.remove("closed"),n.forEach((function(t){t.setAttribute("tabindex",0)}))}));var n=document.querySelectorAll("[data-lang]");return n.forEach((function(e){var r=e.getAttribute("data-lang");a===r&&e.classList.add("active"),e.addEventListener("click",(function(r){var o=e.getAttribute("data-lang");t.classList.add("closed"),a!==o&&(n.forEach((function(t){t.classList[t.getAttribute("data-lang")===o?"add":"remove"]("active"),t.setAttribute("tabindex",-1)})),a=o,localStorage.setItem("i18n-selected",o),c(o).then((function(t){document.querySelectorAll("[data-animate]").forEach((function(t){t.classList.remove("animate")})),s(t),setTimeout((function(){document.querySelectorAll("[data-animate]").forEach((function(t){t.classList.add("animate")}))}),100)})))}))})),c(a)}().then((function(t){s(t),r()})):r()}))}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,t=[],r.O=function(n,e,o,i){if(!e){var a=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,u=0;u<e.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,o,i]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,a=e[0],c=e[1],u=e[2],s=0;if(a.some((function(n){return 0!==t[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var l=u(r)}for(n&&n(e);s<a.length;s++)i=a[s],r.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;return r.O(l)},e=self.webpackChunkannee_japon=self.webpackChunkannee_japon||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var o=r.O(void 0,[882],(function(){return r(8162)}));o=r.O(o)}();