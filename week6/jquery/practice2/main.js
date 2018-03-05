$(document).ready(function(){
    console.log('HI');

    $('li').eq(0).addClass("luka");
    $("li").addClass("luka1");
    $("li.active").css({'color' : "blue"})


   // }"text-transform","uppercase","color","blue");
   var l = ($('li').length - 1) / 2;
   
 $("li:eq(" + l + ")").css({"background-color" : "red"})



})
