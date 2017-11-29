/**
 * 获取系统详细日期并在页面中显示 
 */

var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; 

//获取系统时间
var attime;
function clock(){
    var time=new Date();   
    var day="  "+weekday[(new Date()).getDay()]; //获取星期
    attime=time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日";
    attime=attime+"  "+time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒"+day;
    document.getElementById("clock").innerHTML = attime;
}

//每隔1000ms就会执行一次该代码
setInterval(clock,1000);