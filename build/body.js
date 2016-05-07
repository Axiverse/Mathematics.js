!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var n={Vector2:i(1),Vector3:i(2)};t.exports=n},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,n,s){i(this,t),s||(this.x=e||0,this.y=n||0)}return n(t,[{key:"set",value:function(t,e){return this.x=t,this.y=e,this}},{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"add",value:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}},{key:"addSelf",value:function(t){return this.x+=t.x,this.y+=t.y,this}},{key:"sub",value:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}},{key:"subSelf",value:function(t){return this.x-=t.x,this.y-=t.y,this}},{key:"multiplyScalar",value:function(t){return this.x*=t,this.y*=t,this}},{key:"divideScalar",value:function(t){return t?(this.x/=t,this.y/=t):this.set(0,0),this}},{key:"negate",value:function(){return this.multiplyScalar(-1)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"length",value:function(){return Math.sqrt(this.lengthSq())}},{key:"normalize",value:function(){return this.divideScalar(this.length())}},{key:"distanceTo",value:function(t){return Math.sqrt(this.distanceToSquared(t))}},{key:"distanceToSquared",value:function(t){var e=this.x-t.x,i=this.y-t.y;return e*e+i*i}},{key:"setLength",value:function(t){return this.normalize().multiplyScalar(t)}},{key:"equals",value:function(t){return t.x===this.x&&t.y===this.y}}]),t}();t.exports=s},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,n,s,u){i(this,t),u||(this.x=e||0,this.y=n||0,this.z=s||0)}return n(t,[{key:"set",value:function(t,e,i){return this.x=t,this.y=e,this.z=i,this}},{key:"setX",value:function(t){return this.x=t,this}},{key:"setY",value:function(t){return this.y=t,this}},{key:"setZ",value:function(t){return this.z=t,this}},{key:"copy",value:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}},{key:"clone",value:function(){return new t(this.x,this.y,this.z)}},{key:"add",value:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}},{key:"addSelf",value:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}},{key:"addScalar",value:function(t){return this.x+=t,this.y+=t,this.z+=t,this}},{key:"sub",value:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}},{key:"subComponent",value:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}},{key:"multiply",value:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}},{key:"multiplySelf",value:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}},{key:"multiplyScalar",value:function(t){return this.x*=t,this.y*=t,this.z*=t,this}},{key:"divideSelf",value:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}},{key:"divideScalar",value:function(t){return this.x/=t,this.y/=t,this.z/=t,this}},{key:"negate",value:function(){return this.multiplyScalar(-1)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"lengthSq",value:function(){return this.x*this.x+this.y*this.y+this.z*this.z}},{key:"length",value:function(){return Math.sqrt(this.lengthSq())}},{key:"lengthManhattan",value:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}},{key:"normalize",value:function(){return this.divideScalar(this.length())}},{key:"setLength",value:function(t){return this.normalize().multiplyScalar(t)}},{key:"cross",value:function(t,e){return this.x=t.y*e.z-t.z*e.y,this.y=t.z*e.x-t.x*e.z,this.z=t.x*e.y-t.y*e.x,this}},{key:"crossSelf",value:function(t){var e=this.x,i=this.y,n=this.z;return this.x=i*t.z-n*t.y,this.y=n*t.x-e*t.z,this.z=e*t.y-i*t.x,this}},{key:"distanceTo",value:function(t){return Math.sqrt(this.distanceToSquared(t))}},{key:"distanceToSquared",value:function(e){return(new t).sub(this,e).lengthSq()}},{key:"isZero",value:function(){return this.lengthSq()<1e-4}},{key:"max",value:function(t){for(var e=0;e<t.length;e++)this.x=Math.max(t[e].x,this.x),this.y=Math.max(t[e].y,this.y),this.z=Math.max(t[e].z,this.z)}},{key:"min",value:function(t){for(var e=0;e<t.length;e++)this.x=Math.min(t[e].x,this.x),this.y=Math.min(t[e].y,this.y),this.z=Math.min(t[e].z,this.z)}},{key:"midpoint",value:function(t,e){return this.x=(t.x+e.x)/2,this.y=(t.y+e.y)/2,this.z=(t.z+e.z)/2,this}}]),t}();s.Origin=Object.freeze(new s(0,0,0)),s.UnitX=Object.freeze(new s(1,0,0)),s.UnitY=Object.freeze(new s(0,1,0)),s.UnitZ=Object.freeze(new s(0,0,1)),t.exports=s}]);