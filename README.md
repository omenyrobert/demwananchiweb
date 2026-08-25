# De-Mwananchi Financial Services — Website

React + Tailwind CSS (JavaScript, no TypeScript) rebuild of the De-Mwananchi Financial Services website.

## Stack

- React 18 + React Router 6
- Tailwind CSS 3
- Vite 5

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Pages

- `/` — Home
- `/who-we-are` — About Us, Core Values, How It Works
- `/individual-loans` — Individual & salary loan products
- `/business-loans` — SME / business loan products
- `/savings` — Savings plans
- `/agent-banking` — Agent banking services
- `/logistics` — Logistics & fleet services
- `/contact-us` — Contact form, map, contact details
- `/apply` — Loan application form

## Notes

- All content is sourced from the provided PDF and screenshots.
- Images live in `src/assets/images` and are re-exported from `src/assets/images/index.js` for clean imports.
- Contact and loan application forms are client-side only (no backend wired up yet) — hook up an API endpoint in `src/pages/ContactUs.jsx` and `src/pages/Apply.jsx` `handleSubmit` when ready.
- WhatsApp button links to `+256 777 218 558` — update the number in `src/components/WhatsAppButton.jsx` if needed.
