# Module 03 — JavaScript Essentials

**Level:** Basic → Intermediate  
**Prerequisites:** [Module 02](../02-astro-tailwind/README.md)  
**Unlocks:** Dev Phase 2 (interactive demos)  
**Dev sync:** Build Demo A & Demo B here

## What You'll Learn

- Variables, functions, conditionals, loops
- DOM manipulation (changing the page from code)
- Events (click, submit, upload)
- Async patterns (`setTimeout`, promises)
- Client-side scripts in Astro

## Lessons

### Lesson 1 — JS Basics
```javascript
const name = "Gaurav";           // variable
const services = ["Data", "AI"]; // array
const config = { demo: true };   // object

function greet(name) {
  return `Hello, ${name}`;
}

if (config.demo) {
  console.log("Demo mode");
}
```

**Exercise:** Write a function that takes a filename and returns a fake JSON object (prep for Demo A).

---

### Lesson 2 — DOM Manipulation
```javascript
// Select elements
const button = document.getElementById("upload-btn");
const output = document.querySelector("#result-table");

// Change content
output.innerHTML = "<p>Processing...</p>";

// Change styles
button.classList.add("opacity-50");
```

**Exercise:** Click a button → text on the page changes.

---

### Lesson 3 — Events
```javascript
button.addEventListener("click", () => {
  console.log("Clicked!");
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  console.log(file.name);  // use this for Demo A filename matching
});
```

**Exercise:** File input → display the filename on screen (no upload to server).

---

### Lesson 4 — Async & Timers (Demo A pattern)
```javascript
function simulateProcessing(callback) {
  // Show loader
  showLoader();

  setTimeout(() => {
    hideLoader();
    callback({ vendor: "Acme Corp", total: 42.50 });
  }, 1500);  // 1500ms fake delay per blueprint
}
```

**Exercise:** Build a button that shows a spinner for 1.5s, then reveals pre-written JSON.

---

### Lesson 5 — Typewriter Effect (Demo B pattern)
```javascript
function typeWriter(text, element, speed = 30) {
  let i = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text[i++];
    } else {
      clearInterval(interval);
    }
  }, speed);
}
```

**Exercise:** Click a preset query button → answer types out character by character.

---

### Lesson 6 — Scripts in Astro
```astro
<button id="demo-btn">Run Demo</button>
<div id="output"></div>

<script>
  document.getElementById("demo-btn").addEventListener("click", () => {
    document.getElementById("output").textContent = "Result!";
  });
</script>
```

**Exercise:** Add a `<script>` block to an Astro page with working interactivity.

---

## Dev Milestone

When this module is done, you will have shipped:
- [ ] Demo A: Receipt upload → loader → JSON table
- [ ] Demo B: Preset search → typewriter → CTA for custom queries

## Checkpoint ✓

You're ready for Module 04 when you can:
- [ ] Write a function that returns data based on input
- [ ] Attach a click handler to a button
- [ ] Read a file input's name without uploading
- [ ] Use `setTimeout` to delay an action
- [ ] Add a `<script>` block in an Astro page

**Next:** [Module 04 — Python Fundamentals](../04-python-fundamentals/README.md)
