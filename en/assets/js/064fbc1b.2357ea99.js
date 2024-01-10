"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[167],{4477:(e,t,a)=>{a.d(t,{E:()=>o,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},9075:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ee});var n=a(7294),l=a(6010),r=a(1944),s=a(902);const o=n.createContext(null);function c(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function i(){const e=(0,n.useContext)(o);if(null===e)throw new s.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:a}=i();return n.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var m=a(7462),u=a(5999),p=a(9960);function E(e){const{permalink:t,title:a,subLabel:r,isNext:s}=e;return n.createElement(p.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function b(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(E,(0,m.Z)({},t,{subLabel:n.createElement(u.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(E,(0,m.Z)({},a,{subLabel:n.createElement(u.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function g(){const{metadata:e}=i();return n.createElement(b,{previous:e.previous,next:e.next})}var h=a(2263),v=a(143),A=a(5281),f=a(373),w=a(4477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(u.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(u.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=C[e.versionMetadata.banner];return n.createElement(t,e)}function x(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(u.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(p.Z,{to:a,onClick:l},n.createElement(u.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function N(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,h.Z)(),{pluginId:s}=(0,v.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,f.J)(s),{latestDocSuggestion:c,latestVersionSuggestion:i}=(0,v.Jo)(s),d=c??(m=i).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,l.Z)(t,A.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(k,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(x,{versionLabel:i.label,to:d.path,onClick:()=>o(i.name)})))}function U(e){let{className:t}=e;const a=(0,w.E)();return a.banner?n.createElement(N,{className:t,versionMetadata:a}):null}function T(e){let{className:t}=e;const a=(0,w.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,A.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(u.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function I(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(u.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function L(e){let{lastUpdatedBy:t}=e;return n.createElement(u.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function B(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:A.k.common.lastUpdated},n.createElement(u.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(I,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(L,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const Z={iconEdit:"iconEdit_Z9Sw"};function y(e){let{className:t,...a}=e;return n.createElement("svg",(0,m.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function P(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:A.k.common.editThisPage},n.createElement(y,null),n.createElement(u.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const R={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function H(e){let{permalink:t,label:a,count:r}=e;return n.createElement(p.Z,{href:t,className:(0,l.Z)(R.tag,r?R.tagWithCount:R.tagRegular)},a,r&&n.createElement("span",null,r))}const F={tags:"tags_jXut",tag:"tag_QGVx"};function V(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(u.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(F.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:F.tag},n.createElement(H,{label:t,permalink:a}))}))))}const D={lastUpdated:"lastUpdated_vwxv"};function K(e){return n.createElement("div",{className:(0,l.Z)(A.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V,e)))}function q(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(A.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(P,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",D.lastUpdated)},(a||r)&&n.createElement(B,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function M(){const{metadata:e}=i(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:s,tags:o}=e,c=o.length>0,d=!!(t||a||s);return c||d?n.createElement("footer",{className:(0,l.Z)(A.k.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(K,{tags:o}),d&&n.createElement(q,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var G=a(7186),S=a(3743);const X={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,m.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",X.tocCollapsibleButton,!t&&X.tocCollapsibleButtonExpanded,a.className)}),n.createElement(u.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const W={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function z(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:o,toggleCollapsed:c}=(0,G.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(W.tocCollapsible,!o&&W.tocCollapsibleExpanded,a)},n.createElement(O,{collapsed:o,onClick:c}),n.createElement(G.z,{lazy:!0,className:W.tocCollapsibleContent,collapsed:o},n.createElement(S.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}const Y={tocMobile:"tocMobile_ITEo"};function J(){const{toc:e,frontMatter:t}=i();return n.createElement(z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,l.Z)(A.k.docs.docTocMobile,Y.tocMobile)})}var _=a(9407);function Q(){const{toc:e,frontMatter:t}=i();return n.createElement(_.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:A.k.docs.docTocDesktop})}var j=a(2503),$=a(1506);function ee(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=i();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,l.Z)(A.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},a)),n.createElement($.Z,null,t))}var te=a(2802),ae=a(8596),ne=a(4996);function le(e){return n.createElement("svg",(0,m.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const re={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,ne.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(p.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(le,{className:re.breadcrumbHomeIcon})))}const oe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ce(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(p.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function ie(e){let{children:t,active:a,index:r,addMicrodata:s}=e;return n.createElement("li",(0,m.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function de(){const e=(0,te.s1)(),t=(0,ae.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(A.k.docs.docBreadcrumbs,oe.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(se,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(ie,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ce,{href:t.href,isLast:l},t.label))})))):null}var me=a(7524);const ue={docItemContainer:"docItemContainer_dkDc",docItemCol:"docItemCol_NjgA"};function pe(e){let{content:t}=e;const r=t,s=function(){const{frontMatter:e,toc:t}=i(),a=(0,me.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(J,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(Q,null)}}(),[o,c]=(0,n.useState)(!1),{toc:d,frontMatter:m}=i();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!s.hidden&&ue.docItemCol)},n.createElement(U,null),n.createElement("div",{className:"flex"},n.createElement("div",{className:(0,l.Z)(ue.docItemContainer,"mmd:pr-[38px] transition-all duration-500"),style:{paddingRight:o?"0":void 0}},n.createElement("article",null,n.createElement(de,null),n.createElement(T,null),n.createElement(ee,null,n.createElement(r,null)),n.createElement(M,null)),n.createElement(g,null)),s.mobile&&n.createElement(n.Fragment,null,n.createElement("div",{className:"lg:hidden absolute z-50 top-[48px]",style:{right:o?"63px":"0"},onClick:()=>c(!o)},n.createElement("img",{className:"w-[22px] h-[22px]",src:a(o?1077:9278).default})),n.createElement("div",{className:(0,l.Z)("flex-shrink-0 text-[15px] w-[110px] pl-[10px] flex flex-col items-center pt-[100px] text-[#5e5e5e] transition-all duration-1000 text-left",o?"":"absolute right-[-100%]")},d.map(((e,t)=>n.createElement("a",{href:`#${e.id}`,key:e.id,className:(0,l.Z)("inline-block w-full hover:text-[#2f73dc]",e.level>2?"ml-4 text-[12px] line-clamp-1 mb-[22px]":"line-clamp-2",2===e[t+1]?.level?"mb-[22px]":"mb-[12px]")},e.value))))))),s.desktop&&n.createElement("div",{className:"col col--3"},s.desktop))}function Ee(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(c,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(d,null),n.createElement(pe,{content:e.content})))}},1077:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n="data:image/png;base64,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"},9278:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABCCAYAAAAPIWX+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFUlEQVR4nN2bT0gjVxzHvzNmEptE0xgSlZmEqGvXzdB1FrZs8aaFbXsY6FKosKWnPTal7W17aXssZU/rYfdQ6HkvLc0PpJWih5568E9BUYpgsfgnCW0QYyAaeD0kcdPoRs2890b3cw383vczPyZ57+U9hTEG0RDRIIA7AEYBvAYgCSAGIAQgKDzAKXhEFCUiFcAEgA8AvOv1eo1IJIKuri4Eg0EEAgF0dnbC4/HA4xES4Uy4jkpEBoA0gPuhUCiu6zqi0Si6u7t5DsMFLuJENATgC4/H81EikfDG4/FLKduII3EiCgL4UtO0z5PJpGdwcBBer5dTNLG0LU5E9xRFeZxIJIyRkZErI1znwuJE9AqAKb/f/+DWrVvo6ekREEs8FxInogSAn3Rdt27evOnaNzIPzp2ciCwA06lUqn9oaEhcIkmcS5yI3lBVdcayrFd1XRedSQrKWTM3InpdUZTfbt++Herr65MUSzxqqw9rE5Jpy7JeKmmghTgR+QHQyMiIYRiGxEhyaNXxx319fdbw8LC0MDI5VZyI7vn9/geWZUmOI48T4rVp6JRlWdA0zYVIcjit418ZhqFHIhHpYc5LPp/H06dPHdX43+84EV3TNO2zVCrlqKhI8vk8xsfHsbKygkqlgnQ63Vad5o4/TCaTHp/P5zyhABqlTdPE5ORk+8UYY2CMIZPJxKenp8vlcpldRnK5HDNNkwFgpmmyXC7nqF5jx9OJRMJ7GZeXzZ2em5tDNBp1VpRVu61lMplssVjk0x6O8O50nXrH3wqHw7FAIOC0OVwR0ukadfH3+/v7uRTkhUhp4Ln43d7eXm5FnSJaGgCQyWQGZ2ZmuLw3PBD1TjejArgTDof5Ps02kdLpGioAKxQKCSl+EWRKA1Xx68GgK39fHSNbGqiKx/1+v9BBWuGGNFAVj7g1N3dLGqiKB93YH3dTGqiKd8kWd1saOGOXVRSsYUtbURQ3IkAFsF+pVKQOGovFMDs7C9M0sby8jImJCeTzeakZVABF2eKA+/IqgH/K5bK0ARtxU14F8HepVJIy2Gm4Ja8C+LNYLAofqBVuyKsAFvf29oQOch5ky6sAfi8UCsIGuAjN8uPj4+LkWXXPbXN/f1/Iurcdstms8DV5fQLzSzabFfNk2yAWi2Fubg6maWJlZUVI5+viP+zs7HAt7JRoNCpUvi7+a6FQyB0cHHArzAOh8uz5PynfLi8vc3+XeCBiH65xkTK1ubl5eHh4yOeJckRI51mt46za9e/W1tYcP01R8Ox887L0m42NjYpbc/ezaO78s2fP2i/GGjrOql1/tLCwwKlHYsjlcuzJkyeOapw451Y7CrI2NjZ2qU9FOOXEDoxt20UAnywtLeHo6MiFSHI4devJtu0fS6XS90tLS5LjyKPVnlt6d3f3j/X1dWlhZPJCcdu2SwDeW11dzW9tbUmMJIeWu6y2bf8F4O3FxcW93d1dOYkkceb2sm3bi4yxu/Pz8/9ub2/LyCSFM49t1yGilKIoP9+4cSP+MhzUP7c48HJdzbiQOAAQkQ/Ao0AgkB4dHcVVneRcWLwOEd0DMGUYhp5KpXBZT0O+iLbFgePp7deapn06MDDgGRgYuDL3zxyJ1yGiawAeXqUrllzE6xBRHMDHAD4MhUKGruvo7e2F20dNToOreJ2Ga9STAN7p7Ow0wuHw8TXqYDAIn88HTdPQ0dHBffzzIES8mdrF+TdRvTh/HdWL81EA3XDp4vx/7jZQLgyfVe4AAAAASUVORK5CYII="}}]);