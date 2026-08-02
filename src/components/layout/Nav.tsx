import { Wordmark } from '@/components/ui/Wordmark';
import { CtaButton } from '@/components/ui/CtaButton';
import { nav, primaryCta } from '@/lib/site';

/**
 * Sticky masthead.
 *
 * No hamburger and no JavaScript: below `md` the anchor row drops onto its own
 * hairline-separated second line, which is the DS's own flex-wrap behaviour
 * made explicit. Every link stays reachable by tap and by keyboard at all
 * widths, and there is no disclosure state to get stuck open.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/92 backdrop-blur-md">
      <nav aria-label="Primary" className="sheet px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <a href="#top" className="rounded-[2px] no-underline" aria-label="Websyncr - back to top">
            <Wordmark />
          </a>

          {/* Desktop anchor row */}
          <ul className="hidden list-none items-center gap-7 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-mbase tracking-nav text-muted uppercase no-underline hover:text-ink motion-safe:transition-tint"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <CtaButton href={primaryCta.href} variant="ink" size="sm" className="uppercase">
            Book a call <span aria-hidden="true">→</span>
          </CtaButton>
        </div>

        {/* Mobile anchor row — same links, second line */}
        <ul className="-mx-6 flex list-none flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule px-6 py-[10px] md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-mxs tracking-nav text-muted uppercase no-underline hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
