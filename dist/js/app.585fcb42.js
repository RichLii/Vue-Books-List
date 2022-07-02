(function(){var e={3509:function(e,t,a){"use strict";var l=a(9242),n=a(3396);function o(e,t){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(a)}var s=a(89);const i={},r=(0,s.Z)(i,[["render",o]]);var u=r,c=a(678),d=a(6265),v=a.n(d),p=a(7139),h=a(4870);const f={class:"card__mask flex-center relative h-[80%] overflow-hidden bg-yellow-300 p-4 lg:bg-gray-600"},w={class:"z-[10] text-center font-medium text-black"},g={class:"flex-center z-[20] h-[20%] w-full py-4"},m={class:"ml-2 leading-none"};var b={__name:"BookCard",props:{id:{type:Number,default:void 0},title:{type:String,default:void 0},author:{type:String,default:void 0},description:{type:String,default:void 0}},setup(e){const t=e,a=(0,h.Vh)(t,"title"),l=(0,h.Vh)(t,"author");return(e,o)=>{const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(s,{to:{name:"bookDetail",params:{bookId:t.id}},class:"card__container mx-2 mb-6 h-[30vh] w-[calc(50%-1rem)] bg-white shadow-lg active:scale-95"},{default:(0,n.w5)((()=>[(0,n._)("div",f,[(0,n._)("p",w,(0,p.zw)((0,h.SU)(a)),1)]),(0,n._)("div",g,[(0,n._)("p",m,(0,p.zw)((0,h.SU)(l)),1)])])),_:1},8,["to"])}}};const _=(0,s.Z)(b,[["__scopeId","data-v-4be33032"]]);var k=_;const y=e=>((0,n.dD)("data-v-427eec2a"),e=e(),(0,n.Cn)(),e),x={class:"sticky top-0 z-50 bg-white"},S={class:"container"},C={class:"relative flex h-14 items-center justify-center"},H={class:"text-2xl font-bold"},D=y((()=>(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-900",fill:"currentColor",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",stroke:"currentColor","stroke-width":"1",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1))),U=[D],V={key:1,class:"button button__edit"},z=y((()=>(0,n._)("path",{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"},null,-1))),j=[z],B=y((()=>(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",stroke:"currentColor","stroke-width":"1",viewBox:"0 0 16 16"},[(0,n._)("path",{"fill-rule":"evenodd",d:"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"})],-1)));var T={__name:"HeaderStyle",props:{text:{type:String,default:"header"},status:{type:String,default:void 0},showGoBack:{type:Boolean,default:!1}},setup(e){const t=e,a=(0,c.tv)(),l=(0,h.Vh)(t,"text"),o=(0,h.Vh)(t,"status"),s=(0,h.Vh)(t,"showGoBack"),i=()=>{a.go(-1)};return(e,t)=>{const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("div",S,[(0,n._)("div",C,[(0,n._)("h1",H,(0,p.zw)((0,h.SU)(l)),1),(0,h.SU)(s)?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"button left-5 hover:bg-gray-100",onClick:i},U)):(0,n.kq)("",!0),"edit"===(0,h.SU)(o)?((0,n.wg)(),(0,n.iD)("button",V,[((0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"h-5 w-5",viewBox:"0 0 16 16",style:{color:"#3b82f6"},onClick:t[0]||(t[0]=t=>e.$emit("startEdit",!0))},j))])):(0,n.kq)("",!0),"create"===(0,h.SU)(o)?((0,n.wg)(),(0,n.j4)(a,{key:2,to:{name:"create"},class:"button button__edit"},{default:(0,n.w5)((()=>[B])),_:1})):(0,n.kq)("",!0)])])])}}};const W=(0,s.Z)(T,[["__scopeId","data-v-427eec2a"]]);var O=W;const I={class:"min-h-screen bg-gray-100"},L={class:"container p-4"},Z={class:"flex-center flex-wrap"};var M={__name:"BookList",setup(e){const t=(0,h.iH)("");return(0,n.bv)((()=>{v().get("/books/").then((e=>{t.value=e.data.reverse()}))})),(e,a)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(O,{text:"書本列表",status:"create"}),(0,n._)("div",I,[(0,n._)("div",L,[(0,n._)("div",Z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(e=>((0,n.wg)(),(0,n.j4)(k,{key:e,id:e.id,title:e.title,author:e.author,description:e.description},null,8,["id","title","author","description"])))),128))])])])]))}};const q=M;var E=q;const F={key:0,class:"flex-center fixed top-0 z-[99] h-screen w-screen bg-black/10"},$={class:"flex-center h-24 w-48 flex-col bg-white text-black"},G={class:"mb-4 text-lg font-bold"},P={class:"flex"};var A={__name:"ToastMessage",props:{color:{type:String,default:"#60a5fa"},message:{type:String,default:"message!"},showCancel:{type:Boolean,default:!1},showToast:{type:Boolean,default:!1}},setup(e){const t=e,a=(0,h.Vh)(t,"showToast");return(0,n.YP)(a,((e,t)=>{document.documentElement.style.overflow=e?"hidden":"visible"})),(0,n.Ah)((()=>{document.documentElement.style.overflow="visible"})),(l,o)=>(0,h.SU)(a)?((0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("div",$,[(0,n._)("span",G,(0,p.zw)(t.message),1),(0,n._)("div",P,[e.showCancel?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"text-sm text-gray-800",onClick:o[0]||(o[0]=e=>l.$emit("cancel"))}," 取消 ")):(0,n.kq)("",!0),(0,n._)("button",{class:"ml-4 text-sm text-gray-800",onClick:o[1]||(o[1]=e=>l.$emit("handler"))}," 確定 ")])])])):(0,n.kq)("",!0)}};const Y=(0,s.Z)(A,[["__scopeId","data-v-c18447a6"]]);var K=Y;const N=e=>((0,n.dD)("data-v-6723a50d"),e=e(),(0,n.Cn)(),e),R={class:"input__container"},J=N((()=>(0,n._)("label",{class:"input__label"},"名稱",-1))),Q={key:0,class:"input__frame"},X={class:"input__container"},ee=N((()=>(0,n._)("label",{class:"input__label"},"作者",-1))),te={key:0,class:"input__frame"},ae={class:"relative bg-white"},le=N((()=>(0,n._)("label",{class:"flex h-16 items-center whitespace-nowrap pl-8 font-bold"},"備註",-1))),ne={class:"px-8 pb-8"},oe={key:0,class:"h-[30vh] w-full overflow-auto break-all"};var se={__name:"EditFrame",props:{editing:{type:Boolean,default:!1},title:{type:String,default:""},author:{type:String,default:""},description:{type:String,default:""},editingContent:{type:Object,default:void 0}},setup(e){const t=e,a=(0,h.Vh)(t,"title"),o=(0,h.Vh)(t,"author"),s=(0,h.Vh)(t,"editing"),i=(0,h.Vh)(t,"description"),r=(0,h.Vh)(t,"editingContent");return(e,t)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",R,[J,(0,h.SU)(s)?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,h.SU)(r).title=e),class:"input__frame input__outline"},null,512)),[[l.nr,(0,h.SU)(r).title]]):((0,n.wg)(),(0,n.iD)("div",Q,(0,p.zw)((0,h.SU)(a)),1))]),(0,n._)("div",X,[ee,(0,h.SU)(s)?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,h.SU)(r).author=e),class:"input__frame input__outline"},null,512)),[[l.nr,(0,h.SU)(r).author]]):((0,n.wg)(),(0,n.iD)("div",te,(0,p.zw)((0,h.SU)(o)),1))]),(0,n._)("div",ae,[le,(0,n._)("div",ne,[(0,h.SU)(s)?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:1,style:{resize:"none"},class:"input__outline h-[30vh] w-full","onUpdate:modelValue":t[2]||(t[2]=e=>(0,h.SU)(r).description=e)},null,512)),[[l.nr,(0,h.SU)(r).description]]):((0,n.wg)(),(0,n.iD)("div",oe,[(0,n._)("p",null,(0,p.zw)((0,h.SU)(i)),1)]))])])]))}};const ie=(0,s.Z)(se,[["__scopeId","data-v-6723a50d"]]);var re=ie,ue={__name:"ButtonFrame",props:{color:{type:String,default:"blue"},label:{type:String,default:"button"}},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("button",{class:"h-full w-full rounded-[99rem] text-xl font-bold text-white",style:(0,p.j5)({background:t.color}),onClick:a[0]||(a[0]=t=>e.$emit("handler"))},(0,p.zw)(t.label),5)]))}};const ce=ue;var de=ce;const ve={class:"flex min-h-screen items-center bg-gray-100"},pe={class:"container p-4"},he={key:0},fe={class:"mb-4 flex justify-between"},we={class:"flex w-full"};var ge={__name:"BookDetail",setup(e){const t=(0,h.iH)(""),a=(0,h.iH)(""),l=(0,h.iH)(""),o=(0,h.iH)(!1),s=(0,h.iH)(!1),i=(0,h.iH)(!1),r=(0,c.yj)(),u=(0,c.tv)(),d=(0,h.iH)(!1),p=(0,h.iH)(""),f=(0,h.iH)({title:"",author:"",description:""}),w=`/books/${r.params.bookId}`,g=()=>{d.value=!0,f.value.title=t.value,f.value.author=a.value,f.value.description=p.value},m=()=>{d.value=!1,f.value.title=t.value,f.value.author=a.value,f.value.description=p.value},b=()=>{v()["delete"](w).then((()=>{u.replace({name:"bookList"})})).catch((()=>{l.value="出了某些錯誤，按確認重新整理",o.value=!0}))},_=()=>{l.value="",""===f.value.author&&(l.value="請輸入書名！"),""===f.value.title&&(l.value="請輸入作者！"),l.value?o.value=!0:v().patch(w,f.value).then((()=>{s.value=!0})).catch((()=>{l.value="出了某些錯誤，按確認重新整理",o.value=!0}))};return(0,n.bv)((()=>{v().get(w).then((e=>{t.value=e.data.title,a.value=e.data.author,p.value=e.data.description})).catch((()=>{window.location.href="/404"}))})),(e,r)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(O,{text:t.value,status:"edit",showGoBack:!0,onStartEdit:g},null,8,["text"]),(0,n._)("div",ve,[(0,n._)("div",pe,[(0,n.Wm)(re,{editing:d.value,title:t.value,author:a.value,description:p.value,editingContent:f.value,class:"mb-8"},null,8,["editing","title","author","description","editingContent"]),d.value?((0,n.wg)(),(0,n.iD)("div",he,[(0,n._)("div",fe,[(0,n.Wm)(de,{label:"取消",color:"#e5e7eb",class:"button",onHandler:r[0]||(r[0]=e=>m())}),(0,n.Wm)(de,{label:"修改",color:"#60a5fa",class:"button",onHandler:r[1]||(r[1]=e=>_())})]),(0,n._)("div",we,[(0,n._)("button",{class:"ml-auto rounded px-2 py-1 text-lg text-red-500 underline active:bg-red-100",onClick:r[2]||(r[2]=e=>i.value=!0)}," 刪除書本 ")])])):(0,n.kq)("",!0)])]),(0,n.Wm)(K,{showToast:s.value,message:"修改成功！",onHandler:r[3]||(r[3]=e=>(0,h.SU)(u).go(0))},null,8,["showToast"]),(0,n.Wm)(K,{showToast:i.value,message:"確定要刪除嗎？",showCancel:!0,onCancel:r[4]||(r[4]=e=>i.value=!1),onHandler:r[5]||(r[5]=e=>b())},null,8,["showToast"]),(0,n.Wm)(K,{showToast:o.value,message:l.value,onHandler:r[6]||(r[6]=e=>o.value=!1)},null,8,["showToast","message"])]))}};const me=(0,s.Z)(ge,[["__scopeId","data-v-0f764ec8"]]);var be=me,_e=a(5410),ke=a.n(_e);const ye={class:"flex-center min-h-screen flex-col bg-gray-100"},xe={class:"container p-4"},Se={class:"flex justify-between"};var Ce={__name:"BookCreate",setup(e){const t=(0,h.iH)(),a=(0,h.iH)(!1),l=(0,h.iH)(!1),o=(0,c.tv)(),s=(0,h.iH)({title:"",author:"",description:""}),i=()=>{s.value.title="",s.value.author="",s.value.description="",o.go(-1)},r=()=>{t.value="",""===s.value.author&&(t.value="請輸入作者！"),""===s.value.title&&(t.value="請輸入書名！"),t.value?a.value=!0:v().post("/books/",ke().stringify(s.value)).then((e=>{l.value=!0}))},u=()=>{o.replace({name:"bookList"})};return(e,o)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(O,{text:"新增書本",showGoBack:!0}),(0,n._)("div",ye,[(0,n._)("div",xe,[(0,n.Wm)(re,{editing:!0,editingContent:s.value,class:"mb-8"},null,8,["editingContent"]),(0,n._)("div",Se,[(0,n.Wm)(de,{label:"取消",color:"#e5e7eb",class:"button",onHandler:o[0]||(o[0]=e=>i())}),(0,n.Wm)(de,{label:"新增",color:"#60a5fa",class:"button",onHandler:o[1]||(o[1]=e=>r())})])])]),(0,n.Wm)(K,{showToast:l.value,message:"新增成功！",onHandler:o[2]||(o[2]=e=>u())},null,8,["showToast"]),(0,n.Wm)(K,{showToast:a.value,message:t.value,onHandler:o[3]||(o[3]=e=>a.value=!1)},null,8,["showToast","message"])],64))}};const He=(0,s.Z)(Ce,[["__scopeId","data-v-0ff7f7d9"]]);var De=He;function Ue(e,t){return(0,n.wg)(),(0,n.iD)("div",null,"404")}const Ve={},ze=(0,s.Z)(Ve,[["render",Ue]]);var je=ze;const Be=[{path:"/",name:"home",redirect:{name:"bookList"}},{path:"/books",name:"bookList",components:{default:E}},{path:"/books/create",name:"create",components:{default:De}},{path:"/books/:bookId([0-9]+)",name:"bookDetail",components:{default:be}},{path:"/404",name:"notFound",components:{default:je}},{path:"/:pathMatch(.*)*",redirect:{name:"notFound"},hidden:!0}],Te=(0,c.p7)({history:(0,c.PO)("/"),routes:Be});var We=Te,Oe=a(65),Ie=(0,Oe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});v().defaults.baseURL="https://fe-interview-api.unnotech.com",(0,l.ri)(u).use(Ie).use(We).mount("#app")},4654:function(){}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,l,n,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],o=e[c][2];for(var i=!0,r=0;r<l.length;r++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[r])}))?l.splice(r--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,o,s=l[0],i=l[1],r=l[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(r)var c=r(a)}for(t&&t(l);u<s.length;u++)o=s[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},l=self["webpackChunkbook"]=self["webpackChunkbook"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(3509)}));l=a.O(l)})();
//# sourceMappingURL=app.585fcb42.js.map