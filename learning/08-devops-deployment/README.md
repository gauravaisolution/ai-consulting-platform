# Module 08 — DevOps & Deployment

**Level:** Intermediate → Advanced  
**Prerequisites:** [Module 02](../02-astro-tailwind/README.md), [Module 05](../05-python-serverless/README.md)  
**Unlocks:** Shipping the full platform to production  
**Dev sync:** Deploy after Phase 1; redeploy after each phase

## What You'll Learn

- Git workflow (branch, commit, push, PR)
- Vercel deployment (connect repo → auto-deploy)
- Environment variables in production
- Preview vs. production deployments
- Custom domain setup
- Basic monitoring and rollback

## Lessons

### Lesson 1 — Git Workflow
```bash
git checkout -b feature/homepage    # create branch
# ... make changes ...
git add .
git commit -m "feat: add homepage hero section"
git push -u origin feature/homepage
# → open Pull Request on GitHub → merge to main
```

Branch strategy for this project:
- `main` — production (auto-deploys)
- `feature/*` — one branch per feature

**Exercise:** We'll do this together on the first real feature.

---

### Lesson 2 — Vercel Deployment
1. Push `dev/` to GitHub
2. Connect repo at vercel.com
3. Set root directory to `dev/`
4. Every push to `main` → live site updates

```bash
# Or deploy from CLI
npm i -g vercel
cd dev && vercel
```

**Exercise:** Deploy the Astro scaffold. Share the preview URL.

---

### Lesson 3 — Environment Variables
| Where | File/Setting | Committed? |
|-------|-------------|------------|
| Local | `.env.local` | Never |
| Vercel | Project Settings → Env Vars | No |
| Code | `os.environ.get("KEY")` | Safe |

**Exercise:** Add a dummy env var locally and in Vercel. Read it in an API route.

---

### Lesson 4 — Preview vs. Production
- **Preview** — every PR/branch gets a unique URL (test before merge)
- **Production** — `main` branch → your real domain

**Exercise:** Push a branch, find the Vercel preview URL, verify changes.

---

### Lesson 5 — Custom Domain
1. Buy domain (Namecheap, Google Domains, etc.)
2. Vercel → Project → Domains → add your domain
3. Update DNS records as Vercel instructs

**Exercise:** (When ready) Point a custom domain to your Vercel deployment.

---

### Lesson 6 — Rollback & Monitoring
- Vercel dashboard → Deployments → click previous → "Promote to Production"
- Check: site loads, forms work, demos run, calendar embed loads

**Exercise:** Deploy, verify all pages, document the live URL in portfolio.

---

## Checkpoint ✓ (Advanced — Path Complete)

You've completed the full learning path when you can:
- [ ] Branch, commit, push, and open a PR
- [ ] Deploy to Vercel from GitHub
- [ ] Manage env vars locally and in production
- [ ] Explain preview vs. production deployments
- [ ] Roll back a bad deployment

**You are now ready to operate as a solo Data & AI consultant developer.**
