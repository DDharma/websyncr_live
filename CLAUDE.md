# Websyncr — working rules

Single-page static marketing site. Next.js 16 App Router, TypeScript strict,
Tailwind 4, pnpm, `output: 'export'`.

`README.md` explains **why** each rule exists and is the reference when a rule
needs to change. This file is **what to do**. When they disagree, the code wins —
see "Known drift" at the bottom.

## The five rules that matter

1. **Never hard-code a visual value.** Every colour, size, font, radius, shadow
   and easing is a token in the `@theme` block of `src/app/globals.css`. There
   is currently not one hex literal in `src/components/` — keep it that way.
2. **Copy lives in `src/content/content.ts`, config in `src/lib/site.ts`.**
   Components import and render. Changing a price, headline or stat means
   editing content, never a component.
3. **No JavaScript unless the feature genuinely cannot work without it.** Only
   `Contact.tsx` and `Select.tsx` are client components. Everything else is a
   server component and must stay one.
4. **One comment block per file, two prose lines max.** Enforced by a Stop hook
   that will block the turn. Write the code first, then the header comment.
5. **No invented facts.** No testimonial, client name, metric or capability
   that isn't already verified. See "Content is load-bearing" below.

## Commands

```bash
pnpm dev          # :3000
pnpm verify       # typecheck + lint + build — run before calling work done
pnpm build        # static export to ./out
```

`pnpm`, never npm or yarn. Lockfile is `pnpm-lock.yaml`.

## Architecture

```
src/
├── app/          layout.tsx (metadata/fonts) · page.tsx (section order)
│                 globals.css (@theme tokens + base + utilities)
│                 sitemap.ts · robots.ts
├── components/
│   ├── layout/   Nav, Footer
│   ├── sections/ one file per page band, composed in page.tsx
│   ├── ui/       Section, Sheet, CtaButton, Field, Select, Logo, Wordmark
│   └── StructuredData.tsx   JSON-LD graph
├── content/content.ts   all copy + figures, typed, `readonly`
└── lib/site.ts          URLs, contact, nav, CTA
```

Import via the `@/` alias. Named exports only — no default exports outside
`src/app/`.

## Writing a section

Sections are server components that pull copy from `content.ts` and compose
`ui/` primitives. The shape to follow:

```tsx
export function Thing() {
  return (
    <Section id="thing" tone="paper">              {/* or tone="void" */}
      <SectionHeading id="thing-heading">…</SectionHeading>
      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        {things.map((t) => (
          <Sheet as="li" key={t.num} interactive className="flex flex-col gap-4 p-8">
            …
          </Sheet>
        ))}
      </ul>
    </Section>
  );
}
```

- `<Section>` supplies `px-6`, the band background, the `.sheet` measure, and
  wires `aria-labelledby` to `${id}-heading` — so a `SectionHeading` with that
  exact id is required unless you pass `ariaLabel`.
- `<Sheet>` is the card surface (`rounded-sheet border border-rule bg-surface`).
  `interactive` adds hover lift. Pass `as="li" | "article"` for correct
  semantics; never nest a `<Sheet>` in another `<Sheet>`.
- `<CtaButton>` renders `<a>` with `href`, `<button>` with `type` — the props
  are a union, so you cannot pass both. `variant="amber"` is for dark bands
  only.
- Register the new section in `src/app/page.tsx` and, if it needs a nav entry,
  in `nav` in `src/lib/site.ts`.

## Tokens

Colour `paper surface void ink ink-soft muted rule blueprint blueprint-light
amber inverse brand` · Font `display sans mono` · Text `h1 h2 h2-sm h2-lg h3 h4
h5 h6 faq-q stat lede body prose card answer note mini m2xs mxs msm mbase mmd
mlg mxl logo price` · Tracking `tight logo meta cta cta-wide nav sheet` ·
Radius `tag sheet` · Shadow `sheet` · Container `sheet column` · Ease `sheet`

Utilities: `sheet` `column` `blueprint-grid` `transition-tint` `focus-inverse`
`reveal`. Component classes: `numeral-mark` `flow` `flow-*`.

Need a value that has no token? Add it to `@theme` with a comment saying where
it came from — do not inline it at the call site.

## Non-negotiable constraints

**Static export.** No API routes, no server actions, no `generateStaticParams`
on a dynamic route, no runtime env vars, no `next/image` optimisation. Any
internal `href` must resolve to a real emitted path — see Known drift.

**Contrast.** Text on dark surfaces has an alpha floor of `/50`. Amber is
never text on a light surface (2.66:1) — use an amber fill with `text-void`.
Form borders use `muted`, not `rule`.

**Dark mode is token re-pointing only.** A `prefers-color-scheme: dark` block
redefines what role tokens resolve to. Never add a `dark:` variant to a
component, and never rename a token. Before using a token on a new surface,
check it flips sensibly — `paper` is near-white in light and near-black in dark,
so `hover:bg-paper` on a dark band is a bug (this exact one has been fixed once).

**Motion.** Every animation sits behind
`@media (prefers-reduced-motion: no-preference)`. Use `motion-safe:` for
Tailwind transitions. Content is never hidden by default — if the animation
doesn't run, the element renders in place.

**Focus is never removed.** Base `:focus-visible` covers light surfaces;
`focus-inverse` is for controls on dark bands. There is no `focus-on-amber` —
it was deleted because it painted void-on-void.

**Accessibility.** Decorative SVG and watermarks get `aria-hidden="true"`.
Heading levels never skip. One `<h1>`, in the hero.

**Stacking.** `<Sheet>` is static by default, so a positioned sibling paints
*above* it. Add `relative` to the card, not `z-index: -1` to the sibling — a
negative z-index slides behind the section background and disappears.

## Content is load-bearing

Figures are claims. When editing `content.ts`:

- Do not round, extrapolate or invent a stat.
- The `50+ enterprise clients`, `90% time-to-hire` and `$6.8M+ pipeline`
  figures all belong to one AI hiring platform that was built for an employer.
  The qualifier lives in the label string — never trim it for visual balance.
- Confidential engagements are `Confidential Client`. Never a placeholder brand.
- `testimonials` is intentionally empty. Add nothing without a real attributed
  quote.
- Write in first person singular. The differentiator is that this is one
  person — no "we built", no third-person "he".
- No discount anchoring: no struck-through prices, no "% OFF".

## Known drift — verify before trusting

- **`content.ts` case-study `href`s point at `/case-studies/*`, which do not
  exist in `out/` and will 404.** Placeholders awaiting real links.
- `links.projectForm` in `site.ts` is still a placeholder URL.
- `site.ts` says Gurugram, India (`countryCode: 'IN'`); a design note elsewhere
  said London. Unresolved — ask before changing either.
- README's accessibility section says the hero diagram is inline SVG. It is now
  an HTML timeline (`HeroDiagram.tsx`). README's content-rules section also
  still quotes the retired "he built" label wording.
