---
name: websyncr-content
description: Rules for editing any copy, price, stat, FAQ, case study or testimonial on the Websyncr site — everything in src/content/content.ts and src/lib/site.ts. Load this BEFORE changing a headline, offer, price, payment term, stat tile, capability, FAQ answer, or anything shown as text on the page, and before adding a case study or testimonial. Covers the verified-facts rule, the pricing ladder and its market anchors, voice, and the SEO constraints a copy change can silently break.
---

# Websyncr content

All page copy is in `src/content/content.ts`; URLs, contact details, nav and
CTA are in `src/lib/site.ts`. Components never hold copy. A price or headline
change is a content edit, never a component edit.

## Verified facts only

The site sells six-figure engineering. Every figure on it is a claim a buyer
may check.

- **Never invent** a client, testimonial, metric, logo or capability.
- **Never round or extrapolate** an existing stat.
- `testimonials` is deliberately an empty array. `Testimonials.tsx` returns
  `null` while it is empty. Add an entry only with a real attributed quote
  (`quote`, `name`, `title`, `company`). The predecessor site's eight named
  quotes were dropped as unverifiable — do not reinstate them.
- Confidential engagements are labelled **`Confidential Client`**. Never
  substitute an invented or placeholder brand name.
- `50+ enterprise clients`, `90% reduction in time-to-hire` and `$6.8M+
  pipeline` all describe **one** AI hiring platform built for an employer, not
  a personal client count. The qualifier lives inside the label string. **Do
  not shorten those labels for visual balance** — there is no footnote backing
  them up.

## Voice

- **First person singular.** The entire proposition is that this is one
  person. No "we built", no third-person "he".
- Short sentences. The page is tuned to Flesch 60–70 and an average sentence
  under 15 words. No sentence over 25 words.
- Plain English over consultancy register. Say what happens, not what it
  represents.

## Pricing

Six fixed-price offers in three groups (`start`, `build`, `sustain`), anchored
to 2026 market data rather than cost-plus:

| Segment | Market reference |
|---|---|
| Senior LLM / RAG freelance | $175–250/hr |
| Boutique consultancy (US/UK) | $150–250/hr |
| Agency fixed-price MVP | $30,000–55,000 |
| Production RAG build | $55,000–90,000 |
| Discovery sprint | $3,000–8,000 |

The ladder deliberately sits 40–50% under a US boutique — defensible for a solo
operator with no agency overhead. Rules:

1. **No discount anchoring.** No struck-through prices, no "% OFF" badge, no
   fake scarcity. A permanent markdown argues the real price is fiction.
2. **Discovery is paid** and credited in full against the build.
3. **Payment terms:** `start` offers are 50% to begin, 50% on delivery.
   `build` offers are 50% to start, balance across agreed milestones. Never
   100% upfront.
4. **Hourly stays a footnote**, not a seventh card — card parity would
   undercut the fixed-price argument the section just made.
5. Quoting a market range beats a boast. "Agencies quote $30,000–$55,000"
   is checkable; "half what an agency charges" is not.

## Structural coupling

A copy edit can break things that are not visible in the diff:

- **`StructuredData.tsx` reads `offers` and `faqs` directly.** Removing an
  offer removes it from the JSON-LD `OfferCatalog`. A price written `From $X`
  emits `minPrice` only — a bare range emits both bounds. Update
  `priceRange` in the schema when the ladder's ends move.
- **FAQ answers are emitted as `FAQPage` structured data** and lifted verbatim
  by search and LLM retrieval. Each answer must stand alone without the
  surrounding page.
- **Every `h2` must carry a topic**, not just voice. On a one-page site the
  headings are most of the topical surface there is.
- **The `<title>` leads with the service, not the brand** — `Websyncr` has no
  search volume yet. Keep under 60 chars; description under 160.
- **The failure-policy FAQ is a real commitment** (code and deploy access from
  the first milestone, written handover if the engagement ends early). Keep it
  true to how the work is actually done, or remove it.

## Trust logic

With every client under NDA, trust comes from specificity, not social proof:
a claim the visitor can verify in thirty seconds (the Lighthouse stat points at
the page itself), a market range they can test against their own quotes, a
concrete failure policy, and a named, linked founder.

## Open placeholders

- Case-study `href`s point at `/case-studies/*`, which **do not exist in the
  static export and will 404**. Awaiting real links.
- `links.projectForm` is still a placeholder Google Form URL.
- Location: `site.ts` says Gurugram, India (`countryCode: 'IN'`). A design note
  said London. Unresolved — ask, do not pick.
