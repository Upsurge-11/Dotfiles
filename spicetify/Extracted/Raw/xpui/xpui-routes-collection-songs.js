"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7553],{40771:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67892),i=a(85893);const n=({href:e,children:t,...a})=>(0,i.jsx)(s.Z,{to:e,...a,children:t})},30731:(e,t,a)=>{a.d(t,{u:()=>p});var s=a(67294),i=a(94184),n=a.n(i),l=a(32667),r=a(34011),o=a(6330),c=a(40771);const d="FvfvGU3jvHRskUU9v9_8",u="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",g="GXxVAveNFStY3pBI_NO4",h="eHcXC2s97InYP7rMNT0H";var x=a(85893);const p=(0,s.memo)((function(e){const{children:t,message:a,title:s,linkTitle:i,linkTo:p,onClick:f,renderInline:y=!1}=e,{isXSOnly:k,isSMOnly:b}=(0,o.e)(),D=k||b;return(0,x.jsxs)("section",{className:n()(d,{[u]:y}),children:[t,(0,x.jsx)(l.D,{as:"h1",variant:D?"cello":"alto",className:g,children:s}),(0,x.jsx)(l.D,{variant:D?"mesto":"ballad",className:h,children:a}),i&&(p||f)&&(0,x.jsx)(r.D,{colorSet:"invertedLight",className:m,href:p,onClick:f,component:c.Z,children:i})]})}))},8294:(e,t,a)=>{a.d(t,{p:()=>y});var s=a(67294),i=a(96206),n=a(1838),l=a(61728),r=a(22423),o=a(13153),c=a(78462),d=a(42922),u=a(45342),m=a(15852),g=a(49961),h=a(39412),x=a(85893);const p=new Set(c.P0),f=new Set([]),y=s.memo((function({nrTracks:e,collectionUri:t,columns:a,initialItems:y,uri:k,sortable:b=!0,scrollToUri:D,usePlayContextItem:S,outerDomRef:C,spec:j}){const v=(0,s.useContext)(u.H),w=(0,s.useRef)(null),{filter:T}=(0,s.useContext)(r.fo),F=(0,s.useRef)((()=>{})),[P,I]=(0,s.useState)([]),{sortState:E,setSortState:L}=(0,s.useContext)(c.Gb),A=(0,m.$P)(),R=(0,s.useCallback)(((e,t)=>{e===o.QD.ADDED_AT?L({column:o.QD.ADDED_AT,order:E.order===o.kn.ASC?o.kn.DESC:o.kn.ASC}):L((0,n.VK)(e,E)),j&&A.logInteraction(j.columnHeaderFactory({identifier:e,position:t||0}).hitSort())}),[A,L,E,j]);(0,s.useEffect)((()=>{w.current&&D&&w.current.scrollToItem({uri:D})}),[D]);const U=(0,s.useCallback)((e=>{const t=e.map((e=>e.uri));F.current(),v?.remove(...t)}),[v]),_=(0,s.useCallback)(((e,t)=>{F.current=t,e.length>1?I(e):U(e)}),[U]),O=(0,s.useCallback)((async(e,t)=>{const a=await(v?.getTracks({offset:e,limit:t,uri:k,sort:(0,h.w)(E),filter:T})),s=a?.totalLength??0;return{items:a?.items??[],totalLength:s}}),[T,v,E,k]),M=(0,s.useCallback)(((e,a)=>{const s=(0,g.X)(e.album?.images,{desiredSize:40,desiredLabel:"small"});return(0,x.jsx)(o.dx,{index:a,contextUri:t,uri:e.uri,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,albumOrShow:e.album,isExplicit:e.isExplicit,isCollaborative:!1,isMixedMedia:!1,isPaywalled:!1,isUserSubscribed:!1,isLocal:e.isLocal,addedBy:[],dateAdded:e.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:e.is19PlusOnly,type:e.type,imgUrl:s?.url||"",onMove:()=>{},onInsert:()=>{},usePlayContextItem:S,allowedDropTypes:[],isDisliked:!1,playlistName:i.ag.get("sidebar.liked_songs")},a+e.uri)}),[t,S]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.ZP,{value:"liked-songs-tracklist",children:(0,x.jsx)(o.Pv,{ariaLabel:i.ag.get("sidebar.liked_songs"),hasHeaderRow:!0,columns:a,sortableColumns:v?.getCapabilities().canSortTracksAndEpisodes&&b?p:f,sortState:E,onSort:R,renderRow:M,resolveUri:e=>e.uri,resolveUid:e=>e.uri,onRemove:_,nrTracks:e,fetchTracks:O,limit:50,canFetchAllTracks:v?.getCapabilities().canFetchAllTracks,outerRef:w,outerDomRef:C,tracks:y},t)}),(0,x.jsx)(l.h,{title:i.ag.get("remove_from_your_liked_songs"),isOpen:P.length>0,tracks:P,onClose:e=>{e.stopPropagation(),I([])},onRemove:U})]})}))},69003:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var s=a(67294),i=a(86706),n=a(51615),l=a(69518),r=a.n(l),o=a(98983),c=a(93994),d=a(96206),u=a(18270),m=a(43683),g=a(70369),h=a(30731),x=a(6158),p=a(55120),f=a(77834),y=a(22423),k=a(13153),b=a(78462),D=a(61412),S=a(69846),C=a(23232),j=a(61901),v=a(88247),w=a(45342),T=a(26482),F=a(84242),P=a(15852),I=a(53538),E=a(29255),L=a(12498),A=a(88767),R=a(62830),U=a(6489),_=a(76391),O=a(8688),M=a(98620);var N=a(39412),B=a(98816),Q=a(98562),G=a(35213),X=a(85893);const z=s.memo((({tracklistDomRef:e})=>{const{spec:t,logger:a}=(0,P.fU)(B.createDesktopSearchBarEventFactory,{}),i=(0,s.useCallback)((()=>{a.logInteraction(t.filterFieldFactory().keyStrokeFilter())}),[a,t]),n=(0,s.useCallback)((()=>{a.logInteraction(t.filterFieldFactory().hitClearFilter())}),[a,t]),l=(0,s.useCallback)((()=>{a.logInteraction(t.sortButtonFactory().hitSort())}),[a,t]);return(0,X.jsxs)("div",{className:f.Z.searchBoxContainer,children:[(0,X.jsx)(s.Suspense,{fallback:null,children:(0,X.jsx)(Q.K,{placeholder:d.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:e,onFilter:i,onClear:n})}),(0,X.jsx)(G.l,{columns:b.P0,onSort:l})]})}));var H=a(8294);const Z=s.lazy((()=>Promise.all([a.e(1814),a.e(2716),a.e(682)]).then(a.bind(a,82716)))),K=[k.QD.INDEX,k.QD.TITLE,k.QD.ALBUM,k.QD.ADDED_AT,k.QD.DURATION],V="your_library",$=({data:e,canFilter:t,canSort:a})=>{const{uri:i,name:l,totalLength:r}=e.metadata,S=(0,s.useRef)(null),w=r>0,E=r>0,A=(0,j.Y5)("#5038a0"),{filter:R}=(0,s.useContext)(y.fo),{sortState:U,setSortState:_}=(0,s.useContext)(b.Gb),{spec:O,logger:M}=(0,P.fU)(c.createDesktopLikedSongsEventFactory,{data:{uri:i}}),B=s.useMemo((()=>O.headerFactory()),[O]),Q=s.useMemo((()=>O.tracklistFactory()),[O]);(0,s.useEffect)((()=>{null===U.column&&_({column:k.QD.ADDED_AT,order:k.kn.DESC})}),[U,_]);const G=(0,n.k6)(),Z="POP"!==G.action?new URLSearchParams(G.location.search).get("uri"):null,{isPlaying:$,togglePlay:W,usePlayContextItem:Y,isActive:q}=(0,F.n)((0,v.I)(i,(0,N.w)(U),R),{featureIdentifier:V,referrerIdentifier:"your_library"}),J=()=>{const e=(0,I.aK)({isPlaying:$,isActive:q,spec:O.actionBarFactory().playButtonFactory(),logger:M,uri:i});W({loggingParams:e})},ee=(0,s.useCallback)(((e,t)=>{const a=O.actionBarFactory().downloadButtonFactory();t===T.mc.ADD?M.logInteraction(a.hitDownload({itemToDownload:i})):t===T.mc.REMOVE?M.logInteraction(a.hitRemoveDownload({itemToRemoveFromDownloads:i})):t===T.mc.NO_PERMISSION&&M.logInteraction(a.hitUiReveal())}),[M,O,i]);return(0,X.jsxs)("section",{role:"presentation",className:f.Z.playlist,"data-testid":"playlist-page",children:[(0,X.jsx)(g.$,{children:d.ag.get("playlist.page-title",l)}),(0,X.jsx)(C.s,{metadata:e.metadata,isPlaying:$,togglePlay:J,backgroundColor:A,specLikedSongs:B}),(0,X.jsx)(u.o,{backgroundColor:A,children:(0,X.jsxs)(u.F,{children:[E?(0,X.jsx)(p.$,{onClick:J,isPlaying:$,size:"lg",uri:i,ariaPauseLabel:d.ag.get("playlist.a11y.pause",l),ariaPlayLabel:d.ag.get("playlist.a11y.play",l)}):null,e.metadata.totalLength>0&&(0,X.jsx)(L.v,{uri:i,renderEnabled:()=>(0,X.jsx)(D.v,{uri:i})}),(0,X.jsx)(m.o,{uri:i,canDownload:w,isFollowing:!0,onFollow:()=>{},size:m.q.md,onClick:ee}),t&&a&&(0,X.jsx)(P.Nh,{spec:O.actionBarFactory(),children:(0,X.jsx)(z,{tracklistDomRef:S})})]})}),(0,X.jsx)("div",{className:"contentSpacing",children:r>0?(0,X.jsx)(s.Suspense,{fallback:(0,X.jsx)(x.h,{hasError:!1,errorMessage:d.ag.get("error.request-collection-tracks-failure")}),children:(0,X.jsx)(P.Nh,{spec:Q,children:(0,X.jsx)(H.p,{nrTracks:r,columns:K,collectionUri:i,scrollToUri:Z,usePlayContextItem:Y,outerDomRef:S,spec:Q,initialItems:e.contents.items})})}):(0,X.jsx)(h.u,{message:d.ag.get("collection.empty-page.songs-subtitle"),title:d.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:d.ag.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,X.jsx)(o.F,{"aria-hidden":"true"})})})]})},W=s.memo((function({user:e,uri:t}){const{filter:a}=(0,s.useContext)(y.fo),{sortState:n}=(0,s.useContext)(b.Gb),l=function(e,t,a){const i=(0,s.useContext)(w.H),n=(0,A.useQueryClient)(),l=(0,R.jP)((()=>["useLikedSongs",e,a]),[e,a]),{data:r}=(0,A.useQuery)(l(),(()=>i.getTracks(a)),{cacheTime:18e5,keepPreviousData:!0,refetchOnWindowFocus:!1}),o=(0,s.useCallback)((()=>{n.invalidateQueries(l())}),[n,l]);(0,_.b)(U.EW.UPDATE,o);const c=(0,M.I2)(t.id);return c&&r?{metadata:{uri:e,name:c.name,images:c.images,totalLength:r?.totalLength,unfilteredTotalLength:r.unfilteredTotalLength,owner:(0,O.V3)(t)},contents:r}:null}(t,e,{offset:0,limit:25,sort:(0,N.w)(n),filter:a}),r=(0,s.useContext)(w.H).getCapabilities(),o=(0,i.v9)(E.n5),{isEnhanced:c}=(0,S.U)(`spotify:user:${o}:collection`);if(l){const e=(0,X.jsx)($,{data:l,canFilter:r.canFilterTracksAndEpisodes&&l.metadata.unfilteredTotalLength>0,canSort:r.canSortTracksAndEpisodes&&l.metadata.unfilteredTotalLength>0});return(0,X.jsx)(L.v,{uri:l.metadata.uri,renderEnabled:()=>c?(0,X.jsx)(s.Suspense,{fallback:null,children:(0,X.jsx)(b.kz,{uri:l.metadata.uri,children:(0,X.jsx)(Z,{metadata:{...l.metadata,collaborators:{count:1,items:[{isOwner:!0,user:l.metadata.owner,tracksAdded:l.metadata.totalLength}]}},capabilities:r,featureIdentifier:V})})}):e,renderDisabled:()=>e})}return(0,X.jsx)(x.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.playlist"),loadOffline:r.canModifyOffline})})),Y=()=>{const{user:e}=(0,i.v9)(E.Gg);if(null===e)return null;const t=r().collectionURI(e.id).toURI();return(0,X.jsx)(b.kz,{uri:t,children:(0,X.jsx)(y.hz,{uri:t,children:(0,X.jsx)(W,{uri:t,user:e})})})}},23232:(e,t,a)=>{a.d(t,{s:()=>s.s});var s=a(40786)},6330:(e,t,a)=>{a.d(t,{e:()=>g});var s=a(62142);const i="(min-width: 0px)",n="(min-width: 0px) and (max-width: 767px)",l="(min-width: 768px)",r="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",d="(min-width: 1280px)",u="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)",g=()=>({isXS:(0,s.a)(i),isXSOnly:(0,s.a)(n),isSM:(0,s.a)(l),isSMOnly:(0,s.a)(r),isMD:(0,s.a)(o),isMDOnly:(0,s.a)(c),isLG:(0,s.a)(d),isLGOnly:(0,s.a)(u),isXL:(0,s.a)(m)})}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map