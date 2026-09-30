/* Property data + shared card rendering + detail dialog (fictional data) */
window.NX = window.NX || {};
NX.WA = '923001234567';
NX.properties = [
  {"id": 1, "title": "Modern 1 Kanal Villa", "location": "DHA Lahore", "type": "Villa", "purpose": "buy", "price": 185000000, "bedrooms": 5, "bathrooms": 6, "area": "1 Kanal", "image": "assets/images/properties/p1.svg", "description": "Contemporary villa in DHA Phase 6 with double-height lounge, home theatre, basement and landscaped lawn."},
  {"id": 2, "title": "Luxury 3-Bed Apartment", "location": "Gulberg", "type": "Apartment", "purpose": "buy", "price": 42000000, "bedrooms": 3, "bathrooms": 3, "area": "2,150 sq ft", "image": "assets/images/properties/p2.svg", "description": "High-floor apartment near MM Alam Road with skyline views, covered parking and 24/7 security."},
  {"id": 3, "title": "Spacious Family Home", "location": "Bahria Town Lahore", "type": "House", "purpose": "buy", "price": 68000000, "bedrooms": 5, "bathrooms": 5, "area": "10 Marla", "image": "assets/images/properties/p3.svg", "description": "Corner 10 Marla home in Sector C with modern kitchen, lawn and servant quarter."},
  {"id": 4, "title": "Corner House with Garden", "location": "Johar Town", "type": "House", "purpose": "buy", "price": 32500000, "bedrooms": 4, "bathrooms": 4, "area": "7 Marla", "image": "assets/images/properties/p4.svg", "description": "Well-kept corner house near Emporium Mall with a large garden and sunny living areas."},
  {"id": 5, "title": "Skyline Penthouse", "location": "Gulberg", "type": "Penthouse", "purpose": "buy", "price": 95000000, "bedrooms": 4, "bathrooms": 5, "area": "3,400 sq ft", "image": "assets/images/properties/p5.svg", "description": "Full-floor penthouse with private terrace, smart-home wiring and dedicated lift access."},
  {"id": 6, "title": "Furnished 2-Bed Apartment", "location": "DHA Lahore", "type": "Apartment", "purpose": "rent", "price": 150000, "bedrooms": 2, "bathrooms": 2, "area": "1,200 sq ft", "image": "assets/images/properties/p6.svg", "description": "Fully furnished apartment in DHA Phase 5, ideal for professionals. Gym and generator backup included."},
  {"id": 7, "title": "Classic Kanal House", "location": "Model Town", "type": "House", "purpose": "rent", "price": 220000, "bedrooms": 4, "bathrooms": 4, "area": "1 Kanal", "image": "assets/images/properties/p7.svg", "description": "Tree-lined Model Town block. Spacious rooms, large lawn and quiet neighbourhood."},
  {"id": 8, "title": "Cozy 2-Bed Flat", "location": "Johar Town", "type": "Apartment", "purpose": "rent", "price": 65000, "bedrooms": 2, "bathrooms": 2, "area": "900 sq ft", "image": "assets/images/properties/p8.svg", "description": "Affordable apartment close to schools and markets with covered parking."},
  {"id": 9, "title": "Executive Villa for Rent", "location": "Bahria Town Lahore", "type": "Villa", "purpose": "rent", "price": 280000, "bedrooms": 5, "bathrooms": 6, "area": "1 Kanal", "image": "assets/images/properties/p9.svg", "description": "Gated-community villa with pool, home office and 24-hour security."},
  {"id": 10, "title": "Heritage-Style Residence", "location": "Model Town", "type": "House", "purpose": "buy", "price": 78000000, "bedrooms": 6, "bathrooms": 6, "area": "2 Kanal", "image": "assets/images/properties/p10.svg", "description": "Grand 2 Kanal residence with timeless architecture, double kitchen and mature gardens."},
  {"id": 11, "title": "Designer 3-Bed Apartment", "location": "Gulberg", "type": "Apartment", "purpose": "rent", "price": 120000, "bedrooms": 3, "bathrooms": 3, "area": "1,750 sq ft", "image": "assets/images/properties/p11.svg", "description": "Elegant, freshly renovated apartment in Gulberg III with balcony and secure parking."}
];
NX.price = p => {
  const v = p.price;
  const s = v >= 1e7 ? (v / 1e7).toFixed(2).replace(/\.?0+$/, '') + ' Crore'
          : v >= 1e5 ? (v / 1e5).toFixed(1).replace(/\.0$/, '') + ' Lakh' : v.toLocaleString();
  return 'PKR ' + s + (p.purpose === 'rent' ? ' / month' : '');
};
NX.card = p => `
  <article class="card" id="p${p.id}">
    <div class="card-media"><img src="${p.image}" alt="${p.title} in ${p.location}, Lahore" loading="lazy" width="800" height="520">
      <span class="badge ${p.purpose}">${p.purpose === 'buy' ? 'For Sale' : 'For Rent'}</span></div>
    <div class="card-body">
      <span class="type">${p.type}</span><h3>${p.title}</h3><p class="loc">${p.location}, Lahore</p>
      <p class="price">${NX.price(p)}</p>
      <ul class="meta"><li>${p.bedrooms} Beds</li><li>${p.bathrooms} Baths</li><li>${p.area}</li></ul>
      <div class="card-actions">
        <button class="btn btn-dark btn-sm" type="button" data-view="${p.id}">View Details</button>
        <a class="btn btn-outline btn-sm" href="contact.html?property=${p.id}">Contact Agent</a>
      </div>
    </div>
  </article>`;
NX.render = (list, el) => { el.innerHTML = list.map(NX.card).join(''); };

NX.openDetail = id => {
  const p = NX.properties.find(x => x.id === +id); if (!p) return;
  let d = document.getElementById('detail');
  if (!d) { d = document.createElement('dialog'); d.id = 'detail'; document.body.appendChild(d); }
  d.setAttribute('aria-label', p.title);
  d.innerHTML = `<img src="${p.image}" alt="${p.title}" width="800" height="520"><div class="dlg-body">
    <span class="type">${p.type} &middot; ${p.purpose === 'buy' ? 'For Sale' : 'For Rent'}</span><h2>${p.title}</h2>
    <p>${p.location}, Lahore &middot; ${p.bedrooms} beds &middot; ${p.bathrooms} baths &middot; ${p.area}</p>
    <p class="price">${NX.price(p)}</p><p>${p.description}</p>
    <div class="card-actions"><a class="btn btn-accent btn-sm" href="contact.html?property=${p.id}">Contact Agent</a>
    <a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/${NX.WA}?text=${encodeURIComponent('Hi, I am interested in: ' + p.title + ' (' + p.location + ')')}">WhatsApp</a>
    <button class="btn btn-outline btn-sm" type="button" data-close>Close</button></div></div>`;
  d.showModal();
};
document.addEventListener('click', e => {
  const v = e.target.closest('[data-view]'); if (v) NX.openDetail(v.dataset.view);
  if (e.target.closest('[data-close]')) document.getElementById('detail').close();
  if (e.target.id === 'detail') e.target.close();
});
const featured = document.getElementById('featured');
if (featured) NX.render(NX.properties.filter(p => [1, 2, 3, 4, 5, 6].includes(p.id)), featured);
