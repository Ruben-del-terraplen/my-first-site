// Scroll-reveal + small interactions, shared across pages
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  function wrapLines() {
    document.querySelectorAll('[data-split]').forEach((el) => {
      if (el.dataset.split === 'done') return;
      const text = el.textContent.trim();
      el.innerHTML = '';
      // Split into roughly word-grouped lines via spans
      const words = text.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      words.forEach((w) => {
        if (/^\s+$/.test(w)) {
          frag.appendChild(document.createTextNode(' '));
        } else {
          const outer = document.createElement('span');
          outer.className = 'reveal-line';
          const inner = document.createElement('span');
          inner.textContent = w;
          outer.appendChild(inner);
          frag.appendChild(outer);
        }
      });
      el.appendChild(frag);
      el.dataset.split = 'done';
      // Stagger reveal
      el.querySelectorAll('.reveal-line').forEach((line, i) => {
        line.style.transitionDelay = (i * 35) + 'ms';
        line.querySelector('span').style.transitionDelay = (i * 35) + 'ms';
        io.observe(line);
      });
    });
  }

  function init() {
    document.querySelectorAll('.reveal, .reveal-img').forEach((el) => io.observe(el));
    wrapLines();

    // Live clock for nav
    const clock = document.getElementById('nav-time');
    if (clock) {
      const tick = () => {
        const now = new Date();
        const opts = { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York', hour12: false };
        clock.textContent = 'EST · ' + now.toLocaleTimeString('en-US', opts);
      };
      tick();
      setInterval(tick, 30000);
    }

    // Project card hover — number scale handled by CSS, but track current index
    document.querySelectorAll('[data-card]').forEach((card) => {
      card.addEventListener('mouseenter', () => card.classList.add('hover'));
      card.addEventListener('mouseleave', () => card.classList.remove('hover'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
