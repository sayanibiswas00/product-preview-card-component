$(window).on('resize', function() {
    if($(window).width() < 500) {
        $('body img').addClass('card-img-top');
        $('body').removeClass('col-md-6');
    }
})