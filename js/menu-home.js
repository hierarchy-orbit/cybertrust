$(window).scroll(function(){
     if ($(this).scrollTop() > 590) {
         $('nav').addClass('fixed');
         $('nav ul li .submenu').removeClass('up')
    } else {
        $('nav').removeClass('fixed');
        $('nav ul li .submenu').addClass('up')
    }
});