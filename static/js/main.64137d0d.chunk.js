(this.webpackJsonpworkspace=this.webpackJsonpworkspace||[]).push([[0],{58:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),r=c.n(s),i=(c(58),c(4)),o=c(12),l=c(0);var j=function(){return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/clock/Winnipeg/-5/New%20York/-4/London/1/Shenzhen/8",children:"Clock"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/weather/London",children:"Weather"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/tasks",children:"Tasks"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:"/music",children:"Music"})})]})},d=c(87),m=c(90),u=c(6),b=c(91),p=c.p+"static/media/clockborder.4d2a5bcf.svg",h=c.p+"static/media/hourhand.05d75457.svg",x=c.p+"static/media/minutehand.5c9e2a8f.svg",O=c.p+"static/media/secondhand.4215c193.svg",f=(c(65),c(41),function(e){var t=e.timeZone,c=void 0===t?0:t,a=Object(n.useState)(new Date),s=Object(u.a)(a,2),r=s[0],i=s[1],o=r.getMinutes(),j=(r.getHours()+r.getTimezoneOffset()/60+c)%24,d=r.getSeconds();Object(n.useEffect)((function(){var e=setInterval((function(){return m()}),1e3);return function(){clearInterval(e)}}));var m=function(){i(new Date)},f=function(e,t){for(e=e.toString();e.length<t;)e="0"+e;return e},v={transform:"rotate(".concat(6*d,"deg)")},y={transform:"rotate(".concat(6*o,"deg)")},g={transform:"rotate(".concat(j%12*30,"deg)")};return Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("img",{className:"clock",src:p,alt:""}),Object(l.jsx)("img",{className:"clock-imgs",src:O,style:v,alt:""}),Object(l.jsx)("img",{className:"clock-imgs",src:h,style:g,alt:""}),Object(l.jsx)("img",{className:"clock-imgs",src:x,style:y,alt:""}),(j=(r.getHours()+r.getTimezoneOffset()/60+c)%24,Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsx)(b.a,{children:Object(l.jsx)("span",{className:"ampm-text",children:j<12?"AM":"PM"})}),Object(l.jsx)(b.a,{children:Object(l.jsxs)("span",{className:"time-text",children:[j%12||12,":",f(""+o,2)]})})]}))]})}),v=(c(66),function(){var e=function(e,t,c,n){var s=(t>0?"+":"")+t,r=(n>0?"+":"")+n;return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsxs)(d.a,{container:!0,alignItems:"center",children:[Object(l.jsxs)(d.a,{item:!0,xs:6,children:[Object(l.jsx)(f,{timeZone:t}),Object(l.jsx)("div",{className:"main-label",children:e}),Object(l.jsxs)("div",{className:"secondary-label",children:["GMT ",s]})]}),Object(l.jsxs)(d.a,{item:!0,xs:6,children:[Object(l.jsx)(f,{timeZone:n}),Object(l.jsx)("div",{className:"main-label",children:c}),Object(l.jsxs)("div",{className:"secondary-label",children:["GMT ",r]})]})]})})},t=function(){var e=new Date;return Object(l.jsx)(f,{timeZone:-e.getTimezoneOffset()/60})},c=function(){var c=Object(i.f)(),n=c.city1,a=c.city2,s=c.city3,r=c.city4,o=c.TZ1,j=c.TZ2,u=c.TZ3,b=c.TZ4;return Object(l.jsx)(m.a,{in:!0,timeout:1e3,children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"d-sm-block d-md-none",children:[Object(l.jsx)(t,{}),Object(l.jsx)("div",{className:"pad"})]}),Object(l.jsx)("div",{className:"d-none d-md-block",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(d.a,{container:!0,alignItems:"center",spacing:0,children:[e(n,+o,a,+j),e(s,+u,r,+b)]})})})]})})};return Object(l.jsx)("div",{style:{backgroundColor:"#1F1F1F"},children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/clock/:city1/:TZ1/:city2/:TZ2/:city3/:TZ3/:city4/:TZ4",children:Object(l.jsx)(c,{})}),Object(l.jsx)(i.a,{path:"/clock",children:Object(l.jsx)(t,{})})]})})}),y=c(7),g=c.n(y),w=c(15),N=(c(68),function(){var e=Object(i.f)().city,t=Object(n.useState)(!1),c=Object(u.a)(t,2),a=(c[0],c[1],Object(n.useState)({})),s=Object(u.a)(a,2),r=s[0],o=s[1],j="9350b208afb3087791c5ecf4020574ae";window.innerWidth;Object(n.useEffect)((function(){(function(){var t=Object(w.a)(g.a.mark((function t(){var c,n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+j,{method:"GET"}).then((function(e){return e.json()}));case 2:return c=t.sent,t.next=5,s=c.coord,fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+s.lat+"&lon="+s.lon+"&exclude=current,minutely,alerts&appid="+j,{method:"GET"}).then((function(e){return e.json()}));case 5:n=t.sent,a={city:e,currentTemp:Math.round(c.main.temp-273.15),tempMin:Math.round(n.daily[0].temp.min-273.15),tempMax:Math.round(n.daily[0].temp.max-273.15),weatherType:c.weather[0].main,weatherTypeIcon:c.weather[0].icon,hourlyForecast:n.hourly.map((function(e){var t=new Date(0);return t.setUTCSeconds(e.dt),{hour:t.getHours()+t.getTimezoneOffset()/60+n.timezone_offset/3600,temp:Math.round(e.temp-273.15),type:e.weather[0].main,icon:e.weather[0].icon}})),dailyForecast:n.daily.map((function(e){var t=new Date(0),c=new Array(7);return c[0]="Sunday",c[1]="Monday",c[2]="Tuesday",c[3]="Wednesday",c[4]="Thursday",c[5]="Friday",c[6]="Saturday",t.setUTCSeconds(e.dt),{day:c[t.getDay()],tempMin:Math.round(e.temp.min-273.15),tempMax:Math.round(e.temp.max-273.15),type:e.weather[0].main,icon:e.weather[0].icon}}))},o(a);case 8:case"end":return t.stop()}var s}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var m=function(){var e="http://openweathermap.org/img/wn/"+r.weatherTypeIcon+"@2x.png";return Object(l.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",className:"headerContainer",children:[Object(l.jsx)(d.a,{item:!0,children:Object(l.jsxs)(d.a,{container:!0,direction:"column",className:"cityTempContainer",children:[Object(l.jsx)("span",{className:"medText",children:r.city}),Object(l.jsxs)("div",{className:"tempContainer",children:[Object(l.jsx)("span",{className:"tempTitle",children:r.currentTemp}),Object(l.jsx)("div",{className:"deg",children:"\xb0C"})]}),Object(l.jsx)("span",{className:"medText",children:r.weatherType}),Object(l.jsxs)("span",{className:"medText",children:[r.tempMin,"\xb0 | ",r.tempMax,"\xb0"]})]})}),Object(l.jsx)("img",{className:"weatherIcon3",src:e,alt:"img"})]})},b=function(){var e="http://openweathermap.org/img/wn/"+r.weatherTypeIcon+"@2x.png";return Object(l.jsxs)("div",{className:"headerContainer",children:[Object(l.jsxs)(d.a,{container:!0,direction:"row",justify:"space-between",children:[Object(l.jsx)(d.a,{item:!0,children:Object(l.jsxs)(d.a,{container:!0,direction:"column",className:"cityTempContainer",children:[Object(l.jsx)("span",{className:"medText",children:r.city}),Object(l.jsxs)("div",{className:"tempContainer",children:[Object(l.jsx)("span",{className:"tempTitle",children:r.currentTemp}),Object(l.jsx)("div",{className:"deg",children:"\xb0C"})]})]})}),Object(l.jsx)(d.a,{item:!0,children:Object(l.jsxs)(d.a,{container:!0,direction:"column",className:"weatherContainer",children:[Object(l.jsx)("img",{className:"weatherIcon",src:e,alt:"img"}),Object(l.jsx)("span",{className:"medText",children:r.weatherType}),Object(l.jsxs)("span",{className:"medText",children:[r.tempMin,"\xb0 | ",r.tempMax,"\xb0"]})]})})]}),Object(l.jsx)("div",{className:"divider"})]})},p=function(){var e;return Object(l.jsxs)("div",{children:[Object(l.jsx)(d.a,{container:!0,direction:"row",justify:"space-between",className:"hourlyContainer",children:null===(e=r.hourlyForecast)||void 0===e?void 0:e.map((function(e,t){return t>=8?Object(l.jsx)(l.Fragment,{}):Object(l.jsxs)(d.a,{direction:"column",className:"hourlyItem",children:[Object(l.jsxs)("span",{className:"medText",children:[" ",e.hour%12||12," ",e.hour<12?"AM":"PM"]}),Object(l.jsx)("img",{className:"weatherIcon2",src:"http://openweathermap.org/img/wn/"+e.icon+"@2x.png"}),Object(l.jsxs)("span",{className:"medText",children:[" ",e.temp,"\xb0"]})]})}))}),Object(l.jsx)("div",{className:"divider"})]})},h=function(){var e;return Object(l.jsx)("div",{className:"dailyContainer",children:null===(e=r.dailyForecast)||void 0===e?void 0:e.map((function(e,t){return t>=7?Object(l.jsx)(l.Fragment,{}):Object(l.jsxs)(d.a,{direction:"row",container:!0,justify:"space-between",className:"dailyItem",children:[Object(l.jsxs)("span",{className:"dailyText",children:[" ",e.day," "]}),Object(l.jsx)("img",{className:"weatherIcon2",src:"http://openweathermap.org/img/wn/"+e.icon+"@2x.png"}),Object(l.jsxs)("span",{className:"dailyText",style:{textAlign:"right"},children:[" ",e.tempMin,"\xb0 | ",e.tempMax,"\xb0"]})]})}))})};return Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsx)("div",{className:"d-block d-sm-none",children:Object(l.jsx)(m,{})}),Object(l.jsxs)("div",{className:"d-none d-sm-block",children:[Object(l.jsx)(b,{}),Object(l.jsx)(p,{}),Object(l.jsx)(h,{})]})]})}),k=c(51),T=c.p+"static/media/completed.05ef88f4.svg",C=c.p+"static/media/todo.2e743453.svg",M=(c(69),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useState)((function(){a([{text:"Pick up milk from the store",isComplete:!0},{text:"Wash the car",isComplete:!0},{text:"Pay electrical bill ",isComplete:!1},{text:"Hand in assignment",isComplete:!1},{text:"Make reservations at Pizzaria Italia",isComplete:!1},{text:"Mow the lawn",isComplete:!1},{text:"Workout",isComplete:!1},{text:"Get AA batteries",isComplete:!1}])}));var s=function(e,t){return Object(l.jsxs)(d.a,{container:!0,direction:"row",className:"task-item",children:[Object(l.jsx)("button",{onClick:function(){var e=Object(k.a)(c);e[t].isComplete=!e[t].isComplete,a(e)},children:Object(l.jsx)("img",{className:"complete-button",src:e.isComplete?T:C})}),Object(l.jsx)("p",{className:"task-text",children:e.text})]})};return Object(l.jsxs)(d.a,{container:!0,direction:"row",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("p",{className:"task-number",children:c.length}),Object(l.jsx)("div",{className:"task-small",children:"Tasks"})]}),Object(l.jsxs)("div",{className:"task-list",children:[c.map((function(e,t){return e.isComplete?s(e,t):null})),Object(l.jsx)("div",{className:"divider"}),c.map((function(e,t){return e.isComplete?null:s(e,t)}))]})]})}),S=c(49),I=c.n(S),_=c(48),z=c.n(_),F=c(50),Z=c.n(F),D=c(47),E=c.n(D),A=(c(70),["user-read-currently-playing","user-read-playback-state","user-modify-playback-state","app-remote-control"]),P=function(){var e=function(e){return new Headers({Authorization:"Bearer "+e,"Content-Type":"application/json"})};function t(t,c){return fetch(t,{method:"GET",headers:e(c)}).then((function(e){return e.json()}))}function c(t,c){return fetch(t,{method:"PUT",headers:e(c)})}function a(t,c){return fetch(t,{method:"POST",headers:e(c)})}var s=function(){var e=Object(w.a)(g.a.mark((function e(c,n){var a,s,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.uri.split(":")[2],s=[],e.t0=c.type,e.next="playlist"===e.t0?5:"album"===e.t0?10:"artist"===e.t0?15:20;break;case 5:return e.next=7,t("https://api.spotify.com/v1/playlists/"+a+"/tracks",n);case 7:return r=e.sent,s=r.items.map((function(e){return e.track})),e.abrupt("break",20);case 10:return e.next=12,t("https://api.spotify.com/v1/albums/"+a+"/tracks",n);case 12:return i=e.sent,s=i.items,e.abrupt("break",20);case 15:return e.next=17,t("https://api.spotify.com/v1/artists/"+a+"/top-tracks?market=CA",n);case 17:return o=e.sent,s=o.tracks,e.abrupt("break",20);case 20:return s.forEach((function(e){e.image=e.album.images[1].url})),e.abrupt("return",s);case 22:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),r=function(){var e=Object(i.f)().responseToken,r=Object(n.useState)(e.split("=")[1].split("&")[0]),o=Object(u.a)(r,2),j=o[0],d=(o[1],Object(n.useState)([])),m=Object(u.a)(d,2),b=m[0],p=m[1],h=Object(n.useState)({}),x=Object(u.a)(h,2),O=x[0],f=x[1],v=Object(n.useState)(0),y=Object(u.a)(v,2),N=y[0],k=y[1],T=Object(n.useState)(!1),C=Object(u.a)(T,2),M=C[0],S=C[1],_=Object(n.useState)(100),F=Object(u.a)(_,2),D=(F[0],F[1],Object(n.useState)(Date.now)),A=Object(u.a)(D,2),P=(A[0],A[1]),G=Object(n.useState)(Date.now),W=Object(u.a)(G,2),H=W[0],U=W[1];Object(n.useEffect)((function(){null!=j&&function(){var e=Object(w.a)(g.a.mark((function e(){var c,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("https://api.spotify.com/v1/me/player/currently-playing?market=CA",j);case 2:return c=e.sent,(n=c.item).image=c.item.album.images[1].url,f(n),S(c.is_playing),k(c.progress_ms),e.next=10,s(c.context,j);case 10:a=e.sent,p(a);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[j]),Object(n.useEffect)((function(){M&&(P(Date.now()),U(Date.now()))}),[M]),Object(n.useEffect)((function(){var e=setInterval((function(){return q()}),500);return function(){clearInterval(e)}}));var q=function(){var e=Date.now();M&&(U(e),e-H+N>=O.duration_ms?(K(1),k(0)):k(e-H+N))},B=function(){var e=L(O.id);return Object(l.jsx)("div",{className:"track_list",children:b.map((function(t){return L(t.id)<=e?null:function(e){return Object(l.jsxs)("div",{className:"track_item",children:[Object(l.jsx)("img",{className:"image_small",src:e.image}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"title_2",children:e.name}),Object(l.jsx)("div",{className:"subtext_2",children:J(e.artists)})]})]})}(t)}))})},J=function(e){if(e){var t=e.map((function(e){return e.name})),c=t.pop();return t.length?t.join(", ")+" & "+c:c}return null},L=function(e){return b.findIndex((function(t){return t.id==e}))},Y=function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!M){e.next=5;break}return e.next=3,c("https://api.spotify.com/v1/me/player/pause",j);case 3:e.next=7;break;case 5:return e.next=7,c("https://api.spotify.com/v1/me/player/play",j);case 7:S(!M);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){var t=(L(O.id)+b.length+e)%b.length;f(b[t]),k(0)};return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("img",{src:O.image,className:"track_art_large"}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"title",children:[" ",O.name]}),Object(l.jsx)("div",{className:"subtext",children:J(O.artists)}),Object(l.jsx)("div",{className:"scrubber-bar",children:Object(l.jsx)("div",{className:"scrubber",style:{width:N/O.duration_ms*100+"%"},children:" "})}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)("button",{onClick:Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("https://api.spotify.com/v1/me/player/previous",j);case 2:S(!0),K(-1);case 4:case"end":return e.stop()}}),e)}))),children:Object(l.jsx)(E.a,{style:{fontSize:72}})}),Object(l.jsx)("button",{onClick:Y,children:M?Object(l.jsx)(z.a,{style:{fontSize:72}}):Object(l.jsx)(I.a,{style:{fontSize:72}})}),Object(l.jsx)("button",{onClick:Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("https://api.spotify.com/v1/me/player/next",j);case 2:S(!0),K(1);case 4:case"end":return e.stop()}}),e)}))),children:Object(l.jsx)(Z.a,{style:{fontSize:72}})})]})]})]}),Object(l.jsx)(B,{})]})},o=function(){var e="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("eda3b64588f64c89b87ec0cba023ae4a","&response_type=token&redirect_uri=").concat("http://localhost:3000","&scope=").concat(A.join("%20"));return Object(l.jsx)("meta",{"http-equiv":"refresh",content:"0; url="+e})};return Object(l.jsx)("div",{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/music",children:Object(l.jsx)(o,{})}),Object(l.jsx)(i.a,{path:"/:responseToken",children:Object(l.jsx)(r,{})})]})})};var G=function(){return Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:"/",children:Object(l.jsx)(j,{})}),Object(l.jsx)(i.a,{path:"/:access_token(access_token=.*)",component:P}),Object(l.jsx)(i.a,{path:"/clock",children:Object(l.jsx)(v,{})}),Object(l.jsx)(i.a,{path:"/weather/:city",children:Object(l.jsx)(N,{})}),Object(l.jsx)(i.a,{path:"/tasks",children:Object(l.jsx)(M,{})}),Object(l.jsx)(i.a,{path:"/music",children:Object(l.jsx)(P,{})})]})};r.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.64137d0d.chunk.js.map