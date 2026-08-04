/**
 * Section shell and heading. `tone` picks the light paper or dark void band;
 * `padding` overrides the vertical rhythm, which varies per section.
 */

import type { ReactNode } from 'react';

type Tone = 'paper' | 'void';

type SectionProps = {
  id: string;
  tone?: Tone;
  children: ReactNode;
  ariaLabel?: string;
  padding?: string;
  className?: string;
};

export function Section({
  id,
  tone = 'paper',
  children,
  ariaLabel,
  padding = 'py-24',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabel ? undefined : `${id}-heading`}
      className={`px-6 ${padding} ${
        tone === 'void' ? 'bg-void text-inverse' : 'bg-paper text-ink'
      } ${className}`}
    >
      <div className="sheet">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  children,
  size = 'default',
  className = '',
}: {
  id: string;
  children: ReactNode;
  size?: 'default' | 'sm';
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`${size === 'sm' ? 'text-h2-sm' : 'text-h2'} font-display ${className}`}
    >
      {children}
    </h2>
  );
}
