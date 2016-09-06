// JavaScript Document
document.write("看看就看");
//2、在一个文本框输入一个年份，判断这年是不是闰年 能被4整除并且不能被100整除  能被400整除
var year=prompt("请输入年份：");
if(year%100==0){
	if(year%400==0){
		alert("闰年");
	}else{
		alert("平年");
	}
}else if(year%4==0){
 	alert("闰年");
}else{
	alert("输入错误");
}

//3.?判断一个整数，属于哪个范围：大于0；小于0；等于0

var num=Number(prompt("请输入一个整数"));
if(num>0){
	alert(num+"大于0");
}
else if(num<0){
	alert(num+"小于0");
}else if(num==0){
	alert(num+"等于0");
}else{
	alert("不合法");
}


//4.?判断一个整数是否是3的倍数，并输出判断结果
var num1=prompt("请输入一个整数");
if(num1!=0&&num1!=""){
	if(num1%3==0){
	alert(num1+"是3的倍数");
    }else{
	alert(num1+"不是3的倍数");
    }
}else{
	alert("不符合要求");	
}

/*5.?开发一款软件，根据公式（身高-108）*2=体重，可以有10斤左右的浮动。来观察测试者体重是否合适

	思路：
				1)获取页面元素
				2)根据公式和输入的身高计算标准体重
				3)把输入的体重(weight)和标准体重(sWeight)进行对比，输出相应的信息
					<1>weight==sWeight: 身材完美
					<2>weight>sWeight:
						weight > sWeight + 10
					<3>weight<sWeight:
						weight < sWeight - 10
*/
var height=Number(prompt("请输入身高：","170"));
var weight=Number(prompt("请输入体重：","120"));
var sWeight=(height-108)*2;
alert(sWeight);
if(weight>sWeight&&weight <= sWeight + 10||weight >= sWeight - 10&&weight<=sWeight){
	alert("此人身材完美");
}else if(weight > sWeight + 10){
	alert("此人身材偏胖");
}else if(weight < sWeight - 10){
	alert("此人身材偏瘦");
}else{
	alert("不合法");
}


//6.给一个分数，判断它的等级，如果90以上为A  80-90为B 70-80为C 60-70为D 60以下  留级

var grade=Number(prompt("请输入分数：","90"));
if(grade>=90){
	alert("您的等级为A");	
}else if(grade>=80){
	alert("您的等级为B");	
}else if(grade>=70){
	alert("您的等级为C");	
}else if(grade>=60){
	alert("您的等级为D");	
}else if(grade<60){
	alert("恭喜您，您留级了");	
}else{
 alert("不合法的值");	
}

/*7.用switch case输出2016年一年中1月份，3月份，5月份，7月份，八月份，十月份，12月份是31天，四月份，六月份，九月份，11月份是30天，二月份是29天
*/
var month=Number(prompt("请输入年份","2"));
switch(month){
	case 1:alert(month+"月份是31天");break;
	case 2:alert(month+"月份是29天");break;
	case 3:alert(month+"月份是31天");break;
	case 4:alert(month+"月份是30天");break;
	case 5:alert(month+"月份是31天");break;
	case 6:alert(month+"月份是30天");break;
	case 7:alert(month+"月份是31天");break;
	case 8:alert(month+"月份是31天");break;
	case 9:alert(month+"月份是30天");break;
	case 10:alert(month+"月份是31天");break;
	case 11:alert(month+"月份是30天");break;
	case 12:alert(month+"月份是31天");break;
	default:alert("输入不合法");
}

//8.输入一个五位数，分别alert出它的个位 、十位、百位、千位、万位
var mm=Number(prompt("请输入一个五位数","54367"));
var a5=parseInt(mm/10000);
var a4=parseInt((mm%10000)/1000);
var a3=parseInt((mm%1000)/100);
var a2=parseInt((mm%100)/10);
var a1=parseInt(mm%10);
alert("万位是"+a5);
alert("千位是"+a4);
alert("百位是"+a3);
alert("十位是"+a2);
alert("个位是"+a1);



//9.输入3个数  a,b,c中, 输出最大数的值（选做）
var a=Number(prompt("请输入"));
var b=Number(prompt("请输入"));
var c=Number(prompt("请输入"));
var Max;
if(a>b){
	Max=a;
	if(c>Max){
		Max=c;
		alert(Max);
	}else{
		alert(Max);
	}	
}else{
	Max=b;
	if(c>Max){
		Max=c;
		alert(Max);
	}else{
		alert(Max);
	}	
}
//10.?打印出1000-2000年中所有的闰年，并以每行四个数的形式输出（选做+思考）
var y;
var count=0;
for(y=1000;y<=2000;y++)
{
	if((y%100!=0&&y%4==0)||(y%400==0)){
		document.write(y+"&nbsp;");
		count++;
	}else{
		
		}
	if(count%4==0){
		document.write("<br>");
}
	
}
alert(count);