"use strict";(self["webpackChunktypesense_dashboard"]=self["webpackChunktypesense_dashboard"]||[]).push([[951],{24951:(e,l,t)=>{t.r(l),t.d(l,{default:()=>B});var a=t(83673),o=t(62323);const n=(0,a.Uk)(" Typesense Dashboard"),r=(0,a.Uk)("logout");function u(e,l,t,u,i,c){const d=(0,a.up)("q-btn"),s=(0,a.up)("q-toolbar-title"),m=(0,a.up)("q-toolbar"),w=(0,a.up)("q-header"),f=(0,a.up)("nav-menu"),p=(0,a.up)("q-drawer"),_=(0,a.up)("q-banner"),b=(0,a.up)("router-view"),W=(0,a.up)("q-page-container"),k=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(k,{view:"hHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[n])),_:1}),(0,a.Wm)(d,{onClick:l[0]||(l[0]=l=>e.$q.dark.toggle()),flat:"",dense:"",icon:"dark_mode",title:"Toggle Dark Mode Test Only"}),(0,a.Wm)(d,{onClick:e.logout,flat:"",dense:""},{default:(0,a.w5)((()=>[r])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(p,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[1]||(l[1]=l=>e.leftDrawerOpen=l),"show-if-above":"",side:"left",width:250,class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(f)])),_:1},8,["modelValue"]),(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[e.$store.state.node.error?((0,a.wg)(),(0,a.j4)(_,{key:0,"inline-actions":"",class:"text-white bg-red fixed-top z-max"},{action:(0,a.w5)((()=>[(0,a.Wm)(d,{flat:"",color:"white",label:"Dismiss",onClick:l[2]||(l[2]=l=>e.dismiss())})])),default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.$store.state.node.error)+" ",1)])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(b)])),_:1})])),_:1})}const i=(0,a.Uk)(" Server Status "),c=(0,a.Uk)("Collections"),d=(0,a.Uk)(" Aliases "),s=(0,a.Uk)(" Api Keys "),m=(0,a.Uk)(" Document "),w=(0,a.Uk)(" Search "),f=(0,a.Uk)(" Schema "),p=(0,a.Uk)(" Synonyms "),_=(0,a.Uk)(" Curations ");function b(e,l,t,o,n,r){const u=(0,a.up)("q-icon"),b=(0,a.up)("q-item-section"),W=(0,a.up)("q-item"),k=(0,a.up)("q-item-label"),v=(0,a.up)("q-separator"),h=(0,a.up)("q-select"),g=(0,a.up)("q-list"),y=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(g,null,{default:(0,a.w5)((()=>{var t,o,n,r,g;return[(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:"/",exact:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"dns"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[i])),_:1})])),_:1})),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:"/collections",exact:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"library_books"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[c])),_:1})])),_:1})])),_:1})),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:"/aliases",exact:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"link"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[d])),_:1})])),_:1})),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:"/apikeys",exact:""},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"vpn_key"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[s])),_:1})])),_:1})),[[y]]),(0,a.Wm)(v,{spaced:""}),(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{borderless:"",modelValue:e.currentCollection,"onUpdate:modelValue":l[0]||(l[0]=l=>e.currentCollection=l),options:e.$store.state.node.data.collections,label:"Collection","option-label":"name",color:"white","label-color":"white",dark:""},null,8,["modelValue","options"])])),_:1})])),_:1}),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:`/collection/${null===(t=e.currentCollection)||void 0===t?void 0:t.name}/document`,exact:"",disable:!e.currentCollection},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"description"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[m])),_:1})])),_:1},8,["to","disable"])),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:`/collection/${null===(o=e.currentCollection)||void 0===o?void 0:o.name}/search`,exact:"",disable:!e.currentCollection},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"search"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[w])),_:1})])),_:1},8,["to","disable"])),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:`/collection/${null===(n=e.currentCollection)||void 0===n?void 0:n.name}/schema`,exact:"",disable:!e.currentCollection},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"rule"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[f])),_:1})])),_:1},8,["to","disable"])),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:`/collection/${null===(r=e.currentCollection)||void 0===r?void 0:r.name}/synonyms`,exact:"",disable:!e.currentCollection},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"sync_alt"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[p])),_:1})])),_:1},8,["to","disable"])),[[y]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(W,{clickable:"",to:`/collection/${null===(g=e.currentCollection)||void 0===g?void 0:g.name}/curations`,exact:"",disable:!e.currentCollection},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"low_priority"})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[_])),_:1})])),_:1},8,["to","disable"])),[[y]])]})),_:1})}const W=(0,a.aZ)({name:"NavMenu",data(){return{model:"",options:["abc","def"]}},computed:{currentCollection:{get(){return this.$store.state.node.currentCollection},set(e){this.$store.dispatch("node/loadCurrentCollection",e)}}}});var k=t(74260),v=t(27011),h=t(83414),g=t(52035),y=t(24554),C=t(2350),Z=t(65869),q=t(68516),Q=t(46489),U=t(7518),x=t.n(U);const $=(0,k.Z)(W,[["render",b],["__scopeId","data-v-27d441f4"]]),j=$;x()(W,"components",{QList:v.Z,QItem:h.Z,QItemSection:g.Z,QIcon:y.Z,QItemLabel:C.Z,QSeparator:Z.Z,QSelect:q.Z}),x()(W,"directives",{Ripple:Q.Z});const D=(0,a.aZ)({name:"MainLayout",components:{NavMenu:j},data(){return{leftDrawerOpen:!1}},methods:{toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){this.$store.dispatch("node/logout")},dismiss(){this.$store.commit("node/setError",null)}}});var S=t(19214),L=t(53812),O=t(39570),T=t(48240),V=t(13747),I=t(52901),M=t(72652),z=t(15607);const A=(0,k.Z)(D,[["render",u]]),B=A;x()(D,"components",{QLayout:S.Z,QHeader:L.Z,QToolbar:O.Z,QBtn:T.Z,QToolbarTitle:V.Z,QDrawer:I.Z,QPageContainer:M.Z,QBanner:z.Z})}}]);