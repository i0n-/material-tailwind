_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,c,l,a,u,p=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),l=document.createRange(),a=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),l.selectNodeContents(u),a.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(l):a.removeAllRanges()),u&&document.body.removeChild(u),c()}return p}},"0oic":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/inputs",function(){return n("joK8")}])},"7ItQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),o=(n("q1tI"),n("uUdh")),i=n("c2c2"),c=n("P5Jw"),l=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],a=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function u(e){var t=e.children,n=e.activeColor,u=(e.activeFramework,e.onColorClick),p=(e.onFrameworkClick,e.onCopy),s=e.codeToShow,d=e.copyText;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[n?Object(r.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:Object(r.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:l.map((function(e,t){return Object(r.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(n===a[t]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){u(a[t]),p(!1)}},t)}))})}):null,t,Object(r.jsxs)("div",{className:"relative mt-4",children:[Object(r.jsx)(c.CopyToClipboard,{text:s,onCopy:function(){return p(!0)},children:Object(r.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:d})}),Object(r.jsx)(o.a,{language:"jsx",style:i.a11yDark,children:s})]})]})})}},"9nMn":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("nKUr"),o=n("rePB"),i=n("KQm4"),c=n("Ff2n");n("q1tI");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={blueGray:"md-input-blue-gray-500",gray:"md-input-gray-500",brown:"md-input-brown-500",deepOrange:"md-input-deep-orange-500",orange:"md-input-orange-500",amber:"md-input-amber-500",yellow:"md-input-yellow-600",lime:"md-input-lime-500",lightGreen:"md-input-light-green-500",green:"md-input-green-500",teal:"md-input-teal-500",cyan:"md-input-cyan-500",lightBlue:"md-input-light-blue-500",blue:"md-input-blue-500",indigo:"md-input-indigo-500",deepPurple:"md-input-deep-purple-500",purple:"md-input-purple-500",pink:"md-input-pink-500",red:"md-input-red-500"},p={blueGray:"md-input-outline-blue-gray-500",gray:"md-input-outline-gray-500",brown:"md-input-outline-brown-500",deepOrange:"md-input-outline-deep-orange-500",orange:"md-input-outline-orange-500",amber:"md-input-outline-amber-500",yellow:"md-input-outline-yellow-600",lime:"md-input-outline-lime-500",lightGreen:"md-input-outline-light-green-500",green:"md-input-outline-green-500",teal:"md-input-outline-teal-500",cyan:"md-input-outline-cyan-500",lightBlue:"md-input-outline-light-blue-500",blue:"md-input-outline-blue-500",indigo:"md-input-outline-indigo-500",deepPurple:"md-input-outline-deep-purple-500",purple:"md-input-outline-purple-500",pink:"md-input-outline-pink-500",red:"md-input-outline-red-500"},s={blueGray:"border-blue-gray-500",gray:"border-gray-500",brown:"border-brown-500",deepOrange:"border-deep-orange-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-600",lime:"border-lime-500",lightGreen:"border-light-green-500",green:"border-green-500",teal:"border-teal-500",cyan:"border-cyan-500",lightBlue:"border-light-blue-500",blue:"border-blue-500",indigo:"border-indigo-500",deepPurple:"border-deep-purple-500",purple:"border-purple-500",pink:"border-pink-500",red:"border-red-500"};function d(e){var t,n,o,l,d,b,m,y,f=e.placeholder,g=e.color,j=e.size,O=void 0===j?"regular":j,h=e.outline,x=e.error,w=e.success,v=e.iconFamily,C=void 0===v?"material-icons":v,I=e.iconName,P=Object(c.a)(e,["placeholder","color","size","outline","error","success","iconFamily","iconName"]),k=[],N=["w-full","relative"];x?(d=s.red,b=u.red,m=p.red,y=s.red):w?(d=s.green,b=u.green,m=p.green,y=s.green):(d="border-gray-300",b=u[g],m=p[g],y=s[g]);var S,E=["text-gray-500","absolute","left-0","".concat(h?"-top-1.5":"-top-0.5"),"w-full","h-full",d,"pointer-events-none","".concat(!h&&"border border-t-0 border-l-0 border-r-0 border-b-1"),"".concat(h&&"flex"),"".concat(h&&"sm"===O&&"text-sm"),"".concat(h&&"leading-10"),"".concat(h&&"transition-all"),"".concat(h&&"duration-300")],B=["w-full","h-full","leading-normal","shadow-none","outline-none","focus:outline-none","focus:ring-0"],T=[].concat(B,["".concat(h?"pl-2 pr-7":"pl-0 pr-6"),"".concat(h&&"pt-1.5 pb-0.5"),"text-sm"]),D=[].concat(B,["".concat(h?"pl-3 pr-9":"pl-0 pr-7"),"".concat(h&&"pt-2.5 pb-1.5")]),z=[].concat(B,["".concat(h?"pl-3 pr-9":"pl-0 pr-7"),"".concat(h&&"pt-3.5 pb-2.5")]),_=[b,"md-input","bg-transparent","border","border-none"],R=[m,d,"md-input-outline","bg-transparent","border","border-1","border-gray-300","rounded-lg","focus:border-2","focus:".concat(y)];if("sm"===O)N.push("h-9"),(S=k).push.apply(S,Object(i.a)(T)),l="text-lg";else if("lg"===O){var F;N.push("h-12"),(F=k).push.apply(F,Object(i.a)(z)),l="text-xl"}else{var G;N.push("h-11"),(G=k).push.apply(G,Object(i.a)(D)),l="text-2xl"}return h?(t=k).push.apply(t,R):(n=k).push.apply(n,_),N=N.join(" "),E=E.join(" "),k=k.join(" "),"material-icons"===C?o=Object(r.jsx)("span",a(a({},P),{},{className:"".concat(C," p-0 text-gray-600 border-none absolute top-1/2 ").concat(h?"sm"===O?"right-2":"right-3":"right-0"," transform -translate-y-1/2 ").concat(l),children:I})):"font-awesome"===C&&(o=Object(r.jsx)("i",a(a({},P),{},{className:"fas ".concat(I," text-gray-600 border-none absolute top-1/2 ").concat(h?"sm"===O?"right-2":"right-3":"right-0"," transform -translate-y-1/2 ").concat(l)}))),Object(r.jsxs)("div",{className:N,children:[o,Object(r.jsx)("input",a(a({},P),{},{placeholder:" ",className:k})),Object(r.jsx)("label",{className:E,children:h?f:Object(r.jsx)("span",{className:"".concat("sm"===O&&"text-sm"," absolute top-1/4 transition-all duration-300"),children:f})}),x&&Object(r.jsx)("span",{className:"block mt-1 text-xs text-red-500",children:x})]})}},E7Xt:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr");n("q1tI");function o(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"font-medium text-xl mb-2 text-gray-900",children:e.title}),Object(r.jsx)("p",{className:"text-gray-700 mb-4 font-light",children:e.description})]})}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("a3WO");var o=n("BsWD");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},P5Jw:function(e,t,n){"use strict";var r=n("rHrb").CopyToClipboard;r.CopyToClipboard=r,e.exports=r},Vlex:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("nKUr"),o=n("rePB"),i=n("KQm4"),c=n("Ff2n");n("q1tI");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={blueGray:"md-input-blue-gray-500",gray:"md-input-gray-500",brown:"md-input-brown-500",deepOrange:"md-input-deep-orange-500",orange:"md-input-orange-500",amber:"md-input-amber-500",yellow:"md-input-yellow-600",lime:"md-input-lime-500",lightGreen:"md-input-light-green-500",green:"md-input-green-500",teal:"md-input-teal-500",cyan:"md-input-cyan-500",lightBlue:"md-input-light-blue-500",blue:"md-input-blue-500",indigo:"md-input-indigo-500",deepPurple:"md-input-deep-purple-500",purple:"md-input-purple-500",pink:"md-input-pink-500",red:"md-input-red-500"},p={blueGray:"md-input-outline-blue-gray-500",gray:"md-input-outline-gray-500",brown:"md-input-outline-brown-500",deepOrange:"md-input-outline-deep-orange-500",orange:"md-input-outline-orange-500",amber:"md-input-outline-amber-500",yellow:"md-input-outline-yellow-600",lime:"md-input-outline-lime-500",lightGreen:"md-input-outline-light-green-500",green:"md-input-outline-green-500",teal:"md-input-outline-teal-500",cyan:"md-input-outline-cyan-500",lightBlue:"md-input-outline-light-blue-500",blue:"md-input-outline-blue-500",indigo:"md-input-outline-indigo-500",deepPurple:"md-input-outline-deep-purple-500",purple:"md-input-outline-purple-500",pink:"md-input-outline-pink-500",red:"md-input-outline-red-500"},s={blueGray:"border-blue-gray-500",gray:"border-gray-500",brown:"border-brown-500",deepOrange:"border-deep-orange-500",orange:"border-orange-500",amber:"border-amber-500",yellow:"border-yellow-600",lime:"border-lime-500",lightGreen:"border-light-green-500",green:"border-green-500",teal:"border-teal-500",cyan:"border-cyan-500",lightBlue:"border-light-blue-500",blue:"border-blue-500",indigo:"border-indigo-500",deepPurple:"border-deep-purple-500",purple:"border-purple-500",pink:"border-pink-500",red:"border-red-500"};function d(e){var t,n,o,l,d,b,m=e.placeholder,y=e.color,f=e.size,g=void 0===f?"regular":f,j=e.outline,O=e.error,h=e.success,x=Object(c.a)(e,["placeholder","color","size","outline","error","success"]),w=[],v=["w-full","relative"];O?(o=s.red,l=u.red,d=p.red,b=s.red):h?(o=s.green,l=u.green,d=p.green,b=s.green):(o="border-gray-300",l=u[y],d=p[y],b=s[y]);var C,I=["text-gray-400","absolute","left-0","".concat(j?"-top-1.5":"-top-0.5"),"w-full","h-full","".concat(!j&&"border border-t-0 border-l-0 border-r-0 border-b-1"),o,"pointer-events-none","".concat(j&&"flex"),"".concat(j&&"sm"===g&&"text-sm"),"".concat(j&&"leading-10"),"".concat(j&&"transition-all"),"".concat(j&&"duration-300")],P=["w-full","h-full","leading-normal","shadow-none","outline-none","focus:outline-none","focus:ring-0"],k=[].concat(P,["".concat(j?"px-3":"px-0"),"".concat(j&&"pt-1.5 pb-0.5"),"text-sm"]),N=[].concat(P,["".concat(j?"px-3":"px-0"),"".concat(j&&"pt-2.5 pb-1.5")]),S=[].concat(P,["".concat(j?"px-3":"px-0"),"".concat(j&&"pt-3.5 pb-2.5")]),E=[l,"md-input","bg-transparent","border-none"],B=[d,o,"md-input-outline","bg-transparent","border","border-1","border-gray-300","rounded-lg","focus:border-2","focus:".concat(b)];if("sm"===g)v.push("h-9"),(C=w).push.apply(C,Object(i.a)(k));else if("lg"===g){var T;v.push("h-12"),(T=w).push.apply(T,Object(i.a)(S))}else{var D;v.push("h-11"),(D=w).push.apply(D,Object(i.a)(N))}return j?(t=w).push.apply(t,B):(n=w).push.apply(n,E),v=v.join(" "),I=I.join(" "),w=w.join(" "),Object(r.jsxs)("div",{className:v,children:[Object(r.jsx)("input",a(a({},x),{},{placeholder:" ",className:w})),Object(r.jsx)("label",{className:I,children:j?m:Object(r.jsx)("span",{className:"".concat("sm"===g&&"text-sm"," absolute top-1/4 transition-all duration-300"),children:m})}),O&&Object(r.jsx)("span",{className:"block mt-1 text-xs text-red-500",children:O}),h&&Object(r.jsx)("span",{className:"block mt-1 text-xs text-green-500",children:h})]})}},joK8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n("nKUr"),o=n("q1tI"),i=n("wEh6"),c=n("Blfr"),l=n("uCv7"),a=n("zQxQ"),u=n("E7Xt"),p=n("rePB"),s=n("Ff2n"),d=n("7ItQ"),b=n("Vlex");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.copyText,n=e.onCopy,i=e.placeholder,c=e.size,l=e.outline,a=e.errorMessage,u=e.successMessage,p=Object(s.a)(e,["copyText","onCopy","placeholder","size","outline","errorMessage","successMessage"]),m=Object(o.useState)("lightBlue"),f=m[0],g=m[1],j=Object(o.useState)("react"),O=j[0],h=j[1],x='import React from "react";\nimport Input from "@material-tailwind/react/Input";\n\nexport default function Input() {\n  return (\n    <Input\n      type="text"\n      color="'.concat(f,'"\n      size="').concat(c,'"\n      outline={').concat(l,'}\n      placeholder="').concat(i,'"').concat(a?'\n      error="'.concat(a,'"'):"").concat(u?'\n      success="'.concat(u,'"'):"","\n    />\n  )\n}");return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{copyText:t,onCopy:n,activeColor:f,activeFramework:O,codeToShow:x,onColorClick:function(e){return g(e)},onFrameworkClick:function(e){return h(e)},children:Object(r.jsx)("div",{className:"w-72 mx-auto ".concat(a||u?"mb-10":""),children:Object(r.jsx)(b.a,y({type:"text",color:f,size:c,outline:l,placeholder:i},p))})})})}var g=n("9nMn");function j(e){var t=e.copyText,n=e.onCopy,i=e.placeholder,c=e.size,l=e.outline,a=Object(o.useState)("lightBlue"),u=a[0],p=a[1],s=Object(o.useState)("react"),b=s[0],m=s[1],y='import React from "react";\nimport InputIcon from "@material-tailwind/react/InputIcon";\n\nexport default function Input() {\n  return (\n    <InputIcon\n      type="text"\n      color="'.concat(u,'"\n      size="').concat(c,'"\n      outline={').concat(l,'}\n      placeholder="').concat(i,'"\n      iconFamily="material-icons"\n      iconName="person"\n    />\n  )\n}');return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.a,{copyText:t,onCopy:n,activeColor:u,activeFramework:b,codeToShow:y,onColorClick:function(e){return p(e)},onFrameworkClick:function(e){return m(e)},children:Object(r.jsx)("div",{className:"w-72 mx-auto",children:Object(r.jsx)(g.a,{type:"text",color:u,size:c,outline:l,placeholder:i,iconFamily:"material-icons",iconName:"person"})})})})}function O(){var e=Object(o.useState)(null),t=e[0],n=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:"React Inputs"}),Object(r.jsx)(l.a,{}),Object(r.jsxs)(c.a,{children:[Object(r.jsx)(a.a,{title:"React Inputs",description:"Easily create inputs with different status and sizes using Material Tailwind inputs"}),Object(r.jsx)(u.a,{title:"Input"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Input",size:"regular",outline:!1}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Outline Input"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Outline Input",size:"regular",outline:!0}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Small Input"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Small Input",size:"sm",outline:!1}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Large Input"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Large Input",size:"lg",outline:!1}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Small Outline Input"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Small Outline Input",size:"sm",outline:!0}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Large Outline Input"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Large Outline Input",size:"lg",outline:!0}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Input with Icon"}),Object(r.jsx)(j,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Input with Icon",size:"regular",outline:!1}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Outline Input with Icon"}),Object(r.jsx)(j,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Outline Input with Icon",size:"regular",outline:!0}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Input with Error"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Input with Error",size:"Regular",outline:!1,errorMessage:"Its an error",error:"Its an error"}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Outline Input with Error"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Outline Input with Error",size:"Regular",outline:!0,errorMessage:"Its an error",error:"Its an error"}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Input with Success"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Input with Success",size:"Regular",outline:!1,successMessage:"Its a success",success:"Its a success"}),Object(r.jsx)("div",{className:"my-36"}),Object(r.jsx)(u.a,{title:"Outline Input with Success"}),Object(r.jsx)(f,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placeholder:"Outline Input with Success",size:"Regular",outline:!0,successMessage:"Its a success",success:"Its a success"})]})]})}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=i(n("q1tI")),o=i(n("+QRC"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?b(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(){var e,n;u(this,t);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return y(b(n=s(this,(e=d(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,i=t.text,c=t.onCopy,l=t.children,a=t.options,u=r.default.Children.only(l),p=(0,o.default)(i,a);c&&c(i,p),u&&u.props&&"function"===typeof u.props.onClick&&u.props.onClick(e)})),n}var n,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=a(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&p(n.prototype,i),c&&p(n,c),t}(r.default.PureComponent);t.CopyToClipboard=f,y(f,"defaultProps",{onCopy:void 0,options:void 0})}},[["0oic",0,2,1,3,4,5]]]);