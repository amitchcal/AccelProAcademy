# AccelPro Academy

Lean production website for AccelPro Academy.

## Structure

- `public/index.html` — the website (single page)
- `public/styles.css`, `public/script.js` — styling, starfield, menu and enquiry-form logic
- `public/assets/` — logo mark (`logo-mark.svg`) and hero photo
- `api/enquiries.js` — Vercel enquiry-form endpoint using private Blob storage
- `vercel.json` — security headers

## Deploy to Vercel

Connect this GitHub repository to Vercel. No build command or output directory is required. Add a Vercel Blob store so `BLOB_READ_WRITE_TOKEN` is available to the enquiry endpoint.

## Deploy to conventional hosting

Upload the contents of `public/` as the site root. The static site will load normally, but its enquiry form needs a compatible server endpoint at `/api/enquiries`.
