/**
 * 该js文件用来获取页面中矩形的实时坐标
 */
	function cnvs_getCoordinates(e){
		x=e.clientX;
		y=e.clientY;
		document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
	}
	 
	function cnvs_clearCoordinates(){
		document.getElementById("xycoordinates").innerHTML="";
	}
/*
将此段代码复制到index.html页面即可查看效果
<div id="coordiv" style=" margin:0 auto;width:300px;height:150px;border:1px solid #c3c3c3"   
 onmousemove="cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()">
 <p>把鼠标悬停在下面的矩形上可以看到坐标：</p>
</div>
<div id="xycoordinates" ></div>
*/
