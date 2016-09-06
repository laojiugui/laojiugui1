/**
 * Created by Administrator on 2016/9/2.
 */
$(function(){
    //给头部左边的添加移动事件
    $("#header-left > a").hover(
        function(){
            $(this).css("color","#e10482")
        },
        function(){
            $(this).css("color","")
        }
    );
    //给头部右边添加移动事件
    $("#header-right > a").hover(
        function(){
            $(this).css("color","#e10482")
        },
        function(){
            $(this).css("color","")
        }
    )
});

//给search添加动画
$(function(){
   $("#goods-bottom > span") .hover(
       function(){
           $(this).css("color","#e10482")
       },
       function(){
           $(this).css("color","")
       }

   )

});

//给nav添加动画事件
$(function(){
   $("#nav-list>li").hover(
       function(){
           $(this).css("background","#e10482")
       },
       function(){
           $(this).css("background","")
       }
   )
    var iIndex=$("#banner-list").children().index();
    setInterval(function(){
        iIndex++;
        if(iIndex>=$("#banner-list").children().size()){
            iIndex=0;
        }
        if(iIndex==1){
            $("#banner-container").css({"background":"rgb(254, 163, 81)"})
        }else if(iIndex==2){
            $("#banner-container").css({"background":"rgb(0, 212, 154)"})
        }else{
            $("#banner-container").css({"background":""})
        }
        $("#banner-list").children().fadeOut(500);
        $("#banner-list").children().eq(iIndex).fadeIn(500);

    },2000);

});

//给service添加动画
$(function(){
    $(".service-child > a").hover(
        function(){
            $(this).css("color","#e10482")
        },
        function(){
            $(this).css("color","")
        }
    );
});


//main添加行为动画
$(function(){

    //main-top效果
   $("#main-top").children("a").hover(
       function(){
           $(this).stop(false,false).animate({"top":-15},300);
       },
       function(){
           $(this).stop(false,false).animate({"top":0},300);
       }
   );

    //main-middle效果
    $("#main-middle-footer").children("#main-middle-left").hover(
        function(){
            $(this).stop(false,false).animate({"top":-10},300);
        },
        function(){
            $(this).stop(false,false).animate({"top":0},300);
        }
    );
    $("#main-middle-top").children("div").hover(
        function(){
            $(this).stop(false,false).animate({"top":-10},300);
        },
        function(){
            $(this).stop(false,false).animate({"top":0},300);
        }
    );
    $("#main-middle-bottom").children("div").hover(
        function(){
            $(this).stop(false,false).animate({"top":-10},300);
        },
        function(){
            $(this).stop(false,false).animate({"top":0},300);
        }
    );

    //main-footer效果
    $("#main-footer-bottom-left").hover(
        function(){
            $(this).stop(false,false).fadeTo(1,0.8);
        },
        function(){
            $(this).stop(false,false).fadeTo(1,1);
        }
    );
    $("#main-footer-bottom-right-tl").hover(
        function(){
            $(this).stop(false,false).fadeTo(1,0.8);
        },
        function(){
            $(this).stop(false,false).fadeTo(1,1);
        }
    );
    $("#main-footer-bottom-right-tr").hover(
        function(){
            $(this).stop(false,false).fadeTo(1,0.8);
        },
        function(){
            $(this).stop(false,false).fadeTo(1,1);
        }
    );
    $("#main-footer-bottom-right-bl").hover(
        function(){
            $(this).stop(false,false).fadeTo(1,0.8);
        },
        function(){
            $(this).stop(false,false).fadeTo(1,1);
        }
    );
    $("#main-footer-bottom-right-br").hover(
        function(){
            $(this).stop(false,false).fadeTo(1,0.8);
        },
        function(){
            $(this).stop(false,false).fadeTo(1,1);
        }
    );

    //倒计时
    $(function(){
         $('#clock').countdown('2016/10/10', function(event) {
             $(this).html(event.strftime('%D 天 %H:%M:%S'));
         });
    });


    $("#main-bottom-left-top").children("a").hover(
        function(){
            $(this).css("text-decoration","underline")
        },
        function(){
            $(this).css("text-decoration","")
        }
    );



});