(this.webpackJsonpneedfordriveadmin=this.webpackJsonpneedfordriveadmin||[]).push([[0],{159:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(31),r=a.n(c),s=(a(159),a(87)),i=a(35),o=(a(164),a(23)),l=a(57),d=a(259),u=a(268),j=a(266),b=a(274),O=(a(165),a(25)),m=a(263),h=(a(166),a(50)),p=(a(167),a(270)),x=a(271),f=a(6),v=function(e,t){return e?Object(f.jsxs)("div",{className:"orderCarOption",children:[Object(f.jsx)(p.a,{className:"isCarOption"}),Object(f.jsx)("p",{children:t})]}):Object(f.jsxs)("div",{className:"orderCarOption",children:[Object(f.jsx)(x.a,{className:"isNotCarOption"}),Object(f.jsx)("p",{className:"isNotCarOptionText",children:t})]})},g=function(e){var t,a,n,c,r,s,i=e.order,o=new Date(null===i||void 0===i?void 0:i.dateFrom),l=new Date(null===i||void 0===i?void 0:i.dateTo);return Object(f.jsxs)("div",{className:"orderContent",children:[Object(f.jsx)("div",{className:"orderImageBlock",children:Object(f.jsx)("img",{src:null===i||void 0===i||null===(t=i.carId)||void 0===t?void 0:t.thumbnail.path,alt:"carImage",className:"orderCarImage"})}),Object(f.jsxs)("div",{className:"orderInfoBlock",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{children:null===i||void 0===i||null===(a=i.carId)||void 0===a?void 0:a.name}),(null===i||void 0===i||null===(n=i.cityId)||void 0===n?void 0:n.name)&&" \u0432 ",Object(f.jsx)("span",{children:null===i||void 0===i||null===(c=i.cityId)||void 0===c?void 0:c.name}),(null===i||void 0===i||null===(r=i.pointId)||void 0===r?void 0:r.address)&&", ",null===i||void 0===i||null===(s=i.pointId)||void 0===s?void 0:s.address]}),Object(f.jsxs)("p",{children:[o.toLocaleString()," \u2014 ",l.toLocaleString()]}),Object(f.jsxs)("p",{children:["\u0426\u0432\u0435\u0442: ",Object(f.jsx)("span",{children:null===i||void 0===i?void 0:i.color})]})]}),Object(f.jsxs)("div",{className:"orderOptionsBlock",children:[v(null===i||void 0===i?void 0:i.isFullTank,"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a"),v(null===i||void 0===i?void 0:i.isNeedChildChair,"\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e"),v(null===i||void 0===i?void 0:i.isRightWheel,"\u041f\u0440\u0430\u0432\u044b\u0439 \u0440\u0443\u043b\u044c")]}),Object(f.jsx)("div",{className:"orderPriceBlock",children:Object(f.jsxs)("p",{className:"orderPrice",children:[null===i||void 0===i?void 0:i.price," \u20bd"]})})]})},S=a(262),N=a(75),y=a(150),I=(a(169),a(44)),T=a.n(I),C=a(70),w=a(91),A=a.n(w),R=A.a.create({baseURL:"https://api-factory.simbirsoft1.com/api",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b","Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer ".concat(sessionStorage.getItem("access_token"))}}),F=function(e,t,a){var n="";return a&&(a.cityId&&(n+="&cityId=".concat(a.cityId)),a.orderStatus&&(n+="&orderStatusId=".concat(a.orderStatus)),a.dateFrom&&(n+="&dateFrom%5B%24gt%5D=".concat(a.dateFrom))),R.get("db/order?page=".concat(e,"&limit=").concat(t).concat(n))},E=function(){return R.get("db/orderStatus").then((function(e){return e.data.data}))},D=function(){return R.get("db/city").then((function(e){return e.data.data}))},_=function(e){return{type:"ORDERS/SET_ORDERS_PORTION",payload:e}},k=function(e){return{type:"ORDERS/ORDERS_TOTAL_COUNT",payload:e}},U=function(e){return{type:"ORDERS/SET_ORDER_STATUS",payload:e}},P=function(e){return{type:"ORDERS/SET_CITIES",payload:e}},B=function(e){var t=e.onFilterFormFinish,a=Object(i.c)((function(e){return e.orders})),c=a.orderStatus,r=a.cities,s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(C.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:a=e.sent,t(U(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s(function(){var e=Object(C.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:a=e.sent,t(P(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(f.jsxs)(S.a,{name:"ordersFilterForm",className:"filterForm",onFinish:t,children:[Object(f.jsx)(S.a.Item,{className:"filterFormItem",name:"cityId",children:Object(f.jsx)(N.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",allowClear:!0,children:r.map((function(e){return Object(f.jsx)(N.a.Option,{value:e.id,children:e.name},e.id)}))})}),Object(f.jsx)(S.a.Item,{className:"filterFormItem",name:"orderStatus",children:Object(f.jsx)(N.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430",allowClear:!0,children:c.map((function(e){return Object(f.jsx)(N.a.Option,{value:e.id,children:e.name},e.id)}))})}),Object(f.jsx)(S.a.Item,{className:"filterFormItem",name:"dateFrom",children:Object(f.jsxs)(N.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u043a",allowClear:!0,children:[Object(f.jsx)(N.a.Option,{value:"month",children:"\u0417\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446"}),Object(f.jsx)(N.a.Option,{value:"week",children:"\u0417\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e"}),Object(f.jsx)(N.a.Option,{value:"day",children:"\u0417\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0434\u0435\u043d\u044c"})]})}),Object(f.jsx)(S.a.Item,{children:Object(f.jsx)(y.a,{type:"primary",htmlType:"submit",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})},H=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(10),s=Object(l.a)(r,2),o=s[0],u=(s[1],Object(n.useState)(null)),j=Object(l.a)(u,2),b=j[0],p=j[1],x=Object(i.c)((function(e){return e.orders})),v=x.orders,S=x.totalCount,N=Object(i.b)(),y=Object(h.a)();return Object(n.useEffect)((function(){N(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(){var n=Object(C.a)(T.a.mark((function n(c){var r;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F(e,t,a);case 2:r=n.sent,c(k(r.data.count)),c(_(r.data.data));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(a-1,o,b))}),[a,b]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"pageTitle",children:"\u0417\u0430\u043a\u0430\u0437\u044b"}),Object(f.jsxs)(d.a.Content,{className:"ordersListContent",children:[Object(f.jsx)(B,{onFilterFormFinish:function(e){var t=new Date,a="";switch(e.dateFrom){case"month":a=t.setMonth(t.getMonth()-1);break;case"week":a=t.setDate(t.getDate()-7);break;case"day":a=t.setDate(t.getDate()-1)}p(Object(O.a)(Object(O.a)({},e),{},{dateFrom:a}))}}),Object(f.jsx)("div",{className:"ordersList",children:v.map((function(e){return Object(f.jsx)(g,{order:e},e.id)}))}),Object(f.jsx)(m.a,{total:S,pageSize:20,current:a,showQuickJumper:!0,showTotal:function(e){return"\u0412\u0441\u0435\u0433\u043e ".concat(e," \u0437\u0430\u043a\u0430\u0437\u043e\u0432")},onChange:function(e){c(e)},simple:y.xs,size:y.lg?"default":"small"})]})]})},L=a(260),M=a(261),z=a(267),q=a(265),J=a(272),V=a(107),K=a(273),X=a.p+"static/media/Logo Icon.830257bf.svg",Q=a.p+"static/media/avatar.8845cada.png",W=(a(254),function(e){var t=e.setVisible,a=Object(h.a)();return Object(f.jsxs)(L.a,{className:"adminPageHeader",children:[Object(f.jsxs)(M.a,{xs:{span:15},md:{span:7},lg:{span:6},xl:{span:4},className:"adminPageCompany",children:[Object(f.jsx)(y.a,{className:"sideMenuButton",onClick:function(){return t(!0)},children:Object(f.jsx)(J.a,{})}),Object(f.jsx)("img",{src:X,alt:"logo",className:"logoImg"}),Object(f.jsx)("p",{className:"logoTitle",children:"Need For Drive"})]}),Object(f.jsx)(M.a,{className:"adminPageSearch",xs:{offset:3,span:3},md:{offset:11,span:2},lg:{offset:12},xl:{offset:17,span:1},children:Object(f.jsx)(V.a,{className:"searchIcon"})}),Object(f.jsx)(M.a,{xs:a.xs&&{offset:3,span:3},md:{span:2},xl:{span:1},className:"adminPageHeaderNotification",children:Object(f.jsx)(z.a,{count:2,size:"small",children:Object(f.jsx)(K.a,{className:"notificationIcon"})})}),Object(f.jsx)(M.a,{xs:{span:3},md:{span:2},xl:{span:1},className:"adminUserAccount",children:Object(f.jsx)(q.a,{src:Q})})]})}),G=function(){var e=Object(n.useState)(1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1];return Object(f.jsxs)(d.a,{children:[Object(f.jsx)(W,{setVisible:o}),Object(f.jsxs)(d.a,{children:[Object(f.jsx)(u.a,{title:"\u041c\u0435\u043d\u044e",placement:"left",onClose:function(){o(!1)},visible:i,children:Object(f.jsxs)(j.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},onSelect:function(e){c(Number(e.key)),o(!1)},children:[Object(f.jsx)(j.a.Item,{className:"sideMenuItem",icon:Object(f.jsx)(b.a,{}),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432"},"1"),Object(f.jsx)(j.a.Item,{className:"sideMenuItem",children:"option2"},"2"),Object(f.jsx)(j.a.Item,{className:"sideMenuItem",children:"option3"},"3"),Object(f.jsx)(j.a.Item,{className:"sideMenuItem",children:"option4"},"4")]})}),Object(f.jsx)(d.a,{className:"adminPageContainer",children:1===a&&Object(f.jsx)(H,{})})]})]})},Y=(a(255),a(269)),Z=a(264),$=a(275),ee=a(276),te="0123456789abcdefghijklmnopqrstuvwxyz",ae=A.a.create({baseURL:"https://api-factory.simbirsoft1.com/api",headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b","Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:function(){for(var e="";e.length<7;)e+=te[Math.floor(Math.random()*te.length)];return"Basic ".concat(window.btoa("".concat(e,":").concat("4cbcea96de")))}()}}),ne=function(e,t){var a={username:e,password:t};return ae.post("auth/login",a)},ce=function(e){return{type:"AUTH/SET_AUTH_DATA",payload:e}},re=function(e){return{type:"AUTH/SET_AUTH_STATUS",payload:e}},se=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth.authStatus}));return Object(f.jsx)("div",{className:"loginContainer",children:Object(f.jsxs)("div",{className:"loginContent",children:[Object(f.jsxs)(Y.b,{className:"loginHeader",size:"middle",children:[Object(f.jsx)("img",{className:"logo",src:X,alt:"logo"}),Object(f.jsx)("p",{className:"company",children:"Need For Drive"})]}),Object(f.jsxs)("div",{className:"loginCard",children:[Object(f.jsx)("p",{className:"loginTitle",children:"\u0412\u0445\u043e\u0434"}),Object(f.jsxs)(S.a,{name:"loginForm",onFinish:function(t){var a,n;e((a=t.username,n=t.password,function(){var e=Object(C.a)(T.a.mark((function e(t){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne(a,n);case 3:c=e.sent,sessionStorage.setItem("access_token",c.data.access_token),sessionStorage.setItem("refresh_token",c.data.refresh_token),t(ce(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(re(e.t0.response.status));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},initialValues:{remember:!0},children:[Object(f.jsx)(S.a.Item,{className:"formItem",name:"username",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}],validateStatus:401===t?"error":null,children:Object(f.jsx)(Z.a,{prefix:Object(f.jsx)($.a,{}),placeholder:"Username",allowClear:!0})}),Object(f.jsx)(S.a.Item,{className:"formItem",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}],validateStatus:401===t?"error":null,help:401===t?"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c":null,children:Object(f.jsx)(Z.a,{prefix:Object(f.jsx)(ee.a,{}),type:"password",placeholder:"Password",allowClear:!0})}),Object(f.jsxs)("div",{className:"loginCardFooter",children:[Object(f.jsx)("a",{children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"}),Object(f.jsx)(y.a,{type:"primary",htmlType:"submit",className:"submitButton",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})]})})},ie=function(e){var t=e.path,a=e.redirect,n=e.isAuth,c=e.children;return Object(f.jsx)(o.b,{path:t,render:function(){return n?c:Object(f.jsx)(o.a,{to:a})}})},oe=function(){var e=Object(i.c)((function(e){return e.auth.isAuth}));return Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(o.a,{to:"/admin"})}}),Object(f.jsx)(ie,{path:"/admin",redirect:"/login",isAuth:e,children:Object(f.jsx)(G,{})}),Object(f.jsx)(ie,{path:"/login",redirect:"/admin",isAuth:!e,children:Object(f.jsx)(se,{})})]})},le=a(109),de=a(147),ue={isAuth:!1,authStatus:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_AUTH_DATA":return Object(O.a)(Object(O.a)({},e),{},{isAuth:!0});case"AUTH/SET_AUTH_STATUS":return Object(O.a)(Object(O.a)({},e),{},{authStatus:t.payload});default:return e}},be={orders:[],totalCount:null,orderStatus:[],cities:[]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORDERS/SET_ORDERS_PORTION":return Object(O.a)(Object(O.a)({},e),{},{orders:t.payload});case"ORDERS/ORDERS_TOTAL_COUNT":return Object(O.a)(Object(O.a)({},e),{},{totalCount:t.payload});case"ORDERS/SET_ORDER_STATUS":return Object(O.a)(Object(O.a)({},e),{},{orderStatus:t.payload});case"ORDERS/SET_CITIES":return Object(O.a)(Object(O.a)({},e),{},{cities:t.payload});default:return e}},me=Object(le.b)({auth:je,orders:Oe}),he=Object(le.c)(me,Object(le.a)(de.a)),pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,277)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};r.a.render(Object(f.jsx)(i.a,{store:he,children:Object(f.jsx)(s.a,{children:Object(f.jsx)(oe,{})})}),document.getElementById("root")),pe()}},[[257,1,2]]]);
//# sourceMappingURL=main.a336342d.chunk.js.map