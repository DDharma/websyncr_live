/**
 * White card surface plus the two case-study topology glyphs.
 * `interactive` adds the lift-on-hover elevation used by the offer cards.
 */

import type { ReactNode } from 'react';

type SheetProps = {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
  as?: 'div' | 'li' | 'article';
};

export function Sheet({
  children,
  interactive = false,
  className = '',
  as: Tag = 'div',
}: SheetProps) {
  return (
    <Tag
      className={`rounded-sheet border border-rule bg-surface ${
        interactive
          ? 'motion-safe:transition-[box-shadow,transform] motion-safe:duration-200 motion-safe:ease-sheet hover:shadow-sheet motion-safe:hover:-translate-y-[3px] focus-within:shadow-sheet'
          : ''
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

export function CircuitGlyph() {
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" aria-hidden="true" focusable="false" className="shrink-0">
      <line x1="9" y1="6" x2="35" y2="6" stroke="var(--color-rule)" strokeWidth="1.2" />
      <line x1="6" y1="9" x2="22" y2="19" stroke="var(--color-rule)" strokeWidth="1.2" />
      <line x1="38" y1="9" x2="22" y2="19" stroke="var(--color-rule)" strokeWidth="1.2" />
      <circle cx="6" cy="6" r="3" fill="none" stroke="var(--color-blueprint)" strokeWidth="1.4" />
      <circle cx="38" cy="6" r="3" fill="none" stroke="var(--color-blueprint)" strokeWidth="1.4" />
      <circle cx="22" cy="22" r="3" fill="none" stroke="var(--color-amber)" strokeWidth="1.4" />
    </svg>
  );
}

export function BlockGlyph() {
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" aria-hidden="true" focusable="false" className="shrink-0">
      <line x1="9" y1="12" x2="22" y2="17" stroke="var(--color-rule)" strokeWidth="1.2" />
      <line x1="35" y1="12" x2="22" y2="17" stroke="var(--color-rule)" strokeWidth="1.2" />
      <rect x="2" y="2" width="14" height="10" rx="2" fill="none" stroke="var(--color-blueprint)" strokeWidth="1.4" />
      <rect x="28" y="2" width="14" height="10" rx="2" fill="none" stroke="var(--color-blueprint)" strokeWidth="1.4" />
      <rect x="15" y="17" width="14" height="10" rx="2" fill="none" stroke="var(--color-amber)" strokeWidth="1.4" />
    </svg>
  );
}
