"use strict";(self.webpackChunkcurso_react_java=self.webpackChunkcurso_react_java||[]).push([[471],{471:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return i}});var r=n(9069),a=n(3127),u=n(236),i=(n(1045),function(t,e,n,i,c){var o=t.ownerDocument.defaultView,s=(0,a.i)(t),f=function(t){return s?-t.deltaX:t.deltaX},v=function(t){return s?-t.velocityX:t.velocityX};return(0,u.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return s?e>=o.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=f(t)/o.innerWidth;i(e)},onEnd:function(t){var e=f(t),n=o.innerWidth,a=e/n,u=v(t),i=u>=0&&(u>.2||e>n/2),s=(i?1-a:a)*n,h=0;if(s>5){var d=s/Math.abs(u);h=Math.min(d,540)}c(i,a<=0?.01:(0,r.k)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=471.a27ffca4.chunk.js.map