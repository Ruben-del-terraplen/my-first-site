(function () {
  var btn = document.querySelector('.back-to-top');
  if (!btn) return;

  var threshold = 600;
  var visible = false;

  function toggle() {
    var shouldShow = window.scrollY > threshold;
    if (shouldShow === visible) return;
    visible = shouldShow;
    btn.classList.toggle('is-visible', visible);
  }

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', function () {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  });
})();
