# Sagar Portfolio (React + Vite + Tailwind v4)

Plain JavaScript port of the Lovable TanStack Start portfolio.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Edit your info
- Profile + projects: `src/lib/portfolio-data.js`
- UPI ID: `src/components/SupportDialog.jsx`

## Contact form backend

Copy `.env.example` to `.env` and fill in your Supabase URL and publishable (anon) key.
The form inserts rows into a `contact_submissions` table with columns:
`name, mobile, email, description` (plus auto `id`, `created_at`).
Create that table and allow public INSERT via RLS.
# MeriPortfolio
