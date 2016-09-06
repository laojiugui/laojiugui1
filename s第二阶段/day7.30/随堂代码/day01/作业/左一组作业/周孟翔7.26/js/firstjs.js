// JavaScript Document/*
///////////////////////////////////第一遍
//数据类型的分类 ：基本数据 引用数据
var num1=12
//alert(typeof num1);   number型
 
var str="aaa"
//alert(typeof str);   string字符串型

var bool=false
//alert(typeof bool); 布尔型

var gg 
//alert(typeof gg);  undefined型

var nu=null
//alert(typeof nu); object

//算术运算法
var a=11;b=15;
//alert(a+b)

var a="11";b="15"
//alert(a+b)
//alert(b%a)
//alert(b/a)
//alert(b*a) 

//--------------------Number:把非数字类型的数据类型转换为数字
var str="aa123"
//alert(Number(str))  NaN

var str="123"
//alert(Number(str)) 转化结果123 

// 把布尔型转化为数字
var bool=true
//alert(Number(bool))  

//把undefined转化为数字 ：NaN
var h;
//alert(Number(h))
//object型转化为数字为0  
var nu=null
//alert(Number(null)) 

//------------parseInt:取整数;从左到右开始算起，如果第一个不是字母则显示数字，直到出现字母的时候，如果第一个显示为字母，那么将出现NaN
var a="234aa123"  
//alert(parseInt(a))  

var b="gg2789ss"
//alert(parseInt(b)) 

//------------------ParseFloat 可以取出小数
var num="445.2333skksl"
//alert(parseFloat(num))
//--------------------------关系运算符
//> < >= <= == === = != !== !===

//===:绝对等于：在比较的时候首先比较数据类型，如果数据类型不一样直接false,然后再按是否相等进行比较；
//代表比较或者判断，忽略数据类型只比较结果
//!=表示和==相反，如果==是显示true 那么！=即将显示false;

var num=1,num1=2,num3=3;
//alert(num3!=num1)
//alert(num>=num3)
//一些赋值须知：a+=b  可以书写成a=a+b;
//           :a*=c 可以书写成 a=a*c
//            :a/c 可以书写成a=a/c
//           a-=b 可以书写为a=a-b

////////////////////////////第2遍
//数据类型的分类 ：基本数据 引用数据
var num1=12
//alert(typeof num1);   number型
 
var str="aaa"
//alert(typeof str);   string字符串型

var bool=false
//alert(typeof bool); 布尔型

var gg 
//alert(typeof gg);  undefined型

var nu=null
//alert(typeof nu); object

//算术运算法
var a=11;b=15;
//alert(a+b)

var a="11";b="15"
//alert(a+b)
//alert(b%a)
//alert(b/a)
//alert(b*a) 

//--------------------Number:把非数字类型的数据类型转换为数字
var str="aa123"
//alert(Number(str))  NaN

var str="123"
//alert(Number(str)) 转化结果123 

// 把布尔型转化为数字
var bool=true
//alert(Number(bool))  

//把undefined转化为数字 ：NaN
var h;
//alert(Number(h))
//object型转化为数字为0  
var nu=null
//alert(Number(null)) 

//------------parseInt:取整数;从左到右开始算起，如果第一个不是字母则显示数字，直到出现字母的时候，如果第一个显示为字母，那么将出现NaN
var a="234aa123"  
//alert(parseInt(a))  

var b="gg2789ss"
//alert(parseInt(b)) 

//------------------ParseFloat 可以取出小数
var num="445.2333skksl"
//alert(parseFloat(num))
//--------------------------关系运算符
//> < >= <= == === = != !== !===

//===:绝对等于：在比较的时候首先比较数据类型，如果数据类型不一样直接false,然后再按是否相等进行比较；
//代表比较或者判断，忽略数据类型只比较结果
//!=表示和==相反，如果==是显示true 那么！=即将显示false;

