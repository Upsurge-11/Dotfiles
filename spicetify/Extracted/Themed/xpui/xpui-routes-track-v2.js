"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[4179],{29464:(e,i,a)=>{a.d(i,{E:()=>r});var t=a(42922),n=a(34722),s=a(13768),l=a(85893);const r=({album:e,index:i,artistURI:a})=>(0,l.jsx)(t.ZP,{value:"card",index:i,children:(0,l.jsx)(s.i,{index:i,latest:!1,showType:!0,...(0,n.B$)(e,a,e.name)})})},57060:(e,i,a)=>{a.d(i,{R:()=>o});var t=a(96206),n=a(42922),s=a(7073),l=a(34722),r=a(19480),d=a(29464),c=a(85893);const o=({albums:e,artistName:i,artistId:a,artistUri:o,className:m})=>e?(0,c.jsx)(n.ZP,{value:"shelf/albums",children:(0,c.jsx)(r.P,{total:e.totalCount,title:t.ag.get("rich-page.popular-albums-by-artist",{artist:i}),seeAllUri:`${(0,l.GJ)(a)}:discography:${s.VZ.Album.toLowerCase()}`,seeAllLabel:t.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:m,children:(0,l.Hr)(e.items).map(((e,i)=>(0,c.jsx)(d.E,{album:e,index:i,artistURI:o},e.uri)))})}):null},70880:(e,i,a)=>{a.d(i,{j:()=>m});var t=a(67294),n=a(69518),s=a.n(n),l=a(32667),r=a(96206),d=a(84242),c=a(39119),o=a(85893);const m=({artistName:e,artistUri:i,headerClassName:a,rowClassName:n,topTracks:m,topTracksTransformer:u,uri:k})=>{const S=s().from(k),h=(0,t.useMemo)((()=>m?.items.map((e=>u(e,k)))),[m?.items,u,k]),{usePlayContextItem:p}=(0,d.n)({uri:i},{featureIdentifier:"artist"});return h&&h.length>0?(0,o.jsxs)("div",{className:n,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(l.D,{variant:"mesto",children:r.ag.get("rich-page.popular-tracks")}),(0,o.jsx)(l.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:a,children:e})]}),(0,o.jsx)(c.k,{nrTracks:h.length,initialTracks:h,usePlayContextItem:p,parentEntityId:"track"===S?.type?S?.getBase62Id():""})]}):null}},55095:(e,i,a)=>{a.d(i,{y:()=>o});var t=a(96206),n=a(42922),s=a(7073),l=a(34722),r=a(19480),d=a(29464),c=a(85893);const o=({artistId:e,artistName:i,artistUri:a,className:o,singles:m})=>m?(0,c.jsx)(n.ZP,{value:"shelf/singles-and-eps",children:(0,c.jsx)(r.P,{total:m.totalCount,title:t.ag.get("rich-page.popular-singles-and-eps-by-artist",{artist:i}),seeAllUri:`${(0,l.GJ)(e)}:discography:${s.VZ.Single.toLowerCase()}`,seeAllLabel:t.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:o,children:(0,l.Hr)(m.items).map(((e,i)=>(0,c.jsx)(d.E,{album:e,index:i,artistURI:a},e.uri)))})}):null},2438:(e,i,a)=>{a.d(i,{L:()=>t.L});var t=a(3702)},98759:(e,i,a)=>{a.d(i,{MF:()=>u,Pm:()=>o,X7:()=>d,bC:()=>l,pf:()=>r,pj:()=>m,qo:()=>s,uW:()=>c});a(57658);var t=a(7073),n=a(23384);const s=e=>`spotify:artist:${e}`,l=e=>({artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:e.coverArt?.sources??[],name:e.name,uri:e.uri,sharingInfo:e.sharingInfo??null}),r=e=>({artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:e.coverArt?.sources||[],name:e.name,uri:e.uri,year:e.date?.year,type:e.type,sharingInfo:e.sharingInfo??null}),d=({track:{uri:e,name:i,playcount:a,duration:{totalMilliseconds:n},contentRating:s,artists:{items:l},albumOfTrack:r,playability:{playable:d}}},c)=>({uri:e,contextUri:c,totalMilliseconds:n,name:i,contentRating:s?.label||t.KS.None,isPlayable:d,playcount:parseInt(a||"0",10),artists:l.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:r?.coverArt?.sources?.length?r?.coverArt.sources[0].url:"",albumUri:r?.uri||""}),c=e=>e?e.reduce(((e,i)=>(e.push(i.releases.items[0]),e)),[]):[],o=e=>e?e.reduce(((e,i)=>(e.push(i.releases.items[0]),e)),[]):[],m=e=>e.map((e=>"Playlist"!==e.data?.__typename?null:{uri:e.data.uri,name:e.data.name,description:e.data.description??"",images:e.data.images?.items?.[0]?.sources??[],authorName:"User"===e.data.ownerV2.data.__typename?e.data.ownerV2.data.name:null})).filter(n.K),u=e=>{if(!("itemV2"in e)&&!("item"in e))return{};return e.itemV2&&"data"in e.itemV2?e.itemV2.data:e.item}},72484:(e,i,a)=>{a.r(i),a.d(i,{default:()=>xi});var t=a(67294),n=a(86706),s=a(51615),l=a(69518),r=a.n(l),d=a(30373),c=a(96206),o=a(18270),m=a(43683),u=a(48690),k=a(88214),S=a(60289),h=a(59482),p=a(72907),g=a(6158),v=a(55120),N=a(53538),y=a(94223),I=a(32626),x=a(85522),E=a(48817),j=a(4383),_=a(12902);let A;!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}(A||(A={}));const b=(0,_.ZP)(((e,i)=>{switch(i.type){case"LYRICS_LOADING":e[i.uri]={status:A.LOADING};break;case"LYRICS_LOADED":e[i.uri]={status:A.LOADED,data:{lyrics:{...i.response.lyrics}}};break;case"LYRICS_ERROR":e[i.uri]={status:A.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${i.type}`)}}));var f=a(87961),Z=a(30951);var L=a(85893);const C={status:A.LOADING},F={status:A.UNAVAILABLE},T=t.createContext(void 0),R=({children:e,initialState:i={}})=>{const a=t.useReducer(b,i);return(0,L.jsx)(T.Provider,{value:a,children:e})},w=(e,i)=>{const a=t.useContext(T);if(void 0===a)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!r().isTrack(e)||i)return F;const[n,s]=a,l=n[e];return l||(s({type:"LYRICS_LOADING",uri:e}),(async e=>{const i=r().from(e);return(await Z.Zz.getSEOTrackLyrics(f.b.getInstance(),i.getBase62Id())).body})(e).then((i=>{s({type:"LYRICS_LOADED",uri:e,response:i})})).catch((()=>{s({type:"LYRICS_ERROR",uri:e})})),C)};var D=a(84242),U=a(55773),O=a(15852),B=a(16526),P=a(52419),V=a(70369),M=a(26492),$=a(45623),G=a(82789),z=a(87577),K=a(57481),W=a(8247),Y=a(8271);function Q(){const e=(0,z.W6)(W.Um,{loadingValue:null}),i=(0,n.v9)((e=>e.session?.user?.id)),a=(0,Y.s4)();(0,t.useEffect)((()=>{if(!e)return;const t={category:"multivisit_exposure_event",action:"render",label:"dwp-multivisit",os:(0,K.y)(),variant:e};a.send(i?(0,G.x)(t):(0,$.k)(t))}),[a,e,i])}var H=a(80322),q=a(4236),J=a(98773),X=a(29255),ee=a(72627),ie=a(98984);const ae={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichTrackArtists"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistsFields"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"message"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistsFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtists"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"firstArtist"},name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richRelatedArtistsFields"}}]}}]}}]}},{kind:"Field",alias:{kind:"Name",value:"otherArtists"},name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistItem"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richRelatedArtistsFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"relatedArtists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackArtistPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richArtistFields"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richArtistFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Artist"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackArtistAlbums"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackArtistAlbums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}},{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackNumber"}}]}}]}}]}}]}}]}}]},te=e=>{const i=(a={uri:e},(0,ie.a)(ae,a,t));var a,t;if(!i.loading&&"Track"===i.data?.trackUnion?.__typename)return i.data.trackUnion};var ne=a(32667);const se="UDuv2dzJuOEimwKzf_Ht",le="crU3_phk5OplHUp2b_iW",re=({padded:e})=>(0,L.jsx)(ne.D,{as:"p",dir:"auto",variant:"finale",className:`${se} ${e?le:""}`,children:"Lyrics powered by Musixmatch."}),de=({uri:e})=>{const{status:i}=w(e);return i!==A.LOADED?null:(0,L.jsx)(re,{})};var ce=a(67892),oe=a(57060),me=a(70880),ue=a(42922),ke=a(7073),Se=a(34722),he=a(19480),pe=a(29464);const ge=({artistName:e,artistId:i,artistUri:a,className:t,releases:n})=>n?(0,L.jsx)(ue.ZP,{value:"shelf/releases",children:(0,L.jsx)(he.P,{total:10,title:c.ag.get("rich-page.popular-releases-by-artist",{artist:e}),seeAllUri:`${(0,Se.GJ)(i)}:discography:${ke.VZ.Album.toLowerCase()}`,seeAllLabel:c.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:t,children:n.items.map(((e,i)=>(0,L.jsx)(pe.E,{album:e,index:i,artistURI:a},e.uri)))})}):null;var ve=a(55095);a(57658);const Ne="o2TlnuNKxRO5RnB9BpHB",ye="q0Ke_aAvTcc4dO4wCHQt",Ie="UlKUfS_GcROZmofuafOW",xe="I5LORTI1u3A6VoUvRCBf",Ee="TS85Qkpioa31wR0p4kzT",je="yL1DLXBc05CR_ACv_NhA",_e="k5kRkUyoz9znqg_SGOVQ";var Ae=a(26375),be=a(48528),fe=a(94184),Ze=a.n(fe),Le=a(37761),Ce=a(42781),Fe=a(7469);let Te;!function(e){e.SMALL="small",e.LARGE="large"}(Te||(Te={}));const Re=({art:e,disabled:i=!1,LinkComponent:a,name:t,size:n=Te.SMALL,type:l,uri:d})=>{const o=e?[e]:[],m=n===Te.SMALL?(0,be.R)(l):function(e){switch(e){case Ae.albumType.SINGLE:return c.ag.get("track-page.from-the-single");case Ae.albumType.EP:return c.ag.get("track-page.from-the-ep");case Ae.albumType.COMPILATION:return c.ag.get("track-page.from-the-compilation");case Ae.albumType.ALBUM:default:return c.ag.get("track-page.from-the-album")}}(l),u=(0,s.k6)();return(0,L.jsxs)("div",{className:Ze()(Ne,{[Ie]:n===Te.SMALL,[ye]:i}),children:[(0,L.jsx)("div",{className:xe,children:(0,L.jsx)(Le.O,{images:o,size:Fe.m$.SIZE_80,title:t,type:Ce.p.ALBUM})}),(0,L.jsxs)("div",{className:Ee,children:[(0,L.jsx)(ne.D,{variant:n===Te.SMALL?"minuetBold":"finale",children:m}),(0,L.jsx)(a,{to:d,children:(0,L.jsx)(ne.D,{as:"div",className:je,variant:"balladBold",dir:"auto",children:t})})]}),(0,L.jsx)("div",{onClick:()=>{u.push(r().from(d).toURLPath(!0))},className:_e})]})};var we=a(98759),De=a(2438),Ue=a(75987);const Oe="oTRKhYD0MZlNPm66W3Tw",Be="sc95MwPalcHwYGZ7j3xN",Pe="zrCZCfYv4zZiB1HYv9i8",Ve="RnlxIDmWcYTbbwNSJNjA",Me="SHkxfN1vy0wpRMP1hK7I",$e="COXBS6zLyyxKNYuEAzjZ",Ge="sR5IpdOUvoUGYKlC9Dk1",ze="FHMr3WxshoYjZ7jd3YwI",Ke="Evcwc4KM2tf9xrLbfB8B",We=({richTrack:e})=>{const i=(0,s.k6)(),a=(0,t.useCallback)((()=>new URLSearchParams(i.location.search.slice(1)).get("highlight")||""),[i.location.search])(),{tracklistRef:n}=(0,Ue.W)(),l=e.albumOfTrack,r=(0,H.Y)(l?.uri||""),{usePlayContextItem:d}=(0,D.n)({uri:r},{featureIdentifier:"album"}),c=(0,t.useMemo)((()=>({items:[],total_count:0})),[]);return l?(0,L.jsx)("div",{ref:n,className:Ge,children:(0,L.jsx)(De.L,{ariaLabel:l.name,nrTracks:l.tracks.totalCount,albumUri:l.uri,highlightUri:a,discs:c,usePlayContextItem:d,hasHeaderRow:!1,parentEntityId:e.id})}):null},Ye=(0,t.memo)((function({track:e}){const i=(0,q.k)(),a=e.albumOfTrack,t=a?.playability?.playable,n=e.artistsWithRoles.items[0]?.artist,s=n?.discography?.topTracks,l=n?.discography?.popularReleasesAlbums,r=n?.discography?.albums,d=n?.discography?.singles,c={artistId:n?.id,artistName:n?.profile?.name,artistUri:n?.uri};return(0,L.jsxs)("div",{"data-testid":"rich-track",children:[(0,L.jsx)(me.j,{artistName:n?.profile?.name,artistUri:n?.uri,headerClassName:Ke,rowClassName:Me,topTracks:s,topTracksTransformer:we.X7,uri:e.uri}),(0,L.jsx)(ge,{className:ze,releases:l,...c}),(0,L.jsx)(oe.R,{albums:r,className:ze,...c}),(0,L.jsx)(ve.y,{className:ze,singles:d,...c}),a&&(0,L.jsx)(Re,{art:a.coverArt?.sources[0],disabled:!t||!i,LinkComponent:ce.Z,name:a.name,type:a.type,size:Te.LARGE,uri:a.uri}),(0,L.jsx)(We,{richTrack:e})]})})),Qe=Ye;var He=a(86025),qe=a(34011);const Je="QhDsXG1Gmo7XmQWLggAO",Xe="bZgWQj7UxvK8GYKWDA7N",ei="AW61P3tnW5cKJCWtbhFh",ii=({buttonText:e,onSecondaryButtonClick:i,onPrimaryButtonClick:a,secondaryButtonText:t,text:n})=>(0,L.jsxs)("div",{className:Je,"data-testid":"static-activation-trigger",children:[(0,L.jsx)(ne.D,{className:Xe,variant:"cello",children:n}),(0,L.jsxs)("div",{className:ei,children:[(0,L.jsx)(He.o,{onClick:i,semanticColor:"textBase",children:t}),(0,L.jsx)(qe.D,{onClick:a,colorSet:"invertedLight",children:e})]})]}),ai="T1nqQ4HEh3heHy4RCCKa",ti="L8zjshPVgUMXyZR4FtOk",ni="YMn1FWcFmOz9osBrNvhF",si="Inbyq3TnvKDOJtcKFTDQ",li="lWk5se4WETUOJwaEb8D6",ri="i8DyQbWCmDV_8N5XGJQT",di="t5WPFlGTY6GCd9UOFfLu",ci="AGQ3wRyMVK1odq860qnT";let oi;!function(e){e.SMALL="small",e.LARGE="large"}(oi||(oi={}));const mi=e=>{const{disabled:i,images:a,LinkComponent:t,name:n,size:l,uri:d}=e,o=l===oi.SMALL,m=(0,s.k6)();return(0,L.jsxs)("div",{className:Ze()(ti,{[ni]:i}),"data-testid":"track-artist-link-card",children:[(0,L.jsx)(Le.O,{shape:Le.K.CIRCLE,images:a,size:Fe.m$.SIZE_80,title:n,type:Ce.p.ARTIST}),(0,L.jsxs)("div",{className:Ze()(li,{[ri]:o}),children:[(0,L.jsx)(ne.D,{variant:"minuetBold",className:si,children:c.ag.get("card.tag.artist")}),(0,L.jsx)(t,{to:d,children:(0,L.jsx)(ne.D,{as:"div",dir:"ltr",className:di,variant:"balladBold",children:n})})]}),(0,L.jsx)("div",{onClick:()=>{m.push(r().from(d).toURLPath(!0))},className:ci})]})},ui=({size:e=oi.LARGE,disabled:i=!1,...a})=>(0,L.jsx)("div",{className:ai,children:a.artists.map((t=>(0,L.jsx)(mi,{name:t.name,uri:t.uri,images:t.images,size:e,LinkComponent:a.LinkComponent,disabled:i},t.id)))});var ki=a(42286);const Si="Q3OKWaFrTVTIRZyG05Gh",hi="cFQh4aLbQzp0aYzbWwjY",pi="NAaJboGa8qckhNNQTKTn",gi=({lines:e=[]})=>0===e.length?null:(0,L.jsxs)("div",{className:Si,children:[(0,L.jsx)(ne.D,{as:"h2",variant:"canon",semanticColor:"textBase",className:hi,children:c.ag.get("web-player.lyrics.title")}),e.map((({words:e},i)=>(0,L.jsx)(ne.D,{as:"p",dir:"auto",variant:"ballad",className:pi,children:e},`lyrics-seo-line-${i}`)))]}),vi=({uri:e})=>{const{status:i,data:a}=w(e);return i!==A.LOADED?null:(0,L.jsx)(gi,{lines:a?.lyrics.lines})},Ni=e=>{const{albumArtists:i,columnCount:a,uri:s}=e,l=a-2,r={"--column-count":a,"--left-column-end":l-2,"--right-column-start":l},{isAnonymous:d}=(0,n.v9)(X.Gg),o=(0,q.k)(),{data:m,status:u}=w(s,d),k=!!m&&u!==A.UNAVAILABLE||d;return(0,L.jsxs)(t.Suspense,{fallback:null,children:[k&&(0,L.jsx)("div",{className:Ze()(Pe,{[Ve]:a>5}),style:{...r},children:d?(0,L.jsx)(ii,{buttonText:c.ag.get("sign_up"),secondaryButtonText:c.ag.get("login"),text:c.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:ki.L6,onSecondaryButtonClick:ki.h$}):(0,L.jsx)(vi,{uri:s})}),(0,L.jsx)("div",{className:Ze()(Oe,{[Be]:a>5&&k}),style:{...r},children:(0,L.jsx)(ui,{artists:i,LinkComponent:ce.Z,disabled:!o})})]})},yi=e=>e.items.map((e=>({name:e.artist.profile.name,images:(e.artist.visuals.avatarImage?.sources||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.artist.uri,id:e.artist.uri}))),Ii=({uri:e,track:i,richTrackArtists:a})=>{const l=(0,M.o)(),r=(0,q.k)(),{isAnonymous:g}=(0,n.v9)(X.Gg),_=(0,n.v9)(J.mE),A=(0,n.v9)(X.Kd),b=(0,s.TH)(),f=(0,P.LI)(A,_),{artistsWithRoles:Z,albumOfTrack:C,duration:F,name:T}=i,w=C?.coverArt,$=C?.copyright.items,G=C?.courtesyLine,z=C?.date?.isoString,K=w?.extractedColors?.colorRaw.hex,W=(w?.sources||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),Y=(0,U.vI)(B.k.RichTrackPageV2p1,b)&&a,ee=yi(Z),ie=Y?ee.concat(yi(a.otherArtists)):ee,{spec:ae,logger:te}=(0,O.fU)(d.createDesktopTrackEventFactory,{data:{uri:e}}),ne=i.playability.playable,se=(0,H.Y)(e),{togglePlay:le,isPlaying:re,isActive:ce}=(0,D.n)({uri:se},{featureIdentifier:"track"}),[oe,me]=(0,j.Z)(e),ue=(0,t.useCallback)((async()=>{l({targetUri:e,intent:oe?"unsave":"save",type:"click"});const i=ae.actionBarFactory().saveButtonFactory();te.logInteraction(oe?i.hitRemoveLike({itemNoLongerLiked:e}):i.hitLike({itemToBeLiked:e}));try{await me(!oe)}catch{}}),[l,e,oe,ae,te,me]);Q();const ke=(0,t.useCallback)((()=>((e,i,a)=>{const t=i.map((e=>e.name)).join(c.ag.getSeparator()),n=`${e} - song and lyrics by ${t}`,s=c.ag.get("i18n.meta.track-lyrics.title.raw",e,t);return a?s:n})(i.name,ie,f)),[ie,f,i.name]),Se=(0,t.useCallback)(((e,i)=>{te.logInteraction(ae.headerFactory().artistLinkFactory({position:i.position,uri:i.creator.uri}).hitUiNavigate({destination:i.creator.uri}))}),[te,ae]),he=(0,t.useCallback)((()=>{const i=(0,N.aK)({isPlaying:re,isActive:ce,spec:ae.actionBarFactory().playButtonFactory(),logger:te,uri:e});le({loggingParams:i})}),[ce,re,te,ae,le,e]),pe=(0,t.useCallback)((()=>{te.logInteraction(ae.actionBarFactory().contextButtonFactory().hitUiReveal())}),[te,ae]);return(0,L.jsxs)("section",{"data-testid":"track-page",children:[(0,L.jsx)(V.$,{children:ke()}),(0,L.jsxs)(S.gF,{backgroundColor:K,children:[(0,L.jsxs)(h.W,{children:[(0,L.jsx)(v.$,{size:"md",onClick:he,disabled:!ne,isPlaying:re,uri:e}),(0,L.jsx)(p.i,{text:T,dragUri:e,dragLabel:T})]}),(0,L.jsx)(I._P,{menu:(0,L.jsx)(k.$,{uri:e}),children:(0,L.jsx)(S.Oz,{dragUri:e,images:W,name:T,placeholderType:"album"})}),(0,L.jsxs)(S.sP,{children:[(0,L.jsx)(S.dy,{small:!0,uppercase:!0,children:c.ag.get("song")}),(0,L.jsx)(I._P,{menu:(0,L.jsx)(k.$,{uri:e}),children:(0,L.jsx)(S.xd,{dragUri:e,dragLabel:T,children:T})}),(0,L.jsx)(S.QS,{creators:ie,releaseDate:z,durationMilliseconds:F.totalMilliseconds,onCreatorClick:Se,isTrack:!0})]})]}),(0,L.jsx)(o.o,{backgroundColor:K,children:(0,L.jsxs)(o.F,{children:[(0,L.jsx)(S.rn,{children:(0,L.jsx)(v.$,{onClick:he,isPlaying:re,disabled:!ne,size:"lg",uri:e})}),(0,L.jsx)(S.rn,{children:(0,L.jsx)(y.HS,{isAdded:!!oe,onClick:ue,disabled:!r,size:y.qE.md})}),(0,L.jsx)(m.o,{uri:e,isFollowing:!!oe,onFollow:ue,size:m.q.md}),(0,L.jsx)(I.yj,{menu:(0,L.jsx)(k.$,{uri:e}),onShow:pe,children:(0,L.jsx)(u.z,{label:c.ag.get("more.label.context",T)})})]})}),(0,L.jsxs)(R,{children:[(0,L.jsxs)("div",{className:"contentSpacing",children:[(0,L.jsx)("div",{className:Me,children:(0,L.jsx)(E.T,{render:({columnCount:i})=>(0,L.jsx)(Ni,{albumArtists:ie,columnCount:i,uri:e})})}),(0,L.jsx)(Qe,{track:i})]}),(0,L.jsx)("div",{className:"contentSpacing",children:(0,L.jsxs)("div",{className:$e,children:[(0,L.jsx)(x.k,{copyrights:$||[],courtesyLine:G}),!g&&(0,L.jsx)(de,{uri:e})]})})]})]})},xi=(0,t.memo)((function(){const{trackId:e}=(0,s.UO)(),i=r().trackURI(e).toURI(),a=(0,ee.QN)({uri:i}),t=te(i);return a.loading||"Track"!==a.data?.trackUnion?.__typename?(0,L.jsx)(g.h,{hasError:null!==a.error,errorMessage:c.ag.get("track-page.error")}):(0,L.jsx)(Ii,{uri:i,track:a.data.trackUnion,richTrackArtists:t})}))},75987:(e,i,a)=>{a.d(i,{W:()=>n});var t=a(97650);function n(){const{ref:e,inView:i}=(0,t.YD)({initialInView:!1}),{ref:a,inView:n}=(0,t.YD)({initialInView:!1});return{titleRef:e,tracklistRef:a,displayTopBar:!i&&n}}},85522:(e,i,a)=>{a.d(i,{k:()=>l});var t=a(32667);const n="rTMkDBDp47Eo12ZEQv4U";var s=a(85893);const l=({copyrights:e,courtesyLine:i})=>{const a=(e||[]).map(((e,i)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let n;return n="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:`${n} ${a}`},i)}));return i&&a.unshift((0,s.jsx)(t.D,{as:"p",variant:"finale",dir:"auto",children:i},a.length)),(0,s.jsx)("div",{className:n,children:a})}},37761:(e,i,a)=>{a.d(i,{O:()=>x,K:()=>I});var t=a(67294),n=a(94184),s=a.n(n),l=a(89104),r=a(7469);const d="g3kBhX1E4EYEC2NFhhxG",c="O5_0cReFdHe81E0xFAD1",o="H71KtIrytVayf_dFofu7",m="SBpny8HrUTBzSjk7Vtk1",u="CxurIfvXVb_TqGF4q8Yf",k="OadpZJiOaGfX6Qp4j6n5",S="iJp40IxKg6emF6KYJ414",h="vreceNX3ABcxyddeS83B",p="Ozitxbqs1vcOukDz3GDw",g="AeEoI6ueagbJtaHl2cRd";var v=a(49343),N=a(85893);const y=({title:e,type:i,className:a})=>(0,N.jsx)("div",{"aria-label":e,className:s()(p,a),children:(0,N.jsx)(v.t,{type:i,className:g})});let I;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(I||(I={}));const x=(0,t.memo)((function({loadingMode:e="lazy",type:i,title:a,images:t=[],shape:n=I.SQUARE,size:p=r.m$.SIZE_56,className:g,onContextMenu:v=(()=>{}),onTouchStart:x=(()=>{}),onTouchEnd:E=(()=>{})}){const j=function(e=[]){const i=e.filter((e=>Boolean(e.width))),a=i.filter((e=>e.url&&e.width&&e.width>=r.eM[r.m$.SIZE_56])).sort(((e,i)=>e.width-i.width));return a.length?a:i}(t),_=j.length>0?j[0].url:"",A=j.map((({url:e,width:i})=>`${e} ${i/2}w, ${e} ${i}w`)).join(", "),b=()=>({[d]:r.pj.includes(p),[c]:r.wL.includes(p),[o]:r.VZ.includes(p),[m]:r.B_.includes(p)});return(0,N.jsx)("div",{className:s()(h,g),onContextMenu:v,onTouchStart:x,onTouchEnd:E,style:{width:`${r.eM[p]}px`,height:`${r.eM[p]}px`},children:(0,N.jsx)(l.E,{loading:e,src:_,alt:a,ariaHidden:!0,className:s()(S,{[k]:n===I.CIRCLE,[u]:n===I.SQUARE,...b()}),srcSet:A||void 0,testid:"entity-image",children:(0,N.jsx)(y,{title:a,type:i,className:s()({[k]:n===I.CIRCLE,[u]:n===I.SQUARE,...b()})})})})}))},7469:(e,i,a)=>{let t;a.d(i,{B_:()=>d,VZ:()=>r,eM:()=>n,m$:()=>t,pj:()=>s,wL:()=>l}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(t||(t={}));const n={[t.SIZE_48]:48,[t.SIZE_56]:56,[t.SIZE_64]:64,[t.SIZE_72]:72,[t.SIZE_80]:80,[t.SIZE_96]:96,[t.SIZE_104]:104,[t.SIZE_112]:112,[t.SIZE_120]:120,[t.SIZE_128]:128,[t.SIZE_136]:136,[t.SIZE_144]:144,[t.SIZE_152]:152,[t.SIZE_160]:160,[t.SIZE_168]:168,[t.SIZE_176]:176,[t.SIZE_184]:184,[t.SIZE_200]:200,[t.SIZE_232]:232},s=[t.SIZE_48,t.SIZE_56,t.SIZE_64],l=[t.SIZE_72,t.SIZE_80,t.SIZE_96,t.SIZE_104,t.SIZE_112,t.SIZE_120,t.SIZE_128],r=[t.SIZE_136,t.SIZE_144,t.SIZE_152,t.SIZE_160,t.SIZE_168,t.SIZE_176],d=[t.SIZE_184,t.SIZE_200,t.SIZE_232]}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map