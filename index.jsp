<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<link rel="stylesheet" type="text/css" href="css/body.css" />
<script type="text/javascript" src="js/getCoordinate.js"></script> 
<script type="text/javascript" src="js/getDate.js"></script> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body style="margin:0px;" background="images/background.jpg" >
  <div>
  		<div id="coordiv" style=" margin:0 auto;width:300px;height:150px;border:1px solid #c3c3c3"   
  			 onmousemove="cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()">
  			 <p>把鼠标悬停在下面的矩形上可以看到坐标：</p>
  		</div>
  		
  		<div id="xycoordinates" ></div>
  		
  		<div id="clock" ></div> 
 </div>
 </body>
</html>
