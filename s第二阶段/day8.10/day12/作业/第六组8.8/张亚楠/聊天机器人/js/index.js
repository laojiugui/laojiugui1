// JavaScript Document
window.onload=function(){
	
	var Open=document.getElementById("open");			//打开聊天框
	var oWrap=document.getElementById("wrap");			//整个聊天框
	var oClose=document.getElementById("close");		//右上角关闭按钮
	Open.onclick=function(){
		oWrap.style.display="block";									//点击打开QQ聊天框
	}

	
	var oDialog=document.getElementById("dialog");		//ul，聊天记录
	//var oEdit=document.getElementById("edit");			//输入框
	var oCon=document.getElementById("content")			//输入框textarea
	var oGuan=document.getElementById("guan");			//下面的关闭按钮
	var oSend=document.getElementById("send");			//发送按钮
	
	oClose.onclick=oGuan.onclick=function(){
		oWrap.style.display="none";									//点击关闭，oGuan和oClose
	}	
	
	oSend.onclick=function(){											//点击发送
		var oLi=document.createElement("li");					//创建li标签
		var oSpan=document.createElement("span");		//创建span标签，用于区分对话的左右浮动
		var oTxt=document.createTextNode(oCon.value);	//把输入框里的内容给oTxt
		oSpan.appendChild(oTxt);										//
		oLi.appendChild(oSpan);
		oDialog.appendChild(oLi);
		computer();
		oCon.value="";
	}
	
	function computer(){
		var oLi=document.createElement("li");
		var oSpan=document.createElement("span");
		var oTxt=document.createTextNode("你说哩是啥，声儿大点，我听不见");
		oSpan.appendChild(oTxt);
		oLi.appendChild(oSpan);
		oDialog.appendChild(oLi);
		oSpan.style.backgroundColor="lightskyblue";
		oSpan.style.float="left";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}

