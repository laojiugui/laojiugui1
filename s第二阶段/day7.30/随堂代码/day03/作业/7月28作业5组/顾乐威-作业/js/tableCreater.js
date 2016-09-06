// 12.尝试做一个表格，行列可以自动生成
(function (){
	var index = 0;
	var btn = document.getElementById("create");
	// alert(btn.name);
	btn.onclick = create;
	function create(){
		if(index>0) {
			return;
		}
		var rows = document.getElementById("rows").value;
		var cols = document.getElementById("cols").value;

		var table = document.getElementById("table");
		// alert(table);
		for(var i=0; i<rows; i++) {
			table.innerHTML += "<tr id='t"+i+"'></tr>";
			var tr = document.getElementById("t"+i);
			// alert(tr);
			for(var j=0; j<cols; j++) {
				tr.innerHTML += "<td></td>";
			}
		}
		index++;
	}
})();