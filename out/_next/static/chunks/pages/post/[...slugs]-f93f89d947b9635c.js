(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{6913:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[...slugs]",function(){return r(7706)}])},8746:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var l={};r.r(l),r.d(l,{MDXContext:function(){return d},MDXProvider:function(){return u},useMDXComponents:function(){return b},withMDXComponents:function(){return s}});var o=r(5893),a=r(5675),n=r.n(a),c=r(7294),i=r(2746);let d=c.createContext({});function s(e){return function(t){let r=b(t.components);return c.createElement(e,{...t,allComponents:r})}}function b(e){let t=c.useContext(d);return c.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let h={};function u({components:e,children:t,disableParentContext:r}){let l=b(e);return r&&(l=e||h),c.createElement(d.Provider,{value:l},t)}function x({compiledSource:e,frontmatter:t,scope:r,components:o={},lazy:a}){let[n,d]=(0,c.useState)(!a||"undefined"==typeof window);(0,c.useEffect)(()=>{if(a){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,c.useMemo)(()=>{let o=Object.assign({opts:{...l,...i.jsxRuntime}},{frontmatter:t},r),a=Object.keys(o),n=Object.values(o),c=Reflect.construct(Function,a.concat(`${e}`));return c.apply(c,n).default},[r,e]);if(!n)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let b=c.createElement(u,{components:o},c.createElement(s,null));return a?c.createElement("div",null,b):b}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=e=>{let{children:t}=e,r="";return null==t||t.map(e=>{var t,l,o;"string"==typeof e?r+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""):"string"==typeof(null==e?void 0:null===(t=e.props)||void 0===t?void 0:t.children)&&(r+=null==e?void 0:null===(o=e.props)||void 0===o?void 0:null===(l=o.children)||void 0===l?void 0:l.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""))}),r};let f={Image:n(),table:e=>(0,o.jsx)("table",{...e,className:"border-collapse border border-neutral-200",children:null==e?void 0:e.children}),th:e=>(0,o.jsx)("th",{...e,className:"py-2 px-4 border border-neutral-200 text-left",children:null==e?void 0:e.children}),td:e=>(0,o.jsx)("td",{...e,className:"py-2 px-4 border border-neutral-200",children:null==e?void 0:e.children}),blockquote:e=>(0,o.jsx)("blockquote",{...e,className:"border-l-4 pl-3 my-2 border-neutral-600",children:null==e?void 0:e.children}),ul:e=>(0,o.jsx)("ul",{...e,className:"pl-3 my-2 ml-4 list-disc",children:null==e?void 0:e.children}),ol:e=>(0,o.jsx)("ol",{...e,className:"pl-3 my-2 ml-4 list-decimal",children:null==e?void 0:e.children}),code:e=>(0,o.jsx)("code",{className:"",...e,children:null==e?void 0:e.children}),a:e=>(null==e?void 0:e.href)&&"#"===e.href[0]?(0,o.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,className:"underline",children:null==e?void 0:e.children}):(0,o.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",className:"hover:text-blue-700 underline",children:null==e?void 0:e.children}),h1:e=>(0,o.jsx)("h1",{className:"font-extrabold text-2xl pt-8 pb-2 max-md:text-xl",id:m(e),children:e.children}),h2:e=>(0,o.jsx)("h2",{className:"font-extrabold text-xl pt-8 pb-2 max-md:text-lg",id:m(e),children:e.children}),h3:e=>(0,o.jsx)("h3",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:m(e),children:e.children}),h4:e=>(0,o.jsx)("h4",{className:"font-extrabold pt-6 pb-2 text-lg max-md:text",id:m(e),children:e.children}),h5:e=>(0,o.jsx)("h5",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:m(e),children:e.children}),h6:e=>(0,o.jsx)("h6",{className:"font-extrabold pt-4 pb-2 text-lg max-md:text",id:m(e),children:e.children}),p:e=>(0,o.jsx)("p",{className:"font-normal text py-2",...e,children:e.children}),li:e=>(0,o.jsx)("li",{className:"font-normal text py-1 leading-6",...e,children:e.children})};var g=e=>(0,o.jsx)("div",{className:"markdown",children:(0,o.jsx)(x,{...e,components:{...f,...e.components||{}}})})},8526:function(e,t,r){"use strict";r.d(t,{YA:function(){return l},b7:function(){return o},vG:function(){return a}});let l=5,o={series:5,list:6,card:12},a=".markdown > h1, .markdown > h2, .markdown > h3, .markdown > h4, .markdown > h5, .markdown > h6"},9158:function(e,t){"use strict";t.Z={algorithm:{label:"Algorithm"},programming:{label:"Programming"},network:{label:"Network"},css:{label:"CSS",color:"#1572b6",bg:"bg-[#1572b6]",bg_hover:"hover:bg-[#1572b6] dark:hover:bg-[#1572b6]",text:"text-[#1572b6]",text_hover:"hover:text-[#1572b6] dark:hover:text-[#1572b6]",border:"border-[#1572b6]"},scss:{label:"SCSS",color:"#bf4080",bg:"bg-[#bf4080]",bg_hover:"hover:bg-[#bf4080] dark:hover:bg-[#bf4080]",text:"text-[#bf4080]",text_hover:"hover:text-[#bf4080] dark:hover:text-[#bf4080]",border:"border-[#bf4080]"},emotion:{label:"Emotion",color:"#d26ac2",bg:"bg-[#d26ac2]",bg_hover:"hover:bg-[#d26ac2] dark:hover:bg-[#d26ac2]",text:"text-[#d26ac2]",text_hover:"hover:text-[#d26ac2] dark:hover:text-[#d26ac2]",border:"border-[#d26ac2]"},styled_components:{label:"Styled-Components",color:"#ffa4e8",bg:"bg-[#ffa4e8]",bg_hover:"hover:bg-[#ffa4e8] dark:hover:bg-[#ffa4e8]",text:"text-[#ffa4e8]",text_hover:"hover:text-[#ffa4e8] dark:hover:text-[#ffa4e8]",border:"border-[#ffa4e8]"},gatsby:{label:"Gatsby",color:"#663399",bg:"bg-[#663399]",bg_hover:"hover:bg-[#663399] dark:hover:bg-[#663399]",text:"text-[#663399]",text_hover:"hover:text-[#663399] dark:hover:text-[#663399]",border:"border-[#663399]"},intellij:{label:"IntelliJ"},javascript:{label:"JavaScript",color:"#fac905",bg:"bg-[#fac905]",bg_hover:"hover:bg-[#fac905] dark:hover:bg-[#fac905]",text:"text-[#fac905]",text_hover:"hover:text-[#fac905] dark:hover:text-[#fac905]",border:"border-[#fac905]"},typescript:{label:"TypeScript",color:"#3178c6",bg:"bg-[#3178c6]",bg_hover:"hover:bg-[#3178c6] dark:hover:bg-[#3178c6]",text:"text-[#3178c6]",text_hover:"hover:text-[#3178c6] dark:hover:text-[#3178c6]",border:"border-[#3178c6]"},python3:{label:"Python3"},html:{label:"HTML",color:"#e44f26",bg:"bg-[#e44f26]",bg_hover:"hover:bg-[#e44f26] dark:hover:bg-[#e44f26]",text:"text-[#e44f26]",text_hover:"hover:text-[#e44f26] dark:hover:text-[#e44f26]",border:"border-[#e44f26]"},react:{label:"React",color:"#61dbfb",bg:"bg-[#61dbfb]",bg_hover:"hover:bg-[#61dbfb] dark:hover:bg-[#61dbfb]",text:"text-[#61dbfb]",text_hover:"hover:text-[#61dbfb] dark:hover:text-[#61dbfb]",border:"border-[#61dbfb]"},redux_persist:{label:"Redux-Persist"},redux:{label:"Redux",color:"#764abc",bg:"bg-[#764abc]",bg_hover:"hover:bg-[#764abc] dark:hover:bg-[#764abc]",text:"text-[#764abc",text_hover:"hover:text-[#764abc] dark:hover:text-[#764abc]",border:"border-[#764abc]"},recoil:{label:"Recoil"},axios:{label:"Axios"},lodash:{label:"Lodash"},git:{label:"Git/Github",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black dark:hover:bg-black",text:"text-black",text_hover:"hover:text-black dark:hover:text-black",border:"border-black"},reg_exp:{label:"RegExp",color:"#b0b0ae",bg:"bg-[#b0b0ae]",bg_hover:"hover:bg-[#b0b0ae] dark:hover:bg-[#b0b0ae]",text:"text-[#b0b0ae]",text_hover:"hover:text-[#b0b0ae] dark:hover:text-[#b0b0ae]",border:"border-[#b0b0ae]"},npm:{label:"npm"},yarn:{label:"yarn"},yarn_berry:{label:"yarn berry"},jest:{label:"Jest",color:"#99425b",bg:"bg-[#99425b]",bg_hover:"hover:bg-[#99425b] dark:hover:bg-[#99425b]",text:"text-[#99425b]",text_hover:"hover:text-[#99425b] dark:hover:text-[#99425b]",border:"border-[#99425b]"}}},7706:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return E},default:function(){return S}});var l=r(5893),o=r(2962),a=r(3672),n=e=>{let{title:t,description:r,date:n,updatedAt:c,url:i,tags:d,images:s=[]}=e,b=new Date(n).toISOString(),h=new Date(c||n).toISOString(),u=s.map(e=>({url:e,alt:t}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.PB,{title:"".concat(a.Z.title," | ").concat(t),description:r,canonical:i,openGraph:{type:"article",article:{publishedTime:b,modifiedTime:h,authors:[a.Z.author.name],tags:d},url:i,title:t,description:r,images:u}}),(0,l.jsx)(o.dX,{authorName:a.Z.author.name,dateModified:h,datePublished:b,description:r,images:s,publisherName:a.Z.author.name,title:t,url:i,publisherLogo:"".concat(a.Z.siteUrl,"/favicons/favicon-32x32.png")})]})},c=r(1221),i=r(4944),d=r(3637),s=r(1664),b=r.n(s),h=e=>{let{title:t,date:r}=e,{dateStr:o}=(0,i.Z)(r);return(0,l.jsxs)("header",{className:"pt-28 pb-4 text-center",children:[(0,l.jsx)(b(),{href:d.Z.post.link,className:"category-title",children:d.Z.post.label}),(0,l.jsx)("h1",{className:"post-series-title mx-10",children:t}),(0,l.jsxs)("p",{className:"text-sm text-neutral-500 mt-10 font-light flex items-center gap-1",children:[(0,l.jsx)(c.v_l,{size:20}),o]})]})},u=r(8746),x=r(9158),m=e=>{let{tags:t,slug:r}=e;return(0,l.jsxs)("div",{className:"pt-4 flex flex-row items-center flex-wrap",children:[(0,l.jsx)("h1",{className:"text-lg mr-3 mb-2 italic font-semibold",children:"#tags"}),t.map(e=>{let t=x.Z[e],r=(null==t?void 0:t.bg_hover)||"hover:bg-blue-700 dark:hover:bg-blue-700";return(0,l.jsxs)(b(),{className:"mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:text-white ".concat(r),href:"/post/page/0/".concat(e),children:["#",(null==t?void 0:t.label)||e]},e)})]})},f=r(7294),g=r(6963),v=e=>e.split("\n").filter(e=>e.includes("# ")).filter(e=>"#"===e[0]).map(e=>{var t;let r=(null===(t=e.match(/#/g))||void 0===t?void 0:t.length)||0,l=e.split("# ")[1].replace(/`|\*/g,"").trim();return{id:l.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/g,""),title:l,count:r}}),p=r(9332),k=r(8526),j=(e,t)=>{let r=(0,f.useRef)({});(0,f.useEffect)(()=>{r.current={};let e=new IntersectionObserver(e=>{r.current=e.reduce((e,t)=>(e[t.target.id]=t,e),r.current);let l=[];Object.keys(r.current).forEach(e=>{let t=r.current[e];t.isIntersecting&&l.push(t)}),(null==l?void 0:l.length)>0&&t(l[0].target.id)},{rootMargin:"-50px 0px 0px 0px"});return Array.from(document.querySelectorAll(k.vG)).forEach(t=>{let{id:r}=t,l=document.getElementById(r);l&&e.observe(l)}),()=>e.disconnect()},[e])},y=()=>{let e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",r=document.getElementById(e);r&&r.scrollIntoView({behavior:t})};return(0,f.useEffect)(()=>{let t=decodeURI(window.location.hash.slice(1)),r=Array.from(document.querySelectorAll(k.vG));if(!t||0===r.length)return;let l=r.find(e=>e.id===t);l&&e(l.id,"auto")},[]),e},w=e=>{let{content:t}=e,r=v(t),o=(0,p.usePathname)(),[a,n]=(0,f.useState)(""),c=y();return j(o,n),(0,l.jsxs)("div",{className:"w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full max-md:py-0",children:[(0,l.jsx)("button",{onClick:()=>{var e;null===(e=document.getElementById("main-header"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},className:"hover:text-blue-700 max-md:hidden",children:(0,l.jsx)(g.s$2,{size:32})}),(0,l.jsx)("div",{id:"toc",className:"w-full flex flex-col border-l-2 border-l-blue-100 dark:border-l-blue-900 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700",children:r.map(e=>{let{title:t,count:r,id:o}=e;return(0,l.jsx)(b(),{href:"#".concat(o),scroll:!1,className:"hover:text-blue-700 box-decoration-slice py-1.5 pr-1 text-xs ".concat(a===o?"bg-blue-100 dark:bg-blue-900":""," header-").concat(r),onClick:()=>c(o),children:t},t)})}),(0,l.jsx)("button",{onClick:()=>{var e;null===(e=document.getElementById("main-footer-copyright"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},children:(0,l.jsx)(g.RiI,{size:32,className:"hover:text-blue-700 max-md:hidden"})})]})},_=e=>{let{selectedPostKey:t,seriesInfo:r}=e;return(0,l.jsxs)("section",{className:"bg-blue-500/20 p-5 rounded-lg\n    ",children:[(0,l.jsxs)("header",{className:"italic text-lg font-bold flex justify-between flex-wrap align-bottom",children:[null==r?void 0:r.title,(0,l.jsx)(b(),{className:"italic font-light text-sm hover:text-yellow-600",href:"/series/".concat(r.key),children:"같은 시리즈 다른 글 보기\xa0>"})]}),(0,l.jsx)("ul",{className:"flex flex-col gap-1.5 italic pt-3",children:r.posts.map(e=>e.key===t?(0,l.jsx)("h3",{className:"text-blue-500 cursor-default",children:e.title},e.key):(0,l.jsx)(b(),{href:"/post/".concat(e.key),className:"hover:text-blue-700",children:e.title},e.key))})]})},N=r(1571),I=()=>{let e=(0,f.useRef)(null),t=(0,p.usePathname)(),{resolvedTheme:r,theme:o}=(0,N.F)();return(0,f.useEffect)(()=>{if(!e.current)return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","COYO-HM/COYO-HM.github.io"),t.setAttribute("data-repo-id","R_kgDOIIIpYw"),t.setAttribute("data-category","Comments"),t.setAttribute("data-category-id","DIC_kwDOIIIpY84CcT6q"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","bottom"),t.setAttribute("data-theme",r||"light"),t.setAttribute("data-lang","ko"),e.current.appendChild(t)},[r,t]),(0,f.useEffect)(()=>{var e;let t=document.querySelector("iframe.giscus-frame");null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:r}}},"https://giscus.app")},[r]),(0,l.jsx)("div",{className:"py-5",children:(0,l.jsx)("section",{ref:e})})},C=e=>{let{title:t,date:r,body:o,mdx:a,tags:n,slug:c,allSeriesInfo:i}=e;return(0,l.jsxs)("main",{id:"post",children:[(0,l.jsx)(h,{title:t,date:r}),(0,l.jsxs)("div",{className:"relative border-y border-y-blue-700 flex flex-row flex-nowrap max-md:flex-col-reverse",children:[(0,l.jsxs)("div",{className:"grow shrink pr-10 pt-2 min-w-0 max-md:p-0 ",children:[(0,l.jsx)(u.Z,{...a}),(0,l.jsx)(m,{tags:n,slug:c})]}),(0,l.jsx)(w,{content:o})]}),(0,l.jsx)("div",{className:"flex flex-col gap-3 my-5",children:i.map(e=>(0,l.jsx)(_,{selectedPostKey:c,seriesInfo:e},e.key))}),(0,l.jsx)(I,{})]})},E=!0,S=e=>{let{post:{fields:{slug:t},frontMatter:r,body:o},...c}=e,{title:i,tags:d,date:s,description:b,thumbnail:h}=r;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:"".concat(i),description:b,date:s,url:a.Z.siteUrl+"Post/"+t,tags:d,images:h?[h]:[]}),(0,l.jsx)(C,{...r,body:o,slug:t,...c})]})}},4944:function(e,t){"use strict";t.Z=e=>{let t=new Date(e),r=t.getFullYear(),l=t.getMonth()+1,o=t.getDate();return{year:r,month:l,date:o,dateStr:"".concat(r,"/").concat(l,"/").concat(o)}}},2746:function(e,t,r){e.exports.jsxRuntime=r(5893)}},function(e){e.O(0,[401,130,888,774,179],function(){return e(e.s=6913)}),_N_E=e.O()}]);