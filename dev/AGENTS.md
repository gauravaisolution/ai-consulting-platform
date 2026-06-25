# Development Guide

> Consulting platform frontend (Astro + Tailwind + Vercel)

## Quick Start

```bash
cd dev
npm install
npm run dev      # localhost:4321
npm run build    # output to dist/
```

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | Astro v7+ | Static HTML/CSS at build; SEO + speed |
| Styling | TailwindCSS 4.x | Utility-first; dark mode, animations |
| Backend | Vercel Serverless | Python/Node in `/api` (when needed) |
| Scheduling | Cal.com embed | Calendar booking |
| Lead intake | Tally.so embed | Zero-cost form |
| Demos | Frontend-only | No cloud/LLM costs at launch |

## Project Layout

```
dev/
├── src/
│   ├── pages/           # 5 pages (index, services, case-studies, about, contact)
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # BaseLayout.astro
│   ├── styles/          # global.css (animations, themes)
│   └── site.config.ts   # Centralized config (copy, services, testimonials)
├── public/              # Static assets
├── dist/                # Build output
└── PROGRESS.md          # Development tracking
```

## Architecture Principles

- **Serverless-first**: No EC2/GCE; $0 baseline
- **Static-first frontend**: Astro compiles to pure static assets
- **Isolated API layer**: Credentials, DB, external APIs → `/api` only
- **Simulated demos**: Hardcoded frontend simulations, not real backend calls

## Build Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 0 | Scaffold (Astro, Tailwind, layout, dark mode) | Done |
| 1 | Marketing site (5 pages) | Done |
| 2 | Interactive simulators (4 demos) | Done |
| 3 | Lead pipeline (Tally + Cal.com) | Done |
| 4 | Serverless API (`/api` routes) | Deferred |

## Code Conventions

- All app code under `dev/`
- Match Astro + Tailwind idioms; no unnecessary abstractions
- Simulators: intercept locally; never send demo files to backend
- Every page drives toward advisory call booking
- Config centralized in `site.config.ts`
- Commit only when user asks

## Plan Template

For non-trivial changes:

```markdown
## [Feature Name]
**Goal:** ...
**Scope:** ...
**Files affected:** ...
**Dependencies:** ...
**Acceptance criteria:**
- [ ] ...
```

## Astro Documentation

Full docs: https://docs.astro.build

Key guides:
- [Routing & pages](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)

## Deployment

- Vercel config: `../vercel.json` (monorepo pointing to `dev/`)
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Astro
