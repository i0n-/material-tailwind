_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{"+QRC":function(e,t,r){"use strict";var n=r("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,l,a,i,c,b,p=!1;t||(t={}),r=t.debug||!1;try{if(a=n(),i=document.createRange(),c=document.getSelection(),(b=document.createElement("span")).textContent=e,b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=o[t.format]||o.default;window.clipboardData.setData(l,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(b),i.selectNodeContents(b),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(u){r&&console.error("unable to copy using execCommand: ",u),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),l=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),b&&document.body.removeChild(b),a()}return p}},"7ItQ":function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r("nKUr"),o=(r("q1tI"),r("uUdh")),l=r("c2c2"),a=r("P5Jw"),i=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],c=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function b(e){var t=e.children,r=e.activeColor,b=(e.activeFramework,e.onColorClick),p=(e.onFrameworkClick,e.onCopy),u=e.codeToShow,g=e.copyText;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[r?Object(n.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:Object(n.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:i.map((function(e,t){return Object(n.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(r===c[t]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){b(c[t]),p(!1)}},t)}))})}):null,t,Object(n.jsxs)("div",{className:"relative mt-4",children:[Object(n.jsx)(a.CopyToClipboard,{text:u,onCopy:function(){return p(!0)},children:Object(n.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:g})}),Object(n.jsx)(o.a,{language:"jsx",style:l.a11yDark,children:u})]})]})})}},"8wsC":function(e,t,r){"use strict";var n=r("rePB"),o=r("nKUr"),l=r("KQm4"),a=r("Ff2n"),i=r("q1tI"),c=r("FESb"),b=r.n(c);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={blueGray:"bg-blue-gray-500",gray:"bg-gray-500",brown:"bg-brown-500",deepOrange:"bg-deep-orange-500",orange:"bg-orange-500",amber:"bg-amber-500",yellow:"bg-yellow-600",lime:"bg-lime-500",lightGreen:"bg-light-green-500",green:"bg-green-500",teal:"bg-teal-500",cyan:"bg-cyan-500",lightBlue:"bg-light-blue-500",blue:"bg-blue-500",indigo:"bg-indigo-500",deepPurple:"bg-deep-purple-500",purple:"bg-purple-500",pink:"bg-pink-500",red:"bg-red-500"},s={blueGray:"bg-blue-gray-700",gray:"bg-gray-700",brown:"bg-brown-700",deepOrange:"bg-deep-orange-700",orange:"bg-orange-700",amber:"bg-amber-700",yellow:"bg-yellow-700",lime:"bg-lime-700",lightGreen:"bg-light-green-700",green:"bg-green-700",teal:"bg-teal-700",cyan:"bg-cyan-700",lightBlue:"bg-light-blue-700",blue:"bg-blue-700",indigo:"bg-indigo-700",deepPurple:"bg-deep-purple-700",purple:"bg-purple-700",pink:"bg-pink-700",red:"bg-red-700"},d={blueGray:"bg-blue-gray-400",gray:"bg-gray-400",brown:"bg-brown-400",deepOrange:"bg-deep-orange-400",orange:"bg-orange-400",amber:"bg-amber-400",yellow:"bg-yellow-500",lime:"bg-lime-400",lightGreen:"bg-light-green-400",green:"bg-green-400",teal:"bg-teal-400",cyan:"bg-cyan-400",lightBlue:"bg-light-blue-400",blue:"bg-blue-400",indigo:"bg-indigo-400",deepPurple:"bg-deep-purple-400",purple:"bg-purple-400",pink:"bg-pink-400",red:"bg-red-400"},y={blueGray:"bg-blue-gray-800",gray:"bg-gray-800",brown:"bg-brown-800",deepOrange:"bg-deep-orange-800",orange:"bg-orange-800",amber:"bg-amber-800",yellow:"bg-yellow-800",lime:"bg-lime-800",lightGreen:"bg-light-green-800",green:"bg-green-800",teal:"bg-teal-800",cyan:"bg-cyan-800",lightBlue:"bg-light-blue-800",blue:"bg-blue-800",indigo:"bg-indigo-800",deepPurple:"bg-deep-purple-800",purple:"bg-purple-800",pink:"bg-pink-800",red:"bg-red-800"},f={blueGray:"text-blue-gray-500",gray:"text-gray-500",brown:"text-brown-500",deepOrange:"text-deep-orange-500",orange:"text-orange-500",amber:"text-amber-500",yellow:"text-yellow-600",lime:"text-lime-500",lightGreen:"text-light-green-500",green:"text-green-500",teal:"text-teal-500",cyan:"text-cyan-500",lightBlue:"text-light-blue-500",blue:"text-blue-500",indigo:"text-indigo-500",deepPurple:"text-deep-purple-500",purple:"text-purple-500",pink:"text-pink-500",red:"text-red-500"},m={blueGray:"border-blue-gray-500",gray:"border-gray-500",brown:"border-brown-500",deepOrange:"border-deep-orange-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-600",lime:"border-lime-500",lightGreen:"border-light-green-500",green:"border-green-500",teal:"border-teal-500",cyan:"border-cyan-500",lightBlue:"border-light-blue-500",blue:"border-blue-500",indigo:"border-indigo-500",deepPurple:"border-deep-purple-500",purple:"border-purple-500",pink:"border-pink-500",red:"border-red-500"},h={blueGray:"bg-blue-gray-50",gray:"bg-gray-50",brown:"bg-brown-50",deepOrange:"bg-deep-orange-50",orange:"bg-orange-50",amber:"bg-amber-50",yellow:"bg-yellow-50",lime:"bg-lime-50",lightGreen:"bg-light-green-50",green:"bg-green-50",teal:"bg-teal-50",cyan:"bg-cyan-50",lightBlue:"bg-light-blue-50",blue:"bg-blue-50",indigo:"bg-indigo-50",deepPurple:"bg-deep-purple-50",purple:"bg-purple-50",pink:"bg-pink-50",red:"bg-red-50"},x={blueGray:"border-blue-gray-700",gray:"border-gray-700",brown:"border-brown-700",deepOrange:"border-deep-orange-700",orange:"border-orange-700",amber:"border-amber-700",yellow:"border-yellow-700",lime:"border-lime-700",lightGreen:"border-light-green-700",green:"border-green-700",teal:"border-teal-700",cyan:"border-cyan-700",lightBlue:"border-light-blue-700",blue:"border-blue-700",indigo:"border-indigo-700",deepPurple:"border-deep-purple-700",purple:"border-purple-700",pink:"border-pink-700",red:"border-red-700"},w={blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-700",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"},j={blueGray:"bg-blue-gray-100",gray:"bg-gray-100",brown:"bg-brown-100",deepOrange:"bg-deep-orange-100",orange:"bg-orange-100",amber:"bg-amber-100",yellow:"bg-yellow-100",lime:"bg-lime-100",lightGreen:"bg-light-green-100",green:"bg-green-100",teal:"bg-teal-100",cyan:"bg-cyan-100",lightBlue:"bg-light-blue-100",blue:"bg-blue-100",indigo:"bg-indigo-100",deepPurple:"bg-deep-purple-100",purple:"bg-purple-100",pink:"bg-pink-100",red:"bg-red-100"},O=Object(i.forwardRef)((function(e,t){var r,n,i=e.children,c=e.color,p=e.buttonType,O=e.size,v=void 0===O?"regular":O,C=e.rounded,k=e.iconOnly,T=e.ripple,P=Object(a.a)(e,["children","color","buttonType","size","rounded","iconOnly","ripple"]),N=new b.a,E=[],D=["flex","items-center","gap-1","rounded-lg","font-bold","outline-none","uppercase","tracking-wider","focus:outline-none","focus:shadow-none","transition-all","duration-300",C=C?"rounded-full":"rounded"],S=["text-white","shadow-md","hover:shadow-xl","focus:text-white",g[c],"hover:".concat(s[c]),"focus:".concat(d[c]),"active:".concat(y[c])],R=["bg-transparent","border","border-solid","shadow-none",f[c],m[c],"hover:".concat(h[c]),"hover:".concat(x[c]),"hover:".concat(w[c]),"focus:".concat(h[c]),"active:".concat(j[c])],_=["bg-transparent",f[c],"hover:".concat(h[c]),"hover:".concat(w[c]),"focus:".concat(h[c]),"active:".concat(j[c])],G=[].concat(D,[k?"w-8 h-8 p-0 grid place-items-center":"py-1.5 px-4","text-xs","leading-normal"]),B=[].concat(D,[k?"w-10 h-10 p-0 grid place-items-center":"py-2.5 px-6","text-xs","leading-normal"]),I=[].concat(D,[k?"w-12 h-12 p-0 grid place-items-center":"py-3 px-7","text-sm","leading-relaxed"]);if("sm"===v)(r=E).push.apply(r,Object(l.a)(G));else if("lg"===v){var U;(U=E).push.apply(U,Object(l.a)(I))}else{var M;(M=E).push.apply(M,Object(l.a)(B))}if("outline"===p)(n=E).push.apply(n,R);else if("link"===p){var A;(A=E).push.apply(A,_)}else{var F;(F=E).push.apply(F,S)}return E=E.join(" "),Object(o.jsx)("button",u(u({},P),{},{className:E,ref:t,onMouseUp:function(e){"dark"===T&&N.create(e,"dark"),"light"===T&&N.create(e,"light")},children:i}))}));t.a=O},E7Xt:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("nKUr");r("q1tI");function o(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{className:"font-medium text-xl mb-2 text-gray-900",children:e.title}),Object(n.jsx)("p",{className:"text-gray-700 mb-4 font-light",children:e.description})]})}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},I9AE:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("nKUr");r("q1tI");function o(e){var t=e.children;return Object(n.jsx)("div",{className:"px-2.5 py-1.5 bg-black bg-opacity-80 text-white text-sm rounded",children:t})}},P5Jw:function(e,t,r){"use strict";var n=r("rHrb").CopyToClipboard;n.CopyToClipboard=n,e.exports=n},X8D5:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/tooltips",function(){return r("bzrx")}])},"bn+Z":function(e,t,r){"use strict";function n(e,t,r){switch(e){case"react":case"angular":case"html":case"vue":case"javascript":break;default:t(!0),r(e)}}r.d(t,"a",(function(){return n}))},bzrx:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r("nKUr"),o=r("q1tI"),l=r("wEh6"),a=r("Blfr"),i=r("uCv7"),c=r("zQxQ"),b=r("E7Xt"),p=r("7ItQ"),u=r("bn+Z"),g=r("8wsC"),s=r("cuO0"),d=r("I9AE");function y(e){var t=e.copyText,r=e.onCopy,l=e.placement,a=Object(o.useState)("lightBlue"),i=a[0],c=a[1],b=Object(o.useState)("react")[0],y=Object(o.useState)(!1),f=y[0],m=y[1],h=Object(o.useState)(),x=h[0],w=h[1],j=Object(o.useRef)(),O=Object(u.a)(b,m,w),v='import React, { useRef } from "react";\nimport Button from "@material-tailwind/react/Button";\nimport Tooltips from "@material-tailwind/react/Tooltips";\nimport TooltipsContent from "@material-tailwind/react/TooltipsContent";\n\nexport default function Tooltips() {\n  const buttonRef = useRef();\n\n  return (\n    <>\n      <Button color="'.concat(i,'" ref={buttonRef} ripple="light">\n        Tooltip ').concat(l,'\n      </Button>\n\n      <Tooltips placement="').concat(l,'" ref={buttonRef}>\n        <TooltipContents>Tooltip ').concat(l,"</TooltipContents>\n      </Tooltips>\n    </>\n  );\n}");return Object(n.jsxs)(n.Fragment,{children:[f?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(){return m(!1)},children:Object(n.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-sm",children:Object(n.jsxs)("div",{className:"border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none",children:[Object(n.jsxs)("div",{className:"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",children:[Object(n.jsx)("h5",{className:"text-2xl font-normal mt-0 mb-0 ",children:"Component not supported"}),Object(n.jsx)("button",{className:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:function(){return m(!1)},children:Object(n.jsx)("span",{className:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"relative p-6 flex-auto",children:Object(n.jsxs)("p",{className:"text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4",children:["At the moment we do not support the choosen framework (",x,") for this component."]})})]})})}),Object(n.jsx)("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"})]}):null,Object(n.jsx)(p.a,{copyText:t,onCopy:r,activeColor:i,activeFramework:b,codeToShow:v,onColorClick:function(e){return c(e)},onFrameworkClick:O,children:Object(n.jsxs)("div",{className:"flex justify-center",children:[Object(n.jsxs)(g.a,{color:i,ref:j,ripple:"light",children:["Tooltip ",l]}),Object(n.jsx)(s.a,{placement:l,ref:j,children:Object(n.jsxs)(d.a,{children:["Tooltip ",l]})})]})})]})}function f(){var e=Object(o.useState)(null),t=e[0],r=e[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{title:"React Tooltips"}),Object(n.jsx)(i.a,{}),Object(n.jsxs)(a.a,{children:[Object(n.jsx)(c.a,{title:"React Tooltips",description:"Material Tailwind tooltip plugin is a small pop-up element that appears while the user moves the mouse pointer over an element."}),Object(n.jsx)(b.a,{title:"Tooltip Left"}),Object(n.jsx)(y,{copyText:"Modal"===t?"Copied":"Copy",onCopy:function(e){return r(e?"Modal":"")},placement:"left"}),Object(n.jsx)("div",{className:"my-36"}),Object(n.jsx)(b.a,{title:"Tooltip Right"}),Object(n.jsx)(y,{copyText:"Modal"===t?"Copied":"Copy",onCopy:function(e){return r(e?"Modal":"")},placement:"right"}),Object(n.jsx)("div",{className:"my-36"}),Object(n.jsx)(b.a,{title:"Tooltip Top"}),Object(n.jsx)(y,{copyText:"Modal"===t?"Copied":"Copy",onCopy:function(e){return r(e?"Modal":"")},placement:"top"}),Object(n.jsx)("div",{className:"my-36"}),Object(n.jsx)(b.a,{title:"Tooltip Bottom"}),Object(n.jsx)(y,{copyText:"Modal"===t?"Copied":"Copy",onCopy:function(e){return r(e?"Modal":"")},placement:"bottom"})]})]})}},cuO0:function(e,t,r){"use strict";var n=r("nKUr"),o=r("q1tI"),l=r("8QT5"),a=r("b5oN"),i=(r("Czj+"),r("hLah"),Object(o.forwardRef)((function(e,t){var r=e.children,o=e.placement;return Object(n.jsx)(l.a,{content:r,placement:o,reference:t,animation:"shift-away",arrow:a.c,className:"arrow-dark",interactive:!0})})));t.a=i},rHrb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=l(r("q1tI")),o=l(r("+QRC"));function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?s(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){function t(){var e,r;b(this,t);for(var l=arguments.length,a=new Array(l),i=0;i<l;i++)a[i]=arguments[i];return y(s(r=u(this,(e=g(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=r.props,l=t.text,a=t.onCopy,i=t.children,c=t.options,b=n.default.Children.only(i),p=(0,o.default)(l,c);a&&a(l,p),b&&b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e)})),r}var r,l,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(l=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=c(e,["text","onCopy","options","children"]),o=n.default.Children.only(t);return n.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}])&&p(r.prototype,l),a&&p(r,a),t}(n.default.PureComponent);t.CopyToClipboard=f,y(f,"defaultProps",{onCopy:void 0,options:void 0})}},[["X8D5",0,2,1,3,4,5,7,6]]]);