/**
 * Six fixed-price engagements, clustered by job so the eye reads three decisions.
 * Two columns, not three: a price at 20px mono is wider than a third of the sheet.
 */

import { Section, SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { offers, offerGroups, offersProof, hourlyRate } from '@/content/content';
import { links, externalLinkProps } from '@/lib/site';

const TAG =
  'shrink-0 rounded-tag bg-amber px-2 py-0.75 font-mono text-mxs tracking-nav font-semibold text-void uppercase';

const groupedOffers = (id: (typeof offerGroups)[number]['id']) =>
  offers.filter((offer) => offer.group === id);

export function Offers() {
  return (
    <Section id="offers">
      <SectionHeading id="offers-heading" className="mb-4">
        Six ways to engage. All fixed-price.
      </SectionHeading>
      <p className="mb-6 max-w-[60ch] text-body text-muted">
        The number you are quoted is the number you pay, with no hourly billing on builds and no
        retainer creep afterwards.
      </p>

      <p className="mb-12 max-w-[68ch] border-l-2 border-blueprint pl-5 font-mono text-mmd text-muted">
        {offersProof}{' '}
        <a
          href="#work"
          className="text-ink underline underline-offset-4 hover:text-blueprint motion-safe:transition-tint"
        >
          See the work
        </a>
        <span aria-hidden="true"> →</span>
      </p>

      {offerGroups.map((group) => (
        <section key={group.id} aria-labelledby={`offers-${group.id}`} className="mb-12 last:mb-0">
          <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 id={`offers-${group.id}`} className="text-h4 font-display text-ink">
              {group.title}
            </h3>
            <span className="font-mono text-mxs text-muted">{group.note}</span>
          </div>

          <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
            {groupedOffers(group.id).map((offer) => (
              <Sheet as="li" key={offer.num} interactive className="flex flex-col gap-4 p-8">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-h3 font-display text-ink">{offer.name}</h4>
                  {offer.tag ? <span className={`mt-1 ${TAG}`}>{offer.tag}</span> : null}
                </div>

                <div>
                  <p className="font-mono text-price text-blueprint">{offer.price}</p>
                  <p className="mt-1.5 font-mono text-mxs text-muted">{offer.meta}</p>
                </div>

                <p className="text-card text-muted">{offer.description}</p>

                {offer.drivers ? (
                  <div className="flex-1">
                    <p className="mb-2 font-mono text-mxs tracking-meta text-muted uppercase">
                      What moves the price
                    </p>
                    <ul className="m-0 list-none p-0">
                      {offer.drivers.map((driver) => (
                        <li
                          key={driver}
                          className="mb-1.5 flex gap-2.5 text-mini text-muted last:mb-0"
                        >
                          <span aria-hidden="true" className="text-blueprint">
                            +
                          </span>
                          {driver}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex-1" />
                )}

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
        </section>
      ))}

      <p className="mt-8 max-w-[68ch] font-mono text-mmd text-muted">
        <span className="text-ink">{hourlyRate.rate}</span> &mdash; {hourlyRate.note}
      </p>
    </Section>
  );
}
