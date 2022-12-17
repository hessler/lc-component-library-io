"use strict";(self.webpackChunk_hessler_lc_component_library_io_docs=self.webpackChunk_hessler_lc_component_library_io_docs||[]).push([[516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="ButtonItem",l={unversionedId:"components/global/ButtonItem/index",id:"components/global/ButtonItem/index",title:"ButtonItem",description:"The ButtonItem component represents a general purpose button element that can be configured with styles and functionality as needed. It comes built with logic for button size and variant, but is otherwise completely style- and functionality-agnostic, allowing for full flexibility of use across a variety of projects and contexts.",source:"@site/docs/components/global/ButtonItem/index.md",sourceDirName:"components/global/ButtonItem",slug:"/components/global/ButtonItem/",permalink:"/lc-component-library-io/components/global/ButtonItem/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"\ud83c\udf0e Global",permalink:"/lc-component-library-io/components/global/"},next:{title:"TemplateComponent",permalink:"/lc-component-library-io/components/global/TemplateComponent/"}},s={},p=[{value:"Using the Component",id:"using-the-component",level:2},{value:"Properties",id:"properties",level:2},{value:"Typedefs",id:"typedefs",level:2},{value:"<code>ButtonSizes</code>",id:"buttonsizes",level:3},{value:"<code>ButtonVariants</code>",id:"buttonvariants",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buttonitem"},"ButtonItem"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonItem")," component represents a general purpose button element that can be configured with styles and functionality as needed. It comes built with logic for button size and variant, but is otherwise completely style- and functionality-agnostic, allowing for full flexibility of use across a variety of projects and contexts."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd ",(0,o.kt)("strong",{parentName:"p"},"Note:")," All ",(0,o.kt)("inlineCode",{parentName:"p"},"ButtonItem")," components include the class ",(0,o.kt)("inlineCode",{parentName:"p"},".btn"),", as well as size- and variant-specific styles ",(0,o.kt)("em",{parentName:"p"},"(as noted below)"),", and can have additional class names passed in via the ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," prop.")),(0,o.kt)("h2",{id:"using-the-component"},"Using the Component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  ButtonItem,\n  ButtonSizes,\n  ButtonVariants,\n} from "@hessler/lc-component-library-io/dist/components/global";\n\n<ButtonItem\n  className="my-button-class-name"\n  onClick={() => {\n    /* Do something. */\n  }}\n  size={ButtonSizes.medium}\n  variant={ButtonVariants.primary}\n>\n  Primary Button Example\n</ButtonItem>\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"The following properties are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{object} props")," - The component props object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{React.ReactElement} props.children")," - The children elements to render as content for the button element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ButtonSizes} [props.size]")," - The size value of the button (Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"ButtonSizes.medium"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ButtonVariants} [props.variant]")," - The variant of the button (Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"ButtonVariants.primary"),").")),(0,o.kt)("h2",{id:"typedefs"},"Typedefs"),(0,o.kt)("h3",{id:"buttonsizes"},(0,o.kt)("inlineCode",{parentName:"h3"},"ButtonSizes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} large")," - Represents a large button size and uses the class ",(0,o.kt)("inlineCode",{parentName:"li"},".size-large"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} medium")," - Represents a medium button size and uses the class ",(0,o.kt)("inlineCode",{parentName:"li"},".size-medium"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} small")," - Represents a small button size and uses the class ",(0,o.kt)("inlineCode",{parentName:"li"},".size-small"),".")),(0,o.kt)("h3",{id:"buttonvariants"},(0,o.kt)("inlineCode",{parentName:"h3"},"ButtonVariants")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} primary")," - Represents a primary button style and uses the class ",(0,o.kt)("inlineCode",{parentName:"li"},".btn-primary"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} secondary")," - Represents a secondary button style and uses the class ",(0,o.kt)("inlineCode",{parentName:"li"},".btn-secondary"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{string} tertiary")," - Represents a tertiary button style and uses the class ",(0,o.kt)("inlineCode",{parentName:"li"},".btn-tertiary"),".")))}c.isMDXComponent=!0}}]);