/**
 * Hero: positioning, both CTAs, and the pipeline diagram. Founder credit is the
 * footer's job. The logo watermark sizes off the column, not the figure it overflows.
 */

import { CtaButton } from '@/components/ui/CtaButton';
import { Logo } from '@/components/ui/Logo';
import { HeroDiagram } from './HeroDiagram';
import { links, primaryCta } from '@/lib/site';

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
            <h1 id="hero-heading" className="mb-5 text-h2 font-display">
              Production AI systems for seed-stage teams. Shipped in weeks, not quarters.
            </h1>

            <p className="mb-6 max-w-[46ch] text-h3 font-display text-inverse/85">
              Websyncr builds like one senior engineer - because it is one.
            </p>

            <p className="mb-8 max-w-[52ch] text-lede text-inverse/78">
              Every engagement is architected, built, and shipped personally by Websyncr&rsquo;s
              founder - not handed off to a bench of contractors. Agencies quote a team and deliver
              a bench. Websyncr quotes a scope and delivers production.
            </p>

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

          <div className="min-w-0 flex-[1_1_420px]">
            <figure className="relative m-0">
              <Logo className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-[62%] -translate-x-1/2 -translate-y-1/2 opacity-8" />
              <div className="relative">
                <HeroDiagram />
              </div>
            </figure>

            <p className="mt-10 max-w-[52ch] border-l-2 border-amber pl-5 font-mono text-msm text-inverse/72">
              Built for seed to Series A teams in the US and EU, typically five to fifty people,
              with a document, retrieval, or workflow problem worth solving properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
