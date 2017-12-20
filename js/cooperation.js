$(function(){
    //选项卡
    (function(){
        $('#my-content .hd .classinner .classcon .lt').each(function(){
            $(this).mouseenter(function(){
                $(this).siblings().removeClass('on').end().addClass('on');
            });
        });
    })();
    // 图片放大
    (function(){
        $('#train .traininner ul li a').each(function(){
            $(this).hover(function(){
                $(this).children('img').css({
                    width:'440px',
                    height:'220px',
                    left:'-30px',
                    top:'-20px',
                });
            },function(){
                $(this).children('img').css({
                    width:'380px',
                    height:'190px',
                    left:'0px',
                    top:'0px'
                });
            });
        });;
    })();
});