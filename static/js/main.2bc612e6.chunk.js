(this["webpackJsonpvelog-clone"]=this["webpackJsonpvelog-clone"]||[]).push([[0],{46:function(e,t,n){},69:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),o=n(37),i=n.n(o),c=(n(46),n(25)),l=n(13),r=n(14),u=n(16),h=n(15),A=n(3),d=n(11),j=n.n(d),p=n(18),g=n(6),b=n(20),O=n.n(b),v=(n(66),n(21));n(67);v.a.initializeApp({apiKey:"AIzaSyDa7N9IBIGCSsDHHWzF8OjDvy1YZ9LszbQ",authDomain:"webnovel-2fced.firebaseapp.com",projectId:"webnovel-2fced",storageBucket:"webnovel-2fced.appspot.com",messagingSenderId:"268198427687",appId:"1:268198427687:web:48678f494b6060cff02202",measurementId:"G-0MWXK0Q94K"});var m=v.a,f=v.a.auth(),C=(n(69),n.p+"static/media/user.f4aa51de.png"),x=n(38),k=n.n(x),B="http://localhost:5000/api/v1",M=(n(72),n(0)),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.close,s=e.header;return Object(M.jsx)("div",{className:t?"openModal modal":"modal",children:t?Object(M.jsxs)("section",{children:[Object(M.jsxs)("header",{children:[s,Object(M.jsx)("button",{className:"close",onClick:n,children:" \xd7 "})]}),Object(M.jsx)("main",{children:this.props.children}),Object(M.jsx)("footer",{children:Object(M.jsx)("button",{className:"close",onClick:n,children:" close "})})]}):null})}}]),n}(s.Component),Q=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).openModal=function(){s.setState({modalOpen:!0})},s.closeModal=function(){s.setState({modalOpen:!1})},s.state={showMenu:!1,userName:"\ub85c\uadf8\uc778 \ub418\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790",userToken:0,userTokenP:0,userImage:C,modalOpen:!1,user:!1},s.showMenu=s.showMenu.bind(Object(g.a)(s)),s.closeMenu=s.closeMenu.bind(Object(g.a)(s)),s.signOut=s.signOut.bind(Object(g.a)(s)),s.signIn=s.signIn.bind(Object(g.a)(s)),s.openModal=s.openModal.bind(Object(g.a)(s)),s.closeModal=s.closeModal.bind(Object(g.a)(s)),s}return Object(r.a)(n,[{key:"showMenu",value:function(e){e.preventDefault(),e.stopPropagation(),this.requestProfile(),this.state.showMenu?(this.setState({showMenu:!1}),document.removeEventListener("click",this.closeMenu)):(this.setState({showMenu:!0}),document.addEventListener("click",this.closeMenu))}},{key:"closeMenu",value:function(e){e.preventDefault(),this.dropdownMenu.contains(e.target)||(this.setState({showMenu:!1}),document.removeEventListener("click",this.closeMenu))}},{key:"requestProfile",value:function(){var e=Object(p.a)(j.a.mark((function e(){var t,n=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:void 0!==(t=e.sent)&&O.a.get("".concat(B,"/profile"),{headers:{authentication:t}}).then((function(e){n.setState({user:!0}),n.setState({userName:e.data.name}),n.setState({userToken:e.data.token}),n.setState({userTokenP:e.data.tokenP}),n.setState({userImage:e.data.photoURL})})).catch((function(e){}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.requestProfile()}},{key:"signOut",value:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return this.setState({user:!1}),this.setState({showMenu:!1}),document.removeEventListener("click",this.closeMenu),e.next=7,f.signOut();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"signIn",value:function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s,a=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,s=new m.auth.GoogleAuthProvider,"Facebook"===n?s=new m.auth.FacebookAuthProvider:"Google"===n&&(s=new m.auth.GoogleAuthProvider),e.next=5,f.signInWithPopup(s).then(function(){var e=Object(p.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.credential,s=t.user,console.log(n),console.log(s.za),console.log(n.idToken),e.next=7,localStorage.setItem("token",s.za);case 7:a.setState({user:!0}),a.requestProfile();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){e.code,e.message,e.email,e.credential}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;this.props.user;return Object(M.jsxs)("header",{children:[Object(M.jsx)("span",{class:"logo",children:"WebNovel"}),Object(M.jsxs)("div",{class:"loginProfile",children:[Object(M.jsx)("button",{className:"links",onClick:this.openModal,children:"PRICING"}),Object(M.jsx)(S,{open:this.state.modalOpen,close:this.closeModal,title:"Create a chat room",children:"\ud504\ub85c\ud1a0\ud0c0\uc785\uc5d0\uc11c\ub294 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."}),localStorage.getItem("token")?console.log(localStorage.getItem("token")):null,this.state.user?Object(M.jsx)("div",{class:"profile",children:Object(M.jsx)("a",{onClick:this.showMenu,children:Object(M.jsx)("img",{src:this.state.userImage,class:"profileicon"})})}):Object(M.jsx)("button",{class:"login",onClick:this.signIn,name:"Google",children:"login"}),this.state.showMenu?Object(M.jsx)("div",{ref:function(t){e.dropdownMenu=t},children:Object(M.jsxs)("div",{class:"dropdown",children:[Object(M.jsx)("div",{class:"name",children:Object(M.jsx)("p",{children:this.state.userName})}),Object(M.jsxs)("div",{class:"token",children:[Object(M.jsx)(k.a,{completed:this.state.userTokenP,height:"8px",isLabelVisible:!1}),Object(M.jsxs)("span",{children:[this.state.userToken," token"]})]}),Object(M.jsx)("button",{onClick:this.signOut,class:"logout",children:"logout"})]})}):null]})]})}}]),n}(s.Component),w=n(39),I=n(81),D=(n(74),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={input:"",output:"",outputBeforeTlanslate:"",outputAfterTlanslate:"",loading:!1,isFollow:!1,options:["\ud310\ud0c0\uc9c0","\ud604\ud310","\ubb34\ud611","\ubbf8\uc2a4\ud130\ub9ac","\ub85c\ud310"],selectOptions:"\ud310\ud0c0\uc9c0",Main_character:"",Place:"",Time:"",Main_Events:"",Material:""},e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.requestcontents=e.requestcontents.bind(Object(g.a)(e)),e.onSelect=e.onSelect.bind(Object(g.a)(e)),e.onSelectFollow=e.onSelectFollow.bind(Object(g.a)(e)),e.resetData=e.resetData.bind(Object(g.a)(e)),e}return Object(r.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"onSelectFollow",value:function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.target.value),e.next=3,this.setState({isFollow:t.target.value});case 3:console.log(this.state.isFollow);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onSelect",value:function(e){this.setState({selectOptions:e.target.value})}},{key:"requestcontents",value:function(){var e=this;if(void 0!==localStorage.getItem("token")){this.setState({loading:!0});var t="";"true"==this.state.isFollow?t=this.state.outputBeforeTlanslate:(this.setState({outputAfterTlanslate:""}),this.setState({outputBeforeTlanslate:""}),this.setState({output:""})),O.a.post("".concat(B,"/complation"),{selectOptions:this.state.selectOptions,Main_character:this.state.Main_character,Place:this.state.Place,Time:this.state.Time,Main_Events:this.state.Main_Events,Material:this.state.Material,Story:t},{headers:{authentication:localStorage.getItem("token")},timeout:1e4}).then((function(t){e.setState({outputAfterTlanslate:e.state.outputAfterTlanslate+t.data.output}),e.setState({outputBeforeTlanslate:e.state.outputBeforeTlanslate+t.data.outputBeforeTlanslate}),e.setState({output:e.state.outputAfterTlanslate+"\n\n\uc6d0\ubcf8\n"+e.state.outputBeforeTlanslate}),e.setState({loading:!1})})).catch((function(t){e.setState({loading:!1}),e.setState({output:"\ud1a0\ud070\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4!"})}))}else this.setState({output:"\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694!"})}},{key:"resetData",value:function(){this.setState({next:""}),this.setState({input:""}),this.setState({output:""}),this.setState({outputBeforeTlanslate:""}),this.setState({outputAfterTlanslate:""})}},{key:"render",value:function(){return Object(M.jsxs)(s.Fragment,{children:[Object(M.jsxs)("div",{class:"sub",children:[Object(M.jsx)("div",{class:"input",children:Object(M.jsxs)("select",{className:"dropdowncategory",onChange:this.onSelect,children:[Object(M.jsx)("option",{value:this.state.options[0],children:this.state.options[0]}),Object(M.jsx)("option",{value:this.state.options[1],children:this.state.options[1]}),Object(M.jsx)("option",{value:this.state.options[2],children:this.state.options[2]}),Object(M.jsx)("option",{value:this.state.options[3],children:this.state.options[3]}),Object(M.jsx)("option",{value:this.state.options[4],children:this.state.options[4]})]})}),Object(M.jsx)("input",{class:"sub_input_text",value:this.state.Main_character,onChange:this.handleChange,name:"Main_character",placeholder:"\uc8fc\uc694 \uc778\ubb3c"}),Object(M.jsx)("input",{class:"sub_input_text",value:this.state.Place,onChange:this.handleChange,name:"Place",placeholder:"\uc7a5\uc18c"}),Object(M.jsx)("input",{class:"sub_input_text",value:this.state.Time,onChange:this.handleChange,name:"Time",placeholder:"\uc2dc\uac04"}),Object(M.jsx)("input",{class:"sub_input_text",value:this.state.Main_Events,onChange:this.handleChange,name:"Main_Events",placeholder:"\uc8fc\uc694 \uc0ac\uac74"}),Object(M.jsx)("input",{class:"sub_input_text",value:this.state.Material,onChange:this.handleChange,name:"Material",placeholder:"\uc18c\uc7ac"}),Object(M.jsx)("button",{class:"start",onClick:this.requestcontents,children:"Start!"}),Object(M.jsxs)("select",{className:"followSelector",onChange:this.onSelectFollow,children:[Object(M.jsx)("option",{value:!1,children:"\ub3c4\uc785\ubd80 \uc4f0\uae30"}),Object(M.jsx)("option",{value:!0,children:"\uc904\uac70\ub9ac \uc4f0\uae30"})]})]}),Object(M.jsxs)("div",{class:"main",children:[this.state.loading?Object(M.jsxs)("div",{class:"loading",children:[" ",Object(M.jsx)(I.a,{size:"8px",color:"#3b2479"})," "]}):null,Object(M.jsx)("div",{children:Object(M.jsxs)("div",{children:[Object(M.jsx)("textarea",{class:"output",value:this.state.output,readOnly:!0}),Object(M.jsx)("div",{class:"reset",children:Object(M.jsx)("a",{onClick:this.resetData,children:Object(M.jsx)("img",{src:"data:image/png;base64,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",class:"reseticon"})})})]})})]})]})}}]),n}(s.Component)),T=(n(76),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(M.jsx)("footer",{children:Object(M.jsxs)("p",{class:"info",children:["Address: #702 BS B/D seocho-daero 334 ,Seocho-gu, Seoul, Korea",Object(M.jsx)("br",{}),"\u321cAppplatform 115-87-01388",Object(M.jsx)("br",{}),"\xa9Appplatform, Inc All Rights Reserved"]})})}}]),n}(s.Component)),E=function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)(Q,{}),Object(M.jsx)(D,{}),Object(M.jsx)(T,{})]})},y=function(){return Object(M.jsx)("div",{})},F=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)(A.a,{exact:!0,path:"/",component:E}),Object(M.jsx)(A.a,{exact:!0,path:"/pricing",component:y})]})}}]),n}(s.Component),Y=function(){return Object(M.jsx)(c.a,{children:Object(M.jsx)(F,{})})};i.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(Y,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.2bc612e6.chunk.js.map