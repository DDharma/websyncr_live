# Websyncr — websyncr.in

Marketing and lead-generation site for Websyncr, a solo AI/full-stack engineering
studio. The site is also a portfolio piece: it is held to the same standards it
sells, so the constraints below are requirements rather than preferences.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS 4 (CSS-first `@theme` tokens) |
| Package manager | pnpm 10 (pinned via `packageManager`) |
| Output | Fully static (`output: 'export'`) — no server, no database, no API routes |
| Fonts | Space Grotesk, IBM Plex Sans, IBM Plex Mono, self-hosted via `next/font` |

## Commands

```bash
pnpm install        # or `corepack enable && pnpm install` on a fresh machine
pnpm dev            # dev server on :3000
pnpm build          # static export to ./out
pnpm typecheck      # tsc --noEmit
pnpm lint           # eslint
pnpm verify         # typecheck + lint + build
```

`pnpm-lock.yaml` is committed and is the source of truth for dependency
versions; there is no `package-lock.json`. pnpm's blocked postinstall scripts
(`sharp`, `unrs-resolver`) are declared as intentionally ignored in
`package.json` — neither is needed, since a static export never runs Image
Optimization.

Deploy `./out` to any static host. No environment variables and no runtime
configuration are required.

## Architecture

```
src/
├── app/
│   ├── layout.tsx        metadata, viewport, font loading
│   ├── page.tsx          section composition
│   ├── globals.css       design tokens (@theme) + base + utilities
│   ├── sitemap.ts        static sitemap
│   └── robots.ts         static robots.txt
├── components/
│   ├── layout/           Nav, Footer
│   ├── sections/         Hero, ProofBar, EngagementModel, Offers, Capabilities,
│   │                     Work, Process, About, Faq, Contact
│   ├── ui/               Logo, Wordmark, CtaButton, Section, Sheet primitives
│   └── StructuredData.tsx  JSON-LD graph
├── content/content.ts    all page copy and figures, in one typed module
└── lib/site.ts           URLs, contact details, nav, CTA
```

Copy and configuration are deliberately separated from presentation: changing a
price or a headline means editing `src/content/content.ts`, never a component.

## Design system

Every visual value comes from `Websyncr design system.zip` (`Websyncr
Landing.dc.html`) and is declared once in the `@theme` block of
[`src/app/globals.css`](src/app/globals.css). Components consume tokens
(`text-h2`, `bg-void`, `rounded-sheet`) and never hard-code a hex value, font
stack, or type size.

Three values deviate from the source file, each to satisfy WCAG AA, and each
reusing an existing token rather than introducing a new colour:

1. **Amber on light surfaces.** `#C98A2C` text on paper is 2.66:1. The offer
   card tag is therefore an amber *fill* with void text (6.23:1), and the
   wordmark's terminating mark is a decorative SVG square rather than a text
   glyph.
2. **Inverse text alpha floor.** The source used `inverse/32`–`inverse/45`
   (2.73–4.20:1) for several small labels. The floor is now `inverse/50`
   (4.93:1); the footer credit line sits at `inverse/60` (6.55:1).
3. **Form input borders.** `rule` (`#D8DCE1`) is 1.25:1 against white, so
   inputs use `muted` (6.00:1) to satisfy WCAG 1.4.11 non-text contrast.

### The logo is the one colour exception

The brand mark keeps its established cyan (`--color-brand`, `#00C2FF`), which
is not part of the DS palette. It is declared once in `@theme` and used only by
[`src/components/ui/Logo.tsx`](src/components/ui/Logo.tsx) — never on text, UI,
or borders. Contrast minimums do not apply to it: 1.4.3 governs text and 1.4.11
governs UI components and meaningful graphics, and the mark is decorative next
to a wordmark that carries the name at 14.97:1.

The mark appears in the nav, the footer, as an 8%-opacity watermark behind the
hero diagram, and in `public/icon.svg`, the favicon set, and `public/og.png`.
The icon and OG PNGs are generated from the same paths — if the logo changes,
regenerate them rather than hand-editing.

The icon set is deliberately two shapes, both rendered from `public/icon.svg`:

| Asset | Background | Why |
|---|---|---|
| `icon.svg`, `favicon.ico`, `icon-192.png` | transparent | Tab icons sit on the browser's own chrome, so the mark adapts to light and dark themes instead of stamping a dark tile onto a light tab bar. The viewBox is cropped to the mark's stroke-inclusive bounds plus ~3%, because with no plate any padding is just a smaller mark at 16px. |
| `apple-touch-icon.png` | opaque `#12151A`, 10.5% inset | iOS composites a transparent home-screen icon onto black, and Safari's bookmark tiles can land it on white. An opaque plate is the only rendering that is the same everywhere. |
| `icon-512.png` | opaque `#12151A`, 17% inset | Declared `purpose: "maskable"`, so the platform crops it to an arbitrary shape and only the inner 80%-diameter circle is guaranteed. |

