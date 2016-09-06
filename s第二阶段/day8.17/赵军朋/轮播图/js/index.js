/**
 * Created by Administrator on 2016/8/17.
 */
window.onload=function(){
        oBox  		  = $('box'),
        oFlashList    = $('flash-list'),
        aListLi       = getTagName(oFlashList, 'li'),
        oFlashBtn     = $('flash-btn'),
        aBtnA         = getTagName(oFlashBtn, 'a'),
        oDirectionBtn = $('direction-btn'),
        oLeftBtn      = $('left-btn'),
        oRightBtn     = $('right-btn'),
        iCurIndex	  = 0, // 默认显示的下标
        oTimer 		  = null; // 保存定时器的返回值


    //给小按钮添加over事件
    for(var i=0;i<aBtnA.length;i++){
        aBtnA[i].index=i;
        aBtnA[i].onmouseenter=function(){
            iCurIndex=this.index;
            move(iCurIndex);
        }
    }

    oBox.onmouseenter = function () {
        clearInterval(oTimer);
        oLeftBtn.style.display="block";
        oRightBtn.style.display="block";
    }
    oBox.onmouseleave=function(){
        oTimer=setInterval(function(){
            rightmove();
        },500);
        oLeftBtn.style.display="none";
        oRightBtn.style.display="none";
    };


    //添加单击事件
    oLeftBtn.onclick=function(){
        iCurIndex--;
        if(iCurIndex<0){
            iCurIndex=aListLi.length-1;
        }
        move(iCurIndex);
    };
    oRightBtn.onclick=function(){
        rightmove();
    };
    oTimer=setInterval(function(){
            rightmove();
    },500);

    function rightmove(){
        iCurIndex++
        if(iCurIndex===aListLi.length){
            iCurIndex=0;
        }
        move(iCurIndex);
    }


    //封装通过Id获取dom节点函数
    function $(id){
        return document.getElementById(id)
    }
    //封装通过标签名获取dom节点函数
    function getTagName(obj,tagName){
        return obj.getElementsByTagName(tagName)
    }

    //封装修改属性函数
    function setStyle(obj,oTarget){
        for(var sAttr in oTarget){
            obj.style[sAttr]=oTarget[sAttr];
        }
    }



    //每一个li的动画运动工程
    function move(iIndex){
        for(var j = 0; j < aListLi.length; j++) {
            (function (obj) {
                timeMove(obj, {opacity:0}, Tween.Linear, 200, function () {
                    setStyle(obj, {display: 'none'});
                });
            })(aListLi[j]);
            aBtnA[j].className="";
        }
        setStyle(aListLi[iIndex], {display: 'block'});
        timeMove(aListLi[iIndex], {opacity:100}, Tween.Linear, 200);
        aBtnA[iIndex].className="active"
    }







};

