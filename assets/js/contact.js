/* Contact form validation (simulated submission) */
(() => {
  const form = document.getElementById('lead-form'); if (!form) return;
  const rules = {
    name: v => v.trim().length >= 3 || 'Please enter your full name (at least 3 characters).',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Please enter a valid email address.',
    phone: v => /^(\+92|0)(3\d{2}[-\s]?\d{7}|42[-\s]?\d{8})$/.test(v.trim()) || 'Enter a valid Pakistani number, e.g. 0300 1234567.',
    interest: v => !!v || 'Please select a property interest.',
    location: v => !!v || 'Please select a preferred location.',
    message: v => v.trim().length >= 20 || 'Message must be at least 20 characters.'
  };
  const check = name => {
    const el = form.elements[name], res = rules[name](el.value), err = document.getElementById('err-' + name);
    el.setAttribute('aria-invalid', res !== true);
    err.textContent = res === true ? '' : res;
    return res === true;
  };
  Object.keys(rules).forEach(n => {
    form.elements[n].addEventListener('blur', () => check(n));
    form.elements[n].addEventListener('input', () => form.elements[n].getAttribute('aria-invalid') === 'true' && check(n));
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const bad = Object.keys(rules).filter(n => !check(n));
    if (bad.length) { form.elements[bad[0]].focus(); return; }
    form.reset();
    const ok = document.getElementById('success'); ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  // Prefill when arriving from a property's "Contact Agent" button
  const p = NX.properties.find(x => x.id === +new URLSearchParams(location.search).get('property'));
  if (p) {
    form.elements.interest.value = p.purpose === 'buy' ? 'Buy a property' : 'Rent a property';
    form.elements.location.value = p.location;
    form.elements.message.value = `Hello, I'm interested in "${p.title}" in ${p.location} (${NX.price(p)}). Please share more details and arrange a viewing.`;
  }
})();
