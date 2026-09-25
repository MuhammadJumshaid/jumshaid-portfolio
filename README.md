# Muhammad Jumshaid — Portfolio

Personal portfolio site built with Next.js (App Router), React, JavaScript and Tailwind CSS v4. One page, no backend.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Edit content

All content lives in `data/`. Changing a file there updates the site; no component changes are needed.

| What | File | Notes |
|---|---|---|
| Name, titles, email, phone, links, bio, photos, resume | `data/site.js` | Set `resumeUrl` (e.g. `"/resume.pdf"`, file in `public/`) to show the Download Resume button. |
| Skills | `data/skills.js` | Add a name to a category's `items`. Known tech gets its logo; anything else gets a two-letter badge. |
| Projects | `data/projects.js` | Add one object per project. Empty fields are hidden. `featured: true` gets the large layout. Screenshots go in `public/images/projects/` (16:10, e.g. 1600×1000). |
| Work experience | `data/experience.js` | While the array is empty, the Experience section and its nav link are hidden. Add an entry and both appear. |
| Nav links | `data/navigation.js` | |

Photos go in `public/images/profile/`. If a photo file is missing, a styled "MJ" fallback is shown. Originals are kept in `assets/originals/` so they are not shipped with the site.

## Contact form

There is no backend: the form opens the visitor's email app with the message filled in. To use a form service (Formspree, Resend, Web3Forms...), replace the body of `sendMessage()` in `lib/sendMessage.js`.

## Deploy

Works on Vercel or Netlify with the default Next.js settings.

1. Push the repo and import it in Vercel (or Netlify).
2. Add the environment variable `NEXT_PUBLIC_SITE_URL` with your live address, e.g. `https://yourname.vercel.app`.
3. Redeploy. The canonical URL, sitemap, robots.txt, Open Graph URLs and structured data all use this value; without it they point to `http://localhost:3000`.

## Where things are

- `app/` — layout, page, SEO files (`opengraph-image`, `icon`, `sitemap`, `robots`), 404 page
- `components/sections/` — Hero, About, Skills, Experience, Projects, Contact
- `components/layout/` — Navbar, mobile menu, footer
- `components/ui/` — shared building blocks (Button, Section, cards, images, icons)
- `app/globals.css` — design tokens (colours, type scale, spacing) and global styles
