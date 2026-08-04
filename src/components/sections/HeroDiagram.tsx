/**
 * The idea -> ship pipeline as a four-week vertical timeline.
 * `--i` is the phase index every animation delays off; the cadence is in globals.css.
 */

type Phase = {
  num: string;
  label: string;
  detail: string;
  week: string;
};

const PHASES: readonly Phase[] = [
  {
    num: '01',
    label: 'Idea',
    detail: 'Discovery call. The problem, not a sales script.',
    week: 'Week 01',
  },
  {
    num: '02',
    label: 'Architecture',
    detail: 'Scope locked, fixed quote, one number.',
    week: 'Week 01',
  },
  {
    num: '03',
    label: 'Build',
    detail: 'RAG, Next.js, typed end to end.',
    week: 'Week 02',
  },
  {
    num: '04',
    label: 'Harden',
    detail: 'Tests, edge cases, and the fixes they surface.',
    week: 'Week 03',
  },
  {
    num: '05',
    label: 'Ship',
    detail: 'CI/CD, docs, and the keys.',
    week: 'Week 04',
  },
];

export function HeroDiagram() {
  return (
    <div className="flow max-w-124">
      <p className="mb-6 flex items-baseline justify-between gap-4 border-b border-inverse/14 pb-3 font-mono text-mxs tracking-sheet uppercase">
        <span className="text-inverse/60">
          Idea <span aria-hidden="true">&rarr;</span>
          <span className="sr-only">to</span> Ship
        </span>
        <span className="text-amber">Four weeks</span>
      </p>

      <ol className="m-0 list-none p-0">
        {PHASES.map((phase, i) => (
          <li
            key={phase.num}
            className="flow-step relative grid grid-cols-[11px_minmax(0,1fr)_auto] items-start gap-x-4 pb-9 last:pb-0"
            style={{ '--i': i } as React.CSSProperties}
          >
            <span aria-hidden="true" className="flow-dot" />
            {i < PHASES.length - 1 && <span aria-hidden="true" className="flow-link" />}

            <div className="min-w-0">
              <p className="text-h6 font-display text-inverse">
                <span className="flow-num mr-2 font-mono text-msm">{phase.num}</span>
                {phase.label}
              </p>
              <p className="mt-1 text-mini text-inverse/65">{phase.detail}</p>
            </div>

            <span className="flow-week rounded-tag border px-2 py-1 font-mono text-m2xs tracking-meta whitespace-nowrap uppercase">
              {phase.week}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-7 border-t border-inverse/14 pt-4 font-mono text-m2xs tracking-sheet text-inverse/55 uppercase">
        Architected &amp; built by one person - no bench, no handoffs
      </p>
    </div>
  );
}
