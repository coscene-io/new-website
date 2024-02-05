"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[167],{9890:(e,t,l)=>{l.r(t),l.d(t,{default:()=>H});var n=l(7294),r=l(6010),o=l(1944),c=l(5130),a=l(1602),i=l(2400),s=l(3120),d=l(4364),m=l(7887),u=l(5938),p=l(1419),f=l(30),h=l(1116),x=l(7524),g=l(6486),E=l(8482),b=l(4292),y=l(7462),v=l(5281),k=l(2802),N=l(9960),S=l(9464),w=l(5999);function A(e){let{children:t,href:l,isLast:r}=e;const o="breadcrumbs__link";return r?n.createElement("span",{className:o,itemProp:"name"},t):l?n.createElement(N.Z,{className:o,href:l,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:o},t)}function q(e){let{children:t,active:l,index:o,addMicrodata:c}=e;return n.createElement("li",(0,y.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":l})}),t,n.createElement("meta",{itemProp:"position",content:String(o+1)}))}function Z(e){let{lng:t}=e;const l=(0,k.s1)();return l?n.createElement("nav",{className:(0,r.Z)(v.k.docs.docBreadcrumbs)},n.createElement("ul",{className:"breadcrumbs",itemScope:!0},n.createElement("li",{className:"breadcrumbs__item"},n.createElement("a",{className:"breadcrumbs__link",href:`/${"en"==t?"en/":""}docs/${t}/article/intro`},n.createElement(S.Z,{className:"w-[1.1rem] h-[1.1rem]"}))),l.map(((e,t)=>{const r=t===l.length-1;return n.createElement(q,{key:t,active:r,index:t,addMicrodata:!!e.href},n.createElement(A,{href:e.href,isLast:r},(0,w.I)({message:e.label})))})))):null}function _(e){let{list:t,children:r,pathname:o,isHistory:c,selectOpt:a,onSync:i}=e;return n.createElement(n.Fragment,null,t?.items?.map(((e,c)=>{const s=e?.href==o,d=a&&a?.label==e.label;return n.createElement("div",{key:c,className:(0,f.AK)(!r&&"lg:mb-[26px] mmd:mb-[12px]")},n.createElement("a",{href:e?.href||"#",className:(0,f.AK)("flex items-center justify-between py-1 px-[20px] cursor-pointer hover:text-[#2f73dc] hover:bg-[#f5f5f5] hover:rounded-md",s&&"text-[#2f73dc] bg-[#f5f5f5] rounded-md",r&&t?.items.length!==c+1&&"mb-[12px]",r&&0==c&&"mt-[12px]",r&&"ml-[20px]"),onClick:()=>!e?.href&&i(e)},n.createElement("div",{className:"mmd:line-clamp-1"},e.label),e?.items&&n.createElement("img",{className:(0,f.AK)("w-[10px] transition-all",d&&"rotate-90"),src:l(6628).default})),d&&e.items?.length?n.createElement(_,{list:e,children:!0,pathname:o,onSync:i}):null)})))}const T=(e,t)=>{if(!e)return;const l=e?.offsetTop||0;if(l!=t?.target.idx){if(t?.target.dom){const l=document.querySelector('[data-theme="dark"]');t.target.dom.style.color=l?"#e3e3e3":"rgb(28, 30, 33)",t.target.dom.style.fontSize="12.8px",e.style.color="#2f73dc",e.style.fontSize="18px"}t?.setTarget({idx:l-14,dom:e}),document.querySelector(".theme-doc-toc-desktop").scrollTo({top:l,behavior:"smooth"})}};function L(e){let{children:t,fixed:l,touch:o,defaultIdx:c,isPhone:a=!1}=e;const[i,s]=(0,n.useState)({idx:c||0,dom:null}),[d,m]=(0,n.useState)(0),[u,p]=(0,n.useTransition)({timeoutMs:3e3}),f=(e,t)=>{if(!e)return;const l=e?.offsetTop||0;if(l==i.idx)return;const n=document.querySelector('[data-theme="dark"]');document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link").forEach((e=>{e.style.color=n?"#e3e3e3":"rgb(28, 30, 33)",e.style.fontSize="12.8px"})),e.style.color="#2f73dc",e.style.fontSize="18px",s({idx:l,dom:e});const r=document.querySelector(".theme-doc-toc-desktop"),o=document.querySelector(".history-wrapper");o?.scrollTop>120&&document.querySelector(".history-wrapper").scrollTo(0,114),setTimeout((()=>{let t=0;if(a){const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li");for(let l=0;l<i.idx;l++)if(e[l]){t+=+e[l].getBoundingClientRect().height}}const n=a?t+8*i.idx+8:l-24;r?.scrollTo({top:n,behavior:"smooth"});const c=n+r?.clientHeight>=r?.scrollHeight-100,s=e.parentNode.getBoundingClientRect();document.querySelector(".side-rounded")&&(document.querySelector(".side-rounded").style.top=c?`${a?.087*s.top:e.getBoundingClientRect().top-200+o.scrollTop}px`:"10px")}),100)},h=(0,g.throttle)((()=>{const e=[];document.querySelectorAll(".theme-doc-markdown > h2").forEach((t=>{const l=t?.getBoundingClientRect().top;l<=200&&l>=0&&e.push(t)})),p((()=>{const t=e[e.length-1];if(t){const e=(e=>{const t=e.getAttribute("id");return document.querySelector(`[data-id="#${t}"]`)})(t);f(e)}}))}),300),x=e=>{if(a)return;const t=document.querySelector(".doc-head-wrapper")?.getBoundingClientRect().top,l=document.querySelector(".doc-history-side-menu"),n=l?.getBoundingClientRect().top;d>t&&n>54&&(l.style.top=n-4+"px"),m(t)};return(0,n.useEffect)((()=>{const e=document.querySelector(".history-content");return e.addEventListener("scroll",h),()=>{e.removeEventListener("scroll",h)}}),[i]),(0,n.useEffect)((()=>{if(!a)return document.querySelector(".history-content").addEventListener("scroll",x),()=>{document.querySelector(".history-content").removeEventListener("scroll",x)}}),[d,a]),(0,n.useEffect)((()=>{(()=>{const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li > a"),t=document.querySelectorAll(".theme-doc-toc-desktop > ul > li a + ul > li > a"),l=document.querySelector('[data-theme="dark"]');e.forEach(((t,n)=>{t.getAttribute("href")&&(t.setAttribute("data-id",t.getAttribute("href")),t.style.cursor="pointer",t.removeAttribute("href")),t.addEventListener("click",(t=>{t.stopPropagation(),f(e[n]),P(e,n,{isPhone:a,isHistory:!0});const r=e[n].parentNode.parentNode.children;for(let o=0;o<r.length;o++){const t=r[o];t!==e[n].parentNode&&(t.children[0].style.color=l?"#e3e3e3":"rgb(28, 30, 33)",t.children[0].style.fontSize="12.8px")}}))})),t.forEach(((e,t)=>{e.style.cursor="initial",e.addEventListener("mouseover",(function(){e.style.color="#1c1e21"})),e.addEventListener("mouseout",(function(){e.style.color="#1c1e21"})),e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault()}))}))})(),f(document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link")[i.idx]),document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link").forEach((e=>{const[t,l]=e.innerHTML.split(" - ");e.innerHTML=`<div class="leading-6">\n        <div>${t}</div>\n        <div>${l}</div>\n      </div>`}))}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:(0,r.Z)("pt-6 doc-history-side-menu",l?"fixed top-[190px] left-[40px] flex-1 flex-shrink-0 w-[262px]":"relative h-full")},n.createElement("div",{className:"absolute left-0 top-[36px] h-full z-10 hidden lg:block"},n.createElement("div",{className:"absolute left-[-2.4px] w-[6px] h-[6px] bg-[#2f73dc] rounded-full side-rounded"}),n.createElement("div",{className:"w-[1px] h-full bg-[#e7e7e7]"})),t))}function P(e,t,l){let{isPhone:n,isHistory:r}=l;const o=document.getElementById(e[t].getAttribute("data-id").split("#")[1]);o?.offsetTop&&document.querySelector(r?".history-content":".doc-layout-wrapper").scrollTo({top:o?.offsetTop-(r?n?0:-4:-10),behavior:"smooth"}),n||r&&(document.querySelector(".doc-history-side-menu").style.top="190px")}function C(e){let{content:t,isHistory:o,location:a,lng:g}=e;const y=t,v=function(){const{frontMatter:e,toc:t}=(0,c.k)(),l=(0,x.i)(),r=e.hide_table_of_contents,o=!r&&t.length>0;return{hidden:r,mobile:o?n.createElement(u.Z,null):void 0,desktop:!o||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(u.Z,null)}}(),k=(0,b.Z)(),[N,S]=(0,n.useState)(!1),[A,q]=(0,n.useState)(0),[C,H]=(0,n.useState)(!1),{toc:z}=(0,c.k)(),I=(0,h.V)(),[$,B]=(0,n.useState)(null),[F,K]=(0,n.useState)(null),[M,R]=(0,n.useState)(!1),j=e=>{R(!1),q(e)},O=()=>{document.querySelectorAll(".side-tel-menu .theme-doc-toc-desktop > ul > li > a").forEach(((e,t)=>{e.addEventListener("click",(e=>{e.stopPropagation(),j(t)}))}))};return(0,n.useEffect)((()=>{o||(()=>{const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li > a"),t=document.querySelectorAll(".theme-doc-toc-desktop > ul > li a + ul > li > a");e.forEach(((t,l)=>{t.getAttribute("href")&&(t.setAttribute("data-id",t.getAttribute("href")),t.style.cursor="pointer",t.removeAttribute("href")),t.addEventListener("click",(t=>{t.stopPropagation(),T(e[l]),P(e,l,{isPhone:k,isHistory:o})}))})),t.forEach(((e,l)=>{e.getAttribute("href")&&(e.style.cursor="pointer",e.setAttribute("data-id",e.getAttribute("href")),e.removeAttribute("href")),e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault(),P(t,l,{isPhone:k,isHistory:o}),j(l)}))}))})(),k&&O()}),[o,k]),(0,n.useEffect)((()=>{O()}),[M]),(0,n.useEffect)((()=>{setTimeout((()=>{H(!0)}),10);let e=a.pathname;if(e){const t=e.split("");"/"==t[t.length-1]&&(e=e.slice(0,t.length-1));const l=(0,f.g)(I,e,{key:"href",children:"items"});l.path=e;const n=l.parent.items.length-1;if(!l.next&&l.current?.href==l.parent.items[n]?.href){const e=I.items.findIndex((e=>e.label==l.parent.label));I.items[e+1]&&(l.next=I.items[e+1])}if(!l.prev&&l.current?.href==l.parent?.items[0]?.href){const e=I.items.findIndex((e=>e.label==l.parent.label));I.items[e-1]&&(l.prev=I.items[e-1])}B(l?.parent),K(l)}}),[]),n.createElement("div",{className:(0,r.Z)("flex relative h-full items-start bg-white doc-parent transition-[opacity] duration-500",o&&"history-doc-parent",!o&&!k&&"mr-[300px]",C?"opacity-100":"opacity-0")},v.desktop&&o&&!k&&n.createElement(n.Fragment,null,n.createElement(L,{fixed:!0},v.desktop)),n.createElement("div",{className:(0,r.Z)("col",!v.hidden&&E.Z.docItemCol,"pl-[21px] overflow-hidden md-wrapper")},n.createElement(s.Z,null),n.createElement("div",{className:"flex"},k&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden fixed z-[1200] top-[305px]",style:{left:M?"253px":"0",transform:M?"rotate(180deg)":void 0},onClick:()=>R(!M)},n.createElement("img",{className:"w-[22px] h-[22px]",src:l(1077).default})),M&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden fixed left-0 flex top-[46px] w-full h-full z-[1000] animate-light-in-fast"},n.createElement("div",{className:"bg-white px-[16px] w-[264px] overflow-hidden side-tel-menu"},n.createElement("div",{className:"py-[14px] flex border-b border-b-[#efefee] doc-tab-line"},n.createElement("a",{href:`${"en"==g?"/en":""}/docs/${g}/article/intro`,className:(0,f.AK)("flex-1 h-[34px] rounded-lg text-center cursor-pointer leading-[34px]",o?"bg-[#f8f8f8] doc-head-btn":"bg-[#2f73dc] text-white doc-head-btn-active")},n.createElement(w.Z,null,"doc\u6587\u6863")),n.createElement("a",{href:`/docs/${g}/history/changelog`,className:(0,f.AK)("flex-1 h-[34px] rounded-lg ml-[13px] text-center cursor-pointer leading-[34px]",o?"bg-[#2f73dc] text-white doc-head-btn-active":"bg-[#f8f8f8] doc-head-btn")},n.createElement(w.Z,null,"\u66f4\u65b0\u5386\u53f2"))),n.createElement("div",{className:(0,f.AK)(!o&&"mt-[20px]")},o?n.createElement(L,{touch:j,defaultIdx:A,isPhone:!0},v.mobile):n.createElement("div",{className:(0,f.AK)("mt-[20px]",o&&"pt-[30px]")},n.createElement(_,{list:I,pathname:F?.current.href,isHistory:o,selectOpt:$,onSync:e=>{B(e.label==$?.label?null:e)}})))),n.createElement("div",{className:"bg-black opacity-60 flex-1",onClick:()=>R(!1)})))),n.createElement("div",{className:(0,r.Z)(E.Z.docItemContainer,"transition-all duration-700 doc-content"),style:{width:N?"55vw":"100vw"}},n.createElement("article",null,n.createElement(Z,{lng:g}),n.createElement(d.Z,null),n.createElement(p.Z,null,n.createElement(y,null)),n.createElement(m.Z,null)),n.createElement(i.Z,null),!o&&n.createElement("div",{className:"flex justify-between w-full py-[50px] pr-[24px] mmd:pb-[21px] mmd:pr-[33px] bg-white mmd:ml-[0px] mmd:pl-[16px] doc-pagination relative z-[50]"},n.createElement("div",{className:"flex-1"},F?.prev&&n.createElement("a",{href:F.prev?.href||F.prev?.items?.length&&F.prev?.items[0].href,className:"inline-block w-full mr-[17px] border border-[#e0e0e0] flex-1 rounded-lg px-[20px] py-[6px] cursor-pointer hover:opacity-75"},n.createElement("div",{className:"text-[#8c8c8c] text-[14px]"},n.createElement(w.Z,null,"\u4e0a\u4e00\u9875")),n.createElement("div",{className:"text-[#2f73dc] mmd:text-sm flex justify-start"},"<<",n.createElement("div",{className:"line-clamp-1"},F.prev.label)))),n.createElement("div",{className:"flex-1"},F?.next&&n.createElement("a",{href:F.next?.href||F.next?.items?.length&&F.next?.items[0].href,className:"inline-block w-full ml-[17px] border border-[#e0e0e0] flex-1 rounded-lg text-right px-[20px] py-[6px] cursor-pointer hover:opacity-75"},n.createElement("div",{className:"text-[#8c8c8c] text-[14px]"},n.createElement(w.Z,null,"\u4e0b\u4e00\u9875")),n.createElement("div",{className:"text-[#2f73dc] mmd:text-sm flex justify-end"},n.createElement("div",{className:"line-clamp-1"},F.next.label),">>"))))),v.mobile&&!o&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden fixed z-50 top-[98px]",style:{right:N?"63px":"10px"},onClick:()=>S(!N)},n.createElement("img",{className:"w-[22px] h-[22px]",src:l(N?1077:9278).default})),n.createElement("div",{className:(0,r.Z)("flex-shrink-0 text-[15px] w-[120px] pl-[10px] flex flex-col items-center pt-[100px] text-[#5e5e5e] bg-white transition-all duration-700 text-left",N?"fixed right-[10px] rounded-lg":"absolute right-[-100%]")},z.map(((e,t)=>n.createElement("a",{key:e.id,className:(0,r.Z)("inline-block w-full hover:text-[#2f73dc] cursor-pointer mr-[6px]",e.level>2?"ml-4 text-[12px] line-clamp-1 mb-[22px]":"line-clamp-2",2===e[t+1]?.level?"mb-[22px]":"mb-[12px]"),onClick:()=>(e=>{const t=document.getElementById(e.id);document.querySelector(".doc-layout-wrapper").scrollTo(0,t?.offsetTop-10)})(e)},e.value))))))),v.desktop&&!o&&!k&&n.createElement("div",{className:"max-w-[200px] lg:bg-white lg:mt-10 lg:rounded-lg doc-toc fixed right-[50px]"},v.desktop))}function H(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,l=-1!==e.location.pathname.indexOf("/history"),r=-1!==e.location.pathname?.indexOf("/docs/en")?"en":"zh";return n.createElement(c.b,{content:e.content},n.createElement(o.FG,{className:t},n.createElement(a.Z,null),n.createElement(C,{content:e.content,isHistory:l,location:e.location,lng:r})))}}}]);