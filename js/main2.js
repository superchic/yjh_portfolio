//JQuery

$(window).ready(function(){

    //브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);

    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        var ht = $(window).height();
       
        $("#container > div").mousewheel(function(event,delta){
            if(delta > 0){ 
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},1400,"linear");

            }else if(delta < 0){ 
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},1400,"linear");
            }
        }); 
    });


});