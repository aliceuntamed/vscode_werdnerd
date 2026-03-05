# optional enhancements

🧩 4. Optional: enforce tag normalization
If you want to guarantee tags are always lowercase:
tags: form.tags.map(t => t.toLowerCase())

Or ensure no duplicates:
tags: Array.from(new Set(form.tags))

This keeps your WordVaultTagCloud clean.
