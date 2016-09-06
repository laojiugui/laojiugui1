//判断是否为闰年  year作为参数  传一个年份 四位数
	function isYear(year){
		if((year%4==0&&year%100!=0)||year%400==0){
			return true;
		}else{
			return false;
		}
	}
//获得某个月份的天数    month是参数  代表月份
	function getMonthDay(month){
		switch(month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:return 31;
			case 2:return 28;
			case 4:
			case 6:
			case 9:
			case 11:return 30;
			default:break;
		}
	}
	//按指定的分隔符 分隔日期   如：2016-08-08    2016/08/08-08
	function parseDate(dateStr,str){
		var dateArr=dateStr.split(str);  //dateArr=[2016,08,08];
		var dArr=dateArr.join("-");
		var time=Date.parse(dArr);  //毫秒数
		var dTime=new Date(time);
		return dTime;	
	}
	
	//将时间按指定格式输出   2016-08-08
	
	function fnTime(dateObj,s){
		//var myTime=new Date();  //获取当前系统时间
		var year=dateObj.getFullYear();   //返回一个四位数年份
		var month=toTwo(dateObj.getMonth()+1);   //返回0~11的数字
		var date=toTwo(dateObj.getDate());   //返回1~31的数字
		return year+s+month+s+date
	}
	function toTwo(n){
		return n<=9?"0"+n:""+n;
	}
	//var date=new Date(2016,7,8);
	//alert(fnTime(date,"/"));   测试
//判断两个日期相差的天数
	function getDiffer(date1,date2){
		var time1=date1.getTime();
		var time2=date2.getTime();
		return Math.floor(Math.abs(time2-time1)/(1000*60*60*24));
	}
	var iNow=new Date();
	var iNew=new Date(2016,7,8);
	//alert(getDiffer(iNow,iNew));  测试
//获得N天以后的日期

	function getDays(n){
		var time=new Date();
		var times=time.getTime();
		times+=n*86400*1000;
		return new Date(times);
	}
	//alert(getDays(2));  测试