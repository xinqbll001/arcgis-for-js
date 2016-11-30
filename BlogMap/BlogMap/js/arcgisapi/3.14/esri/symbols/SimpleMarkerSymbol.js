// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/symbols/SimpleMarkerSymbol","dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has dojox/gfx/_base ../kernel ../lang ./MarkerSymbol ./SimpleLineSymbol".split(" "),function(d,e,s,t,n,p,q,u,r){var f={STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"},m={style:f.STYLE_CIRCLE,color:[255,255,255,0.25],size:12,angle:0,xoffset:0,yoffset:0};d=d(u,{declaredClass:"esri.symbol.SimpleMarkerSymbol",type:"simplemarkersymbol",
_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},constructor:function(a,b,c,d){a?e.isString(a)?(this.style=a,b&&(this.size=b),c&&(this.outline=c),d&&(this.color=d)):(this.style=q.valueOf(this._styles,this.style),a.outline&&(this.outline=new r(a.outline))):(e.mixin(this,m),this.size=n.pt2px(this.size),this.outline=new r(this.outline),this.color=new s(this.color));this.style||(this.style=f.STYLE_CIRCLE)},setStyle:function(a){this.style=
a;return this},setPath:function(a){this.path=a;this.setStyle(f.STYLE_PATH);return this},setOutline:function(a){this.outline=a;return this},getStroke:function(){return this.outline&&this.outline.getStroke()},getFill:function(){return this.color},_setDim:function(a,b,c){this._targetWidth=a;this._targetHeight=b;this._spikeSize=c},getShapeDescriptors:function(){var a,b,c,d=this.style,e=(this.size||n.pt2px(m.size))/2,g=0-e,k=0+e,l=0-e,h=0+e;switch(d){case f.STYLE_CIRCLE:a={type:"circle",cx:0,cy:0,r:e};
b=this.getFill();if(c=this.getStroke())c.style=c.style||"Solid";break;case f.STYLE_CROSS:a={type:"path",path:"M "+g+",0 L "+k+",0 M 0,"+l+" L 0,"+h+" E"};b=null;c=this.getStroke();break;case f.STYLE_DIAMOND:a={type:"path",path:"M "+g+",0 L 0,"+l+" L "+k+",0 L 0,"+h+" L "+g+",0 E"};b=this.getFill();c=this.getStroke();break;case f.STYLE_SQUARE:a={type:"path",path:"M "+g+","+h+" L "+g+","+l+" L "+k+","+l+" L "+k+","+h+" L "+g+","+h+" E"};b=this.getFill();c=this.getStroke();break;case f.STYLE_X:a={type:"path",
path:"M "+g+","+h+" L "+k+","+l+" M "+g+","+l+" L "+k+","+h+" E"};b=null;c=this.getStroke();break;case f.STYLE_PATH:a={type:"path",path:this.path||""},b=this.getFill(),c=this.getStroke()}return{defaultShape:a,fill:b,stroke:c}},toJson:function(){var a=e.mixin(this.inherited("toJson",arguments),{type:"esriSMS",style:this._styles[this.style]}),b=this.outline;b&&(a.outline=b.toJson());a.path=this.path;return q.fixJson(a)}});e.mixin(d,f);d.defaultProps=m;t("extend-esri")&&(e.setObject("symbol.SimpleMarkerSymbol",
d,p),p.symbol.defaultSimpleMarkerSymbol=m);return d});