// JavaScript Document
document.write("题目1：定义2个变量 计算2个变量+-*/% 分别用document.write()和alert()显示出运算结果<br/>")

var a=50;
var b=3;
var add=a+b;
var subd=a-b;
var mul=a*b;
var divi=a/b;
var quyu=a%b;
document.write("a="+a);
alert("a="+a);
document.write("<br/>b="+b);
alert("b="+b);
document.write("<br/>a+b="+add);
alert("a+b="+add);
document.write("<br/>a-b="+subd);
alert("a-b="+subd);
document.write("<br/>a*b="+mul);
alert("a*b="+mul);
document.write("<br/>a/b="+divi);
alert("a/b="+divi);
document.write("<br/>a%b="+quyu);
alert("a%b="+quyu);

document.write("<br/><br/>题目2：使用document.write()显示一个用*组成菱形<br/>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;*<br/>");
document.write("&nbsp;&nbsp;&nbsp;***<br/>");
document.write("&nbsp;&nbsp;*****<br/>");
document.write("&nbsp;*******<br/>");
document.write("&nbsp;&nbsp;*****<br/>");
document.write("&nbsp;&nbsp;&nbsp;***<br/>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;*<br/>");

document.write("<br/><br/>题目3：摄氏度与华氏度的转换公式<br/>");
var F=80;
document.write("当前华氏温度为"+F+"度<br/>");
var tem=5/9.0*(F-32);
document.write("转换成摄氏温度为"+tem+"度<br/>");

document.write("<br/><br/>题目4：使用write()打印5个DIV  并且前2个DIV中有一个span标签<br/>");
document.write("<div style='font-size:14px;color:green;'>"+"a+b=<span style='font-weight:900;color:red;font-size:18px;'>"+add+"</span>"+"</div>"+

"<div style='font-size:14px;color:green;'>"+"a-b=<span style='font-weight:900;color:red;font-size:18px;'>"+subd+"</span>"+"</div>"+

"<div style='font-size:14px;color:green;'>"+"a*b=<p style='display:inline;font-weight:900;color:red;font-size:18px;'>"+mul+"</p>"+"</div>"+

"<div style='font-size:14px;color:green;'>"+"a/b=<p style='display:inline;font-weight:900;color:red;font-size:18px;'>"+divi+"</p>"+"</div>"+

"<div style='font-size:14px;color:green;'>"+"a%b=<p style='display:inline;font-weight:900;color:red;font-size:18px;'>"+quyu+"</p>"+"</div>");



















