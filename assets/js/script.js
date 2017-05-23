(function($) {
    $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('show-responsive-menu');
        console.log(e);
    });
})(jQuery);
