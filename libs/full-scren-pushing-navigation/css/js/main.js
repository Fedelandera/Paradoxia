(function() {
    var navTrigger = document.querySelector('.cd-nav-trigger');
    var nav = document.getElementById('cd-nav');
  
    if (navTrigger && nav) {
      navTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        nav.classList.toggle('open');
      });
  
      var links = document.querySelectorAll('.cd-primary-nav li a');
      links.forEach(function(link) {
        link.addEventListener('click', function() {
          nav.classList.remove('open');
        });
      });
    }
  })();