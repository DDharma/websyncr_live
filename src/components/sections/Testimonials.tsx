/**
 * Client quotes, sitting between the work and the process that produced it.
 * Renders nothing while `testimonials` is empty rather than showing invented ones.
 */

import { Section, SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { testimonials } from '@/content/content';

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" padding="pt-4 pb-24">
      <SectionHeading id="testimonials-heading" size="sm" className="mb-10">
        In their words.
      </SectionHeading>

      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <Sheet as="li" key={`${item.company}-${item.name}`} className="p-8">
            <figure className="m-0 flex h-full flex-col gap-5">
              <blockquote className="m-0 flex-1 border-l-2 border-amber pl-5 text-prose text-ink-soft">
                {item.quote}
              </blockquote>
              <figcaption className="font-mono text-mmd">
                <span className="block text-ink">{item.name}</span>
                <span className="mt-1 block text-muted">
                  {item.title}, {item.company}
                </span>
              </figcaption>
            </figure>
          </Sheet>
        ))}
      </ul>
    </Section>
  );
}
