---
name: websyncr-design-system
description: Full token, primitive and layout reference for the Websyncr site. Load this BEFORE writing or editing anything under src/components/, src/app/globals.css, or any JSX className in this repo — including new sections, cards, buttons, forms, animations, colour or spacing changes, dark-mode work, and any request to restyle, redesign or "make it look better". Use it to pick an existing token instead of inventing a value, and to match the established component shape.
---

# Websyncr design system

Every value here is already declared in the `@theme` block of
`src/app/globals.css`. Consume tokens as Tailwind utilities. Do not inline a
hex, a px font-size, a font stack or a shadow at a call site.

## Colour

| Token | Light | Dark | Use |
|---|---|---|---|
| `paper` | `#F2F4F6` | `#191D24` | page body background |
| `surface` | `#FFFFFF` | `#222731` | cards, sheets |
| `void` | `#12151A` | `#12151A` | dark bands (unchanged across schemes) |
| `ink` | `#1B1F27` | `#F2F4F6` | headings, primary text |
| `ink-soft` | `#31363F` | `#D5DAE1` | long-form prose |
| `muted` | `#5B6470` | `#939DAA` | secondary text, form borders |
| `rule` | `#D8DCE1` | `#2F353F` | hairlines, card borders |
| `blueprint` | `#3E6690` | `#6E93B5` | accent, focus ring, prices |
| `blueprint-light` | `#6E93B5` | — | diagram strokes on dark |
| `amber` | `#C98A2C` | — | CTA fill, dark-band accent |
| `inverse` | `#F2F4F6` | — | text on dark |
| `brand` | `#00C2FF` | — | **logo mark only** |

Rules:

- `bg-void` and `text-inverse` travel together; `bg-paper`/`bg-surface` pair
  with `text-ink`.
- **Amber is never text on a light surface** — 2.66:1. Use `bg-amber text-void`.
- **Alpha floor on dark is `/50`.** `text-inverse/50` = 4.93:1. Anything below
  fails AA. The footer credit sits at `/60`.
- **`brand` cyan is scoped to `Logo.tsx`.** Never text, UI or border.
- Dark mode is token re-pointing, in one `@media (prefers-color-scheme: dark)`
  block. **Never write a `dark:` variant in a component.** Check a token flips
  sensibly before reusing it on a new surface.

## Type

Display (Space Grotesk 600) — `text-h1` `text-h2` `text-h2-sm` `text-h2-lg`
`text-h3` `text-h4` `text-h5` `text-h6` `text-faq-q` `text-stat`

Body (IBM Plex Sans 400) — `text-lede` `text-body` `text-prose` `text-card`
`text-answer` `text-note` `text-mini`

Mono (IBM Plex Mono) — `text-m2xs` `text-mxs` `text-msm` `text-mbase`
`text-mmd` `text-mlg` `text-mxl` `text-logo` `text-price`

Each token carries its own line-height, letter-spacing and weight, so
`text-h2` alone is a complete heading style. Pair with `font-display`,
`font-sans` or `font-mono`. `h1`–`h6` already get `font-display` and weight 600
from base styles.

Mono is the voice of metadata: labels, prices, weeks, nav, CTAs, eyebrows —
usually with `uppercase` and a tracking token.

## Other tokens

- Tracking `tracking-tight logo meta cta cta-wide nav sheet`
- Radius `rounded-tag` (2px, buttons/badges) · `rounded-sheet` (3px, cards)
- Shadow `shadow-sheet`
- Container `--container-sheet` 1160px · `--container-column` 800px
- Ease `ease-sheet` · Animations `animate-rise` `animate-drop` `animate-drop-up`

## Custom utilities

| Utility | Does |
|---|---|
| `sheet` | centred 1160px measure (applied by `<Section>` already) |
| `column` | centred 800px measure (FAQ) |
| `blueprint-grid` | 40px grid, dark surfaces only |
| `transition-tint` | colour transition that excludes `outline-color`, so the focus ring appears instantly — use this, not `transition-colors` |
| `focus-inverse` | focus ring for controls on `bg-void` |
| `reveal` | scroll-driven entrance; stagger with `--reveal-step` integer, not a delay |

Component classes in `globals.css`: `numeral-mark` (giant outlined watermark,
tune via `--numeral-stroke` / `--numeral-fill`), `flow` / `flow-step` /
`flow-dot` / `flow-link` / `flow-num` / `flow-week` (hero pipeline).

## Primitives

**`<Section id tone padding className ariaLabel>`** — `tone="paper"` (default)
or `"void"`. Supplies `px-6`, `py-24`, the band colours and the `.sheet`
wrapper. Wires `aria-labelledby` to `${id}-heading`, so ship a
`<SectionHeading id="${id}-heading">` or pass `ariaLabel` instead.

**`<SectionHeading id size className>`** — renders `<h2>`, `size="sm"` for the
FAQ scale.

**`<Sheet as interactive className>`** — `rounded-sheet border border-rule
bg-surface`. `as="div" | "li" | "article"`. `interactive` adds hover lift and
`focus-within` elevation. Also exports `CircuitGlyph` and `BlockGlyph`.

**`<CtaButton>`** — discriminated union: `href` gives an `<a>` (external by
default), `type` gives a `<button>`. `variant="amber"` (dark bands only, hovers
to `inverse`) or `"ink"`. `size="sm" | "md" | "lg"`.

**`<Field>` / `<Select>`** — form controls. `Select` is the only `ui/` client
component.

## Layout habits

- Card grids: `grid list-none grid-cols-1 gap-6 md:grid-cols-2`. Two columns,
  not three — a 20px mono price is wider than a third of the sheet.
- Cards are uniform width. No full-width card to absorb an odd count; put a
  `numeral-mark` watermark in the empty cell instead, and give the neighbouring
  cards `relative` so they paint above it.
- Prose measures use `max-w-[NNch]`, e.g. `max-w-[60ch]`.
- Spacer `<div className="flex-1" />` keeps card footers aligned when a section
  is optional.
- Big watermarks are `hidden … md:block`/`lg:block` — below the breakpoint the
  grid is one column and there is no gutter to hold them.

## Checks before finishing

- No hex, `rgb()`, `px` font-size or font stack in a component.
- No `dark:` variant.
- Every animation behind `motion-safe:` or a
  `prefers-reduced-motion: no-preference` query.
- Decorative graphics `aria-hidden="true"`; interactive text not colour-only.
- One comment block, two prose lines, at the top of the file.
- `pnpm verify` passes.
