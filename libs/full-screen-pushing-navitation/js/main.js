(function() {
    var navTrigger = document.querySelector('.cd-nav-trigger');
    var navTrigger2 = document.querySelectorAll('.cd-nav-trigger2');
    var nav = document.querySelector('.cd-nav');

    if (navTrigger) {
        navTrigger.addEventListener('click', function(event) {
            event.preventDefault();
            navTrigger.classList.toggle('nav-is-visible');
            nav.classList.toggle('nav-is-visible');
        });
    }

    if (navTrigger2.length > 0) {
        navTrigger2.forEach(function(trigger) {
            trigger.addEventListener('click', function(event) {
                navTrigger.classList.remove('nav-is-visible');
                nav.classList.remove('nav-is-visible');
            });
        });
    }
})();