# ByteSpace

ByteSpace is a course marketplace web app — a landing page, a course detail page with
lessons/reviews tabs, a course catalog with filtering and pagination, creator and auth
pages — built with React, Vite, and Tailwind CSS.

## Tech stack

- React 19 + Vite
- TypeScript
- Tailwind CSS v4
- React Router (`react-router-dom`)

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check (tsc -b) and build for production
npm run preview  # preview the production build locally
npm run lint      # run oxlint
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing page (hero, trusted-by logos, course categories, learning paths, professional growth, creator showcase, creator CTA, testimonials, footer) |
| `/courses` | Course catalog — search, filters, category pills, paginated course grid |
| `/courses/build-digital-asset` | Course detail page (defaults to the About tab) |
| `/courses/build-digital-asset/lessons` | Course detail — Lessons tab |
| `/courses/build-digital-asset/reviews` | Course detail — Reviews tab, with a working star-rating filter |
| `/signup` | Sign-up page |
| `/signin` | Sign-in page |
| `*` (anything else) | 404 page |

## Project structure

```
src/
├── pages/         # One component per route, composed from src/components
├── components/    # Reusable UI pieces
│   ├── decor/     # Decorative background shapes (squiggles, rings, etc.)
│   └── icons/     # Inline SVG icon components, grouped by where they're used
├── data/          # Shared static data (courses, categories) imported by
│                  # multiple components instead of being duplicated
└── assets/        # Images, grouped by what they're used for
    ├── brand/, hero/, category/, courses/, course-detail/,
    │   people/, reviews/, testimonials/
```

Components are organized flat under `src/components` (no per-page subfolders); shared
pieces like `CourseCard`, `CategoryPill`, `Footer`, and the auth-page collage
(`AuthCollage`, `AuthDecor`) are reused across multiple pages rather than duplicated.

## Notes

- `CourseCard` always links to `/courses/build-digital-asset` — there's currently only
  one real course detail page, so every card (across the homepage, the catalog, and the
  professional-growth section) points to it.
- Course and category data live in `src/data/courses.ts` and `src/data/categories.ts`
  so they can be shared between components instead of being redefined per page.
