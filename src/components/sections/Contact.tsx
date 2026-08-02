'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/CtaButton';
import { briefFields } from '@/content/content';
import { site, links, primaryCta, externalLinkProps } from '@/lib/site';

/**
 * Secondary conversion path: a short project brief.
 *
 * There is no backend, by design. The form composes a pre-filled email in the
 * visitor's own mail client — nothing is transmitted to a server, so there is
 * no data to store or leak. The two always-visible outbound links (Google Form,
 * direct email) mean visitors without JavaScript are never stranded.
 *
 * Input borders use `muted` (6.00:1) rather than `rule` (1.25:1) so the field
 * boundary satisfies WCAG 1.4.11 non-text contrast.
 */

const FIELD_BASE =
  'w-full rounded-tag border border-muted bg-surface px-3.5 py-2.5 font-sans text-card text-ink placeholder:text-muted/80 focus-visible:border-blueprint';

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (key: string) => String(data.get(key) ?? '').trim();

    const name = read('name');
    const company = read('company');
    const engagement = read('engagement');
    const brief = read('brief');

    const subject = `Fixed-scope enquiry - ${engagement}${company ? ` - ${company}` : ''}`;
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Engagement: ${engagement}`,
      '',
      'Brief:',
      brief,
    ]
      .filter((line) => line !== null)
      .join('\n');

    setStatus('Opening your email client with the brief pre-filled.');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-paper px-6 pb-24 text-ink">
      <div className="sheet grid grid-cols-1 gap-14 lg:grid-cols-[1fr_minmax(0,26rem)]">
        <div>
          <SectionHeading id="contact-heading" size="sm" className="mb-5">
            Rather send details first?
          </SectionHeading>
          <p className="mb-8 max-w-[54ch] text-body text-muted">
            {/* Wording stays layout-agnostic: the form sits alongside this
                column at lg and above, and below it at narrower widths. */}
            The 20-minute discovery call is the fastest route to a fixed number - book it and the
            proposal follows within 24–48 hours. If you would rather write it down, the project
            brief opens a pre-filled email in your own mail client. Nothing is sent to a server.
          </p>

          {/* Secondary action stacks under the primary CTA rather than sitting
              beside it, so there is one obvious next step. */}
          <div className="flex flex-col items-start gap-4">
            <CtaButton href={primaryCta.href} variant="ink" size="md" className="uppercase">
              {primaryCta.label}
            </CtaButton>
            <a
              href={links.projectForm}
              {...externalLinkProps}
              className="font-mono text-mmd text-ink underline underline-offset-4 hover:text-blueprint motion-safe:transition-tint"
            >
              or use the Google Form <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="mt-8 font-mono text-mxs text-muted">
            Direct:{' '}
            <a
              href={links.mailto}
              className="underline underline-offset-[3px] hover:text-blueprint"
            >
              {site.email}
            </a>{' '}
            · NDA signed before details change hands.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-sheet border border-rule bg-surface p-7"
          aria-describedby="brief-note"
        >
          <p className="mb-5 border-b border-rule pb-3 font-mono text-m2xs tracking-sheet text-muted uppercase">
            Project brief
          </p>

          <div className="flex flex-col gap-4">
            {briefFields.map((field) => {
              const id = `brief-${field.id}`;
              return (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label htmlFor={id} className="font-mono text-mxs tracking-meta text-muted uppercase">
                    {field.label}
                    {field.required ? (
                      <>
                        {' '}
                        <span aria-hidden="true" className="text-blueprint">
                          *
                        </span>
                        <span className="sr-only">(required)</span>
                      </>
                    ) : (
                      // Full `muted` (6.00:1), not an alpha of it — at 70% the
                      // composite drops to 3.6:1 and fails WCAG 1.4.3.
                      <span className="text-muted"> (optional)</span>
                    )}
                  </label>

                  {field.type === 'select' ? (
                    <select id={id} name={field.id} required={field.required} className={FIELD_BASE}>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={id}
                      name={field.id}
                      required={field.required}
                      rows={4}
                      placeholder={field.placeholder}
                      className={`${FIELD_BASE} resize-y`}
                    />
                  ) : (
                    <input
                      id={id}
                      name={field.id}
                      type="text"
                      required={field.required}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      className={FIELD_BASE}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="mt-6 w-full cursor-pointer rounded-tag bg-ink px-7 py-3.5 font-mono text-mmd tracking-cta text-paper uppercase hover:bg-blueprint motion-safe:transition-tint"
          >
            Compose the brief <span aria-hidden="true">→</span>
          </button>

          <p id="brief-note" className="mt-3 font-mono text-mxs text-muted">
            Opens your mail client. No data is stored or transmitted by this site.
          </p>

          {/* Polite live region so the outcome is announced, not just visual. */}
          <p role="status" aria-live="polite" className="mt-2 font-mono text-mxs text-blueprint">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
