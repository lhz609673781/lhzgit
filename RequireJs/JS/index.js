define(['jquery'],function($){
	var requireTest=function(){
		this.init();
	}
	var _proto=requireTest.prototype;
	_proto.init=function(){
		alert(111);
		console.log($('.ppp'));
		$('p').css('color','pink');
	}
	var obj=new requireTest();
	return obj;
	
})
