(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(262)},139:function(e,t,a){},141:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=(a(136),a(139),a(9)),s=a(10),i=a(17),u=a(16),m=a(18),h=(a(141),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"col12 colm12 colt12 header"},r.a.createElement("h1",null,"BO4Stats"))}}]),t}(n.Component)),d=a(267),p=a(110),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{icon:r.a.createElement(p.a,{name:"search",inverted:!0,circular:!0,link:!0}),placeholder:"Search..."})}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("h1",null,"Search user"),r.a.createElement(f,null))}}]),t}(n.Component),b=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"query",value:function(e){return fetch(e).then(function(e){return e.json()})}},{key:"post",value:function(e,t){return fetch(e,{method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()})}}]),e}(),O="https://cod-api.theapinetwork.com/api/",j={VALIDATE:O+"validate",STATS:O+"stats",MATCHES:O+"matches"},v={BO4:"bo4",BO3:"bo3",WWII:"wwii",INFINITY_WAR:"iw"},k={PSN:"psn",XBOX_LIVE:"xbl",STEAM:"steam",BATTLE_NET:"bnet"};function y(e){return e.replace("#","%23")}var w=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.BO4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k.BATTLE_NET;return b.query("".concat(j.VALIDATE,"/").concat(t,"/").concat(y(e),"/").concat(a))}},{key:"getUserStats",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.BO4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k.BATTLE_NET;return console.log("".concat(j.STATS,"/").concat(t,"/").concat(y(e),"/").concat(a)),b.query("".concat(j.STATS,"/").concat(t,"/").concat(y(e),"/").concat(a))}}]),e}(),C=a(268),g=a(120),T=a.n(g),A=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data.data,t=this.props.data.users,a=this.props.stat,n=this.props.title;return r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,n),t.map(function(t){return r.a.createElement(C.a.Cell,null,e[t].stats[a])}))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.data,a=this.props.data.users,n=this.props.stats,l=void 0===this.props.precision?2:this.props.precision,c=this.props.title;return r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,c),a.map(function(a){return r.a.createElement(C.a.Cell,null,e.ratio(t[a].stats[n[0]],t[a].stats[n[1]],l))}))}},{key:"ratio",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return(e/t).toFixed(a)}}]),t}(n.Component);var L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:null,shouldUpdate:!0,isLoaded:!1,data:[],users:["izotov#1214","ozakin#11581","cremz#1991","yskio#1216"]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];this.state.users.forEach(function(a){t.push(w.getUserStats(a).then(function(t){e.state.data[a]=t},function(t){e.setState({isLoaded:!0,error:t})}))}),Promise.all(t).then(function(){e.state.isLoaded=!0,e.forceUpdate()})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data,l={users:this.state.users,data:n};return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",null,r.a.createElement(C.a,{celled:!0,inverted:!0},r.a.createElement(C.a.Header,null,r.a.createElement(C.a.Row,null,r.a.createElement(C.a.HeaderCell,null),this.state.users.map(function(e){return r.a.createElement(C.a.HeaderCell,null,e)}))),r.a.createElement(C.a.Body,null,r.a.createElement(A,{data:l,stat:"longestkillstreak",title:"Longest Killstreak"}),r.a.createElement(A,{data:l,stat:"curwinstreak",title:"Current win streak"}),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"Playtime"),this.state.users.map(function(e){return r.a.createElement(C.a.Cell,null,function(e){var t=T.a.duration(1e3*e),a=Math.floor(t.asDays()),n=Math.floor(t.asHours()-24*a);return"".concat(a,"d ").concat(n,"h")}(n[e].stats.timeplayed))})),r.a.createElement(S,{data:l,stats:["kills","deaths"],title:"K/D"}),r.a.createElement(S,{data:l,stats:["ekia","deaths"],title:"EKIA/D"}),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"Accuracy"),this.state.users.map(function(e){return r.a.createElement(C.a.Cell,null,function(e,t){var a=(e/t*100).toFixed(2);return"".concat(a,"%")}(n[e].stats.hits,n[e].stats.misses))})),r.a.createElement(A,{data:l,stat:"kills",title:"Total kills"}),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"Assists"),this.state.users.map(function(e){return r.a.createElement(C.a.Cell,null,function(e,t){var a=e-t,n=(100*a/e).toFixed(0);return"".concat(a," (").concat(n,"%)")}(n[e].stats.ekia,n[e].stats.kills))})),r.a.createElement(S,{data:l,stats:["wins","losses"],title:"W/L"}),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Cell,null,"Prestige-Level"),this.state.users.map(function(e){return r.a.createElement(C.a.Cell,null,n[e].stats.prestige," - ",n[e].stats.level)}))))):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"col12 colm12 colt12"},r.a.createElement(E,null),r.a.createElement(L,null))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"col12 colm12 colt12"},r.a.createElement("a",{href:"http://www.github.com/Poke1650/bo4stats"},"Fork on Github ",r.a.createElement(p.a,{name:"github",size:"large"})))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(B,null),r.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.9ba3d070.chunk.js.map