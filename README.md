# Peak Flow Plumbing - Demo Site

Full local business website built as a client portfolio piece. Responsive, fast, contact form wired to live email delivery.

**Live:** [demo-site-plumber-ten.vercel.app](https://demo-site-plumber-ten.vercel.app)

![React](https://img.shields.io/badge/React-19-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-teal) ![Vite](https://img.shields.io/badge/Vite-8-purple)

## Sections

- Sticky nav (mobile hamburger menu)
- Hero with CTA + trust indicators
- 6 service cards
- Stats + about / credentials checklist
- 3 testimonials
- Contact form (routes to owner Gmail via `/api/contact`)
- Footer

## Stack

React 19 + Tailwind CSS v4 + Vite 8. Zero dependencies beyond that. Deploys to Vercel in ~30 seconds.

## Customize for a client

1. Find/replace business name, phone, email, location
2. Update `SERVICES` array in `src/App.jsx`
3. Update `TESTIMONIALS` array
4. Set `VITE_CONTACT_API` in `.env` to your contact API URL
5. `vercel --prod`

## Local dev

```bash
npm install
npm run dev
```

---

Built by [Noah Page](https://noahpageit.github.io) - [Book a call](https://demo-site-consulting.vercel.app/#contact)
