# Muhammad Jumshaid — Portfolio Website Build Prompts

> This file is for an AI coding agent (Claude Code, Codex, Cursor, etc.).
> Part 1 is the project spec. Part 2 is a list of 20 prompts. Run them **one at a time**.

---

## 0. HOW TO USE THIS FILE (READ FIRST)

You are the AI coding agent building this portfolio website.

### The one-prompt rule

**Do NOT run all prompts at once. Work on ONE prompt at a time.**

The user controls the order. They will send a message like `Run Prompt 01`, then `Run Prompt 02`, and so on.

When the user sends `Run Prompt NN`:

1. Read the whole spec (Part 1) so you understand the project.
2. Run **only Prompt NN**, the one the user named. Never pick a prompt yourself.
3. Look at the existing project code before changing anything.
4. Build everything that prompt asks for.
5. Check your work against the prompt's **Done when** list.
6. Run `npm run lint` and `npm run build`. Fix every error and warning you caused.
7. Tick the prompt in the Progress Tracker (change `[ ]` to `[x]`).
8. Stop. Give a short summary: what you built, which files changed, anything the user must provide.
9. End with:

> **Prompt NN is complete and verified. Send `Run Prompt NN+1` when you're ready.**

If the user just shares this file without naming a prompt, do not start building. Read the spec, confirm you understand it, and wait for `Run Prompt 01`.

If the user asks you to run a prompt whose earlier prompts are not ticked, point this out and ask whether to continue anyway.

### Never

- Never start the next prompt on your own, even if the user says "next" or "continue". Ask them to confirm the prompt number.
- Never run more than one prompt in one response.
- Never rewrite working code from an earlier prompt unless the current prompt needs it.
- Never invent personal information (see section 1.3).

### If something is missing

If a prompt needs something the user has not given you (an image, a URL, a description), do not guess. Use the placeholder/fallback rules in this file, finish the prompt, and list what is missing in your summary.

### Progress Tracker

This is a record of finished work only. It does not decide what runs next; the user does.


- [x] Prompt 01 — Project setup
- [x] Prompt 02 — Design system
- [x] Prompt 03 — Navbar
- [x] Prompt 04 — Hero section
- [x] Prompt 05 — Personal images
- [x] Prompt 06 — About section
- [x] Prompt 07 — Skills section
- [x] Prompt 08 — Experience section
- [x] Prompt 09 — Projects section
- [x] Prompt 10 — Project visuals
- [x] Prompt 11 — Contact section
- [x] Prompt 12 — Footer
- [x] Prompt 13 — Animations
- [x] Prompt 14 — Mobile UX pass
- [x] Prompt 15 — Desktop UX pass
- [x] Prompt 16 — SEO
- [x] Prompt 17 — Accessibility audit
- [x] Prompt 18 — Performance
- [x] Prompt 19 — Visual polish
- [x] Prompt 20 — Final audit

---

# PART 1 — PROJECT SPEC

## 1.1 Project goal

Build a modern, fast, fully responsive personal portfolio for **Muhammad Jumshaid**, a Software Developer and Frontend Developer with **2+ years** of professional experience.

The site should help recruiters, clients and other developers quickly understand:

1. Who he is and what he does
2. What he can build (skills + real projects)
3. How to contact him

It should feel **clean, premium, technical and personal**. It must NOT look like a generic portfolio template.

## 1.2 Tech stack

