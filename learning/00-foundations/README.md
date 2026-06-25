# Module 00 — Foundations

**Level:** Basic  
**Prerequisites:** None — start here  
**Unlocks:** All other modules

## What You'll Learn

- How to use the terminal (commands you'll use every day)
- What Git is and why every developer uses it
- How the internet and websites work (big picture)
- How this project is organized (`dev/`, `learning/`, `resource/`)

## Lessons

### Lesson 1 — Terminal Basics
**Goal:** Run commands without fear.

Learn these commands (practice each one):
```bash
pwd          # where am I?
ls           # what's in this folder?
cd folder    # go into a folder
cd ..        # go up one level
mkdir name   # create a folder
cat file     # read a file
```

**Exercise:** Open terminal, navigate to `ai-solution/`, list all folders.

---

### Lesson 2 — How the Web Works (10-minute version)
**Goal:** Understand what happens when someone visits your site.

```
User types URL → Browser requests page → Server sends HTML/CSS/JS → Browser renders it
```

Key terms:
- **HTML** — structure (headings, paragraphs, buttons)
- **CSS** — style (colors, spacing, layout)
- **JavaScript** — behavior (clicks, animations, forms)
- **URL** — address of a page (e.g. `yoursite.com/services`)

**Exercise:** Open any website → right-click → "View Page Source" → identify one heading and one link.

---

### Lesson 3 — Git Basics
**Goal:** Save your work and never lose code.

```bash
git status          # what changed?
git add .           # stage all changes
git commit -m "msg" # save a snapshot
git log             # see history
```

Key concepts:
- **Repository (repo)** — your project folder tracked by Git
- **Commit** — a saved snapshot of your code
- **Branch** — a parallel version of your code

**Exercise:** We'll do your first commit together when `dev/` has code.

---

### Lesson 4 — This Project's Structure
**Goal:** Know where everything lives.

```
ai-solution/
├── dev/        → code you ship (the website)
├── learning/   → your study materials (here)
└── resource/   → blueprints & docs
```

**Exercise:** Read `resource/Consulting_Platform_Blueprint.pdf` — write down 3 things the platform needs to do.

---

## Checkpoint ✓

You're ready for Module 01 when you can:
- [ ] Navigate folders in the terminal
- [ ] Explain HTML, CSS, JS in one sentence each
- [ ] Explain what a Git commit is
- [ ] Name the 3 folders in this project and their purpose

**Next:** [Module 01 — Web Basics](../01-web-basics/README.md)
