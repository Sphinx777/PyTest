/*!CK:1080377399!*//*1447650131,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cOHWo"]); }

__d('P2PPendingPaymentRequestJewelBanner.react',['P2PJewelBanner.react','P2PPaymentRequest','P2PPaymentRequestActionHelper','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'P2PPendingPaymentRequestJewelBanner',propTypes:{paymentRequest:m.instanceOf(i).isRequired},handleDeclineClick:function(){j.initDeclinePaymentRequestFlow(this.props.paymentRequest);},handlePayClick:function(){j.initPayForPaymentRequestFlow(this.props.paymentRequest);},renderBodyText:function(){var o=this.props.paymentRequest,p=o.memoText;if(!p)return null;return l._("\u539f\u56e0\uff1a{What the user paid for}",[l.param('What the user paid for',p)]);},render:function(){var o=this.props.paymentRequest;return (k.createElement(h,{bodyText:this.renderBodyText(),primaryActionConfig:{onClick:this.handlePayClick,text:l._("\u4ed8\u6b3e")},secondaryActionConfig:{onClick:this.handleDeclineClick,text:l._("\u62d2\u7d55")},titleText:l._("{currency}\u8981\u6c42\u4e86{amount}",[l.param('currency',o.requester.name),l.param('amount',o.amountWithSymbol)])}));}});f.exports=n;},null);