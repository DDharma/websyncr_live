import { SectionHeading } from '@/components/ui/Section';
import { Sheet } from '@/components/ui/Sheet';
import { aboutParagraphs, titleBlock } from '@/content/content';
import { founder, externalLinkProps } from '@/lib/site';

const PROFILE_LINK =
  'font-mono text-mmd text-ink uppercase underline underline-offset-4 hover:text-blueprint motion-safe:transition-tint';

/**
 * Founder credit sheet.
 *
 * Dharmvir is named here as Founder & Lead Architect — the one place on the
 * page where the person, not the studio, leads the heading hierarchy. It is an
 * h3 under the section h2 so it stays below the Websyncr masthead in outline
 * order as well as in visual weight.
 */
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

        {/* At-a-glance engagement facts */}
        <Sheet className="min-w-0 flex-[0_1_340px] self-start p-7">
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 font-mono text-mmd">
            {titleBlock.map(([label, value]) => (
              <div key={label} className="col-span-2 grid grid-cols-subgrid">
                <dt className="text-muted uppercase">{label}</dt>
                <dd className="m-0 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Sheet>
      </div>
    </section>
  );
}
