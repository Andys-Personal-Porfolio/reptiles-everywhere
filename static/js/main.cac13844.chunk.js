(this["webpackJsonpkids-books"]=this["webpackJsonpkids-books"]||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/crocodile-src.b993ed36.png"},23:function(e,t,n){e.exports=n.p+"static/media/lizard-src.e5ff92d7.png"},24:function(e,t,n){e.exports=n.p+"static/media/reptile-src.25aa1c47.png"},25:function(e,t,n){e.exports=n.p+"static/media/snake-src.be32f644.png"},26:function(e,t,n){e.exports=n.p+"static/media/turtle-src.d2d1c278.png"},28:function(e,t,n){e.exports=n(45)},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=n(7),s=(n(33),n(27)),l=n(17),u=n(5),m=n.n(u),p=n(8),f=n(12),v=(n(35),function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["https://www.googleapis.com/","books/v1/volumes?","q=".concat(t),"+nonfiction+children+books","&printType=books","&filter=partial","&startIndex=0","&maxResults=40"],"turtles"===t&&n.splice(3,0,"+-mutant+-Michelangelo"),a=n.join(""),e.prev=3,e.next=6,fetch(a);case 6:return r=e.sent,e.next=9,r.json();case 9:if(o=e.sent,!r.ok){e.next=14;break}return e.abrupt("return",o);case 14:throw new Error(r.statusText);case 15:e.next=20;break;case 17:throw e.prev=17,e.t0=e.catch(3),new Error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}()),b=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=(n(36),n(37),function(e){var t=e.books,n=e.category,a=e.viewType,o=t.filter((function(e){return!0===e.accessInfo.embeddable}));return o.map((function(e,t){var o=e.searchInfo?e.searchInfo.textSnippet:"No description available!";return r.a.createElement("div",{key:t+"book-info",className:"book-info"},"CoverView"===a&&function(e){return e.coverImg?r.a.createElement("img",{src:e.coverImg.medium,alt:e.volumeInfo.title+" cover"}):r.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title+" cover"})}(e),"SummaryView"===a&&function(e,t){return r.a.createElement("div",null,r.a.createElement("h2",{className:"book-title ".concat(e.volumeInfo.title.length)},e.volumeInfo.title),r.a.createElement("section",{className:"book-description"},r.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.volumeInfo.title+" cover"}),r.a.createElement("p",{className:"text-snippet",dangerouslySetInnerHTML:{__html:t}})),r.a.createElement("p",null,e.volumeInfo.authors))}(e,o),r.a.createElement(i.b,{to:"/".concat(n,"/EmbeddedBook/").concat(e.id),style:{textDecoration:"none"}},r.a.createElement("button",{"aria-label":"Start Reading ".concat(e.volumeInfo.title)},"START READING")))}))}),h=function(e){var t=e.books,n=e.category,a=e.singleBooks,o=e.getSingleBooks,c=e.viewType,s=e.setBooks,l=n[0].toUpperCase()+n.slice(1);l.slice(0,l.length-1);return r.a.createElement(r.a.Fragment,null,"SummaryView"===c&&r.a.createElement(i.b,{to:"/".concat(n,"/CoverView")},r.a.createElement("button",{className:"cover-btn",onClick:function(){s([]),o()}},"Book Covers")),"CoverView"===c&&r.a.createElement(i.b,{to:"/".concat(n,"/SummaryView")},r.a.createElement("button",{className:"cover-btn"},"Summaries")),r.a.createElement("div",{className:"book-container"},t.length&&r.a.createElement(d,{books:t,category:n,images:a,viewType:c})))},k=n(1),g=(n(43),function(e){var t=e.bookToRender,n=t.volumeInfo.previewLink+"&output=embed",a=n.slice(0,4)+"s"+n.slice(4),o=Object(k.f)();return r.a.createElement("section",{className:"embedded-book-section"},r.a.createElement("button",{"aria-label":"Go Back To Home Page",onClick:function(){return o.goBack()}},"\u2b05 GO BACK"),n.length&&r.a.createElement("iframe",{frameBorder:"0",scrolling:"no",style:{border:0},src:a,width:"600",height:"700 ",role:"document",title:t.volumeInfo.title}))}),E=(n(44),n(22)),w=n.n(E),y=n(23),x=n.n(y),j=n(24),I=n.n(j),B=n(25),O=n.n(B),S=n(26),N=n.n(S),T=function(e){var t=e.searchBooks,n=e.getSingleBooks,a=Object(k.g)(),o=a.pathname.split("/")[2];"EmbeddedBook"===o&&(o="SummaryView");var c=a.pathname.split("/")[1];return r.a.createElement("header",null,r.a.createElement("h1",null,"Reptiles Everywhere!"),r.a.createElement("div",{className:"reptile-image"},function(e){var a=[w.a,x.a,I.a,O.a,N.a];return["crocodiles","lizards","reptiles","snakes","turtles"].map((function(e,s){return r.a.createElement("section",{className:"button-and-image",key:e+"button"},r.a.createElement("img",{src:a[s],alt:e}),r.a.createElement(i.c,{to:"/".concat(e,"/").concat(o),activeClassName:"active"},r.a.createElement("button",{className:"nav-link-btn",onClick:function(e){return function(e){var a=e.target.innerHTML;"CoverView"===o&&a===c?n(a):t(a)}(e)}},e)))}))}()))};var C=function(){var e=Object(k.g)(),t=e?e.pathname.split("/")[1]:"reptiles",n=Object(a.useState)([]),o=Object(f.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)(""),d=Object(f.a)(u,2),E=d[0],w=d[1],y=Object(a.useState)(t),x=Object(f.a)(y,2),j=x[0],I=x[1],B=Object(a.useState)(!0),O=Object(f.a)(B,2),S=O[0],N=O[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(j);case 3:t=e.sent,i(t.items),N(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[j]);var C=function(e){c.map((function(e){return e.selfLink})).forEach(function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},V=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i([]),e.prev=1,e.next=4,b(t);case 4:n=e.sent,a=c.find((function(e){return e.id===n.id})),r=Object(l.a)(Object(l.a)({},a),{},{coverImg:n.volumeInfo.imageLinks}),i((function(e){return[].concat(Object(s.a)(e),[r])})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),w(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){I(e)};return r.a.createElement("main",{className:"App"},E&&r.a.createElement("h1",{className:"error-message"},"Reptiles are eating! Check back in a minute to see if they are done."),r.a.createElement(T,{getSingleBooks:C,searchBooks:L}),S&&!E&&r.a.createElement("h1",null,"Loading..."),c.length>0&&r.a.createElement(k.b,{path:"/:category/:viewType",render:function(e){var t=e.match,n=t.params.category,a=t.params.viewType;if("EmbeddedBook"!==a)return r.a.createElement(h,{setBooks:i,books:c,category:n,getSingleBooks:C,viewType:a})}}),c.length>0&&r.a.createElement(k.b,{path:"/:category/EmbeddedBook/:id",render:function(e){var t=e.match.params,n=t.id,a=t.category,o=c.find((function(e){return e.id===n}));return o||L(a),r.a.createElement(g,{bookToRender:o,getSingleBook:V})}}),r.a.createElement(k.b,{path:"/"},r.a.createElement(k.a,{to:"/reptiles/SummaryView"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.cac13844.chunk.js.map