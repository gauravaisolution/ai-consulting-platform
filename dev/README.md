# Consulting Platform (Frontend)

Astro + TailwindCSS consulting website — static frontend, deployable to Vercel via GitHub.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Customize before going live

Edit `src/site.config.ts`:

- `name`, `tagline`, `description`, `email`
- `tallyFormUrl` — your Tally.so form embed URL
- `calcomUrl` — your Cal.com booking embed URL

## Deploy via GitHub + Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Set **Root Directory** to `dev`
4. Framework Preset: **Astro** (auto-detected)
5. Deploy

Every push to `main` auto-deploys.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with demos |
| `/services` | Service offerings |
| `/case-studies` | Case studies |
| `/about` | About page |
| `/contact` | Tally form + Cal.com booking |
