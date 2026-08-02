import { Section, SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { offers, hourlyRate } from '@/content/content';
import { links, externalLinkProps } from '@/lib/site';

/**
 * Four fixed-price engagements.
 *
 * Two columns rather than three: the price line now carries a range
 * ("$15,000 – $22,000") at 20px mono, which is wider than a third of the
 * 1160px sheet once card padding is subtracted. Three columns would clip it.
 *
 * Payment terms are per-offer, not global — the two small fixed-fee
 * engagements bill up front, the two builds are 50/50.
 */
export function Offers() {
  return (
    <Section id="offers">
      <SectionHeading id="offers-heading" className="mb-4">
        Four ways to engage. All fixed-price.
      </SectionHeading>
      <p className="mb-12 max-w-[60ch] text-body text-muted">
        No hourly billing on builds, no retainer creep, and no discount theatre - the number you are
        quoted is the number you pay.
      </p>

      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        {offers.map((offer) => (
          <Sheet as="li" key={offer.num} interactive className="flex flex-col gap-4 p-8">
            {/* Tag shares the title's row rather than sitting in a reserved
                row above it, so every card's title starts at the same height
                with no empty strip on the untagged ones. `shrink-0` makes a
                long title wrap instead of squeezing the badge. */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-h3 font-display text-ink">{offer.name}</h3>
              {offer.tag ? (
                // Amber as a fill with void text (6.23:1). Amber *text* on a
                // white surface is 2.93:1, so the tag colour is inverted here
                // rather than dropped.
                <span className="mt-1 shrink-0 rounded-tag bg-amber px-2 py-0.75 font-mono text-mxs tracking-nav font-semibold text-void uppercase">
                  {offer.tag}
                </span>
              ) : null}
            </div>

            <div>
              <p className="font-mono text-price text-blueprint">{offer.price}</p>
              <p className="mt-1.5 font-mono text-mxs text-muted">{offer.meta}</p>
            </div>

            <p className="flex-1 text-card text-muted">{offer.description}</p>

            <p className="font-mono text-mxs text-muted uppercase">{offer.terms}</p>

            <a
              href={links.calendly}
              {...externalLinkProps}
              className="flex items-center gap-1.5 border-t border-rule pt-4 font-mono text-mmd text-ink uppercase no-underline hover:text-blueprint motion-safe:transition-tint"
            >
              Scope this
              <span aria-hidden="true">→</span>
              <span className="sr-only">{offer.name}, book a discovery call</span>
            </a>
          </Sheet>
        ))}
      </ul>

      {/* Hourly is deliberately a footnote, not a fifth card: it exists for
          work too small to scope, and giving it card parity would undercut the
          fixed-price argument the section just made. */}
      <p className="mt-8 max-w-[68ch] font-mono text-mmd text-muted">
        <span className="text-ink">{hourlyRate.rate}</span> - {hourlyRate.note}
      </p>
    </Section>
  );
}
