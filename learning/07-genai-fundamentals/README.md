# Module 07 — GenAI Fundamentals

**Level:** Intermediate → Advanced  
**Prerequisites:** [Module 04](../04-python-fundamentals/README.md)  
**Unlocks:** Demo B depth + AI consultancy credibility  
**Dev sync:** Build and narrate the Knowledge Search demo

## What You'll Learn

- How LLMs work (conceptual — no math needed)
- Prompt engineering basics
- RAG: Retrieval-Augmented Generation
- Agents and tool use (conceptual)
- When to use real AI vs. simulation

## Lessons

### Lesson 1 — How LLMs Work (Simple Version)
```
Input text (prompt) → Tokenize → Neural network → Predict next tokens → Output text
```
- Trained on massive text data
- Great at: summarization, Q&A, code, formatting
- Weak at: real-time data, math, facts without context

**Exercise:** Explain to yourself why Demo B is simulated (cost, security, sandbox).

---

### Lesson 2 — Prompt Engineering
```python
prompt = """
You are a data analyst. Given this JSON invoice data:
{data}

Extract: vendor, total, top 3 line items.
Return as JSON only.
"""
```

Key techniques:
- **System prompt** — set the AI's role
- **Few-shot** — give examples in the prompt
- **Output format** — specify JSON, markdown, etc.

**Exercise:** Write 3 prompts: one vague, one good, one excellent. Compare expected outputs.

---

### Lesson 3 — RAG (Retrieval-Augmented Generation)
```
User question → Search company docs → Inject relevant chunks into prompt → LLM answers
```

This is what Demo B *simulates*:
- Pre-written answers = pre-retrieved chunks
- Typewriter effect = streaming response feel
- Custom query lock = "connect your real data" CTA

**Exercise:** Write 3 preset Q&A pairs for Demo B (e.g. parental leave, expense policy, data retention).

---

### Lesson 4 — Agents (Conceptual)
An agent = LLM + tools + loop:
```
Goal → Think → Call tool → Observe result → Think → ... → Done
```

Tools: search, database query, API call, code execution.

**Exercise:** Describe an agent that could automate invoice processing end-to-end.

---

### Lesson 5 — Real vs. Simulated (Business Decision)
| Scenario | Approach |
|----------|----------|
| Public website demo | Simulate (free, safe) |
| Client proof-of-concept | Real API via `/api` (controlled) |
| Production system | Full RAG pipeline with their data |

**Exercise:** Write the CTA copy for Demo B's "custom queries locked" state.

---

## Checkpoint ✓

You're ready for Module 08 when you can:
- [ ] Explain LLM, RAG, and agent in one sentence each
- [ ] Write an effective prompt with role + format + context
- [ ] Explain why the public demo is simulated
- [ ] Write 3 preset Q&A pairs for Demo B

**Next:** [Module 08 — DevOps & Deployment](../08-devops-deployment/README.md)
