(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[564],{4541:function(e,t,l){"use strict";l.d(t,{Is:function(){return a},Rj:function(){return c}});var r=l(5893),n=l(2962),i=l(8014);i.Z.title,i.Z.description,i.Z.siteUrl,i.Z.title,i.Z.description,i.Z.author.name;let a=e=>{let{title:t,description:l,url:a}=e;return(0,r.jsx)(n.PB,{title:"".concat(i.Z.title," | ").concat(t),description:l,canonical:a,openGraph:{url:a,title:t,description:l,images:[{alt:t,url:"/static/images/moblie-profile.png"}]}})},c=e=>{let{title:t,summary:l,date:a,updatedAt:c,url:s,tags:o,images:d=[]}=e,u=new Date(a).toISOString(),m=new Date(c||a).toISOString(),h=d.map(e=>({url:e,alt:t}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.PB,{title:"".concat(i.Z.title," | ").concat(t),description:l,canonical:s,openGraph:{type:"article",article:{publishedTime:u,modifiedTime:m,authors:[i.Z.author.name],tags:o},url:s,title:t,description:l,images:h}}),(0,r.jsx)(n.dX,{authorName:i.Z.author.name,dateModified:m,datePublished:u,description:l,images:d,publisherName:i.Z.author.name,title:t,url:s,publisherLogo:"".concat(i.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},3564:function(e,t,l){"use strict";l.d(t,{Z:function(){return R}});var r={};l.r(r),l.d(r,{MDXContext:function(){return b},MDXProvider:function(){return w},useMDXComponents:function(){return v},withMDXComponents:function(){return g}});var n=l(5893),i=l(4541),a=l(7635);let c=e=>{let{title:t,date:l}=e,{dateStr:r}=(0,a.Z)(l);return(0,n.jsxs)("header",{className:"pt-28 pb-14 text-5xl font-semibold text-center",children:[(0,n.jsx)("h1",{className:"break-keep max-md:text-xl",children:t}),(0,n.jsx)("p",{className:"text-sm text-neutral-500 mt-10",children:r})]})};var s=l(1664),o=l.n(s),d=l(7294),u=l(9583);let m=e=>{let t=e.split("\n").filter(e=>e.includes("# "));return t.filter(e=>"#"===e[0]).map(e=>{var t;let l=(null===(t=e.match(/#/g))||void 0===t?void 0:t.length)||0,r=e.split("# ")[1].replace(/`|\*/g,"").trim();return{id:r.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/g,""),title:r,count:l}})},h=e=>{let{content:t}=e,l=m(t),r=(0,d.useRef)({}),[i,a]=(0,d.useState)("");(0,d.useEffect)(()=>{r.current={};let e=e=>{r.current=e.reduce((e,t)=>(e[t.target.id]=t,e),r.current);let t=[];Object.keys(r.current).forEach(e=>{let l=r.current[e];l.isIntersecting&&t.push(l)}),(null==t?void 0:t.length)>0&&a(t[0].target.id)},t=new IntersectionObserver(e,{rootMargin:"-50px 0px 0px 0px"});return l.forEach(e=>{let{id:l}=e,r=document.getElementById(l);r&&t.observe(r)}),()=>t.disconnect()},[l]);let c=()=>{window.scroll({top:0,behavior:"smooth"})},s=()=>{document.body.scrollTop=document.body.scrollHeight,window.scroll(0,document.body.scrollHeight)};return(0,n.jsxs)("div",{className:"w-52 shrink-0 h-full top-0 py-[50px] sticky flex flex-col flex-nowrap justify-center items-center max-md:static max-md:h-fit max-md:w-full",children:[(0,n.jsx)("button",{onClick:c,className:"hover:text-blue-700 max-md:hidden",children:(0,n.jsx)(u.s$2,{size:32})}),(0,n.jsx)("div",{id:"toc",className:"w-full flex flex-col border-l-2 border-l-blue-100 dark:border-l-blue-900 my-4 rounded-none max-md:border-0 max-md:p-4 max-md:bg-neutral-200 max-md:rounded-xl dark:bg-neutral-700",children:l.map(e=>{let{title:t,count:l,id:r}=e;return(0,n.jsx)(o(),{href:"#".concat(r),className:"hover:text-blue-700 box-decoration-slice py-1.5 pr-1 ".concat(i===r?"bg-blue-100 dark:bg-blue-900":""," header-").concat(l),children:t},t)})}),(0,n.jsx)("button",{onClick:s,children:(0,n.jsx)(u.RiI,{size:32,className:"hover:text-blue-700 max-md:hidden"})})]})};var x=l(5675),p=l.n(x),f=l(2746);let b=d.createContext({});function g(e){return function(t){let l=v(t.components);return d.createElement(e,{...t,allComponents:l})}}function v(e){let t=d.useContext(b);return d.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let j={};function w({components:e,children:t,disableParentContext:l}){let r=v(e);return l&&(r=e||j),d.createElement(b.Provider,{value:r},t)}function y({compiledSource:e,frontmatter:t,scope:l,components:n={},lazy:i}){let[a,c]=(0,d.useState)(!i||"undefined"==typeof window);(0,d.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,d.useMemo)(()=>{let n=Object.assign({opts:{...r,...f.jsxRuntime}},{frontmatter:t},l),i=Object.keys(n),a=Object.values(n),c=Reflect.construct(Function,i.concat(`${e}`));return c.apply(c,a).default},[l,e]);if(!a)return d.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let o=d.createElement(w,{components:n},d.createElement(s,null));return i?d.createElement("div",null,o):o}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let N=e=>{let{children:t}=e,l="";return t.map(e=>{var t,r,n;"string"==typeof e?l+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""):"string"==typeof(null==e?void 0:null===(t=e.props)||void 0===t?void 0:t.children)&&(l+=null==e?void 0:null===(r=e.props)||void 0===r?void 0:null===(n=r.children)||void 0===n?void 0:n.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,""))}),l},k={Image:p(),table:e=>(0,n.jsx)("table",{...e,className:"border-collapse border border-neutral-200",children:null==e?void 0:e.children}),th:e=>(0,n.jsx)("th",{...e,className:"py-2 px-4 border border-neutral-200 text-left",children:null==e?void 0:e.children}),td:e=>(0,n.jsx)("td",{...e,className:"py-2 px-4 border border-neutral-200",children:null==e?void 0:e.children}),blockquote:e=>(0,n.jsx)("blockquote",{...e,className:"border-l-4 pl-3 my-2 border-neutral-600",children:null==e?void 0:e.children}),ul:e=>(0,n.jsx)("ul",{...e,className:"pl-3 my-2 ml-4 list-disc",children:null==e?void 0:e.children}),ol:e=>(0,n.jsx)("ol",{...e,className:"pl-3 my-2 ml-4 list-decimal",children:null==e?void 0:e.children}),code:e=>(0,n.jsx)("code",{className:"",...e,children:null==e?void 0:e.children}),a:e=>(null==e?void 0:e.href)&&"#"===e.href[0]?(0,n.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,children:null==e?void 0:e.children}):(0,n.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",className:"hover:text-blue-700",children:null==e?void 0:e.children}),h1:e=>(0,n.jsx)("h1",{className:"font-bold text-2xl pt-8 pb-2 max-md:text-xl",id:N(e),children:e.children}),h2:e=>(0,n.jsx)("h2",{className:"font-bold text-xl pt-8 pb-2 max-md:text-lg",id:N(e),children:e.children}),h3:e=>(0,n.jsx)("h3",{className:"font-bold pt-6 pb-2 text-lg max-md:text",id:N(e),children:e.children}),h4:e=>(0,n.jsx)("h4",{className:"font-bold pt-6 pb-2 text-lg max-md:text",id:N(e),children:e.children}),h5:e=>(0,n.jsx)("h5",{className:"font-bold pt-4 pb-2 text-lg max-md:text",id:N(e),children:e.children}),h6:e=>(0,n.jsx)("h6",{className:"font-bold pt-4 pb-2 text-lg max-md:text",id:N(e),children:e.children}),p:e=>(0,n.jsx)("p",{className:"font-light text py-2",...e,children:e.children})},C=e=>(0,n.jsx)(y,{...e,components:{...k,...e.components||{}}}),E="https://utteranc.es/client.js",Z="COYO-HM/COYO-HM.github.io",I=()=>{let e=(0,d.createRef)(),t=(0,d.createRef)();return(0,d.useEffect)(()=>{if(null!==e.current&&null!==t.current){let l=document.createElement("script"),r=document.createElement("script");Object.entries({src:E,repo:Z,"issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"}).forEach(e=>{let[t,r]=e;l.setAttribute(t,r)}),Object.entries({src:E,repo:Z,"issue-term":"pathname",label:"Comment",theme:"photon-dark",crossorigin:"anonymous",async:"true"}).forEach(e=>{let[t,l]=e;r.setAttribute(t,l)}),e.current.appendChild(l),t.current.appendChild(r)}},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:e,id:"utterances-light"}),(0,n.jsx)("div",{ref:t,id:"utterances-dark"})]})};var M=l(8014);let O=e=>{let{tags:t,slug:l}=e,r=l.split("/")[0];return(0,n.jsxs)("div",{className:"pt-4 flex flex-row items-center flex-wrap",children:[(0,n.jsx)("h1",{className:"text-lg mr-3 mb-2",children:"Tags"}),t.map(e=>(0,n.jsxs)(o(),{className:"mr-2 mb-2 h-6 p-1 w-fit break-keep text-xs rounded bg-neutral-100 dark:bg-neutral-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white ",href:"/".concat(r,"/tags/").concat(e),children:["#",e]},e))]})},D=e=>{let{post:{fields:{slug:t},frontMatter:l,body:r,path:a},mdx:s}=e,{title:o,category:d,tags:u,date:m,description:x,socialImageCredit:p,thumbnail:f}=l;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Rj,{title:"".concat(o),summary:x,date:m,url:M.Z.siteUrl+t,tags:u,images:[]}),(0,n.jsxs)("article",{className:"flex flex-col",id:"post",children:[(0,n.jsx)(c,{...l}),(0,n.jsxs)("div",{className:"flex flex-row flex-nowrap relative border-y border-y-blue-700 max-md:flex-col-reverse",children:[(0,n.jsxs)("div",{className:"grow shrink pr-10 pt-5 min-w-0 max-md:p-0 max-md:pb-4",children:[(0,n.jsx)(C,{...s}),(0,n.jsx)(O,{tags:u,slug:t})]}),(0,n.jsx)(h,{content:r})]}),(0,n.jsx)(I,{})]})]})};var R=D},7635:function(e,t){"use strict";let l=e=>{let t=new Date(e),l=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();return{year:l,month:r,date:n,dateStr:"".concat(l,".").concat(r,".").concat(n)}};t.Z=l},2746:function(e,t,l){e.exports.jsxRuntime=l(5893)}}]);