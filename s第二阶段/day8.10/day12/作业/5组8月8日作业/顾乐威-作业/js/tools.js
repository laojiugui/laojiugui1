// Element => Element
// 清除空白节点
function clearEmptyNode(e) {
	var eList = e.childNodes;
	for (var i = 0; i < eList.length; i++) {
		if (eList[i].nodeName == "#text") {
			e.removeChild(eList[i]);
		}
	}
	return e;
}


// "cssSeclector" => Element / HTMLCollection / Array[Element]
// 根据id或class选择符，返回相应的HTML元素
var $ = function mySelector(selector, index) {
	//
	var s = selector.slice(1);
	if (selector.charAt(0) == "#") {
		return document.getElementById(s);
	} else if (selector.charAt(0) == ".") {
		var classDom;
		if (document.getElementsByClassName) {
			classDom = document.getElementsByClassName(s);
		} else {
			classDom = myClassNameSelector(s);
		}
		if (index == 0) {
			return classDom[index];
		}
		return classDom;
	} else {
		throw new Error("未约定的html选择符:(");
	}
}


// "className" => Array[Element]
// 返回所有标签中包含className的元素
function myClassNameSelector(selector) {
	var all = document.getElementsByTagName("*");
	var rElement = [];
	for (var i=0; i<all.length; i++) {
		if (all[i].className.indexOf(selector)>=0) {
			rElement.push(all[i]);
		}
	}
	return rElement;
}


// => Number
// 获取浏览器可视区域的兼容函数
function getHeight() {
	var rHeight;
	if (window.innerHeight) {
		rHeight = window.innerHeight;
	} else {
		if (document.compatMode == "CSS1Compat") {
			rHeight = document.documentElement.clientHeight;
		} else {
			rHeight = document.body.clientHeight;
		}
	}
	return rHeight;
}