(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{194:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},195:function(e,t,r){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.d(t,"a",(function(){return n}))},196:function(e,t,r){"use strict";var n=r(17);function o(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}r.d(t,"a",(function(){return o}))},197:function(e,t,r){"use strict";function n(e,p){return(n=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e})(e,p)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}r.d(t,"a",(function(){return o}))},198:function(e,t,r){"use strict";var n=r(1),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(e,t,r){(r?Reflect.getOwnMetadataKeys(t,r):Reflect.getOwnMetadataKeys(t)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,t,r):Reflect.getOwnMetadata(n,t);r?Reflect.defineMetadata(n,o,e,r):Reflect.defineMetadata(n,o,e)}))}var _={__proto__:[]}instanceof Array;function f(e){return function(t,r,n){var o="function"==typeof t?t:t.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push((function(t){return e(t,r,n)}))}}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function d(e,t){void 0===t&&(t={}),t.name=t.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach((function(e){if("constructor"!==e)if(l.indexOf(e)>-1)t[e]=r[e];else{var n=Object.getOwnPropertyDescriptor(r,e);void 0!==n.value?"function"==typeof n.value?(t.methods||(t.methods={}))[e]=n.value:(t.mixins||(t.mixins=[])).push({data:function(){var t;return(t={})[e]=n.value,t}}):(n.get||n.set)&&((t.computed||(t.computed={}))[e]={get:n.get,set:n.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return function(e,t){var r=t.prototype._init;t.prototype._init=function(){var t=this,r=Object.getOwnPropertyNames(e);if(e.$options.props)for(var n in e.$options.props)e.hasOwnProperty(n)||r.push(n);r.forEach((function(r){"_"!==r.charAt(0)&&Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){e[r]=t},configurable:!0})}))};var data=new t;t.prototype._init=r;var n={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(n[e]=data[e])})),n}(this,e)}});var f=e.__decorators__;f&&(f.forEach((function(e){return e(t)})),delete e.__decorators__);var d,O,y=Object.getPrototypeOf(e.prototype),h=y instanceof n.a?y.constructor:n.a,m=h.extend(t);return function(e,t,r){Object.getOwnPropertyNames(t).forEach((function(n){if(!v[n]){var o=Object.getOwnPropertyDescriptor(e,n);if(!o||o.configurable){var c,f,l=Object.getOwnPropertyDescriptor(t,n);if(!_){if("cid"===n)return;var d=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,f=typeof c,null!=c&&("object"===f||"function"===f)&&d&&d.value===l.value)return}0,Object.defineProperty(e,n,l)}}}))}(m,e,h),o&&(c(d=m,O=e),Object.getOwnPropertyNames(O.prototype).forEach((function(e){c(d.prototype,O.prototype,e)})),Object.getOwnPropertyNames(O).forEach((function(e){c(d,O,e)}))),m}var v={prototype:!0,arguments:!0,callee:!0,caller:!0};function O(e){return"function"==typeof e?d(e):function(t){return d(t,e)}}O.registerHooks=function(e){l.push.apply(l,e)};var y=O;r.d(t,"b",(function(){return E})),r.d(t,"a",(function(){return y}));var h="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function m(e,t,r){h&&(Array.isArray(e)||"function"==typeof e||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",t,r)))}function E(e){return void 0===e&&(e={}),function(t,r){m(e,t,r),f((function(t,r){(t.props||(t.props={}))[r]=e}))(t,r)}}},199:function(e,t,r){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return o}))},202:function(e,t,r){var content=r(209);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(67).default)("0cd1eeaa",content,!0,{sourceMap:!1})},203:function(e,t,r){"use strict";var n=r(194),o=r(196),c=r(195),_=r(197),f=r(17),l=r(1),d=r(198),v=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},O=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(_.a)(t,e),t}(l.a);v([Object(d.b)({type:String,default:"end"})],O.prototype,"extraPosition",void 0);var y=O=v([d.a],O),h=(r(208),r(35)),component=Object(h.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"page-section-container"},[t("div",{class:{"page-section":!0,"page-section--reversed":"start"==this.extraPosition}},[t("div",{class:{"copy-container":!0,"copy-container--alone":!this.$slots.extra}},[this._t("default")],2),this._v(" "),this.$slots.extra?t("aside",{staticClass:"extra-container importance--decoration"},[this._t("extra")],2):this._e()])])}),[],!1,null,"7a016f78",null);t.a=component.exports},208:function(e,t,r){"use strict";var n=r(202);r.n(n).a},209:function(e,t,r){(e.exports=r(66)(!1)).push([e.i,".page-section-container[data-v-7a016f78]{padding-top:4rem;padding-bottom:4rem}.page-section[data-v-7a016f78]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.page-section>*[data-v-7a016f78]{width:50%}.page-section--reversed[data-v-7a016f78]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.copy-container[data-v-7a016f78]{width:50%}.copy-container--alone[data-v-7a016f78]{width:100%}@media (max-width:37.49em){.copy-container[data-v-7a016f78]{width:100%}}.extra-container[data-v-7a016f78]{width:50%}@media (max-width:37.49em){.importance--decoration[data-v-7a016f78]{display:none}}",""])},219:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(194),_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(199),_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(196),_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(195),_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(197),_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(17),vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),vue_property_decorator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(198),__decorate=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},default_1=function(_Vue){function default_1(){var e;return Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,default_1),(e=Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(default_1).apply(this,arguments))).templateRender=null,e}return Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(default_1,_Vue),Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(default_1,[{key:"render",value:function(e){return this.templateRender?this.templateRender():e("div","Rendering...")}},{key:"created",value:function created(){this.templateRender=eval(this.$props.renderFn).bind(this),this.$options.staticRenderFns=eval(this.$props.staticRenderFns)}}]),default_1}(vue__WEBPACK_IMPORTED_MODULE_6__.a);__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_7__.b)(String)],default_1.prototype,"renderFn",void 0),__decorate([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_7__.b)(String)],default_1.prototype,"staticRenderFns",void 0),default_1=__decorate([vue_property_decorator__WEBPACK_IMPORTED_MODULE_7__.a],default_1),__webpack_exports__.a=default_1},220:function(e,t,r){var content=r(261);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(67).default)("752a848e",content,!0,{sourceMap:!1})},221:function(e,t,r){var content=r(263);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(67).default)("5c62b972",content,!0,{sourceMap:!1})},237:function(e,t,r){"use strict";r(96);var n=r(194),o=r(199),c=r(196),_=r(195),f=r(197),l=r(17),d=r(1),v=r(198),O=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"isExternal",value:function(e){return e.startsWith("http")}},{key:"isMail",value:function(e){return e.startsWith("mailto")}},{key:"isInternal",value:function(e){return!(this.isExternal(e)||this.isMail(e))}}]),t}(d.a);O([Object(v.b)(String)],y.prototype,"to",void 0),O([Object(v.b)(Boolean)],y.prototype,"secondary",void 0),O([Object(v.b)(Boolean)],y.prototype,"isStatic",void 0);var h=y=O([v.a],y),m=(r(262),r(35)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(!e.isStatic&&e.isInternal(e.to)?"nuxt-link":"a",{tag:"component",class:["button",{"button--secondary":e.secondary}],attrs:{href:e.to,to:!e.isStatic&&e.isInternal(e.to)?e.to:null,rel:e.isExternal(e.to)?"noopener":null,target:e.isExternal(e.to)?"_blank":null}},[e._t("default")],2)}),[],!1,null,"4428906b",null);t.a=component.exports},240:function(e,t,r){"use strict";var n=r(219).a,o=(r(260),r(35)),component=Object(o.a)(n,void 0,void 0,!1,null,"aae999d8",null);t.a=component.exports},260:function(e,t,r){"use strict";var n=r(220);r.n(n).a},261:function(e,t,r){(e.exports=r(66)(!1)).push([e.i,"ol[data-v-aae999d8],ul[data-v-aae999d8]{list-style-position:inside;padding-left:2rem;margin-top:1rem}ul[data-v-aae999d8]{list-style-type:square}ol li[data-v-aae999d8],ul li[data-v-aae999d8]{margin:1rem 0}h2[data-v-aae999d8]{margin-top:3rem}h3[data-v-aae999d8]{margin-top:2rem}p[data-v-aae999d8]{text-align:justify}",""])},262:function(e,t,r){"use strict";var n=r(221);r.n(n).a},263:function(e,t,r){(e.exports=r(66)(!1)).push([e.i,".button[data-v-4428906b]{padding:.66rem 1rem;background-color:var(--primary-color);border:2px solid var(--secondary-color);font-size:.75em;font-weight:100;color:#fff;text-transform:uppercase;text-decoration:none;box-shadow:0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);white-space:nowrap;line-height:4rem}.button--secondary[data-v-4428906b]{color:#000;background-color:#fff}",""])}}]);