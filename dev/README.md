# FutureStack AI Solutions - Consulting Platform

A modern, high-performance consulting website built with Astro and TailwindCSS. Deployed on Vercel with zero server costs.

## Live Site

**Production:** https://ai-solution-six.vercel.app

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Astro 7.x | Static site generation, zero JS by default |
| Styling | TailwindCSS 4.x | Utility-first CSS, dark mode support |
| Hosting | Vercel | Serverless hosting, auto-deploy from GitHub |
| Forms | Tally.so | Lead capture popup form |
| Scheduling | Cal.com | Inline calendar booking |
| Version Control | GitHub | Code repository, CI/CD trigger |

---

## Project Structure

```
dev/
├── src/
│   ├── pages/              # Route pages (.astro files)
│   │   ├── index.astro     # Homepage
│   │   ├── services.astro  # Services listing
│   │   ├── case-studies.astro
│   │   ├── about.astro
│   │   └── contact.astro   # Tally + Cal.com integration
│   ├── components/         # Reusable UI components
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro
│   ├── styles/
│   │   └── global.css      # Custom animations, theme vars
│   ├── site.config.ts      # Centralized configuration
│   └── env.d.ts            # TypeScript env definitions
├── public/                 # Static assets (favicon, images)
├── .env                    # Local environment variables (gitignored)
├── .env.example            # Template for env vars
├── astro.config.mjs        # Astro configuration
├── package.json
├── PROGRESS.md             # Development tracking
└── README.md               # This file
```

---

## Local Development

### Prerequisites
- Node.js ≥ 22.x
- npm

### Setup

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your values
# (or leave defaults for development)

# Start dev server
npm run dev
```

Open http://localhost:4321

### Build

```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## Configuration

All site configuration is centralized in `src/site.config.ts`. Values are loaded from environment variables with fallbacks.

### Environment Variables

Create a `.env` file (copy from `.env.example`):

```bash
# Business Info
PUBLIC_SITE_NAME="FutureStack AI Solutions"
PUBLIC_SITE_TAGLINE="Your tagline here"
PUBLIC_SITE_DESCRIPTION="Your site description"
PUBLIC_SITE_EMAIL="hello@example.com"

# Integrations
PUBLIC_TALLY_FORM_ID="your-tally-form-id"
PUBLIC_CALCOM_LINK="your-username/event-type"
```

### Updating Content

| What to Change | Where |
|----------------|-------|
| Site name, tagline, email | Environment variables or `.env` |
| Services list | `src/site.config.ts` → `services` |
| Testimonials | `src/site.config.ts` → `testimonials` |
| Case studies | `src/site.config.ts` → `caseStudies` |
| Navigation links | `src/site.config.ts` → `navLinks` |

---

## Deployment

### Automatic (Recommended)

The site auto-deploys via GitHub + Vercel:

```bash
# Push to develop → Preview deployment
git checkout develop
git push

# Push to main → Production deployment
git checkout main
git merge develop
git push
```

### Manual Deploy

```bash
vercel --prod
```

### Environment Variables on Vercel

Set these in Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Environment |
|----------|-------------|
| `PUBLIC_SITE_NAME` | Production, Preview |
| `PUBLIC_SITE_TAGLINE` | Production, Preview |
| `PUBLIC_SITE_DESCRIPTION` | Production, Preview |
| `PUBLIC_SITE_EMAIL` | Production, Preview |
| `PUBLIC_TALLY_FORM_ID` | Production, Preview |
| `PUBLIC_CALCOM_LINK` | Production, Preview |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage - hero, services, demos, testimonials, CTA |
| `/services` | Detailed service offerings (5 services) |
| `/case-studies` | Client success stories (4 case studies) |
| `/about` | Company information and team |
| `/contact` | Lead intake form + calendar booking |

---

## Integrations

### Tally.so (Contact Form)

- **Type:** Popup form
- **Trigger:** "Open Project Form" button on contact page
- **Configuration:** Set `PUBLIC_TALLY_FORM_ID` in environment variables
- **Dashboard:** https://tally.so

### Cal.com (Scheduling)

- **Type:** Inline embed (month view)
- **Location:** Contact page, step 2
- **Configuration:** Set `PUBLIC_CALCOM_LINK` in environment variables
- **Dashboard:** https://app.cal.com

---

## Git Workflow

```
main (production)
  ↑
  merge
  ↑
develop (staging/preview)
  ↑
  commits
```

1. Work on `develop` branch
2. Push → Vercel creates preview deployment
3. Test on preview URL
4. Merge to `main` → Vercel deploys to production

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview build locally

# Git
git checkout develop     # Switch to develop
git checkout main        # Switch to main

# Vercel
vercel                   # Deploy preview
vercel --prod            # Deploy production
vercel env ls            # List env vars
vercel logs              # View deployment logs
```

---

## Resources

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tally.so Help](https://tally.so/help)
- [Cal.com Documentation](https://cal.com/docs)
