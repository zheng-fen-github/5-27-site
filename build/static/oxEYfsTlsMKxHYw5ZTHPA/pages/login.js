(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CsS9:function(e,t,s){"use strict";var n=s("MX0m"),a=s.n(n),o=s("q1tI"),r=s.n(o).a.createElement;t.a=function(e){var t=e.color,s=e.size,n=t||"#72BDE8";return r("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" content"},r("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" one"}),r("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" two"}),r("div",{className:a.a.dynamic([["3746841954",[s,s,n]]])+" three"}),r(a.a,{id:"3746841954",dynamic:[s,s,n]},[".content.__jsx-style-dynamic-selector{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:".concat(s,"px;height:").concat(s,"px;border-radius:20px;background:").concat(n,";margin:0 6px;}"),".one.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s infinite;animation:go-__jsx-style-dynamic-selector 2s infinite;}",".two.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;}",".three.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;}","@-webkit-keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}"]))}},KQm4:function(e,t,s){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}s.d(t,"a",(function(){return n}))},O2ls:function(e,t,s){"use strict";s.r(t);var n=s("MX0m"),a=s.n(n),o=s("q1tI"),r=s.n(o),i=s("8Kt/"),c=s.n(i),l=s("o0o1"),m=s.n(l),d=s("CsS9"),u=r.a.createElement,x=function(e){var t=e.openEvent;Object(o.useEffect)((function(){var e=localStorage.getItem("user-account");e&&(document.querySelector("input[name='account']").value=e,document.querySelector("input[name='password']").focus())}),[]);var s=Object(o.useState)(!1),n=s[0],r=s[1];return u("div",{className:"jsx-1419307597 row m-0"},u("div",{className:"jsx-1419307597 main-root shadow-sm"},u("div",{className:"jsx-1419307597 row"},u("div",{className:"jsx-1419307597 animation col-12 d-flex align-items-center justify-content-center "},n?u(d.a,{color:"#97cad9"}):u("i",{className:"jsx-1419307597 iconfont icon-suo"})),u("form",{onSubmit:function(e){var s,n,a;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),s=new FormData(e.target),r(!0),o.prev=3,o.next=6,m.a.awrap(fetch("http://localhost:4040/login",{method:"POST",body:s}));case 6:return n=o.sent,o.next=9,m.a.awrap(n.json());case 9:a=o.sent,n.ok?(localStorage.setItem("user-account",s.get("account")),document.documentElement.style.background="#f7f7f7",t(a)):(r(!1),alert(a)),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(3),console.log(o.t0);case 16:case"end":return o.stop()}}),null,null,[[3,13]],Promise)},className:"jsx-1419307597 form-root col-12"},u("h1",{className:"jsx-1419307597 title my-5"},"Login"),u("label",{htmlFor:"account",className:"jsx-1419307597 col-12 h3 my-4"},"Account"),u("input",{type:"text",name:"account",id:"account",autoFocus:!0,required:!0,className:"jsx-1419307597 w-100"}),u("label",{htmlFor:"password",className:"jsx-1419307597 col-12 h3 my-4"},"Password"),u("input",{type:"password",name:"password",id:"password",required:!0,className:"jsx-1419307597 w-100"}),u("button",{type:"submit",className:"jsx-1419307597 my-5 h2 shadow-sm"},"LOGIN")))),u(a.a,{id:"1419307597"},[".main-root.jsx-1419307597{width:480px;position:fixed;top:50%;left:50%;border-radius:20px;overflow:hidden;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:white;}",".animation.jsx-1419307597{height:200px;background:#fafeff;}",".form-root.jsx-1419307597{padding:10%;padding-top:0;}","i.jsx-1419307597{font-size:60px;color:#97cad9;}","input.jsx-1419307597{font-size:3rem;border-radius:20px;border:solid #e5e5e5 2px;padding:1rem;}","label.jsx-1419307597{margin:0;padding:0;color:#d5d6d9;}","button.jsx-1419307597{width:100%;padding:1rem;font-size:3rem;background:#f3fcfe;border:none;color:#97cad9;font-weight:700;border-radius:10px;-webkit-transition:.2s;transition:.2s;}","button.jsx-1419307597:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}","h1.jsx-1419307597{color:#97cad9;}"]))},f=r.a.createElement,p=function(e){var t=e.list,s=e.setList,n=Object(o.useRef)(),r=Object(o.useState)(t[0].typeName),i=r[0],c=r[1];Object(o.useEffect)((function(){setTimeout((function(){var e=document.querySelector(".nav .nav-item");e.classList.add("seled"),n.current=e}),200)}),[]);return f("div",{className:"jsx-3310359532 nav row"},f("div",{className:"jsx-3310359532 col-8 m-auto"},f("ul",{className:"jsx-3310359532 row justify-content-center"},f("li",{className:"jsx-3310359532 col-12 title text-center"},f("h1",{className:"jsx-3310359532 component-code-typeName"},i)),t.map((function(e){return f("li",{key:e._id,onClick:function(t){return function(e,t){try{var a=t.target.closest("li");if(!a)return;n.current.classList.remove("seled"),a.classList.add("seled"),n.current=a,c((function(){return a.children[0].textContent})),s(e.typeList)}catch(o){o&&console.log(o)}}(e,t)},className:"jsx-3310359532 col-10 nav-item text-center"},f("h3",{className:"jsx-3310359532"},e.typeName))})))),f(a.a,{id:"3310359532"},[".nav.jsx-3310359532{background:white;}","ul.jsx-3310359532{list-style:none;}","li.jsx-3310359532{padding:2rem;margin:0;-webkit-transition:.4s;transition:.4s;cursor:pointer;margin:4px 0;}","li.seled.jsx-3310359532,li.jsx-3310359532:hover{background:#4b30c3;color:white;}"]))},b=s("KQm4"),j=r.a.createElement,h=function(e){var t=e.selectList,s=Object(o.useState)(""),n=s[0],r=s[1],i=Object(o.useState)([]),c=i[0],l=i[1];Object(o.useEffect)((function(){l(t)}),[t]);var m;return j("div",{className:"jsx-1594687254 row sort ml-4"},j("select",{name:"simple  col-12",ref:function(e){return m=e},className:"jsx-1594687254 component-sort-name"},c&&c.map((function(e,t){return j("option",{value:e,key:t,className:"jsx-1594687254"},e)}))),j("div",{className:"jsx-1594687254 col-12 sortInput px-0"},j("input",{type:"text",name:"sortItem",id:"sortItem",value:n,onChange:function(e){return r(e.target.value)},onInput:function(e){return r(e.target.value)},className:"jsx-1594687254  mt-3"})),j("div",{className:"jsx-1594687254 col-12 px-0 mt-3"},j("button",{onClick:function(){if(""!==n){l((function(e){return[].concat(Object(b.a)(e),[n])})),r("");var e=m;setTimeout((function(){e.value=n}),[100])}},className:"jsx-1594687254"},"Add")),j(a.a,{id:"1594687254"},["select.jsx-1594687254{border:none;width:100%;text-align:center;padding:1rem;font-size:2rem;font-weight:600;}","option.jsx-1594687254{padding:0.5rem;}","input.jsx-1594687254{width:100%;border:none;padding:0.5rem;font-size:2rem;}","button.jsx-1594687254{width:100%;border:none;background:#4b30c3;color:white;padding:0.5rem;font-size:2rem;}"]))},w=r.a.createElement,g=function(){var e=Object(o.useState)(null),t=e[0],s=e[1];return w("div",{className:"jsx-2525806831 col-10 mt-5"},!t&&w("div",{onClick:function(e){e.target.nextElementSibling.click()},className:"jsx-2525806831 load-photo row"}),w("input",{type:"file",name:"photoFile",onChange:function(e){var t=e.target.files[0];try{var n=URL.createObjectURL(t);s(n)}catch(a){console.log(a)}},className:"jsx-2525806831 d-none"}),t&&w("img",{src:t,alt:"code-photo",onDoubleClick:function(e){s(""),e.target.previousElementSibling.value=""},className:"jsx-2525806831"}),w(a.a,{id:"2525806831"},[".load-photo.jsx-2525806831{height:400px;background:#4b30c3;}","img.jsx-2525806831{width:100%;}"]))},k=r.a.createElement,y=function(){Object(o.useEffect)((function(){e()}),[]);var e=function(){var e,t;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m.a.awrap(fetch("http://localhost:4040/getComponentList/all"));case 2:if(!(e=s.sent).ok){s.next=9;break}return s.next=6,m.a.awrap(e.json());case 6:t=s.sent,i(t),n(t[0].typeList);case 9:case"end":return s.stop()}}),null,null,null,Promise)},t=Object(o.useState)([]),s=t[0],n=t[1],a=Object(o.useState)([]),r=a[0],i=a[1];return k("div",{className:"left-root row justify-content-center"},k("div",{className:"col-6"},r.length>0&&k(p,{list:r,setList:function(e){Array.isArray(e)&&n(e)}})),k("div",{className:"col-4"},k(h,{selectList:s})),k(g,null))},v=r.a.createElement,N=function(e){var t=e.restEvent;return v("form",{onSubmit:function(e){var s,n,a,o;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),s=new FormData(e.target),n=document.querySelector(".component-code-typeName").textContent,a=document.querySelector(".component-sort-name").value,n||a){r.next=6;break}return r.abrupt("return");case 6:return s.append("type",a),r.prev=7,o="http://localhost:4040/addComponent/"+n,r.next=11,m.a.awrap(fetch(o,{method:"POST",body:s}));case 11:r.sent.ok?t(1):alert("\u6dfb\u52a0\u5931\u8d25"),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(7),console.log(r.t0);case 18:case"end":return r.stop()}}),null,null,[[7,15]],Promise)},className:"jsx-1052715655 row px-0"},v("textarea",{name:"code",id:"code",required:!0,className:"jsx-1052715655 col-10 mx-auto"}),v("input",{type:"text",name:"codeTitle",placeholder:"\u6807\u9898",required:!0,className:"jsx-1052715655 col-6 mx-auto mt-5 text-center"}),v("div",{className:"jsx-1052715655 col-12 mt-5"},v("div",{className:"jsx-1052715655 row justify-content-center"},v("button",{type:"submit  col-auto",className:"jsx-1052715655"},"Commit"))),v(a.a,{id:"1052715655"},["textarea.jsx-1052715655{height:600px;font-size:2rem;font-weight:600;padding:2rem;}","input.jsx-1052715655{padding:1rem 2rem;font-weight:600;font-size:2rem;}","button.jsx-1052715655{border:none;background:#4b30c3;color:white;padding:1rem 2rem;font-weight:600;font-size:2rem;}"]))},_=r.a.createElement,E=function(e){var t=e.rest;return _("div",{className:"jsx-2967817067 add-component-new-root row align-items-center"},_("div",{className:"jsx-2967817067 col-4"},_(y,null)),_("div",{className:"jsx-2967817067 col-8"},_(N,{restEvent:t})),_(a.a,{id:"2967817067"},[".add-component-new-root.jsx-2967817067{position:fixed;width:100%;top:0;right:0;left:0;bottom:0;-webkit-animation:show-jsx-2967817067 1s 1;animation:show-jsx-2967817067 1s 1;background-image:url('greed.jpg');background-size:cover;}","@-webkit-keyframes show-jsx-2967817067{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes show-jsx-2967817067{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"]))},S=r.a.createElement,O=function(e){var t,s=e.setSrc,n=Object(o.useState)(""),r=n[0],i=n[1],c=function(e){i(e.target.value)};return S("div",{className:"jsx-2392000649 row align-content-between h-100"},S("div",{className:"jsx-2392000649 col-12 title d-flex align-items-center p-0"},S("input",{type:"text",name:"photoTitle",placeholder:"title",id:"photoTitle",className:"jsx-2392000649 m-0 p-0 pb-2 text-center"})),S("div",{className:"jsx-2392000649 filebu col-12 p-0"},S("div",{className:"jsx-2392000649 row justify-content-between p-0 m-0 my-5"},S("input",{type:"text",name:"fileName",value:r,onChange:c,onInput:c,id:"fileName",className:"jsx-2392000649 col px-4 py-2"}),S("button",{onClick:function(e){e.preventDefault(),t.click()},className:"jsx-2392000649 col-4 offset-1"},"Load Photo")),S("div",{className:"jsx-2392000649 row justify-content-between p-0 m-0 my-5"},S("input",{type:"text",name:"linkUrl",id:"linkUrl",className:"jsx-2392000649 col px-4 py-2"}),S("button",{onClick:function(e){e.preventDefault(),e.target.previousElementSibling.value=""},className:"jsx-2392000649 col-4 offset-1"},"Clear Link"))),S("input",{type:"file",ref:function(e){return t=e},onChange:function(e){var t=e.target.files[0];try{var n=URL.createObjectURL(t);i(t.name),s(n)}catch(a){console.log(a)}},name:"photofile",id:"photofile",className:"jsx-2392000649 d-none"}),S(a.a,{id:"2392000649"},["input[name='file-text-title'].jsx-2392000649{width:60%;border:none;border-bottom:solid 2px white;}",".title.jsx-2392000649{height:50%;}",".gongneng.jsx-2392000649{height:50%;}","input.jsx-2392000649{background:none;border:solid 2px white;color:black;font-size:3rem;}",".filebu.jsx-2392000649 input.jsx-2392000649{border-radius:6px;}","button.jsx-2392000649{background:white;border:none;font-size:2rem;font-weight:600;padding:0 1.2rem;border-radius:6px;-webkit-transition:background .4s;transition:background .4s;}","button.jsx-2392000649:hover{padding:0 1rem;background:none;border:solid 2px white;color:white;}"]))},z=r.a.createElement,C=function(e){var t=e.file,s=e.clear;return z("div",{className:"jsx-2132967920 col-auto h-100 p-0 position-relative"},z("div",{className:"jsx-2132967920 photo-root"},z("div",{className:"jsx-2132967920 photo-bg"},t&&z("img",{src:t,alt:"newPhoto",className:"jsx-2132967920"}))),z("div",{className:"jsx-2132967920 gongneng-root justify-content-around"},z("div",{className:"jsx-2132967920 delete-photo"},z("i",{onClick:function(){return s()},className:"jsx-2132967920 iconfont icon-trash-"})),z("div",{className:"jsx-2132967920 upload-photo"},z("button",{type:"submit",className:"jsx-2132967920"},z("i",{className:"jsx-2132967920 iconfont icon-cloud-upload"})))),z(a.a,{id:"2132967920"},["img.jsx-2132967920{width:100%;}","button.jsx-2132967920{background:none;border:none;}",".gongneng-root.jsx-2132967920{width:100%;height:100px;position:absolute;bottom:-100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".delete-photo.jsx-2132967920,.upload-photo.jsx-2132967920{height:60px;width:60px;border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:.4s;transition:.4s;cursor:pointer;}",".delete-photo.jsx-2132967920:hover,.upload-photo.jsx-2132967920:hover{border:solid 2px white;}",".delete-photo.jsx-2132967920:hover>i.jsx-2132967920,.upload-photo.jsx-2132967920:hover i.jsx-2132967920{font-size:40px;}","i.jsx-2132967920{color:white;font-size:20px;-webkit-transition:.2s;transition:.2s;}",".photo-root.jsx-2132967920{width:600px;height:600px;background:white;padding:50px;}",".photo-bg.jsx-2132967920{width:500px;height:500px;background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:auto;}",".photo-bg.jsx-2132967920::-webkit-scrollbar{display:none;}"]))},L=r.a.createElement,P=function(e){var t=e.rest,s=Object(o.useState)(""),n=s[0],i=s[1];return L(r.a.Fragment,null,L("form",{onSubmit:function(e){var s,n,a;return m.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),console.log(e.target.tagName),s=new FormData(e.target),o.prev=3,o.next=6,m.a.awrap(fetch("http://localhost:4040/addPhoto/photo",{method:"POST",body:s}));case 6:return n=o.sent,o.next=9,m.a.awrap(n.json());case 9:a=o.sent,n.ok?t(3):console.log(a),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(3),console.log(o.t0);case 16:case"end":return o.stop()}}),null,null,[[3,13]],Promise)},className:"jsx-2635148866"},L("div",{className:"jsx-2635148866  row justify-content-center photo-main-root"},L("div",{className:"jsx-2635148866 col-9"},L("div",{className:"jsx-2635148866 row"},L(C,{file:n,clear:function(){return i(null)}}),L("div",{className:"jsx-2635148866 col offset-1"},L(O,{setSrc:i})))))),L(a.a,{id:"2635148866"},[".photo-main-root.jsx-2635148866{margin:0;width:100%;background:#85c0d2;position:fixed;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:show-jsx-2635148866 1s 1;animation:show-jsx-2635148866 1s 1;}","@-webkit-keyframes show-jsx-2635148866{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes show-jsx-2635148866{0%{-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}100{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}"]))},F=r.a.createElement,I=function(){return F("div",{className:"jsx-1564866248 col-4 show"},F("div",{className:"jsx-1564866248 row h-100 justify-content-center align-items-center"},F("div",{className:"jsx-1564866248 show-logo d-flex justify-content-center align-items-center"},F("i",{className:"jsx-1564866248 iconfont icon-video"}))),F(a.a,{id:"1564866248"},[".show.jsx-1564866248{background:black;height:660px;border-radius:20px 0 0 20px;position:relative;}",".show.jsx-1564866248::after{content:'';position:absolute;right:-20px;top:0;bottom:0;left:80%;background:black;}",".show-logo.jsx-1564866248{height:180px;width:180px;background:#4b4b4b;border-radius:20px;}","i.jsx-1564866248{color:white;font-size:90px;}"]))},T=r.a.createElement,q=function(){return T("div",{className:"jsx-602073891 col-4 show"},T(X,null),T("div",{className:"jsx-602073891 row h-100 flex-column justify-content-center align-items-center"},T("div",{className:"jsx-602073891 show-logo d-flex justify-content-center align-items-center"},T("i",{className:"jsx-602073891 iconfont icon-cloud-upload"})),T("h1",{className:"jsx-602073891 my-5"},"Upload a New Video"),T("button",{className:"jsx-602073891"},"Upload a File")),T(a.a,{id:"602073891"},[".show.jsx-602073891{background:white;height:660px;border-radius:20px;position:relative;overflow:hidden;}",".show-logo.jsx-602073891{height:120px;width:120px;background:#e9e9eb;border-radius:20px;}","i.jsx-602073891{color:#9192a4;font-size:90px;}","button.jsx-602073891{padding:1rem 1.5rem;font-size:2rem;background:black;border-radius:10px;-webkit-transition:.2s;transition:.2s;font-weight:700;color:white;border:2px solid black;border-color:rgba(0,0,0,0);}","button.jsx-602073891:hover{color:black;border:2px solid black;background:none;}"]))},X=function(){return T("div",{className:"jsx-2896574129 col-12 form-root shadow"},T("div",{className:"jsx-2896574129 row h-100 justify-content-center align-content-center"},T("label",{htmlFor:"title",className:"jsx-2896574129 h1 my-4 col-10"},"Video Title"),T("input",{type:"text",name:"title",id:"title",className:"jsx-2896574129 col-10"}),T("label",{htmlFor:"title",className:"jsx-2896574129 h2 my-5 col-10"},"Video Introduction"),T("textarea",{name:"Introduction",id:"Introduction",className:"jsx-2896574129  col-10"}),T("button",{className:"jsx-2896574129 mt-5"},"Upload a File")),T(a.a,{id:"2896574129"},[".form-root.jsx-2896574129{position:absolute;right:0;top:0;bottom:0;left:0;background:white;z-index:3;border-radius:20px;-webkit-transition:.4s;transition:.4s;-webkit-transform:translateX(110%);-ms-transform:translateX(110%);transform:translateX(110%);}","input.jsx-2896574129{font-size:3rem;border-radius:12px;border:solid black 2px;padding:1rem;}","textarea.jsx-2896574129{height:200px;border:solid 2px black;border-radius:12px;font-size:2rem;padding:2rem;}","button.jsx-2896574129{padding:1rem 1.5rem;font-size:2rem;background:black;border-radius:10px;-webkit-transition:.2s;transition:.2s;font-weight:700;color:white;border:2px solid black;border-color:rgba(0,0,0,0);}","button.jsx-2896574129:hover{color:black;border:2px solid black;background:none;}"]))},A=r.a.createElement,D=function(){return Object(o.useEffect)((function(){}),[]),A(r.a.Fragment,null,A("div",{className:"jsx-1426833608 video-root row justify-content-center"},A(I,null),A(q,null)),A(a.a,{id:"1426833608"},["html.jsx-1426833608{font-size:10px;background:#334a52;}",".video-root.jsx-1426833608{margin:0;width:100%;position:fixed;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-animation:show-jsx-1426833608 1s 1;animation:show-jsx-1426833608 1s 1;}","@-webkit-keyframes show-jsx-1426833608{0%{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}100{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}","@keyframes show-jsx-1426833608{0%{-webkit-transform:translate(0,-120%);-ms-transform:translate(0,-120%);transform:translate(0,-120%);}100{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}}"]))},U=r.a.createElement,V=function(e){var t=e.selectEv;return U("ul",{onClick:function(e){var s=e.target.closest("li").children[0].textContent;t("Component"===s?1:"Video"===s?2:"Photo"===s&&3)},className:"jsx-3163982633 col-4 sidebar  m-0 p-0"},U("div",{className:"jsx-3163982633 row justify-content-center px-2"},U("li",{className:"jsx-3163982633 col p-4 "},U("h2",{className:"jsx-3163982633 text-center"},"Component")),U("li",{className:"jsx-3163982633 col p-4 "},U("h2",{className:"jsx-3163982633 text-center"},"Video")),U("li",{className:"jsx-3163982633 col p-4 "},U("h2",{className:"jsx-3163982633 text-center"},"Photo"))),U(a.a,{id:"3163982633"},[".sidebar.jsx-3163982633{background:#85c0d2;position:fixed;left:50%;top:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-animation:show-jsx-3163982633 1s 1;animation:show-jsx-3163982633 1s 1;}","@-webkit-keyframes show-jsx-3163982633{0%{-webkit-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);transform:translate(-50%,-120%);}100{-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}}","@keyframes show-jsx-3163982633{0%{-webkit-transform:translate(-50%,-120%);-ms-transform:translate(-50%,-120%);transform:translate(-50%,-120%);}100{-webkit-transform:translate(-50%,0%);-ms-transform:translate(-50%,0%);transform:translate(-50%,0%);}}","ul.jsx-3163982633{list-style:none;color:white;overflow:hidden;}","li.jsx-3163982633{cursor:pointer;}","li.jsx-3163982633:hover{background:#589baf;}"]))},Y=r.a.createElement;t.default=function(){var e=Object(o.useState)(""),t=(e[0],e[1]),s=Object(o.useState)(1),n=s[0],i=s[1],l=function(e){i((function(){return 5})),i((function(){return e}))};return Y(r.a.Fragment,null,Y(c.a,null,Y("title",{className:"jsx-3789236248"},"Create Next App"),Y("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous",className:"jsx-3789236248"}),Y("link",{rel:"stylesheet",href:"//at.alicdn.com/t/font_1748919_7p01375xskx.css",className:"jsx-3789236248"})),Y("div",{className:"jsx-3789236248 container-fluid"},0===n&&Y(x,{openEvent:function(e){t(e),i(1)}}),1===n&&Y(E,{rest:l}),2===n&&Y(D,null),3===n&&Y(P,{rest:l}),n>0&&Y(V,{selectEv:function(e){if(!1!==e){var t=3===e?"#85c0d2":2===e?"#334a52":"#f7f7f7";document.documentElement.style.background=t,e!==n&&i(e)}}})),Y(a.a,{id:"3789236248"},["*,body{margin:0;padding:0;box-sizing:border-box;}","html{font-size:10px;background:#f7f7f7;background:#383636;-webkit-transition:.5s;transition:.5s;}",".container-fluid{padding:0;}"]))}},u6Hu:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s("O2ls")}])}},[["u6Hu",0,2,1,4]]]);