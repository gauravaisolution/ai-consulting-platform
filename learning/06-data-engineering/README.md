# Module 06 — Data Engineering

**Level:** Intermediate → Advanced  
**Prerequisites:** [Module 04](../04-python-fundamentals/README.md)  
**Unlocks:** Demo A depth + credible case studies  
**Dev sync:** Build and narrate the Data Extractor demo

## What You'll Learn

- ETL: Extract, Transform, Load
- Structured vs. unstructured data
- Data pipelines (conceptual → practical)
- JSON schemas and data validation
- How to talk about data work with clients

## Lessons

### Lesson 1 — Data Types in the Real World
| Type | Examples | How we handle it |
|------|----------|-----------------|
| Unstructured | PDFs, emails, images | OCR, parsing, LLM extraction |
| Semi-structured | JSON, CSV, logs | Schema validation, transforms |
| Structured | SQL tables, warehouses | ETL pipelines, dbt |

**Exercise:** Categorize 5 data types you'd encounter as a consultant.

---

### Lesson 2 — ETL Pipeline (Conceptual)
```
Source → Extract → Transform → Load → Destination
  PDF  →  OCR   →  Clean/Map →  DB  →  Dashboard
```

For Demo A (simulated):
```
Upload → Read filename → Match to preset JSON → Display table
```

**Exercise:** Draw the ETL flow for Demo A. Then draw what the *real* version would look like.

---

### Lesson 3 — JSON Schemas
```json
{
  "vendor": "string",
  "date": "ISO-8601",
  "line_items": [
    { "description": "string", "amount": "number" }
  ],
  "total": "number",
  "currency": "string"
}
```

**Exercise:** Define a schema for 3 receipt types. Build the filename→JSON dictionary for Demo A.

---

### Lesson 4 — Data Quality & Validation
- **Completeness** — are all fields present?
- **Accuracy** — do totals add up?
- **Consistency** — same format across records?

```python
def validate_invoice(data: dict) -> list[str]:
    errors = []
    if "total" not in data:
        errors.append("Missing total")
    if sum(item["amount"] for item in data.get("line_items", [])) != data.get("total"):
        errors.append("Line items don't sum to total")
    return errors
```

**Exercise:** Write a validator for your Demo A JSON outputs.

---

### Lesson 5 — Talking to Clients About Data
Key phrases that build credibility:
- "We'll build an extraction pipeline that handles your document formats"
- "Data lands in your warehouse clean and validated"
- "You get structured JSON ready for downstream analytics"

**Exercise:** Write a 3-sentence case study blurb for Demo A as if it were a real client project.

---

## Checkpoint ✓

You're ready for Module 07 when you can:
- [ ] Explain ETL in plain English
- [ ] Design a JSON schema for structured extraction output
- [ ] Build the filename→result dictionary for Demo A
- [ ] Write a short case study about a data extraction project

**Next:** [Module 07 — GenAI Fundamentals](../07-genai-fundamentals/README.md)
