/**
 * Verified-figures bar as a description list - dt → dd in DOM, flipped by flex.
 * One tile per artifact, so the 90%'s "50+ enterprise clients" qualifier stays put.
 */

import { stats } from '@/content/content';

export function ProofBar() {
  return (
    <section
      id="proof"
      aria-label="Verified delivery figures"
      className="border-b border-rule bg-paper px-6 py-14"
    >
      <div className="sheet">
        <dl className="m-0 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col border-l-2 border-blueprint pl-4">
              <dt className="order-2 mt-2 font-mono text-msm tracking-meta text-muted">
                {stat.label}
              </dt>
              <dd className="order-1 m-0 text-stat font-display text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
