/**
 * Form control kit: the shared field surface, and the label wrapper every control sits in.
 * Borders are `muted` (6.00:1) rather than `rule` (1.25:1), which would fail WCAG 1.4.11.
 */

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export const fieldSurface =
  'w-full rounded-tag border border-muted bg-surface px-3.5 py-2.5 font-sans text-card text-ink placeholder:text-muted/80 hover:border-ink-soft focus-visible:border-blueprint motion-safe:transition-tint';

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
};

export function Field({ id, label, required = false, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-mxs tracking-meta text-muted uppercase">
        {label}
        {required ? (
          <>
            {' '}
            <span aria-hidden="true" className="text-blueprint">
              *
            </span>
            <span className="sr-only">(required)</span>
          </>
        ) : (
          <span className="text-muted"> (optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export function TextInput({
  type = 'text',
  className = '',
  ...props
}: ComponentPropsWithoutRef<'input'>) {
  return <input type={type} {...props} className={`${fieldSurface} ${className}`} />;
}

export function TextArea({
  rows = 4,
  className = '',
  ...props
}: ComponentPropsWithoutRef<'textarea'>) {
  return <textarea rows={rows} {...props} className={`${fieldSurface} resize-y ${className}`} />;
}
