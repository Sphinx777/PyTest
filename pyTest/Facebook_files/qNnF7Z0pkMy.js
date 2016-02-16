/*!CK:3577010988!*//*1448469886,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nzwZf"]); }

__d("ImageExtensions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};},null);
__d("PUWMethods",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste"};},null);
__d("VideoCreatorProductType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10};},null);
__d("VideoPlayerReason",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch"};},null);
__d('PagesEventObserver',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='pages_client_logging',j={VITAL_WAIT:h.VITAL_WAIT,logData_DEPRECATED:function(k,l){var m={delay:l||h.VITAL_WAIT};h.post(i,k,m);},notify:function(event,k,l,m,n){var o=babelHelpers._extends({},l,{event_name:event,page_id:k,dedupe:m!==false}),p={delay:n||h.VITAL_WAIT};h.post(i,o,p);}};f.exports=j;},null);
__d('escapeJSQuotes',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){if(typeof i=='undefined'||i==null||!i.valueOf())return '';return i.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}f.exports=h;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('IntlRomanicNumberType',['IntlVariations'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getNumberVariationType:function(j){if(j===0||j===1){return h.NUMBER_SINGULAR;}else return h.NUMBER_PLURAL;}};f.exports=i;},null);
__d('ErrorDialog',['Dialog','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={showAsyncError:function(k){try{return j.show(k.getErrorSummary(),k.getErrorDescription());}catch(l){alert(k);}},show:function(k,l,m,n){return new h().setTitle(k).setBody(l).setButtons([h.OK]).setStackable(true).setModal(true).setHandler(m||i).setButtonsMessage(n||'').show();}};f.exports=j;},null);
__d('FullScreen',['Event','Arbiter','CSS','UserAgent','UserAgent_DEPRECATED','throttle','Keys'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={},p=false,q=function(v){if(h.getKeyCode(v)===n.ESC)v.stopPropagation();},r=function(){if(!p){document.addEventListener('keydown',q,true);p=true;}},s=function(){if(p){document.removeEventListener('keydown',q,true);p=false;}},t=Object.assign(new i(),{listenForEvent:function(v){var w=m(this.onChange,0,this);if(!o[v.id]){o[v.id]=true;h.listen(v,{webkitfullscreenchange:w,mozfullscreenchange:w,MSFullscreenChange:w,fullscreenchange:w});}},enableFullScreen:function(v){this.listenForEvent(v);if(v.webkitRequestFullScreen){if(l.chrome()){v.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}else v.webkitRequestFullScreen();}else if(v.mozRequestFullScreen){v.mozRequestFullScreen();}else if(v.msRequestFullscreen){r();v.msRequestFullscreen();}else if(v.requestFullScreen){v.requestFullScreen();}else return false;return true;},disableFullScreen:function(){if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else return false;return true;},getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;},isFullScreen:function(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement;},toggleFullScreen:function(v){if(this.isFullScreen()){this.disableFullScreen();return false;}else return this.enableFullScreen(v);return false;},onChange:function(){var v=this.isFullScreen();j.conditionClass(document.body,'fullScreen',v);this.inform('changed');if(!v)s();},isSupportedWithKeyboardInput:function(){return this.isSupported()&&!k.isBrowser('Safari');},isSupported:function(){var v=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return v||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen;}}),u=m(t.onChange,0,t);h.listen(document,{webkitfullscreenchange:u,mozfullscreenchange:u,MSFullscreenChange:u,fullscreenchange:u});f.exports=t;},null);
__d('HistoryManager',['Cookie','Env','Event','URI','UserAgent_DEPRECATED','isFacebookURI','emptyFunction','goOrReplace','isInIframe','setIntervalAcrossTransitions','SessionName'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();c('SessionName');var r={history:null,current:0,fragment:null,isInitialized:function(){return !!r._initialized;},init:function(){if(!i.ALLOW_TRANSITION_IN_IFRAME&&p())return;if(r._initialized)return r;var s=new k(window.location.href),t=s.getFragment()||'';if(t.charAt(0)==='!'){t=t.substr(1);s.setFragment(t);}Object.assign(r,{_initialized:true,fragment:t,orig_fragment:t,history:[s],callbacks:[],lastChanged:Date.now(),canonical:new k('#'),user:0,enabled:true,debug:n});if(window.history&&history.pushState){this.lastURI=document.URL;window.history.replaceState(this.lastURI,null);j.listen(window,'popstate',(function(u){var v=u&&u.state&&typeof u.state==='string';if(v&&r.lastURI!=u.state){r.lastURI=u.state;r.lastChanged=Date.now();r.notify(new k(u.state).getUnqualifiedURI().toString());}}).bind(r));if(l.webkit()<534||l.chrome()<=13){q(r.checkURI,42);r._updateRefererURI(this.lastURI);}return r;}r._updateRefererURI(k.getRequestURI(false));if(l.webkit()<500||l.firefox()<2){r.enabled=false;return r;}if('onhashchange' in window){j.listen(window,'hashchange',function(){setTimeout(r.checkURI.bind(r),0);});}else q(r.checkURI,42);return r;},registerURIHandler:function(s){r.callbacks.push(s);return r;},setCanonicalLocation:function(s){r.canonical=new k(s);return r;},notify:function(s){if(s==r.orig_fragment)s=r.canonical.getFragment();for(var t=0;t<r.callbacks.length;t++)try{if(r.callbacks[t](s))return true;}catch(u){}return false;},checkURI:function(){if(Date.now()-r.lastChanged<400)return;if(window.history&&history.pushState){var s=new k(document.URL).removeQueryData('ref').toString(),t=new k(r.lastURI).removeQueryData('ref').toString();if(s!=t){r.lastChanged=Date.now();r.lastURI=s;if(l.webkit()<534)r._updateRefererURI(s);r.notify(new k(s).getUnqualifiedURI().toString());}return;}if(l.webkit()&&window.history.length==200){if(!r.warned)r.warned=true;return;}var u=new k(window.location.href).getFragment();if(u.charAt(0)=='!')u=u.substr(1);u=u.replace(/%23/g,'#');if(u!=r.fragment.replace(/%23/g,'#')){r.debug([u,' vs ',r.fragment,'whl: ',window.history.length,'QHL: ',r.history.length].join(' '));for(var v=r.history.length-1;v>=0;--v)if(r.history[v].getFragment().replace(/%23/g,'#')==u)break;++r.user;if(v>=0){r.go(v-r.current);}else r.go('#'+u);--r.user;}},_updateRefererURI:function(s){s=s.toString();if(s.charAt(0)!='/'&&s.indexOf('//')==-1)return;var t=new k(window.location);if(m(t)){var u=t.getPath()+window.location.search;}else var u='';var v=new k(s).getQualifiedURI().setFragment(u).toString(),w=2048;if(v.length>w)v=v.substring(0,w)+'...';h.set('x-referer',v);},go:function(s,t,u){if(window.history&&history.pushState){t||typeof s=='number';var v=new k(s).removeQueryData('ref').toString();r.lastChanged=Date.now();this.lastURI=v;if(u){window.history.replaceState(s,null,v);}else window.history.pushState(s,null,v);if(l.webkit()<534)r._updateRefererURI(s);return false;}r.debug('go: '+s);if(t===undefined)t=true;if(!r.enabled)if(!t)return false;if(typeof s=='number'){if(!s)return false;var w=s+r.current,x=Math.max(0,Math.min(r.history.length-1,w));r.current=x;w=r.history[x].getFragment()||r.orig_fragment;w=new k(w).removeQueryData('ref').getUnqualifiedURI().toString();r.fragment=w;r.lastChanged=Date.now();if(!r.user)o(window.location,window.location.href.split('#')[0]+'#!'+w,u);if(t)r.notify(w);r._updateRefererURI(w);return false;}s=new k(s);if(s.getDomain()==new k(window.location.href).getDomain())s=new k('#'+s.getUnqualifiedURI());var y=r.history[r.current].getFragment(),z=s.getFragment();if(z==y||y==r.orig_fragment&&z==r.canonical.getFragment()){if(t)r.notify(z);r._updateRefererURI(z);return false;}if(u)r.current--;var aa=r.history.length-r.current-1;r.history.splice(r.current+1,aa);r.history.push(new k(s));return r.go(1,t,u);},getCurrentFragment:function(){var s=k.getRequestURI(false).getFragment();return s==r.orig_fragment?r.canonical.getFragment():s;}};f.exports=r;},null);
__d('PageTransitions',['Arbiter','Bootloader','DOMQuery','DOMScroll','Env','Event','HistoryManager','JSLogger','LayerHideOnEscape','ModalLayer','PageHooks','PageTransitionsConfig','PageTransitionsRegistrar','React','ScriptPath','URI','Vector','areEqual','clickRefAction','escapeJSQuotes','ge','goOrReplace','invariant','isInIframe','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa){if(c.__markCompiled)c.__markCompiled();var ga={};function ha(la,ma){ga[la.getUnqualifiedURI()]=ma;}function ia(la){return ga[la.getUnqualifiedURI()];}function ja(la){delete ga[la.getUnqualifiedURI()];}var ka={_scroll_locked:false,_transitions_disabled:false,isInitialized:function(){return !!ka._initialized;},_init:function(){if(!l.ALLOW_TRANSITION_IN_IFRAME&&ea())return;if(ka._initialized)return ka;var la=t.getMostRecentURI();ka._current_uri=la;ka._most_recent_uri=la;ka._next_uri=la;ka._initialized=true;var ma,na=w.getRequestURI(false);if(na.getFragment().startsWith('/')){ma=na.getFragment();}else ma=la;n.init().setCanonicalLocation('#'+ma).registerURIHandler(ka._historyManagerHandler);m.listen(window,'scroll',function(){if(!ka._scroll_locked)ha(ka._current_uri,x.getScrollPosition());});return ka;},registerHandler:t.registerHandler,removeHandler:t.removeHandler,getCurrentURI:function(la){this._init();if(!ka._current_uri&&!la)return new w(ka._most_recent_uri);return new w(ka._current_uri);},getMostRecentURI:function(){this._init();return new w(ka._most_recent_uri);},go:function(la,ma){this._init();var na=new w(la).removeQueryData('quickling').getQualifiedURI();o.create('pagetransition').debug('go',{uri:na.toString()});ja(na);!ma&&z('uri',{href:na.toString()},null,'INDIRECT');ka._loadPage(na,function(oa){if(oa){q.unfixed(function(){n.go(na.toString(),false,ma);});}else ca(window.location,na,ma);});},_historyManagerHandler:function(la){if(la.charAt(0)!='/')return false;z('h',{href:la});if(!v.getClickPointInfo())v.setClickPointInfo({click:'back'});ka._loadPage(new w(la),function(ma){if(!ma)ca(window.location,la,true);});return true;},_loadPage:function(la,ma){if(new w(la).getFragment()&&y(new w(la).setFragment(null).getQualifiedURI(),new w(ka._current_uri).setFragment(null).getQualifiedURI())){h.inform("pre_page_fragment_transition",{from:new w(ka._current_uri).getFragment(),to:new w(la).getFragment()});if(ka.restoreScrollPosition(la)){ka._current_uri=ka._most_recent_uri=la;h.inform("page_fragment_transition",{fragment:new w(la).getFragment()});return;}}var na;if(ka._current_uri)na=ia(ka._current_uri);var oa=function(){if(na&&ka._current_uri)ha(ka._current_uri,na);ka._current_uri=null;ka._next_uri=la;if(na)k.scrollTo(na,false);ka._scroll_locked=true;var ra=ka._handleTransition(la);ma&&ma(ra);},pa=ka._next_uri;ka._next_uri=la;var qa=r.runHooks('onbeforeleavehooks');ka._next_uri=pa;if(qa){ka._warnBeforeLeaving(qa,oa);}else oa();},_handleTransition:function(la){window.onbeforeleavehooks=undefined;if(ka._transitions_disabled||!la.isSameOrigin())return false;var ma=s.reloadOnBootloadError&&this._hasBootloadErrors();if(ma)return false;var na,oa=b.AsyncRequest;if(oa)na=oa.getLastID();h.inform("pre_page_transition",{from:ka.getMostRecentURI(),to:la});var pa=t._getTransitionHandlers();for(var qa=pa.length-1;qa>=0;--qa){var ra=pa[qa];if(!ra)continue;for(var sa=ra.length-1;sa>=0;--sa)if(ra[sa](la)===true){var ta={sender:this,uri:la,id:na};try{h.inform("page_transition",ta);}catch(ua){}return true;}else ra.splice(sa,1);}return false;},disableTransitions:function(){ka._transitions_disabled=true;},_hasBootloadErrors:function(){return i.getErrorUrls().length>0;},unifyURI:function(){this._init();ka._current_uri=ka._most_recent_uri=ka._next_uri;},transitionComplete:function(la){this._init();ka._scroll_locked=false;ka._executeCompletionCallbacks();ka.unifyURI();if(!la)ka.restoreScrollPosition(ka._current_uri);try{if(document.activeElement&&document.activeElement.nodeName==='A')document.activeElement.blur();}catch(ma){}},_executeCompletionCallbacks:function(){var la=t._getCompletionCallbacks();if(la.length>0){t._resetCompletionCallbacks();la.forEach(function(ma){return ma();});}},registerCompletionCallback:t.registerCompletionCallback,rewriteCurrentURI:function(la,ma){this._init();var na=t._getTransitionHandlers(),oa=na.length||1,pa=false;t.registerHandler(function(){if(la==ka.getMostRecentURI().getUnqualifiedURI().toString()){ka.transitionComplete();return true;}pa=true;},oa);ka.go(ma,true);!(na.length===oa+1&&na[oa].length===(pa?0:1))?da(0):undefined;na.length=oa;},_warnBeforeLeaving:function(la,ma){i.loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(na,oa,pa,qa,ra,sa){var ta=new na({width:450,addedBehaviors:[p]},u.createElement('div',null,u.createElement(oa,{showCloseButton:false},fa._("\u96e2\u958b\u9801\u9762\uff1f")),u.createElement(pa,null,u.createElement(sa,{shade:'medium',size:'medium'},la)),u.createElement(ra,null,u.createElement(qa,{action:'cancel',label:fa._("\u7559\u5728\u6b64\u9801")}),u.createElement(qa,{action:'confirm',use:'confirm',label:fa._("\u96e2\u958b\u6b64\u9801")}))));ta.subscribe('confirm',function(){ta.hide();ma();});ta.show();});},restoreScrollPosition:function(la){var ma=ia(la);if(ma){k.scrollTo(ma,false);return true;}function na(qa){if(!qa)return null;var ra="a[name='"+aa(qa)+"']";return j.scry(document.body,ra)[0]||ba(qa);}var oa=na(new w(la).getFragment());if(oa){var pa=x.getElementPosition(oa);pa.x=0;k.scrollTo(pa);return true;}return false;}};f.exports=ka;b.PageTransitions=ka;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){'use strict';if(c.__markCompiled)c.__markCompiled();var x='data-xui-error-alignh',y='XUIError',z='data-xui-error',aa="_1tp7",ba='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(n.byClass(r(),aa))return;var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusin',function(event){var oa=n.byClass(event.getTarget(),aa);if(oa){ka(oa);}else la();});m.listen(document.documentElement,'focusout',function(event){la();});var ca=v(function(){return new o(function(oa,pa){i.loadModules(["React","ReactDOM","XUIErrorDialogImpl"],function(qa,ra,sa){oa(babelHelpers._extends({React:qa,ReactDOM:ra},sa.getNewDialog()));});});}),da=null;function ea(oa){return babelHelpers._extends({message:oa.getAttribute(z),position:oa.getAttribute(ba),alignh:oa.getAttribute(x)},k.get(oa,y));}function fa(oa,pa){k.set(oa,y,pa);}function ga(oa,pa){k.set(oa,y,babelHelpers._extends({},k.get(oa,y),pa));}function ha(oa){k.remove(oa,y);}var ia=false,ja=false;function ka(oa){ca().done(function(pa){var qa=pa.React,ra=pa.ReactDOM,sa=pa.dialog,ta=pa.dialogMessageNode,ua=ea(oa),va=ua.message;if(va==null)return;var wa=qa.isValidElement(va);if(ia&&!wa)ra.unmountComponentAtNode(ta);if(wa){ra.render(va,ta);}else{!(typeof va==='string'||u(va))?t(0):undefined;if(typeof va==='string')va=w(va);l.setContent(ta,va);}ia=wa;sa.setContext(oa).setPosition(ua.position||'right').setAlignment(ua.alignh||(ua.position==='above'||ua.position==='below'?'right':null)).show();h.notify(s(ta));da=oa;});ja=true;}function la(){if(!ja)return;ca().done(function(oa){var pa=oa.React,qa=oa.ReactDOM,ra=oa.dialog,sa=oa.dialogMessageNode;if(!da)return;if(ia){qa.unmountComponentAtNode(sa);ia=false;}ra.hide();da=null;});}function ma(oa){if(l.contains(oa,r()))ka(oa);}var na={set:function(oa){var pa=oa.target,qa=oa.message,ra=oa.position,sa=oa.alignh;!(qa!==null)?t(0):undefined;j.addClass(pa,aa);ga(pa,q({message:qa,position:ra,alignh:sa},function(ta){return ta!==undefined;}));ma(pa);},clear:function(oa){j.removeClass(oa,aa);oa.removeAttribute(z);ha(oa);if(oa===da)la();},updatePosition:function(){if(!ja)return;ca().done(function(oa){var pa=oa.dialog;if(da)pa.updatePosition();});},__setReactError:function(oa,pa){var qa=pa.message,ra=pa.position,sa=pa.alignh;!(qa!==null)?t(0):undefined;fa(oa,{message:qa,position:ra,alignh:sa});ma(oa);},__clearReactError:function(oa){ha(oa);if(oa===da)la();}};f.exports=na;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o,p){'use strict';this.$VideoUploadFile1=m;this.$VideoUploadFile2=n;this.$VideoUploadFile3=o;this.$VideoUploadFile4=p;}l.fromFile=function(m){'use strict';var n=l.getExtensionFromFileName(m.name);return new this(null,m,m.size,n);};l.fromFileInput=function(m){'use strict';var n=null,o=null,p=l.getExtensionFromFileInput(m);if(k.supportsFileAPI()&&m.files.length){n=m.files[0];o=n.size;}return new this(m,n,o,p);};l.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};l.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};l.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};l.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};l.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===i.GIF)return j.ANIMATED_GIFS;return j.CORE_VIDEOS;};l.prototype.getChunk=function(m,n){'use strict';return this.$VideoUploadFile2?h.call(this.$VideoUploadFile2,m,n):null;};l.getExtensionFromFileInput=function(m){'use strict';return this.getExtensionFromFileName(m.value);};l.getExtensionFromFileName=function(m){'use strict';return m.indexOf('.')!=-1?m.split('.').pop().toLowerCase():'';};f.exports=l;},null);
__d("XAppFriendsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/games\/appfriends\/",{app_id:{type:"Int",required:true}});},null);
__d("XPendingSyncRequestsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/platform\/games\/sync_requests\/pending_list\/",{app_id:{type:"Int",required:true}});},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null);