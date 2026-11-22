# RAHUL GUPTA — THE SERIES

A cinematic, streaming-inspired portfolio for **Rahul Gupta**: AI/ML Engineer and B.Tech CSE (AI) student.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform aesthetic. It is not affiliated with Netflix or any other streaming service and uses none of their assets.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages, or any static host.

## Updating the content

**All personal content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub, phone | `profile` |
| Projects | `projects` (add/remove objects; updates Originals, modal, screenplay, and counts) |
| Achievements & certifications | `achievements`, `certifications` |
| Skills and evidence references | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** replace `public/Rahul_Gupta_Resume.pdf`.

**Photo:** replace `image.jpg.jpg` in the project root, then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    OpeningSequence        ← studio card → RAHUL → THE SERIES → portrait → ▶ PLAY
    ProfileSelector        ← "Who's watching?"
    Navbar                 ← hide-on-scroll nav, profile switcher, mobile menu
    Hero                   ← billboard: parallax portrait, particles, floating chips
    PlayIntro              ← ▶ Play Intro: zoom into portrait → highlight reel
    ContinueWatching       ← cards with real "watched" progress bars
    About                  ← The Pilot
    Seasons / EpisodeCard  ← My Journey as seasons and episodes
    Originals / ProjectCard← pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           ← full-screen project overlay
    TopPicks               ← Top 10-style row
    Skills                 ← skill genres; each card shows evidence
    Achievements           ← award-poster cards + certification rail
    ResumeViewer/ResumeModal ← designed screenplay resume sheet, PDF viewer, download
    FinalCTA               ← TO BE CONTINUED… + contact links
    CustomCursor, fx.tsx   ← cursor states, magnetic buttons, 3D tilt, particles
  hooks/                   ← Lenis smooth scroll, media queries, watch progress
scripts/build-images.mjs   ← portrait and social image generation pipeline
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.
