(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(35),s=n.n(a),o=(n(84),n(85),n(11)),i=n(10),l=n(7),u=n(6),d=n.n(u),j=n(4),b="GET_JWT_LOCAL_STORAGE",O="CLEAR_JWT_LOCAL_STORAGE",p="GET_JWT",h="CLEAR_JWT",f="FETCH_SESSION_START",g="FETCH_SESSION_SUCCESS",m="FETCH_SESSION_FAILURE",x="FETCH_SESSION",v=d.a.mark(w),_=d.a.mark(S),y="KEEP_SESSION";function w(e){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.c)({type:p});case 3:return e.next=5,Object(j.c)({type:x});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),v,null,[[0,7]])}function S(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(y,w);case 2:case"end":return e.stop()}}),_)}n(91),n(92),n(93);var E=n(18),N=n(157),C=(n(94),n(15)),k=n.n(C),T="FETCH_CONVERSATION",I="FETCH_CONVERSATION_START",A="FETCH_CONVERSATION_SUCCESS",L="FETCH_CONVERSATION_FAILURE",R="PUSH_CONVERSATION",M="MAKE_CONVERSATION",F=n(0);var U=function(e){var t=e.data,n=Object(l.c)((function(e){return e})),c=Object(l.b)(),a=Object(r.useState)(!1),s=Object(E.a)(a,2),o=s[0],u=s[1],d=Object(i.g)();return Object(r.useEffect)((function(){var e;0!==n.conversation.list.length&&o&&(e=t.id,n.conversation.list[0].contactedId===e)&&d.push("/chat/".concat(t.id))}),[n.conversation.list,o]),Object(F.jsxs)("div",{className:"search-result-item",children:[Object(F.jsx)("div",{className:"search-result-item__left",children:Object(F.jsx)("img",{src:t.img,alt:"Search result"})}),Object(F.jsxs)("div",{className:"search-result-item__center",children:[Object(F.jsx)("div",{className:"search-result-item__center__name",children:Object(F.jsx)("p",{children:"".concat(t.name)})}),Object(F.jsx)("div",{className:"search-result-item__center__content",children:Object(F.jsx)("div",{className:"search-result-item__center__content__info",children:Object(F.jsx)("p",{style:{minWidth:"150px",maxWidth:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.description})})})]}),Object(F.jsx)("div",{className:"search-result-item__right",children:Object(F.jsxs)("button",{onClick:function(){t.id!==n.session.user._id&&(u((function(e){return!e})),c({type:M,payload:{targetId:t.id}}))},children:[Object(F.jsx)(N.a,{}),"Message"]})})]})},H="SEARCH",P="SEARCH_START",D="SEARCH_SUCCESS",V="SEARCH_FAILURE";n(114);var G=function(e){var t=Object(l.c)((function(e){return e.searchResults})),n=Object(l.c)((function(e){return e.session})).user,c=Object(l.b)(),a=Object(i.i)().search;return Object(r.useEffect)((function(){c({type:H,payload:{search:a}})}),[a]),Object(F.jsxs)("div",{className:"search-result",children:[Object(F.jsx)("p",{children:"Search Result"}),t.data.map((function(e){return Object(F.jsx)(U,{data:{id:e._id,img:e.locals.image||"https://picsum.photos/100",name:e.locals.name,description:e.contact.includes(n)?"Friend":"Not in Contact"}},e._id)})),Object(F.jsx)("div",{className:"search-result__see-more",children:Object(F.jsx)(o.b,{to:"/",children:Object(F.jsx)("button",{children:"Back Home"})})})]})};n(115);var W=function(e){var t=Object(r.useState)(""),n=Object(E.a)(t,2),c=n[0],a=n[1],s=(new URLSearchParams(Object(i.h)().search),Object(i.j)()),l=(s.path,s.url);return Object(F.jsxs)("div",{className:"search-conversation",children:[Object(F.jsx)("input",{type:"text",placeholder:"Find new friends...",onKeyUp:function(e){13===e.keyCode&&""!==e.target.value&&console.log(e.target.value)},onChange:function(e){return a(e.target.value)}}),Object(F.jsx)(o.b,{to:"".concat(l,"search/").concat(c),children:Object(F.jsx)("button",{children:"Search"})})]})},B=n(158);var K=function(e){var t=Object(l.c)((function(e){return e.session.user})),n=Object(l.c)((function(e){return e.jwt})),c=Object(i.g)(),a=Object(l.b)();return Object(r.useEffect)((function(){console.log("user"),console.log(t),n.token||c.push("/login")}),[n]),Object(F.jsxs)("div",{className:"nav-account",children:[Object(F.jsxs)("div",{className:"nav-account__user",children:[Object(F.jsx)("img",{src:t.image,alt:"Avatar user"}),Object(F.jsx)("p",{children:"Ch\xe0o ".concat(t.name,"!")}),Object(F.jsx)("button",{onClick:function(){a({type:h})},children:" Logout"}),Object(F.jsx)(B.a,{className:"nav-account__user__icon-close",onClick:function(){return e.setShouldShowMenu((function(e){return!e}))}})]}),Object(F.jsx)(W,{})]})},z=n(77),J=n.n(z);n(118);var Z=function(e){var t=e.data;return Object(F.jsx)(o.c,{exact:!0,to:"/chat/".concat(t.contactedId),style:{textDecoration:"none",color:"inherit"},activeStyle:{backgroundColor:"#3a3b3c"},children:Object(F.jsxs)("div",{className:"user-item",children:[Object(F.jsx)("div",{className:"user-item__left",children:Object(F.jsx)("img",{src:"https://picsum.photos/200",alt:""})}),Object(F.jsxs)("div",{className:"user-item__center",children:[Object(F.jsx)("div",{className:"user-item__center__name",children:Object(F.jsx)("p",{children:"".concat(t.name)})}),Object(F.jsxs)("div",{className:"user-item__center__content",children:[Object(F.jsx)("div",{className:"user-item__center__content__msg",children:Object(F.jsx)("p",{style:{minWidth:"150px",maxWidth:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.lastedMessage})}),Object(F.jsx)("div",{className:"user-item__center__content__time",children:t.lastedTime&&Object(F.jsx)(J.a,{style:{color:"gray"},fromNow:!0,children:new Date(t.lastedTime)})})]})]}),Object(F.jsx)("div",{className:"user-item__right",children:Object(F.jsx)("img",{src:"https://picsum.photos/200",alt:""})})]})})};n(119);var q=function(e){var t=Object(l.b)(),n=e.setShouldShowMenu,c=Object(l.c)((function(e){return e.conversation.list}));return Object(r.useEffect)((function(){t({type:T})}),[]),Object(F.jsx)("div",{className:"user-list",style:{height:"calc(100vh - 128px)"},onClick:function(){return void 0!==n?n((function(e){return!e})):void 0},children:c.map((function(e,t){return Object(F.jsx)(Z,{id:t,data:e},t)}))})};var Y=function(e){var t=e.style,n=e.setShouldShowMenu;return Object(F.jsxs)("div",{className:"left-nav",style:t,children:[Object(F.jsx)(K,{setShouldShowMenu:n}),Object(F.jsx)(q,{setShouldShowMenu:n})]})},$="FETCH_MESSAGES_START",Q="FETCH_MESSAGES_SUCCESS",X="FETCH_MESSAGES_FAILURE",ee="FETCH_MESSAGES",te="ADD_ONE_NEW_MESSAGE_SUCCESS",ne="ADD_ONE_NEW_MESSAGE_FAILURE",re="SEND_MESSAGE",ce=n(159),ae=n(3);n(120);var se=function(e){return Object(F.jsxs)("div",Object(ae.a)(Object(ae.a)({},e),{},{className:"message",children:[Object(F.jsx)("div",{className:"message__content",children:e.content}),Object(F.jsx)("div",{className:"message__time",children:e.time.toUTCString()})]}))};n(121);var oe=function(e){var t=e.shouldShowMenu,n=e.setShouldShowMenu,c=Object(i.i)().targetId,a=Object(l.c)((function(e){return e.currentMessages})),s=Object(l.c)((function(e){return e.session})),o=Object(l.c)((function(e){return e.conversation.list})).filter((function(e){return e.contactedId===c})),u=Object(l.b)(),d=Object(r.useState)(""),j=Object(E.a)(d,2),b=j[0],O=j[1];console.log("url: ",c);var p=Object(r.useRef)(null),h=Object(r.useRef)(null);return Object(r.useEffect)((function(){console.log("last log after send mess");!function(e){var t=h.current.scrollHeight;h.current.scrollTo(0,t)}(),O("")}),[a.messages]),Object(r.useEffect)((function(){u({type:ee,payload:{senderId:s.user._id,receiverId:c}});var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||p.current.click()};return document.addEventListener("keyup",e),console.log(o),function(){document.removeEventListener("keyup",e)}}),[c]),Object(F.jsxs)("div",{className:"chat-main",children:[Object(F.jsxs)("div",{className:"chat-main__header",children:[Object(F.jsx)("div",{className:"chat-main__header__avatar",children:Object(F.jsx)("img",{src:"https://picsum.photos/200",alt:""})}),Object(F.jsx)("div",{className:"chat-main__header__name",children:Object(F.jsx)("p",{children:"To ".concat(o[0].name)})}),!t&&Object(F.jsx)(ce.a,{style:{zIndex:99},className:"chat-main__header__icon-close",onClick:function(){return n((function(e){return console.log(e),!e}))}})]}),Object(F.jsx)("div",{className:"chat-main__content",style:{height:"calc(100vh - 122px)"},ref:h,children:a.messages.map((function(e){return Object(F.jsx)(se,{style:{alignSelf:e.senderId===s.user._id?"flex-end":"flex-start"},content:e.content,time:new Date(Date.parse(e.sentTime))},e._id)}))}),Object(F.jsxs)("div",{className:"chat-main__feature",children:[Object(F.jsx)("input",{type:"text",placeholder:"Type the messages here...",value:b,onChange:function(e){return O(e.target.value)}}),Object(F.jsx)("button",{ref:p,onClick:function(){b&&u({type:re,payload:{receiverId:c,content:b}})},children:"Send"})]})]})};n(122);var ie=function(e){return Object(F.jsxs)("div",{className:"profile",children:[Object(F.jsx)("div",{className:"profile-background-img",children:Object(F.jsx)("img",{src:"https://picsum.photos/200",alt:"backgroung-img"})}),Object(F.jsxs)("div",{className:"profile-front",children:[Object(F.jsx)("div",{className:"profile-front-img",children:Object(F.jsx)("img",{src:"https://picsum.photos/200",alt:"profile-img"})}),Object(F.jsxs)("div",{className:"profile-front-info",children:[Object(F.jsx)("div",{className:"profile-front-info-name",children:Object(F.jsx)("h1",{children:"Name of User"})}),Object(F.jsx)("div",{className:"profile-front-info-action",children:Object(F.jsx)("a",{href:"/chat/0",children:Object(F.jsx)("button",{children:"Message"})})})]})]})]})};n(123);var le=function(e){var t=Object(r.useState)(!1),n=Object(E.a)(t,2),c=n[0],a=n[1];return Object(F.jsxs)("div",{className:"right-main",children:[Object(F.jsx)("div",{className:"right-main__menu-mobile",children:c&&Object(F.jsx)(Y,{style:{display:"block"},setShouldShowMenu:a,shouldShowMenu:c})}),Object(F.jsxs)(i.d,{children:[Object(F.jsx)(i.b,{path:"/chat/:targetId",children:Object(F.jsx)(oe,{shouldShowMenu:c,setShouldShowMenu:a})}),Object(F.jsx)(i.b,{exact:!0,path:"/user",children:Object(F.jsx)(ie,{})}),Object(F.jsx)(i.b,{path:"/search/:search",children:Object(F.jsx)(G,{})}),Object(F.jsx)(i.b,{exact:!0,path:"/",children:Object(F.jsx)("p",{children:"Wellcome"})})]})]})};var ue=function(e){return Object(F.jsxs)("div",{className:"main",children:[Object(F.jsx)(Y,{}),Object(F.jsx)(le,{})]})},de="LOGIN",je="LOGIN_START",be="LOGIN_SUCCESS",Oe="LOGIN_FAILURE";n(124);var pe=function(e){var t=Object(l.b)(),n=function(e){var n=b.username,r=b.password;13===e.keyCode&&n&&r&&t({type:de,payload:b})},c=Object(l.c)((function(e){return{login:e.login,jwt:e.jwt,session:e.session}})),a=c.login,s=c.jwt,u=c.session,d=Object(r.useState)({username:"",password:""}),j=Object(E.a)(d,2),b=j[0],O=j[1],p=Object(i.g)();return Object(r.useEffect)((function(){null!==s.token&&null!==u.user&&p.push("/")}),[s.token,u.user]),Object(F.jsxs)("div",{className:"login-page",children:[Object(F.jsx)("div",{className:"login-page__header",children:Object(F.jsx)("h1",{children:"The best chat app in Viet Nam"})}),Object(F.jsx)("div",{className:"login-page__body",children:Object(F.jsxs)("div",{className:"login-form",children:[Object(F.jsx)("div",{className:"login-form__title",children:Object(F.jsx)("h2",{children:"Login now!"})}),Object(F.jsx)("div",{className:"login-form__alert",children:a.errors.map((function(e,t){return Object(F.jsx)("p",{children:e.message},t)}))}),Object(F.jsxs)("div",{className:"login-form__body",children:[Object(F.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return O(Object(ae.a)(Object(ae.a)({},b),{},{username:e.target.value}))},onKeyUp:n}),Object(F.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return O(Object(ae.a)(Object(ae.a)({},b),{},{password:e.target.value}))},onKeyUp:n}),Object(F.jsx)("button",{disabled:a.isLoading,onClick:function(){console.log(b),t({type:de,payload:b})},children:"Login"})]}),Object(F.jsx)("div",{className:"login-form__footer",children:Object(F.jsx)(o.b,{style:{textDecoration:"none",color:"#0096C7"},to:"/register",children:"Have no account?"})})]})}),Object(F.jsx)("div",{className:"login-page__footer",children:Object(F.jsx)("p",{children:"Developed by Le Anh Hao, Tran Bao Long, Nguyen Thuong Hai"})})]})},he=n(39);var fe=function(e){var t=e.component,n=Object(he.a)(e,["component"]),r=Object(l.c)((function(e){return{jwt:e.jwt,session:e.session}})),c=r.jwt,a=r.session;return console.log("private route log: ",c,a),Object(F.jsx)(i.b,Object(ae.a)(Object(ae.a)({},n),{},{children:null!==c.token&&null!==a.user?Object(F.jsx)(t,{}):Object(F.jsx)(i.a,{to:"/login"})}))};var ge=function(e){var t=e.component,n=Object(he.a)(e,["component"]),r=Object(l.c)((function(e){return{jwt:e.jwt,session:e.session}})),c=r.jwt,a=r.session;return console.log("public route log: ",c,a),Object(F.jsx)(i.b,Object(ae.a)(Object(ae.a)({},n),{},{children:null!==c.token&&null!==a.user?Object(F.jsx)(i.a,{to:"/"}):Object(F.jsx)(t,{})}))},me=n(78),xe="REGISTER",ve="REGISTER_START",_e="REGISTER_SUCCESS",ye="REGISTER_FAILURE";n(125);var we=function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.register})),c=Object(r.useState)({name:"",email:"",phone:"",username:"",password:"",confirmPassword:"",img:null,selectedImg:null,previewImg:"",error:null}),a=Object(E.a)(c,2),s=a[0],i=a[1],u=function(){var e="",t=s.name,n=s.email,r=s.phone,c=s.img,a=s.selectedImg,o=s.username,l=s.password,u=s.confirmPassword;if(""===t)e="Vui l\xf2ng nh\u1eadp t\xean";else if(""===r)e="Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i";else if(isNaN(r)&&""!==r)e="Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i h\u1ee3p l\u1ec7";else if(!isNaN(r)&&r.length<=8||r.length>12)e="Vui l\xf2ng nh\u1eadp \u0111\xfang s\u1ed1 \u0111i\u1ec7n tho\u1ea1i";else if(""===n)e="Vui l\xf2ng nh\u1eadp email";else if(function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(n))if(c||a)if(""===o)e="Vui l\xf2ng nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp";else if(""===l)e="Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u";else if(""===u)e="Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u x\xe1c nh\u1eadn";else{if(l==u)return e="",i((function(e){return Object(ae.a)(Object(ae.a)({},e),{},{error:null})})),!0;e="Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u tr\xf9ng m\u1edbi m\u1eadt kh\u1ea9u x\xe1c nh\u1eadn"}else e="Vui l\xf2ng ch\u1ecdn \u1ea3nh \u0111\u1ea1i di\u1ec7n";else e="Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecbnh d\u1ea1ng email";if(""!==e)return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{error:e})})),!1};Object(r.useEffect)((function(){console.log(s.confirmPassword),console.log(s.error)}),[s]);var j=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){i((function(e){return Object(ae.a)(Object(ae.a)({},e),{},{previewImg:t.result})}))}};return Object(F.jsxs)("div",{className:"register-page",children:[Object(F.jsx)("div",{className:"register-page__header",children:Object(F.jsx)("h1",{children:"The best chat app in Viet Nam"})}),Object(F.jsx)("div",{className:"register-page__body",children:Object(F.jsxs)("div",{className:"register-form",children:[Object(F.jsx)("div",{className:"register-form__title",children:Object(F.jsx)("h2",{children:"You're new here!"})}),Object(F.jsxs)("div",{className:"register-form__alert",children:[n.errors.map((function(e,t){return Object(F.jsx)("p",{children:e.message},t)})),null!==s.error&&Object(F.jsxs)("p",{children:[" ",s.error]})]}),Object(F.jsx)("div",{className:"register-form__announce",children:null===s.error&&n.finnish&&Object(F.jsx)("p",{children:" \u0110\u0103ng k\xed th\xe0nh c\xf4ng"})}),Object(F.jsx)("div",{className:"register-form__body",children:Object(F.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(F.jsxs)("div",{className:"register-form__body--rows",children:[Object(F.jsx)("input",{type:"text",placeholder:"Name",onChange:function(e){return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{name:e.target.value})}))}}),Object(F.jsx)("input",{type:"text",placeholder:"Phone number",onChange:function(e){return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{phone:e.target.value})}))}})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("input",{type:"text",placeholder:"Email",onChange:function(e){return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{email:e.target.value})}))}}),Object(F.jsx)("input",{id:"fileInput",type:"file",name:"image",onChange:function(e){var t=e.target.files[0];j(t),i((function(n){return Object(ae.a)(Object(ae.a)({},n),{},{selectedImg:t,img:e.target.value})}))},value:s.img,className:"register-form__body__img-uploader"}),s.previewImg&&Object(F.jsx)("img",{className:"register-form__body__img-uploader__img",src:s.previewImg,alt:"Preview",style:{height:"250px",margin:"0 auto 20px auto"}})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{username:e.target.value})}))}}),Object(F.jsxs)("div",{className:"register-form__body--rows",children:[Object(F.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{password:e.target.value})}))}}),Object(F.jsx)("input",{type:"password",placeholder:"Confirm Password",onChange:function(e){return i((function(t){return Object(ae.a)(Object(ae.a)({},t),{},{confirmPassword:e.target.value})}))}})]})]}),Object(F.jsx)("button",{type:"submit",disabled:n.isLoading,onClick:Object(me.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u()&&((n=new FormData).append("file",s.selectedImg),n.append("name",s.name),n.append("email",s.email),n.append("phone",s.phone),n.append("username",s.username),n.append("password",s.password),t({type:xe,payload:n}));case 2:case"end":return e.stop()}}),e)}))),children:"Register"})]})}),Object(F.jsx)("div",{className:"register-form__footer",children:Object(F.jsx)(o.b,{style:{textDecoration:"none",color:"#0096C7"},to:"/login",children:"Already have an account?"})})]})}),Object(F.jsx)("div",{className:"register-page__footer",children:Object(F.jsx)("p",{children:"Developed by Le Anh Hao, Tran Bao Long, Nguyen Thuong Hai"})})]})};var Se=function(){var e=Object(l.c)((function(e){return e.jwt})),t=Object(l.c)((function(e){return e.session})),n=Object(l.b)();return Object(r.useEffect)((function(){n({type:y})}),[n]),Object(r.useEffect)((function(){console.log("re-render"),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"http://localhost",REACT_APP_CLIENT_URL:"http://localhost:3000",REACT_APP_SERVER_URL:"http://localhost:4000"})),console.log(e),console.log(t)})),Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(o.a,{children:Object(F.jsxs)(i.d,{children:[Object(F.jsx)(ge,{exact:!0,path:"/login",component:pe}),Object(F.jsx)(ge,{exact:!0,path:"/register",component:we}),Object(F.jsx)(fe,{path:"/",component:ue})]})})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},Ne=n(25),Ce=n(79),ke={token:null},Te={user:null,error:null},Ie={isLoading:!1,errors:[]},Ae={isLoading:!1,finnish:!1,errors:[]},Le=n(13),Re={isLoading:!1,receiverId:null,messages:[],error:null,skip:0,limit:100},Me={list:[],isLoading:!1,error:null},Fe={isLoading:!1,data:[],error:null},Ue=d.a.mark(De),He=d.a.mark(Ve),Pe=d.a.mark(Ge);function De(e){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)({context:localStorage,fn:localStorage.getItem},"ACCESS_TOKEN");case 2:return t=e.sent,console.log(t),e.next=6,Object(j.c)({type:b,payload:t});case 6:case"end":return e.stop()}}),Ue)}function Ve(e){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)({context:localStorage,fn:localStorage.removeItem},"ACCESS_TOKEN");case 2:return e.next=4,Object(j.c)({type:O});case 4:case"end":return e.stop()}}),He)}function Ge(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(p,De);case 2:return e.next=4,Object(j.e)(h,Ve);case 4:case"end":return e.stop()}}),Pe)}var We=n(46),Be="INIT_SOCKET",Ke=null,ze=d.a.mark(Ze),Je=d.a.mark(qe);function Ze(e){var t,n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.d)((function(e){return e.jwt.token}));case 3:return t=e.sent,console.log("saga log: ",t),e.next=7,Object(j.c)({type:f});case 7:return e.next=9,k.a.get("/users/token/".concat(t),{headers:{Authorization:"Bearer ".concat(t)}});case 9:if(n=e.sent,console.log(n),r=n.data,c=r.user,a=r.error,!c){e.next=18;break}return{auth:{userId:c._id}},e.next=16,Object(j.c)({type:g,payload:c});case 16:return e.next=18,Object(j.c)({type:Be});case 18:if(!a){e.next=20;break}throw new Error(a.message);case 20:e.next=27;break;case 22:return e.prev=22,e.t0=e.catch(0),console.log(e.t0.message),e.next=27,Object(j.c)({type:m,payload:e.t0});case 27:case"end":return e.stop()}}),ze,null,[[0,22]])}function qe(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(x,Ze);case 2:case"end":return e.stop()}}),Je)}var Ye=d.a.mark(Qe),$e=d.a.mark(Xe);function Qe(e){var t,n,r,c,a,s,o;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,console.log("run login"),i.next=4,Object(j.c)({type:h});case 4:if(t=e.payload,n=t.username,r=t.password,n&&r){i.next=7;break}throw new Error("Username and Password are required!");case 7:return i.next=9,Object(j.c)({type:je});case 9:return i.next=11,k.a.post("/auths/login",{username:n,password:r});case 11:return c=i.sent,i.next=14,console.log(c);case 14:if(a=c.data,s=a.accessToken,o=a.error,!s){i.next=22;break}return i.next=18,Object(j.b)({context:localStorage,fn:localStorage.setItem},"ACCESS_TOKEN",s);case 18:return i.next=20,Object(j.c)({type:y});case 20:return i.next=22,Object(j.c)({type:be});case 22:if(!o){i.next=24;break}throw new Error(o);case 24:i.next=33;break;case 26:return i.prev=26,i.t0=i.catch(0),console.log(i.t0),i.next=31,Object(j.c)({type:y});case 31:return i.next=33,Object(j.c)({type:Oe,payload:i.t0});case 33:case"end":return i.stop()}}),Ye,null,[[0,26]])}function Xe(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(de,Qe);case 2:case"end":return e.stop()}}),$e)}var et=d.a.mark(nt),tt=d.a.mark(rt);function nt(e){var t,n,r,c,a;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,console.log("run register"),t=e.payload,console.log(t.get("file")),s.next=6,Object(j.c)({type:ve});case 6:return s.next=8,k()({method:"post",url:"/auths/register",data:t,headers:{"Content-Type":"multipart/form-data"}});case 8:if(void 0===(n=s.sent).data.data){s.next=19;break}return r=n.data.data.locals,c=r.username,a=r.password,s.next=13,Object(j.c)({type:_e});case 13:return s.next=15,Object(j.c)({type:de,payload:{username:c,password:a}});case 15:return s.next=17,Object(j.c)({type:be});case 17:s.next=20;break;case 19:throw new Error("There is an existing account");case 20:s.next=27;break;case 22:return s.prev=22,s.t0=s.catch(0),console.log(s.t0.message),s.next=27,Object(j.c)({type:ye,payload:s.t0});case 27:case"end":return s.stop()}}),et,null,[[0,22]])}function rt(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(xe,nt);case 2:case"end":return e.stop()}}),tt)}var ct=d.a.mark(st),at=d.a.mark(ot);function st(e){var t,n,r,c,a,s,o;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,console.log(e.payload),i.next=4,Object(j.c)({type:$,payload:Object(ae.a)({},e.payload)});case 4:return i.next=6,Object(j.d)((function(e){return e.currentMessages}));case 6:return t=i.sent,console.log("after start: ",t),i.next=10,Object(j.d)((function(e){return e.jwt.token}));case 10:return n=i.sent,r={headers:{Authorization:"Bearer ".concat(n)}},console.log(e),i.next=15,k.a.post("/messages/get",e.payload,r);case 15:if(c=i.sent,a=c.data,s=a.messages,o=a.error,console.log("fetch ook: ",s),!s){i.next=21;break}return i.next=21,Object(j.c)({type:Q,payload:Object(ae.a)(Object(ae.a)({},e.payload),{},{newMessages:c.data.messages})});case 21:if(!o){i.next=23;break}throw new Error(o);case 23:i.next=28;break;case 25:i.prev=25,i.t0=i.catch(0),Object(j.c)({type:X,payload:Object(ae.a)(Object(ae.a)({},e.payload),{},{error:i.t0})});case 28:case"end":return i.stop()}}),ct,null,[[0,25]])}function ot(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(ee,st);case 2:case"end":return e.stop()}}),at)}var it=d.a.mark(ut),lt=d.a.mark(dt);function ut(e){var t,n,r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.c)({type:I});case 3:return e.next=5,Object(j.d)((function(e){return e.session.user._id}));case 5:return t=e.sent,e.next=8,Object(j.d)((function(e){return e.jwt.token}));case 8:return n=e.sent,r={headers:{Authorization:"Bearer ".concat(n)}},e.next=12,k.a.post("/conversation/get-list",{userId:t},r);case 12:return c=e.sent,a=c.data.conversationList,console.log(a),e.next=17,Object(j.c)({type:A,payload:{conversationList:a}});case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(0),e.next=23,Object(j.c)({type:L,payload:{error:e.t0}});case 23:case"end":return e.stop()}}),it,null,[[0,19]])}function dt(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(T,ut);case 2:case"end":return e.stop()}}),lt)}var jt=d.a.mark(Ot),bt=d.a.mark(pt);function Ot(e){var t,n,r,c,a;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,console.log("run search"),[t=e.payload.search].every(Boolean)){s.next=5;break}throw new Error("Please fill all fields");case 5:return s.next=7,Object(j.c)({type:P});case 7:return s.next=9,Object(j.d)((function(e){return e.session.user._id}));case 9:return n=s.sent,s.next=12,Object(j.d)((function(e){return e.jwt.token}));case 12:return r=s.sent,c={headers:{Authorization:"Bearer ".concat(r)}},s.next=16,k.a.post("/users/search",{search:t,userId:n},c);case 16:if(a=s.sent,console.log("Search ".concat(t)),!a.data.users){s.next=21;break}return s.next=21,Object(j.c)({type:D,payload:{searchResults:a.data.users}});case 21:if(!a.data.error){s.next=23;break}throw new Error(a.data.error);case 23:s.next=30;break;case 25:return s.prev=25,s.t0=s.catch(0),console.log(s.t0),s.next=30,Object(j.c)({type:V,payload:{error:s.t0}});case 30:case"end":return s.stop()}}),jt,null,[[0,25]])}function pt(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(H,Ot);case 2:case"end":return e.stop()}}),bt)}var ht=d.a.mark(ft);function ft(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([Ge(),qe(),S(),Xe(),rt(),ot(),dt(),pt()]);case 2:case"end":return e.stop()}}),ht)}var gt=Object(Ce.a)(),mt=Object(Ne.c)({jwt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case b:return Object(ae.a)(Object(ae.a)({},e),{},{token:n});case O:return ke;default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(ae.a)(Object(ae.a)({},e),{},{user:null,error:null});case g:return Object(ae.a)(Object(ae.a)({},e),{},{user:t.payload,error:null});case m:return Object(ae.a)(Object(ae.a)({},e),{},{error:t.payload,user:null});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case je:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!0,errors:[]});case be:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,errors:[]});case Oe:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,errors:[n]});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case ve:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!0,errors:[]});case _e:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,finnish:!0,errors:[]});case ye:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,errors:[n]});default:return e}},currentMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:var n=e.receiverId===t.payload.receiverId?Object(Le.a)(e.messages):[],r=e.receiverId===t.payload.receiverId?e.skip:0;return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!0,error:null,receiverId:t.payload.receiverId,messages:n,skip:r});case Q:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,error:null,skip:e.skip+t.payload.newMessages.length,messages:[].concat(Object(Le.a)(e.messages),Object(Le.a)(t.payload.newMessages))});case X:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,error:t.payload.error});case te:return console.log("called"),Object(ae.a)(Object(ae.a)({},e),{},{messages:[].concat(Object(Le.a)(e.messages),Object(Le.a)(t.payload.newMessages)),skip:e.skip+1,error:null});case ne:return console.log("called"),Object(ae.a)(Object(ae.a)({},e),{},{error:t.payload.error});default:return e}},conversation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!0,error:null});case A:var n=Object(Le.a)(t.payload.conversationList);return n.sort((function(e,t){return t.lastedTime-e.lastedTime})),Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,error:null,list:Object(Le.a)(n)});case L:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,error:t.payload.error});case R:console.log("called");var r=t.payload.newMessage,c=e.list;if(void 0===r.newFriend){var a=[];for(var s in c)c[s].contactedId!==r.senderId&&c[s].contactedId!==r.receiverId||(console.log("found: ",s,c[s]),a.push([s,c[s]]));if(a.length>0){console.log(a[0][0]),console.log(a[0][1]);var o=a[0][0];a[0][1];return c.splice(o,1),c.unshift({name:a[0][1].name,contactedId:a[0][1].contactedId,lastedMessage:r.content,lastedTime:r.sentTime}),console.log(">0"),Object(ae.a)(Object(ae.a)({},e),{},{list:Object(Le.a)(c)})}return console.log(r),Object(ae.a)(Object(ae.a)({},e),{},{list:[r].concat(Object(Le.a)(e.list))})}return console.log("newFriend"),console.log(r),Object(ae.a)(Object(ae.a)({},e),{},{list:[r].concat(Object(Le.a)(e.list))});default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case P:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!0,error:null});case D:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,error:null,data:Object(Le.a)(n.searchResults)});case V:return Object(ae.a)(Object(ae.a)({},e),{},{isLoading:!1,error:n.error});default:return e}}}),xt=Object(Ne.e)(mt,Object(Ne.a)((function(e){return function(t){return function(n){var r=e.getState().session.user;if(n.type===Be){var c={auth:{userId:r._id}};(Ke=Object(We.io)("http://localhost:4000",c)).on("test",(function(e){console.log("server send: ",e)})),Ke.on("server-make-conversation",(function(t){var n,c=t.user1,a=t.user2;n=c._id===r._id?a:c,console.log(n),e.dispatch({type:R,payload:{newMessage:{name:n.locals.name,contactedId:n._id,receiverId:n._id,lastedMessage:"",lastedTime:Date().now}}})})),Ke.on("server-send-message",(function(t){console.log("server send this: ",t);var n=t.message,r=t.error;n&&(console.log("rece"),e.dispatch({type:te,payload:{newMessages:[n]}}),e.dispatch({type:R,payload:{newMessage:n}})),r&&e.dispatch({type:ne,payload:{error:r}}),console.log(e.getState())}))}else if(n.type===re){var a=n.payload,s=a.receiverId,o=a.content;console.log("you send message - wait for server response!"),Ke.emit("client-send-message",{senderId:r._id,receiverId:s,content:o})}else{if(n.type!==M)return t(n);Ke.emit("client-make-conversation",{userId:r._id,targetId:n.payload.targetId})}}}}),gt));gt.run(ft);var vt=xt;s.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(l.a,{store:vt,children:Object(F.jsx)(Se,{})})}),document.getElementById("root")),Ee()},84:function(e,t,n){},85:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.c5f82e22.chunk.js.map