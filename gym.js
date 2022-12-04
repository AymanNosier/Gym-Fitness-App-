
$(document).ready(function(){
    
    $(window).on("scroll",function(){
        var a=$(window).scrollTop();
        if(a>1000){
            $(".up").fadeIn();

        }
        else{
            $(".up").fadeOut();
        }
    })
    $(".up").click(function(){
        $(window).scrollTop(0);
    })
   
})