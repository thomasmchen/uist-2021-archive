(this["webpackJsonpuist-2021"]=this["webpackJsonpuist-2021"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":0,"value":"woke-long"},{"id":1,"value":"woke-short"}]')},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(20),s=n.n(i),l=(n(27),n(4)),r=n(5),u=n(7),o=n(6),d=[{title:"Home",url:"/uist-2021",cName:"nav-links"},{title:"Summary",url:"/uist-2021/data/summary",cName:"nav-links"},{title:"Spans",url:"/uist-2021/data/spans",cName:"nav-links"},{title:"Q&A",url:"/uist-2021/data/qa",cName:"nav-links"},{title:"Speakers",url:"/uist-2021/data/speaker",cName:"nav-links"},{title:"About Us",url:"/uist-2021/static/about",cName:"nav-links-mobile"}],j=(n(28),n(0)),b=["btn--primary","btn--outline"],h=["btn--medium","btn--large"],m=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,i=e.buttonSize,s=b.includes(c)?c:b[0],l=h.includes(i)?i:h[0];return Object(j.jsx)("button",{className:"btn ".concat(s," ").concat(l),onClick:a,type:n,children:t})},O=(n(30),n(12)),x=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"NavbarItems",children:[Object(j.jsxs)("h1",{className:"navbar-logo",children:["Contoso ",Object(j.jsx)("i",{className:"fab fa-affiliatetheme"})]}),Object(j.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(j.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(j.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:d.map((function(e,t){return Object(j.jsx)("li",{className:e.cName,children:Object(j.jsx)(O.b,{to:e.url,children:e.title})},t)}))}),Object(j.jsx)(m,{children:Object(j.jsx)(O.b,{to:"/static/about",children:"About Us"})})]})}}]),n}(a.Component),v=n(14),p=n(2);var f=function(e){return Object(j.jsx)("div",{className:"Segment",children:Object(j.jsxs)("div",{className:"SegmentDataContainer",children:[Object(j.jsx)("div",{className:"SegmentIdContainer",children:Object(j.jsx)("p",{className:"SegmentIdText",children:e.id})}),Object(j.jsx)("div",{className:"SegmentTextContainer",children:Object(j.jsx)("p",{className:"SegmentTextText",children:e.text})})]})})};n(36);var N=function(e){var t,n,c,i,s=Object(a.useState)(null),l=Object(v.a)(s,2),r=l[0],u=l[1],o=e.audioData;Object(a.useEffect)((function(){return u(null)}),[o]);var d=function(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1};return e.audioData?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Spans View"}),Object(j.jsxs)("div",{className:"SegmentColumnContainer",children:[Object(j.jsxs)("div",{className:"SegmentColumn",children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsx)("h2",{className:"ColumnTitle",children:"Raw Transcript"})}),null===(t=e.audioData)||void 0===t?void 0:t.raw.segments.map((function(e,t){return Object(j.jsx)("div",{onClick:function(){return u(e.id)},className:e.id===r?"selected":"",children:Object(j.jsx)(f,{text:e.text,id:e.id})},t)}))]}),Object(j.jsxs)("div",{className:"SegmentColumn notclickable",children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsx)("h2",{className:"ColumnTitle",children:"Low Pass"})}),null===(n=e.audioData)||void 0===n?void 0:n.low.segments.filter((function(e){return d(e.id,r)})).map((function(e,t){return Object(j.jsx)("div",{className:"selected",children:Object(j.jsx)(f,{text:e.text,id:e.id.join(", ")})},t)}))]}),Object(j.jsxs)("div",{className:"SegmentColumn notclickable",children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsx)("h2",{className:"ColumnTitle",children:"Medium Pass"})}),null===(c=e.audioData)||void 0===c?void 0:c.med.segments.filter((function(e){return d(e.id,r)})).map((function(e,t){return Object(j.jsx)("div",{className:"selected",children:Object(j.jsx)(f,{text:e.text,id:e.id.join(", ")})},t)}))]}),Object(j.jsxs)("div",{className:"SegmentColumn notclickable",children:[Object(j.jsx)("div",{className:"ColumnTitleContainer",children:Object(j.jsx)("h2",{className:"ColumnTitle",children:"High Pass"})}),null===(i=e.audioData)||void 0===i?void 0:i.high.segments.filter((function(e){return d(e.id,r)})).map((function(e,t){return Object(j.jsx)("div",{className:"selected",children:Object(j.jsx)(f,{text:e.text,id:e.id.join(", ")})},t)}))]})]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Spans View"}),Object(j.jsx)("p",{children:"No audio sample selected"})]})},C=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"SummaryView"})})}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"QAView"})})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"SpeakerView"})})}}]),n}(a.Component),k=(n(37),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"AboutView"})})}}]),n}(a.Component));var A=function(e){var t=Object(a.useState)(null),n=Object(v.a)(t,2),c=n[0],i=n[1],s=e.audioName;return Object(a.useEffect)((function(){if(s){fetch("../data/".concat(s,".json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log(e)}))}}),[s]),Object(j.jsx)("div",{className:"DataContainer",children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/uist-2021/data/summary",children:Object(j.jsx)(C,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/data/spans",children:Object(j.jsx)(N,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/data/qa",children:Object(j.jsx)(S,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/data/speaker",children:Object(j.jsx)(g,{className:"SpansView",audioName:e.audioName,audioData:c})}),Object(j.jsx)(p.a,{path:"/uist-2021/static/about",children:Object(j.jsx)(k,{})}),Object(j.jsx)(p.a,{path:"/uist-2021",children:Object(j.jsx)("p",{children:"Home"})})]})})},y=(n(38),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"AudioSelectionContainer",children:[Object(j.jsxs)("p",{className:"CurrentAudioLabel",children:["Currently Analyzing Audio: ",Object(j.jsx)("strong",{children:this.props.selectedAudio?this.props.selectedAudio:Object(j.jsx)("samp",{className:"NoAudioSelectedText",children:"No Audio Selected"})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"SelectAudioLabel",children:"Select an Audio:"}),Object(j.jsx)("select",{className:"AudioSelector",name:"AudioSelect",onChange:function(t){return e.props.onChange(t.target.value)},children:this.props.audios.map((function(e){return Object(j.jsx)("option",{children:e.value},e.id)}))})]})]})}}]),n}(a.Component)),w=n(22),T=(n(39),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){if(""===e)return a.setState({selectedAudio:""}),void a.setState({selectedAudioData:""});a.setState({selectedAudio:e})},a.state={audios:w,selectedAudio:""},a}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(y,{audios:this.state.audios,selectedAudio:this.state.selectedAudio,onChange:this.handleChange}),Object(j.jsx)(A,{audioName:this.state.selectedAudio})]})})}}]),n}(c.a.Component)),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root")),D()}},[[40,1,2]]]);
//# sourceMappingURL=main.ce178d8f.chunk.js.map