var num=1,num1=2,num3=3;
//alert(num3!=num1)
//alert(num>=num3)
//一些赋值须知：a+=b  可以书写成a=a+b;
//           :a*=c 可以书写成 a=a*c
//            :a/c 可以书写成a=a/c
//           a-=b 可以书写为a=a-b
 
//第三遍
//document.write("")
//单双引号的嵌套可以在双引号的前面加上右斜杠，也可以把双引号换成单引号，以避免重复；

//数据类型分为：基本数据类型和引用数据类型

//基本数据类型1,：number 2 string 3 布尔型

var num=12
//alert(typeof num)

///////////////////////////////////第一遍
//数据类型的分类 ：基本数据 引用数据
var num1=12
//alert(typeof num1);   number型
 
var str="aaa"
//alert(typeof str);   string字符串型

var bool=false
//alert(typeof bool); 布尔型

var gg 
//alert(typeof gg);  undefined型

var nu=null
//alert(typeof nu); object

//算术运算法
var a=11;b=15;
//alert(a+b)

var a="11";b="15"
//alert(a+b)
//alert(b%a)
//alert(b/a)
//alert(b*a) 

//--------------------Number:把非数字类型的数据类型转换为数字
var str="aa123"
//alert(Number(str))  NaN

var str="123"
//alert(Number(str)) 转化结果123 

// 把布尔型转化为数字
var bool=true
//alert(Number(bool))  

//把undefined转化为数字 ：NaN
var h;
//alert(Number(h))
//object型转化为数字为0  
var nu=null
//alert(Number(null)) 

//------------parseInt:取整数;从左到右开始算起，如果第一个不是字母则显示数字，直到出现字母的时候，如果第一个显示为字母，那么将出现NaN
var a="234aa123"  
//alert(parseInt(a))  

var b="gg2789ss"
//alert(parseInt(b)) 

//------------------ParseFloat 可以取出小数
var num="445.2333skksl"
//alert(parseFloat(num))
//--------------------------关系运算符
//> < >= <= == === = != !== !===

//===:绝对等于：在比较的时候首先比较数据类型，如果数据类型不一样直接false,然后再按是否相等进行比较；
//代表比较或者判断，忽略数据类型只比较结果
//!=表示和==相反，如果==是显示true 那么！=即将显示false;

var num=1,num1=2,num3=3;
//alert(num3!=num1)
//alert(num>=num3)
//一些赋值须知：a+=b  可以书写成a=a+b;
//           :a*=c 可以书写成 a=a*c
//            :a/c 可以书写成a=a/c
//           a-=b 可以书写为a=a-b

// 第四遍
///////////////////////////////////
//数据类型的分类 ：基本数据 引用数据
var num1=12
//alert(typeof num1);   number型
 
var str="aaa"
//alert(typeof str);   string字符串型

var bool=false
//alert(typeof bool); 布尔型

var gg 
//alert(typeof gg);  undefined型

var nu=null
//alert(typeof nu); object

//算术运算法
var a=11;b=15;
//alert(a+b)

var a="11";b="15"
//alert(a+b)
//alert(b%a)
//alert(b/a)
//alert(b*a) 

//--------------------Number:把非数字类型的数据类型转换为数字
var str="aa123"
//alert(Number(str))  NaN

var str="123"
//alert(Number(str)) 转化结果123 

// 把布尔型转化为数字
var bool=true
//alert(Number(bool))  

//把undefined转化为数字 ：NaN
var h;
//alert(Number(h))
//object型转化为数字为0  
var nu=null
//alert(Number(null)) 

//------------parseInt:取整数;从左到右开始算起，如果第一个不是字母则显示数字，直到出现字母的时候，如果第一个显示为字母，那么将出现NaN
var a="234aa123"  
//alert(parseInt(a))  

var b="gg2789ss"
//alert(parseInt(b)) 

//------------------ParseFloat 可以取出小数
var num="445.2333skksl"
//alert(parseFloat(num))
//--------------------------关系运算符
//> < >= <= == === = != !== !===

