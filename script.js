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

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero image tilt-on-mousemove
  var heroMedia = document.getElementById('heroMedia');
  var heroSection = document.getElementById('top');
  if (heroMedia && heroSection && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroSection.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var rotateY = x * 14;
      var rotateX = y * -14;
      heroMedia.style.transform = 'rotate(1.5deg) perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });
    heroSection.addEventListener('mouseleave', function () {
      heroMedia.style.transform = '';
    });
  }

  // Scroll-reveal for sections
  var revealTargets = document.querySelectorAll('.card, .testimonial, .ba-frame, .step-num');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }
});
