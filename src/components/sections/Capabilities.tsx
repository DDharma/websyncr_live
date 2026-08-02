import { Section, SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { capabilities } from '@/content/content';

/**
 * What the engagements above are built out of.
 *
 * Same `Sheet` card and grid rhythm as the additional-systems list in Work —
 * no new pattern. Deliberately below the priced engagements so commodity work
 * is present and findable without sitting at the same weight as a $35k build.
 *
 * The years-of-experience figure is per-capability and comes from the record,
 * not from the total: several predate the AI work.
 */
export function Capabilities() {
  return (
    <Section id="capabilities" padding="pt-4 pb-24">
      {/* "What gets built" was voice with no topic. A heading is one of the
          few places a single-page site can state its subject outright. */}
      <SectionHeading id="capabilities-heading" className="mb-4">
        AI systems, web apps, and everything around them.
      </SectionHeading>
      <p className="mb-12 max-w-[60ch] text-body text-muted">
        Every engagement is assembled from these. One person across all of them, which is why they
        integrate instead of being handed between specialists.
      </p>

      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <Sheet as="li" key={capability.name} className="flex flex-col gap-3 p-7">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-h5 font-display text-ink">{capability.name}</h3>
              <span className="shrink-0 font-mono text-mxs tracking-meta text-muted">
                {capability.years}
              </span>
            </div>

            <p className="flex-1 text-card text-muted">{capability.description}</p>

            <ul className="m-0 flex list-none flex-wrap gap-1.5 border-t border-rule p-0 pt-4">
              {capability.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-tag border border-rule px-2 py-1 font-mono text-mxs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Sheet>
        ))}
      </ul>
    </Section>
  );
}
