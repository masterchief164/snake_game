(this.webpackJsonpsnake_game=this.webpackJsonpsnake_game||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(4),i=r.n(a),o=(r(9),r(2)),s=(r(10),r.p+"static/media/grassSkin.dda7373c.jpg"),u=r.p+"static/media/apple.dd19f267.jpg",d=r.p+"static/media/skin.7756d807.jpg",f=r(0),h=function(e){var t,r,c,n,a=e.col;switch(window.innerHeight<window.innerWidth?(t="4vh",r="4vh"):(t="4vw",r="4vw"),a.type){case 0:switch(a.dir){case"right":case"left":c="rotate(0deg)";break;case"up":case"down":c="rotate(90deg)"}a=d;break;case 1:a=s,c="rotate(0deg)";break;case 2:a=u,c="rotate(0deg)"}return n={height:t,width:r,transform:c},Object(f.jsx)("img",{alt:"block",className:"block blockBlue",src:a,style:n})},b=(r(12),function(e){for(var t=e.newScore,r=[],n=0;n<20;n++){r.push([]);for(var a=0;a<20;a++)r[n].push({type:1})}var i=function(){return{x:Math.floor(20*Math.random()),y:Math.floor(20*Math.random())}},s=Object(c.useState)(r),u=Object(o.a)(s,2),d=u[0],b=u[1],j=Object(c.useState)([{x:0,y:0,dir:"right"},{x:1,y:0,dir:"right"}]),l=Object(o.a)(j,2),p=l[0],x=l[1],g=Object(c.useState)("right"),y=Object(o.a)(g,2),v=y[0],O=y[1],m=Object(c.useState)(i),k=Object(o.a)(m,2),w=k[0],S=k[1],E=function(e){for(var t=0;t<p.length;t++)if(p[t].x===e.x&&p[t].y===e.y)return!0;return!1};document.addEventListener("keydown",(function(e){switch(e.keyCode){case 37:if("right"===v)break;O("left");break;case 38:"bottom"!==v&&O("top");break;case 39:"left"!==v&&O("right");break;case 40:"top"!==v&&O("bottom")}}));!function(e,t){var r=Object(c.useRef)();Object(c.useEffect)((function(){r.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e,c=[];switch(v){case"right":e={x:p[0].x,y:(p[0].y+1)%20,dir:"right"};break;case"left":e={x:p[0].x,y:(p[0].y-1+20)%20,dir:"left"};break;case"top":e={x:(p[0].x-1+20)%20,y:p[0].y,dir:"up"};break;case"bottom":e={x:(p[0].x+1)%20,y:p[0].y,dir:"down"}}if(c.push(e),E(e))return alert("Game over"),t(0),x([{x:0,y:0,dir:"right"},{x:1,y:0,dir:"right"}]),void O("right");if(p.forEach((function(e){c.push(e)})),p[0].x===w.x&&p[0].y===w.y){t((function(e){return e+1}));for(var n=i();E(n);)n=i();S(n)}else c.pop();x(c),function(){var e=r;p.forEach((function(t){e[t.x][t.y]={type:0,dir:t.dir}})),e[w.x][w.y]={type:2},b(e)}()}),200);var M=d.map((function(e){return Object(f.jsx)("li",{children:e.map((function(e){return Object(f.jsx)(h,{col:e})}))})}));return Object(f.jsx)("div",{className:"grid",children:Object(f.jsx)("ul",{children:M})})}),j=(r(13),function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),r=t[0],n=t[1];return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsxs)("h1",{children:["Score ",r]}),Object(f.jsx)(b,{newScore:n})]})});var l=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(j,{})})};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.9e2c8a99.chunk.js.map