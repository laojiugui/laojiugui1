//-----------------homework 1------------------------
var year = prompt("please enter a year", 1998);
var tYear = Number(year);
if (tYear % 4 === 0 && tYear % 100 > 0 || tYear % 400 === 0) {
	console.log("%d: this year is a leap year. :)", tYear);
} else {
	console.log("%d: this year is a regular year. :(", tYear);
}



//-----------------homework 2------------------------
var num = Number(prompt("enter your number(Integer)", 110));
if (num === 0) {
	console.log("%d = 0. ", num);
} else if (num > 0) {
	console.log("%d > 0. ", num);
}
else {
	console.log("%d < 0. ", num);
}


//-----------------homework 3------------------------
var triple = Number(prompt("Is your number is a triple of three?", 999));
if (triple % 3 === 0) {
	console.log("%d: Yes, I'm triple of %d", triple, triple/3);
} else {
	console.log("%d: No, I'm came by myself. ", triple);
}


//-----------------homework 4------------------------
var tall = Number(prompt("How tall(cm) are you?", 173));
var kg = Number(prompt("How many weight(kg) do you have?", 58))
var sWeigth = (tall - 108) * 2;
if (sWeigth === kg) {
	console.log("congratulations!, you have a perfect body. :)");
} else if (sWeigth - kg < 10 || sWeigth - kg > -10) {
	console.log("you have a good body. :)");
}
else {
	console.log("you'r over weight");
}


//-----------------homework 5------------------------
var grade = Number(prompt("enter your grade",90));
if (grade >= 90) {
	console.log("%d: A. ", grade);
} else if (grade >= 80) {
	console.log("%d: B. ", grade);
} else if (grade >= 70) {
	console.log("%d: C. ", grade);
} else if (grade >= 60) {
	console.log("%d: D. ", grade);
} else {
	console.log("%d: you field in this exam. ", grade);
}


//-----------------homework 6------------------------
var mon = Number(prompt("Enter a month(in a way of number)", 7));
switch(mon){
	case 2:
		console.log("month %d has 29 days", mon);
		break;
	case 4:; case 6:; case 9:;
	case 10:
		console.log("month %d has 30 days", mon);
		break;
	default:
		console.log("month %d has 31 days.", mon);
}


//-----------------homework 7------------------------
(function (){
	var n = Number(prompt("输入一个五位数",12345));
	console.log("数字 %d 的第一位是：%d", n, parseInt(n/10000));
	console.log("数字 %d 的第二位是：%d", n, parseInt(n/1000)%10);
	console.log("数字 %d 的第三位是：%d", n,parseInt(n/100)%10);
	console.log("数字 %d 的第四位是：%d", n, parseInt(n/10)%10);
	console.log("数字 %d 的第五位是：%d", n, n%10);
})();


//-----------------homework 8------------------------
(function (){
	var a = Number(prompt("输入a",3));
	var b = Number(prompt("输入b",4));
	var c = Number(prompt("输入c",5));
	var max = a;
	if (max < b) {
		max = b;
	}
	if (max < c) {
		max = c;
	}
	console.log("The max number is %d", max);
})();


//-----------------homework 9------------------------
(function (){
	var counter = 0;
	var line = "";
	for (var i=1000; i<=2000; i++) {
		if (i % 4 === 0 && i % 100 > 0 || i % 400 === 0) {
			line += i + ",";
			if (++counter === 4) {
				console.log(line);
				counter = 0;
				line = "";
			}
		}
	}
})()