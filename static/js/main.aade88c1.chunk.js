(this.webpackJsonpeliz=this.webpackJsonpeliz||[]).push([[0],{125:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),r=c(33),n=c.n(r),i=c(45),o=c(27),j=c(28),b=c(30),l=c(29),h=c(20),O=c(38),x=c.n(O),m=c(4),d=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)(s.Fragment,{children:Object(m.jsx)("div",{className:x.a.wrap,children:Object(m.jsxs)("div",{className:x.a.main,children:[Object(m.jsx)(i.b,{activeClassName:x.a.active,className:x.a.item,to:"/home",children:"\u4e3b\u9875"}),Object(m.jsx)(i.b,{activeClassName:x.a.active,className:x.a.item,to:"/works",children:"\u4f5c\u54c1"}),Object(m.jsx)(i.b,{activeClassName:x.a.active,className:x.a.item,to:"/contact",children:"\u7559\u8a00"}),Object(m.jsx)("div",{className:x.a.item,children:"\u66f4\u591a"})]})})})}}]),c}(s.Component),p=c(79),u=c.n(p),_=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return this.props.work.map((function(e){return Object(m.jsxs)("div",{className:u.a.work,style:{backgroundColor:1===(1&e.id)?"black":"white"},children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("h1",{style:{color:1===(1&e.id)?"white":"black"},children:[e.title," "]}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{style:{color:1===(1&e.id)?"lightgray":"gray"},children:e.labels}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{style:{color:"gray"},children:e.description}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{style:{color:"#2894FF",textDecoration:"none"},children:"\u8fdb\u4e00\u6b65\u4e86\u89e3 \uff1e"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{src:e.img,alt:""}),Object(m.jsx)("div",{className:u.a.separator})]},e.id)}))}}]),c}(s.Component),g=c(86),f=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsx)("ul",{children:Object(m.jsx)(_,{work:g.data})})}}]),c}(s.Component),v=c(44),w=c.n(v),y=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).state={opacity:1,position:"absolute",src:"./1.jpg",innerHTML:""},s.showRef=a.a.createRef(),s.rootRef=a.a.createRef(),s}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=this.showRef.current.offsetTop,c=document.documentElement.clientHeight;document.body.onscroll=function(){var s=(document.documentElement.scrollTop-t)/c;s<0||s>3?e.setState({position:"absolute"}):s>=2&&s<3?e.setState({opacity:3-s,position:"fixed",src:"./home_3.jpg",innerHTML:["\u80fd\u4fdd\u6301\u826f\u597d\u7684\u6c9f\u901a\uff0c","\u79ef\u6781\u4e50\u89c2\u3001\u8ba4\u771f\u8d1f\u8d23\u3002"]}):s>=1?e.setState({opacity:2-s,src:"./home_2.jpg",innerHTML:["\u505a\u8fc7\u57fa\u4e8e.NET\u7684\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5f00\u53d1\uff0c","\u53c2\u4e0e\u8fc7\u5f00\u6e90AI\u52a0\u901f\u5668\u843d\u5730\u3002"]}):s>=0&&e.setState({opacity:1-s,position:"fixed",src:"./home_1.jpg",innerHTML:["\u4e86\u89e3\u5e38\u89c1\u7684\u7f16\u7a0b\u8bed\u8a00\u4e0e\u8bbe\u8ba1\u6a21\u5f0f\uff0c","\u53ef\u8f83\u5feb\u5165\u624b\u65b0\u9879\u76ee\u3002"]})}}},{key:"render",value:function(){var e=this.state,t=e.opacity,c=e.position,s=e.src,a=e.innerHTML;return Object(m.jsxs)("div",{ref:this.rootRef,children:[Object(m.jsxs)("div",{className:w.a.home,children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h1",{children:"\u60a8\u597d\uff0c"}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"\u6211\u662f\u6731\u96f7\uff0c"}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{className:w.a.detail,children:"\u4e00\u4e2a\u7f16\u7a0b\u7231\u597d\u8005\u3002"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{className:w.a.img,src:"./home_0.jpg",alt:" "}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:w.a.show,ref:this.showRef,children:[Object(m.jsx)("div",{className:w.a.show_text,style:{position:c,opacity:t},children:Object(m.jsxs)("p",{children:[a[0],Object(m.jsxs)("font",{color:"#FF5151",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),a[1]]})]})}),Object(m.jsx)("img",{className:w.a.show_img,src:s,alt:"",style:{position:c}})]}),Object(m.jsx)(f,{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:w.a.copyright,children:"Copyright \xa9 2021 EliZhu. \xa0\xa02435754260@qq.com"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})}}]),c}(s.Component),k=c(73),N=c.n(k),C=c(128),T=c(129),A=c(131),D=c(96),L=c(130),M=c(99),S=c(133),R=(c(113),["terrible","bad","normal","good","wonderful"]),z=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],F=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:3},e.handleChange=function(t){e.setState({value:t})},e.showData=function(){alert("\u60a8\u63d0\u4ea4\u7684\u5185\u5bb9\u662f\uff1a\n"+e.comment.resizableTextArea.props.value)},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this,t=this.state.value,c=C.a.TextArea;return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:N.a.contact,children:[Object(m.jsxs)("div",{className:N.a.board,children:[Object(m.jsx)(T.b,{itemLayout:"horizontal",dataSource:z,renderItem:function(e){return Object(m.jsx)(T.b.Item,{children:Object(m.jsx)(T.b.Item.Meta,{avatar:Object(m.jsx)(A.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"ant design",description:"Ant Design, a design language for background applications, is refined by Ant UED Team"})})}}),Object(m.jsx)("br",{}),Object(m.jsx)(D.a,{size:"small",total:50,showSizeChanger:!0,showQuickJumper:!0})]}),Object(m.jsxs)("div",{className:N.a.comment,children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(c,{ref:function(t){return e.comment=t},maxLength:1e3,rows:6,cols:80,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u7559\u8a00...",showCount:!0}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[Object(m.jsx)(L.a,{tooltips:R,onChange:this.handleChange,value:t}),t?Object(m.jsx)("span",{className:"ant-rate-text",children:R[t-1]}):""]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(M.a,{type:"primary",shape:"round",onClick:this.showData,children:"\u53d1\u8868"}),"\xa0\xa0\xa0",Object(m.jsx)(S.a,{style:{fontSize:"small"},children:"\u79c1\u5bc6"})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})}}]),c}(s.Component),I=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(d,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{path:"/",exact:!0,component:y}),Object(m.jsx)(h.a,{path:"/home",exact:!0,component:y}),Object(m.jsx)(h.a,{path:"/works",exact:!0,component:f}),Object(m.jsx)(h.a,{path:"/contact",exact:!0,component:F})]})]})}}]),c}(s.Component),H=Object(h.e)(I);n.a.render(Object(m.jsx)(i.a,{forceRefresh:!0,children:Object(m.jsx)(H,{})}),document.getElementById("root"))},38:function(e,t,c){e.exports={wrap:"navigation_wrap__N1KEx",main:"navigation_main__3oiXv",item:"navigation_item__3qvj5",active:"navigation_active__6QMb8"}},44:function(e,t,c){e.exports={home:"home_home__2fKDT","fade-in":"home_fade-in__I-dc4",detail:"home_detail__kPjFY",img:"home_img__3LTUY",separator:"home_separator__1R5xC",show:"home_show__MQ2FP",show_img:"home_show_img__wdaBq",show_text:"home_show_text__2Idj1",copyright:"home_copyright__1L5Xi"}},73:function(e,t,c){e.exports={contact:"contact_contact__32gw3",comment:"contact_comment__2_2TI",board:"contact_board__zlM-s"}},79:function(e,t,c){e.exports={work:"work_work__3L_R_",separator:"work_separator__3_fIk"}},86:function(e){e.exports=JSON.parse('{"data":[{"id":1,"title":"Web\u7248\u6296\u97f3","labels":"\u57fa\u4e8e\u897f\u74dc\u64ad\u653e\u5668\uff0c\u5b9e\u73b0\u4e86HLS\u76f4\u64ad\u6d41\u63a7\u5236\u3001\u624b\u52bf\u6ed1\u52a8\u548c\u70b9\u8d5e\u52a8\u6548\u7b49\u529f\u80fd\u3002","description":"@\u5b57\u8282\u8df3\u52a8\u524d\u7aef\u6280\u672f\u8bad\u7ec3\u8425","img":"./works_1.jpg","path":"/"},{"id":2,"title":"\u5149\u7ea4\u632f\u52a8\u5468\u754c\u9632\u62a4\u7cfb\u7edf","labels":"\u5b9e\u73b0\u4e86\u5149\u7ea4\u632f\u52a8\u6570\u636e\u53d1\u5e03\u8ba2\u9605\u3001\u6ee4\u6ce2\u53bb\u566a\u53ca\u76f8\u673a\u6293\u62cd\u544a\u8b66\u8054\u52a8\u7b49\u529f\u80fd\u3002","description":"@\u4e2d\u9632\u901a\u7528\u7535\u4fe1\u6280\u672f\u6709\u9650\u516c\u53f8","img":"./works_2.jpg","path":"/home"},{"id":3,"title":"\u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7684\u624b\u52bf\u8bc6\u522b\u7cfb\u7edf","labels":"\u57fa\u4e8e\u5f00\u6e90TVM\u6df1\u5ea6\u5b66\u4e60\u52a0\u901f\u6808\uff0c\u5728\u591a\u5d4c\u5165\u5f0f\u677f\u4e0a\u90e8\u7f72\u76ee\u6807\u68c0\u6d4b\u6a21\u578b\u5e76\u8054\u52a8\u6a21\u62df\u6e38\u620f\u64cd\u4f5c\u3002","description":"@C4 \u5168\u56fd\u603b\u51b3\u8d5b\u4e8c\u7b49\u5956","img":"./works_3.jpg","path":"/home"},{"id":4,"title":"\u9884\u8bbe\u7ea6\u4f1a\u7535\u8bdd","labels":"\u901a\u8bdd\u5185\u5bb9\u9884\u5f55\u5236\uff0c\u901a\u8bdd\u754c\u9762\u6a21\u62df\u53ca\u5b9a\u65f6\u542f\u52a8\u3002","description":"@AppStore\u4e0b\u8f7d\u91cf: 3000+","img":"./works_4.jpg","path":"/home"}]}')}},[[125,1,2]]]);
//# sourceMappingURL=main.aade88c1.chunk.js.map