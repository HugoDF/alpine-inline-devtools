!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e){function n(t){return function(t){if(Array.isArray(t))return t}(t)||i(t)||a(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||i(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.devtools=function(t){return{show:!1,alpines:[],observer:null,position:t||"right",start:function(){var t=this;this.insertHTML(),this.alpines=null,this.alpines=document.querySelectorAll("[x-data]:not(#alpine-devtools)"),this.observer=new MutationObserver((function(e){t.updateAlpines()})),this.registerEventsFromComponentsOnWindow(),this.alpines&&this.wrapAlpines()},getAlpineData:function(t){return t.__x?Object.entries(t.__x.getUnobservedData()):[]},registerEventsFromComponentsOnWindow:function(){var t=this,e=[];this.alpines.forEach((function(t){e.push(o(t.outerHTML.matchAll(/(x-on:|@)(.*?)(=|\.)/g)).map((function(t){return t[2]})))})),e.flat().forEach((function(e){window.addEventListener(e,(function(){t.alpines=document.querySelectorAll("[x-data]:not(#alpine-devtools)")}))}))},wrapAlpines:function(){var t=this;this.alpines.forEach((function(e){t.observer.observe(e,{attributes:!0,childList:!0,subtree:!0})}))},updateAlpines:function(){this.alpines=document.querySelectorAll("[x-data]:not(#alpine-devtools)")},computeTitle:function(t){return t.getAttribute("x-title")||t.getAttribute("aria-label")||t.id||this.convertFunctionName(t.getAttribute("x-data"))||"<".concat(t.tagName.toLowerCase(),">")},getType:function(t){return Array.isArray(t)?"array":"function"==typeof t?"function":r(t)},getItem:function(t,e){return'<span>\n\t\t\t\t<span style="color:#4aea8b" class="text-serif">\n\t\t\t\t\t<span class="inline-block" style="min-width:1rem">'.concat(t,'</span>\n\t\t\t\t\t<span class="text-white">:</span>\n\t\t\t\t\t<span style="color:#8ac0cf" class="bg-gray-800 px-1 text-xs">').concat(this.getType(e),'</span>\n\t\t\t\t</span>\n\t\t\t\t<span style="color:#d8dee9">').concat("string"===this.getType(e)?this.escapeHTML(this.getValue(e)):this.getValue(e),"</span>\n\t\t\t</span>")},getValue:function(t){var e=this;return"boolean"==this.getType(t)||"number"==this.getType(t)?t:"string"==this.getType(t)?'"'.concat(t,'"'):"array"==this.getType(t)?t?Object.entries(t).map((function(t){var r=n(t).slice(0);return'<ul class="ml-4">'.concat(e.getItem(r[0],r[1]),"</ul>")})).join(""):t:"object"==this.getType(t)&&t?Object.entries(t).map((function(t){var r=n(t).slice(0);return'<ul class="ml-4">'.concat(e.getItem(r[0],r[1]),"</ul>")})).join(""):t},convertFunctionName:function(t){if(0!==t.indexOf("{")){var e=t.replace(/\(([^\)]+)\)/,"").replace("()","").replace(/([A-Z])/g," $1");return e?e.charAt(0).toUpperCase()+e.slice(1):""}},escapeHTML:function(t){var e=document.createElement("div");return e.innerText=t,e.innerHTML},insertHTML:function(){this.$el.innerHTML='<button\n\t\t\t\tx-show.immediate="!show"\n\t\t\t\tstyle="background-color:rgb(138, 192, 207);border-color:#d8dee9;min-width:0;"\n\t\t\t\t:class="position + \'-0\'"\n\t\t\t\tclass="border border-3 bottom-0 fixed focus:outline-none font-black h-10 mb-3 mx-4 rounded-full text-gray-900 hover:text-white shadow-2xl text w-10"\n\t\t\t\t@click="show = true">A</button>\n\t\t\t<div\n\t\t\t\tstyle="width:500px;z-index:2147483647;"\n\t\t\t\t:class="position + \'-0\'"\n\t\t\t\tclass="fixed bottom-0 my-3 mx-4 bg-gray-900 text-gray-400 pb-3 pt-6 max-w-screen shadow-2xl rounded-lg overflow-hidden"\n\t\t\t\tx-cloak\n\t\t\t\tx-show="show"\n\t\t\t\tx-transition:enter="transition ease-in duration-200"\n\t\t\t\tx-transition:enter-start="transform opacity-100 translate-y-2"\n\t\t\t\tx-transition:enter-end="transform opacity-100"\n\t\t\t\tx-transition:leave="transition ease-out duration-300"\n\t\t\t\tx-transition:leave-start="transform translate-y-0 opacity-100"\n\t\t\t\tx-transition:leave-end="transform translate-y-2 opacity-0">\n\t\t\t\t<button style="min-width:0" class="absolute top-0 right-0 mr-2 bg-gray-900 font-mono focus:outline-none" @click="show = false">x</button>\n\t\t\t\t<div\n\t\t\t\t\tstyle="max-height:70vh"\n\t\t\t\t\tclass="divide-y-2 divide-gray-700 space-y-5 -mt-5 mb-5 px-3 overflow-scroll">\n\t\t\t\t\t<template x-for="alpine of alpines">\n\t\t\t\t\t\t<div class="pt-5">\n\t\t\t\t\t\t\t<div x-text="computeTitle(alpine)" class="mb-1 font-extrabold" style="color:#d8dee9"></div>\n\t\t\t\t\t\t\t<template x-if="!getAlpineData(alpine).length"><p class="text-sm">No data found</p></template>\n\t\t\t\t\t\t\t<template x-for="[key, value] of getAlpineData(alpine)">\n\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\tclass="leading-normal"\n\t\t\t\t\t\t\t\t\tx-html="getItem(key, value)"\n\t\t\t\t\t\t\t\t\tx-show="getType(value) !== \'function\'">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n\t\t\t\t</div>\n\t\t\t\t<div class="border-t border-gray-700 pt-2 text-xs leading-none mx-3">\n\t\t\t\t\t<a class="hover:text-blue-500 mr-1" target="_blank" href="https://twitter.com/kevinbatdorf">@kevinbatdorf</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a class="hover:text-blue-500 mx-1" target="_blank" href="https://github.com/kevinbatdorf">github</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a class="hover:text-blue-500 mx-1" target="_blank" href="https://github.com/sponsors/KevinBatdorf">sponsor</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a class="hover:text-blue-500 mx-1" target="_blank" href="https://codepen.io/collection/nRxrPk">more demos</a>\n\t\t\t\t</div>\n\t\t\t</div>'}}}}]);