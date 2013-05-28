$(document).ready(function($){
    $(window).resize(function(){
        $(".b-content").height($(window).height()-'50');
    });
    $(".b-content").height($(window).height()-'50');
});

$(document).ready(function(){

    $(window).resize(function(){

        $('.content__img').css({
            position:'absolute',
            left: ($(window).width()
                - $('.content__img').outerWidth())/2,
            top: ($(window).height()
                - $('.content__img').outerHeight())/2
        });

    });

    // To initially run the function:
    $(window).resize();

});