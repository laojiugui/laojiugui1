/**
 * Created by Administrator on 2016/8/16.
 */

function bufferMove(obj,oTarget,fn){
    clearInterval(obj.timer);

    obj.timer=setInterval(function(){
        var btn=true;  //默认说有的元素都已经执行完毕

        for(var sTart in oTarget){
            //获取当前的值
            if(sTart==="opacity"){
                var iCha=parseFloat(getStyle(obj,sTart)*100);

            }else{
                var iCha=parseInt(getStyle(obj,sTart));
            }

            //计算速度
            var iSpeed=(oTarget[sTart]-iCha)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
            //运动后的属性和属性值
            if(sTart==="opacity"){
                obj.style["opacity"]=(iCha+iSpeed)/100
                obj.style["filter"]="alpha(opacity="+(iCha+iSpeed)+")";
            }else{

                obj.style[sTart]=iCha+iSpeed+"px"
            }



            //如果属性没有运动完毕,则按钮关闭掉
            if(iCha+iSpeed!==oTarget[sTart]){
                btn=false;
            }
            if(btn){
                clearInterval(obj.timer);
                if(fn){

                    fn();
            }

            }

        }

    },30)

}


function getStyle(obj,sTart){
    if(obj.currentStyle){

        return obj.currentStyle[sTart];
    }else{
        return getComputedStyle(obj,null)[sTart];

    }

}