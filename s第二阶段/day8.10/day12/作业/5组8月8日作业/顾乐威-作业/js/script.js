window.onload = function () {
	$("#send").onclick = function sendMessage () {
		// 发送内容
		var message = $("#txt").value;
		// 空内容检查
		if (!message) {
			return;
		}
		// p 节点
		var li = document.createElement("li");
		li.setAttribute("class", "right");
		// span 节点
		var span = document.createElement("span");
		// 文本节点
		var textNode = document.createTextNode(message);
		// 添加子节点
		span.appendChild(textNode);
		li.appendChild(span);
		// 添加到聊天窗口
		$("#out").appendChild(li);
		// 回复
		replay();
		$("#out").scrollTop = $("#out").scrollHeight - 270;
	}
	function replay () {
		var r = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"];
		var textNode = document.createTextNode(r[Math.floor(Math.random()*r.length)]);
		var span = document.createElement("span");
		var li = document.createElement("li");
		li.setAttribute("class", "left");
		li.appendChild(span);
		span.appendChild(textNode);
		$("#out").appendChild(li);
	}
	
}