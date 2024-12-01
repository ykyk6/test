"use strict";(self["webpackChunkcollection_02"]=self["webpackChunkcollection_02"]||[]).push([[411],{3276:function(e,a,n){var t=n(9269),s=n(6237),o=n(3856),l=n(3027),i=n(6146),r=n(64),u=n(4300);a["Z"]=(0,o.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:a,emit:n}){const o=(0,t.FN)(),c=(0,s.iH)(null);let d=0;const m=[];function p(a){const t=[],s="boolean"===typeof a?a:!0!==e.noErrorFocus,o=++d,l=(e,a)=>{n("validation-"+(!0===e?"success":"error"),a)};for(let n=0;n<m.length;n++){const a=m[n],o=a.validate();if("function"===typeof o.then)t.push(o.then((e=>({valid:e,comp:a})),(e=>({valid:!1,comp:a,err:e}))));else if(!0!==o){if(!1===e.greedy)return l(!1,a),!0===s&&"function"===typeof a.focus&&a.focus(),Promise.resolve(!1);t.push({valid:!1,comp:a})}}return 0===t.length?(l(!0),Promise.resolve(!0)):Promise.all(t).then((e=>{const a=e.filter((e=>!0!==e.valid));if(0===a.length)return o===d&&l(!0),!0;const{valid:n,comp:t,err:i}=a[0];return o===d&&(void 0!==i&&console.error(i),l(!1,t),!0===s&&!0!==n&&"function"===typeof t.focus&&t.focus()),!1}))}function _(){d++,m.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function f(a){void 0!==a&&(0,l.NS)(a);const t=d+1;p().then((s=>{t===d&&!0===s&&(void 0!==e.onSubmit?n("submit",a):void 0!==a&&void 0!==a.target&&"function"===typeof a.target.submit&&a.target.submit())}))}function v(a){void 0!==a&&(0,l.NS)(a),n("reset"),(0,t.Y3)((()=>{_(),!0===e.autofocus&&!0!==e.noResetFocus&&b()}))}function b(){(0,i.jd)((()=>{if(null===c.value)return;const e=c.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(c.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,t.JJ)(u.vh,{bindComponent(e){m.push(e)},unbindComponent(e){const a=m.indexOf(e);a>-1&&m.splice(a,1)}});let h=!1;return(0,t.se)((()=>{h=!0})),(0,t.dl)((()=>{!0===h&&!0===e.autofocus&&b()})),(0,t.bv)((()=>{!0===e.autofocus&&b()})),Object.assign(o.proxy,{validate:p,resetValidation:_,submit:f,reset:v,focus:b,getValidationComponents:()=>m}),()=>(0,t.h)("form",{class:"q-form",ref:c,onSubmit:f,onReset:v},(0,r.KR)(a.default))}})},9082:function(e,a,n){var t=n(9269),s=n(9171),o=n(3856),l=n(64);a["Z"]=(0,o.L)({name:"QTabPanel",props:s.vZ,setup(e,{slots:a}){return()=>(0,t.h)("div",{class:"q-tab-panel"},(0,l.KR)(a.default))}})},4810:function(e,a,n){var t=n(9269),s=n(6597),o=n(9171),l=n(3856),i=n(64);a["Z"]=(0,l.L)({name:"QTabPanels",props:{...o.t6,...s.S},emits:o.K6,setup(e,{slots:a}){const n=(0,t.FN)(),l=(0,s.Z)(e,n.proxy.$q),{updatePanelsList:r,getPanelContent:u,panelDirectives:c}=(0,o.ZP)(),d=(0,t.Fl)((()=>"q-tab-panels q-panel-parent"+(!0===l.value?" q-tab-panels--dark q-dark":"")));return()=>(r(a),(0,i.Jl)("div",{class:d.value},u(),"pan",e.swipeable,(()=>c.value)))}})},1319:function(e,a,n){n.r(a),n.d(a,{default:function(){return C}});var t=n(9269),s=n(3201);const o=e=>((0,t.dD)("data-v-a89c8e7e"),e=e(),(0,t.Cn)(),e),l=o((()=>(0,t._)("div",{class:"menu-bar-01 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)("Home"),(0,t._)("span",{class:"material-icons icon-show"}," home ")])],-1))),i=o((()=>(0,t._)("div",{class:"menu-bar-02 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)("Shopping"),(0,t._)("span",{class:"material-icons icon-show"}," store ")])],-1))),r=o((()=>(0,t._)("div",{class:"menu-bar-03 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)("Cart"),(0,t._)("span",{class:"material-icons icon-show"}," shopping_cart ")])],-1))),u=o((()=>(0,t._)("div",{class:"menu-bar-04 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)(" LikeProducts"),(0,t._)("span",{class:"material-icons icon-show"}," favorite ")])],-1))),c=o((()=>(0,t._)("div",{class:"menu-bar-05 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)(" OrderHistory"),(0,t._)("span",{class:"material-icons icon-show"}," summarize ")])],-1))),d=o((()=>(0,t._)("div",{class:"menu-bar-06 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)(" Profile"),(0,t._)("span",{class:"material-icons icon-show"}," manage_accounts ")])],-1))),m=o((()=>(0,t._)("div",{class:"menu-bar-07 menu-bar-common"},[(0,t._)("p",null,[(0,t.Uk)("Login"),(0,t._)("span",{class:"material-icons icon-show"}," login ")])],-1))),p=o((()=>(0,t._)("div",{class:"bar"},null,-1))),_=o((()=>(0,t._)("div",{class:"bar"},null,-1))),f=o((()=>(0,t._)("div",{class:"bar"},null,-1))),v=[p,_,f],b=o((()=>(0,t._)("div",null,"Content slide",-1)));function h(e,a,n,o,p,_){const f=(0,t.up)("swiper-slide"),h=(0,t.up)("swiper");return(0,t.wg)(),(0,t.j4)(h,{class:"swiper","slides-per-view":"auto","initial-slide":1,"resistance-ratio":0,onSwiper:e.setSwiperRef,onSlideChange:e.handleSlideChange},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"menu"},{default:(0,t.w5)((()=>[l,i,r,u,c,d,m])),_:1}),(0,t.Wm)(f,{class:"content",style:{background:"grey"}},{default:(0,t.w5)((()=>[(0,t._)("div",{class:(0,s.C_)(["menu-button",{opened:e.menuOpened}]),onClick:a[0]||(a[0]=(...a)=>e.toggleMenu&&e.toggleMenu(...a))},v,2),b])),_:1})])),_:1},8,["onSwiper","onSlideChange"])}var w=n(6237),g=n(952),y=(0,t.aZ)({components:{Swiper:g.tq,SwiperSlide:g.o5},setup(){let e=null;const a=a=>{e=a},n=(0,w.iH)(!1),t=()=>{n.value?e?.slideNext():e?.slidePrev()},s=()=>{n.value=0===e?.activeIndex};return{menuOpened:n,toggleMenu:t,setSwiperRef:a,handleSlideChange:s}}}),S=n(7617);const k=(0,S.Z)(y,[["render",h],["__scopeId","data-v-a89c8e7e"]]);var C=k},5716:function(e,a,n){n.r(a),n.d(a,{default:function(){return X}});var t=n(9269);const s={class:"member-container"},o={class:"cotain"},l=(0,t._)("div",{class:"member_title"},[(0,t._)("p",null,"プロフィール")],-1),i={class:"member_wrapper"},r={class:"member_content"};function u(e,a,n,u,c,d){const m=(0,t.up)("q-tab"),p=(0,t.up)("q-tabs"),_=(0,t.up)("q-separator"),f=(0,t.up)("profile-mange"),v=(0,t.up)("q-tab-panel"),b=(0,t.up)("q-tab-panels"),h=(0,t.up)("q-card");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",s,[(0,t._)("div",o,[l,(0,t._)("div",i,[(0,t._)("div",r,[(0,t.Wm)(h,{class:"member_content_card"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{modelValue:e.member_manage_tab,"onUpdate:modelValue":a[0]||(a[0]=a=>e.member_manage_tab=a),dense:"",class:"text-black",align:"justify","narrow-indicator":""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"profilemanage",label:"プロフィール変更"})])),_:1},8,["modelValue"]),(0,t.Wm)(_),(0,t.Wm)(b,{modelValue:e.member_manage_tab,"onUpdate:modelValue":a[1]||(a[1]=a=>e.member_manage_tab=a),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{name:"profilemanage"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{userData:e.user_data},null,8,["userData"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])])])])])}var c=n(6237),d=n(5102);const m=e=>((0,t.dD)("data-v-664ee0a9"),e=e(),(0,t.Cn)(),e),p={class:"profile-container"},_={class:"contain"},f={class:"profiledata_wrapper"},v={class:"profiledata_name"},b=m((()=>(0,t._)("div",{class:"name_title"},"名前",-1))),h={class:"name_input"},w={class:"profiledata_birthday"},g=m((()=>(0,t._)("div",{class:"birthday_title"},"*誕生日",-1))),y={class:"birthday_input"},S={class:"profiledata_mail"},k=m((()=>(0,t._)("div",{class:"mail_title"},"*メールアドレス",-1))),C={class:"mail_input"},V={class:"profiledata_password"},Z=m((()=>(0,t._)("div",{class:"password_title"},"*パスワード",-1))),q={class:"password_input"},P={class:"profiledata_sure"};function W(e,a,n,s,o,l){const i=(0,t.up)("q-input"),r=(0,t.up)("q-icon"),u=(0,t.up)("q-btn"),c=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("div",_,[(0,t._)("div",f,[(0,t.Wm)(c,{method:"post",onSubmit:(0,d.iM)(e.onSubmit,["prevent"])},{default:(0,t.w5)((()=>[(0,t._)("div",v,[b,(0,t._)("div",h,[(0,t.Wm)(i,{filled:"",modelValue:e.user_data.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.user_data.name=a),class:"name_input_area"},null,8,["modelValue"])])]),(0,t._)("div",w,[g,(0,t._)("div",y,[(0,t.Wm)(i,{filled:"",modelValue:e.user_data.birthday,"onUpdate:modelValue":a[1]||(a[1]=a=>e.user_data.birthday=a),class:"birthday_input_area",readonly:""},null,8,["modelValue"])])]),(0,t._)("div",S,[k,(0,t._)("div",C,[(0,t.Wm)(i,{filled:"",modelValue:e.user_data.mail,"onUpdate:modelValue":a[2]||(a[2]=a=>e.user_data.mail=a),class:"mail_input_area"},null,8,["modelValue"])])]),(0,t._)("div",V,[Z,(0,t._)("div",q,[(0,t.Wm)(i,{filled:"",modelValue:e.user_data.password,"onUpdate:modelValue":a[4]||(a[4]=a=>e.user_data.password=a),type:e.isPwd?"password":"text",class:"password_input_area"},{append:(0,t.w5)((()=>[(0,t.Wm)(r,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[3]||(a[3]=a=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"])])]),(0,t._)("div",P,[(0,t.Wm)(u,{color:"black",label:"確認する",class:"profiledata_sure_button",type:"submit"})])])),_:1},8,["onSubmit"])])])])}var Q=n(6957),U=n(6085),x=n.n(U),B=n(8177),F=n.n(B),R=(0,t.aZ)({setup(){const e=(0,Q.oR)(),a=e.state.LoginModule.userInfo.mail;let n=(0,c.qj)({_id:"",name:"",birthday:"",mail:"",password:"",like_items:[]});(0,t.bv)((()=>{x().get("https://collection01.herokuapp.com/users/").then((e=>{if(e.data.success){const t=e.data.result.filter((e=>e.mail===a)),s=JSON.stringify(t),o=JSON.parse(s);n._id=o[0]._id,n.name=o[0].name,n.birthday=o[0].birthday,n.mail=o[0].mail,n.password=o[0].password,n.like_items=o[0].like}}))}));const s=()=>{F().fire({icon:"warning",title:"登録をもう一度確認する",showCancelButton:!0,confirmButtonColor:"#000",cancelButtonColor:"#d33",confirmButtonText:"はい",cancelButtonText:"キャンセル"}).then((e=>{e.isConfirmed&&x().patch("https://collection01.herokuapp.com/users/"+n._id,n).then((e=>{e.data.success&&(console.log(n),F().fire({icon:"success",title:"登録しました"}))}))}))};return{user_data:n,isPwd:(0,c.iH)(!0),onSubmit:s}}}),I=n(7617),L=n(3276),T=n(6931),D=n(4633),H=n(4686),M=n(1410),N=n.n(M);const O=(0,I.Z)(R,[["render",W],["__scopeId","data-v-664ee0a9"]]);var j=O;N()(R,"components",{QForm:L.Z,QInput:T.Z,QIcon:D.Z,QBtn:H.Z});var J=(0,t.aZ)({components:{ProfileMange:j},setup(){const e=(0,c.iH)("profilemanage"),a=(0,Q.oR)(),n=a.state.LoginModule.userInfo.mail;let s=(0,c.iH)("");return(0,t.bv)((()=>{x().get("https://collection01.herokuapp.com/users/").then((e=>{if(e.data.success){const a=e.data.result.find((e=>e.mail===n));s.value=a}}))})),{member_manage_tab:e,user_data:s}}}),E=n(8055),K=n(3554),A=n(5264),z=n(4492),Y=n(4810),$=n(9082);const G=(0,I.Z)(J,[["render",u]]);var X=G;N()(J,"components",{QCard:E.Z,QTabs:K.Z,QTab:A.Z,QSeparator:z.Z,QTabPanels:Y.Z,QTabPanel:$.Z})}}]);
//# sourceMappingURL=member.29cc0c84.js.map