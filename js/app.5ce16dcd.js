(function(e){function webpackJsonpCallback(t){for(var o,i,a=t[0],l=t[1],u=t[2],s=0,p=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var o=n[t],i=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(i=!1)}i&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var t={},r={app:0},n=[];function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e["default"]}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/js-boomerang/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=webpackJsonpCallback,o=o.slice();for(var a=0;a<o.length;a++)webpackJsonpCallback(o[a]);var c=i;n.push([0,"chunk-vendors"]),checkDeferredModules()})({0:function(e,t,r){e.exports=r("cd49")},6127:function(e,t,r){e.exports=r.p+"img/video-placeholder.04060eee.jpg"},a1a3:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("d3b7"),r("96cf");var n=r("d4ec"),o=r("bee2"),i=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),Appvue_type_template_id_4c5f501a_render=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("upload-site",{attrs:{busy:e.loading,error:e.error},on:{process:e.processVideo,file:e.fileHandler}}),r("video-preview",{attrs:{autoplay:!1,loop:!1,title:"Video Input",source:e.inputSource}}),r("video-preview",{attrs:{autoplay:!0,loop:!0,title:"Video Output",source:e.outputSource}})],1)},a=[],c=(r("3ca3"),r("ddb0"),r("2b3d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"d-flex p-2 justify-content-center"},[r("b-col",{staticClass:"d-flex flex-column px-2 py-1 frame justify-content-center align-items-center"},[r("h1",[e._v("Boomerang.js"),r("img",{attrs:{width:"60px",src:"https://openmoji.org/data/color/svg/1FA83.svg",alt:"boomerang"}})]),e.file?r("div",{staticClass:"filearea"},[r("b-icon",{attrs:{icon:"file-earmark",animation:"throb","font-scale":"3"}}),r("span",{staticClass:"filearea_name"},[e._v(e._s(e.file.name))]),e.error?r("span",{staticClass:"filearea_actions"},[r("p",[e._v("Looks like your browser is not yet supported! :(")])]):r("span",{staticClass:"filearea_actions"},[r("b-button",{staticClass:"mb-2",attrs:{disabled:e.busy,variant:"success"},on:{click:e.process}},[e.busy?[r("b-spinner",{attrs:{small:"",type:"grow"}}),e._v(" Working... ")]:[r("b-icon",{attrs:{icon:"arrow-repeat"}}),e._v(" Boomerang It! ")]],2),r("b-button",{staticClass:"mb-2",attrs:{variant:"danger"},on:{click:e.remove}},[r("b-icon",{attrs:{icon:"x-circle"}}),e._v(" Remove ")],1)],1)],1):r("div",{staticClass:"droparea",class:{active:e.onHover},on:{dragover:e.dragover,dragleave:e.dragleave,drop:e.drop}},[r("label",{staticClass:"droparea_hint",attrs:{for:"fileuploader"}},[e._v("Drop your media here or touch here")]),r("input",{ref:"file",staticClass:"droparea_input",attrs:{type:"file",name:"fileuploader",accept:".mp4"},on:{change:e.onChange}})])])],1)],1)}),l=[],u=i["default"].extend({name:"UploadSite",props:{busy:Boolean,error:Boolean},data:function data(){return{file:"",onHover:!1}},methods:{onChange:function onChange(){this.file=this.$refs.file.files[0];var e=10485760;if(this.file.size>e)return this.file="",void window.alert("Maximum file size exceeded!");this.$emit("file",this.file)},remove:function remove(){this.file="",this.$emit("file",null)},process:function process(){this.$emit("process",!0)},dragover:function dragover(e){e.preventDefault(),this.onHover=!0},dragleave:function dragleave(){this.onHover=!1},drop:function drop(e){e.preventDefault(),this.$refs.file.files=e.dataTransfer.files,this.onChange(),this.onHover=!1}}}),s=u,p=r("2877"),f=Object(p["a"])(s,c,l,!1,null,null,null),d=f.exports,Previewvue_type_template_id_5b032a2c_render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"d-flex p-2 justify-content-center"},[n("b-col",{staticClass:"d-flex flex-column px-2 py-1 frame justify-content-center align-items-center"},[n("h6",{staticClass:"frame_subtext"},[e._v(e._s(e.title))]),e.source?n("video",{attrs:{autoplay:e.autoplay,loop:e.loop,src:e.source,type:"video/mp4",controls:"",width:"100%"}}):n("img",{attrs:{src:r("6127"),width:"100%"}})])],1)],1)},_=[],h=i["default"].extend({name:"Preview",props:{title:String,source:String,autoplay:Boolean,loop:Boolean},methods:{}}),v=h,b=Object(p["a"])(v,Previewvue_type_template_id_5b032a2c_render,_,!1,null,null,null),m=b.exports,w=r("9110"),__awaiter=function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(t){o(t)}}function rejected(e){try{step(n["throw"](e))}catch(t){o(t)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))},g=function(){function Worker(){Object(n["a"])(this,Worker),this.ffmpeg=Object(w["createFFmpeg"])({log:!0})}return Object(o["a"])(Worker,[{key:"initiliaze",value:function initiliaze(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.ffmpeg.load();case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),_callee,this)})))}},{key:"convertVideo",value:function convertVideo(e){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark((function _callee2(){var t;return regeneratorRuntime.wrap((function _callee2$(r){while(1)switch(r.prev=r.next){case 0:return r.t0=this.ffmpeg,r.next=3,Object(w["fetchFile"])(e);case 3:return r.t1=r.sent,r.t0.FS.call(r.t0,"writeFile","input.mp4",r.t1),r.next=7,this.ffmpeg.run("-i","input.mp4","-filter_complex","trim=0:2,setpts=PTS-STARTPTS,split[v1][v2];[v2]reverse,fifo[r];[v1][r]concat,loop=5:250,setpts=N/55/TB","-an","-pix_fmt","yuv420p","output.mp4");case 7:return t=this.ffmpeg.FS("readFile","output.mp4"),r.abrupt("return",URL.createObjectURL(new Blob([t.buffer],{type:"video/mp4"})));case 9:case"end":return r.stop()}}),_callee2,this)})))}}]),Worker}(),y=i["default"].extend({name:"App",data:function data(){return{worker:null,loading:!0,error:!1,fileSource:null,inputSource:null,outputSource:null}},components:{"upload-site":d,"video-preview":m},methods:{fileHandler:function fileHandler(e){e?(this.fileSource=e,this.inputSource=URL.createObjectURL(e)):(this.fileSource=null,this.inputSource=null)},processVideo:function processVideo(){var e=this,t=this;this.fileSource&&(this.loading=!0,this.worker.convertVideo(this.fileSource).then((function(e){t.outputSource=e}))["catch"]((function(e){window.alert("Processing file failed! Try again."),console.error(e)}))["finally"]((function(){e.loading=!1})))}},beforeMount:function beforeMount(){var e=this;this.worker=new g,this.worker.initiliaze().then((function(){e.loading=!1}))["catch"]((function(t){e.error=!0,console.error(t)}))}}),k=y,x=Object(p["a"])(k,Appvue_type_template_id_4c5f501a_render,a,!1,null,null,null),j=x.exports,S=r("5f5b"),O=r("b1e0");r("f9e3"),r("2dd8"),r("a1a3");r.d(t,"AppModule",(function(){return C}));var main_awaiter=function(e,t,r,n){function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function fulfilled(e){try{step(n.next(e))}catch(t){o(t)}}function rejected(e){try{step(n["throw"](e))}catch(t){o(t)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))},C=function(){function AppModule(){Object(n["a"])(this,AppModule),this.bootstrap()}return Object(o["a"])(AppModule,[{key:"bootstrap",value:function bootstrap(){return main_awaiter(this,void 0,void 0,regeneratorRuntime.mark((function _callee(){var e;return regeneratorRuntime.wrap((function _callee$(t){while(1)switch(t.prev=t.next){case 0:return i["default"].use(S["a"]),i["default"].use(O["a"]),e={el:"#app",render:function render(e){return e(j)}},t.abrupt("return",new i["default"](e));case 4:case"end":return t.stop()}}),_callee)})))}}]),AppModule}();new C}});
//# sourceMappingURL=app.5ce16dcd.js.map