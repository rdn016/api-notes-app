(()=>{var t={267:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},978:t=>{"use strict";t.exports=function(t){return t[1]}},265:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r)}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="\n          <style>\n  footer {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n      font-size: 14px;\n      height:40px;\n  }\n          </style>\n              <footer>\n                  <p>Notes App by @rdn.016</p>\n              </footer>\n          "}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("app-footer",c)},763:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r))._shadowRoot=n.attachShadow({mode:"open"}),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML="\n        <style>*{\n        max-width:100vw;\n        }\nheader {\n    border-bottom: 1px solid black;\n    padding: 15px 0 10px 10px;\n    line-height:0;\n    height:40px;\n    background-color: #f8f9fa;\n}\n        header span {\n    font-weight: 100;\n}\n        </style>\n              <header>\n        <h1>Notes <span>App</span></h1>\n      </header>"}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("app-header",c)},94:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,e(o.key),o)}}function e(n){var e=function(n){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}function r(t){var n="function"==typeof Map?new Map:void 0;return r=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var a=new(t.bind.apply(t,r));return e&&i(a,e.prototype),a}(t,arguments,a(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}var c=function(e){function r(){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(n=function(n,e,r){return e=a(e),function(n,e){if(e&&("object"==t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(n,o()?Reflect.construct(e,r||[],a(n).constructor):e.apply(n,r))}(this,r))._style=document.createElement("style"),n._noteList=[],n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(r,e),c=r,(u=[{key:"setNoteList",value:function(t){this._noteList=t,this.render()}},{key:"connectedCallback",value:function(){this.appendChild(this._style),this.render(),AOS.init()}},{key:"updateStyle",value:function(){this._style.textContent="\n    note-list {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n      gap: 18px;\n      margin: 16px 20px 0 20px;\n    }\n    "}},{key:"handleDelete",value:function(t){var n=t.target.closest(".note-item").getAttribute("data-id");this.dispatchEvent(new CustomEvent("delete-note",{detail:{noteId:n}}))}},{key:"render",value:function(){var t=this;this.updateStyle(),this.innerHTML="";var n=500;this._noteList.forEach((function(e){t.innerHTML+='\n      <div class="note-item" data-id="'.concat(e.id,'" data-aos="fade-up" data-aos-delay="').concat(n,'">\n        <div class="title">\n          <h2>').concat(e.title,"</h2>\n          <p>").concat(e.createdAt,'</p>\n        </div>\n        <div class="body">\n          ').concat(e.body,'\n        </div>\n        <button class="del-btn" type="submit">\n          <p>Delete</p>\n        </button>\n        </div>\n      '),n+=50,document.querySelector(".del-btn").addEventListener("click",t.handleDelete.bind(t))})),this.appendChild(this._style)}}])&&n(c.prototype,u),Object.defineProperty(c,"prototype",{writable:!1}),c;var c,u}(r(HTMLElement));customElements.define("note-list",c)},754:()=>{var t=document.querySelector("#add-note-form"),n=t.elements.title,e=t.elements.body;document.getElementById("alertNote"),document.getElementById("addNotes"),document.getElementById("cancel"),document.querySelector(".container"),t.addEventListener("submit",(function(t){t.preventDefault()}));var r=function(t){t.target.setCustomValidity(""),t.target.validity.valueMissing&&t.target.setCustomValidity("Judul harus diisi.")};n.addEventListener("invalid",r),n.addEventListener("input",r),n.addEventListener("blur",(function(t){var n=t.target.validity.valid,e=t.target.validationMessage,r=t.target.getAttribute("aria-describedby"),o=r?document.getElementById(r):null;o&&(o.innerText=e&&!n?e:"")}));var o=function(t){t.target.setCustomValidity(""),t.target.validity.valueMissing&&t.target.setCustomValidity("Isi catatan harus diisi.")};e.addEventListener("invalid",o),e.addEventListener("input",o),e.addEventListener("blur",(function(t){var n=t.target.validity.valid,e=t.target.validationMessage,r=t.target.getAttribute("aria-describedby"),o=r?document.getElementById(r):null;o&&(o.innerText=e&&!n?e:"")}))},106:(t,n,e)=>{"use strict";e.d(n,{A:()=>c});var r=e(978),o=e.n(r),i=e(267),a=e.n(i)()(o());a.push([t.id,"* {\n  font-family: sans-serif;\n  padding: 0;\n  margin: 0;\n}\n\n.blur {\n  filter: blur(10px);\n}\n\n.container {\n  min-height: 92vh;\n}\n\nheader {\n  border-bottom: 1px solid black;\n  padding: 20px 0 10px 10px;\n  max-height: 40px;\n  background-color: #f8f9fa;\n  width: 100%;\n  display: inline-block;\n  position: relative;\n}\n\nheader span {\n  font-weight: 100;\n}\n\n#addNotes {\n  position: fixed;\n  right: 40;\n  bottom: 50;\n  padding: 15px 25px;\n  font-size: 15px;\n  background-color: rgb(21, 15, 15);\n  color: white;\n  border-radius: 0.5em;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n/* form */\n\n.add-note-alert {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n  padding: 10px 10px 50px 10px;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n\n.form-container #title,\n.form-container textarea {\n  padding: 10px;\n  border-radius: 0.3em;\n  border: none;\n  margin-bottom: 3px;\n  background-color: #efefef;\n}\n.form-container textarea {\n  height: 110px;\n  margin-top: 10px;\n}\n\n#add-note-form {\n  width: 45%;\n}\n@media screen and (max-width: 395px) {\n  #add-note-form {\n    width: 60%;\n  }\n}\n/* form button */\n#add-note-form > .btn-container > button {\n  padding: 10px 20px;\n  font-weight: 700;\n  color: rgb(255, 255, 255);\n  border: none;\n  border-radius: 0.3em;\n  background-color: rgb(25, 23, 23);\n  float: left;\n}\n.btn-container {\n  margin-top: 7px;\n}\n\n#add-note-form #cancel {\n  color: rgb(251, 80, 80);\n  margin-left: 5px;\n}\n/* form validation */\n.form-container > .validation-msg {\n  font-size: 13px;\n  text-align: start;\n  padding-left: 2px;\n  color: rgb(252, 63, 63);\n}\n/* note-item */\n.note-item:hover {\n  transform: scale(1.04);\n}\n\n.note-item {\n  border: 2px rgba(54, 53, 53, 0.256) solid;\n  padding: 10px;\n  border-radius: 0.3em;\n  transition: 200ms;\n  cursor: default;\n}\n\n.note-item .title {\n  padding: 6px 0;\n  font-size: 14px;\n}\n\n.note-item .title p {\n  font-size: 12px;\n}\n.del-btn {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.del-btn p {\n  margin-top: 10px;\n  font-size: 14px;\n  border: none;\n  border-radius: 0.3em;\n  padding: 8px 12px;\n  width: max-content;\n  color: rgb(251, 80, 80);\n  background-color: rgb(25, 23, 23);\n  z-index: 99;\n}\n\n/* loading indicator */\n.loading {\n  min-width: 100%;\n  min-height: 100%;\n  z-index: 999;\n}\n.loading p {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  z-index: 9999;\n}\n",""]);const c=a},72:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],l=r.base?u[0]+r.base:u[0],s=i[l]||0,f="".concat(l," ").concat(s);i[l]=s+1;var d=e(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var y=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=r(t,o),l=0;l<i.length;l++){var s=e(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=u}}},659:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";e(754),e(94);var t="https://notes-api.dicoding.dev/v2",n=document.querySelector("note-list"),r=document.querySelector(".loading"),o=function(){r.style.display="block",fetch("".concat(t,"/notes")).then(i).then((function(t){return t.json()})).then((function(t){n.setNoteList(t.data),console.log(t)})).catch((function(t){alert("gagal mendapatkan notes, periksa koneksi internet"),console.error(t)})).finally((function(){r.style.display="none",AOS.refresh()}))};function i(t){return new Promise((function(n){return setTimeout((function(){return n(t)}),1e3)}))}n.addEventListener("delete-note",(function(n){var e;e=n.detail.noteId,fetch("".concat(t,"/notes/").concat(e),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){console.log(t),o()})).catch((function(){alert("gagal menghapus notes, periksa koneksi internet")}))})),document.getElementById("add").addEventListener("click",(function(){var n,e=document.getElementById("title").value,r=document.getElementById("body").value;e&&r&&(n={title:e,body:r},fetch("".concat(t,"/notes"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n.title,body:n.body})}).then((function(t){return t.json()})).then((function(t){"success"===t.status&&(console.log({status:t.status,message:"Note created",data:t.data}),o())})).catch((function(){alert("gagal menambah notes, periksa koneksi internet")})))})),o(),e(265),e(763);var a=e(72),c=e.n(a),u=e(825),l=e.n(u),s=e(659),f=e.n(s),d=e(56),p=e.n(d),y=e(540),b=e.n(y),m=e(113),v=e.n(m),h=e(106),g={};g.styleTagTransform=v(),g.setAttributes=p(),g.insert=f().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=b(),c()(h.A,g),h.A&&h.A.locals&&h.A.locals;var x=document.getElementById("alertNote"),w=document.getElementById("addNotes"),E=document.getElementById("cancel"),O=document.querySelector(".container");w.addEventListener("click",(function(){O.classList.add("blur"),w.classList.add("blur"),x.style.display="flex"})),E.addEventListener("click",(function(){O.classList.remove("blur"),w.classList.remove("blur"),x.style.display="none"})),document.getElementById("add").addEventListener("click",(function(){var t=document.getElementById("title").value,n=document.getElementById("body").value;t&&n&&(O.classList.remove("blur"),w.classList.remove("blur"),x.style.display="none")}))})()})();