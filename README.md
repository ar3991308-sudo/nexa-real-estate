# Nexa Estates - Lahore Real Estate Website

A responsive 3-page lead-generation website for a fictional Lahore real estate agency, built with semantic HTML5, CSS3 and vanilla JavaScript (no frameworks, no dependencies).

## Features
- Home, Properties and Contact pages with shared sticky header and footer
- Hero with quick search, animated statistics, featured listings, CTAs
- 11 fictional Lahore listings rendered from a JavaScript data array
- Working filters: location, type, buy/rent, min/max price (PKR), bedrooms, bathrooms; reset and empty state
- Property detail dialog, "Contact Agent" links that pre-fill the enquiry form
- Validated contact form (required, email, Pakistani phone, min message length) with simulated success
- Floating WhatsApp button on every page plus a large CTA on Contact

## Technologies
HTML5, CSS3 (custom properties, grid, flexbox), vanilla ES6+ JavaScript.

## Structure
```
index.html  properties.html  contact.html
assets/css/  style.css, components.css, responsive.css
assets/js/   main.js, properties.js, filters.js, contact.js
assets/images/  hero/, properties/, about/, agents/
assets/icons/   whatsapp.svg
README.md  design-notes.md
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Browser compatibility
Latest Chrome, Edge, Firefox and Safari (uses `<dialog>`, CSS grid, `??=`).

## Notes
All agency names, phone numbers, WhatsApp number, addresses and listings are fictional. Images are lightweight SVG illustrations; replace them in `assets/images/` with real photography (keep filenames or update `properties.js`).
