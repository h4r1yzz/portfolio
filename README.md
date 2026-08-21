# Harry Chandra — Portfolio

Personal portfolio site built with Next.js.

**Live:** [harryct.vercel.app](https://harryct.vercel.app/)

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- MapLibre (analytic map)
- [Umami](https://umami.is) as self-hosted analytic
- Boneyard (analytic loading skeleton)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home |
| `/about` | Work, education, resume |
| `/projects` | Project write-ups |
| `/photos` | Photo gallery |
| `/stack` | Tools & stack |
| `/visits` | Live analytic map |

## Quick start

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` → `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Umami website ID |
| `NEXT_PUBLIC_UMAMI_SCRIPT_URL` | Tracker script URL |
| `NEXT_PUBLIC_UMAMI_DOMAINS` | Allowed domains for tracking |
| `UMAMI_API_URL` | Umami API base (`…/api`) |
| `UMAMI_USERNAME` / `UMAMI_PASSWORD` | Server login for `/visits` |
| `VISITS_TIMEZONE` | Chart timezone (optional) |
| `VISITS_HOME_LAT` / `VISITS_HOME_LNG` | Home point for “Farthest” (optional) |
| `NEXT_PUBLIC_MAP_STYLE_URL` | MapLibre style (optional) |

Without the Umami vars, the rest of the site still runs; `/visits` just has no live data.

## Content

Site copy, projects, work history, and photos are edited in:

```text
src/content/site.ts
```

Static assets live under `public/` (`image/`, `photos/`, `resume.pdf`).

## Analytic notes

- Analytic is powered by **Umami**, self-hosted (separate Vercel project — not Umami Cloud).
- After changing the `/visits` layout, regenerate skeletons with `pnpm bones` (dev server must be running).
