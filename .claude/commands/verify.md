---
description: Run the full gate — typecheck, lint, static build
allowed-tools: Bash(pnpm verify:*), Bash(pnpm typecheck:*), Bash(pnpm lint:*), Bash(pnpm build:*)
---

Run `pnpm verify` (typecheck + lint + build).

If it fails, fix the cause rather than working around it, then re-run until
clean. Report the actual output — never claim it passed without the run.
