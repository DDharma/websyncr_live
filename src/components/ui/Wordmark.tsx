/**
 * Lockup: brand mark, WEBSYNCR wordmark, amber terminating square.
 * The square is a graphic, not a "." glyph - amber as text would fail 1.4.3.
 */

import { site } from '@/lib/site';
import { Logo } from './Logo';

type WordmarkProps = {
  tone?: 'light' | 'inverse';
  className?: string;
};

export function Wordmark({ tone = 'light', className = '' }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Logo className="h-[18px] w-auto shrink-0" />
      <span
        className={`inline-flex items-baseline gap-[3px] font-mono text-logo font-semibold tracking-logo ${
          tone === 'inverse' ? 'text-inverse' : 'text-ink'
        }`}
      >
        <span>{site.name.toUpperCase()}</span>
        <svg
          width="4"
          height="4"
          viewBox="0 0 4 4"
          aria-hidden="true"
          focusable="false"
          className="mb-[1px] shrink-0"
        >
          <rect width="4" height="4" fill="var(--color-amber)" />
        </svg>
      </span>
    </span>
  );
}
