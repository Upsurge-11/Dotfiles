"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[708],{69376:(e,i,t)=>{t.d(i,{n:()=>A});t(57658);var s=t(67294),r=t(94184),a=t.n(r),n=t(51615),l=t(32667),c=t(34142),d=t(47921),o=t(96206),u=t(24697),m=t(32648),x=t(85951);var h=t(32626),p=t(43031),j=t(30005),g=t(21691);const y="main-topBar-contentArea",f="muYk5XIwKmqR9iNibk_f",v="queue-tabBar-headerItem",k="queue-tabBar-moreButton",b="queue-tabBar-moreButtonActive",C="yxf_6IsQEmHjijEBUMTP",E="queue-tabBar-active",N="queue-tabBar-headerItemLink",w="queue-tabBar-header",R="queue-tabBar-chevron";var T=t(85893);const U=({items:e,activeItemId:i})=>(0,T.jsx)(j.v,{children:e.map((e=>e.disabled?(0,T.jsx)(g.s,{disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick,children:e.title},e.uri):(0,T.jsx)(g.s,{role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===i,className:C,activeClassName:E,onClick:e.handleClick,children:e.title},e.uri)))}),A=(0,s.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:r}){const j=(0,s.useRef)(null),[g,C]=(0,s.useState)([]),[A,I]=(0,s.useState)(0),[S,O]=(0,s.useState)([]),D=function(){const[e,i]=(0,s.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,s.useContext)(m.VX),r=(0,u.y1)((e=>{e?.width&&i(e.width)}),250);return(0,x.y)({refOrElement:t,observeOnly:"width",onResize:r}),e}()??1/0,{pathname:M}=(0,n.TH)(),P=i.find((e=>e.to===M));return(0,s.useEffect)((()=>{j.current&&I(j.current.clientWidth)}),[D]),(0,s.useEffect)((()=>{if(!j.current)return;const e=Array.from(j.current.children).map((e=>e.clientWidth));C(e)}),[i]),(0,s.useEffect)((()=>{if(!j.current)return;if(g.slice(0,-1).reduce(((e,i)=>e+i),0)<=A)return void O([]);const e=g.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;g.forEach(((e,s)=>{A>=t+e?t+=e:i.push(s)})),O(i)}),[A,g]),(0,T.jsx)("nav",{className:a()(r,y),"aria-label":t,children:(0,T.jsxs)("ul",{className:e?f:w,ref:j,children:[i.filter(((e,i)=>!S.includes(i))).map((e=>(e?.render??(e=>e))((0,T.jsx)("li",{className:v,children:e.disabled?(0,T.jsx)("div",{className:N,children:(0,T.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,T.jsx)(p.O,{exact:!0,className:N,activeClassName:E,to:e.to,onClick:e.handleClick,children:(0,T.jsx)(l.D,{variant:"mestoBold",children:e.title})})},e.to)))),S.length||0===g.length?(0,T.jsx)("li",{className:v,children:(0,T.jsx)(h.xV,{renderInline:!0,menu:(0,T.jsx)(U,{items:i.filter(((e,i)=>S.includes(i))),activeItemId:P?.itemId}),children:(e,i,t)=>(0,T.jsxs)("button",{className:a()(k,{[b]:P}),type:"button",onClick:i,ref:t,children:[(0,T.jsx)(l.D,{variant:"mestoBold",children:P?P.title:o.ag.get("more")}),e?(0,T.jsx)(c.U,{iconSize:16,className:R,"aria-hidden":"true"}):(0,T.jsx)(d.i,{iconSize:16,className:R,"aria-hidden":"true"})]})})}):null]})})}))},17340:(e,i,t)=>{t.d(i,{I:()=>x});var s=t(96335),r=t(67294),a=t(96206),n=t(69376),l=t(28638),c=t(63138),d=t(68960);const o="queue-tabBar-nav";var u=t(85893);const m=()=>{const e=(0,d.Y)(),i=(0,r.useCallback)((e=>(0,u.jsx)(c.v,{placement:"bottomEnd",arrow:"topStart",title:a.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})),[]),t=(0,r.useMemo)((()=>[{title:a.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:a.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[e,i]);return(0,u.jsx)(l.w,{children:(0,u.jsx)(n.n,{className:o,links:t})})},x=({children:e})=>{const i=(0,s.nF)();return(0,u.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,u.jsx)(m,{})]})}},96878:(e,i,t)=>{t.r(i),t.d(i,{default:()=>F});var s=t(96335),r=t(65732),a=t(32667),n=t(96206),l=t(22141),c=t(88992),d=t(85893);const o=()=>(0,d.jsxs)("div",{className:c.Z.emptyContainer,children:[(0,d.jsx)(l.Y,{iconSize:64,"aria-hidden":"true"}),(0,d.jsx)(a.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:c.Z.emptyContainerTitle,children:n.ag.get("history.empty-title")}),(0,d.jsx)("p",{children:n.ag.get("history.empty-description")})]});var u=t(67294),m=t(13153),x=t(47991),h=t(42922),p=t(89952),j=t(42781),g=t(38470),y=t(49961),f=t(69518),v=t.n(f),k=t(25988),b=t(26921),C=t(88214),E=t(21509),N=t(94107),w=t(82760),R=t(18261),T=t(85576),U=t(87257),A=t(57978),I=t(19986),S=t(84242),O=t(84788),D=t(22345),M=t(43028);const P=u.memo((function({uri:e,name:i,duration_ms:t,index:s,imgUrl:r,artists:a,album:l,isExplicit:c,isMOGEFRestricted:o,type:u}){const{isActive:m,isPlaying:x,triggerPlay:p,togglePlay:g}=(0,S.n)({uri:e},{featureIdentifier:"history"}),y=u===j.p.TRACK,f=u===j.p.EPISODE,P=u===j.p.CHAPTER,_=(0,I._)(e),B=(0,M.k)(e),{badges:G,hasBadges:L}=(0,O.r)({downloadAvailability:_,isExplicit:c,isMOGEFRestricted:o}),Z=a?.map((e=>e.name)).join(n.ag.getSeparator())||"";let F;return f?F=(0,d.jsx)(k.k,{uri:e,contextUri:e,showUri:l.uri}):P?F=(0,d.jsx)(D.r,{uri:e,contextUri:e,showUri:l.uri}):y&&v().isLocalTrack(e)?F=(0,d.jsx)(b.N,{uri:e,contextUri:e}):y&&(F=(0,d.jsx)(C.$,{uri:e,contextUri:e,albumUri:l.uri,artists:a})),(0,d.jsx)(h.ZP,{value:"row",index:s,children:(0,d.jsx)(R._,{menu:F,children:(0,d.jsxs)(w.c,{uri:e,contextUri:e,index:s,ariaRowIndex:s,onTriggerPlay:()=>{p()},isActive:m,isPlayable:B,ageRestricted:o,dragMetadata:{name:i,createdBy:Z},children:[(0,d.jsxs)(E.vZ,{ariaColIndex:0,children:[(0,d.jsx)(E.VG,{uri:e,src:r,isPlaying:x,isActive:m,isLocked:!1,onClick:()=>{g()},isEpisode:v().isEpisode(e),playAriaLabel:n.ag.get("tracklist.a11y.play",i,Z)}),(0,d.jsxs)(E.vm,{children:[(0,d.jsx)(E.Wh,{titleText:i,children:i}),L&&(0,d.jsxs)(E.g3,{children:[G.download&&(0,d.jsx)(T.G,{size:16}),G.explicit&&(0,d.jsx)(U.N,{}),G.nineteen&&(0,d.jsx)(A.X,{className:N.Z.nineteen,size:16})]}),(0,d.jsx)(E.K9,{children:v().isTrack(e)?(0,d.jsx)(E.T6,{artists:a}):a[0]?.name??""})]})]}),(0,d.jsx)(E.UA,{ariaColIndex:2,children:(0,d.jsx)(E.BM,{nonInteractive:v().isLocalTrack(e),uri:l.uri,name:l.name,creatorUri:a?.[0]?.uri,children:l.name})}),(0,d.jsxs)(E.mU,{ariaColIndex:1,children:[!v().isLocalTrack(e)&&!P&&(0,d.jsx)(E.qS,{uri:e,type:u}),(0,d.jsx)(E.A$,{duration:t}),(0,d.jsx)(E.Zv,{menu:F,label:n.ag.get("more.label.track",i,Z)})]})]})})})}),((e,i)=>e.uri===i.uri)),_=u.memo((function({items:e}){const i=(0,u.useCallback)(((e,i)=>{const t=(0,y.X)(e.images??[],{desiredSize:40});return(0,p.G_)(e)?e.isLocal?(0,d.jsx)(P,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:j.p.TRACK},i+e.uri):(0,d.jsx)(P,{index:i,uri:(0,x.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.album,artists:e.artists,isExplicit:e.isExplicit??!1,isMOGEFRestricted:e.is19PlusOnly??!1,type:j.p.TRACK},i+e.uri):(0,p.iw)(e)?(0,d.jsx)(P,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:j.p.EPISODE},i+e.uri):(0,p.G7)(e)?(0,d.jsx)(P,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:t?.url||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:j.p.CHAPTER},i+e.uri):((0,p.k6)(e)||(0,p.RB)(e)||(0,g._)(e),(0,d.jsx)(m.hU,{height:`${m.dN}px`}))}),[]),t=(0,u.useMemo)((()=>[m.QD.TITLE,m.QD.ALBUM_OR_PODCAST,m.QD.DURATION]),[]),s=(0,u.useCallback)((e=>e.uri),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(h.ZP,{value:"play-history-tracklist",children:(0,d.jsx)(m.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:t,renderRow:i,resolveUri:s,tracks:e,nrTracks:e.length,rowPlaceholder:m.hU,limit:50})})})})),B="dt3fysZYdQ6hhWfpmjAu",G="n6LsTkKvpO88xeRyRTdw",L=()=>{const e=(0,s.U5)();return e&&e.items.length>0?(0,d.jsxs)("div",{className:B,children:[(0,d.jsx)(a.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:G,children:n.ag.get("view.recently-played")}),(0,d.jsx)(_,{items:e.items})]}):(0,d.jsx)(o,{})};var Z=t(17340);const F=()=>(0,s.nF)()?(0,d.jsx)(Z.I,{children:(0,d.jsx)(L,{})}):(0,d.jsx)(r.w,{to:"/"})},47991:(e,i,t)=>{t.d(i,{$:()=>s});const s=e=>e?.linked_from?.uri||e.uri},88992:(e,i,t)=>{t.d(i,{Z:()=>s});const s={emptyContainer:"gTvMl6pwfRD9PobMSB5x",emptyContainerTitle:"hNAQG0TAe2WFYyf_iZEB",findSomething:"Zhzrb2k9nQRActS2lp4U"}}}]);
//# sourceMappingURL=xpui-routes-play-history-page.js.map