//>>built
define("dojox/lang/aspect/memoizerGuard",["dijit","dojo","dojox"],function(h,b,f){b.provide("dojox.lang.aspect.memoizerGuard");(function(){var d=f.lang.aspect,g=function(a){var e=d.getContext().instance,c;if(c=e.__memoizerCache)0==arguments.length?delete e.__memoizerCache:b.isArray(a)?b.forEach(a,function(a){delete c[a]}):delete c[a]};d.memoizerGuard=function(a){return{after:function(){g(a)}}}})()});