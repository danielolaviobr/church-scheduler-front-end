(this["webpackJsonpchurch-scheduler"]=this["webpackJsonpchurch-scheduler"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo-small.31b7bfe2.svg"},27:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/delete.4e3daeb8.svg"},42:function(e,t,a){e.exports=a(73)},53:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=a(10),o=a(2);a(27);var u=function(){return c.a.createElement("div",{id:"landing-page"},c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("main",null,c.a.createElement("h1",null,"Jovens Presbiteriana do Recreio"),c.a.createElement("p",null,"Agende sua visita")),c.a.createElement("footer",null,c.a.createElement(s.b,{to:"/celula",className:"redirect-button"},"C\xe9lula"),c.a.createElement(s.b,{to:"/galeria",className:"redirect-button"},"Galeria"))))};var i=function(){return c.a.createElement("div",null)},m=a(11),p=a.n(m),d=a(15),f=a(13),b=(a(53),a(91)),v=a(22),E=a.n(v),h=a(16),g=a.n(h),O=g.a.create({baseURL:"http://localhost:3003"});var j=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),o=Object(f.a)(l,2),u=o[0],i=o[1],m=Object(n.useState)({type:void 0,message:void 0,visible:!1}),v=Object(f.a)(m,2),h=v[0],g=v[1],j=Object(n.useState)(void 0),N=Object(f.a)(j,2),x=N[0],k=N[1];function w(){return(w=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("date/celula");case 2:t=e.sent,i(t.data.date);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){w.apply(this,arguments)}(),k(h.visible?c.a.createElement(b.a,{severity:h.type},h.message):void 0)}),[h]),c.a.createElement("div",{id:"celula-page"},c.a.createElement(s.b,{to:"/",className:"logo"},c.a.createElement("img",{src:E.a,alt:"In\xedcio"})),c.a.createElement("main",null,x,c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"C\xe9lula de Quinta-feira"),c.a.createElement("h3",null,u)),c.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Nome Completo"}),c.a.createElement(s.b,{to:"/celula",onClick:function(){O.post("celula",{name:a,date:u}).catch((function(e){console.log(e),g({type:"error",message:"Ocorreu um erro ao realizar a inscri\xe7\xe3o",visible:!0})})).then((function(e){e&&g({type:"success",message:"Inscri\xe7\xe3o realizada com sucesso",visible:!0})})),r("")},className:"confirm"},"Inscrever-se"),c.a.createElement(s.b,{to:"/",className:"cancel"},"Voltar")))},N=(a(71),a(40)),x=a.n(N);var k=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(f.a)(l,2),u=o[0],i=o[1],m=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=/\//gi,e.next=3,g.a.get("http://localhost:3003/celula/".concat(u.replace(t,"-")));case 3:a=e.sent,r(a.data);case 5:case"end":return e.stop()}}),e)}))),[u]),b=Object(n.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("http://localhost:3003/celula/".concat(t));case 2:m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m]),v=Object(n.useMemo)((function(){return a.map((function(e){return c.a.createElement("div",{key:e.id,className:"persons"},c.a.createElement("li",null,e.name),c.a.createElement("img",{className:"delete-icon",src:x.a,alt:"Deletar",onClick:function(){return b(e.id)}}))}))}),[a,b]),h=Object(n.useCallback)(Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://localhost:3003/date/celula");case 2:t=e.sent,i(t.data.date);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){h(),m()}),[h,m]),c.a.createElement("div",{id:"admin-page"},c.a.createElement(s.b,{to:"/",className:"logo"},c.a.createElement("img",{src:E.a,alt:"In\xedcio"})),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("header",null,"Cadastrados ",u),c.a.createElement("div",{className:"srollable-list"},c.a.createElement("ul",null,v))))};var w=function(){return c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:u}),c.a.createElement(o.a,{path:"/galeria",component:i}),c.a.createElement(o.a,{path:"/celula",component:j}),c.a.createElement(o.a,{path:"/admin",component:k})))};a(72);var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a1bd0e27.chunk.js.map