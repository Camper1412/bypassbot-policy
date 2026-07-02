/* ═══════════════════════════════════════════
   NAV SCROLL EFFECT
═══════════════════════════════════════════ */
(function () {
    'use strict';

    const nav = document.getElementById('nav');

    if (!nav) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    /* ═══════════════════════════════════════════
       MOBILE MENU TOGGLE
    ══════════════════════════════════════════ */
    var mobileToggle = document.getElementById('mobileToggle');
    var navLinks = document.getElementById('navLinks');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
            });
        });
    }

    /* ═══════════════════════════════════════════
       SCROLL REVEAL
    ══════════════════════════════════════════ */
    var revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        // Use IntersectionObserver if available
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        // Add staggered delay based on element index among siblings
                        var parent = entry.target.parentElement;
                        var siblings = parent ? parent.querySelectorAll('.reveal') : [];
                        var index = Array.prototype.indexOf.call(siblings, entry.target);
                        var delay = index * 50;

                        setTimeout(function () {
                            entry.target.classList.add('active');
                        }, delay);

                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            revealElements.forEach(function (el) {
                observer.observe(el);
            });
        } else {
            // Fallback: show all immediately
            revealElements.forEach(function (el) {
                el.classList.add('active');
            });
        }
    }

})();