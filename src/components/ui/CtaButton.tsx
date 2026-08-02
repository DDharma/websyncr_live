import type { ReactNode } from 'react';
import { externalLinkProps } from '@/lib/site';

type Variant = 'amber' | 'ink';
type Size = 'sm' | 'md' | 'lg';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  /** `amber` = primary (on dark), `ink` = compact nav button (on light). */
  variant?: Variant;
  size?: Size;
  /** Outbound links open in a new tab; in-page anchors must not. */
  external?: boolean;
  className?: string;
};

const VARIANT: Record<Variant, string> = {
  // Amber fill + void text = 6.23:1. Hover inverts to inverse fill = 16.59:1.
  //
  // Hover is `inverse`, not `paper`: the two are the same #F2F4F6 in light
  // mode, but `paper` re-points to a near-black in dark, which would leave
  // void text on a near-black fill. `inverse` is light in both schemes.
  //
  // This variant only ever sits on a dark band (hero, closing sheet), so the
  // ring is `focus-inverse`. The base blueprint ring would land on void at
  // 3.06:1 in light mode.
  amber:
    'bg-amber text-void font-semibold hover:bg-inverse focus-inverse motion-safe:transition-tint',
  // Ink fill + paper text = 14.97:1 light, 15.33:1 dark (both tokens flip).
  // Hover to blueprint = 5.43:1 light, 5.24:1 dark. Focus ring is the base
  // `:focus-visible`, which contrasts with the body surface behind it.
  ink: 'bg-ink text-paper hover:bg-blueprint motion-safe:transition-tint',
};

const SIZE: Record<Size, string> = {
  sm: 'px-4.5 py-2.5 text-mbase tracking-cta-wide',
  md: 'px-7 py-4 text-mlg tracking-cta',
  lg: 'px-8 py-4.5 text-mxl tracking-cta',
};

export function CtaButton({
  href,
  children,
  variant = 'amber',
  size = 'md',
  external = true,
  className = '',
}: CtaButtonProps) {
  return (
    <a
      href={href}
      {...(external ? externalLinkProps : {})}
      // The long primary label ("Book a Fixed-Scope Discovery Call") is wider
      // than a 320px viewport, so wrapping is allowed below `sm` and locked
      // off above it, where it always fits on one line.
      className={`inline-flex items-center justify-center gap-2 rounded-tag text-center font-mono no-underline sm:whitespace-nowrap ${VARIANT[variant]} ${SIZE[size]} ${className}`}
    >
      {children}
    </a>
  );
}
