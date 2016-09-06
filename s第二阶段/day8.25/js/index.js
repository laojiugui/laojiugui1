/**
 * Created by Administrator on 2016/8/25.
 */
window.onload=function(){
    var oBox=$("box"),
        oSmall=$("small-pic"),
        aList=$("list"),
        oLi=byTagName(aList,"li"),
        oSmallPic=byTagName(oSmall,"img"),
        oTimer=null,
        iCurIndex=0;

    //给小图片添加单击事件
    for(var i=0;i<oSmallPic.length;i++){
        oSmallPic[i].index=i;
        oSmallPic[i].onclick=function(){
            iCurIndex=this.index;
            /*for(var j=0;j<oLi.length;j++){
                oLi[j].className="";
                if(j===this.index){
                    oLi[j].className="active";
                }
            }*/
            move(iCurIndex);

        }
    }

    // 每一个li做动画的过程
    function move(iIndex) {
        // 让其它的li都隐藏掉
        for(var j = 0; j < oLi.length; j++) {
            (function (obj) {
                timeMove(obj, {opacity:0}, Tween.Linear, 2000, function () {
                    setStyle(obj, {display: 'none'});
                });
            })(oLi[j]);

            // 默认去掉所有按钮的className
            oSmallPic[j].className = '';
        }
        // 显示当前的li
        setStyle(oLi[iIndex], {display: 'block'});
        timeMove(oLi[iIndex], {opacity:100}, Tween.Linear, 2000);

        // 当前按钮添加className
        oSmallPic[iIndex].className = 'active';
    }

    function rightMove() {
        iCurIndex++;

        // 右侧临界点判断
        if(iCurIndex === oLi.length) {
            iCurIndex = 0;
        }
        move(iCurIndex);
    }

    oBox.onmouseenter=function(){
        clearInterval(oTimer);
    };
    oBox.onmouseleave=function(){
        autoMove();
    };




    autoMove();
    // 自动轮播的函数
    function autoMove() {
        oTimer = setInterval(function () {
            rightMove();
        },2000);
    }



    //通过id获取dom节点
    function $(id){
        return document.getElementById(id)
    }
    //通过标签名获取dom列表
    function byTagName(obj,sTagName){
        return obj.getElementsByTagName(sTagName)
    }
    function setStyle(obj,oTarGet){
        for(var aAttr in oTarGet){
            obj.style[aAttr]=oTarGet[aAttr];
        }
    }
};