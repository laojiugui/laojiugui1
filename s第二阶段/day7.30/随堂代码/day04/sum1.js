function sum(){
	var number1=document.getElementById("num1");
	var number2=document.getElementById("num2");
	var res=document.getElementById("result");
	var num1=Number(number1.value);
	var num2=Number(number2.value);
	res.value=num1+num2;
}