/*
 * easyCookie1.0
 * name: 赵长永
 * date: 2017-1-3
 * 该框架依赖jquery,请先引入jquery1.8+版本.
 * 该框架依赖cookie,请先引入jquery.cookie.js.
 */

 //easyCookie对象
var easyCookie = {
	//存储登录信息
	set_login:function(data){
		$.cookie("login",JSON.stringify(data),{path:"/"});
	},
	//删除登录信息
	del_login:function(){
		$.cookie("login","",{path:"/"});
	},
	//获取用户信息
	get_nickName:function(){
		var login=$.cookie("login");
		if (login) {
			return JSON.parse(login).nickName;
		}else{
			return null;
		}
	}
};