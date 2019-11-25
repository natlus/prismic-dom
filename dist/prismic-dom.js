!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PrismicDOM",[],t):"object"==typeof exports?exports.PrismicDOM=t():e.PrismicDOM=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}}},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(t){return e(n,t)}));default:return o(n)&&o(i)?t:o(n)?r((function(t){return e(t,i)})):o(i)?r((function(t){return e(n,t)})):e(n,i)}}}},function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),u=d(n(17)),c=d(n(21)),a=d(n(7)),l=n(23),s=n(2),f=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return function(e,t){return t.reduce((function(e,t){var n=(0,c.default)(e);if(n){if(n.some((function(e){return e.isParentOf(t)})))return(0,u.default)(e).concat([n.concat(t)]);var r=(0,c.default)(n);return r&&function(e,t){return e.end>=t.start}(r,t)?(0,u.default)(e).concat([n.concat(t)]):e.concat([[t]])}return[[t]]}),[])}(0,(0,i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function y(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.sort((function(e,t){if(e.isParentOf(t))return-1;if(t.isParentOf(e))return 1;var n=s.PRIORITIES[e.type]-s.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return{elected:t[0],others:t.slice(1)}}function m(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,i){var u=[],c=0===i&&o.start>n.lower,a=i===t.length-1&&n.upper>o.end;if(c){var l=new f.TextNode(n.lower,o.start,e.slice(n.lower,o.start));u=u.concat(l)}else{var s=t[i-1];if(s&&o.start>s.end){var d=e.slice(s.end,o.start),p=new f.TextNode(s.end,o.start,d);u=u.concat(p)}}if(u=u.concat(o),a){var h=new f.TextNode(o.end,n.upper,e.slice(o.end,n.upper));u=u.concat(h)}return r.concat(u)}),[])}(e,v(e,t),n);var r=e.slice(n.lower,n.upper);return[new f.TextNode(n.lower,n.upper,r)]}function v(e,t){var n=h((0,o.default)((function(e){return e.start}),t)).map(y),i=(0,r.default)(n.map((function(t){return function(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,i=n.outer,u=function(e,t,n){return n.start<t.start?{inner:f.SpanNode.slice(n,t.start,n.end,e),outer:f.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:f.SpanNode.slice(n,n.start,t.end,e),outer:f.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return{inner:o.concat(u.inner),outer:u.outer?i.concat(u.outer):i}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return[t.elected.setChildren(m(e,r,t.elected.boundaries()))].concat(v(e,o))}(e,t)})));return(0,o.default)((function(e){return e.start}),i)}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"fromRichText",value:function(e){return{key:(0,a.default)(),children:e.reduce((function(e,t,n){if(l.RichTextBlock.isEmbedBlock(t.type)||l.RichTextBlock.isImageBlock(t.type))return e.concat(new f.BlockNode(t.type,t));var r=function(e){var t=e.spans.map((function(t){var n=e.text.slice(t.start,t.end);return new f.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return m(e.text,t,n)}(t),o=e[e.length-1];if(l.RichTextBlock.isListItem(t.type)&&o&&o instanceof f.ListBlockNode){var i=new f.ListItemBlockNode(t,r),c=o.addChild(i);return(0,u.default)(e).concat(c)}if(l.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof f.OrderedListBlockNode){var a=new f.OrderedListItemBlockNode(t,r),s=o.addChild(a);return(0,u.default)(e).concat(s)}if(l.RichTextBlock.isListItem(t.type)){var d=new f.ListItemBlockNode(t,r),p=new f.ListBlockNode(l.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(l.RichTextBlock.isOrderedListItem(t.type)){var h=new f.OrderedListItemBlockNode(t,r),y=new f.OrderedListBlockNode(l.RichTextBlock.emptyOrderedList(),[h]);return e.concat(y)}return e.concat(new f.BlockNode(t.type,t,r))}),[])}}}])&&p(t,n),e}();t.default=b},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function(e){return"[object String]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function e(t,n,r){d(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r};t.Node=p;var h=function(e){function t(e,n,r,o,i,u){var c;return d(this,t),(c=l(this,s(t).call(this,r,u,i))).start=e,c.end=n,c.text=o,c.children=i,c}return f(t,p),a(t,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=h;var y=function(e){function t(e,n,r){d(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return l(this,s(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return f(t,h),t}();t.TextNode=y;var m=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,t),l(this,s(t).call(this,e,n,r))}return f(t,p),t}();t.BlockNode=m;var v=function(e){function t(e,n){return d(this,t),l(this,s(t).call(this,i.NODE_TYPES.listItem,e,n))}return f(t,m),t}();t.ListItemBlockNode=v;var b=function(e){function t(e,n){return d(this,t),l(this,s(t).call(this,i.NODE_TYPES.oListItem,e,n))}return f(t,m),t}();t.OrderedListItemBlockNode=b;var g=function(e){function t(e,n){return d(this,t),l(this,s(t).call(this,i.NODE_TYPES.oList,e,n))}return f(t,m),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=g;var x=function(e){function t(e,n){return d(this,t),l(this,s(t).call(this,i.NODE_TYPES.list,e,n))}return f(t,m),a(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=x},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";var r=c(n(11)),o=c(n(4)),i=c(n(24)),u=n(2);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)}},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,u,c=[],a=0,l=n.length;a<l;){if(r(n[a]))for(u=0,i=(o=e?t(n[a]):n[a]).length;u<i;)c[c.length]=o[u],u+=1;else c[c.length]=n[a];a+=1}return c}}},function(e,t,n){var r=n(0),o=n(5),i=n(6),u=r((function(e){return!!o(e)||!!e&&"object"==typeof e&&!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));e.exports=u},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0}))}));e.exports=r},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r}))}));e.exports=r},function(e,t,n){var r=n(18)(0,-1);e.exports=r},function(e,t,n){var r=n(19),o=n(20)(r("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=o},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}}},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,u,c){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o((function(t,r){return e(n,t,r)}));case 2:return i(n)&&i(u)?t:i(n)?o((function(t,n){return e(t,u,n)})):i(u)?o((function(t,r){return e(n,t,r)})):r((function(t){return e(n,u,t)}));default:return i(n)&&i(u)&&i(c)?t:i(n)&&i(u)?o((function(t,n){return e(t,n,c)})):i(n)&&i(c)?o((function(t,n){return e(t,u,n)})):i(u)&&i(c)?o((function(t,r){return e(n,t,r)})):i(n)?r((function(t){return e(t,u,c)})):i(u)?r((function(t){return e(n,t,c)})):i(c)?r((function(t){return e(n,u,t)})):e(n,u,c)}}}},function(e,t,n){var r=n(22)(-1);e.exports=r},function(e,t,n){var r=n(1),o=n(6),i=r((function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]}));e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r}var t,n;return t=e,(n=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(t,n),e}();t.RichTextBlock=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8);t.default=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,c=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,u,c,o)||t(n.type,n.element,u,c,o)}(e,n)}(e,t,r,n)}))}}])},function(e,t,n){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=r(n(2)),i=r(n(1));e.exports={Link:o.default,Date:i.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return null;var t=24==e.length?e.substring(0,22)+":"+e.substring(22,24):e;return new Date(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:function(e,t){return"Document"===e.link_type?t?t(e,e.isBroken):"":e.url}}},function(e,t,n){e.exports=n(0)}])},function(e,t,n){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var i="",u=0,c=0;for(u=o.index;u<n.length;u++){switch(n.charCodeAt(u)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==u&&(i+=n.substring(c,u)),c=u+1,i+=t}return c!==u?i+n.substring(c,u):i}},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),u=n.n(i),c=n(2),a=n.n(c);function l(e,t,n,o,u){switch(t){case i.Elements.heading1:return f("h1",n,u);case i.Elements.heading2:return f("h2",n,u);case i.Elements.heading3:return f("h3",n,u);case i.Elements.heading4:return f("h4",n,u);case i.Elements.heading5:return f("h5",n,u);case i.Elements.heading6:return f("h6",n,u);case i.Elements.paragraph:return f("p",n,u);case i.Elements.preformatted:return function(e){return"<pre".concat(s(e),">").concat(a()(e.text),"</pre>")}(n);case i.Elements.strong:return f("strong",n,u);case i.Elements.em:return f("em",n,u);case i.Elements.listItem:case i.Elements.oListItem:return f("li",n,u);case i.Elements.list:return f("ul",n,u);case i.Elements.oList:return f("ol",n,u);case i.Elements.image:return function(e,t){var n=t.linkTo?r.Link.url(t.linkTo,e):null,o=t.linkTo&&t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"",i=[t.label||"","block-img"],u='<img src="'.concat(t.url,'" alt="').concat(t.alt||"",'" copyright="').concat(t.copyright||"",'">');return'\n    <p class="'.concat(i.join(" "),'">\n      ').concat(n?"<a ".concat(o,' href="').concat(n,'">').concat(u,"</a>"):u,"\n    </p>\n  ")}(e,n);case i.Elements.embed:return function(e){return'\n    <div data-oembed="'.concat(e.oembed.embed_url,'"\n      data-oembed-type="').concat(e.oembed.type,'"\n      data-oembed-provider="').concat(e.oembed.provider_name,'"\n      ').concat(s(e),">\n          \n      ").concat(e.oembed.html,"\n    </div>\n  ")}(n);case i.Elements.hyperlink:return function(e,t,n){var o=t.data.target?'target="'.concat(t.data.target,'" rel="noopener"'):"";return"<a ".concat(o,' href="').concat(r.Link.url(t.data,e),'">').concat(n.join(""),"</a>")}(e,n,u);case i.Elements.label:return function(e,t){return"<span ".concat(s(e.data),">").concat(t.join(""),"</span>")}(n,u);case i.Elements.span:return function(e){return e?a()(e).replace(/\n/g,"<br />"):""}(o);default:return""}}function s(e){return e.label?' class="'.concat(e.label,'"'):""}function f(e,t,n){return"<".concat(e).concat(s(t),">").concat(n.join(""),"</").concat(e,">")}var d={asText:function(e,t){return u.a.asText(e,t)},asHtml:function(e,t,n){return u.a.serialize(e,l.bind(null,t),n).join("")},Elements:i.Elements};t.default={Date:o.a.Date,RichText:d,Link:o.a.Link}}])}));