**Do not reduce the 512's 17% inset.** It is measured, not chosen: at the
10.5% inset used by the other tiles, 3.3% of the mark's ink falls outside the
maskable safe circle and Android clips the tips of the W. 17% puts the
furthest inked pixel at 38.7% of the tile width against a 40% safe radius.

The mark keeps its `fill-opacity: 0.8` interior in the transparent icons. That
was checked at 16/20/32px against Chrome light (`#DEE1E6`), Safari white,
Chrome dark (`#35363A`), and void: the layered fill-under-stroke look survives
and does not wash out, so the favicon renders the same mark as the site.

## Dark scheme

The page follows the operating system via `prefers-color-scheme`. There is no
toggle: no JavaScript, no `localStorage`, and therefore no flash of the wrong
theme on first paint, because there is no client-side theme state to hydrate.

**No token was renamed and no component class was changed.** The `@theme` block
keeps its DS values and is still the source of truth for light. A single
`@media (prefers-color-scheme: dark)` block redefines what a handful of *role*
tokens resolve to, so every existing utility (`bg-paper`, `text-ink`,
`border-rule`) follows automatically.

Light mode is byte-identical to before the change — verified by pixel diff at
1440/768/375, 0 differing pixels out of 24 million.

The page alternates light body sections with dark bands (hero, engagement
model, process, footer). Dark mode preserves that rhythm rather than flattening
it into one expanse:

| Surface | Light | Dark | Used by |
|---|---|---|---|
| `void` | `#12151A` | `#12151A` *(unchanged)* | the dark bands |
| `paper` | `#F2F4F6` | `#191D24` | page body |
| `surface` | `#FFFFFF` | `#222731` | cards |

Only four values are new (`paper`, `surface`, `ink-soft`, `muted`, `rule` in
dark); `ink` re-points to `inverse` and `blueprint` to `blueprint-light`, both
existing DS tokens. Measured dark contrast on void / paper / surface:

| Token | Ratio | Role |
|---|---|---|
| `ink` `#F2F4F6` | 16.59 / 15.33 / 13.59 | body + headings |
| `ink-soft` `#D5DAE1` | 13.02 / 12.03 / 10.66 | long-form prose |
| `muted` `#939DAA` | 6.66 / 6.15 / 5.45 | secondary text |
| `blueprint` `#6E93B5` | 5.67 / 5.24 / 4.64 | accent, focus, prices |
| `amber` `#C98A2C` | 6.23 / 5.76 / 5.10 | band accents |

Two fixes fell out of the work, both of which also affected light mode:

1. The `focus-on-amber` utility was deleted. It painted a `void` outline at a
   3px offset, which lands on the surface *behind* the control — so on the
   hero's `bg-void` it was void-on-void. Amber CTAs now use `focus-inverse`;
   everything else uses the base `:focus-visible`, whose `blueprint` re-points
   to `blueprint-light` in dark.
2. The amber CTA's hover was `hover:bg-paper`. `paper` and `inverse` are the
   same `#F2F4F6` in light, but `paper` re-points to near-black in dark, which
   would have left `void` text on a near-black fill. It is now `hover:bg-inverse`.

`color-scheme: light dark` is declared both as a `<meta>` and as a CSS property
on `html`, so UA-painted chrome the author cannot style — scrollbars, the
native `<select>` popup, autofill — follows the active scheme.

## Accessibility and performance notes

- **No JavaScript is required to use the page.** The FAQ is native
  `<details>`/`<summary>`, the nav has no disclosure state, and the process
  reveal is a CSS scroll-driven animation that leaves content visible where
  unsupported. The single client component is the optional brief form.
- Every animation is gated behind `prefers-reduced-motion: no-preference`, with
  a global reduce-motion override as a backstop.
- Focus is never removed — `:focus-visible` has a light-surface default plus
  `focus-inverse` and `focus-on-amber` variants for dark and amber surfaces.
- `scroll-padding-top: 5.5rem` keeps anchor targets clear of the sticky nav.
- The hero diagram is inline SVG with `<title>`/`<desc>`, so it costs no request
  and causes no layout shift.

## Before launch

Three placeholders in [`src/lib/site.ts`](src/lib/site.ts) need real values:

1. `links.calendly` — the live Calendly event URL
2. `links.projectForm` — the live Google Form URL
`site.email` is set to `websyncr.info@gmail.com` and drives the footer link, the
`Direct:` line, and the brief form's composed message.

## Content rules

Figures on this site are load-bearing claims. When editing
`src/content/content.ts`:

- The five verified stats are exact. Do not round, extrapolate, or add new ones.
- The 50+ enterprise clients and $6.8M+ pipeline figures belong to an AI hiring
  platform that was architected and built — they are not a personal client
  count. **Their `label` strings are the only place that qualifier now lives**
  ("via an AI hiring platform he built" / "on that same platform"), so they must
  not be shortened for visual balance. There is no footnote backing them up.
