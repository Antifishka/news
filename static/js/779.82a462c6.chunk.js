"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[779],{9779:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,a,s,c,i=t(5861),u=t(885),o=t(4687),p=t.n(o),f=t(2791),h=t(7689),d=t(4390),l=t(168),v=t(7691),x=v.default.ul(r||(r=(0,l.Z)(["\n  padding: 16px 0;\n  list-style: disc;\n  margin-left: 10px;\n"]))),g=v.default.li(a||(a=(0,l.Z)(["\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #EEEEEE;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), \n  0px 4px 4px rgb(0 0 0 / 6%), \n  1px 4px 6px rgb(0 0 0 / 16%);\n"]))),m=v.default.h4(s||(s=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),w=v.default.p(c||(c=(0,l.Z)(["\n  padding: 16px 0;\n"]))),b=t(184),y=function(){var e=(0,h.UO)().movieId,n=(0,f.useState)([]),t=(0,u.Z)(n,2),r=t[0],a=t[1];return(0,f.useEffect)((function(){function n(){return(n=(0,i.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.Z.fetchMovieReviews(e);case 2:t=n.sent,console.log(t),a(t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,b.jsx)(b.Fragment,{children:r.length>0?(0,b.jsx)(x,{children:r.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,b.jsxs)(g,{children:[(0,b.jsxs)(m,{children:["Author: ",t]}),(0,b.jsx)("p",{children:r})]},n)}))}):(0,b.jsx)(w,{children:"We don't have any reviews for this movie"})})}},4390:function(e,n,t){var r=t(5861),a=t(4687),s=t.n(a),c=t(1044).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e09f06c48afcb3ebfd8a25b0b6965d1e",language:"en-US"}});function i(){return(i=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day?page=".concat(n));case 2:if(t=e.sent,(r=t.data).results.length){e.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(n,t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie?query=".concat(n,"&page=").concat(t));case 2:if(r=e.sent,(a=r.data).results.length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"/credits"));case 2:if(t=e.sent,(r=t.data.cast).length){e.next=6;break}throw new Error("Not found cast...");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={fetchTrendingMovies:function(e){return i.apply(this,arguments)},fetchMovieById:function(e){return u.apply(this,arguments)},fetchSearchMovies:function(e,n){return o.apply(this,arguments)},fetchMovieCredits:function(e){return p.apply(this,arguments)},fetchMovieReviews:function(e){return f.apply(this,arguments)}};n.Z=h}}]);
//# sourceMappingURL=779.82a462c6.chunk.js.map