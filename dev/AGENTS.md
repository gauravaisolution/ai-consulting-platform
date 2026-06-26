# Development Guide

> Consulting platform frontend (Astro + Tailwind + Vercel)

## Quick Start

```bash
cd dev
npm install
npm run dev      # localhost:4321
npm run build    # output to dist/
```

---

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | Astro 7.x | Static HTML/CSS at build; SEO + speed |
| Styling | TailwindCSS 4.x | Utility-first; dark mode, animations |
| Hosting | Vercel | Auto-deploy from GitHub |
| Forms | Tally.so | Popup form for lead capture |
| Scheduling | Cal.com | Inline calendar embed |

---

## Project Layout

```
dev/
├── src/
│   ├── pages/           # 5 pages (index, services, case-studies, about, contact)
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # BaseLayout.astro
│   ├── styles/          # global.css (animations, themes)
│   ├── site.config.ts   # Centralized config (reads from env vars)
│   └── env.d.ts         # TypeScript environment definitions
├── public/              # Static assets
├── dist/                # Build output
├── .env                 # Local environment variables (gitignored)
├── .env.example         # Template for env vars
└── PROGRESS.md          # Development tracking
```

---

## Environment Variables

All sensitive/business data is externalized to environment variables.

### Local Development
Copy `.env.example` to `.env` and fill in values:

```bash
PUBLIC_SITE_NAME="FutureStack AI Solutions"
PUBLIC_SITE_TAGLINE="Websites, AI chatbots, and intelligent data systems"
PUBLIC_SITE_DESCRIPTION="We build fast business websites..."
PUBLIC_SITE_EMAIL="gaurav.aisolution@gmail.com"
PUBLIC_TALLY_FORM_ID="1AxW8Q"
PUBLIC_CALCOM_LINK="futurestackaisolutions/strategy-call"
```

### Production (Vercel)
Set in Vercel Dashboard → Project Settings → Environment Variables

---

## Deployment Process

### Prerequisites
- GitHub CLI (`gh`) authenticated
- Vercel CLI (`vercel`) authenticated

### Git Workflow

```
main (production) ←── merge ←── develop (preview)
```

### Deploy to Preview (Testing)

```bash
git checkout develop
# ... make changes ...
git add <files>
git commit -m "feat: description"
git push origin develop
# → Vercel auto-creates preview URL
```

### Deploy to Production

```bash
git checkout main
git merge develop
git push origin main
# → Vercel auto-deploys to production
```

### Manual Deploy (if needed)

```bash
vercel --prod    # Deploy current state to production
```

---

## Vercel Configuration

The project uses `vercel.json` at repository root:

```json
{
  "buildCommand": "cd dev && npm run build",
  "outputDirectory": "dev/dist",
  "installCommand": "cd dev && npm install",
  "framework": "astro",
  "devCommand": "cd dev && npm run dev"
}
```

---

## URLs

| Environment | URL |
|-------------|-----|
| Production | https://ai-solution-six.vercel.app |
| Preview | Auto-generated per commit to develop |
| Dashboard | https://vercel.com/gauravaisolution-3076s-projects/ai-solution |

---

## Build Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 0 | Scaffold (Astro, Tailwind, layout, dark mode) | ✅ Done |
| 1 | Marketing site (5 pages) | ✅ Done |
| 2 | Interactive simulators (4 demos) | ✅ Done |
| 3 | Lead pipeline (Tally + Cal.com) | ✅ Done |
| 4 | Serverless API (`/api` routes) | ⏸️ Deferred |

---

## Code Conventions

- All app code under `dev/`
- Match Astro + Tailwind idioms; no unnecessary abstractions
- Simulators: intercept locally; never send demo files to backend
- Every page drives toward advisory call booking
- Config centralized in `site.config.ts`
- Environment variables for all sensitive data

---

## Adding New Features

### Plan Template

```markdown
## [Feature Name]
**Goal:** ...
**Scope:** ...
**Files affected:** ...
**Dependencies:** ...
**Acceptance criteria:**
- [ ] ...
```

### Workflow

1. Create feature branch from develop
2. Implement changes
3. Test locally (`npm run dev`)
4. Build test (`npm run build`)
5. Commit and push to develop
6. Verify on preview URL
7. Merge to main for production

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server (localhost:4321)
npm run build            # Production build
npm run preview          # Preview production build

# Git
git checkout develop     # Switch to develop branch
git checkout main        # Switch to main branch
git merge develop        # Merge develop into current branch

# Vercel
vercel                   # Deploy preview
vercel --prod            # Deploy production
vercel env ls            # List environment variables
vercel env add VAR_NAME production   # Add env var
vercel env rm VAR_NAME production    # Remove env var
vercel logs              # View deployment logs

# GitHub
gh repo view --web       # Open repo in browser
gh pr create             # Create pull request
```

---

## Integrations Setup

### Tally.so (Popup Form)

1. Create form at https://tally.so
2. Get form ID from share URL (e.g., `1AxW8Q`)
3. Set `PUBLIC_TALLY_FORM_ID` environment variable
4. Form opens via button with `data-tally-open` attribute

### Cal.com (Inline Calendar)

1. Create account at https://cal.com
2. Set up event type (e.g., "Strategy Call")
3. Get link format: `username/event-type`
4. Set `PUBLIC_CALCOM_LINK` environment variable
5. Calendar renders inline on contact page

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Environment Variables Not Working
- Ensure variable names start with `PUBLIC_`
- Restart dev server after changing `.env`
- Redeploy on Vercel after changing env vars

### Preview Deployment Not Updating
- Check Vercel dashboard for build errors
- Verify GitHub webhook is connected
- Try manual deploy: `vercel`

---

## Resources

- [Astro Docs](https://docs.astro.build)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tally.so Help](https://tally.so/help)
- [Cal.com Docs](https://cal.com/docs)
