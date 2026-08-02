import { CtaButton } from '@/components/ui/CtaButton';
import { Wordmark } from '@/components/ui/Wordmark';
import { site, founder, links, primaryCta, externalLinkProps } from '@/lib/site';

/**
 * Closing sheet + footer.
 *
 * Brand hierarchy: the Websyncr wordmark is the masthead here. The founder
 * credit sits in an 11px mono line at inverse/60 — legible (6.55:1) but
 * deliberately subordinate. The DS specified inverse/35, which measures
 * 3.03:1 and fails WCAG 1.4.3 for body text, so the alpha is raised to the
 * lowest value in the scale that passes.
 */
export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-void px-6 pt-20 pb-8 text-inverse">
      <div className="sheet">
        {/* Closing CTA */}
        <div className="mb-8 border-b border-white/14 pb-14 text-center">
          <h2 className="mx-auto mb-7 max-w-[26ch] text-h2-lg font-display">Ready to scope it?</h2>
          <CtaButton href={primaryCta.href} variant="amber" size="lg" className="uppercase">
            {primaryCta.label}
          </CtaButton>
        </div>

        {/* Utility row */}
        <div className="flex flex-wrap items-start justify-between gap-5 font-mono text-mbase">
          <div className="flex flex-col gap-4">
            <Wordmark tone="inverse" />
            <ul className="flex list-none flex-wrap gap-x-6 gap-y-2">
              <li>
                <a
                  href={links.mailto}
                  className="text-inverse/65 no-underline hover:text-inverse focus-inverse motion-safe:transition-tint"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={founder.linkedin}
                  {...externalLinkProps}
                  className="text-inverse/65 uppercase no-underline hover:text-inverse focus-inverse motion-safe:transition-tint"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={founder.github}
                  {...externalLinkProps}
                  className="text-inverse/65 uppercase no-underline hover:text-inverse focus-inverse motion-safe:transition-tint"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <p className="text-inverse/65 sm:text-right">
            {site.location} · {site.timezoneNote}
          </p>
        </div>

        {/* Founder credit — subordinate to the Websyncr masthead above */}
        <p className="mt-6 font-mono text-mxs text-inverse/60">
          © {year} {site.name}. Every engagement led personally by{' '}
          <a
            href={founder.website}
            {...externalLinkProps}
            className="underline decoration-inverse/40 underline-offset-[3px] hover:text-inverse hover:decoration-inverse focus-inverse"
          >
            {founder.name}
          </a>
          , {founder.role} - not a bench of contractors.
        </p>
      </div>
    </footer>
  );
}
