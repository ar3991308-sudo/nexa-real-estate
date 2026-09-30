/* Client-side property filtering (properties page) */
(() => {
  const form = document.getElementById('filters'); if (!form) return;
  const grid = document.getElementById('grid'), empty = document.getElementById('empty'), count = document.getElementById('count');
  const v = n => form.elements[n].value;
  const apply = () => {
    const min = +v('min') || 0, max = +v('max') || Infinity, beds = +v('beds') || 0, baths = +v('baths') || 0;
    const list = NX.properties.filter(p =>
      (!v('location') || p.location === v('location')) && (!v('type') || p.type === v('type')) &&
      (!v('purpose') || p.purpose === v('purpose')) && p.price >= min && p.price <= max &&
      p.bedrooms >= beds && p.bathrooms >= baths);
    NX.render(list, grid);
    empty.hidden = list.length > 0;
    count.textContent = `${list.length} propert${list.length === 1 ? 'y' : 'ies'} found`;
  };
  form.addEventListener('submit', e => { e.preventDefault(); apply(); });
  form.addEventListener('change', apply);
  form.addEventListener('reset', () => setTimeout(apply));
  document.querySelectorAll('[data-clear]').forEach(b => b.addEventListener('click', () => form.reset()));
  // Prefill from home-page quick search / footer links
  const q = new URLSearchParams(location.search);
  ['location', 'purpose', 'type'].forEach(k => { if (q.get(k)) form.elements[k].value = q.get(k); });
  apply();
})();
