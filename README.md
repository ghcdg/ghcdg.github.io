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
//定义星期数组
var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
//获取系统时间
function clock(){
    var time=new Date();
    var attime=time.getFullYear()+"年"+time.getMonths()+"月"+time.getDate()+"日"+"<span style='white-space:pre;'>+"    "
    attime= attime+time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒"+"     星期"+week(time.get.Day());
    document.getElementById("clock").value = attime;
}
setInterval(clock,1000);//每隔1000ms就会执行一次该代码
</script>
</head>

<body style="margin:0px;">

<p>把鼠标悬停在下面的矩形上可以看到坐标：</p>

<div id="coordiv" style="float:left;width:199px;height:99px;border:1px solid #c3c3c3" onmousemove="cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()"></div>
<br />
<br />
<br />
<div id="xycoordinates"></div>
 
 //显示系统时间
 <div id="clock" weight=200,height=200></div> 
 
</body>
</html>