- Confidential engagements are labelled **"Confidential Client"**. Never
  substitute an invented or placeholder brand name.
- There are no testimonials, and none should be added without a real, attributed
  source. The predecessor site at websyncr.in carried eight named quotes
  (Jason Miller, Liam Nguyen, Sophie Harrington and five more) that could not be
  verified — one credited the work to "Ravi", not to the founder — so none were
  carried across. Nor were `100% Client Satisfaction`, `4.9 Average Rating`,
  `24h Avg Delivery`, or `50+ Projects Delivered`; that last one is a materially
  stronger claim than the approved `50+ enterprise clients architected for, via
  a platform he built`.

## SEO and readability

This is a single page, so it gets one shot at one keyword cluster. Everything
below is measured, and the harness that measures it is worth re-running after
any copy change.

| | Current | Target |
|---|---|---|
| `<title>` | 51 chars | under 60, service-first |
| `<meta description>` | 157 chars | under 160 |
| `<h1>` | exactly 1 | exactly 1 |
| Heading level skips | 0 | 0 |
| Flesch Reading Ease | 61.8 | 60-70 (plain English) |
| Flesch-Kincaid grade | 6.6 | under 9 |
| Avg sentence length | 8.0 words | under 15 |
| Sentences over 25 words | 0 | 0 |
| Visible word count | ~1,500 | over 800 |
| Images missing `alt` | 0 | 0 |
| Lighthouse SEO | 100 | 100 |

Rules that are easy to undo by accident:

- **The title leads with the service, not the brand.** `Websyncr` has no search
  volume yet, so putting it first spends the most valuable 50 characters on a
  term nobody types. Revisit only once branded search actually exists.
- **Every `h2` carries a topic.** `What gets built.` and `Five steps. No
  surprises.` were good voice and zero signal. On a one-page site the headings
  are most of the topical surface there is.
- **FAQ questions are phrased the way people type them.** The block is emitted
  as `FAQPage` structured data, and both search engines and LLM retrieval lift
  question/answer pairs verbatim, so each answer must stand on its own without
  the surrounding page.
- **`alternateName` covers the spelling variants** (`Web Syncr`, `Web Syncer`,
  `WebSyncr`). The mark is read aloud as "web syncer"; without this, the
  variants resolve as unrelated entities.
- **One `Service` node per capability**, provider-linked, rather than a flat
  `knowsAbout` array. Typed entities are what get resolved when something asks
  who builds RAG pipelines.

## Trust

At $15k-$35k, generic social proof does nothing — unattributed testimonials and
context-free ratings measurably fail on high-ticket B2B pages. With every client
under NDA, trust has to come from specificity instead:

- **A claim the visitor can check in thirty seconds.** The `95+` Lighthouse stat
  says "including this page". It is the only verifiable claim on the site, so it
  points at itself.
- **A market range instead of a boast.** The MVP card cites the $30,000-$55,000
  agency range rather than "roughly half what an agency charges". A number the
  buyer can test against their own quotes beats a claim about us.
- **A concrete failure policy.** The "What if the build goes wrong?" FAQ commits
  to specific behaviour: code and deploy access from the first milestone, and a
  written handover if the engagement ends early. **This is a real commitment —
  keep it true to how you actually work, or remove it.** A promise that is not
  honoured is worse than no promise.
- **Named, linked, verifiable founder.** LinkedIn, GitHub, and a personal domain
  in `sameAs`, so the person behind the studio resolves to a real identity.

## Pricing

Prices are anchored to 2026 market data for this segment, not to a cost-plus
calculation. Reference points at time of writing:

| Segment | Market |
|---|---|
| Senior LLM / RAG freelance | $175–250/hr |
| Boutique software consultancy (US/UK) | $150–250/hr |
| Agency fixed-price MVP, simple | $30,000–55,000 |
| Production RAG build | $55,000–90,000 |
| Discovery sprint, 1–2 weeks | $3,000–8,000 |
| Fixed-price technical audit | from ~$4,900 |

The published ladder lands roughly 40–50% under a US boutique, which is what a
solo operator with no agency overhead can defend. Two rules:

1. **No discount anchoring.** No struck-through prices, no "% OFF" badges, no
   "Most Popular". A permanent markdown argues the real price is fiction, and
   nobody buying a $35k AI system is shopping for a coupon. The predecessor site
   advertised `$80/hr` struck from `$150/hr` at `47% OFF`.
2. **Discovery is paid.** Quoting a fixed price on a system nobody has examined
   is a guess. The $2,500 sprint is credited in full against the build, so it
   costs a serious client nothing and filters out the rest.

Hourly (`hourlyRate` in `content.ts`) is deliberately a footnote rather than a
fifth card — it exists for work too small to scope, and giving it card parity
would undercut the fixed-price argument the section just made.
