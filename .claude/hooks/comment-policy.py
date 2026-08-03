#!/usr/bin/env python3
"""
Stop hook: holds the turn open until changed source files carry exactly one
comment block of two prose lines or fewer, so comments land after the code.
"""

import json
import re
import subprocess
import sys

SOURCE_EXT = (".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs")
SKIP_DIRS = ("node_modules/", ".next/", "out/", "dist/", "build/")
MAX_PROSE_LINES = 2

# Leading comment punctuation, so a group is measured on its words alone.
STRIP_EDGES = re.compile(r"^\{?/\*+|^\*+/?|^//+|\*+/\}?$|\*+/$")


def changed_files(root):
    seen, files = set(), []
    for cmd in (
        ["git", "diff", "--name-only", "HEAD"],
        ["git", "ls-files", "--others", "--exclude-standard"],
    ):
        try:
            r = subprocess.run(cmd, cwd=root, capture_output=True, text=True, timeout=10)
        except Exception:
            continue
        if r.returncode != 0:
            continue
        for line in r.stdout.splitlines():
            p = line.strip()
            if not p or p in seen:
                continue
            if not p.endswith(SOURCE_EXT) or any(d in p for d in SKIP_DIRS):
                continue
            seen.add(p)
            files.append(p)
    return files


def comment_groups(text):
    """Split a file into runs of adjacent comment lines; blank lines break a run."""
    groups, cur, in_block = [], [], False
    for raw in text.splitlines():
        s = raw.strip()
        is_comment = False
        if in_block:
            is_comment = True
            if "*/" in s:
                in_block = False
        elif s.startswith("//"):
            is_comment = True
        elif s.startswith("/*") or s.startswith("{/*"):
            is_comment = True
            in_block = "*/" not in s
        if is_comment:
            cur.append(s)
        elif cur:
            groups.append(cur)
            cur = []
    if cur:
        groups.append(cur)
    return groups


def prose_lines(group):
    n = 0
    for line in group:
        t = STRIP_EDGES.sub("", line).strip().strip("*/{} ").strip()
        if t:
            n += 1
    return n


def main():
    try:
        payload = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    # Second pass through the same hook would loop forever; let the turn end.
    if payload.get("stop_hook_active"):
        sys.exit(0)

    root = payload.get("cwd") or "."
    offenders = []
    for path in changed_files(root):
        try:
            with open(f"{root}/{path}", encoding="utf-8") as fh:
                groups = comment_groups(fh.read())
        except Exception:
            continue
        over = [g for g in groups if prose_lines(g) > MAX_PROSE_LINES]
        if len(groups) > 1:
            offenders.append(f"{path} - {len(groups)} comment blocks, expected at most 1")
        elif over:
            offenders.append(f"{path} - header runs {prose_lines(over[0])} lines, expected at most 2")

    if not offenders:
        sys.exit(0)

    print(
        json.dumps(
            {
                "decision": "block",
                "reason": (
                    "The code is done, so run the comment pass now. Policy: each source "
                    "file carries ONE comment block of at most two prose lines saying what "
                    "the file does and the single non-obvious constraint; delete every "
                    "other inline and JSX comment. Do not restate what the code says.\n\n"
                    "Files still outside policy:\n  " + "\n  ".join(offenders)
                ),
            }
        )
    )
    sys.exit(0)


if __name__ == "__main__":
    main()
