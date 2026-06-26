# AI Consulting Platform

> Development guide for Claude Code

## Project Structure

```
ai-solution/
├── dev/           # Application code (Astro + Tailwind)
├── learning/      # Learning curriculum
├── resource/      # Reference docs
└── private/       # Internal docs (gitignored)
```

## Development

```bash
cd dev
npm install
npm run dev      # localhost:4321
npm run build    # production build
```

## Git Workflow

```
main (production) ←── merge ←── develop (preview)
```

```bash
# Work on develop
git checkout develop
git add . && git commit -m "message"
git push

# Deploy to production
git checkout main
git merge develop
git push
```

## Key Files

| File | Purpose |
|------|---------|
| `dev/src/site.config.ts` | Site configuration |
| `dev/src/pages/` | Route pages |
| `dev/src/components/` | UI components |
| `dev/.env` | Local environment variables |

## Environment Variables

Set in `.env` locally, Vercel dashboard for production:

- `PUBLIC_SITE_NAME`
- `PUBLIC_SITE_TAGLINE`
- `PUBLIC_SITE_DESCRIPTION`
- `PUBLIC_SITE_EMAIL`
- `PUBLIC_TALLY_FORM_ID`
- `PUBLIC_CALCOM_LINK`

## Private Documentation

Detailed docs are in `private/` folder (gitignored):
- `INTERNAL.md` - Quick reference, accounts
- `BUSINESS.md` - Business overview, roadmap

## Decision Principles

1. **$0 launch** — Free tiers until revenue justifies spend
2. **Simulate first** — Real AI/backend only when necessary
3. **Ship incrementally** — Working site beats perfect architecture
4. **Convert** — If it doesn't help book calls, deprioritize
