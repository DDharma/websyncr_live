'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/CtaButton';
import { Field, TextArea, TextInput } from '@/components/ui/Field';
import { Select } from '@/components/ui/Select';
import { briefFields } from '@/content/content';
import { site, links, primaryCta, externalLinkProps } from '@/lib/site';

/**
 * Project brief that composes a pre-filled mailto — no backend, nothing stored.
 */

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
            The 20-minute discovery call is the fastest route to a fixed number - book it and the
            proposal follows within 24–48 hours. If you would rather write it down, the project
            brief opens a pre-filled email in your own mail client. Nothing is sent to a server.
          </p>

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
                <Field key={field.id} id={id} label={field.label} required={field.required}>
                  {field.type === 'select' ? (
                    <Select
                      id={id}
                      name={field.id}
                      options={field.options}
                      placeholder="Select an engagement"
                      required={field.required}
                      invalidMessage="Pick an engagement so the reply comes back with a number attached."
                    />
                  ) : field.type === 'textarea' ? (
                    <TextArea
                      id={id}
                      name={field.id}
                      required={field.required}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <TextInput
                      id={id}
                      name={field.id}
                      required={field.required}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                    />
                  )}
                </Field>
              );
            })}
          </div>

          <CtaButton type="submit" variant="ink" size="md" className="mt-6 w-full uppercase">
            Compose the brief <span aria-hidden="true">→</span>
          </CtaButton>

          <p id="brief-note" className="mt-3 font-mono text-mxs text-muted">
            Opens your mail client. No data is stored or transmitted by this site.
          </p>

          <p role="status" aria-live="polite" className="mt-2 font-mono text-mxs text-blueprint">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
