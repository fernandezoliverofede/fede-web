(function () {
  'use strict';

  /* Progressive enhancement marker */
  document.body.classList.add('js-ready');

  /* Header scroll state */
  var header = document.getElementById('site-header');
  if (header) {
    function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 40); }
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* Mobile nav */
  var toggle = document.getElementById('nav-toggle');
  var nav    = document.getElementById('nav-main');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      this.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        toggle.setAttribute('aria-label', 'Open navigation');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        toggle.setAttribute('aria-label', 'Open navigation');
        toggle.focus();
      }
    });
  }

  /* Accordion */
  document.querySelectorAll('.exp-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var panel    = document.getElementById(this.getAttribute('aria-controls'));
      var grid     = this.closest('.exp-grid');
      if (grid) {
        grid.querySelectorAll('.exp-q').forEach(function (b) {
          b.setAttribute('aria-expanded', 'false');
          var p = document.getElementById(b.getAttribute('aria-controls'));
          if (p) p.hidden = true;
        });
      }
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (panel) panel.hidden = false;
      }
    });
    btn.addEventListener('keydown', function (e) {
      var btns = Array.from(document.querySelectorAll('.exp-q'));
      var idx  = btns.indexOf(this);
      if (e.key === 'ArrowDown') { e.preventDefault(); (btns[idx + 1] || btns[0]).focus(); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); (btns[idx - 1] || btns[btns.length - 1]).focus(); }
    });
  });

  /* Scroll reveal */
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); });
  }
})();
