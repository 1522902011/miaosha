/**
 * Created by Administrator on 2018/6/8.
 */
$(function(){
    /**
     * 现在时间距离晚上24点的倒计时
     * */
    var endYear=new Date().getFullYear();
    var endMonth=new Date().getMonth()+1;
    var endDay=new Date().getDate();
    var endTime=new Date(endYear,endMonth,endDay);


    (function leftDiv (){
        var Time = endTime-(new Date().getTime());
        var Hours = addNumber(Math.floor(Time/1000/60/60%24));
        var Minutes = addNumber(Math.floor(Time/1000/60%60));
        var Seconds = addNumber(Math.floor(Time/1000%60));

        if(Time>0){
            setTimeout(function(){
                leftDiv();
            },1000);
        }else{
            clearTimeout(leftDiv())
        }
        $('#hour').text(Hours);
        $('#minute').text(Minutes);
        $('#second').text(Seconds);
        console.log(Seconds);
        /*if(Seconds==='00'){
            window.location.href='060802.html'
        }*/
    })();

    function addNumber(num){
        var num=(num>9)?num:('0'+num);
        return num;
    }

    //--------------------end-------------------------------------

//首页2页跳转开始
    $('.img12').click(function(){
        window.location.href='060812.html'
    });
    $('.img11').click(function(){
        window.location.href='060811.html'
    });
//首页2页跳转结束

//活动祥情开始
    $('#open1').click(function(){
        $('#cc12').addClass('on1');
        $('#cc11').removeClass('on1');

    });
    $('#close1').click(function(){
        $('#cc11').addClass('on1');
        $('#cc12').removeClass('on1');

    });

    $('#open2').click(function(){
        $('#cc22').addClass('on1');
        $('#cc21').removeClass('on1');

    });
    $('#close2').click(function(){
        $('#cc21').addClass('on1');
        $('#cc22').removeClass('on1');

    });

    $('#open3').click(function(){
        $('#cc32').addClass('on1');
        $('#cc31').removeClass('on1');

    });
    $('#close3').click(function(){
        $('#cc31').addClass('on1');
        $('#cc32').removeClass('on1');

    });

    $('#open4').click(function(){
        $('#cc42').addClass('on1');
        $('#cc41').removeClass('on1');

    });
    $('#close4').click(function(){
        $('#cc41').addClass('on1');
        $('#cc42').removeClass('on1');

    });
    //活动祥情结束

//loading开始


var num0=0;
    var loading;
    var li0=$('#ul0>li');

    $('#miao1').click(function(){
        $('.tz').addClass('on2');
        loading=setInterval(function(){
            if(num0>=10){
                clearInterval(loading);
                window.location.href='http://www.10086.cn'
            }
            li0.eq(num0++).addClass('on3').siblings().removeClass('on3');
        },500);
    });

    $('.close0').click(function(){
        $('.tz').removeClass('on2');
        num0=0;
        li0.eq(0).addClass('on3').siblings().removeClass('on3');
        clearInterval(loading);
    });

    $('#miao2').click(function(){
        window.location.href='060821.html' ;
    });

//loading结束
var time2;
var num2=2;
$('#miao').click(function(){
    num2--;
    if(num2<=0){
        time2=setInterval(function(){
            clearInterval(time2);
            $(this).addClass('img5')
        },1000);
    }
});











});/*全部*/
