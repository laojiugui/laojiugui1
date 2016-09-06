/**
 * Created by Administrator on 2016/8/17.
 */
window.onload=function(){
    var
        oSmall=$("small-box"),
        oMiddle=$("middle-box"),
        oBig=$("big-box"),
        oZoom=$("zoom"),
        oBigimg=$("big-img"),
        oMiddleimg=$("middle-img"),
        oSmallimg=getTagName(oSmall,"img"),
        oPso=position(oMiddle);

    //添加选项卡效果
    for(var i=0;i<oSmallimg.length;i++){
        oSmallimg[i].onmouseenter=function(){
            for(var j=0;j<oSmallimg.length;j++){
                oSmallimg[j].className="";
            }
            this.className="active";
            oBigimg.src=this.src;
            oMiddleimg.src=this.src;
        }
    }

    //添加鼠标移入事件
    oMiddle.onmouseenter=function(){
        oZoom.style.display="block";
        oBig.style.display="block";
    }
    //添加鼠标移出事件
    oMiddle.onmouseleave=function(){
        oZoom.style.display="none";
        oBig.style.display="none";
    }

    //添加鼠标移动事件
    oMiddle.onmousemove=function(ev){
        var ev=ev||window.event,
            //鼠标滑动时的位置
            iLeft=ev.clientX-oPso.left-oZoom.offsetWidth/2,
            iTop=ev.clientY-oPso.top-oZoom.offsetHeight/2;


        if(iLeft<0){
            iLeft=0;
        }else if(iLeft>oMiddle.offsetWidth-oZoom.offsetWidth){
            iLeft=oMiddle.offsetWidth-oZoom.offsetWidth;
        }
        if(iTop<0){
            iTop=0;
        }else if(iTop>oMiddle.offsetHeight-oZoom.offsetHeight){
            iTop=oMiddle.offsetHeight-oZoom.offsetHeight
        }
            //设置遮罩层的位置
        getStyle(oZoom,{left:iLeft+"px",top:iTop+"px"});

        var
            iImgleft=-iLeft/(oMiddle.offsetWidth-oZoom.offsetWidth)*(oBigimg.offsetWidth-oBig.offsetWidth),
            iImgtop=-iTop/(oMiddle.offsetHeight-oZoom.offsetHeight)*(oBigimg.offsetHeight-oBig.offsetHeight);

            getStyle(oBigimg,{left:iImgleft+"px",top:iImgtop+"px"})


    }


















    //通过id获取DOM节点
    function $(id){
        return document.getElementById(id)
    }
    //通过标签名获取DOM节点
    function getTagName(obj,TagName){
        return obj.getElementsByTagName(TagName)
    }

    //获得dom节点的属性样式
    function getStyle(obj,oTarget){
        for(var sAttr in oTarget){
            obj.style[sAttr]=oTarget[sAttr];
        }
    }

    //获取某个元素到body的水平距离和垂直距离
    function position(obj){
        var oPso={left:0,top:0};
        do{
            oPso.left+=obj.offsetLeft;
            oPso.top+=obj.offsetTop;
            obj=obj.offsetParent;
        }while(obj)
        return oPso
    }







}

