"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[167],{4477:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},7386:(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var a=n(7294),l=n(6010),r=n(1944),o=n(9960),c=n(902);const s=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(s.Provider,{value:l},t)}function d(){const e=(0,a.useContext)(s);if(null===e)throw new c.i6("DocProvider");return e}function m(){const{metadata:e,frontMatter:t,assets:n}=d();return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(7462),p=n(5999);function h(e){const{permalink:t,title:n,subLabel:r,isNext:c}=e;return a.createElement(o.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function f(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function g(){const{metadata:e}=d();return a.createElement(f,{previous:e.previous,next:e.next})}var E=n(2263),v=n(143),b=n(5281),x=n(373),y=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function N(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function w(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(o.Z,{to:n,onClick:l},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function S(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,E.Z)(),{pluginId:o}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,x.J)(o),{latestDocSuggestion:s,latestVersionSuggestion:i}=(0,v.Jo)(o),d=s??(m=i).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,l.Z)(t,b.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(N,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(w,{versionLabel:i.label,to:d.path,onClick:()=>c(i.name)})))}function A(e){let{className:t}=e;const n=(0,y.E)();return n.banner?a.createElement(S,{className:t,versionMetadata:n}):null}function L(e){let{className:t}=e;const n=(0,y.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,b.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function Z(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:b.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(T,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(Z,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const U={iconEdit:"iconEdit_Z9Sw"};function q(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(U.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:b.k.common.editThisPage},a.createElement(q,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const P={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function B(e){let{permalink:t,label:n,count:r}=e;return a.createElement(o.Z,{href:t,className:(0,l.Z)(P.tag,r?P.tagWithCount:P.tagRegular)},n,r&&a.createElement("span",null,r))}const M={tags:"tags_jXut",tag:"tag_QGVx"};function I(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(M.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:M.tag},a.createElement(B,{label:t,permalink:n}))}))))}const H={lastUpdated:"lastUpdated_vwxv"};function z(e){return a.createElement("div",{className:(0,l.Z)(b.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(I,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,l.Z)(b.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(C,{editUrl:t})),a.createElement("div",{className:(0,l.Z)("col",H.lastUpdated)},(n||r)&&a.createElement(_,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function D(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=e,s=c.length>0,i=!!(t||n||o);return s||i?a.createElement("footer",{className:(0,l.Z)(b.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(z,{tags:c}),i&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}n(3743);var F=n(9407);function R(){const{toc:e,frontMatter:t}=d();return a.createElement(F.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var $=n(2503),j=n(1506);function K(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=d();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,l.Z)(b.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement($.Z,{as:"h1"},n)),a.createElement(j.Z,null,t))}var O=n(30),W=n(1116),G=n(7524);const J={docItemContainer:"docItemContainer_dkDc",docItemCol:"docItemCol_NjgA"};var Q=n(4292),X=n(2802);function Y(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function ee(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(o.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function te(e){let{children:t,active:n,index:r,addMicrodata:o}=e;return a.createElement("li",(0,u.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ne(e){let{lng:t}=e;const n=(0,X.s1)();return n?a.createElement("nav",{className:(0,l.Z)(b.k.docs.docBreadcrumbs)},a.createElement("ul",{className:"breadcrumbs",itemScope:!0},a.createElement("li",{className:"breadcrumbs__item"},a.createElement("a",{className:"breadcrumbs__link",href:`/${"en"==t?"en/":""}docs/${t}/article/intro`},a.createElement(Y,{className:"w-[1.1rem] h-[1.1rem]"}))),n.map(((e,t)=>{const l=t===n.length-1;return a.createElement(te,{key:t,active:l,index:t,addMicrodata:!!e.href},a.createElement(ee,{href:e.href,isLast:l},(0,p.I)({message:e.label})))})))):null}function ae(e){let{list:t,children:l,pathname:r,isHistory:o,selectOpt:c,onSync:s}=e;return a.createElement(a.Fragment,null,t?.items?.map(((e,o)=>{const i=e?.href==r,d=c&&c?.label==e.label;return a.createElement("div",{key:o,className:(0,O.AK)(!l&&"lg:mb-[26px] mmd:mb-[12px]")},a.createElement("a",{href:e?.href||"#",className:(0,O.AK)("flex items-center justify-between py-1 px-[20px] cursor-pointer hover:text-[#2f73dc] hover:bg-[#f5f5f5] hover:rounded-md",i&&"text-[#2f73dc] bg-[#f5f5f5] rounded-md",l&&t?.items.length!==o+1&&"mb-[12px]",l&&0==o&&"mt-[12px]",l&&"ml-[20px]"),onClick:()=>!e?.href&&s(e)},a.createElement("div",{className:"mmd:line-clamp-1"},e.label),e?.items&&a.createElement("img",{className:(0,O.AK)("w-[10px] transition-all",d&&"rotate-90"),src:n(6628).default})),d&&e.items?.length?a.createElement(ae,{list:e,children:!0,pathname:r,onSync:s}):null)})))}const le=(e,t)=>{if(!e)return;const n=e?.offsetTop||0;if(n!=t?.target.idx){if(t?.target.dom){const n=document.querySelector('[data-theme="dark"]');t.target.dom.style.color=n?"#e3e3e3":"rgb(28, 30, 33)",t.target.dom.style.fontSize="12.8px",e.style.color="#2f73dc",e.style.fontSize="18px"}t?.setTarget({idx:n-14,dom:e}),document.querySelector(".theme-doc-toc-desktop").scrollTo({top:n,behavior:"smooth"})}};function re(e){let{children:t,fixed:n,touch:r,defaultIdx:o,isPhone:c=!1}=e;const[s,i]=(0,a.useState)({idx:o||0,dom:null}),[d,m]=(0,a.useState)(0),u=(e,t)=>{if(!e)return;const n=e?.offsetTop||0;if(n==s.idx)return;const a=document.querySelector('[data-theme="dark"]');document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link").forEach((e=>{e.style.color=a?"#e3e3e3":"rgb(28, 30, 33)",e.style.fontSize="12.8px"})),e.style.color="#2f73dc",e.style.fontSize="18px",i({idx:n,dom:e});const l=document.querySelector(".theme-doc-toc-desktop"),r=document.querySelector(".history-wrapper");r?.scrollTop>120&&document.querySelector(".history-wrapper").scrollTo(0,114),setTimeout((()=>{let t=0;if(c){const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li");for(let n=0;n<s.idx;n++)if(e[n]){t+=+e[n].getBoundingClientRect().height}}const a=c?t+8*s.idx+8:n-24;l?.scrollTo({top:a,behavior:"smooth"});const o=a+l?.clientHeight>=l?.scrollHeight-100,i=e.parentNode.getBoundingClientRect();document.querySelector(".side-rounded")&&(document.querySelector(".side-rounded").style.top=o?`${c?.087*i.top:e.getBoundingClientRect().top-200+r.scrollTop}px`:"10px")}),100)},p=()=>{document.querySelectorAll(".theme-doc-markdown > h2").forEach((e=>{const t=e?.getBoundingClientRect().top;if(t<=200&&t>=140){console.log(t);const n=(e=>{const t=e.getAttribute("id");return document.querySelector(`[data-id="#${t}"]`)})(e);u(n)}}))},h=e=>{if(c)return;const t=document.querySelector(".doc-head-wrapper")?.getBoundingClientRect().top,n=document.querySelector(".doc-history-side-menu"),a=n?.getBoundingClientRect().top;d>t&&a>54&&(n.style.top=a-4+"px"),m(t)};return(0,a.useEffect)((()=>(setTimeout((()=>{document.querySelector(".history-content").addEventListener("scroll",p)}),10),()=>{document.querySelector(".history-content").removeEventListener("scroll",p)})),[s]),(0,a.useEffect)((()=>{if(!c)return document.querySelector(".history-content").addEventListener("scroll",h),()=>{document.querySelector(".history-content").removeEventListener("scroll",h)}}),[d,c]),(0,a.useEffect)((()=>{(()=>{const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li > a"),t=document.querySelectorAll(".theme-doc-toc-desktop > ul > li a + ul > li > a"),n=document.querySelector('[data-theme="dark"]');e.forEach(((t,a)=>{t.getAttribute("href")&&(t.setAttribute("data-id",t.getAttribute("href")),t.style.cursor="pointer",t.removeAttribute("href")),t.addEventListener("click",(t=>{t.stopPropagation(),u(e[a]),oe(e,a,{isPhone:c,isHistory:!0});const l=e[a].parentNode.parentNode.children;for(let r=0;r<l.length;r++){const t=l[r];t!==e[a].parentNode&&(t.children[0].style.color=n?"#e3e3e3":"rgb(28, 30, 33)",t.children[0].style.fontSize="12.8px")}}))})),t.forEach(((e,t)=>{e.style.cursor="initial",e.addEventListener("mouseover",(function(){e.style.color="#1c1e21"})),e.addEventListener("mouseout",(function(){e.style.color="#1c1e21"})),e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault()}))}))})(),u(document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link")[s.idx]),document.querySelectorAll(".theme-doc-toc-desktop > ul > li > .table-of-contents__link").forEach((e=>{const[t,n]=e.innerHTML.split(" - ");e.innerHTML=`<div class="leading-6">\n        <div>${t}</div>\n        <div>${n}</div>\n      </div>`}))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:(0,l.Z)("pt-6 doc-history-side-menu",n?"fixed top-[190px] left-[40px] flex-1 flex-shrink-0 w-[262px]":"relative h-full")},a.createElement("div",{className:"absolute left-0 top-[36px] h-full z-10 hidden lg:block"},a.createElement("div",{className:"absolute left-[-2.4px] w-[6px] h-[6px] bg-[#2f73dc] rounded-full side-rounded"}),a.createElement("div",{className:"w-[1px] h-full bg-[#e7e7e7]"})),t))}function oe(e,t,n){let{isPhone:a,isHistory:l}=n;const r=document.getElementById(e[t].getAttribute("data-id").split("#")[1]);r?.offsetTop&&document.querySelector(".doc-layout-wrapper").scrollTo({top:r?.offsetTop-(l?a?0:108:10),behavior:"smooth"}),a||l&&(document.querySelector(".doc-history-side-menu").style.top="190px")}function ce(e){let{content:t,isHistory:r,location:o,lng:c}=e;const s=t,i=function(){const{frontMatter:e,toc:t}=d(),n=(0,G.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(R,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(R,null)}}(),m=(0,Q.Z)(),[u,h]=(0,a.useState)(!1),[f,E]=(0,a.useState)(0),[v,b]=(0,a.useState)(!1),{toc:x}=d(),y=(0,W.V)(),[k,N]=(0,a.useState)(null),[w,S]=(0,a.useState)(null),[T,Z]=(0,a.useState)(!1),_=e=>{Z(!1),E(e)},U=()=>{document.querySelectorAll(".side-tel-menu .theme-doc-toc-desktop > ul > li > a").forEach(((e,t)=>{e.addEventListener("click",(e=>{e.stopPropagation(),_(t)}))}))};return(0,a.useEffect)((()=>{r||(()=>{const e=document.querySelectorAll(".theme-doc-toc-desktop > ul > li > a"),t=document.querySelectorAll(".theme-doc-toc-desktop > ul > li a + ul > li > a");e.forEach(((t,n)=>{t.getAttribute("href")&&(t.setAttribute("data-id",t.getAttribute("href")),t.style.cursor="pointer",t.removeAttribute("href")),t.addEventListener("click",(t=>{t.stopPropagation(),le(e[n]),oe(e,n,{isPhone:m,isHistory:r})}))})),t.forEach(((e,n)=>{e.getAttribute("href")&&(e.style.cursor="pointer",e.setAttribute("data-id",e.getAttribute("href")),e.removeAttribute("href")),e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault(),oe(t,n,{isPhone:m,isHistory:r}),_(n)}))}))})(),m&&U()}),[r,m]),(0,a.useEffect)((()=>{U()}),[T]),(0,a.useEffect)((()=>{setTimeout((()=>{b(!0)}),10);let e=o.pathname;if(e){const t=e.split("");"/"==t[t.length-1]&&(e=e.slice(0,t.length-1));const n=(0,O.g)(y,e,{key:"href",children:"items"});n.path=e,N(n?.parent),S(n)}}),[]),a.createElement("div",{className:(0,l.Z)("flex relative h-full items-start bg-white doc-parent transition-[opacity] duration-500",r&&"history-doc-parent",!r&&!m&&"mr-[300px]",v?"opacity-100":"opacity-0")},i.desktop&&r&&!m&&a.createElement(a.Fragment,null,a.createElement(re,{fixed:!0},i.desktop)),a.createElement("div",{className:(0,l.Z)("col",!i.hidden&&J.docItemCol,"pl-[21px] overflow-hidden md-wrapper")},a.createElement(A,null),a.createElement("div",{className:"flex"},m&&a.createElement(a.Fragment,null,a.createElement("div",{className:"lg:hidden fixed z-[1200] top-[305px]",style:{left:T?"253px":"0",transform:T?"rotate(180deg)":void 0},onClick:()=>Z(!T)},a.createElement("img",{className:"w-[22px] h-[22px]",src:n(1077).default})),T&&a.createElement(a.Fragment,null,a.createElement("div",{className:"lg:hidden fixed left-0 flex top-[46px] w-full h-full z-[1000] animate-light-in-fast"},a.createElement("div",{className:"bg-white px-[16px] w-[264px] overflow-hidden side-tel-menu"},a.createElement("div",{className:"py-[14px] flex border-b border-b-[#efefee] doc-tab-line"},a.createElement("a",{href:`${"en"==c?"/en":""}/docs/${c}/article/intro`,className:(0,O.AK)("flex-1 h-[34px] rounded-lg text-center cursor-pointer leading-[34px]",r?"bg-[#f8f8f8] doc-head-btn":"bg-[#2f73dc] text-white doc-head-btn-active")},a.createElement(p.Z,null,"doc\u6587\u6863")),a.createElement("a",{href:`/docs/${c}/history/changelog`,className:(0,O.AK)("flex-1 h-[34px] rounded-lg ml-[13px] text-center cursor-pointer leading-[34px]",r?"bg-[#2f73dc] text-white doc-head-btn-active":"bg-[#f8f8f8] doc-head-btn")},a.createElement(p.Z,null,"\u66f4\u65b0\u5386\u53f2"))),a.createElement("div",{className:(0,O.AK)(!r&&"mt-[20px]")},r?a.createElement(re,{touch:_,defaultIdx:f,isPhone:!0},i.mobile):a.createElement("div",{className:(0,O.AK)("mt-[20px]",r&&"pt-[30px]")},a.createElement(ae,{list:y,pathname:w?.current.href,isHistory:r,selectOpt:k,onSync:e=>{N(e.label==k?.label?null:e)}})))),a.createElement("div",{className:"bg-black opacity-60 flex-1",onClick:()=>Z(!1)})))),a.createElement("div",{className:(0,l.Z)(J.docItemContainer,"mmd:pr-[38px] transition-all duration-700 doc-content"),style:{width:u?"66vw":"100vw"}},a.createElement("article",null,a.createElement(ne,{lng:c}),a.createElement(L,null),a.createElement(K,null,a.createElement(s,null)),a.createElement(D,null)),a.createElement(g,null),!r&&a.createElement("div",{className:"flex justify-between w-full py-[50px] pr-[24px] mmd:pb-[21px] mmd:pr-[33px] bg-white mmd:ml-[0px] mmd:pl-[16px] doc-pagination relative z-[50]"},a.createElement("div",{className:"flex-1"},w?.prev&&a.createElement("a",{href:w.prev?.href,className:"inline-block w-full mr-[17px] border border-[#e0e0e0] flex-1 rounded-lg px-[20px] py-[6px] cursor-pointer hover:opacity-75"},a.createElement("div",{className:"text-[#8c8c8c] text-[14px]"},"\u4e0a\u4e00\u9875"),a.createElement("div",{className:"text-[#2f73dc] mmd:text-sm flex justify-start"},"<<",a.createElement("div",{className:"line-clamp-1"},w.prev.label)))),a.createElement("div",{className:"flex-1"},w?.next&&a.createElement("a",{href:w.next?.href,className:"inline-block w-full ml-[17px] border border-[#e0e0e0] flex-1 rounded-lg text-right px-[20px] py-[6px] cursor-pointer hover:opacity-75"},a.createElement("div",{className:"text-[#8c8c8c] text-[14px]"},"\u4e0b\u4e00\u9875"),a.createElement("div",{className:"text-[#2f73dc] mmd:text-sm flex justify-end"},a.createElement("div",{className:"line-clamp-1"},w.next.label),">>"))))),i.mobile&&!r&&a.createElement(a.Fragment,null,a.createElement("div",{className:"lg:hidden fixed z-50 top-[98px]",style:{right:u?"63px":"10px"},onClick:()=>h(!u)},a.createElement("img",{className:"w-[22px] h-[22px]",src:n(u?1077:9278).default})),a.createElement("div",{className:(0,l.Z)("flex-shrink-0 text-[15px] w-[120px] pl-[10px] flex flex-col items-center pt-[100px] text-[#5e5e5e] bg-white transition-all duration-700 text-left",u?"fixed right-[10px] rounded-lg":"absolute right-[-100%]")},x.map(((e,t)=>a.createElement("a",{key:e.id,className:(0,l.Z)("inline-block w-full hover:text-[#2f73dc] cursor-pointer mr-[6px]",e.level>2?"ml-4 text-[12px] line-clamp-1 mb-[22px]":"line-clamp-2",2===e[t+1]?.level?"mb-[22px]":"mb-[12px]"),onClick:()=>(e=>{const t=document.getElementById(e.id);document.querySelector(".doc-layout-wrapper").scrollTo(0,t?.offsetTop-10)})(e)},e.value))))))),i.desktop&&!r&&!m&&a.createElement("div",{className:"max-w-[200px] lg:bg-white lg:mt-10 lg:rounded-lg doc-toc fixed right-[50px]"},i.desktop))}function se(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=-1!==e.location.pathname.indexOf("/history"),l=-1!==e.location.pathname?.indexOf("/docs/en")?"en":"zh";return a.createElement(i,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(m,null),a.createElement(ce,{content:e.content,isHistory:n,location:e.location,lng:l})))}}}]);