# Module 01 — Web Basics

**Level:** Basic  
**Prerequisites:** [Module 00](../00-foundations/README.md)  
**Unlocks:** Understanding Astro pages before you write them

## What You'll Learn

- HTML structure (the skeleton of every webpage)
- CSS concepts (even though Tailwind replaces most handwritten CSS)
- Responsive design (mobile + desktop)
- Semantic HTML (accessibility + SEO)

## Lessons

### Lesson 1 — HTML Structure
Every page has this skeleton:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <header>Navigation here</header>
    <main>Content here</main>
    <footer>Footer here</footer>
  </body>
</html>
```

Key tags: `<h1>`–`<h6>`, `<p>`, `<a href="">`, `<img>`, `<button>`, `<section>`, `<div>`

**Exercise:** Create `learning/01-web-basics/notes/my-first-page.html` with a heading, paragraph, and link.

---

### Lesson 2 — CSS Concepts (Conceptual)
You won't write much raw CSS — Tailwind handles it. But understand:
- **Selector** — what to style (`h1`, `.button`, `#hero`)
- **Property** — what to change (`color`, `padding`, `font-size`)
- **Flexbox** — arrange items in a row or column
- **Grid** — arrange items in a grid

**Exercise:** In your HTML file, add a `<style>` block that makes the heading blue and centers the text.

---

### Lesson 3 — Responsive Design
Websites must work on phone and desktop.
- **Mobile-first** — design for small screens first, then scale up
- **Breakpoints** — screen width thresholds (Tailwind: `sm:`, `md:`, `lg:`)

**Exercise:** Resize your browser window on any site — notice how the layout changes.

---

### Lesson 4 — What Astro Does For You
Astro lets you write `.astro` files that compile to clean HTML:
```astro
---
// This is the "frontmatter" — JavaScript logic
const title = "My Consulting Site";
---
<h1>{title}</h1>
<p>Welcome to my Data & AI consultancy.</p>
```

You write components once, reuse everywhere. Astro ships **zero JavaScript** to the browser by default = fast.

**Exercise:** Read Astro docs intro: https://docs.astro.build/en/concepts/why-astro/

---

## Checkpoint ✓

You're ready for Module 02 when you can:
- [ ] Write a basic HTML page with header, main, footer
- [ ] Explain what flexbox does
- [ ] Explain what an Astro component is
- [ ] Explain why static HTML is fast

**Next:** [Module 02 — Astro + Tailwind](../02-astro-tailwind/README.md)
