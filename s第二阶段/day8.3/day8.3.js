

//闰年封装函数
function isyear(year){               //建立封装函数
	if((year%4==0&&year%100!=0)||year%400==0){           //闰年成立条件
		return true;                           //返回值
	}else{
		return false;               //不是闰年的返回值
	}
}


//月份封装函数
function getmonth(month){
	switch(month){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:return 31;
		case 2:return 31;
		case 4:
		case 6:
		case 9:
		case 11:return 31;
		
	
	}

}