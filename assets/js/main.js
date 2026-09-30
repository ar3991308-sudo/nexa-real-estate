/* Shared UI: mobile nav and animated counters */
(() => {
  const toggle = document.querySelector('.nav-toggle'), menu = document.getElementById('menu');
  const setOpen = open => { toggle.setAttribute('aria-expanded', open); menu.classList.toggle('open', open); };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', e => e.key === 'Escape' && setOpen(false));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  const io = new IntersectionObserver(entries => entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    io.unobserve(target);
    const end = +target.dataset.count, suffix = target.dataset.suffix || '';
    let start = null;
    const tick = ts => {
      start ??= ts;
      const p = Math.min((ts - start) / 1400, 1);
      target.textContent = Math.floor(end * p).toLocaleString() + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }));
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
})();

/* Scroll-reveal animation */
(() => {
  document.documentElement.classList.add('js');
  const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.section-head,.feature,.stat,.about>*,.cta,.filters,.info,.form-wrap').forEach(el => { el.classList.add('reveal'); rv.observe(el); });
})();
