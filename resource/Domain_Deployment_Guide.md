# Publish Your Website After Purchasing a Domain

> **Project:** FutureStack Solutions AI  
> **Stack:** Astro + Tailwind → GitHub → Vercel → Custom Domain  
> **Cost at launch:** $0 hosting (Vercel free tier) + domain registration fee only

---

## Overview

```
Code (dev/)  →  GitHub  →  Vercel (hosts site)  →  Your domain (DNS)
```

| Service | Role | Cost |
|---------|------|------|
| **GitHub** | Stores your code, triggers deploys on push | Free |
| **Vercel** | Builds and hosts the live website | Free tier |
| **Domain registrar** | You own `yourname.com` | ~$10–15/year |

You do **not** need separate paid hosting. Vercel serves the site; your domain points to Vercel.

---

## Part 1 — One-time setup (if not done yet)

### 1. Push code to GitHub

```bash
cd /Users/gaurav/Documents/ai-solution
git remote add origin https://github.com/YOUR_USERNAME/ai-solution.git
git push -u origin main
```

### 2. Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**
2. Click **Add New** → **Project**
3. Import your `ai-solution` repository
4. Vercel reads `vercel.json` at the repo root automatically:
   - Build command: `cd dev && npm run build`
   - Output: `dev/dist`
5. Click **Deploy**

You get a free URL: `https://ai-solution-xxxx.vercel.app` — your site is live.

### 3. Verify the preview URL

Check these pages work:

- `/` — Homepage  
- `/services` — Services  
- `/case-studies` — Case studies  
- `/about` — About  
- `/contact` — Contact form + calendar  

---

## Part 2 — Purchase a domain name

### Where to buy

Popular registrars (pick one):

- [Namecheap](https://www.namecheap.com)
- [Google Domains / Squarespace Domains](https://domains.google)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
- [GoDaddy](https://www.godaddy.com)

### Naming tips

- Shorter is better: `futurestack.ai`, `futurestacksolutions.com`
- Prefer `.com` or `.ai` for tech/consulting
- Buy **1 year** to start; enable auto-renew so you don’t lose it

### After purchase

You get access to a **DNS dashboard** at your registrar. You’ll need this in Part 3.

---

## Part 3 — Connect your domain to Vercel

### Step 1: Add domain in Vercel

1. Vercel → your project → **Settings** → **Domains**
2. Enter your domain, e.g. `futurestacksolutions.com`
3. Click **Add**
4. Also add `www.futurestacksolutions.com` (recommended)
5. Vercel shows **DNS records** to configure — keep this tab open

### Step 2: Update DNS at your registrar

Vercel will show something like:

| Type | Name | Value |
|------|------|-------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

> **Note:** IP addresses may change. Always use the values Vercel shows in your dashboard.

**At your registrar (Namecheap, etc.):**

1. Open **DNS Management** / **Advanced DNS**
2. Remove conflicting old A or CNAME records for `@` and `www`
3. Add the records Vercel provided
4. Save changes

### Step 3: Wait for DNS propagation

- Often **5–30 minutes**
- Can take up to **24–48 hours** in rare cases
- Check status in Vercel → Domains (green check = connected)

### Step 4: HTTPS (automatic)

Vercel issues a free **SSL certificate** automatically. Your site will be `https://yourdomain.com` — no extra setup.

---

## Part 4 — Code changes after going live

### Required changes (before sharing with clients)

Edit `dev/src/site.config.ts`:

```ts
export const site = {
  name: "FutureStack Solutions AI",
  email: "hello@yourdomain.com",           // ← your real email
  tallyFormUrl: "https://tally.so/embed/...", // ← your Tally form
  calcomUrl: "https://cal.com/...",            // ← your Cal.com link
};
```

### Optional updates

| File | What to update |
|------|----------------|
| `dev/src/components/Footer.astro` | LinkedIn + GitHub profile URLs |
| `dev/src/site.config.ts` | `testimonials`, `clientLogos` — replace placeholders with real data |
| `dev/src/components/FounderSection.astro` | Your photo / initials |

### Changes you do NOT need

- No change to `astro.config.mjs` for a standard domain
- No change to `vercel.json`
- No new hosting server to configure
- No rebuild for a different framework

After editing, commit and push — Vercel redeploys automatically:

```bash
git add .
git commit -m "chore: update production config"
git push
```

---

## Part 5 — Post-launch checklist

- [ ] Domain loads at `https://yourdomain.com`
- [ ] `www` redirects to root (or vice versa) in Vercel
- [ ] All pages work on mobile
- [ ] Dark mode works
- [ ] Contact form (Tally) submits correctly
- [ ] Calendar (Cal.com) booking works
- [ ] Demos work (website, chatbot, extractor, search)
- [ ] Update LinkedIn / portfolio with live URL
- [ ] Test page speed: [pagespeed.web.dev](https://pagespeed.web.dev)

---

## Part 6 — How updates work going forward

```
Edit code locally  →  git push  →  Vercel auto-deploys  →  Live in ~1 min
```

```bash
cd /Users/gaurav/Documents/ai-solution/dev
npm run dev          # preview locally first
npm run build        # verify build passes
cd ..
git add .
git commit -m "describe your change"
git push
```

---

## Troubleshooting

### Domain not connecting

- Double-check DNS records match Vercel exactly
- Wait longer (up to 48h)
- Use [dnschecker.org](https://dnschecker.org) to see if DNS propagated globally

### Build fails on Vercel

- Run `npm run build` locally in `dev/` first
- Check Vercel build logs for the error
- Ensure `vercel.json` exists at repo root

### Site shows old content

- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Check Vercel dashboard — latest deployment should be **Ready**

### Email at your domain (optional, later)

- Domain email (e.g. `hello@yourdomain.com`) is separate from hosting
- Options: Google Workspace, Zoho Mail, Cloudflare Email Routing (free forwarding)

---

## Quick reference

| Task | Where |
|------|-------|
| Edit website content | `dev/src/` |
| Change business name, forms | `dev/src/site.config.ts` |
| View deployments | vercel.com → Project → Deployments |
| Manage domain DNS | Your registrar dashboard |
| Connect domain | vercel.com → Project → Settings → Domains |
| View code history | github.com → your repo |

---

## Architecture reminder (from blueprint)

- **Frontend:** Static Astro site — fast, SEO-friendly, $0 server cost  
- **Forms:** Tally.so embed (free tier)  
- **Booking:** Cal.com embed (free tier)  
- **Backend `/api`:** Add later only when you need real AI/API keys  

---

*Last updated: June 2026*
