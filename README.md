# Terrarium Landing (Next.js + Tailwind)

A clean, fast landing page to showcase terrarium models and collect leads.

## Tech
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Zero external APIs, optional webhook for lead form

## Local Development
```bash
pnpm i   # or: npm i  |  yarn
pnpm dev # or: npm run dev
```
Then open http://localhost:3000

## Form Handling
- By default, the form opens your email client (mailto).
- To receive real submissions to a webhook (Getform/Formspree/your API):
  1. Create an endpoint (e.g., https://getform.io/f/your-id)
  2. Add an env var in Vercel: `NEXT_PUBLIC_LEAD_WEBHOOK=https://...`
  3. Submissions will POST JSON to that endpoint.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Go to Vercel → **New Project** → Import your GitHub repo.
3. Keep defaults (Framework: Next.js). Click **Deploy**.
4. (Optional) Add environment variable `NEXT_PUBLIC_LEAD_WEBHOOK` for the form.

## Customize
- Edit copy and sections in `app/page.tsx`
- Add images under `public/`
- Adjust theme (colors/shadows) in `tailwind.config.ts` and `app/globals.css`

## SEO Tips
- Update `metadata` in `app/layout.tsx`
- Add social preview under `public/og.jpg`
- Connect custom domain in Vercel

Enjoy! 🌿
