(this["webpackJsonpgesture-recognition"]=this["webpackJsonpgesture-recognition"]||[]).push([[0],{265:function(e,t,n){},267:function(e,t,n){},272:function(e,t){},273:function(e,t){},281:function(e,t){},284:function(e,t){},285:function(e,t){},286:function(e,t){},289:function(e,t,n){"use strict";n.r(t);var r=n(88),i=n.n(r),a=n(236),c=n.n(a),s=(n(265),n(4)),o=n.n(s),u=n(11),l=n(5),h=(n.p,n(267),n(237)),f=n.n(h),g=(n(288),n(259)),d={thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]},p=function(e,t){e.length>0&&e.forEach((function(e){for(var n=e.landmarks,r=0;r<Object.keys(d).length;r++)for(var i=Object.keys(d)[r],a=0;a<d[i].length-1;a++){var c=d[i][a],s=d[i][a+1];t.beginPath(),t.moveTo(n[c][0],n[c][1]),t.lineTo(n[s][0],n[s][1]),t.strokeStyle="plum",t.lineWidth=4,t.stroke()}for(var o=0;o<n.length;o++){var u=n[o][0],l=n[o][1];t.beginPath(),t.arc(u,l,5,0,3*Math.PI),t.fillStyle="red",t.fill()}}))},b=n(194),m=n.p+"static/media/victory.8710fbb2.png",v=n.p+"static/media/thumbs_up.e3bf974d.png",j=n(76);var x=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useState)(null),i=Object(l.a)(n,2),a=i[0],c=i[1],s={thumbs_up:v,victory:m},h=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a();case 2:t=e.sent,setInterval((function(){d(t)}),10);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var n=Object(u.a)(o.a.mark((function n(r){var i,s,u,l,h,f,g,d,m;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=19;break}return i=e.current.video,s=e.current.video.videoWidth,u=e.current.video.videoHeight,e.current.video.width=s,e.current.video.height=u,t.current.width=s,t.current.height=u,n.next=10,r.estimateHands(i);case 10:if(!((l=n.sent).length>0)){n.next=17;break}return h=new b.GestureEstimator([b.Gestures.VictoryGesture,b.Gestures.ThumbsUpGesture]),n.next=15,h.estimate(l[0].landmarks,4);case 15:void 0!==(f=n.sent).gestures&&f.gestures.length>0&&(g=f.gestures.map((function(e){return e.score})),d=g.indexOf(Math.max.apply(null,g)),c(f.gestures[d].name),console.log(a));case 17:m=t.current.getContext("2d"),p(l,m);case 19:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return h(),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(f.a,{ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9,width:640,height:480}}),Object(j.jsx)("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9,width:640,height:480}}),null!==a?Object(j.jsx)("img",{src:s[a],style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:400,bottom:300,right:0,textAlign:"center",height:100,zIndex:10}}):""]}),Object(j.jsx)("footer",{className:"App-footer",children:Object(j.jsx)("p",{children:"Life isn't dattebayo anymore!"})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),y()}},[[289,1,2]]]);
//# sourceMappingURL=main.0dbb4fe6.chunk.js.map