//页面加载完成
window.onload=function(){
	function table(row,col){
		var row=row||8;//行
		var col=col||8;//列
		var str="<table>";
		for(var i=1;i<=row;i++){
			str+="<tr>";
			for(var j=1;j<=col;j++){
				str+="<td>第"+i+"行"+j+"列单元格"+"</td>";
			}
				str+="</tr>";
		}
		str+="</table>";
		return str;
	}
	var box=document.getElementById("box");
	var tab=table();
	box.innerHTML=tab;
}
