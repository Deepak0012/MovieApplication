(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(4),a=n.n(s),r=(n(9),n(10),n(2)),o=n(0),j=function(e){var t,n=e.movie,c=n.poster_path,i=n.title,s=n.vote_average,a=n.overview;return Object(o.jsxs)("div",{className:"movie",children:[Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280"+c,alt:i}),Object(o.jsxs)("div",{className:"movie-info",children:[Object(o.jsx)("h3",{children:i}),Object(o.jsx)("span",{className:(t=s,t>=8?"green":t>=5?"orange":"red"),children:s})]}),Object(o.jsxs)("div",{className:"overview",children:[Object(o.jsx)("h3",{children:"Overview:"}),a]})]})},d=function(e){var t=e.movies;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("main",{id:"main",children:t.length&&t.map((function(e){return Object(o.jsx)(j,{movie:e},e.id)}))})})},l=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!0),a=Object(r.a)(s,2),j=a[0],l=a[1],b=Object(c.useState)(null),u=Object(r.a)(b,2),h=u[0],v=u[1];return Object(c.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1").then((function(e){return e.json()})).then((function(e){i(e.results),l(!1)})).catch((function(e){v("Something went wrong"),l(!1)}))}),[]),j?Object(o.jsx)("div",{className:"loader",children:"Loading your movies ..."}):h?Object(o.jsx)("div",{className:"loader",children:h}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"title",children:"Movie Application"}),Object(o.jsx)(d,{a:"a",movies:n})]})},b=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l,{})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b0da1a2a.chunk.js.map