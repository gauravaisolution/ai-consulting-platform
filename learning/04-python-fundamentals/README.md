# Module 04 — Python Fundamentals

**Level:** Basic → Intermediate  
**Prerequisites:** [Module 03](../03-javascript-essentials/README.md)  
**Unlocks:** Dev Phase 4 prep  
**Dev sync:** Learn while frontend is live; apply when adding `/api`

## What You'll Learn

- Python syntax, variables, functions
- Lists, dictionaries, JSON
- File handling and error handling
- Virtual environments and pip
- Reading/writing API-ready data structures

## Lessons

### Lesson 1 — Setup
```bash
python3 --version    # should be 3.11+
python3 -m venv venv
source venv/bin/activate   # Mac/Linux
pip install requests
```

**Exercise:** Create `learning/04-python-fundamentals/notes/hello.py` that prints your name.

---

### Lesson 2 — Core Syntax
```python
name = "Gaurav"
services = ["data engineering", "gen ai"]

def extract_metadata(filename: str) -> dict:
    return {"file": filename, "status": "processed"}

result = extract_metadata("receipt_acme.pdf")
print(result)
```

**Exercise:** Write a function that maps 3 filenames to 3 different JSON outputs (Demo A backend version).

---

### Lesson 3 — JSON & Data Structures
```python
import json

data = {
    "vendor": "Acme Corp",
    "line_items": [
        {"item": "Cloud Storage", "amount": 120.00},
        {"item": "API Calls", "amount": 45.50},
    ],
    "total": 165.50
}

json_string = json.dumps(data, indent=2)
parsed = json.loads(json_string)
```

**Exercise:** Create a JSON file with a fake invoice. Write a Python script that reads and prints each line item.

---

### Lesson 4 — Error Handling
```python
def safe_parse(filename):
    try:
        return KNOWN_FILES[filename]
    except KeyError:
        return {"error": "Unknown file format"}
```

**Exercise:** Add error handling to your filename→JSON mapper.

---

### Lesson 5 — HTTP Concepts (prep for serverless)
```python
import requests

response = requests.get("https://api.example.com/data")
data = response.json()
status = response.status_code  # 200 = success
```

**Exercise:** Call a free public API (e.g. `https://httpbin.org/get`) and print the response.

---

## Checkpoint ✓

You're ready for Module 05 when you can:
- [ ] Write functions with typed parameters and return values
- [ ] Work with dicts, lists, and JSON
- [ ] Handle errors with try/except
- [ ] Explain what an HTTP request/response is

**Next:** [Module 05 — Python Serverless APIs](../05-python-serverless/README.md)
