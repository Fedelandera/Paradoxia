$(document).ready(function() {
    // Plugin para PrettyPhoto (galería de imágenes)
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

    // Activar tooltips si hubiera elementos con título
    $('[data-toggle="tooltip"]').tooltip();

    // Activar animaciones en scroll (scrollspy)
    $('body').scrollspy({ target: '#navbar' });

    // Smooth scroll para enlaces internos
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        if ($target.length) {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing');
        }
    });
});