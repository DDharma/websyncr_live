import { site } from '@/lib/site';
import { Logo } from './Logo';

type WordmarkProps = {
  /** `light` = ink on paper (nav), `inverse` = paper on void (footer). */
  tone?: 'light' | 'inverse';
  className?: string;
};

/**
 * Lockup: brand mark + WEBSYNCR wordmark + amber terminating mark.
 *
 * The terminating mark is an SVG square, not a "." glyph, on purpose: amber
 * (#C98A2C) on paper is 2.66:1, so as *text* it would fail WCAG 1.4.3. As a
 * decorative graphic next to the 14.97:1 wordmark it carries no information and
 * is exempt — same pixels, no violation.
 */
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
