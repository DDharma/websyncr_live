/**
 * Case studies in two categories, plus the additional-systems grid.
 * A card links out only when it carries an `href`; additional systems never do.
 */

import type { ReactNode } from 'react';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Sheet, CircuitGlyph, BlockGlyph } from '@/components/ui/Sheet';
import {
  independentWork,
  enterpriseWork,
  additionalSystems,
  type CaseStudy,
} from '@/content/content';

function CategoryHeader({ id, title, note }: { id: string; title: string; note: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <h3 id={id} className="text-h4 font-display text-ink">
        {title}
      </h3>
      <span className="font-mono text-mxs text-muted">{note}</span>
    </div>
  );
}

function CaseGrid({
  cases,
  glyph,
  labelledBy,
}: {
  cases: readonly CaseStudy[];
  glyph: ReactNode;
  labelledBy: string;
}) {
  return (
    <ul
      aria-labelledby={labelledBy}
      className="grid list-none grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2"
    >
      {cases.map((item) => (
        <Sheet as="li" key={item.title} className="flex flex-col gap-3.5 p-7">
          {glyph}
          <h4 className="text-h5 font-display text-ink">{item.title}</h4>
          <p className="font-mono text-mxs text-muted">{item.meta}</p>
          <p className="flex-1 text-card text-muted">{item.description}</p>
          {item.href ? (
            <a
              href={item.href}
              className="flex items-center gap-1.5 border-t border-rule pt-3.5 font-mono text-mmd text-ink uppercase no-underline hover:text-blueprint motion-safe:transition-tint"
            >
              Read the case study
              <span aria-hidden="true">→</span>
              <span className="sr-only">: {item.title}</span>
            </a>
          ) : null}
        </Sheet>
      ))}
    </ul>
  );
}

export function Work() {
  return (
    <Section id="work" padding="pt-16 pb-24">
      <SectionHeading id="work-heading" className="mb-12">
        Work that&rsquo;s already in production.
      </SectionHeading>

      <CategoryHeader
        id="work-set-a"
        title="Independent Client Delivery"
        note="(Confidential Client)"
      />
      <div className="mb-16">
        <CaseGrid cases={independentWork} glyph={<CircuitGlyph />} labelledBy="work-set-a" />
      </div>

      <CategoryHeader
        id="work-set-b"
        title="Enterprise Architecture & Technical Leadership"
        note="(as Technical Lead / Architect)"
      />
      <div className="mb-14">
        <CaseGrid cases={enterpriseWork} glyph={<BlockGlyph />} labelledBy="work-set-b" />
      </div>

      <h3
        id="work-additional"
        className="mb-5 font-mono text-mbase font-normal tracking-nav text-muted uppercase"
      >
        Additional systems
      </h3>
      <ul
        aria-labelledby="work-additional"
        className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {additionalSystems.map((item) => (
          <li key={item.title} className="rounded-sheet border border-rule px-5 py-4.5">
            <p className="mb-1.5 font-display text-card leading-snug font-semibold text-ink">
              {item.title}
            </p>
            <p className="text-mini text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
