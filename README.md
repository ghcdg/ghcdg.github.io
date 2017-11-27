# ghcdg.github.io
cdg github blog


<!DOCTYPE HTML>
<html>
<head>
<style type="text/css"> 
body
{
font-size:150%;
font-family:verdana,helvetica,arial,sans-serif;
}
</style>

<script type="text/javascript"> 
function cnvs_getCoordinates(e)
{
x=e.clientX;
y=e.clientY;
document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}
 
function cnvs_clearCoordinates()
{
document.getElementById("xycoordinates").innerHTML="";
}


/* 获取系统详细日期并在页面中显示 */
var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; 
//获取系统时间
var attime;
function clock(){
    var time=new Date();   
    var day="  "+weekday[(new Date()).getDay()]; //获取星期
    attime=time.getFullYear()+"年"+time.getMonth()+"月"+time.getDate()+"日";
    attime=attime+"  "+time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒"+day;
    document.getElementById("clock").value = attime;
}
//每隔1000ms就会执行一次该代码
setInterval(clock,1000);

</script>
</head>

<body style="margin:0px;">

<p>把鼠标悬停在下面的矩形上可以看到坐标：</p>

<div id="coordiv" style="float:left;width:199px;height:99px;border:1px solid #c3c3c3" onmousemove="cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()"></div>
<br />
<br />
<br />
<div id="xycoordinates"></div>
 
 <!--显示系统详细日期-->
<form><input id="clock" type="text" size="50" /> 
 
</body>
</html>

