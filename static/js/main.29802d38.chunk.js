(this["webpackJsonpnice-react-ticker-example"]=this["webpackJsonpnice-react-ticker-example"]||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n(4),r=n.n(i),a=(n(13),n(5)),c=n(6),l=n(8),o=n(7),A=n(1);function m(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var d={ticker:"styles_ticker__-0UvZ","ticker-list":"styles_ticker-list__1JKu-",tickerItem:"styles_tickerItem__Vj57z"};m('.styles_ticker__-0UvZ {\n  display: flex;\n  background-color: #0c0e15;\n  width: 100%;\n  overflow: hidden;\n  flex: 0 0 100%;\n}\n\n.styles_ticker-list__1JKu- {\n  display: flex;\n  flex: 0 0 100%;\n  width: 100%;\n  animation: styles_ticker__-0UvZ 15s infinite linear;\n}\n\n.styles_ticker__-0UvZ:hover .styles_ticker-list__1JKu- {\n  animation-play-state: paused;\n}\n\n@keyframes styles_ticker__-0UvZ {\n  0% {\n    transform: translateX(0%);\n  }\n\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.styles_tickerItem__Vj57z {\n  border-left: 1px solid transparent;\n  display: table-cell;\n  position: relative;\n  vertical-align: top;\n  color: #fff;\n}\n\n.styles_tickerItem__Vj57z:hover {\n  background-color: #000;\n}\n\n.styles_tickerItem__Vj57z:after {\n  background: #2a2e39;\n  content: "";\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  left: -1px;\n  width: 1px;\n}\n');var g={tickerItemFinancial:"styles_tickerItemFinancial__m6Lt7",tickerTopLevel:"styles_tickerTopLevel__vRrjN",tickerStats:"styles_tickerStats__7TXcs",tickerInfo:"styles_tickerInfo__tzkOM",tickerChangePercentage:"styles_tickerChangePercentage__GMiXr",tickerCurrentPrice:"styles_tickerCurrentPrice__CnVpc",tickerChangeNegative:"styles_tickerChangeNegative__4JfPL",tickerChangePositive:"styles_tickerChangePositive__9AJcP"};m(".styles_tickerItemFinancial__m6Lt7 {\n  padding: 10px 15px;\n  height: 50px;\n  width: 180px;\n}\n\n.styles_tickerTopLevel__vRrjN {\n  display: flex;\n  text-transform: uppercase;\n  font-size: 12px;\n  height: 20px;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n.styles_tickerStats__7TXcs {\n  display: flex;\n}\n\n.styles_tickerInfo__tzkOM {\n  display: flex;\n  align-items: baseline;\n  margin-left: 0.2rem;\n}\n\n.styles_tickerChangePercentage__GMiXr {\n  font-size: 22px;\n  line-height: 26px;\n}\n\n.styles_tickerCurrentPrice__CnVpc {\n  font-size: 12px;\n  margin: 0 0 0 8px;\n}\n\n.styles_tickerChangeNegative__4JfPL {\n  color: #ef5350;\n}\n\n.styles_tickerChangePositive__9AJcP {\n  color: #26a69a;\n}\n");var p=function(e){var t=e.change?g.tickerChangePositive:g.tickerChangeNegative;return A.createElement("div",{"data-id":e.id,className:[d.tickerItem,g.tickerItemFinancial].join(" ")},A.createElement("div",{className:g.tickerTopLevel},A.createElement("div",{className:g.tickerSymbol},e.symbol),A.createElement("div",{className:g.lastPrice},e.lastPrice)),A.createElement("div",{className:g.tickerStats},A.createElement("img",{className:g.tickerMovement,src:e.change?"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2326a69a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-chevron-up%22%3E%3Cpolyline%20points%3D%2218%2015%2012%209%206%2015%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E":"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ef5350%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22feather%20feather-chevron-down%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E",alt:e.change?"up":"down"}),A.createElement("div",{className:[t,g.tickerInfo].join(" ")},A.createElement("div",{className:g.tickerChangePercentage},e.percentage),A.createElement("div",{className:g.tickerCurrentPrice},e.currentPrice))))},h={newsticker:"styles_newsticker__py7eW",newsWrapper:"styles_newsWrapper__KvsKt",title:"styles_title__n7qOv",meta:"styles_meta__I1GUO",icon:"styles_icon__HTIz4"};m(".styles_newsticker__py7eW {\n  min-width: 40%;\n  padding: 0.5rem;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  text-decoration: none;\n}\n\n.styles_newsWrapper__KvsKt {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: flex-start;\n}\n\n.styles_title__n7qOv {\n  text-overflow: ellipsis;\n  word-wrap: none;\n  white-space: nowrap;\n  max-width: auto;\n  overflow: hidden;\n}\n\n.styles_title__n7qOv:hover {\n  text-decoration: underline;\n}\n\n.styles_meta__I1GUO {\n  font-size: 10px;\n}\n\n.styles_icon__HTIz4 {\n  width: 25px;\n}\n\n.styles_icon__HTIz4 img {\n  width: 100%;\n}\n");var y=function(e){return A.createElement("a",{className:[h.newsticker,d.tickerItem].join(" "),href:e.url,target:"_blank"},A.createElement("div",{className:h.icon},A.createElement("img",{src:e.icon,alt:e.iconAlt})),A.createElement("div",{className:h.newsWrapper},A.createElement("div",{className:h.title},e.title),A.createElement("small",{className:h.meta},e.meta)))},k=function(e){return A.createElement("div",{className:d.ticker},A.createElement("div",{className:d["ticker-list"]},e.children),e.isNewsTicker?"":A.createElement("div",{className:d["ticker-list"]},e.children))},f="data:image/png;base64,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",P=n(0),C=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsxs)(k,{show:!0,children:[Object(P.jsx)(p,{id:"1",change:!0,symbol:"S&P 500",lastPrice:"3372.2",percentage:"0.38%",currentPrice:"12.9"}),Object(P.jsx)(p,{id:"2",change:!0,symbol:"AAPL",lastPrice:"3372.2",percentage:"0.38%",currentPrice:"12.9"}),Object(P.jsx)(p,{id:"3",change:!0,symbol:"GOOG",lastPrice:"3372.2",percentage:"0.38%",currentPrice:"12.9"}),Object(P.jsx)(p,{id:"4",change:!1,symbol:"S&P 500",lastPrice:"3372.2",percentage:"0.38%",currentPrice:"12.9"}),Object(P.jsx)(p,{id:"5",change:!1,symbol:"S&P 500",lastPrice:"3372.2",percentage:"0.38%",currentPrice:"12.9"}),Object(P.jsx)(p,{id:"6",change:!1,symbol:"S&P 500",lastPrice:"3372.2",percentage:"0.38%",currentPrice:"12.9"})]}),Object(P.jsx)("div",{className:"newsticker",children:Object(P.jsxs)(k,{show:!0,isNewsTicker:!0,children:[Object(P.jsx)(y,{id:"1",icon:f,title:"Blue passports to be issued to Brits for the first time in decades next month decades next month decades next month decades next month",url:" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed",meta:"11:10:20"}),Object(P.jsx)(y,{id:"2",title:"Blue passports to be issued to Brits for the first time in decades next month",url:" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed",meta:"11:10:20"}),Object(P.jsx)(y,{id:"3",title:"Blue passports to be issued to Brits for the first time in decades next month",url:" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed",meta:"11:10:20"}),Object(P.jsx)(y,{id:"4",title:"Blue passports to be issued to Brits for the first time in decades next month",url:" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed",meta:"11:10:20"}),Object(P.jsx)(y,{id:"5",icon:f,title:"Blue passports to be issued to Brits for the first time in decades next month",url:" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed",meta:"11:10:20"}),Object(P.jsx)(y,{id:"6",icon:f,title:"Blue passports to be issued to Brits for the first time in decades next month",url:" https://metro.co.uk/2020/02/22/blue-passports-issued-brits-first-time-decades-next-months-12281012/?ito=newsnow-feed",meta:"11:10:20"})]})})]})}}]),n}(s.Component);r.a.render(Object(P.jsx)(C,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.29802d38.chunk.js.map