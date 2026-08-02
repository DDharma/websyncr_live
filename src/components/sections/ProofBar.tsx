import { stats } from '@/content/content';

/**
 * Verified-figures bar.
 *
 * The qualifier on the 50+ and $6.8M+ figures is load-bearing and lives in the
 * labels themselves — both state that the numbers come from an AI hiring
 * platform that was architected and built, not from a personal client count.
 * Do not shorten those two labels; they are the only thing keeping those
 * figures from reading as a direct client tally.
 *
 * Marked up as a description list — term is the metric, definition is the
 * figure. DOM order is dt → dd for assistive tech; flex `order` puts the
 * figure on top visually.
 */
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
