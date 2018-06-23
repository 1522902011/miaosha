/**
 * Created by bnsj on 2018/6/19.
 */
$(function(){


    $('#in1').keyup(function(){
        $('#ix1').addClass('on2');
        $('#ix2').removeClass('on2');
        $('#i1').addClass('on1');
        $('#i2').removeClass('on1');
        $('.error2').removeClass('on3');
        $('.error1').removeClass('on3');
    });
    $('#in2').keyup(function(){
        $('#ix2').addClass('on2');
        $('#ix1').removeClass('on2');
        $('#i2').addClass('on1');
        $('#i1').removeClass('on1');
        $('.error2').removeClass('on3');
        $('.error1').removeClass('on3');
    });
//清除input
    var in1=$('#in1').val();
    var in2=$('#in2').val();
$('#ix1').click(function(){
    $('#in1').val('');
$('#in1').focus();
});
    $('#ix2').click(function(){
        $('#in2').val('');
        $('#in2').focus();
    });


    //手机认证
    var zzbds=/^[1][3,4,5,7,8][0-9]{9}$/;
    $('#bt').click(function(){
        var in1=$('#in1').val();
        var in2=$('#in2').val();
        if(zzbds.test(in1)){
         if(in1===in2){
             window.location.href='060830.html'
         }else{
             $('.error2').addClass('on3'); /*两次手机号码不一致*/
             $('#in2').focus();
         }
        }else{
            $('.error1').addClass('on3');/*手机号码输入错误*/
            $('#in1').focus();

        }
    });


























});/*全部*/