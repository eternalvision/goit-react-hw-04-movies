(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[8],{92:function(e,t,r){"use strict";r.r(t);var n=r(50),c=r(51),s=r(54),a=r(53),i=r(0),o=r(52),h=r(16),u=r.n(h),j=(r(11),r(1)),l=function(e){var t=e.author,r=e.content;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("h5",{children:["Author: ",t]}),Object(j.jsx)("p",{children:r})]})},v=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(){var e;Object(n.a)(this,r);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={reviews:[],error:null},e}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;o.a.fetchReviews(t).then((function(t){return e.setState({reviews:t})})).catch((function(t){return e.setState(t)}))}},{key:"render",value:function(){var e=this.state,t=e.reviews,r=e.error,n=e.isLoading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{children:n?Object(j.jsx)("div",{className:"Loader",children:Object(j.jsx)(u.a,{type:"Rings",color:"#00BFFF",height:200,width:200})}):t.length>0?t.map((function(e){var t=e.id,r=e.author,n=e.content;return Object(j.jsx)(l,{author:r,content:n},t)})):Object(j.jsx)("span",{children:"No reviews"})}),r&&Object(j.jsx)("h3",{className:"ErrorMessage",children:r.message})]})}}]),r}(i.Component);t.default=v}}]);
//# sourceMappingURL=8.1d76a056.chunk.js.map