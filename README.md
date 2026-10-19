# Rajneesh Kumar Gupta | Rootpure Advisor: 3D Portfolio
Frontend-only React portfolio (Vite, React Router, React Three Fiber). No backend or database.

    npm install
    npm run dev       # http://localhost:5173
    npm run build     # static site in dist/

## Edit your content
- Contact details, navigation, profile photo path: `src/config/siteConfig.js`
- Profile photo: save it as `public/images/profile.jpg` (shows everywhere automatically; placeholder until then)
- Gallery photos / awards / certificates: put files in `src/assets/gallery/`, list them in `src/data/gallery.js`
- Products (verified info only): `src/data/products.js`

## Deploy
Upload `dist/` to Netlify, Vercel or GitHub Pages. `public/_redirects` handles page URLs on Netlify; on other hosts enable "single-page app" fallback to index.html.

## Responsive notes
- Layout is fluid from 320px phones to large desktops (see the "Responsive hardening" block at the end of `src/styles/global.css`).
- Gallery uses a CSS grid with fixed-ratio image boxes (`src/styles/gallery.css`), so photos always show on mobile.

## Refreshing on /gallery (SPA fallback)
Every host must send unknown URLs to index.html. Included: `public/_redirects` (Netlify), `public/.htaccess` (Apache/Hostinger/cPanel), `vercel.json` (Vercel). For GitHub Pages use a hash router or a 404.html copy of index.html.
