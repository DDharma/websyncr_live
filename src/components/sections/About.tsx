/**
 * Founder credit plus the studio title block - named for the data plate on an engineering drawing.
 * Each inner array of `studioFacts` is one row; a row holding one fact spans the card.
 */

import { SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { Wordmark } from '@/components/ui/Wordmark';
import { aboutParagraphs, studioFacts } from '@/content/content';
import { founder, externalLinkProps } from '@/lib/site';

const PROFILE_LINK =
  'font-mono text-mmd text-ink uppercase underline underline-offset-4 hover:text-blueprint motion-safe:transition-tint';

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-paper px-6 py-24 text-ink">
      <div className="sheet flex flex-wrap gap-14">
        <div className="min-w-0 flex-[1_1_480px]">
          <SectionHeading id="about-heading" className="mb-7">
            No team behind the curtain.
          </SectionHeading>

          <h3 className="mb-4 font-mono text-msm font-normal tracking-nav text-blueprint uppercase">
            {founder.role}
          </h3>

          {aboutParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`text-prose text-ink-soft ${
                i === aboutParagraphs.length - 1 ? 'mb-8' : 'mb-5'
              }`}
            >
              {paragraph}
            </p>
          ))}

          <ul className="flex list-none flex-wrap gap-6">
            <li>
              <a href={founder.linkedin} {...externalLinkProps} className={PROFILE_LINK}>
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={founder.github} {...externalLinkProps} className={PROFILE_LINK}>
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={founder.website} {...externalLinkProps} className={PROFILE_LINK}>
                ddharmacharya.in <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <Sheet className="min-w-0 flex-[0_1_360px] self-start overflow-hidden">
          <div className="bg-void px-6 py-5">
            <Wordmark tone="inverse" />
            <p className="mt-2 font-mono text-m2xs tracking-sheet text-inverse/60 uppercase">
              Solo engineering studio
            </p>
          </div>

          <div className="border-b border-rule px-6 py-5">
            <p className="mb-2 font-mono text-m2xs tracking-sheet text-muted uppercase">Principal</p>
            <p className="text-h5 font-display text-ink">{founder.name}</p>
            <p className="mt-1 font-mono text-mmd text-blueprint">{founder.role}</p>
          </div>

          <dl className="m-0 grid grid-cols-2">
            {studioFacts.flatMap((row, r) =>
              row.map((fact, c) => (
                <div
                  key={fact.label}
                  className={`px-6 py-4 ${row.length === 1 ? 'col-span-2' : ''} ${
                    r < studioFacts.length - 1 ? 'border-b border-rule' : ''
                  } ${c === 0 && row.length > 1 ? 'border-r border-rule' : ''}`}
                >
                  <dt className="mb-1.5 font-mono text-m2xs tracking-sheet text-muted uppercase">
                    {fact.label}
                  </dt>
                  <dd className="m-0 font-mono text-mmd text-ink">{fact.value}</dd>
                </div>
              ))
            )}
          </dl>
        </Sheet>
      </div>
    </section>
  );
}
