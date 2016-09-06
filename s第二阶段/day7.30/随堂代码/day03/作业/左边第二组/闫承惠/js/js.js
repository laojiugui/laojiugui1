//输出20次你要上天
/* var i=1;
while(i<=20){
	document.write(i+".你要上天<br>");
	i++;
} */
//输出20次你要上天
/* var i=1;
while(i<=20){
	document.write(i+".你要上天<br>");
	i++;
} */
//1到100 4个一行输出
/* var i=1;
var count=1;
while(i<=100){
	document.write(i+"&nbsp;");
	i++;
	
	if(count%4==0){
		document.write("<br>");
	}
	count++;	
} */
//1到100 4个一行输出
/* var i=1;
var count=1;
while(i<=100){
	document.write(i+"&nbsp;");
	i++;
	
	if(count%4==0){
		document.write("<br>");
	}
	count++;	
} */

//计算1到100的和
/* var i=1;
var sum=0;
while(i<=100){
	sum+=i;
	i++;
		
}
alert(sum); */
/* //计算10以内偶数的和
var i=0;
var sum=0;
while(i<=10){
	sum+=i;
	i+=2;
}
alert(sum);

//计算1到100的和
/* var i=1;
var sum=0;
while(i<=100){
	sum+=i;
	i++;
		
}
alert(sum); */
/* //计算10以内偶数的和
var i=0;
var sum=0;
while(i<=10){
	sum+=i;
	i+=2;
}
alert(sum);
*/
//计算10以内的奇数的和
/*
var i=1;
var sum=0;
while(i<=10){
	sum+=i;
	i+=2;
}
alert(sum);

 
 //计算10以内的奇数的和

var i=1;
var sum=0;
while(i<=10){
	sum+=i;
	i+=2;
}
alert(sum);
 */
 
 /* //打印出1000-2000年中所有的闰年，并以每行四个数的形式输出
var year=1000;//
var count=0;
while(year<=1004){
	if((year%4==0&&year%100!=0)||(year%400==0)){
		document.write(year+" ");
		count++;
		if(count%4==0){
		document.write("<br>");
		}
	}
	year++;	
}  */

/* //打印出1000-2000年中所有的闰年，并以每行四个数的形式输出
var year=1000;//
var count=0;
while(year<=1004){
	if((year%4==0&&year%100!=0)||(year%400==0)){
		document.write(year+" ");
		count++;
		if(count%4==0){
		document.write("<br>");
		}
	}
	year++;	
}  */

/* //比较三个数的大小，输出最大数
var num1=Number(prompt("第一个数"));
var num2=Number(prompt("第二个数"));
var num3=Number(prompt("第三个数"));
var max=num1;
if(num2>max){
	max=num2;
}
if(num3>max){
	max=num3;
}
alert(max); */

/* //比较三个数的大小，输出最大数
var num1=Number(prompt("第一个数"));
var num2=Number(prompt("第二个数"));
var num3=Number(prompt("第三个数"));
var max=num1;
if(num2>max){
	max=num2;
}
if(num3>max){
	max=num3;
}
alert(max); */



//输出每行10个* 共4行
/* var i=0;
while(i<4){
	document.write("<br>*********");
	i++;
} */

//输出每行10个* 共4行
/* var i=0;
while(i<4){
	document.write("<br>*********");
	i++;
} */
/*
//输出每行*
for(var i=0;i<6;i++){
	for(var j=0;j<i;j++){
		document.write("*");
	}
	document.write("<br>");
} */
/*
//输出每行*
for(var i=0;i<6;i++){
	for(var j=0;j<i;j++){
		document.write("*");
	}
	document.write("<br>");
} */
//鸡兔同笼  35头  94脚


/*for(var i=1;i<35;i++){
	for(var j=1;j<35;j++){
		if((i+j==35)&&(i*2+j*4==94)){
			document.write("鸡"+i+"兔子"+j);
		}
	}
}*/
//鸡兔同笼  35头  94脚


/*for(var i=1;i<35;i++){
	for(var j=1;j<35;j++){
		if((i+j==35)&&(i*2+j*4==94)){
			document.write("鸡"+i+"兔子"+j);
		}
	}
}*/


//乘法口诀表
/*
1
*/

/* for(var i=1;i<10;i++){
	for(var j=1;j<=i;j++){		
		document.write("<span style='padding:0px; margin:0px; width:40px; background:pink;'>"+i+"&times;"+j+"="+i*j+"&nbsp;&nbsp;"+"</span>");
	}
	document.write("<br>");
}
 */

//乘法口诀表
/*
1
*/

/* for(var i=1;i<10;i++){
	for(var j=1;j<=i;j++){		
		document.write("<span style='padding:0px; margin:0px; width:40px; background:pink;'>"+i+"&times;"+j+"="+i*j+"&nbsp;&nbsp;"+"</span>");
	}
	document.write("<br>");
}
 */
/*<script>
		var oDiv=document.getElementById("box");//通过ID获取要操作的对象
		console.log(oDiv);
		//alert(oDiv.innerHTML);//对象.属性为获取 这种属性结构为获取标签对的内容
		//oDiv.innerHTML="jdkfj ";//设置标签对中的内容
		
		//for(var i=1;i<=6;i++){
		//	oDiv.innerHTML+="<span>"+i+"</span>";
		//}
		//99乘法口诀表
		for(var i=1;i<10;i++){
			for(var j=1;j<=i;j++){		
				oDiv.innerHTML+="<span><a href=\"#\">"+i+"&times;"+j+"="+i*j+"</a></span>";
			}
			oDiv.innerHTML+="<br>";
		}
	</script>
	<script>
		var oDiv=document.getElementById("box");//通过ID获取要操作的对象
		console.log(oDiv);
		//alert(oDiv.innerHTML);//对象.属性为获取 这种属性结构为获取标签对的内容
		//oDiv.innerHTML="jdkfj ";//设置标签对中的内容
		
		//for(var i=1;i<=6;i++){
		//	oDiv.innerHTML+="<span>"+i+"</span>";
		//}
		//99乘法口诀表
		for(var i=1;i<10;i++){
			for(var j=1;j<=i;j++){		
				oDiv.innerHTML+="<span><a href=\"#\">"+i+"&times;"+j+"="+i*j+"</a></span>";
			}
			oDiv.innerHTML+="<br>";
		}
	</script>*/