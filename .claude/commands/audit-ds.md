---
description: Sweep every source file for design-system violations
allowed-tools: Bash, Read, Edit
---

Run the design-system guard across the whole tree, not just changed files:

```bash
for f in $(find src -name '*.ts' -o -name '*.tsx' | sort); do
  echo "{\"cwd\":\"$PWD\",\"tool_input\":{\"file_path\":\"$PWD/$f\"}}" \
    | python3 .claude/hooks/design-system-guard.py
done
```

The tree is currently clean, so any output is a regression. For each hit,
replace the inlined value with the matching `@theme` token — read the
`websyncr-design-system` skill for the token table. If a literal is genuinely
required by the platform, mark that line `ds-ok` and say why in the report.
