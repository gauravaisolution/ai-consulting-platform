# Module 05 — Python Serverless APIs

**Level:** Intermediate  
**Prerequisites:** [Module 04](../04-python-fundamentals/README.md)  
**Unlocks:** Dev Phase 4 (`/api` routes on Vercel)  
**Dev sync:** Add real backend only when demos need secure credentials

## What You'll Learn

- What serverless functions are and why we use them
- Vercel `/api` folder structure
- Request/response handling
- Environment variables and secrets
- When to simulate vs. call a real API

## Lessons

### Lesson 1 — Serverless Concepts
```
Browser → POST /api/extract → Vercel spins up container → Python runs → JSON response → Browser
```
- Runs **on demand** — no server running 24/7
- Scales to **zero** when idle — free tier friendly
- Isolated — credentials never exposed to browser

**Exercise:** Explain in your own words why Demo A is frontend-only but a real OCR feature would need `/api`.

---

### Lesson 2 — Vercel API Route Structure
```
dev/
└── api/
    └── extract.py    → accessible at /api/extract
```

```python
# api/extract.py (Vercel serverless handler)
from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps({"status": "ok"}).encode())
```

**Exercise:** Deploy a hello-world `/api/hello` endpoint to Vercel.

---

### Lesson 3 — Environment Variables
```bash
# .env.local (never commit this)
OPENAI_API_KEY=sk-...
```
```python
import os
api_key = os.environ.get("OPENAI_API_KEY")
```

**Exercise:** Create `.env.local`, add a dummy variable, read it in an API route.

---

### Lesson 4 — Calling External APIs Securely
```python
import os
import requests

def call_llm(prompt: str) -> str:
    response = requests.post(
        "https://api.openai.com/v1/chat/completions",
        headers={"Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}"},
        json={"model": "gpt-4o-mini", "messages": [{"role": "user", "content": prompt}]}
    )
    return response.json()["choices"][0]["message"]["content"]
```

**Rule:** Never call LLM APIs from the browser. Always through `/api`.

**Exercise:** (Optional, costs money) Wire a simple `/api/chat` endpoint.

---

## Checkpoint ✓

You're ready for Module 06 when you can:
- [ ] Explain why serverless fits a $0 launch
- [ ] Create a Vercel API route that returns JSON
- [ ] Use environment variables for secrets
- [ ] Explain simulate-first vs. real API

**Next:** [Module 06 — Data Engineering](../06-data-engineering/README.md)
