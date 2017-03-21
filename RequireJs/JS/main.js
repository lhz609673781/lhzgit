require.config({
	paths:{
		'jquery':'jquery.min',
		'index':'index'
	},
	shim:{

	}
})
require(['jquery','index'],function($,index){
	console.log('loaded');
	var _index = index;
})