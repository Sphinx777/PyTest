/*!CK:2889817417!*//*1448250542,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["qgka6"]); }

__d('ConnectionsPYMLTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.clear();}k.prototype.log=function(){i.log('logger:ConnectionsPYMLLoggerConfig',this.$ConnectionsPYMLTypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:ConnectionsPYMLLoggerConfig',this.$ConnectionsPYMLTypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$ConnectionsPYMLTypedLogger1={};return this;};k.prototype.updateData=function(m){this.$ConnectionsPYMLTypedLogger1=babelHelpers._extends({},this.$ConnectionsPYMLTypedLogger1,m);return this;};k.prototype.setEvent=function(m){this.$ConnectionsPYMLTypedLogger1.event=m;return this;};k.prototype.setLikeSource=function(m){this.$ConnectionsPYMLTypedLogger1.like_source=m;return this;};k.prototype.setPageID=function(m){this.$ConnectionsPYMLTypedLogger1.page_id=m;return this;};k.prototype.updateExtraData=function(m){m=j(i.serializeMap(m));i.checkExtraDataFieldNames(m,l);this.$ConnectionsPYMLTypedLogger1=babelHelpers._extends({},this.$ConnectionsPYMLTypedLogger1,m);return this;};k.prototype.addToExtraData=function(m,n){var o={};o[m]=n;return this.updateExtraData(o);};var l=['event','like_source','page_id'];f.exports=k;},null);