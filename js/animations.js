(function () {
    'use strict';

    function initScrollReveal() {
        var reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            reveals.forEach(function (el) { el.classList.add('visible'); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(function (el) { observer.observe(el); });
    }

    function initNavbarScroll() {
        var navbar = document.querySelector('.modern-navbar');
        if (!navbar) return;

        function onScroll() {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function init() {
        initScrollReveal();
        initNavbarScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    document.addEventListener('headerLoaded', init);
})();
