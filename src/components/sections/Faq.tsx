/**
 * FAQ accordion on native <details>/<summary> — no JavaScript, and correct
 * before hydration. `name` groups them so only one panel stays open.
 */

import { SectionHeading } from '@/components/ui/Section';
import { faqs } from '@/content/content';

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-rule bg-paper px-6 pt-8 pb-24 text-ink"
    >
      <div className="column">
        <SectionHeading id="faq-heading" size="sm" className="mb-10">
          Questions worth answering upfront.
        </SectionHeading>

        <div>
          {faqs.map((faq) => (
            <details key={faq.question} name="faq" className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5.5 text-faq-q font-display text-ink [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="relative h-4 w-4 shrink-0 text-blueprint"
                >
                  <span className="absolute top-1/2 left-0 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute top-1/2 left-0 h-[1.5px] w-4 -translate-y-1/2 rotate-90 bg-current motion-safe:transition-transform motion-safe:duration-200 group-open:rotate-0" />
                </span>
              </summary>
              <p className="mb-6 pr-10 text-answer text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