//===:绝对等于：在比较的时候首先比较数据类型，如果数据类型不一样直接false,然后再按是否相等进行比较；
//代表比较或者判断，忽略数据类型只比较结果
//!=表示和==相反，如果==是显示true 那么！=即将显示false;

var num=1,num1=2,num3=3;
//alert(num3!=num1)
//alert(num>=num3)
//一些赋值须知：a+=b  可以书写成a=a+b;
//           :a*=c 可以书写成 a=a*c
//            :a/c 可以书写成a=a/c
//           a-=b 可以书写为a=a-b

// 第五
///////////////////////////////////
//数据类型的分类 ：基本数据 引用数据
var num1=12
//alert(typeof num1);   number型
 
var str="aaa"
//alert(typeof str);   string字符串型

var bool=false
//alert(typeof bool); 布尔型

var gg 
//alert(typeof gg);  undefined型

var nu=null
//alert(typeof nu); object

//算术运算法
var a=11;b=15;
//alert(a+b)

var a="11";b="15"
//alert(a+b)
//alert(b%a)
//alert(b/a)
//alert(b*a) 

//--------------------Number:把非数字类型的数据类型转换为数字
var str="aa123"
//alert(Number(str))  NaN

var str="123"
//alert(Number(str)) 转化结果123 

// 把布尔型转化为数字
var bool=true
//alert(Number(bool))  

//把undefined转化为数字 ：NaN
var h;
//alert(Number(h))
//object型转化为数字为0  
var nu=null
//alert(Number(null)) 

//------------parseInt:取整数;从左到右开始算起，如果第一个不是字母则显示数字，直到出现字母的时候，如果第一个显示为字母，那么将出现NaN
var a="234aa123"  
//alert(parseInt(a))  

var b="gg2789ss"
//alert(parseInt(b)) 

//------------------ParseFloat 可以取出小数
var num="445.2333skksl"
//alert(parseFloat(num))
//--------------------------关系运算符
//> < >= <= == === = != !== !===

//===:绝对等于：在比较的时候首先比较数据类型，如果数据类型不一样直接false,然后再按是否相等进行比较；
//代表比较或者判断，忽略数据类型只比较结果
//!=表示和==相反，如果==是显示true 那么！=即将显示false;

var num=1,num1=2,num3=3;
//alert(num3!=num1)
//alert(num>=num3)
//一些赋值须知：a+=b  可以书写成a=a+b;
//           :a*=c 可以书写成 a=a*c
//            :a/c 可以书写成a=a/c
//           a-=b 可以书写为a=a-b*/
     
/*var num6=8
	num7=4
alert(num6+num7);
alert(num6-num7);
alert(num6*num7);
alert(num6/num7);
alert(num6%num7);

document.write(num6+num7+"<br>")
document.write(num6-num7+"<br>")
document.write(num6*num7+"<br>")
document.write(num6/num7+"<br>")
document.write(num6%num7+"<br>")*/

document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br>")
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp*<br>")
document.write("&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br>")
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp*<br>")
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br>")


var num9=5;num10=9;num11=80;num12=32;
	num13=num9/num10*(num11-num12)

document.write(num13+"<br>")
document.write(num11+"<br>")

var a=2;b=3;
document.write('<div><span style="color:green;font-size:14px;">a+b=</span><span style="color:red;font-weight:bold;font-size:18px;">5</span></div>'+'<div><span style="color:green;font-size:14px;">a-b=</span><span style="color:red;font-weight:bold;font-size:18px;">-1</span></div>'+'<div><span style="color:green;font-size:14px;">a*b=</span><p style="display:inline-block;color:red;font-weight:bold;font-size:18px;"> 6</p></div>'+'<div><span style="color:green;font-size:14px;">a/b=</span><p style="display:inline-block;color:red;font-weight:bold;font-size:18px;">o.6666666666666666666</p></div>'+'<div><span style="color:green;font-size:14px;">a%b=</span><p style="display:inline-block;color:red;font-weight:bold;font-size:18px;"> 2</p></div>')