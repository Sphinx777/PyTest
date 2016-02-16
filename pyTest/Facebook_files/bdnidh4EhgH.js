/*!CK:1366641708!*//*1448310608,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["raovg"]); }

__d('LogoutMenu',['csx','DOMQuery','emptyFunction','Event','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m;l('MenuItem',function(o){m=o;});function n(o,p){var q;if(p)p.subscribe('confirm',function(){k.fire(q,'submit');q.submit();});o.subscribe('itemclick',function(r,s){switch(s.item.getValue()){case 'logout':q=i.find(o.getRoot(),"._w0d");break;case 'help':if(m)m.prototype.hasAction=j.thatReturnsFalse;break;default:break;}if(q)if(p){p.show();}else{k.fire(q,'submit');q.submit();}});}f.exports.init=n;},null);
__d('legacy:RevealLink',['revealLinkRegister'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.revealLinkRegister=c('revealLinkRegister');},3);