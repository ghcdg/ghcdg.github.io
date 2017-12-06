<!DOCTYPE html>
<html>
<head>


</head>

<body id="mainBody">
<script type="text/javascript" >
var cookName="testcookie";
var cookVal="testvalue";

var date=new Date();
date.setTime(date.getTime()+604800000);
var expireDate=date.toGMTString();
var path=";path=/";
var domain=";domain=.io";
var myCookie=cookName+"="+cookVal+";expires="+expireDate+path+domain;
document.cookie=myCookie;
</script>

</body>
</html>
