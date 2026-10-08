# AccelPro Academy

Lean production website for AccelPro Academy.

## Structure

- `public/accelpro-premium.html` — self-contained responsive website
- `public/accelpro-logo-deep-gold.png` — production logo
- `api/enquiries.js` — Vercel enquiry-form endpoint using private Blob storage
- `vercel.json` — root-page routing and security headers

## Deploy to Vercel

Connect this GitHub repository to Vercel. No build command or output directory is required. Add a Vercel Blob store so `BLOB_READ_WRITE_TOKEN` is available to the enquiry endpoint.

## Deploy to conventional hosting

Upload `public/accelpro-premium.html` as `index.html` and place `public/accelpro-logo-deep-gold.png` beside it. The static site will load normally, but its enquiry form needs a compatible server endpoint at `/api/enquiries`.
