/**
 * Six fixed-price engagements, clustered by job so the eye reads three decisions.
 * A group's trailing card goes full width when the count is odd, leaving no gap.
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
        No hourly billing on builds, no retainer creep, and no discount theatre - the number you are
        quoted is the number you pay.
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
            {groupedOffers(group.id).map((offer, i, list) => {
              const wide = list.length % 2 === 1 && i === list.length - 1;

              return (
                <Sheet
                  as="li"
                  key={offer.num}
                  interactive
                  className={`p-8 ${wide ? 'md:col-span-2' : ''}`}
                >
                  <div
                    className={
                      wide
                        ? 'flex flex-wrap items-start gap-x-12 gap-y-5'
                        : 'flex h-full flex-col gap-4'
                    }
                  >
                    <div className={wide ? 'min-w-0 flex-[1_1_20rem]' : 'contents'}>
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-h3 font-display text-ink">{offer.name}</h4>
                        {offer.tag ? <span className={`mt-1 ${TAG}`}>{offer.tag}</span> : null}
                      </div>

                      <div className={wide ? 'mt-3' : ''}>
                        <p className="font-mono text-price text-blueprint">{offer.price}</p>
                        <p className="mt-1.5 font-mono text-mxs text-muted">{offer.meta}</p>
                      </div>
                    </div>

                    <div className={wide ? 'min-w-0 flex-[1_1_24rem]' : 'contents'}>
                      <p className="text-card text-muted">{offer.description}</p>

                      {offer.drivers ? (
                        <div className={wide ? 'mt-4' : 'flex-1'}>
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
                        <div className={wide ? '' : 'flex-1'} />
                      )}

                      <p className={`font-mono text-mxs text-muted uppercase ${wide ? 'mt-4' : ''}`}>
                        {offer.terms}
                      </p>

                      <a
                        href={links.calendly}
                        {...externalLinkProps}
                        className={`flex items-center gap-1.5 border-t border-rule pt-4 font-mono text-mmd text-ink uppercase no-underline hover:text-blueprint motion-safe:transition-tint ${
                          wide ? 'mt-4' : ''
                        }`}
                      >
                        Scope this
                        <span aria-hidden="true">→</span>
                        <span className="sr-only">{offer.name}, book a discovery call</span>
                      </a>
                    </div>
                  </div>
                </Sheet>
              );
            })}
          </ul>
        </section>
      ))}

      <p className="mt-8 max-w-[68ch] font-mono text-mmd text-muted">
        <span className="text-ink">{hourlyRate.rate}</span> - {hourlyRate.note}
      </p>
    </Section>
  );
}
