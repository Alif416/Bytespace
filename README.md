# ByteSpace

A course marketplace front end: landing page, course catalog, course detail, creator profile
and auth pages, built from a Figma design with React, TypeScript and Tailwind CSS.

**Live demo:** <!-- TODO: paste your deployed URL here -->
**Repository:** https://github.com/Alif416/Bytespace

## What I built

| Route | Page |
| --- | --- |
| `/` | Landing page: hero, trusted-by logos, course categories, learning paths, professional growth, creator showcase, creator CTA, testimonials, footer |
| `/courses` | Course catalog with search bar, filter bar, category pills and a paginated course grid |
| `/courses/build-digital-asset` | Course detail (About tab), with a sticky enrolment sidebar |
| `/courses/build-digital-asset/lessons` | Course detail, Lessons tab |
| `/courses/build-digital-asset/reviews` | Course detail, Reviews tab, with a working star-rating filter |
| `/creators/purepearl-studio` | Creator profile with their courses |
| `/signup`, `/signin` | Auth pages |
| `*` | 404 page |

Highlights:

- **URL-driven tabs.** The course detail tabs are real routes, so each tab can be linked,
  refreshed and reached with the back button. Unknown tabs show the 404 page.
- **Working interactions.** Pagination on the catalog and the star-rating filter on the
  reviews tab both work.
- **Shared, reusable pieces.** `CourseCard`, `CategoryPill`, `Pagination`, `Footer`,
  `GlowBlob` and the auth collage are reused across pages instead of duplicated.
- **Typography.** Headings use Poppins and body text uses Satoshi (self-hosted).

## Technologies

- React 19 and React Router 7
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Vite 8
- oxlint for linting
- Fonts: Poppins (Google Fonts) and Satoshi (self-hosted `.woff2` in `src/assets/fonts`)

## Running it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173.

```bash
npm run build    # type-check (tsc -b) and build for production
npm run preview  # serve the production build locally
npm run lint     # run oxlint
```

## How to review this work

A good path through the app:

1. **`/`** — the landing page. Start with the hero, then scroll through each section.
2. **`/courses`** — try the pagination and click any course card.
3. **Course detail** — switch between the About, Lessons and Reviews tabs and watch the URL
   change. On Reviews, click the star filters. The enrolment card sits over the banner on
   desktop and sticks while you scroll.
4. **`/creators/purepearl-studio`**, **`/signin`**, **`/signup`**, and any unknown URL for
   the 404 page.

The layout was built and checked at desktop width (about 1440px), which is where the
design was matched most closely. Tablet layouts were checked briefly; please check phone
widths yourself in the browser's device mode.

## Project structure

```
src/
├── pages/         # One component per route, composed from src/components
├── components/    # Reusable UI pieces
│   ├── decor/     # Decorative shapes and glows (HeroDecor, GlowBlob, ...)
│   └── icons/     # Inline SVG icon components, grouped by where they're used
├── data/          # Shared static data (courses, categories)
└── assets/        # Images and fonts, grouped by what they're used for
```

## Notes and known limitations

- **Front end only.** There is no backend. The sign-in, sign-up, newsletter and search forms
  are visual, so submitting them does nothing. The filter bar buttons and the category pills
  only change which pill is highlighted; they don't filter the course list.
- **One real course.** Only one course detail page exists, so every course card links to
  `/courses/build-digital-asset`. The catalog repeats the same six sample courses to fill
  its pages.
- **No mobile menu.** Below the `md` breakpoint the navbar links are hidden and there is no
  hamburger menu yet.
- **Avatars load from the network.** Some avatars come from `i.pravatar.cc`, so they need an
  internet connection to appear.
- **Deep links on a static host.** This is a single-page app, so the host must rewrite all
  routes to `index.html` (for example a `vercel.json` rewrite or a Netlify `_redirects` file).
  Otherwise, refreshing on `/courses` returns a 404.
- **Not covered.** There are no automated tests, and the design was matched by eye rather
  than pixel-for-pixel.
