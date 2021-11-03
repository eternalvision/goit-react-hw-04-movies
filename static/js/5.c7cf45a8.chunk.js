(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{52:function(e,t,n){"use strict";var r=n(56),a=n.n(r),c=n(57),i=n(58),s=n.n(i),o="62e550dd1865c74989dd777e4514ffe1";s.a.defaults.baseURL="https://api.themoviedb.org/3";var u={fetchTrendMovies:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("trending/movie/day?api_key=".concat(o)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieDetails:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchMovies:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchCast:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US")).then((function(e){return e.data.cast}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fetchReviews:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=u},55:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return c}))},90:function(e,t,n){"use strict";n.r(t);var r=n(55),a=n(50),c=n(51),i=n(54),s=n(53),o=n(0),u=n(52),l=n(3),j=n(8),h=n(1),p=Object(l.f)((function(e){var t=e.history,n=e.location;return Object(h.jsx)("button",{type:"button",onClick:function(){var e;t.push((null===n||void 0===n||null===(e=n.state)||void 0===e?void 0:e.from)||j.a.home)},children:"X"})})),b=n(10),f=n(16),v=n.n(f),d=(n(11),Object(o.lazy)((function(){return n.e(7).then(n.bind(null,91))}))),O=Object(o.lazy)((function(){return n.e(8).then(n.bind(null,92))})),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.match,n=e.location;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Additional information"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(b.c,{to:{pathname:"".concat(t.url,"/cast"),state:Object(r.a)({},n.state)},className:"nav-link",activeClassName:"active",children:"Cast"})}),Object(h.jsx)("li",{children:Object(h.jsx)(b.c,{to:{pathname:"".concat(t.url,"/reviews"),state:Object(r.a)({},n.state)},className:"nav-link",activeClassName:"active",children:"Reviews"})})]}),Object(h.jsx)(o.Suspense,{fallback:Object(h.jsx)("div",{className:"Loader",children:Object(h.jsx)(v.a,{type:"Rings",color:"#00BFFF",height:200,width:200})}),children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:j.a.cast,component:d}),Object(h.jsx)(l.a,{path:j.a.reviews,component:O})]})})]})})}}]),n}(o.Component),g=Object(l.f)(m),x=function(e){var t=e.poster_path,n=e.vote_average,r=e.genres,a=e.title,c=e.overview,i=10*n+"%",s=r.map((function(e){return e.name})).join(", "),o="https://image.tmdb.org/t/p/w300"+t;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{src:o,alt:a}),Object(h.jsx)("h1",{children:a}),Object(h.jsxs)("p",{children:["Raiting: ",i]}),Object(h.jsx)("h3",{children:"Overview:"}),Object(h.jsx)("span",{children:c}),Object(h.jsx)("h3",{children:"Genres:"}),Object(h.jsx)("span",{children:s})]})},y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={poster_path:"",release_date:"",first_air_date:"",title:"",original_name:"",vote_average:0,overview:"",genres:[],id:0,error:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;u.a.fetchMovieDetails(t).then((function(t){return e.setState(Object(r.a)({},t))})).catch((function(t){return e.setState(t)}))}},{key:"render",value:function(){var e=this.state.error;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{className:"film-info",children:[Object(h.jsx)(p,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Movie Details"}),Object(h.jsx)(x,Object(r.a)({},this.state))]}),Object(h.jsx)(g,{}),e&&Object(h.jsx)("h3",{className:"ErrorMessage",children:e.message})]})})}}]),n}(o.Component);t.default=y}}]);
//# sourceMappingURL=5.c7cf45a8.chunk.js.map