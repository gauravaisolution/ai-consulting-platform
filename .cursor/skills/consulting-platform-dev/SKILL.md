---
name: consulting-platform-dev
description: >-
  Develop the zero-cost Data & AI consulting platform (Astro + Tailwind + Vercel
  serverless). Use when working in dev/, building features, scaffolding the app,
  or implementing anything from the Consulting Platform Blueprint.
---

# Consulting Platform Development

## Start Here

Before any dev work in `dev/`:

1. Read this skill
2. Read [dev-team/SKILL.md](../dev-team/SKILL.md) for team perspectives
3. Read `resource/Consulting_Platform_Blueprint.pdf` if scope is unclear
4. Draft a plan → **confirm with user** → track in `dev/PROGRESS.md`

Never skip planning and confirmation.

## Project Layout

```
ai-solution/
├── dev/          # All application code lives here
├── learning/     # Learning paths (separate track)
└── resource/     # Blueprints, docs, reference material
```

## Tech Stack (from Blueprint)

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | Astro v4+ | Static HTML/CSS at build time; SEO + speed |
| Styling | TailwindCSS | Utility-first; dark mode, animations |
| Backend | Vercel Serverless | Python 3.11 or Node.js in `/api` |
| Scheduling | Cal.com embed | Calendar booking |
| Lead intake | Tally.so embed | Zero-cost form wrapper |
| Demos | Frontend-only simulators | No cloud/LLM costs at launch |

## Architecture Principles

- **Serverless-first**: No EC2/GCE at launch; $0 baseline
- **Static-first frontend**: Astro compiles to pure static assets
- **Isolated API layer**: Credentials, DB, external APIs → `/api` serverless only
- **Simulated demos**: Hardcoded frontend simulations, not real backend calls

## Build Phases (Suggested Order)

### Phase 0 — Scaffold
- [ ] Init Astro project in `dev/`
- [ ] TailwindCSS configured
- [ ] Base layout, nav, footer, dark mode
- [ ] Vercel project linked

### Phase 1 — Marketing Site
- [ ] Homepage (hero, services, social proof)
- [ ] Services / offerings pages
- [ ] Case studies section
- [ ] About / credibility page

### Phase 2 — Interactive Simulators
- [ ] **Demo A**: Intelligent Data Extractor (receipt upload → 1500ms loader → pre-baked JSON table from filename dictionary)
- [ ] **Demo B**: Enterprise Knowledge Search (typewriter effect on preset queries; CTA lock for custom queries)

### Phase 3 — Lead Pipeline
- [ ] Tally.so intake form embed
- [ ] Cal.com calendar embed (post-form transition)
- [ ] Unified CTA flow: Discovery → Validation → Intent → Conversion

### Phase 4 — Serverless API (when needed)
- [ ] `/api` folder for secure token-backed features
- [ ] Only add when credentials or real processing required

## Development Workflow

```
Plan → Confirm with user → Implement → Update dev/PROGRESS.md → Review with dev-team skill
```

### Plan Template

```markdown
## [Feature Name]
**Goal:** ...
**Scope:** ...
**Files affected:** ...
**Dependencies:** ...
**Acceptance criteria:**
- [ ] ...
**Estimated effort:** S / M / L
```

## Code Conventions

- All app code under `dev/`
- Match Astro + Tailwind idioms; no unnecessary abstractions
- Simulators: intercept uploads locally; never send demo files to backend
- Every page drives toward advisory call booking
- Commit only when user asks

## Reference

- Blueprint: `resource/Consulting_Platform_Blueprint.pdf`
- Progress: `dev/PROGRESS.md`
