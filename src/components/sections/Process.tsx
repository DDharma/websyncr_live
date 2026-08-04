/**
 * Five-step engagement flow. Steps reveal on scroll via the CSS-only `reveal`
 * utility — no observer, no client bundle, fully visible without support.
 */

import { Section, SectionHeading } from '@/components/ui/Section';
import { processSteps } from '@/content/content';

export function Process() {
  return (
    <Section id="process" tone="void">
      <SectionHeading id="process-heading" className="mb-14">
        How a fixed-price engagement runs.
      </SectionHeading>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute top-4.75 right-0 left-0 hidden h-px bg-white/16 lg:block"
        />
        <ol className="relative m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <li
              key={step.num}
              className="reveal"
              style={{ '--reveal-step': i } as React.CSSProperties}
            >
              <p
                aria-hidden="true"
                className="mb-5 flex size-9.5 items-center justify-center rounded-full border-[1.5px] border-blueprint bg-void font-mono text-mlg text-inverse"
              >
                {step.num}
              </p>
              <h3 className="mb-2.5 text-h6 font-display">
                <span className="sr-only">Step {Number(step.num)}: </span>
                {step.title}
              </h3>
              <p className="text-note text-inverse/65">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
