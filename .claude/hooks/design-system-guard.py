#!/usr/bin/env python3
"""
PostToolUse hook: fails an edit that inlines a visual value a design token
already covers, so components keep consuming @theme instead of raw CSS.
"""

import json
import os
import re
import sys

# globals.css declares the tokens, so it is the one file allowed raw values.
TOKEN_SOURCE = "src/app/globals.css"
WATCHED_EXT = (".ts", ".tsx")
WATCHED_ROOTS = ("src/components/", "src/app/", "src/lib/", "src/content/")

CHECKS = (
    (
        re.compile(r"#[0-9a-fA-F]{6}\b"),
        "hex colour",
        "use a colour token (bg-void, text-ink, border-rule, ...)",
    ),
    (
        re.compile(r"(?<![A-Za-z0-9-])(?:rgba?|hsla?)\s*\("),
        "raw colour function",
        "use a colour token, or an alpha utility such as text-inverse/60",
    ),
    (
        re.compile(r"(?<![\w-])(?:text|bg|border|fill|stroke|shadow|ring|outline)-\[#"),
        "arbitrary colour utility",
        "use a colour token",
    ),
    (
        re.compile(r"(?<![\w-])text-\[\s*\d*\.?\d+(?:px|rem|em)(?![\w-])"),
        "arbitrary font size",
        "use a type token (text-body, text-card, text-mxs, ...)",
    ),
    (
        re.compile(r"(?<![\w-])font-\[|font-family\s*:"),
        "inline font stack",
        "use font-display, font-sans or font-mono",
    ),
    (
        re.compile(r"(?<![\w-])dark:"),
        "dark: variant",
        "dark mode is token re-pointing in globals.css, never a component variant",
    ),
    (
        re.compile(r"(?<![\w-])transition-colors(?![\w-])"),
        "transition-colors",
        "use transition-tint, which excludes outline-color so focus rings appear instantly",
    ),
)

# var(--token) is the correct way to reach a token from SVG or an inline style.
TOKEN_REF = re.compile(r"var\(\s*--")
# Escape hatch for a literal the platform genuinely requires.
ALLOW_MARK = re.compile(r"ds-ok")
# themeColor becomes a <meta> tag, which cannot reference a CSS variable.
THEME_COLOR_OPEN = re.compile(r"themeColor\s*:")
THEME_COLOR_CLOSE = re.compile(r"^\s*\]")


def violations(lines):
    hits, in_theme_color = [], False
    for n, line in enumerate(lines, 1):
        if in_theme_color:
            if THEME_COLOR_CLOSE.search(line):
                in_theme_color = False
            continue
        if THEME_COLOR_OPEN.search(line):
            in_theme_color = not line.rstrip().endswith(("],", "]"))
            continue
        if TOKEN_REF.search(line) or ALLOW_MARK.search(line):
            continue
        for pattern, what, fix in CHECKS:
            for m in pattern.finditer(line):
                hits.append(f"  {n}: {what} `{m.group(0)}` - {fix}")
    return hits


def main():
    try:
        payload = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    path = (payload.get("tool_input") or {}).get("file_path") or ""
    if not path:
        sys.exit(0)

    root = payload.get("cwd") or os.getcwd()
    rel = os.path.relpath(path, root).replace(os.sep, "/")

    if rel == TOKEN_SOURCE or not rel.endswith(WATCHED_EXT):
        sys.exit(0)
    if not any(rel.startswith(d) for d in WATCHED_ROOTS):
        sys.exit(0)

    try:
        with open(path, encoding="utf-8") as fh:
            hits = violations(fh.read().splitlines())
    except Exception:
        sys.exit(0)

    if not hits:
        sys.exit(0)

    print(
        f"Design-system violation in {rel}. Every visual value is a token in the "
        "@theme block of src/app/globals.css; components consume tokens and never "
        "inline a raw value. Fix these, or add a new token with a comment saying "
        "where the value came from. Append a `ds-ok` comment only for a literal "
        "the platform genuinely requires.\n" + "\n".join(hits),
        file=sys.stderr,
    )
    sys.exit(2)


if __name__ == "__main__":
    main()
