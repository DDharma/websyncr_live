/**
 * Sticky masthead. No hamburger and no JavaScript: below `md` the anchor row
 * drops to its own hairline-separated line, so no disclosure state can stick.
 */

import { Wordmark } from '@/components/ui/Wordmark';
import { CtaButton } from '@/components/ui/CtaButton';
import { nav, primaryCta } from '@/lib/site';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/92 backdrop-blur-md">
      <nav aria-label="Primary" className="sheet px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <a href="#top" className="rounded-[2px] no-underline" aria-label="Websyncr - back to top">
            <Wordmark />
          </a>

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
