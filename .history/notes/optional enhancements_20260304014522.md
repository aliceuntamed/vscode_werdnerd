# optional enhancements

enforce tag normalization
If you want to guarantee tags are always lowercase:
tags: form.tags.map(t => t.toLowerCase())