- **Next.js** (latest stable) with the **App Router**
- **JavaScript / JSX only** — no TypeScript (`.js` and `.jsx` files)
- **React**
- **Tailwind CSS** (use whatever version `create-next-app` installs; follow that version's setup, e.g. Tailwind v4 uses `@import "tailwindcss"` and `@theme` in CSS instead of a `tailwind.config.js`)
- `next/font` for fonts, `next/image` for images
- Icons: inline SVG components, or **one** small icon library at most (for example `lucide-react` for UI icons, `react-icons` only if brand/tech logos are needed). Do not install both unless there is a clear reason.
- No backend, no database, no CMS.
- No large animation libraries (no Framer Motion / GSAP) unless a later prompt clearly needs one. Use CSS/Tailwind transitions and `IntersectionObserver`.

## 1.3 Truth rules (very important)

Use only the information in this file. **Never invent:**

- Companies, job titles, dates, clients
- Achievements, awards, certifications, testimonials
- Statistics (users, visitors, "projects completed", years beyond what's given)
- Project descriptions, features or tech stacks that were not provided
- Skill percentages or "skill level" bars

If information is missing, leave an empty field in the data file and make the UI handle it (hide the element or show a neutral fallback). **Never show placeholder text like "Lorem ipsum" or "Description coming soon" on the live page.**

## 1.4 Personal information

All of this goes in `data/site.js` so it can be changed in one place.

| Field | Value |
|---|---|
| Name | Muhammad Jumshaid |
| Primary title | Software Developer |
| Secondary title | Frontend Developer |
| Experience | 2+ years (store as `experienceYears: 2` and display as "2+ years") |
| Email | jumshaid.khan.1222@gmail.com |
| Phone (display) | +92 334 1222435 |
| Phone (link) | `tel:+923341222435` |
| LinkedIn | https://www.linkedin.com/in/muhammad-jumshaid-b97229318/ |
| GitHub | https://github.com/MuhammadJumshaid |
| Site URL | `""` — **not provided yet**. Read from `process.env.NEXT_PUBLIC_SITE_URL`, fall back to `http://localhost:3000` |
| Resume PDF | **not provided yet** — `resumeUrl: ""` |
| Location | **not provided** — leave out |

**Short bio (use and lightly adapt, keep it true):**
Muhammad Jumshaid is a Software Developer and Frontend Developer who builds modern, responsive and user-friendly web applications with JavaScript, React and Next.js.

## 1.5 Skills

Store in `data/skills.js`, grouped by category. **No percentages or level bars.**

| Category | Skills |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, React.js, Next.js |
| UI / Styling | Tailwind CSS, Bootstrap |
| Backend / Database | .NET Core MVC, SQL Server |

## 1.6 Projects

Store in `data/projects.js`. New projects must be addable by adding one object to the array.

| Title | Live URL | Everything else |
|---|---|---|
| Jumshaid Booking | https://jumshaidbooking.netlify.app/ | not provided |
| Jumshaid Blogs | https://jumshaidblogs.netlify.app/ | not provided |

Data shape:

```js
// data/projects.js
export const projects = [
  {
    slug: "jumshaid-booking",
    title: "Jumshaid Booking",
    description: "",        // not provided yet — hide if empty
    category: "",           // not provided yet — hide if empty
    technologies: [],       // not provided yet — hide badges if empty
    image: "",              // e.g. "/images/projects/jumshaid-booking.webp" — show fallback if empty
    liveUrl: "https://jumshaidbooking.netlify.app/",
    githubUrl: "",          // hide GitHub button if empty
    featured: true,
  },
  {
    slug: "jumshaid-blogs",
    title: "Jumshaid Blogs",
    description: "",
    category: "",
    technologies: [],
    image: "",
    liveUrl: "https://jumshaidblogs.netlify.app/",
    githubUrl: "",
    featured: false,
  },
];
```

## 1.7 Experience

Details are **not provided yet**. Store in `data/experience.js`:

```js
export const experience = [
  // {
  //   role: "",
  //   company: "",
  //   period: "",       // e.g. "Jan 2023 – Present"
  //   location: "",
  //   description: "",
  //   highlights: [],   // short bullet points
  //   technologies: [],
  // },
];
```

**Rule:** if the array is empty, do not show an empty timeline to visitors. Hide the Experience section **and** its nav link automatically. When real entries are added, both appear without code changes.

## 1.8 Personal images

The user will add personal photos later to `public/images/profile/`.

- Use `next/image` with correct `width`/`height` or `fill` + `sizes`.
- Set `object-position` so the face is never cut off (default `object-top` or `center 20%`).
- Hero image gets `priority`; all others lazy-load.
- Alt text example: "Muhammad Jumshaid, Software Developer".
- **If an image is missing, the layout must not break.** Show a clean fallback (for example his initials "MJ" on a styled background). Check file existence at build time in a Server Component (`fs.existsSync`) or keep an `image: ""` field in `data/site.js` that the component checks.

## 1.9 Design direction

**Aim for:** strong typography, generous spacing, clear hierarchy, a limited colour palette (one accent colour), subtle motion, tasteful background detail (soft grid, faint gradient, light noise).

**Avoid:** template look, Bootstrap-style layouts, too many rounded cards, heavy gradients, neon glow, clutter, animating everything, fake stats/logos/testimonials.

**Theme:** Build one polished theme first (dark or light, decided in Prompt 02). A dark/light toggle is optional. If added, both themes must be designed properly (not just inverted), the choice is saved in `localStorage`, and there must be no flash of the wrong theme on page load.

## 1.10 Page structure

One-page site with these section IDs (used by the navbar):

| Section | ID | Heading |
|---|---|---|
| Hero | `#home` | H1: Muhammad Jumshaid |
| About | `#about` | H2 |
| Skills | `#skills` | H2 |
| Experience | `#experience` | H2 (hidden if no data) |
| Projects | `#projects` | H2 |
| Contact | `#contact` | H2 |

Every section needs `scroll-margin-top` equal to the navbar height so headings are not hidden under the sticky navbar.

## 1.11 Folder structure

Keep it simple. Suggested:

```
app/
  layout.js
  page.js
  globals.css
  icon.png / favicon.ico
  opengraph-image.png      (or opengraph-image.js)
  sitemap.js
  robots.js
  not-found.js
components/
  layout/     Navbar.jsx, MobileMenu.jsx, Footer.jsx
  sections/   Hero.jsx, About.jsx, Skills.jsx, Experience.jsx, Projects.jsx, Contact.jsx
  ui/         Container.jsx, Section.jsx, SectionHeading.jsx, Button.jsx, Badge.jsx, ProfileImage.jsx
data/
  site.js, skills.js, projects.js, experience.js, navigation.js
public/
  images/profile/
  images/projects/
```

You may adjust this if there is a good reason. Do not add abstractions that are not needed.

## 1.12 Quality rules (apply to every prompt)

**Responsive** — must work at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px. No horizontal scroll, no overlapping, no cut-off images, no tiny tap targets (min 44×44px). Design mobile layouts on purpose; don't just shrink desktop.

**Accessibility** — semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one H1, no skipped heading levels, visible focus styles, keyboard-usable menu, good contrast (WCAG AA), real `<button>` and `<a>` elements, `aria-label` on icon-only links, respect `prefers-reduced-motion`. Add a "Skip to content" link.

**Performance** — Server Components by default. Add `"use client"` only to small components that need state or browser APIs (mobile menu, theme toggle, scroll effects, contact form). Keep dependencies few. Use `next/font` with `display: swap`. Aim for Lighthouse 90+ in every category.

**SEO** — see Prompt 16. Don't keyword-stuff.

**Code** — small readable components, no repeated markup (map over data), no unused state or imports, consistent naming. External links use `target="_blank" rel="noopener noreferrer"`.

**Copy** — write like a real person. Short, clear, specific. No buzzwords like "passionate ninja", "unlock", "cutting-edge", "seamless". Avoid em dashes in visible page copy.

---

# PART 2 — BUILD PROMPTS

---

## Prompt 01 — Project setup

**Goal:** a clean, working Next.js foundation that later prompts build on.

**Do:**
- Create the project with `create-next-app`: JavaScript, App Router, Tailwind CSS, ESLint, no TypeScript, `@/*` import alias.
- Remove the default starter content and styles.
- Create the folder structure from section 1.11.
- Create all data files from sections 1.4 – 1.7 (`site.js`, `skills.js`, `projects.js`, `experience.js`, `navigation.js`) with the exact values given.
- Create `app/layout.js` with `<html lang="en">`, a basic `metadata` export (title + description from Prompt 16's values), and a font loaded with `next/font`.
- Create `app/page.js` with empty `<section>` shells using the IDs from section 1.10.
- Create a simple `Container` component (max-width + side padding).
- Add basic placeholder `Navbar` and `Footer` (plain links are fine; they get designed later).
- Create `.env.example` with `NEXT_PUBLIC_SITE_URL=`.

**Don't:** design sections yet, add fake content, or put the whole site in one file.

**Done when:**
- [ ] `npm run dev` runs with no errors
- [ ] `npm run build` and `npm run lint` pass
- [ ] All data files exist with correct values
- [ ] No TypeScript files were created (except config files a tool requires)

Stop. Wait for the user to send `Run Prompt 02`.

---

## Prompt 02 — Design system

**Context:** Prompt 01 is done (project, folders, data files, empty sections).

**Goal:** a small, consistent visual system that every section will reuse.

**Do:**
- Decide the main theme (dark or light) and briefly explain the choice in your summary.
- Define design tokens as CSS variables / Tailwind theme values: colours (background, surface, border, text, muted text, one accent + hover state), font families, type scale (display, h1, h2, h3, body, small), spacing scale, radius (keep it modest), shadows.
- Pick 1–2 fonts with `next/font` (for example one clean sans for body and one distinctive font for headings). Avoid using the default font for everything.
- Build reusable UI components: `Section`, `SectionHeading` (small label + H2 + optional intro), `Button` (primary, secondary, ghost; works as `<a>` or `<button>`), `Badge`, and a base card style.
- Add global styles: smooth scroll (turned off under `prefers-reduced-motion`), focus-visible ring, text selection colour, base link style.
- Add a subtle background system (soft grid or faint gradient) that does not hurt readability.
- Temporarily show the components on the homepage so you can check them, then remove the demo before finishing.

**Done when:**
- [ ] Tokens are defined in one place, not hard-coded across files
- [ ] Buttons, headings and badges look consistent
- [ ] Text contrast passes WCAG AA
- [ ] Build and lint pass

Stop. Wait for the user to send `Run Prompt 03`.

---

## Prompt 03 — Navbar

**Context:** Prompts 01–02 are done (project, data, design system).

**Goal:** a complete responsive, accessible sticky navbar.

**Do:**
- Read links from `data/navigation.js`. Hide the Experience link if `experience` is empty.
- **Desktop:** "Muhammad Jumshaid" (or "MJ" mark + name) on the left, links in the middle/right, a "Get In Touch" button linking to `#contact`.
- **Mobile:** brand + hamburger button. Menu opens with a smooth transition.
- Mobile menu must: use `aria-expanded` and `aria-controls`, close on link click, close on `Esc`, keep keyboard focus inside while open, return focus to the button when closed, and lock page scroll while open.
- Navbar gets a background/blur + border after the user scrolls a little.
- Highlight the active section link while scrolling (use `IntersectionObserver`).
- Add a "Skip to content" link.
- Keep the client component as small as possible (only the interactive parts).

**Done when:**
- [ ] Works with mouse, touch and keyboard
- [ ] Navbar never covers section headings after clicking a link
- [ ] No layout shift when the navbar changes style
- [ ] Tested at 320px and 1440px

Stop. Wait for the user to send `Run Prompt 04`.

---

## Prompt 04 — Hero section

**Context:** Prompts 01–03 are done.

**Goal:** a strong first screen that says who Muhammad is in about 5 seconds.

**Content (from `data/site.js`):**
- H1: **Muhammad Jumshaid**
- Titles: Software Developer · Frontend Developer
- "2+ years of experience"
- Short intro, for example: *"I build fast, responsive web apps with React and Next.js, with clean code and careful attention to detail."* You may improve the wording, but keep it true.
- Primary button: **View My Work** → `#projects`
- Secondary button: **Get In Touch** → `#contact`
- **Download Resume** button: only render if `resumeUrl` is not empty.
- Small row of icon links: GitHub, LinkedIn, Email.

**Layout:**
- Desktop: text on the left, profile image on the right.
- Mobile: text first, image below (or a smaller image above the name if it looks better). The image must still be clearly recognisable.
- Use a `ProfileImage` component that shows the "MJ" fallback until real photos are added (Prompt 05).
- Background: subtle and tasteful. No heavy glow.

**Done when:**
- [ ] Only one H1 on the whole page
- [ ] Hero looks good with and without a photo
- [ ] Buttons scroll to the right sections
- [ ] Hero fits well at 375px and 1440px without huge empty gaps

Stop. Wait for the user to send `Run Prompt 05`.

---

## Prompt 05 — Personal images

**Context:** Prompts 01–04 are done. The user has added photos to `public/images/profile/` (if not, say so in your summary and keep the fallbacks).

**Goal:** use the real photos professionally.

**Do:**
- Look at the provided images and choose the best one for the Hero and a different one (if available) for About.
- Convert/resize large images if needed (WebP, sensible sizes). Keep the originals out of the final bundle if they are huge.
- Use `next/image` with correct `sizes`, `priority` for the hero only, and `object-position` so faces are not cropped.
- Add useful alt text.
- Update `data/site.js` with the image paths.
- Keep the fallback working if an image is removed.
- Do not repeat the same photo in many places.

**Done when:**
- [ ] Faces are fully visible at every test width
- [ ] No layout shift when images load
- [ ] Removing an image does not break the page

Stop. Wait for the user to send `Run Prompt 06`.

---

## Prompt 06 — About section

**Context:** Prompts 01–05 are done.

**Goal:** a short, honest About section with some visual interest.

**Do:**
- H2 plus 2–3 short paragraphs introducing Muhammad as a Software Developer and Frontend Developer with 2+ years of experience.
- Focus areas: frontend development, responsive design, JavaScript, React, Next.js, modern UI, clean code, performance, user experience.
- Optional: a small "What I focus on" list (3–4 items with icons). These must be focus areas, not made-up achievements or numbers.
- Layout: text + image side by side on desktop, stacked on mobile.
- Use the About photo if available, else the fallback.

**Don't:** add fake stats like "50+ projects" or "100% client satisfaction".

**Done when:**
- [ ] Copy reads naturally and makes no claims beyond the spec
- [ ] Layout works on mobile and desktop

Stop. Wait for the user to send `Run Prompt 07`.

---

## Prompt 07 — Skills section

**Context:** Prompts 01–06 are done.

**Goal:** a clear, attractive skills section from `data/skills.js`.

**Do:**
- Show the three categories: Frontend, UI / Styling, Backend / Database.
- Each skill: icon + name. Use official-looking brand icons only where a reliable icon exists; otherwise use a neat text badge.
- Subtle hover effect (border colour, slight lift). Nothing distracting.
- Responsive grid: 1 column on small phones, more on larger screens.
- Everything rendered by mapping over data.

**Don't:** use percentages, progress bars, star ratings or "expert/intermediate" labels.

**Done when:**
- [ ] Adding a skill to `skills.js` shows it with no other code changes
- [ ] Icons have accessible labels or are hidden from screen readers with visible text next to them

Stop. Wait for the user to send `Run Prompt 08`.

---

## Prompt 08 — Experience section

**Context:** Prompts 01–07 are done. No real experience data has been provided yet.

**Goal:** a finished, reusable Experience component that is ready for real data.

**Do:**
- Build a clean timeline or card list that reads from `data/experience.js`.
- Support: role, company, period, location, description, highlights, technologies. Hide any field that is empty.
- If the array is empty, render nothing (section + nav link hidden, as in section 1.7).
- To test the design, temporarily add one clearly fake test entry, check it at mobile and desktop, then **remove it** before finishing.

**Don't:** invent any job, company or date.

**Done when:**
- [ ] With an empty array: no section, no nav link, no gap in the page
- [ ] With data: the section looks complete and professional
- [ ] The test entry has been removed

Stop. Wait for the user to send `Run Prompt 09`.

---

## Prompt 09 — Projects section

**Context:** Prompts 01–08 are done.

**Goal:** a data-driven Projects section from `data/projects.js`.

**Do:**
- One card per project with: title, category, description, screenshot, technology badges, Live Demo button, GitHub button.
- Hide any field that is empty (no "No description" text).
- Missing screenshot → a clean designed fallback (project title/initials on a styled panel, or a simple browser-window frame).
- Live Demo and GitHub open in a new tab with `rel="noopener noreferrer"` and clear `aria-label`s (e.g. "Open Jumshaid Booking live demo").
- The whole card should not be one giant link if it contains two buttons.

**Don't:** invent descriptions, tech stacks, features or numbers.

**Done when:**
- [ ] Both projects show with working live links
- [ ] Adding a new project object shows a new card automatically
- [ ] Cards look good even with most fields empty

Stop. Wait for the user to send `Run Prompt 10`.

---

## Prompt 10 — Project visuals

**Context:** Prompts 01–09 are done.

**Goal:** make Projects the visual highlight of the site.

**Do:**
- Show the `featured: true` project in a larger layout (big image + details side by side on desktop), other projects in a grid below.
- Hover effects: slight image zoom, card lift, border colour change, button transitions. Keep them smooth and subtle.
- Tech badges styled with the design system.
- Screenshots in a consistent aspect ratio (e.g. 16:10) with a light browser-frame look if it suits the design.
- If the user has added screenshots to `public/images/projects/`, connect them in `projects.js`.

**Don't:** add fake stats, fake reviews or fake "users".

**Done when:**
- [ ] Featured layout stacks nicely on mobile
- [ ] Hover effects are turned off/reduced under `prefers-reduced-motion`
- [ ] Section still looks good with only 2 projects

Stop. Wait for the user to send `Run Prompt 11`.

---

## Prompt 11 — Contact section

**Context:** Prompts 01–10 are done.

**Goal:** a clear contact section that actually works without a backend.

**Do:**
- Heading + one friendly line inviting people to reach out (for jobs, freelance work, or collaboration).
- Contact cards for: Email (`mailto:`), Phone (`tel:+923341222435`), LinkedIn, GitHub, each with an icon.
- Add a "copy email" button with a small "Copied" confirmation.
- Contact form with Name, Email, Message:
  - Proper `<label>`s, required fields, simple validation with clear error messages.
  - **On submit, open the visitor's email app with a pre-filled `mailto:` link** (subject + body built from the form). Tell the user this in the button text or a small note, e.g. "Opens your email app".
  - Structure the submit handler so a real service (Formspree, Resend, Web3Forms) can be plugged in later by changing one function.
- Layout: info on one side, form on the other on desktop; stacked on mobile.

**Don't:** show a fake "Message sent!" success message.

**Done when:**
- [ ] Every link and button works
- [ ] Form is fully usable by keyboard and screen reader
- [ ] Error messages are linked to fields with `aria-describedby`

Stop. Wait for the user to send `Run Prompt 12`.

---

## Prompt 12 — Footer

**Context:** Prompts 01–11 are done.

**Goal:** a small, tidy footer.

**Include:** name, "Software Developer · Frontend Developer", nav links (same data as navbar), GitHub, LinkedIn, Email icons, and `© {current year} Muhammad Jumshaid` (year generated automatically). Optional: a "Back to top" link.

**Done when:**
- [ ] Footer is compact on desktop and stacks cleanly on mobile
- [ ] All links work

Stop. Wait for the user to send `Run Prompt 13`.

---

## Prompt 13 — Animations

**Context:** Prompts 01–12 are done. All sections exist.

**Goal:** add subtle motion that makes the site feel polished.

**Add:**
- Hero entrance (fade + small slide, staggered).
- Section reveal on scroll using one small shared `Reveal` client component with `IntersectionObserver` (animate once, not every time).
- Refine existing hover effects on buttons, skill cards, project cards and images.

**Rules:**
- Animate only `opacity` and `transform` (good for performance).
- Keep durations short (about 150–600ms).
- Content must be visible even if JavaScript fails (don't hide content with CSS that only JS can undo, or add a no-JS fallback).
- Under `prefers-reduced-motion: reduce`, turn animations off.
- No animation library unless truly needed.

**Done when:**
- [ ] No layout shift caused by animations
- [ ] Page feels calm, not busy
- [ ] Reduced-motion mode tested

Stop. Wait for the user to send `Run Prompt 14`.

---

## Prompt 14 — Mobile UX pass

**Context:** Prompts 01–13 are done.

**Goal:** make the mobile experience excellent, not just "shrunk desktop".

**Test at:** 320, 375, 390, 430 and 768px.

**Check and fix:** horizontal overflow, long words/URLs/email breaking layout, font sizes, line length, button sizes, tap targets (min 44px), image cropping, mobile menu, section spacing, card layouts, hero height, form usability (correct input types like `type="email"`).

**Done when:**
- [ ] No horizontal scroll at any tested width
- [ ] Every button and link is easy to tap
- [ ] You list the main fixes in your summary

Stop. Wait for the user to send `Run Prompt 15`.

---

## Prompt 15 — Desktop UX pass

**Context:** Prompts 01–14 are done.

**Test at:** 1024, 1280, 1440 and 1920px.

**Check and fix:** content getting too wide (use max-width containers), text line length (about 60–75 characters for paragraphs), balanced typography, strong hero, aligned project cards, image positions, consistent section spacing, large empty areas on big screens.

**Done when:**
- [ ] Layout looks intentional at 1920px, not stretched
- [ ] Nothing looks cramped at 1024px

Stop. Wait for the user to send `Run Prompt 16`.

---

## Prompt 16 — SEO

**Context:** Prompts 01–15 are done.

**Goal:** complete, clean SEO setup.

**Do:**
- In `app/layout.js` metadata:
  - `metadataBase` from `NEXT_PUBLIC_SITE_URL`
  - Title: **Muhammad Jumshaid | Software Developer & Frontend Developer**
  - Description (under 160 characters): **Muhammad Jumshaid is a Software and Frontend Developer with 2+ years of experience building fast, responsive web apps with React and Next.js.**
  - Canonical URL (`alternates.canonical: "/"`)
  - `authors`, `creator`
  - Open Graph: title, description, url, siteName, type `website`, locale `en_US`, image
  - Twitter/X: `summary_large_image` card
  - Robots: index, follow
- Create an Open Graph image (1200×630) with `app/opengraph-image.js` (name + titles, on-brand) or a static PNG.
- Add a favicon / `app/icon`.
- Add `app/sitemap.js` and `app/robots.js` using the site URL.
- Add **JSON-LD** in the page: a `Person` schema (name, jobTitle, url, email, `sameAs` with LinkedIn and GitHub, `knowsAbout` from skills). Add a `WebSite` schema too.
- Add a simple `app/not-found.js` that matches the design.

**Don't:** keyword-stuff titles, alt text or headings.

**Done when:**
- [ ] `view-source` shows correct title, description, canonical, OG and Twitter tags
- [ ] `/sitemap.xml` and `/robots.txt` work
- [ ] JSON-LD is valid (no errors in schema validator format)
- [ ] You remind the user to set `NEXT_PUBLIC_SITE_URL` after deploying

Stop. Wait for the user to send `Run Prompt 17`.

---

## Prompt 17 — Accessibility audit

**Context:** Prompts 01–16 are done.

**Audit the whole site and fix issues:**
- One H1, H2 per section, H3 inside sections, no skipped levels
- Landmarks: `header`, `nav`, `main`, `footer`
- Skip link works
- Buttons vs links used correctly
- Icon-only links have `aria-label`
- Image alt text is useful (decorative images use `alt=""`)
- Full keyboard navigation, visible focus everywhere, logical tab order
- Colour contrast AA in every theme
- Form labels and error messages
- Mobile menu focus handling
- Reduced motion respected

**Done when:**
- [ ] Lighthouse Accessibility score is 95+ (or you explain what remains)
- [ ] You list what you fixed

Stop. Wait for the user to send `Run Prompt 18`.

---

## Prompt 18 — Performance

**Context:** Prompts 01–17 are done.

**Check and optimise:**
- Image sizes/formats, `sizes` attribute, lazy loading, only the hero uses `priority`
- Which files use `"use client"` — move anything that doesn't need it back to Server Components
- Unused dependencies and imports (remove them)
- JS bundle size (check the `npm run build` output)
- Fonts (only needed weights, `display: swap`)
- Animations (only transform/opacity)
- Unnecessary re-renders or scroll listeners (use passive listeners / IntersectionObserver)

**Done when:**
- [ ] Lighthouse Performance 90+ on mobile (or you explain what remains)
- [ ] LCP element is the hero text or hero image and loads fast
- [ ] CLS is close to 0
- [ ] You list all client components and why each one needs to be client-side

Stop. Wait for the user to send `Run Prompt 19`.

---

## Prompt 19 — Visual polish

**Context:** Prompts 01–18 are done.

**Goal:** make it feel professionally designed.

**Review and refine:** spacing rhythm, typography sizes and weights, buttons, cards, borders, shadows, background details, image presentation, transitions between sections, hover states, empty-state fallbacks, both themes (if a toggle exists).

**Rules:** small careful improvements, no new flashy effects, don't break accessibility or performance from Prompts 17–18.

**Done when:**
- [ ] The site looks consistent from top to bottom
- [ ] You list the main polish changes

Stop. Wait for the user to send `Run Prompt 20`.

---

## Prompt 20 — Final audit

**Context:** Prompts 01–19 are done.

**Check every section** (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer) for:

- Responsive behaviour at all test widths
- All links (internal anchors, external, `mailto:`, `tel:`)
- Images and fallbacks
- Accessibility, SEO, performance
- Animations and reduced motion
- Typography and spacing
- Mobile and desktop navigation
- No console errors or warnings
- No broken imports, no unused files or components
- No horizontal scrolling
- No invented information anywhere (re-check against section 1.3)

**Fix problems, don't just report them.** Don't rewrite sections that already work.

**Final steps:**
1. Run `npm run lint` and `npm run build`; both must pass.
2. Tick Prompt 20 in the tracker.
3. Give the user a short final summary:
   - What was built
   - How to add a new project, skill or job (which file to edit)
   - **What the user still needs to provide:** site URL / domain, experience details, project descriptions + screenshots + tech stacks + GitHub links, resume PDF, personal photos (if not added)
   - How to deploy (Vercel or Netlify) and set `NEXT_PUBLIC_SITE_URL`
4. Tell the user all 20 prompts are complete.

Do not start any extra work unless the user asks.

---

# FINAL REMINDER TO THE AGENT

- The site must look made **for Muhammad Jumshaid**, not like a template.
- Priorities: design quality, usability, performance, accessibility, SEO, easy maintenance, honesty.
- Never invent experience, companies, clients, achievements, stats, testimonials, certifications, technologies or project details.
- **ONE PROMPT AT A TIME. Stop after each prompt and wait for the user.**
