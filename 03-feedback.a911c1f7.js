!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(O,t),d?g(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=b();if(S(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=i=void 0,a)}function T(){var e=b(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),g(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=h(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:w(b())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=a.test(e);return o||f.test(e)?l(e.slice(2),o?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var j,S,O="feedback-form-state",w=document.querySelector(".feedback-form"),T=w.querySelectorAll("[name]");function E(){var e={};return T.forEach((function(t){return e[t.name]=t.value})),e}S=localStorage.getItem(O),(j=JSON.parse(S))&&T.forEach((function(e){return e.value=j[e.name]?j[e.name]:""})),w.addEventListener("input",n((function(e){!function(e){var t=JSON.stringify(e);localStorage.setItem(O,t)}(E())}),500)),w.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements,n=t.email,r=t.message;if(""===n.value||""===r.value)return void alert("Email or message must not be empty!");console.log("Submited form data:"),console.log(E()),localStorage.removeItem(O),w.reset()}))}();
//# sourceMappingURL=03-feedback.a911c1f7.js.map
