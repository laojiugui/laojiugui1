function setCookie(name,value,isDay) {
     var date=new Date();
    date.setDate(date.getDate()+isDay)
    document.cookie=name+"="+value+";expires="+date.toString();
}



function getValue(name){
    arr=document.cookie.split("; ")
    for(var i=0;i<arr.length;i++){
                 arr2=arr[i].split("=")
                  if(arr2[0]==name){
                     return arr2[1]
                  }
    }
            return '';
}


function remove(name){
    setCookie(name,1,-1)

}