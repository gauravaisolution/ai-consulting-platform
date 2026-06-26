# FutureStack AI Solutions

> Data & AI Consulting Platform - Zero-cost serverless architecture

## Quick Links

| Resource | URL |
|----------|-----|
| **Production Site** | https://ai-solution-six.vercel.app |
| **GitHub Repo** | https://github.com/gauravaisolution/ai-consulting-platform |
| **Vercel Dashboard** | https://vercel.com/gauravaisolution-3076s-projects/ai-solution |

---

## Project Overview

### What This Is
A professional consulting website for **FutureStack AI Solutions** offering:
- Business Websites
- AI Chatbot Integration
- Data Extraction & Pipelines
- Enterprise Knowledge Search
- GenAI Strategy & Implementation

### Business Model
1. Visitor lands on site
2. Explores services and demos
3. Fills out project intake form (Tally.so)
4. Books a strategy call (Cal.com)
5. Converts to paying client

---

## Project Structure

```
ai-solution/
├── dev/                    # Application code (Astro + Tailwind)
│   ├── src/
│   │   ├── pages/         # 5 pages
│   │   ├── components/    # Reusable components
│   │   ├── layouts/       # BaseLayout
│   │   └── site.config.ts # Central configuration
│   ├── .env               # Local secrets (gitignored)
│   ├── .env.example       # Template
│   ├── PROGRESS.md        # Development tracking
│   └── README.md          # Development guide
├── learning/              # Learning curriculum (9 modules)
├── resource/              # Blueprints, guides
└── CLAUDE.md              # This file
```

---

## Tech Stack

| Layer | Technology | Cost |
|-------|------------|------|
| Frontend | Astro 7.x + TailwindCSS 4.x | Free |
| Hosting | Vercel | Free tier |
| Forms | Tally.so | Free tier |
| Scheduling | Cal.com | Free tier |
| Repository | GitHub | Free |
| **Total** | | **$0/month** |

---

## Three Parallel Tracks

| Track | Folder | Purpose |
|-------|--------|---------|
| **Development** | `dev/` | Build the consulting platform |
| **Learning** | `learning/` | Build skills & credentials |
| **Portfolio** | `learning/portfolio/` | Build public credibility |

---

## Development Workflow

### Git Branching Strategy

```
main (production) ←── merge ←── develop (preview/staging)
```

### Daily Workflow

```bash
# 1. Work on develop branch
git checkout develop

# 2. Make changes, commit, push
git add <files>
git commit -m "description"
git push                    # → Creates preview deployment

# 3. Test on preview URL

# 4. When ready, merge to main
git checkout main
git merge develop
git push                    # → Auto-deploys to production
```

### Vercel Auto-Deploy

| Branch | Environment | URL |
|--------|-------------|-----|
| `main` | Production | ai-solution-six.vercel.app |
| `develop` | Preview | Auto-generated per commit |

---

## Environment Variables

Sensitive data is stored in environment variables, not in code.

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SITE_NAME` | Business name displayed on site |
| `PUBLIC_SITE_TAGLINE` | Homepage tagline |
| `PUBLIC_SITE_DESCRIPTION` | SEO meta description |
| `PUBLIC_SITE_EMAIL` | Contact email |
| `PUBLIC_TALLY_FORM_ID` | Tally.so form identifier |
| `PUBLIC_CALCOM_LINK` | Cal.com booking link |

**Local:** Set in `dev/.env`
**Production:** Set in Vercel Dashboard → Settings → Environment Variables

---

## Integrations

### Tally.so (Lead Capture)
- **Type:** Popup form
- **Dashboard:** https://tally.so
- **Form ID:** `1AxW8Q`

### Cal.com (Booking)
- **Type:** Inline calendar embed
- **Dashboard:** https://app.cal.com
- **Link:** `futurestackaisolutions/strategy-call`

---

## Team Perspectives (for decision-making)

| Expert | Focus | Key Question |
|--------|-------|--------------|
| **Alex** (Tech Lead) | Architecture, code quality | Is this the simplest design? |
| **Priya** (AI/GenAI) | Demo realism, LLM strategy | Can we demo without API costs? |
| **Marcus** (Data) | Data pipelines, schemas | Does output look production-grade? |
| **Jordan** (UX) | Design, animations, conversion | Does this feel fast and premium? |
| **Sam** (DevOps) | Deployment, CI/CD, security | Can we ship this safely? |
| **Riley** (Product) | Lead funnel, conversion | Does this move toward a booked call? |

---

## Decision Principles

1. **$0 launch** — Free tiers only until revenue justifies spend
2. **Simulate first** — Real AI/backend only when necessary
3. **Ship incrementally** — Working site beats perfect architecture
4. **Convert** — If it doesn't help book calls, deprioritize

---

## Key References

| Document | Location |
|----------|----------|
| Development README | `dev/README.md` |
| Progress Tracking | `dev/PROGRESS.md` |
| Learning Path | `learning/LEARNING_PATH.md` |
| Domain Guide | `resource/Domain_Deployment_Guide.md` |
