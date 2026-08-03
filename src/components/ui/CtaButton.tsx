/**
 * CTA link styled as a button. `amber` only ever sits on a dark band, so it
 * hovers to `inverse` and takes the inverse focus ring; `ink` is the light pair.
 */

import type { ReactNode } from 'react';
import { externalLinkProps } from '@/lib/site';

type Variant = 'amber' | 'ink';
type Size = 'sm' | 'md' | 'lg';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

const VARIANT: Record<Variant, string> = {
  amber:
    'bg-amber text-void font-semibold hover:bg-inverse focus-inverse motion-safe:transition-tint',
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
      className={`inline-flex items-center justify-center gap-2 rounded-tag text-center font-mono no-underline sm:whitespace-nowrap ${VARIANT[variant]} ${SIZE[size]} ${className}`}
    >
      {children}
    </a>
  );
}
