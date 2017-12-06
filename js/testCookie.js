/*
*cookie测试
*/
	var cookName="ghcdgcookie";
	var cookVal="testvalue";

	var date=new Date();
	date.setTime(date.getTime()+604800000);
	var expireDate=date.toGMTString();
	var path=";path=/";
	var domain=";domain=ghcdg.github.io";
	var myCookie=cookName+"="+cookVal+";expires="+expireDate+path+domain;
	document.cookie=myCookie;
