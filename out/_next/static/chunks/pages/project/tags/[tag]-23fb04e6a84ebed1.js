(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{3257:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/tags/[tag]",function(){return r(4271)}])},373:function(e,t,r){"use strict";var n=r(5893),a=r(1664),c=r.n(a),l=r(1649);let s=e=>{let{currPage:t,startPage:r,endPage:a,path:s}=e,i=e=>"".concat(s,"?page=").concat(e);return(0,n.jsxs)("div",{className:"flex text-blue-700 justify-center items-center my-2.5",children:[(0,n.jsx)(c(),{href:i(t-1),className:"hover:text-blue-900",onClick:e=>r===t&&e.preventDefault(),children:(0,n.jsx)(l.u1R,{})}),(0,n.jsx)("div",{className:"grid grid-flow-col grid-cols-[repeat(auto-fill, auto)] gap-3 mx-2 text-base place-items-center text-center",children:Array(a-r).fill(0).map((e,a)=>(0,n.jsx)(c(),{href:i(a+r),className:"hover:text-blue-900 ".concat(a+r===t?"h-8 w-8 border-4 rounded-full border-blue-700 text-center leading-6 font-semibold":""),children:a+r+1},a+r))}),(0,n.jsx)(c(),{className:"hover:text-blue-900",href:i(t+1),onClick:e=>a===t+1&&e.preventDefault(),children:(0,n.jsx)(l.hjJ,{})})]})};t.Z=s},1710:function(e,t,r){"use strict";var n=r(5893),a=r(1664),c=r.n(a),l=r(3037);let s=e=>{let{categoryId:t,tag:r}=e,a="tag"!==t?l.F.find(e=>{let{title:r}=e;return r===t}):null;return(0,n.jsxs)("span",{className:"font-bold pb-6 pl-1 text-2xl",children:["tag"===t&&(0,n.jsx)(c(),{href:"/tags/".concat(r),children:r}),!!a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{href:a.link,children:a.title}),r&&(0,n.jsxs)(n.Fragment,{children:["\xa0 〉 \xa0",(0,n.jsx)(c(),{href:"".concat(a.link,"/tags/").concat(r),children:r})]})]})]})};t.Z=s},4541:function(e,t,r){"use strict";r.d(t,{Is:function(){return l},Rj:function(){return s}});var n=r(5893),a=r(2962),c=r(8014);c.Z.title,c.Z.description,c.Z.siteUrl,c.Z.title,c.Z.description,c.Z.author.name;let l=e=>{let{title:t,description:r,url:l}=e;return(0,n.jsx)(a.PB,{title:"".concat(c.Z.title," | ").concat(t),description:r,canonical:l,openGraph:{url:l,title:t,description:r,images:[{alt:t,url:"/static/images/moblie-profile.png"}]}})},s=e=>{let{title:t,summary:r,date:l,updatedAt:s,url:i,tags:o,images:u=[]}=e,d=new Date(l).toISOString(),h=new Date(s||l).toISOString(),f=u.map(e=>({url:e,alt:t}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.PB,{title:"".concat(c.Z.title," | ").concat(t),description:r,canonical:i,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:h,authors:[c.Z.author.name],tags:o},url:i,title:t,description:r,images:f}}),(0,n.jsx)(a.dX,{authorName:c.Z.author.name,dateModified:h,datePublished:d,description:r,images:u,publisherName:c.Z.author.name,title:t,url:i,publisherLogo:"".concat(c.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},5810:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),a=r(7294),c=r(8963),l=r(1880),s=r(1664),i=r.n(s),o=r(5675),u=r.n(o),d=r(7635),h=r(3930);let f=e=>{let{title:t,date:r,tags:a,thumbnail:c,slug:l}=e,{dateStr:s}=(0,d.Z)(r);return(0,n.jsxs)(i(),{className:"overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900",href:"/".concat(l),children:[(0,n.jsx)("div",{className:"relative",children:!!c&&(0,n.jsx)(u(),{loader:e=>(0,h.Z)(e),src:c,alt:t,className:"object-cover",fill:!0})}),(0,n.jsxs)("div",{className:"w-full p-3",children:[(0,n.jsx)("h1",{className:"text-lg font-bold text-neutral-900 dark:text-neutral-100",children:t}),(0,n.jsx)("p",{className:"text-neutral-400",children:s})]})]})};var x=r(1710),g=r(373);let p=e=>{let{tag:t,posts:r,currPage:s,path:i}=e,{startPage:o,endPage:u}=(0,c.Z)(r.length,s),d=r.slice(s*l.JK,(s+1)*l.JK);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.Z,{categoryId:"Project",tag:t}),(0,n.jsx)("article",{className:"grid grid-cols-3 gap-4",children:d.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,a.createElement)(f,{...t,slug:r,key:r})})}),(0,n.jsx)(g.Z,{currPage:s,path:i,startPage:o,endPage:u})]})};var m=p},1880:function(e,t,r){"use strict";r.d(t,{JK:function(){return a},b7:function(){return n}});let n=10,a=12},8963:function(e,t,r){"use strict";var n=r(1880),a=r(7294);let c=(e,t)=>{let r=Math.max(1,Math.ceil(e/n.b7)),[c,l]=(0,a.useState)(0),[s,i]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=t-2;e<0&&(e=0);let n=e+5;n>r&&(n=r),l(e),i(n)},[t,r]),{lastPage:r,startPage:c,endPage:s}};t.Z=c},4271:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return d}});var n=r(5893),a=r(1163),c=r(7294),l=r(8014),s=r(1739),i=r(4541),o=r(5810);let u=e=>{let{posts:t,tags:r,tag:u}=e,{route:d,query:{page:h}}=(0,a.useRouter)(),f=h?parseInt(h):0,{setTags:x}=(0,s.Z)();return(0,c.useEffect)(()=>{x(r)},[x,r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Is,{title:"Project | ".concat(u),description:l.Z.description,url:l.Z.siteUrl+"project/tags/".concat(u)}),(0,n.jsx)(o.Z,{tag:u,posts:t,currPage:f,path:d})]})};var d=!0;t.default=u},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return{year:r,month:n,date:a,dateStr:"".concat(r,".").concat(n,".").concat(a)}};t.Z=r},3930:function(e,t,r){"use strict";function n(e){let{src:t,width:r,quality:n}=e;return"".concat("https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(n||75)}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[866,962,675,774,888,179],function(){return e(e.s=3257)}),_N_E=e.O()}]);