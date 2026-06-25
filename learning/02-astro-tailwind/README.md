# Module 02 — Astro + Tailwind

**Level:** Basic → Intermediate  
**Prerequisites:** [Module 01](../01-web-basics/README.md)  
**Unlocks:** Dev Phase 0–1 (scaffold + marketing site)  
**Dev sync:** Start building the website here

## What You'll Learn

- Scaffold an Astro project
- TailwindCSS utility classes
- Layouts, pages, and components
- Dark mode and animations
- Deploy preview to Vercel

## Lessons

### Lesson 1 — Scaffold the Project
We'll do this together in `dev/`:
```bash
cd dev
npm create astro@latest . -- --template minimal
npx astro add tailwind
npm run dev
```

Key files after scaffold:
```
dev/
├── src/
│   ├── pages/       ← each file = a URL route
│   ├── layouts/     ← shared page wrappers
│   └── components/  ← reusable UI pieces
├── public/          ← static assets (images, favicon)
└── astro.config.mjs
```

**Exercise:** Run dev server, visit `localhost:4321`, change the homepage text.

---

### Lesson 2 — Tailwind Essentials
Utility classes go directly on HTML elements:
```html
<h1 class="text-4xl font-bold text-blue-600">Hello</h1>
<div class="flex items-center gap-4 p-6 bg-gray-100 rounded-lg">
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Book a Call
  </button>
</div>
```

Most-used classes:
| Purpose | Classes |
|---------|---------|
| Text size | `text-sm`, `text-lg`, `text-4xl` |
| Spacing | `p-4`, `m-2`, `gap-4`, `space-y-6` |
| Flex layout | `flex`, `items-center`, `justify-between` |
| Colors | `bg-gray-900`, `text-white`, `border-gray-200` |
| Responsive | `md:text-2xl`, `lg:grid-cols-3` |
| Dark mode | `dark:bg-gray-900`, `dark:text-white` |

**Exercise:** Build a hero section with a headline, subtext, and CTA button using only Tailwind.

---

### Lesson 3 — Layouts & Components
**Layout** (`src/layouts/BaseLayout.astro`) — wraps every page:
```astro
---
const { title } = Astro.props;
---
<html lang="en">
  <head><title>{title}</title></head>
  <body>
    <nav>...</nav>
    <slot />  <!-- page content goes here -->
    <footer>...</footer>
  </body>
</html>
```

**Component** (`src/components/Hero.astro`) — reusable block used inside pages.

**Exercise:** Create `BaseLayout.astro` with nav + footer. Create `Hero.astro`. Use both on the homepage.

---

### Lesson 4 — Pages & Routing
File-based routing — filename = URL:
```
src/pages/index.astro      → /
src/pages/services.astro   → /services
src/pages/about.astro      → /about
```

**Exercise:** Create `/services` and `/about` pages using `BaseLayout`.

---

### Lesson 5 — Dark Mode
Tailwind dark mode with class strategy:
```html
<html class="dark">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

Add a toggle button that adds/removes `dark` class on `<html>`.

**Exercise:** Implement dark mode toggle in the nav.

---

## Dev Milestone

When this module is done, you will have shipped:
- [ ] Astro project in `dev/`
- [ ] Base layout with nav + footer + dark mode
- [ ] Homepage with hero section
- [ ] Services and About pages

## Checkpoint ✓

You're ready for Module 03 when you can:
- [ ] Create a new Astro page and see it at a URL
- [ ] Build a component and reuse it on 2+ pages
- [ ] Use Tailwind for layout, spacing, colors, responsive design
- [ ] Explain what `npm run dev` does

**Next:** [Module 03 — JavaScript Essentials](../03-javascript-essentials/README.md)
