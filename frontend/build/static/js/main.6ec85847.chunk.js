(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=n(19),u=n(25),s=n(14),l=n(6),d=n(27),j=n(54),b=n(41),g=n(4);function O(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1];return[n,{onMouseOut:function(){return r(!1)},onMouseOver:function(){return r(!0)}}]}var m=n(1),f={color:"var(--blue-4)",fill:"var(--blue-4)",borderTop:"4px solid var(--blue-3)"};function p(e){var t,n=e.text,a=e.to,r=O(),c=Object(s.a)(r,2)[1],o=(t=n).charAt(0).toUpperCase()+t.slice(1);return Object(m.jsx)(i.b,Object(g.a)(Object(g.a)({className:"nav__link nav__primary--item",exact:!0,to:"/projects"===a?"/":a,activeStyle:f},c),{},{children:Object(m.jsx)("div",{className:"nav__hovering--text letter-spacing-sm",children:o})}))}var S=n(37);function v(e){var t=e.text,n=O(),a=Object(s.a)(n,2),r=a[0],c=a[1],o={github:S.a,linkedIn:S.b}[t];return Object(m.jsx)("li",{className:"nav__secondary--item",children:Object(m.jsx)("a",Object(g.a)(Object(g.a)({href:"github"===t?"https://github.com/dtkellogg":"https://linkedin.com/in/damian-toshiya-kellogg/"},c),{},{children:Object(m.jsx)(o,{size:30,fill:r?"var(--grey-4":"var(--grey-6)",className:"nav__secondary--icon"})}))})}var h=r.a.memo(v),E=["projects","about","contact"],_=["linkedIn","github"];var T=Object(l.g)((function(){return Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)("ul",{className:"nav__primary",children:E.map((function(e){return Object(m.jsx)(p,{to:"/".concat(e),text:e},e)}))}),Object(m.jsx)("ul",{className:"nav__secondary",children:_.map((function(e){return Object(m.jsx)(h,{to:"/".concat(e),text:e},e)}))})]})}));function x(e){var t=e.text,n=void 0===t?"Loading":t,r=e.speed,c=void 0===r?300:r,o=Object(a.useState)(n),i=Object(s.a)(o,2),u=i[0],l=i[1];return"Toshi Kellogg | Web Developer"!==document.title&&(document.title="Toshi Kellogg | Web Developer"),Object(a.useEffect)((function(){"L"!==u.charAt(0)?document.title="Toshi Kellogg | Web Developer":document.title=u}),[u]),Object(a.useEffect)((function(){var e=window.setInterval((function(){l((function(e){return e==="".concat(n,"...")?n:"".concat(e,".")}))}),c);return function(){return window.clearInterval(e)}}),[n,c]),Object(m.jsx)("div",{className:"dots-loader"})}var y=n(44),I=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,181))})),A=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,182))})),C=Object(a.lazy)((function(){return Promise.all([n.e(9),n.e(4)]).then(n.bind(null,179))})),L=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,180))}));function R(){var e=Object(l.f)(),t=Object(u.b)(),n=Object(a.useState)(!0),c=Object(s.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){t(Object(y.a)()),setTimeout((function(){i(!1)}),2e3)}),[]),Object(a.useEffect)((function(){o||(document.title="Toshi Kellogg | Web Developer")}),[o]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(b.ToastProvider,{children:Object(m.jsxs)("div",{className:"container__main",children:[Object(m.jsx)(T,{}),Object(m.jsx)("main",{className:"container__body",children:o?Object(m.jsx)(x,{}):Object(m.jsx)(r.a.Suspense,{fallback:Object(m.jsx)(x,{}),children:Object(m.jsx)(d.a,{children:Object(m.jsx)(j.a,{timeout:250,classNames:"fade",children:Object(m.jsxs)(l.c,{location:e,children:[Object(m.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(m.jsx)(C,{})}}),Object(m.jsx)(l.a,{exact:!0,path:"/about",render:function(){return Object(m.jsx)(I,{})}}),Object(m.jsx)(l.a,{exact:!0,path:"/skills",render:function(){return Object(m.jsx)(A,{})}}),Object(m.jsx)(l.a,{exact:!0,path:"/projects",render:function(){return Object(m.jsx)(C,{})}}),Object(m.jsx)(l.a,{exact:!0,path:"/contact",render:function(){return Object(m.jsx)(L,{})}}),Object(m.jsx)(l.a,{path:"*",render:function(){return Object(m.jsx)(C,{})}})]})},e.key)})})})]})})})}var D=n(23),P=n(58),N=n(57),w=n(24),M=n(16),U={name:localStorage.getItem("name")?localStorage.getItem("name"):"",email:localStorage.getItem("email")?localStorage.getItem("email"):"",subject:localStorage.getItem("subject")?localStorage.getItem("subject"):"",message:localStorage.getItem("message")?localStorage.getItem("message"):"",readyToSubmit:localStorage.getItem("readyToSubmit")?localStorage.getItem("readyToSubmit"):"",submitted:!1},k=n(8),J=n(17);var G=Object(D.combineReducers)({formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{initialState:U},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.a:return Object(g.a)(Object(g.a)({},e),{},Object(w.a)({},t.field,t.payload));case M.f:return Object(g.a)(Object(g.a)({},e),{},{readyToSubmit:t.payload});case M.g:return Object(g.a)(Object(g.a)({},e),{},{submitted:t.payload});case M.e:return{name:"",email:"",subject:"",message:"",readyToSubmit:!1,submitted:!1};default:return e}},messageCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.c:return{loading:!0};case M.d:return{loading:!1,success:!0,message:t.payload};case M.b:return{loading:!1,error:t.payload};default:return e}},projectList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{projects:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.e:return{loading:!0,projects:[]};case k.f:return{loading:!1,projects:t.payload};case k.d:return{loading:!1,error:t.payload};default:return e}},projectDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{project:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.b:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case k.c:return{loading:!1,project:t.payload};case k.a:return{loading:!1,error:t.payload};default:return e}},modalSetProject:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{project:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.e:return Object(g.a)({loading:!0},e);case J.g:return{loading:!1,project:t.payload};case J.d:return{loading:!1,error:t.payload};case J.f:return{project:{}};default:return e}},modalIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.b:return Object(g.a)({loading:!0},e);case J.c:return{loading:!1,isOpen:t.payload};case J.a:return{loading:!1,error:t.payload};default:return e}}}),F={formData:{name:localStorage.getItem("name")?localStorage.getItem("name"):"",email:localStorage.getItem("email")?localStorage.getItem("email"):"",subject:localStorage.getItem("subject")?localStorage.getItem("subject"):"",message:localStorage.getItem("message")?localStorage.getItem("message"):"",readyToSubmit:localStorage.getItem("readyToSubmit")?localStorage.getItem("readyToSubmit"):"",submitted:!1}},z=[P.a],Q=Object(D.createStore)(G,F,Object(N.composeWithDevTools)(D.applyMiddleware.apply(void 0,z)));n(99),n(100);o.a.render(Object(m.jsx)(u.a,{store:Q,children:Object(m.jsx)(i.a,{children:Object(m.jsx)(R,{})})}),document.getElementById("root"))},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return s}));var a="MESSAGE_CREATE_REQUEST",r="MESSAGE_CREATE_SUCCESS",c="MESSAGE_CREATE_FAIL",o="HANDLE_INPUT_TEXT",i="RESET_INPUTS",u="TOGGLE_READY_TO_SUBMIT",s="TOGGLE_SUBMITTED"},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s}));var a="MODAL_ISOPEN_REQUEST",r="MODAL_ISOPEN_SUCCESS",c="MODAL_ISOPEN_FAIL",o="MODAL_SETPROJECT_REQUEST",i="MODAL_SETPROJECT_SUCCESS",u="MODAL_SETPROJECT_FAIL",s="MODAL_SETPROJECT_RESET"},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(21),r=n(32),c=n(35),o=n.n(c),i=n(8),u=function(){return function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.e}),e.next=4,o.a.get("/api/projects");case 4:n=e.sent,r=n.data,t({type:i.f,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.d,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}},8:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var a="PROJECT_LIST_REQUEST",r="PROJECT_LIST_SUCCESS",c="PROJECT_LIST_FAIL",o="PROJECT_DETAILS_REQUEST",i="PROJECT_DETAILS_SUCCESS",u="PROJECT_DETAILS_FAIL"},99:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.6ec85847.chunk.js.map