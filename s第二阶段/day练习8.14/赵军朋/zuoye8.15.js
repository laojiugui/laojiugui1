function setCookie(obj){
	var name=obj.key,
		value=obj.value,
		isday=obj.day,
		path=obj.path;

	if(!name){
		console.log("您必须传入Cookie的key")
		return false
	}	
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+isday)
	document.cookie=name+"="+encodeURLComponent(value)+";expirse="+oDate+";path="+path

}