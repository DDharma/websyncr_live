/**
 * The one-project-at-a-time claim the pricing rests on, so it precedes Offers.
 * Reuses Section's void tone rather than introducing a new surface.
 */

import { Section, SectionHeading } from '@/components/ui/Section';
import { engagementModel } from '@/content/content';

export function EngagementModel() {
  return (
    <Section id="model" tone="void" padding="py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,34rem)_1fr]">
        <div>
          <SectionHeading id="model-heading" className="mb-6">
            {engagementModel.headline}
          </SectionHeading>
          <p className="max-w-[52ch] text-lede text-inverse/78">{engagementModel.body}</p>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-7 self-center p-0 sm:grid-cols-2 lg:grid-cols-1">
          {engagementModel.points.map((point) => (
            <li key={point.title} className="border-l-2 border-amber pl-5">
              <h3 className="mb-1.5 font-mono text-mbase tracking-nav text-amber uppercase">
                {point.title}
              </h3>
              <p className="text-card text-inverse/72">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
