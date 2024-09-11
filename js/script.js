$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
    });

    
    var $scrollToTop = $('#scrollToTop');
    
    // Zobrazí/Skryje tlačítko na základě scrollování
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Zobrazí tlačítko po 100px scrollu
            $scrollToTop.fadeIn();
        } else {
            $scrollToTop.fadeOut();
        }
    });
    
    // Kliknutí na tlačítko pro návrat nahoru
    $scrollToTop.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); // Plynulý návrat nahoru
        return false;
    });    
});
