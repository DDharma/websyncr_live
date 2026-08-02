import type { ReactNode } from 'react';

type Tone = 'paper' | 'void';

/* -------------------------------------------------------------------------- */
/* Section shell                                                              */
/* -------------------------------------------------------------------------- */

type SectionProps = {
  id: string;
  tone?: Tone;
  children: ReactNode;
  /** Section label for assistive tech, when no visible h2 fits. */
  ariaLabel?: string;
  /** Tailwind padding override — vertical rhythm varies per section. */
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

/* -------------------------------------------------------------------------- */
/* Section heading                                                            */
/* -------------------------------------------------------------------------- */

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
