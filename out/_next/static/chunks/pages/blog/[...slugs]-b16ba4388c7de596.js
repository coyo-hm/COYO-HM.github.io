(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{8949:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return l(1798)}])},4541:function(e,t,l){"use strict";l.d(t,{Is:function(){return c},Rj:function(){return a}});var n=l(5893),r=l(2962),i=l(8014);i.Z.title,i.Z.description,i.Z.siteUrl,i.Z.title,i.Z.description,i.Z.author.name;let c=e=>{let{title:t,description:l,url:c}=e;return(0,n.jsx)(r.PB,{title:"".concat(i.Z.title," | ").concat(t),description:l,canonical:c,openGraph:{url:c,title:t,description:l,images:[{alt:t,url:"/thumbnail.png"}]}})},a=e=>{let{title:t,summary:l,date:c,updatedAt:a,url:o,tags:s,images:d=[]}=e,u=new Date(c).toISOString(),m=new Date(a||c).toISOString(),h=d.map(e=>({url:e,alt:t}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.PB,{title:"".concat(i.Z.title," | ").concat(t),description:l,canonical:o,openGraph:{type:"article",article:{publishedTime:u,modifiedTime:m,authors:[i.Z.author.name],tags:s},url:o,title:t,description:l,images:h}}),(0,n.jsx)(r.dX,{authorName:i.Z.author.name,dateModified:m,datePublished:u,description:l,images:d,publisherName:i.Z.author.name,title:t,url:o,publisherLogo:"".concat(i.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},1798:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return D},default:function(){return S}});var n={};l.r(n),l.d(n,{MDXContext:function(){return b},MDXProvider:function(){return w},useMDXComponents:function(){return v},withMDXComponents:function(){return g}});var r=l(5893),i=l(7294),c=l(4541),a=l(7635);let o=e=>{let{title:t,date:l}=e,{dateStr:n}=(0,a.Z)(l);return(0,r.jsxs)("header",{className:"py-20 text-5xl font-semibold text-center",children:[(0,r.jsx)("h1",{className:"break-keep max-md:text-xl",children:t}),(0,r.jsx)("p",{className:"text-sm text-neutral-500 mt-2",children:n})]})};var s=l(1664),d=l.n(s),u=l(9583);let m=e=>{let t=e.split("\n").filter(e=>e.includes("# "));return t.filter(e=>"#"===e[0]).map(e=>{var t;let l=(null===(t=e.match(/#/g))||void 0===t?void 0:t.length)||0,n=e.split("# ")[1].replace(/`/g,"").trim();return{id:n.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""),title:n,count:l}})},h=e=>{let{content:t}=e,l=m(t),n=(0,i.useRef)({}),[c,a]=(0,i.useState)("");(0,i.useEffect)(()=>{n.current={};let e=e=>{n.current=e.reduce((e,t)=>(e[t.target.id]=t,e),n.current);let t=[];Object.keys(n.current).forEach(e=>{let l=n.current[e];l.isIntersecting&&t.push(l)}),a(t[0].target.id)},t=new IntersectionObserver(e,{rootMargin:"-50px 0px 0px 0px"});return l.forEach(e=>{let{id:l}=e,n=document.getElementById(l);n&&t.observe(n)}),()=>t.disconnect()},[l]);let o=()=>{window.scroll({top:0,behavior:"smooth"})},s=()=>{document.body.scrollTop=document.body.scrollHeight,window.scroll(0,document.body.scrollHeight)};return(0,r.jsxs)("div",{className:"w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full",id:"toc",children:[(0,r.jsx)("button",{onClick:o,className:"hover:text-blue-700 max-md:hidden",children:(0,r.jsx)(u.s$2,{size:32})}),(0,r.jsx)("div",{className:"w-full flex flex-col py-1 border-l border-l-blue-700 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700",children:l.map(e=>{let{title:t,count:l,id:n}=e;return(0,r.jsx)(d(),{href:"#".concat(n),className:"hover:text-blue-700 py-1 ".concat(c===n?"bg-blue-100":""," header-").concat(l),children:t},t)})}),(0,r.jsx)("button",{onClick:s,children:(0,r.jsx)(u.RiI,{size:32,className:"hover:text-blue-700 max-md:hidden"})})]})};var x=l(5675),p=l.n(x),f=l(2746);let b=i.createContext({});function g(e){return function(t){let l=v(t.components);return i.createElement(e,{...t,allComponents:l})}}function v(e){let t=i.useContext(b);return i.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let j={};function w({components:e,children:t,disableParentContext:l}){let n=v(e);return l&&(n=e||j),i.createElement(b.Provider,{value:n},t)}function N({compiledSource:e,frontmatter:t,scope:l,components:r={},lazy:c}){let[a,o]=(0,i.useState)(!c||"undefined"==typeof window);(0,i.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{o(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,i.useMemo)(()=>{let r=Object.assign({opts:{...n,...f.jsxRuntime}},{frontmatter:t},l),i=Object.keys(r),c=Object.values(r),a=Reflect.construct(Function,i.concat(`${e}`));return a.apply(a,c).default},[l,e]);if(!a)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=i.createElement(w,{components:r},i.createElement(s,null));return c?i.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let y=e=>{let{children:t}=e,l="";return t.map(e=>{var t,n,r;"string"==typeof e?l+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""):"string"==typeof(null==e?void 0:null===(t=e.props)||void 0===t?void 0:t.children)&&(l+=null==e?void 0:null===(n=e.props)||void 0===n?void 0:null===(r=n.children)||void 0===r?void 0:r.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""))}),l},k={Image:p(),table:e=>(0,r.jsx)("table",{...e,className:"border-collapse border border-neutral-200",children:null==e?void 0:e.children}),th:e=>(0,r.jsx)("th",{...e,className:"py-2 px-4 border border-neutral-200 text-left",children:null==e?void 0:e.children}),td:e=>(0,r.jsx)("td",{...e,className:"py-2 px-4 border border-neutral-200",children:null==e?void 0:e.children}),blockquote:e=>(0,r.jsx)("blockquote",{...e,className:"border-l-4 pl-3 my-2 border-neutral-600",children:null==e?void 0:e.children}),ul:e=>(0,r.jsx)("ul",{...e,className:"pl-3 my-2 ml-4 list-disc",children:null==e?void 0:e.children}),ol:e=>(0,r.jsx)("ol",{...e,className:"pl-3 my-2 ml-4 list-decimal",children:null==e?void 0:e.children}),code:e=>(0,r.jsx)("code",{className:"",...e,children:null==e?void 0:e.children}),a:e=>(null==e?void 0:e.href)&&"#"===e.href[0]?(0,r.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,children:null==e?void 0:e.children}):(0,r.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",className:"hover:text-blue-700",children:null==e?void 0:e.children}),h1:e=>(0,r.jsx)("h1",{className:"font-bold text-2xl pt-4 pb-2 max-md:text-xl",id:y(e),children:e.children}),h2:e=>(0,r.jsx)("h2",{className:"font-bold text-xl pt-4 pb-2 max-md:text-lg",id:y(e),children:e.children}),h3:e=>(0,r.jsx)("h3",{className:"font-bold pt-4 pb-2 text-lg max-md:text",id:y(e),children:e.children}),h4:e=>(0,r.jsx)("h4",{className:"font-bold pt-4 pb-2 text-lg max-md:text",id:y(e),children:e.children}),h5:e=>(0,r.jsx)("h5",{className:"font-bold pt-4 pb-2 text-lg max-md:text",id:y(e),children:e.children}),h6:e=>(0,r.jsx)("h6",{className:"font-bold pt-4 pb-2 text-lg max-md:text",id:y(e),children:e.children}),p:e=>(0,r.jsx)("p",{className:"font-light text py-2",...e,children:e.children})},E=e=>(0,r.jsx)(N,{...e,components:{...k,...e.components||{}}}),C=()=>{let e=(0,i.createRef)();return(0,i.useEffect)(()=>{if(null===e.current)return;let t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"COYO-HM/COYO-HM.github.io","issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"}).forEach(e=>{let[l,n]=e;t.setAttribute(l,n)}),e.current.appendChild(t)},[e]),(0,r.jsx)("div",{ref:e,id:"utterances"})};var _=l(8014);let Z=e=>{let{tags:t}=e;return(0,r.jsxs)("div",{className:"pt-4 flex flex-row items-center flex-wrap",children:[(0,r.jsx)("h1",{className:"text-lg mr-3 mb-2",children:"Tags"}),t.map(e=>(0,r.jsxs)(d(),{className:"mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white ",href:"/blog/tags/".concat(e),children:["#",e]},e))]})},I=e=>{let{post:{fields:{slug:t},frontMatter:l,body:n,path:i},mdx:a}=e,{title:s,category:d,tags:u,date:m,description:x,socialImageCredit:p,thumbnail:f}=l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Rj,{title:"".concat(s),summary:x,date:m,url:_.Z.siteUrl+t,tags:u,images:[]}),(0,r.jsxs)("article",{className:"flex flex-col",id:"post",children:[(0,r.jsx)(o,{...l}),(0,r.jsxs)("div",{className:"flex flex-row flex-nowrap relative border-y border-y-blue-700 max-md:flex-col-reverse",children:[(0,r.jsxs)("div",{className:"grow shrink pr-10 min-w-0 max-md:p-0 max-md:pb-4",children:[(0,r.jsx)(E,{...a}),(0,r.jsx)(Z,{tags:u})]}),(0,r.jsx)(h,{content:n})]}),(0,r.jsx)(C,{})]})]})};var O=l(1739);let M=e=>{let{post:t,mdx:l,tags:n}=e,{setTags:c}=(0,O.Z)();return(0,i.useEffect)(()=>{c(n)},[c,n]),(0,r.jsx)(I,{post:t,mdx:l})};var D=!0,S=M},7635:function(e,t){"use strict";let l=e=>{let t=new Date(e),l=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return{year:l,month:n,date:r,dateStr:"".concat(l,".").concat(n,".").concat(r)}};t.Z=l},2746:function(e,t,l){e.exports.jsxRuntime=l(5893)}},function(e){e.O(0,[962,675,774,888,179],function(){return e(e.s=8949)}),_N_E=e.O()}]);