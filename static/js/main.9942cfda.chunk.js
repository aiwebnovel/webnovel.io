(this["webpackJsonpvelog-clone"]=this["webpackJsonpvelog-clone"]||[]).push([[0],{46:function(t,e,s){},68:function(t,e,s){},72:function(t,e,s){},74:function(t,e,s){},77:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),i=s(37),o=s.n(i),c=(s(46),s(23)),r=s(12),l=s(13),u=s(15),A=s(14),h=s(3),d=s(19),p=s.n(d),j=s(24),g=s(6),O=s(18),b=s.n(O),C=s(38),x=s(25),v=(s(66),{apiKey:"AIzaSyDa7N9IBIGCSsDHHWzF8OjDvy1YZ9LszbQ",authDomain:"webnovel-2fced.firebaseapp.com",projectId:"webnovel-2fced",storageBucket:"webnovel-2fced.appspot.com",messagingSenderId:"268198427687",appId:"1:268198427687:web:48678f494b6060cff02202",measurementId:"G-0MWXK0Q94K"}),B=(s(68),s.p+"static/media/user.f4aa51de.png"),f=s(39),k=s.n(f),m="http://hojoondev.kro.kr:5000/api/v1",Q=s(1),S=x.a.initializeApp(v),I=function(t){Object(u.a)(s,t);var e=Object(A.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={showMenu:!1,userName:"\ub85c\uadf8\uc778 \ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790",userToken:0,userTokenP:0,userImage:B},n.showMenu=n.showMenu.bind(Object(g.a)(n)),n.closeMenu=n.closeMenu.bind(Object(g.a)(n)),n.signOut=n.signOut.bind(Object(g.a)(n)),n.signIn=n.signIn.bind(Object(g.a)(n)),n}return Object(l.a)(s,[{key:"showMenu",value:function(t){t.preventDefault(),t.stopPropagation(),this.requestProfile(),this.state.showMenu?(this.setState({showMenu:!1}),document.removeEventListener("click",this.closeMenu)):(this.setState({showMenu:!0}),document.addEventListener("click",this.closeMenu))}},{key:"closeMenu",value:function(t){t.preventDefault(),this.dropdownMenu.contains(t.target)||(this.setState({showMenu:!1}),document.removeEventListener("click",this.closeMenu))}},{key:"requestProfile",value:function(){var t,e=this;void 0!==(t=void 0===this.props.user?localStorage.getItem("token"):this.props.user.za)&&b.a.get("".concat(m,"/profile"),{headers:{authentication:t}}).then((function(t){e.setState({userName:t.data.name}),e.setState({userToken:t.data.token}),e.setState({userTokenP:t.data.tokenP}),e.setState({userImage:t.data.photoURL})})).catch((function(t){}))}},{key:"componentDidMount",value:function(){this.requestProfile()}},{key:"signOut",value:function(){var t=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.signOut();case 2:return t.next=4,localStorage.removeItem("token");case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"signIn",value:function(){var t=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.signInWithGoogle();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props.user;return Object(Q.jsxs)("header",{children:[Object(Q.jsx)("span",{class:"logo",children:"WebNovel"}),Object(Q.jsxs)("div",{class:"loginProfile",children:[Object(Q.jsxs)("ul",{className:"links",onChange:this.onSelect,children:[Object(Q.jsx)("a",{herf:"/pricing",children:"PRICING"}),Object(Q.jsx)("a",{herf:"/about",children:"ABOUT"})]}),e?localStorage.setItem("token",e.za):null,e?Object(Q.jsx)("div",{class:"profile",children:Object(Q.jsx)("a",{onClick:this.showMenu,children:Object(Q.jsx)("img",{src:this.state.userImage,class:"profileicon"})})}):Object(Q.jsx)("button",{class:"login",onClick:this.signIn,children:"Sign in with Google"}),this.state.showMenu?Object(Q.jsx)("div",{ref:function(e){t.dropdownMenu=e},children:Object(Q.jsxs)("div",{class:"dropdown",children:[Object(Q.jsx)("div",{class:"name",children:Object(Q.jsx)("p",{children:this.state.userName})}),Object(Q.jsxs)("div",{class:"token",children:[Object(Q.jsx)(k.a,{completed:this.state.userTokenP,height:"8px",isLabelVisible:!1}),Object(Q.jsxs)("span",{children:[this.state.userToken," token"]})]}),Object(Q.jsx)("button",{onClick:this.signOut,class:"logout",children:"logout"})]})}):null]})]})}}]),s}(n.Component),D=S.auth(),T={googleProvider:new x.a.auth.GoogleAuthProvider},M=Object(C.a)({providers:T,firebaseAppAuth:D})(I),w=s(79),y=(s(72),function(t){Object(u.a)(s,t);var e=Object(A.a)(s);function s(){var t;return Object(r.a)(this,s),(t=e.call(this)).state={input:"",output:"",next:"",outputBeforeTlanslate:"",outputAfterTlanslate:"",temp:"",loading:!1,options:["\ud310\ud0c0\uc9c0","\ud604\ud310","\ubb34\ud611","\ubbf8\uc2a4\ud130\ub9ac","\ub85c\ud310"],selectOptions:"\ud310\ud0c0\uc9c0",mainChar:""},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t.requestcontents=t.requestcontents.bind(Object(g.a)(t)),t.onSelect=t.onSelect.bind(Object(g.a)(t)),t.resetData=t.resetData.bind(Object(g.a)(t)),t.handleChangeN=t.handleChangeN.bind(Object(g.a)(t)),t.requestNextContents=t.requestNextContents.bind(Object(g.a)(t)),t}return Object(l.a)(s,[{key:"handleChange",value:function(t){this.setState({input:t.target.value})}},{key:"handleChangeN",value:function(t){this.setState({next:t.target.value})}},{key:"requestcontents",value:function(){var t=this;void 0!==localStorage.getItem("token")?(this.setState({loading:!0}),b.a.post("".concat(m,"/complation"),{input:this.state.input,category:this.state.selectOptions},{headers:{authentication:localStorage.getItem("token")},timeout:1e4}).then((function(e){t.setState({mainChar:t.state.input}),t.setState({outputAfterTlanslate:t.state.outputAfterTlanslate+e.data.output}),t.setState({outputBeforeTlanslate:t.state.outputBeforeTlanslate+e.data.outputBeforeTlanslate}),t.setState({temp:e.data.outputBeforeTlanslate}),t.setState({output:t.state.outputAfterTlanslate+"\n\n\uc6d0\ubcf8\n"+t.state.outputBeforeTlanslate}),t.setState({loading:!1})})).catch((function(e){t.setState({loading:!1}),t.setState({output:"\ud1a0\ud070\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4!"})}))):this.setState({output:"\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694!"})}},{key:"onSelect",value:function(t){this.setState({selectOptions:t.target.value}),console.log(t.target.value)}},{key:"resetData",value:function(){this.setState({next:""}),this.setState({input:""}),this.setState({output:""}),this.setState({mainChar:""}),this.setState({outputBeforeTlanslate:""}),this.setState({outputAfterTlanslate:""})}},{key:"requestNextContents",value:function(t){var e=this;void 0!==localStorage.getItem("token")?(this.setState({loading:!0}),b.a.post("".concat(m,"/next"),{mainCharacter:this.state.mainChar,category:this.state.selectOptions,story:this.state.temp,action:this.state.next+"\ud558\uae30\ub85c \ud588\ub2e4."},{headers:{authentication:localStorage.getItem("token")},timeout:1e4}).then((function(t){e.setState({outputAfterTlanslate:e.state.outputAfterTlanslate+t.data.output}),e.setState({outputBeforeTlanslate:e.state.outputBeforeTlanslate+t.data.outputBeforeTlanslate}),e.setState({output:e.state.outputAfterTlanslate+"\n\n\uc6d0\ubcf8\n"+e.state.outputBeforeTlanslate}),e.setState({loading:!1})})).catch((function(t){e.setState({loading:!1}),e.setState({output:"\ud1a0\ud070\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4!"})}))):this.setState({output:"\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694!"})}},{key:"render",value:function(){var t=this;return Object(Q.jsxs)("div",{class:"main",children:[Object(Q.jsx)("div",{class:"middleTitle",children:Object(Q.jsx)("span",{children:" Completion "})}),this.state.loading?Object(Q.jsx)("div",{class:"loading",children:Object(Q.jsx)(w.a,{size:"8px",color:"#3b2479"})}):null,Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("div",{class:"input",children:[Object(Q.jsxs)("select",{className:"dropdowncategory",onChange:this.onSelect,children:[Object(Q.jsx)("option",{value:this.state.options[0],children:this.state.options[0]}),Object(Q.jsx)("option",{value:this.state.options[1],children:this.state.options[1]}),Object(Q.jsx)("option",{value:this.state.options[2],children:this.state.options[2]}),Object(Q.jsx)("option",{value:this.state.options[3],children:this.state.options[3]}),Object(Q.jsx)("option",{value:this.state.options[4],children:this.state.options[4]})]}),Object(Q.jsx)("input",{class:"input_text",value:this.state.input,onChange:this.handleChange,placeholder:"\ub2f9\uc2e0\uc758 \uc8fc\uc778\uacf5\uc744 \uc785\ub825\ud558\uc138\uc694!"}),Object(Q.jsx)("button",{class:"start",onClick:this.requestcontents,children:"Start!"})]}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("textarea",{class:"output",value:this.state.output,readOnly:!0}),Object(Q.jsx)("div",{class:"reset",children:Object(Q.jsx)("a",{onClick:this.resetData,children:Object(Q.jsx)("img",{src:"data:image/png;base64,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",class:"reseticon"})})}),this.state.mainChar?Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("div",{class:"next_input",children:[Object(Q.jsxs)("span",{children:[this.state.mainChar,'\uc740 " ']}),Object(Q.jsx)("input",{class:"next_text",value:this.state.next,onChange:this.handleChangeN,placeholder:"\ub2e4\uc74c \ud589\ub3d9\uc744 \uc785\ub825\ud558\uc138\uc694!"}),Object(Q.jsx)("span",{children:' " \ud558\uae30\ub85c \ud588\ub2e4.'})]}),Object(Q.jsx)("button",{class:"next",onClick:function(){t.requestNextContents(t.state.next)},children:"Next!"})]}):null]})]})]})}}]),s}(n.Component)),E=(s(74),function(t){Object(u.a)(s,t);var e=Object(A.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(Q.jsx)("footer",{children:Object(Q.jsxs)("p",{class:"info",children:["Address: #702 BS B/D seocho-daero 334 ,Seocho-gu, Seoul, Korea",Object(Q.jsx)("br",{}),"\u321cAppplatform 115-87-01388",Object(Q.jsx)("br",{}),"\xa9Appplatform, Inc All Rights Reserved"]})})}}]),s}(n.Component)),Y=function(){return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(M,{}),Object(Q.jsx)(y,{}),Object(Q.jsx)(E,{})]})},R=function(){return Object(Q.jsx)("div",{})},X=function(t){Object(u.a)(s,t);var e=Object(A.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(h.a,{exact:!0,path:"/",component:Y}),Object(Q.jsx)(h.a,{exact:!0,path:"/pricing",component:R})]})}}]),s}(n.Component),F=function(){return Object(Q.jsx)(c.a,{children:Object(Q.jsx)(X,{})})};o.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(F,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.9942cfda.chunk.js.map