/**
 * Four fixed-price engagements in two columns, not three: a price range at
 * 20px mono is wider than a third of the sheet once card padding is subtracted.
 */

import { Section, SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { offers, hourlyRate } from '@/content/content';
import { links, externalLinkProps } from '@/lib/site';

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
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-h3 font-display text-ink">{offer.name}</h3>
              {offer.tag ? (
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

      <p className="mt-8 max-w-[68ch] font-mono text-mmd text-muted">
        <span className="text-ink">{hourlyRate.rate}</span> - {hourlyRate.note}
      </p>
    </Section>
  );
}
