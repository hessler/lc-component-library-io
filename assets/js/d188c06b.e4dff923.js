"use strict";(self.webpackChunk_hessler_lc_component_library_io_docs=self.webpackChunk_hessler_lc_component_library_io_docs||[]).push([[224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a="titleCase",l={unversionedId:"utils/helpers/titleCase",id:"utils/helpers/titleCase",title:"titleCase",description:"titleCase is a helper utility function that converts a string to title case, based on the title capitalization rules as specified by the APA:",source:"@site/docs/utils/helpers/titleCase.md",sourceDirName:"utils/helpers",slug:"/utils/helpers/titleCase",permalink:"/lc-component-library-io/utils/helpers/titleCase",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f Helpers",permalink:"/lc-component-library-io/utils/helpers/"}},s={},p=[{value:"Using the Component",id:"using-the-component",level:2},{value:"Function Declaration",id:"function-declaration",level:2},{value:"Properties",id:"properties",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"titlecase"},"titleCase"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"titleCase")," is a helper utility function that converts a string to title case, based on the title capitalization rules as specified by the APA:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Capitalize the first word of the title/heading and of any subtitle/subheading."),(0,o.kt)("li",{parentName:"ol"},"Capitalize all major words ",(0,o.kt)("em",{parentName:"li"},"(nouns, verbs, adjectives, adverbs, and pronouns)")," in the title/heading, including the second part of hyphenated major words ",(0,o.kt)("em",{parentName:"li"},"(e.g., Self-Report not Self-report).")),(0,o.kt)("li",{parentName:"ol"},"Capitalize all words of four letters or more.")),(0,o.kt)("h2",{id:"using-the-component"},"Using the Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Add sample markup for using the component. For example:\nimport { titleCase } from '@hessler/lc-component-library-io/dist/utils/helpers';\n\n// returns 'Daily Power: 365 Days of Fuel for Your Soul'\nconst correctedTitle = titleCase('daily power: 365 days of fuel for your soul');\n\n// Returns 'Daily poWEr: 365 days of Fuel for Your Soul'\nconst correctedTitleWithOptions = titleCase(\n  'daily poWEr: 365 days of fuel for your soul',\n  { ignoreWords: ['poWEr', 'days'], caseSensitive: true },\n);\n")),(0,o.kt)("h2",{id:"function-declaration"},"Function Declaration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"titleCase(string, { ignoreWords = [], caseSensitive = false } = {})\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"The following properties are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} string")," - The string to be converted to title case."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{object} [options]")," - Optional options."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{boolean} [options.caseSensitive]")," - If true, only ignores ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," specified words when case is exactly the same."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{Array} [options.ignoreWords]")," - Array of words to ignore.")))}u.isMDXComponent=!0}}]);