(this["webpackJsonpproject-driver"]=this["webpackJsonpproject-driver"]||[]).push([[4],{693:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n}));var r=function(e,t){return function(a,r,n){(0,n.getFirebase)().firestore().collection("comments").add({name:t.userName,surname:t.userSurname,comment:e,date:new Date}).then((function(){return a({type:"COMMENT_SEND_SUCCES"})})).catch((function(e){return a({type:"COMMENT_SEND_FAIL",err:e})}))}},n=function(e,t,a){return function(r,n,m){(0,m.getFirebase)().firestore().collection("comments").doc(a).collection("replies").add({name:t.userName,surname:t.userSurname,reply:e,date:new Date}).then((function(){return r({type:"REPLY_SEND_SUCCES"})})).catch((function(e){return r({type:"REPLY_SEND_FAIL",err:e})}))}}},696:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),m=a.n(n),o=a(4),c=a(25),l=a(32),s=a(19),u=a(18),i=a(693),f=a(43),d=a.n(f),p=a(694),_=a.n(p);var E=Object(c.d)(Object(o.b)((function(e,t){return{commentReplies:e.firestore.ordered["replies-".concat(t.id)],userName:e.firebase.profile.name,userSurname:e.firebase.profile.surname,commentId:t.id,forumError:e.forumReducer.forumError,fbauth:e.firebase.auth}}),(function(e){return{sendReply:function(t,a,r){return e(Object(i.b)(t,a,r))}}})),Object(l.firestoreConnect)((function(e){return[{collection:"comments",doc:e.id,subcollections:[{collection:"replies"}],storeAs:"replies-".concat(e.id),orderBy:["date","asc"]}]})))((function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),o=a[0],c=a[1];return e.forumError&&console.log(e.forumError),m.a.createElement(m.a.Fragment,null,m.a.createElement("ul",null,e.commentReplies?e.commentReplies.length>0?e.commentReplies.map((function(e){return m.a.createElement("li",{key:e.id,className:"forum_reply"},m.a.createElement("p",{className:"forum_reply_name"},e.name," ",e.surname),m.a.createElement("p",{className:"forum_reply_text"},e.reply),m.a.createElement("p",{className:"forum_reply_date"},_()(e.date.toDate()).calendar()))})):m.a.createElement("p",{className:"noreplies_info"},"Nikt jeszcze nie odpowiedzia\u0142 na ten post. B\u0105d\u017a pierwszy!"):m.a.createElement(d.a,{type:"Circles",color:"#5365ff",height:30})),e.fbauth.uid?m.a.createElement("form",{className:"reply_form"},m.a.createElement("label",{className:"reply_form_label"},"Odpowiedz:",m.a.createElement("textarea",{onChange:function(e){c(e.target.value)},type:"text",name:"name",value:o,className:"reply_form_textarea"})),m.a.createElement("input",{onClick:function(t){t.preventDefault(),c("");var a={userName:e.userName,userSurname:e.userSurname};(null===o||void 0===o?void 0:o.length)>0&&e.userName&&e.commentId&&e.sendReply(o,a,e.commentId)},type:"submit",value:"Wy\u015blij",className:"reply_form_submit"})):m.a.createElement("p",{className:"reply_form_info"},"Aby m\xf3c odpowiada\u0107 na posty - musisz si\u0119 zalogowa\u0107."))}));function b(e){var t=e.comment,a=e.name,o=e.surname,c=e.date,l=e.id,s=Object(n.useState)(!0),u=Object(r.a)(s,2),i=u[0],f=u[1],d=function(e){e.preventDefault(),f(!i)};return m.a.createElement("div",{className:"forum_comment"},m.a.createElement("p",{className:"forum_comment_name"},a," ",o),m.a.createElement("p",{className:"forum_comment_text"},t),m.a.createElement("p",{className:"forum_comment_date"},_()(c.toDate()).calendar()),m.a.createElement("div",{className:"forum_comment_bottom_section"},i?m.a.createElement("button",{className:"forum_comment_btn-unwrap",onClick:d},"Poka\u017c komentarze..."):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"forum_comment_reply_section"},m.a.createElement("p",{className:"forum_comment_reply_section_title"},"Odpowiedzi:"),m.a.createElement(E,{id:l})),m.a.createElement("button",{className:"forum_comment_btn-wrap",onClick:d},"Ukryj komentarze"))))}t.default=Object(c.d)(Object(o.b)((function(e){return{comments:e.firestore.ordered.comments,userName:e.firebase.profile.name,userSurname:e.firebase.profile.surname,forumError:e.forumReducer.forumError,fbauth:e.firebase.auth}}),(function(e){return{sendComment:function(t,a){return e(Object(i.a)(t,a))}}})),Object(l.firestoreConnect)([{collection:"comments",orderBy:["date","desc"]}]))((function(e){var t,a=Object(n.useState)(),o=Object(r.a)(a,2),c=o[0],l=o[1];return e.forumError&&console.log(e.forumError),m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,null),m.a.createElement("div",{className:"forum_container"},m.a.createElement("h1",{className:"forum_title"},"Witaj na forum. ",m.a.createElement("br",null)," Nie kr\u0119puj si\u0119 i pytaj o wszystko!"),e.fbauth.uid?m.a.createElement("form",{className:"forum_form"},m.a.createElement("label",{className:"forum_form_label"},"Dodaj post:",m.a.createElement("textarea",{onChange:function(e){l(e.target.value)},type:"text",name:"name",value:c,className:"forum_form_textarea"})),m.a.createElement("input",{onClick:function(t){t.preventDefault(),l("");var a={userName:e.userName,userSurname:e.userSurname};(null===c||void 0===c?void 0:c.length)>0&&e.userName&&e.userSurname&&e.sendComment(c,a),window.scrollTo(0,350)},type:"submit",value:"Dodaj",className:"forum_form_submit"})):m.a.createElement("p",{className:"forum_form_info"},"Aby m\xf3c dodawa\u0107 posty - musisz si\u0119 zalogowa\u0107."),e.comments?(null===(t=e.comments)||void 0===t?void 0:t.length)>0?m.a.createElement("ul",{className:"forum_posts_container"},e.comments.map((function(e){return m.a.createElement("li",{key:e.id},m.a.createElement(b,{comment:e.comment,name:e.name,surname:e.surname,date:e.date,id:e.id}))}))):m.a.createElement("p",{className:"nocomments_info"}," Na forum nie ma jeszcze \u017cadnych post\xf3w."):m.a.createElement("div",{className:"forum_loader"},m.a.createElement(d.a,{type:"Circles",color:"#5365ff",height:80}))),m.a.createElement(u.a,null))}))}}]);
//# sourceMappingURL=4.e5c2b29d.chunk.js.map