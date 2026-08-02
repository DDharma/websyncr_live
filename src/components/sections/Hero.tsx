import { CtaButton } from '@/components/ui/CtaButton';
import { Logo } from '@/components/ui/Logo';
import { HeroDiagram } from './HeroDiagram';
import { site, founder, links, primaryCta, externalLinkProps } from '@/lib/site';

const CREDIT_LINK =
  'text-inverse/72 underline decoration-inverse/40 underline-offset-[3px] hover:text-inverse hover:decoration-inverse focus-inverse motion-safe:transition-tint';

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className=" bg-void px-6 pt-22 pb-16 text-inverse"
    >
      <div className="sheet">
        <div className="flex flex-wrap items-center gap-14">
          <div className="min-w-0 flex-[1_1_460px]">
            <p className="mb-5 font-mono text-mbase tracking-sheet text-amber uppercase">
              {site.name} - {site.tagline}
            </p>

            <h1 id="hero-heading" className="mb-7 text-h1 font-display">
              Websyncr builds like one senior engineer - because it is one.
            </h1>

            <p className="mb-5 max-w-[52ch] text-lede text-inverse/78">
              Every engagement is architected, built, and shipped personally by Websyncr&rsquo;s
              founder - not handed off to a bench of contractors. Agencies quote a team and deliver
              a bench. Websyncr quotes a scope and delivers production.
            </p>

            {/* Role sits on its own line above the credits, so the name and
                profile links read as one unbroken row instead of wrapping
                mid-list behind a dash. */}
            <p className="mb-8 font-mono text-msm tracking-cta-wide text-inverse/60">
              <span className="block uppercase">{founder.role}</span>
              <span className="mt-1.5 block">
                <a href="#about" className={CREDIT_LINK}>
                  {founder.name}
                </a>{' '}
                ·{' '}
                <a href={founder.linkedin} {...externalLinkProps} className={CREDIT_LINK}>
                  LinkedIn
                </a>{' '}
                ·{' '}
                <a href={founder.github} {...externalLinkProps} className={CREDIT_LINK}>
                  GitHub
                </a>{' '}
                ·{' '}
                <a href={founder.website} {...externalLinkProps} className={CREDIT_LINK}>
                  ddharmacharya.in
                </a>
              </span>
            </p>

            {/* Secondary action stacks under the primary CTA rather than
                sitting beside it, so there is one obvious next step. */}
            <div className="flex flex-col items-start gap-4">
              <CtaButton href={primaryCta.href} variant="amber" size="md" className="uppercase">
                {primaryCta.label}
              </CtaButton>
              <a
                href={links.mailto}
                className="font-mono text-mlg text-inverse/65 underline underline-offset-4 hover:text-inverse focus-inverse motion-safe:transition-tint"
              >
                or email directly <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* The mark sits behind the diagram as an oversized watermark. It is
              scaled well past the figure's own height on purpose: the diagram
              is a short, wide graphic, so a mark sized to fit inside it reads
              as a stray smudge behind one node rather than a deliberate stamp.
              Decorative only - aria-hidden and pointer-events-none, at 8%
              opacity so the labels above it stay fully legible. */}
          <figure className="relative m-0 min-w-0 flex-[1_1_420px]">
            <Logo className="pointer-events-none absolute top-1/2 left-1/2 h-[210%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-8" />
            <div className="relative">
              <HeroDiagram />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
