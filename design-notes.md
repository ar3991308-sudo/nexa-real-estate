# Design Notes

1. **Visual direction** - Luxury editorial: generous whitespace, serif headlines, restrained cards and subtle shadows.
2. **Colour** - Charcoal `#15171a`, warm white `#faf7f2`, single gold accent `#b08d57` (darker `#8a6a35` for text to keep contrast above 4.5:1). Green is used only for WhatsApp.
3. **Typography** - Georgia serif for headings (trust, heritage); system sans for UI text. No external fonts, so pages load fast.
4. **Layout** - 3-column property grid, alternating section backgrounds, one container width, dark hero and footer for contrast.
5. **UX** - Sticky header with persistent "Find a Property" CTA, live filtering with result count, clear empty state, detail dialog, prefilled forms.
6. **Lead generation** - CTAs in header, hero, every card, a closing conversion band, footer and a floating WhatsApp button. Quick search on Home deep-links into filtered results.
7. **Responsive** - Mobile-first fluid units; breakpoints at 1024, 860 and 600px. Nav collapses to hamburger, grids drop to 2 then 1 column, filters stack, no horizontal overflow.
8. **Accessibility** - Semantic landmarks, skip link, labelled fields with `aria-describedby` errors, `aria-invalid`, visible focus rings, alt text, keyboard-operable menu (Esc closes) and dialog.
