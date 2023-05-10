$(document).ready(function(){
    $(".nav-btn").click(function(){
        if($(".nav-links").css("height") =="0px"){
            $(".nav-links").css("height","max-content");
        }else{
            $(".nav-links").css("height","0px");
        }
    })
})