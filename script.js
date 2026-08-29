document.addEventListener('DOMContentLoaded', function () {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

                            var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.getElementById('mobileNav');
    if (toggle && mobileNav) {
          toggle.addEventListener('click', function () {
                  var isOpen = mobileNav.classList.toggle('open');
                  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          });
          mobileNav.querySelectorAll('a').forEach(function (link) {
                  link.addEventListener('click', function () {
                            mobileNav.classList.remove('open');
                            toggle.setAttribute('aria-expanded', 'false');
                  });
          });
    }
});
