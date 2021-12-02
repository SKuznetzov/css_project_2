$(document).ready(function(){
    $('nav a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        return false;
    });
});