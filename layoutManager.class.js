function windowManager( width,height ){
    this.body = document.getElementsByTagName('body')[0];
    this.height = 0;
    this.width = 0;
    this.getUserAgent();
    this.getSize();
    this.makeCanvas(width,height);
}
windowManager.prototype.makeCanvas = function(width,height){
	if( width == void 0 ){ var width = this.width; }
	if( height  == void 0 ){ var height = this.height } 
    this.scaleTo(width, height);
}
windowManager.prototype.scaleTo = function(width,height){
	var viewport = managedObject.create('DIV',{'id':'viewport'},'position:fixed;top:0px;left:0px;overflow:hidden;width:'+width+'px;height:'+height+'px;',this.body)
	var scaleWidth = (width/1920);
	var scaleHeight = (height/1080);
	var scale = '-ms-transform: scale('+scaleWidth+','+scaleHeight+');-webkit-transform: scale('+scaleWidth+','+scaleHeight+');transform: scale('+scaleWidth+','+scaleHeight+');';
    var canvas = managedObject.create('DIV',{'id':'stage'},'width:1920px;height:1080px;'+scale,viewport);
    

}
windowManager.prototype.getUserAgent = function(){
 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)
	 || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
		this.mobile = true;
		this.click = 'touchstart'; 	
	} else {
		this.mobile = false;
		this.click = 'click';
	}
    this.userAgent = navigator.userAgent;
}
windowManager.prototype.getSize = function(){
    var winW = 630, winH = 460;
    if (document.body && document.body.offsetWidth) {
	winW= document.body.offsetWidth;
	winH = document.body.offsetHeight;
    }
    if (document.compatMode=='CSS1Compat' &&
	document.documentElement &&
	document.documentElement.offsetWidth ) {
	winW = document.documentElement.offsetWidth;
	winH = document.documentElement.offsetHeight;
    }
    if (window.innerWidth && window.innerHeight) {
	winW = window.innerWidth;
	winH = window.innerHeight;
    }
    this.height = winH;
    this.width = winW;
}