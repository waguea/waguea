# Build Log

Paste a `.mdx` file here when you want to write. It shows up automatically at `/blogs` (labeled **Build Log** on the site).

Every entry picks a kind in its frontmatter:

- `kind: "blog"` — a longer write-up (the default if you leave it out)
- `kind: "log"` — a quick build note

Template — save as `my-first-log.mdx`:

```mdx
---
title: "Shipped FilePeek v1.0"
publishedAt: "2026-09-30"
summary: "One-line summary shown on the card."
author: "Waguea Carine Fongang"
tags: ["filepeek"]
kind: "log"
---

# Shipped FilePeek v1.0

Short notes go here...
```

Change `kind: "log"` to `kind: "blog"` (or delete the line) to file it as a full blog post instead. The All / Blogs / Logs tabs on the page update by themselves.
