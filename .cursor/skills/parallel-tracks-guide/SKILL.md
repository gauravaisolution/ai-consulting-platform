---
name: parallel-tracks-guide
description: >-
  Guides the user across three parallel tracks — learning, development, and
  profile/portfolio building — for the Data & AI consultancy journey. Use at
  session start, when the user asks what to work on, or when planning weekly
  progress across tracks.
---

# Parallel Tracks Guide

## Three Tracks (Always Separate, Always Parallel)

| Track | Folder | Purpose |
|-------|--------|---------|
| **Learning** | `learning/` | Build skills & credentials |
| **Development** | `dev/` | Build the consulting platform |
| **Profile & Portfolio** | `learning/portfolio/` | Build public credibility |

Never merge tracks in one folder. Cross-link in progress files only.

## Session Start Ritual

1. Read `learning/PROGRESS.md`, `dev/PROGRESS.md`, `learning/portfolio/PROGRESS.md`
2. Ask user: "Which track today — Learning, Dev, Portfolio, or a mix?"
3. If mix: time-box (e.g., 60% dev, 20% learning, 20% portfolio)
4. End session by updating the relevant PROGRESS.md files

## Track 1 — Learning (`learning/`)

**Goal:** Become credible as a Data & AI consultant.

### Core Domains (from blueprint + consultancy needs)
- Astro / modern frontend
- Python & serverless APIs
- Data engineering fundamentals (ETL, pipelines, structured data)
- GenAI concepts (RAG, agents, prompt design — theory first)
- Cloud serverless (Vercel, not heavy AWS yet)
- Git, CI/CD basics

### Learning Path Structure

Full path: `learning/LEARNING_PATH.md` (zero → advanced, 9 modules)

```
learning/
├── LEARNING_PATH.md      ← master curriculum
├── PROGRESS.md
├── 00-foundations/
├── 01-web-basics/
├── 02-astro-tailwind/    ← sync with dev Phase 0–1
├── 03-javascript-essentials/ ← sync with dev Phase 2
├── 04-python-fundamentals/
├── 05-python-serverless/ ← sync with dev Phase 4
├── 06-data-engineering/  ← sync with Demo A
├── 07-genai-fundamentals/ ← sync with Demo B
├── 08-devops-deployment/
└── portfolio/
    └── PROGRESS.md
```

User starts from zero. Fast learners move at their own pace — no week deadlines. Pass each module's checkpoint before advancing.

**Rule:** Learning exercises may inform dev, but code for the platform goes in `dev/`.

## Track 2 — Development (`dev/`)

**Goal:** Ship the zero-cost consulting platform per blueprint.

Follow `consulting-platform-dev` skill. Always plan → confirm → build → track.

## Track 3 — Profile & Portfolio (`learning/portfolio/`)

**Goal:** Prove expertise publicly so prospects trust you before the call.

### Portfolio Artifacts (build over time)
- [ ] LinkedIn headline + about (Data & AI consultancy positioning)
- [ ] 2–3 case study write-ups (can mirror platform case studies)
- [ ] GitHub profile README pointing to live demo
- [ ] Short technical posts (LinkedIn) tied to what you're learning/building
- [ ] Live deployed platform URL as primary portfolio piece

**Synergy:** Dev work feeds portfolio (live site). Learning feeds content (posts). Portfolio drives leads (platform converts them).

## Session Planning Template (No Time Limits)

```markdown
## Session [date]

### Focus today
- [ ] Learning: Module __, Lesson __
- [ ] Dev: Phase __ task
- [ ] Portfolio: artifact __

### Done when
...
```

## Progress Tracking

Update after every session. Keep entries short:

```markdown
## [YYYY-MM-DD]
- **Track:** Learning | Dev | Portfolio
- **Done:** ...
- **Next:** ...
```

## Guiding Principles

1. **Parallel, not sequential** — don't wait to "finish learning" before building
2. **Learn what you're building** — prioritize Astro when scaffolding, data concepts when building Demo A
3. **Portfolio is proof** — every shipped dev milestone becomes a portfolio update
4. **Confirm before big moves** — plans across all tracks need user approval
