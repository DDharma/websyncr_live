---
description: Scaffold a new page section following the project's conventions
argument-hint: <section-name> [what it should contain]
---

Add a new page section: **$ARGUMENTS**

Load the `websyncr-design-system` skill first, then:

1. Put the copy in `src/content/content.ts` as a typed `readonly` export with
   its own `type`. No copy in the component.
2. Create `src/components/sections/<Name>.tsx` as a **server component**
   (no `'use client'`) that imports that content and composes `<Section>`,
   `<SectionHeading>` and `<Sheet>`.
3. Give `<Section>` an `id`, and the heading `id={`${id}-heading`}` — the
   section wires `aria-labelledby` to exactly that.
4. Use tokens only. No hex, no arbitrary font size, no `dark:` variant.
5. Register it in the section order in `src/app/page.tsx`, and add a `nav`
   entry in `src/lib/site.ts` only if it deserves one.
6. If the section makes a claim search engines should see, check whether
   `StructuredData.tsx` needs a matching node.
7. Finish with one comment block of at most two prose lines at the top of each
   file you touched, then run `pnpm verify`.
