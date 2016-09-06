(function() {
	// 1.打印出2000-2016年中所有的闰年并输出
	var leap = "";
	for (var i=2000; i<=2016; i++) {
		if (i%4===0&&i%100!==0 || i%400===0) {
			leap += i + ","
		}
	}
	console.log("1. 2000-2016年中所有的闰年" + leap);
})();


(function() {
	// 2.打印出1-100里所有的奇数的和
	var sum = 0;
	for (var i=1; i<100; i+=2) {
		sum += i;
	}
	console.log("2. 1-100里所有的奇数的和: ,%d", sum);
})();


(function (){
	// 3.输出100以内所有除10,20,30,40,80,90以外的数的和
	var sum = 0;
	for (var i=0; i<=100; i++) {
		sum += i;
	}
	sum -= (10+20+30+40+80+90);
	console.log("3. 100以内所有除10,20,30,40,80,90以外的数的和: %d", sum);
})();


(function (){
	// 4.打印100以内 7的倍数
	var cal = "";
	for (var i=0; i<=100; i++) {
		if (i%7 === 0) {
			cal += i+",";
		}
	}
	console.log("4. 100以内7的倍数: "+cal);
})();


(function (){
	// 5.求10的阶乘
	function _(n) {
		var cal = 1;
		for (var i=1; i<=n; i++) {
			cal *= i;
		}
		return cal;
	}
	console.log("5. 10的阶乘: %d", _(10));
})();


(function (){
	// 6.输出20-80之间能被3整除的整数，每5个一行
	var counter = 0;
	var line = "";
	for (var i=20; i<=80; i++) {
		if (i%3===0) {
			line += i+",";
			counter++;
		}
		if (counter%5===0) {
			line += "\n";
		}
	}
	console.log("6. 20-80之间能被3整除的整数:\n"+line)
})();


(function (){
	// 7.操场上有100-200人，3个人排队剩一个，4个人排队剩2个人，5个人排队剩3个人；
	for (var i=100; i<=200; i++) {
		if(i%3===1&&i%4===2&&i%5===3){
			console.log("7. 操场上共有 %d 人", i);
			break;
		}
	}
})();


(function (){
	// 8.求出1-1/2+1/3-1/4…..1/100的和
	var sum = 0;
	for (var i=1; i<100; i+=2) {
		sum += 1/i;
		sum -= 1/(i+1);
	}
	console.log("8. 求出1-1/2+1/3-1/4…..1/100的和: %f", sum);
})();

(function (){
	// 9.输出九九乘法表
	console.log("9. 输出九九乘法表");
	for(var i=1; i<=9; i++) {
		var line = "";
		for(var j=1; j<i; j++) {
			line += i+"x"+j+"="+i*j+", ";
		}
		console.log(line);
	}
})();


(function (){
	// 10.打印100–200之间所有能被3或者7整除的数
	var line = "";
	for(var i=100; i<200; i++) {
		if(i%3===0 || i%7===0) {
			line += i+", ";
		}
	}
	console.log("10. 100–200之间所有能被3或者7整除的数: \n"+line);
})();


(function (){
	// 12.小王入职时月工资10k元，每年涨工资10%，10年后小王的工资是多少？这10年小王共赚了多少钱？(选做)
	var all = 0;
	var first = 10000;
	for(var i=0; i<10; i++) {
		all += first * 12;
		first *= 1.1;
		// console.log("第%d年后小王的工资是 %d, 这%d年小王共赚了 %d",i+1, first, i+1, all);
	}
	console.log("12. 10年后小王的工资是 %d, 这10年小王共赚了 %d", first, all);
})();


function _a(a, n) {
	var init = a,r = a;
	for (var i=0; i<n-1; i++) {
		r *= a;
	}
	return r;
}
(function (){
	// 13.求100-999之间的水仙花数。（选做）
	var line = "";
	var n1,n2,n3;
	var mi = 3;
	for(var i=100; i<1000; i++) {
		n1 = parseInt(i/100);
		n2 = parseInt(i/10)%10;
		n3 = i%10;
		if (_a(n1,mi)+_a(n2,mi)+_a(n3,mi)===i) {
			line += i+",";
		}
	}
	console.log("13. 100-999之间的水仙花数: "+line)
})();

