(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{3589:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/series/page/[page]",function(){return r(1626)}])},2442:function(e,t,r){"use strict";var n=r(5893),s=r(5675),i=r.n(s),l=r(4890);t.Z=e=>{let{src:t,alt:r,blurDataURL:s,...a}=e;return(0,n.jsx)(i(),{loader:e=>(0,l.Z)(e),src:t,alt:r,placeholder:"blur",blurDataURL:s,...a})}},9826:function(e,t,r){"use strict";var n=r(5893),s=r(2962),i=r(3672);t.Z=e=>{let{title:t,description:r,url:l}=e;return(0,n.jsx)(s.PB,{title:"".concat(i.Z.title," | ").concat(t),description:r,canonical:l,openGraph:{url:l,title:t,description:r,images:[{alt:t,url:"/static/images/moblie-profile.png"}]}})}},8091:function(e,t,r){"use strict";var n=r(5893),s=r(1664),i=r.n(s),l=r(2023),a=r(2567);let c={initial:{color:"inherit"},animate:{color:"inherit",borderBottom:"2px solid rgb(29, 78, 216)",transition:{type:"tween",stiffness:100,dumpling:0,ease:"easeIn"}},hover:{scale:1.2,color:"rgb(29, 78, 216)"}};t.Z=e=>{let{currPage:t,startPage:r,endPage:s,tag:o,category:u}=e,h=e=>o?"/".concat(u,"/page/").concat(e,"/").concat(o):"/".concat(u,"/page/").concat(e);return(0,n.jsxs)("div",{className:"flex justify-center items-center my-5 text-lg",children:[(0,n.jsx)(i(),{href:h(t-1),className:"hover:text-blue-700 ",onClick:e=>r===t&&e.preventDefault(),children:(0,n.jsx)(a.u1R,{})}),(0,n.jsx)("div",{className:"flex gap-3 items-center justify-center mx-2 text-base",children:Array(s-r).fill(0).map((e,s)=>(0,n.jsx)(i(),{href:h(s+r),children:(0,n.jsx)(l.E.div,{className:"flex items-center justify-center flex-shrink-0 font-light",variants:c,initial:"initial",animate:s+r===t?"animate":"",whileHover:"hover",children:s+r+1})},s+r))}),(0,n.jsx)(i(),{className:"hover:text-blue-700",href:h(t+1),onClick:e=>s===t+1&&e.preventDefault(),children:(0,n.jsx)(a.hjJ,{})})]})}},8526:function(e,t,r){"use strict";r.d(t,{YA:function(){return n},b7:function(){return s},vG:function(){return i}});let n=5,s={series:5,list:6,card:12},i=".markdown > h1, .markdown > h2, .markdown > h3, .markdown > h4, .markdown > h5, .markdown > h6"},4874:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),s=r(8526),i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.YA;return Math.max(1,Math.ceil(e/t))},l=(e,t,r)=>{let s=i(e,r),[l,a]=(0,n.useState)(0),[c,o]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=t-2;e<0&&(e=0);let r=e+5;r>s&&(r=s),a(e),o(r)},[t,s]),{lastPage:s,startPage:l,endPage:c}}},1626:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m},default:function(){return j}});var n=r(5893),s=r(3672),i=r(3637),l=r(9826),a=r(1664),c=r.n(a),o=r(4874),u=r(8526),h=r(8091),x=r(2442),d=e=>{let{title:t,thumbnail:r,blurThumbnail:s,description:i,posts:l}=e;return(0,n.jsxs)("li",{className:"grid grid-cols-[1fr_3fr_1fr] bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out hover:text-blue-700",children:[(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)(x.Z,{alt:t,src:r,blurDataURL:s,className:"object-cover h-auto",fill:!0})}),(0,n.jsxs)("section",{className:"flex flex-col p-4 min-h-[130px]",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold pb-2",children:t}),(0,n.jsx)("p",{className:"text-xs two-line-ellipsis",children:i})]}),(0,n.jsxs)("section",{className:"italic flex flex-col justify-center items-center",children:[(0,n.jsx)("h3",{className:"text-sm text-neutral-400 font-light",children:"포스트 수"}),(0,n.jsx)("div",{className:"font-extrabold text-6xl",children:l.length})]})]})},f=e=>{let{page:t,seriesTotal:r,series:s}=e,{startPage:l,endPage:a}=(0,o.Z)(r,t,u.b7.series);return(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{className:"page-title mt-14 mb-24",children:i.Z.series.label}),(0,n.jsxs)("div",{className:"text-neutral-500 text-sm text-right",children:["시리즈 수: ",r]}),(0,n.jsx)("ul",{className:"w-full mt-5 flex flex-col flex-nowrap gap-3",children:s.map(e=>(0,n.jsx)(c(),{href:"/series/".concat(e.key),children:(0,n.jsx)(d,{...e})},e.key))}),(0,n.jsx)(h.Z,{currPage:t,startPage:l,endPage:a,category:"series"})]})},m=!0,j=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{title:i.Z.series.label,description:s.Z.description,url:s.Z.siteUrl+"series"}),(0,n.jsx)(f,{...e})]})},4890:function(e,t){"use strict";t.Z=e=>{let{src:t,width:r,quality:n}=e;return"".concat(t.includes("http")?"":"https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(n||75)}}},function(e){e.O(0,[866,130,888,774,179],function(){return e(e.s=3589)}),_N_E=e.O()}]);