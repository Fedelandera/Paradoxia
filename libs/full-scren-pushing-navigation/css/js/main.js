jQuery(document).ready(function($){
    // Abrir menú
    $('.cd-nav-trigger').on('click', function(){
        $('#cd-nav').addClass('is-visible');
    });

    // Cerrar menú al hacer click en los links
    $('.cd-primary-nav a').on('click', function(){
        $('#cd-nav').removeClass('is-visible');
    });

    // Cerrar menú al hacer click en el fondo
    $('.cd-navigation-wrapper').on('click', function(e){
        if( $(e.target).is('.cd-navigation-wrapper') ) {
            $('#cd-nav').removeClass('is-visible');
        }
    });
});