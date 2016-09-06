

//获取DOM元素的方法!

function $(n){
	if(n.Id=="box"){
		n=document.getElementById("box")
	}
	if(n.TagName=="input"){
		n=document.getElementsByTagName("input")
	}
	if(n.Name=="user"){
		n=document.getElementsByName("user")
	}
	if(n.ClassName=="active"){
		n=document.getElementsByClassName("active")
	}
}







//数组去重!

function distinct(arr){                    //设置函数
	for(var i=0;i<arr.length;i++){           //遍历数组
		for(var j=i+1;j<arr.length;j++){        //遍历数组
			if(arr[i]==arr[j]){                  //判断if条件
				arr.splice(j,1);          //当条件成立时,执行的代码
				j--;                 //变量自减
			}
		}
	}
}

