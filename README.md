# Simeon Mwangi — Portfolio

A fast, editorial portfolio for a full-stack developer & software engineer,
built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Design

- **Theme:** warm "paper" editorial — off-white, ink-black, single cobalt accent.
- **Type:** _Bricolage Grotesque_ (display) · _Hanken Grotesk_ (body) ·
  _JetBrains Mono_ (technical labels), loaded via `<link>`.
- Paper grain, scroll-reveal animations, tech marquee, "open to work" pulse,
  mono section numbering.

## Pages / sections

- `/` — Hero · About · Services · Selected Work · Experience · Skills · Contact
- `/work` — full, filterable project archive (filter by category)

## Live project previews

Project thumbnails are **live screenshots** generated from each URL via
WordPress mShots (`s.wordpress.com/mshots`) — free, no API key. The first time
a screenshot is requested it may show a "loading preview…" state while it's
captured, then it's cached and loads instantly. See `shot()` in
`data/portfolio.js`.

> Want crisper/faster thumbnails? Take real screenshots, drop them in
> `public/shots/`, and point each project's image at the local file (swap the
> `shot(project.url)` call in `components/ProjectCard.js`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

Deploy to **Vercel** (recommended): push to GitHub and import the repo — zero config.

## Editing your content

Everything lives in **`data/portfolio.js`**:

- `profile` — name, roles, tagline, contact, stats, CV path, availability.
- `projects` — add/remove/reorder; set `featured: true` to show on the home page.
  Each project's screenshot is auto-generated from its `url`. Tech `tags` are
  best-effort — adjust to the real stack where needed.
- `services`, `skillGroups`, `experience`, `education`, `techMarquee`.

Your CV is bundled at `public/Simeon_Mwangi_CV.pdf` and wired to every "Résumé"
button.

## Contact (as configured)

- msimeon937@gmail.com · +254 704 662 432 · Nairobi, Kenya
- Current portfolio: https://simeon-portfolio-nine.vercel.app/
