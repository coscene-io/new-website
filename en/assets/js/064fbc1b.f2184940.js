"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[167],{9890:(e,t,l)=>{l.r(t),l.d(t,{default:()=>B});var n=l(7294),r=l(6010),c=l(1944),a=l(2802),o=l(9960),i=l(5130),d=l(1602),s=l(2400),m=l(3120),u=l(4364),p=l(7887),f=l(6781),A=l(5938),h=l(1419),E=l(30),g=l(7524),x=l(8482),v=l(4292),b=l(7462),w=l(5281),y=l(9464);l(5999);function k(e){let{children:t,href:l,isLast:r}=e;const c="breadcrumbs__link";return r?n.createElement("span",{className:c,itemProp:"name"},t):l?n.createElement(o.Z,{className:c,href:l,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:c},t)}function I(e){let{children:t,active:l,index:c,addMicrodata:a}=e;return n.createElement("li",(0,b.Z)({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":l})}),t,n.createElement("meta",{itemProp:"position",content:String(c+1)}))}function N(e){let{lng:t}=e;const l=(0,a.s1)();return l?n.createElement("nav",{className:(0,r.Z)(w.k.docs.docBreadcrumbs)},n.createElement("ul",{className:"breadcrumbs",itemScope:!0},n.createElement("li",{className:"breadcrumbs__item"},n.createElement(o.Z,{className:"breadcrumbs__link",href:`/${"en"==t?"en/":""}docs/${t}/article/intro`},n.createElement(y.Z,{className:"w-[1.1rem] h-[1.1rem]"}))),l.filter((e=>["article","history"].indexOf(e.label))).map(((e,t)=>{const r=t===l.length-2;return n.createElement(I,{key:t,active:r,index:t,addMicrodata:!!e.href},n.createElement(k,{href:e.href,isLast:r},e.label))})))):null}function q(e){let{children:t,fixed:l,touch:c,defaultIdx:a,isPhone:o=!1}=e;const[i,d]=(0,n.useState)({idx:a||0,dom:null}),[s,m]=(0,n.useState)(0),u=(e,t)=>{const l=e.offsetTop;if(l!=i.idx){if(i.dom){const e=document.querySelector('[data-theme="dark"]');i.dom.style.color=e?"#e3e3e3":"rgb(28, 30, 33)",i.dom.style.fontSize="12.8px"}e.style.color="#2f73dc",e.style.fontSize="18px",d({idx:l-14,dom:e}),document.querySelector(".theme-doc-toc-desktop").scrollTo({top:l,behavior:"smooth"})}},p=()=>{document.querySelectorAll(".theme-doc-markdown > h2").forEach((e=>{const t=e?.getBoundingClientRect().top;if(t<=50&&t>=25){const t=(e=>{const t=e.getAttribute("id");return document.querySelector(`[href="#${t}"]`)})(e);u(t)}}))},f=e=>{if(o)return;const t=document.querySelector(".doc-head-wrapper")?.getBoundingClientRect().top,l=document.querySelector(".doc-history-side-menu"),n=l?.getBoundingClientRect().top;s>t?n>54&&(l.style.top=n-4+"px"):l.style.top="190px",m(t)};return(0,n.useEffect)((()=>(document.querySelector(".doc-wrapper").addEventListener("scroll",p),()=>{document.querySelector(".doc-wrapper").removeEventListener("scroll",p)})),[i]),(0,n.useEffect)((()=>(document.querySelector(".doc-wrapper").addEventListener("scroll",f),()=>{document.querySelector(".doc-wrapper").removeEventListener("scroll",f)})),[s,o]),(0,n.useEffect)((()=>{(()=>{const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link");e.forEach(((t,l)=>t.addEventListener("click",(t=>{u(e[l]),c&&c(l),o||(document.querySelector(".doc-history-side-menu").style.top="54px")}))))})(),u(document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link")[i.idx]),document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link").forEach((e=>{const[t,l]=e.innerHTML.split(" - ");e.innerHTML=`<div class="leading-6">\n        <div>${t}</div>\n        <div>${l}</div>\n      </div>`}))}),[]),n.createElement(n.Fragment,null,l&&n.createElement("div",{className:"col col--2"}),n.createElement("div",{className:(0,r.Z)("pt-6 doc-history-side-menu",l?"fixed top-[190px] col col--2":"relative h-full")},n.createElement("div",{className:"absolute left-0 top-[36px] h-full z-10"},n.createElement("div",{className:"absolute left-[-2.4px] w-[6px] h-[6px] bg-[#2f73dc] rounded-full"}),n.createElement("div",{className:"w-[1px] h-full bg-[#e7e7e7]"})),t))}function P(e){let{content:t,isHistory:c,location:o,lng:d}=e;const b=t,w=function(){const{frontMatter:e,toc:t}=(0,i.k)(),l=(0,g.i)(),r=e.hide_table_of_contents,c=!r&&t.length>0;return{hidden:r,mobile:c?n.createElement(A.Z,null):void 0,desktop:!c||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(A.Z,null)}}(),y=((0,a.s1)(),(0,v.Z)()),[k,I]=(0,n.useState)(!1),[P,B]=(0,n.useState)(!1),[R,S]=(0,n.useState)(0),{toc:C,frontMatter:F}=(0,i.k)();return n.createElement("div",{className:"flex relative h-full items-start bg-white doc-parent"},w.desktop&&c&&!y&&n.createElement(n.Fragment,null,n.createElement(q,{fixed:!0},w.desktop)),n.createElement("div",{className:(0,r.Z)("col",!w.hidden&&x.Z.docItemCol,"pl-[21px]")},n.createElement(m.Z,null),n.createElement("div",{className:"flex"},y&&c&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden fixed z-[1200] top-[305px]",style:{left:P?"253px":"0",transform:P?"rotate(180deg)":void 0},onClick:()=>B(!P)},n.createElement("img",{className:"w-[22px] h-[22px]",src:l(1077).default})),P&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden fixed left-0 flex top-[46px] w-full h-full z-[1000] animate-light-in-fast"},n.createElement("div",{className:"bg-white px-[16px] w-[264px] overflow-hidden side-tel-menu"},n.createElement("div",{className:"py-[14px] flex border-b border-b-[#efefee] doc-tab-line"},n.createElement("a",{href:`${"en"==d?"/en":""}/docs/${d}/article/intro`,className:(0,E.AK)("flex-1 h-[34px] rounded-lg text-center cursor-pointer leading-[34px]",c?"bg-[#f8f8f8] doc-head-btn":"bg-[#2f73dc] text-white doc-head-btn-active")},"\u6587\u6863"),n.createElement("a",{href:`/docs/${d}/history/changelog`,className:(0,E.AK)("flex-1 h-[34px] rounded-lg ml-[13px] text-center cursor-pointer leading-[34px]",c?"bg-[#2f73dc] text-white doc-head-btn-active":"bg-[#f8f8f8] doc-head-btn")},"\u66f4\u65b0\u5386\u53f2")),n.createElement("div",{className:(0,E.AK)(!c&&"mt-[20px]")},c?n.createElement(q,{touch:e=>{S(e),B(!1)},defaultIdx:R,isPhone:!0},w.mobile):n.createElement(f.Z,null))),n.createElement("div",{className:"bg-black opacity-60 flex-1",onClick:()=>B(!1)})))),n.createElement("div",{className:(0,r.Z)(x.Z.docItemContainer,"mmd:pr-[38px] transition-all duration-500 doc-content"),style:{paddingRight:k?"0":void 0}},n.createElement("article",null,n.createElement(N,{lng:d}),n.createElement(u.Z,null),n.createElement(h.Z,null,n.createElement(b,null)),n.createElement(p.Z,null)),n.createElement(s.Z,null)),w.mobile&&!c&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden absolute z-50 top-[48px]",style:{right:k?"63px":"0"},onClick:()=>I(!k)},n.createElement("img",{className:"w-[22px] h-[22px]",src:l(k?1077:9278).default})),n.createElement("div",{className:(0,r.Z)("flex-shrink-0 text-[15px] w-[110px] pl-[10px] flex flex-col items-center pt-[100px] text-[#5e5e5e] transition-all duration-1000 text-left",k?"":"absolute right-[-100%]")},C.map(((e,t)=>n.createElement("a",{href:`#${e.id}`,key:e.id,className:(0,r.Z)("inline-block w-full hover:text-[#2f73dc]",e.level>2?"ml-4 text-[12px] line-clamp-1 mb-[22px]":"line-clamp-2",2===e[t+1]?.level?"mb-[22px]":"mb-[12px]")},e.value))))))),w.desktop&&!c&&n.createElement("div",{className:"col col--2 fixed right-0 top-[200px] lg:bg-white lg:z-[100] lg:rounded-lg doc-toc"},w.desktop))}function B(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,l=-1!==e.location.pathname.indexOf("/history"),r=-1!==e.location.pathname?.indexOf("/docs/en")?"en":"zh";return n.createElement(i.b,{content:e.content},n.createElement(c.FG,{className:t},n.createElement(d.Z,null),n.createElement(P,{content:e.content,isHistory:l,location:e.location,lng:r})))}},4292:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(7294);function r(){const[e,t]=(0,n.useState)(!0),l=()=>{if(window.innerWidth<768)return t(!0);t(!1)};return(0,n.useEffect)((()=>{l(),window.onresize=l}),[]),e}},30:(e,t,l)=>{function n(){for(var e=arguments.length,t=new Array(e),l=0;l<e;l++)t[l]=arguments[l];return t.filter(Boolean).join(" ")}function r(e,t,l){const{key:n,children:c="children"}=l;if(!e)return null;const a=n||"value";if(e.hasOwnProperty(a)&&e[a]===t){const{current:t,parent:n}=l;let r=n[c][t-1],a=n[c][t+1];return{current:e,prev:r,next:a}}let o=null;return e[c]&&e[c].forEach(((n,c)=>{const a=r(n,t,{...l,parent:e,current:c});a&&(o=a)})),o}function c(e){for(var t=(window.location.search.substring(1)||"").split("&"),l=0;l<t.length;l++){var n=t[l].split("=");if(n[0]==e)return n[1]}return!1}function a(e){for(var t=e.offsetLeft,l=(e.offsetTop,e.offsetParent);null!==l;)t+=l.offsetLeft,l.offsetTop,l=l.offsetParent;return t}l.d(t,{AK:()=>n,Dv:()=>c,fJ:()=>a,g:()=>r})},1077:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});const n="data:image/png;base64,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"},9278:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABCCAYAAAAPIWX+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFUlEQVR4nN2bT0gjVxzHvzNmEptE0xgSlZmEqGvXzdB1FrZs8aaFbXsY6FKosKWnPTal7W17aXssZU/rYfdQ6HkvLc0PpJWih5568E9BUYpgsfgnCW0QYyAaeD0kcdPoRs2890b3cw383vczPyZ57+U9hTEG0RDRIIA7AEYBvAYgCSAGIAQgKDzAKXhEFCUiFcAEgA8AvOv1eo1IJIKuri4Eg0EEAgF0dnbC4/HA4xES4Uy4jkpEBoA0gPuhUCiu6zqi0Si6u7t5DsMFLuJENATgC4/H81EikfDG4/FLKduII3EiCgL4UtO0z5PJpGdwcBBer5dTNLG0LU5E9xRFeZxIJIyRkZErI1znwuJE9AqAKb/f/+DWrVvo6ekREEs8FxInogSAn3Rdt27evOnaNzIPzp2ciCwA06lUqn9oaEhcIkmcS5yI3lBVdcayrFd1XRedSQrKWTM3InpdUZTfbt++Herr65MUSzxqqw9rE5Jpy7JeKmmghTgR+QHQyMiIYRiGxEhyaNXxx319fdbw8LC0MDI5VZyI7vn9/geWZUmOI48T4rVp6JRlWdA0zYVIcjit418ZhqFHIhHpYc5LPp/H06dPHdX43+84EV3TNO2zVCrlqKhI8vk8xsfHsbKygkqlgnQ63Vad5o4/TCaTHp/P5zyhABqlTdPE5ORk+8UYY2CMIZPJxKenp8vlcpldRnK5HDNNkwFgpmmyXC7nqF5jx9OJRMJ7GZeXzZ2em5tDNBp1VpRVu61lMplssVjk0x6O8O50nXrH3wqHw7FAIOC0OVwR0ukadfH3+/v7uRTkhUhp4Ln43d7eXm5FnSJaGgCQyWQGZ2ZmuLw3PBD1TjejArgTDof5Ps02kdLpGioAKxQKCSl+EWRKA1Xx68GgK39fHSNbGqiKx/1+v9BBWuGGNFAVj7g1N3dLGqiKB93YH3dTGqiKd8kWd1saOGOXVRSsYUtbURQ3IkAFsF+pVKQOGovFMDs7C9M0sby8jImJCeTzeakZVABF2eKA+/IqgH/K5bK0ARtxU14F8HepVJIy2Gm4Ja8C+LNYLAofqBVuyKsAFvf29oQOch5ky6sAfi8UCsIGuAjN8uPj4+LkWXXPbXN/f1/Iurcdstms8DV5fQLzSzabFfNk2yAWi2Fubg6maWJlZUVI5+viP+zs7HAt7JRoNCpUvi7+a6FQyB0cHHArzAOh8uz5PynfLi8vc3+XeCBiH65xkTK1ubl5eHh4yOeJckRI51mt46za9e/W1tYcP01R8Ox887L0m42NjYpbc/ezaO78s2fP2i/GGjrOql1/tLCwwKlHYsjlcuzJkyeOapw451Y7CrI2NjZ2qU9FOOXEDoxt20UAnywtLeHo6MiFSHI4devJtu0fS6XS90tLS5LjyKPVnlt6d3f3j/X1dWlhZPJCcdu2SwDeW11dzW9tbUmMJIeWu6y2bf8F4O3FxcW93d1dOYkkceb2sm3bi4yxu/Pz8/9ub2/LyCSFM49t1yGilKIoP9+4cSP+MhzUP7c48HJdzbiQOAAQkQ/Ao0AgkB4dHcVVneRcWLwOEd0DMGUYhp5KpXBZT0O+iLbFgePp7deapn06MDDgGRgYuDL3zxyJ1yGiawAeXqUrllzE6xBRHMDHAD4MhUKGruvo7e2F20dNToOreJ2Ga9STAN7p7Ow0wuHw8TXqYDAIn88HTdPQ0dHBffzzIES8mdrF+TdRvTh/HdWL81EA3XDp4vx/7jZQLgyfVe4AAAAASUVORK5CYII="}}]);