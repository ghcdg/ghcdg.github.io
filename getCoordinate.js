/**
 * 该js文件用来获取页面中矩形的实时坐标
 */
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
