(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{5939:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[page]/[category]",function(){return r(9576)}])},4541:function(e,t,r){"use strict";r.d(t,{Is:function(){return c},Rj:function(){return n}});var a=r(5893),l=r(2962),o=r(8014);o.Z.title,o.Z.description,o.Z.siteUrl,o.Z.title,o.Z.description,o.Z.author.name;let c=e=>{let{title:t,description:r,url:c}=e;return(0,a.jsx)(l.PB,{title:"".concat(o.Z.title," | ").concat(t),description:r,canonical:c,openGraph:{url:c,title:t,description:r,images:[{alt:t,url:"/static/images/moblie-profile.png"}]}})},n=e=>{let{title:t,summary:r,date:c,updatedAt:n,url:s,tags:i,images:b=[]}=e,d=new Date(c).toISOString(),x=new Date(n||c).toISOString(),g=b.map(e=>({url:e,alt:t}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.PB,{title:"".concat(o.Z.title," | ").concat(t),description:r,canonical:s,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:x,authors:[o.Z.author.name],tags:i},url:s,title:t,description:r,images:g}}),(0,a.jsx)(l.dX,{authorName:o.Z.author.name,dateModified:x,datePublished:d,description:r,images:b,publisherName:o.Z.author.name,title:t,url:s,publisherLogo:"".concat(o.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},8161:function(e,t,r){"use strict";var a=r(5893),l=r(5117);let o=e=>{let{tag:t}=e,r=l.Z[t],o=(null==r?void 0:r.bg)||"bg-neutral-400";return(0,a.jsxs)("div",{className:"shrink-0 rounded py-0.5 px-1 text-xs text-neutral-100 ".concat(o),children:["#",(null==r?void 0:r.label)||t]},t)};t.Z=o},4883:function(e,t,r){"use strict";var a=r(5893),l=r(1664),o=r.n(l),c=r(5675),n=r.n(c),s=r(7635),i=r(3930);let b=e=>{let{title:t,date:r,tags:l,thumbnail:c,slug:b}=e,{dateStr:d}=(0,s.Z)(r);return(0,a.jsxs)(o(),{className:"hover:-translate-y-2 hover:duration-300 hover:ease-in-out overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900",href:"/".concat(b),children:[(0,a.jsx)("div",{className:"relative",children:!!c&&(0,a.jsx)(n(),{loader:e=>(0,i.Z)(e),src:c,alt:t,className:"object-cover",priority:!0,fill:!0,sizes:"(min-width:640px) 50vw, 100vw"})}),(0,a.jsxs)("div",{className:"w-full p-3",children:[(0,a.jsx)("h1",{className:"text-lg font-bold text-neutral-900 dark:text-neutral-100",children:t}),(0,a.jsx)("p",{className:"text-neutral-400",children:d})]})]})};t.Z=b},9106:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(5893),l=r(7294);let o={list:5,card:12},c=(e,t,r)=>{let a=Math.max(1,Math.ceil(e/o[r])),[c,n]=(0,l.useState)(0),[s,i]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=t-2;e<0&&(e=0);let r=e+5;r>a&&(r=a),n(e),i(r)},[t,a]),{lastPage:a,startPage:c,endPage:s}};var n=r(1664),s=r.n(n),i=r(1649);let b=e=>{let{currPage:t,startPage:r,endPage:l,category:o,menu:c}=e,n=e=>"/".concat(c,"/").concat(e,"/").concat(o);return(0,a.jsxs)("div",{className:"flex text-blue-700 justify-center items-center my-5",children:[(0,a.jsx)(s(),{href:n(t-1),className:"hover:text-blue-900",onClick:e=>r===t&&e.preventDefault(),children:(0,a.jsx)(i.u1R,{})}),(0,a.jsx)("div",{className:"flex gap-3 items-center justify-center mx-2 text-base",children:Array(l-r).fill(0).map((e,l)=>(0,a.jsx)(s(),{href:n(l+r),className:"hover:text-blue-900 flex items-center justify-center ".concat(l+r===t?"h-9 w-9 rounded-full border-blue-700 font-semibold border-4":""),children:l+r+1},l+r))}),(0,a.jsx)(s(),{className:"hover:text-blue-900",href:n(t+1),onClick:e=>l===t+1&&e.preventDefault(),children:(0,a.jsx)(i.hjJ,{})})]})};var d=r(5675),x=r.n(d),g=r(8161),h=r(3930);let u=e=>{let{title:t,date:r,tags:l,description:o,slug:c,thumbnail:n}=e,i=new Date(r);return(0,a.jsxs)(s(),{className:"grid grid-cols-[1fr_3fr] bg-[rgb(255,255,255,0.6)] dark:bg-[rgba(255,250,250,0.1)] rounded shadow-xl bg-translate overflow-hidden hover:-translate-y-0.5 hover:duration-300 hover:ease-in-out",href:"/".concat(c),children:[(0,a.jsx)("div",{className:"relative",children:n?(0,a.jsx)(x(),{loader:e=>(0,h.Z)(e),src:n,alt:t,className:"object-cover h-auto",fill:!0,loading:"lazy"}):(0,a.jsx)("div",{className:"h-full w-full bg-[rgb(255,255,255,0.8)] dark:bg-[rgb(255,255,255,0.1)]"})}),(0,a.jsxs)("section",{className:"flex flex-col p-4 min-h-[130px]",children:[(0,a.jsx)("div",{className:"text-neutral-800 dark:text-neutral-100 font-semibold pb-2",children:t}),(0,a.jsxs)("div",{className:"dark:text-neutral-300 mb-2 w-full max-h-10 break-normal overflow-hidden text-ellipsis flex items-center",children:[(0,a.jsxs)("span",{className:"text-neutral-400 text-xs flex-shrink-0",children:[i.getFullYear(),".",i.getMonth()+1,".",i.getDate()]}),(0,a.jsx)("div",{className:"flex items-center gap-1 flex-shrink flex-grow border-l-2 border-neutral-200 overflow-hidden pl-2 ml-2",children:l.map(e=>(0,a.jsx)(g.Z,{tag:e},e))})]}),!!o&&(0,a.jsx)("div",{className:"text-neutral-600 dark:text-neutral-300 break-normal text-ellipsis text-xs",children:o})]})]})};var f=r(4883);let v=e=>{let{showType:t,posts:r,currPage:o,total:n,category:s,children:i,menu:d}=e,{startPage:x,endPage:g}=c(n,o,t);return(0,a.jsxs)("main",{className:"flex flex-col gap-5",children:[i,"list"===t&&(0,a.jsx)("article",{className:"flex flex-col flex-nowrap gap-3",children:r.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,l.createElement)(u,{...t,slug:r,key:r})})}),"card"===t&&(0,a.jsx)("article",{className:"grid grid-cols-3 gap-4",children:r.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,l.createElement)(f.Z,{...t,slug:r,key:r})})}),(0,a.jsx)(b,{currPage:o,category:s,startPage:x,endPage:g,menu:d})]})};var m=v},5117:function(e,t){"use strict";t.Z={algorithm:{category:"COMPUTER SCIENCE",label:"Algorithm"},programming:{category:"COMPUTER SCIENCE",label:"Programming"},network:{category:"COMPUTER SCIENCE",label:"Network"},css:{category:"CSS",label:"CSS",color:"#1572b6",bg:"bg-[#1572b6]",bg_hover:"hover:bg-[#1572b6]",text:"text-[#1572b6]",text_hover:"hover:text-[#1572b6]",border:"border-[#1572b6]"},scss:{category:"CSS",label:"SCSS",color:"#bf4080",bg:"bg-[#bf4080]",bg_hover:"hover:bg-[#bf4080]",text:"text-[#bf4080]",text_hover:"hover:text-[#bf4080]",border:"border-[#bf4080]"},emotion:{category:"CSS",label:"Emotion",color:"#d26ac2",bg:"bg-[#d26ac2]",bg_hover:"hover:bg-[#d26ac2]",text:"text-[#d26ac2]",text_hover:"hover:text-[#d26ac2]",border:"border-[#d26ac2]"},styled_components:{category:"CSS",label:"Styled-Components",color:"#ffa4e8",bg:"bg-[#ffa4e8]",bg_hover:"hover:bg-[#ffa4e8]",text:"text-[#ffa4e8]",text_hover:"hover:text-[#ffa4e8]",border:"border-[#ffa4e8]"},gatsby:{category:"FRAMEWORK",label:"Gatsby",color:"#663399",bg:"bg-[#663399]",bg_hover:"hover:bg-[#663399]",text:"text-[#663399]",text_hover:"hover:text-[#663399]",border:"border-[#663399]"},nextjs:{category:"FRAMEWORK",label:"Next.js"},intellij:{category:"IDE",label:"IntelliJ"},javascript:{category:"LANGUAGE",label:"JavaScript",color:"#fac905",bg:"bg-[#fac905]",bg_hover:"hover:bg-[#fac905]",text:"text-[#fac905]",text_hover:"hover:text-[#fac905]",border:"border-[#fac905]"},typescript:{category:"LANGUAGE",label:"TypeScript",color:"#3178c6",bg:"bg-[#3178c6]",bg_hover:"hover:bg-[#3178c6]",text:"text-[#3178c6]",text_hover:"hover:text-[#3178c6]",border:"border-[#3178c6]"},python3:{category:"LANGUAGE",label:"Python3"},html:{category:"LANGUAGE",label:"HTML",color:"#e44f26",bg:"bg-[#e44f26]",bg_hover:"hover:bg-[#e44f26]",text:"text-[#e44f26]",text_hover:"hover:text-[#e44f26]",border:"border-[#e44f26]"},react:{category:"LIBRARY",label:"React",color:"#61dbfb",bg:"bg-[#61dbfb]",bg_hover:"hover:bg-[#61dbfb]",text:"text-[#61dbfb]",text_hover:"hover:text-[#61dbfb]",border:"border-[#61dbfb]"},redux_persist:{category:"LIBRARY",label:"Redux-Persist"},redux:{category:"LIBRARY",label:"Redux",color:"#764abc",bg:"bg-[#764abc]",bg_hover:"hover:bg-[#764abc]",text:"text-[#764abc",text_hover:"hover:text-[#764abc]",border:"border-[#764abc]"},recoil:{category:"LIBRARY",label:"Recoil"},axios:{category:"LIBRARY",label:"Axios"},lodash:{category:"LIBRARY",label:"Lodash"},git:{category:"MANAGEMENT",label:"Git",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black",text:"text-black",text_hover:"hover:text-black",border:"border-black"},git_hub:{category:"MANAGEMENT",label:"GitHub",color:"#000000",bg:"bg-black",bg_hover:"hover:bg-black",text:"text-black",text_hover:"hover:text-black",border:"border-black"},npm:{category:"PACKAGE MANAGER",label:"npm"},yarn:{category:"PACKAGE MANAGER",label:"yarn"},yarn_berry:{category:"PACKAGE MANAGER",label:"yarn berry"},jest:{category:"TEST",label:"Jest",color:"#99425b",bg:"bg-[#99425b]",bg_hover:"hover:bg-[#99425b]",text:"text-[#99425b]",text_hover:"hover:text-[#99425b]",border:"border-[#99425b]"}}},9576:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return s}});var a=r(5893),l=r(8014),o=r(4541),c=r(9106);let n=e=>{var t;let{posts:r,allTags:n,category:s,page:i}=e,b=(null===(t=n.find(e=>{let{tag:t}=e;return t===s}))||void 0===t?void 0:t.count)||0;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Is,{title:"Blog",description:l.Z.description,url:l.Z.siteUrl+"blog"}),(0,a.jsx)(c.Z,{showType:"list",posts:r,currPage:i,total:b,category:s,menu:"blog",children:(0,a.jsxs)("header",{className:"flex justify-end items-center gap-1 px-1",children:[(0,a.jsx)("h1",{className:"font-bold text-3xl flex-grow",children:"Blog"}),(0,a.jsxs)("span",{className:"text-neutral-500 text-sm",children:["포스트 수: ",b]})]})})]})};var s=!0;t.default=n},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1,l=t.getDate();return{year:r,month:a,date:l,dateStr:"".concat(r,".").concat(a,".").concat(l)}};t.Z=r},3930:function(e,t,r){"use strict";function a(e){let{src:t,width:r,quality:a}=e;return"".concat(t.includes("http")?"":"https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(a||75)}r.d(t,{Z:function(){return a}})}},function(e){e.O(0,[866,130,774,888,179],function(){return e(e.s=5939)}),_N_E=e.O()}]);