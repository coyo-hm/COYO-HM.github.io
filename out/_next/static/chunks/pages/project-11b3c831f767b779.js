(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6647:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return r(2311)}])},373:function(e,t,r){"use strict";var n=r(5893),c=r(1664),a=r.n(c),l=r(1649);let i=e=>{let{currPage:t,startPage:r,endPage:c,path:i}=e,s=e=>"".concat(i,"?page=").concat(e);return(0,n.jsxs)("div",{className:"flex text-blue-700 justify-center items-center my-2.5",children:[(0,n.jsx)(a(),{href:s(t-1),className:"hover:text-blue-900",onClick:e=>r===t&&e.preventDefault(),children:(0,n.jsx)(l.u1R,{})}),(0,n.jsx)("div",{className:"grid grid-flow-col grid-cols-[repeat(auto-fill, auto)] gap-3 mx-2 text-base place-items-center text-center",children:Array(c-r).fill(0).map((e,c)=>(0,n.jsx)(a(),{href:s(c+r),className:"hover:text-blue-900 ".concat(c+r===t?"h-8 w-8 border-4 rounded-full border-blue-700 text-center leading-6 font-semibold":""),children:c+r+1},c+r))}),(0,n.jsx)(a(),{className:"hover:text-blue-900",href:s(t+1),onClick:e=>c===t+1&&e.preventDefault(),children:(0,n.jsx)(l.hjJ,{})})]})};t.Z=i},1710:function(e,t,r){"use strict";var n=r(5893),c=r(1664),a=r.n(c),l=r(3037);let i=e=>{let{categoryId:t,tag:r}=e,c="tag"!==t?l.F.find(e=>{let{title:r}=e;return r===t}):null;return(0,n.jsxs)("span",{className:"font-bold pb-6 pl-1 text-2xl",children:["tag"===t&&(0,n.jsx)(a(),{href:"/tags/".concat(r),children:r}),!!c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{href:c.link,children:c.title}),r&&(0,n.jsxs)(n.Fragment,{children:["\xa0 〉 \xa0",(0,n.jsx)(a(),{href:"".concat(c.link,"/tags/").concat(r),children:r})]})]})]})};t.Z=i},4541:function(e,t,r){"use strict";r.d(t,{Is:function(){return l},Rj:function(){return i}});var n=r(5893),c=r(2962),a=r(8014);a.Z.title,a.Z.description,a.Z.siteUrl,a.Z.title,a.Z.description,a.Z.author.name;let l=e=>{let{title:t,description:r,url:l}=e;return(0,n.jsx)(c.PB,{title:"".concat(a.Z.title," | ").concat(t),description:r,canonical:l,openGraph:{url:l,title:t,description:r,images:[{alt:t,url:"/thumbnail.png"}]}})},i=e=>{let{title:t,summary:r,date:l,updatedAt:i,url:s,tags:o,images:u=[]}=e,d=new Date(l).toISOString(),h=new Date(i||l).toISOString(),f=u.map(e=>({url:e,alt:t}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.PB,{title:"".concat(a.Z.title," | ").concat(t),description:r,canonical:s,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:h,authors:[a.Z.author.name],tags:o},url:s,title:t,description:r,images:f}}),(0,n.jsx)(c.dX,{authorName:a.Z.author.name,dateModified:h,datePublished:d,description:r,images:u,publisherName:a.Z.author.name,title:t,url:s,publisherLogo:"".concat(a.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},5810:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),c=r(7294),a=r(8963),l=r(1880),i=r(1664),s=r.n(i),o=r(5675),u=r.n(o),d=r(7635),h=r(3930);let f=e=>{let{title:t,date:r,tags:c,thumbnail:a,slug:l}=e,{dateStr:i}=(0,d.Z)(r);return(0,n.jsxs)(s(),{className:"overflow-hidden shadow-xl rounded-xl bg-neutral-100 grid grid-rows-[2fr_1fr] dark:bg-neutral-900",href:"/".concat(l),children:[(0,n.jsx)("div",{className:"relative",children:!!a&&(0,n.jsx)(u(),{loader:e=>(0,h.Z)(e),src:a,alt:t,className:"object-cover",fill:!0})}),(0,n.jsxs)("div",{className:"w-full p-3",children:[(0,n.jsx)("h1",{className:"text-lg font-bold text-neutral-900 dark:text-neutral-100",children:t}),(0,n.jsx)("p",{className:"text-neutral-400",children:i})]})]})};var x=r(1710),p=r(373);let g=e=>{let{tag:t,posts:r,currPage:i,path:s}=e,{startPage:o,endPage:u}=(0,a.Z)(r.length,i),d=r.slice(i*l.JK,(i+1)*l.JK);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.Z,{categoryId:"Project",tag:t}),(0,n.jsx)("article",{className:"grid grid-cols-3 gap-4",children:d.map(e=>{let{frontMatter:t,fields:{slug:r}}=e;return(0,c.createElement)(f,{...t,slug:r,key:r})})}),(0,n.jsx)(p.Z,{currPage:i,path:s,startPage:o,endPage:u})]})};var m=g},1880:function(e,t,r){"use strict";r.d(t,{JK:function(){return c},b7:function(){return n}});let n=10,c=12},8963:function(e,t,r){"use strict";var n=r(1880),c=r(7294);let a=(e,t)=>{let r=Math.max(1,Math.ceil(e/n.b7)),[a,l]=(0,c.useState)(0),[i,s]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let e=t-2;e<0&&(e=0);let n=e+5;n>r&&(n=r),l(e),s(n)},[t,r]),{lastPage:r,startPage:a,endPage:i}};t.Z=a},2311:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u},default:function(){return d}});var n=r(5893),c=r(1163),a=r(7294),l=r(1739),i=r(4541),s=r(5810),o=r(8014),u=!0;function d(e){let{posts:t,tags:r}=e,{route:u,query:{page:d}}=(0,c.useRouter)(),h=d?parseInt(d):0,{setTags:f}=(0,l.Z)();return(0,a.useEffect)(()=>{f(r)},[f,r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Is,{title:"Project",description:o.Z.description,url:o.Z.siteUrl+"project"}),(0,n.jsx)(s.Z,{posts:t,currPage:h,path:u})]})}},7635:function(e,t){"use strict";let r=e=>{let t=new Date(e),r=t.getFullYear(),n=t.getMonth()+1,c=t.getDate();return{year:r,month:n,date:c,dateStr:"".concat(r,".").concat(n,".").concat(c)}};t.Z=r},3930:function(e,t,r){"use strict";function n(e){let{src:t,width:r,quality:n}=e;return"".concat("https://coyo-hm.github.io").concat(t,"?w=").concat(r,"&q=").concat(n||75)}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[866,962,675,774,888,179],function(){return e(e.s=6647)}),_N_E=e.O()}]);