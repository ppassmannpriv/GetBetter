(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{293:function(t,n,e){"use strict";e.r(n);e(30),e(39),e(9),e(24),e(38),e(23),e(29),e(40),e(41),e(26);function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){f=!0,c=t},f:function(){try{l||null==e.return||e.return()}finally{if(f)throw c}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var c={props:{document:{required:!0,type:Object}},data:function(){return{anchors:[],activeAnchor:null,showNav:!1}},mounted:function(){console.log(this.document.title);var t,n=r(this.document.body.children);try{for(n.s();!(t=n.n()).done;){var e=t.value;if(e.tag&&e.children&&"h"===e.tag[0]){var title=null;e.children.forEach((function(t){"text"===t.type&&(title=t.value)})),this.anchors.push({id:e.props.id,title:title,depth:parseInt(e.tag[1],10)})}}}catch(t){n.e(t)}finally{n.f()}},methods:{jumpTo:function(t){this.activeAnchor=t,this.showNav&&(this.showNav=!1)}}},l=e(14),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"max-w-prose mx-auto"},[t.showNav?e("div",{staticClass:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-25",on:{click:function(n){t.showNav=!1}}}):t._e(),t._v(" "),e("div",{staticClass:"fixed",class:{"left-1/2 z-10 -translate-x-1/2 -translate-y-1/2":t.showNav,"hidden xl:block pr-4 transform -translate-x-full":!t.showNav}},[e("div",{staticClass:"p-4 mr-0 xl:mr-4 w-64 bg-green-200"},[e("div",{staticClass:"mb-2 pb-2 text-xl font-medium border-b-2 border-green-300"},[t._v("\n                Navigation\n            ")]),t._v(" "),t._l(t.anchors,(function(n){return e("div",{key:n.id,staticClass:"truncate",style:{paddingLeft:10*(n.depth-1)+"px"}},[e("a",{staticClass:"text-black hover:text-green-700 no-underline!important truncate",class:{"text-sm":n.depth>1},attrs:{href:"#"+n.id},on:{click:function(e){return t.jumpTo(n)}}},[t._v("\n                    "+t._s(n.title)+"\n                ")])])}))],2)]),t._v(" "),e("div",{staticClass:"prose prose-green max-w-none mx-auto overflow-x-auto"},[e("nuxt-content",{ref:"content",attrs:{document:t.document}})],1),t._v(" "),e("div",{staticClass:"block xl:hidden fixed mr-10 mb-10 bottom-0 right-0"},[e("button",{staticClass:"rounded-full bg-green-300 focus:bg-green-400 p-4 shadow",on:{click:function(n){t.showNav=!t.showNav}}},[t._v("\n            Nav\n        ")])])])}),[],!1,null,null,null);n.default=component.exports},308:function(t,n,e){"use strict";e.r(n);var r=e(6),o=(e(44),{layout:"content",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("faq").fetch();case 3:return n.t0=n.sent,n.abrupt("return",{page:n.t0});case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"FAQ - Get Better"}}}),c=e(14),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("Content",{attrs:{document:t.page}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Content:e(293).default})}}]);