/**
 * The idea → ship pipeline as inline SVG, carrying one text alternative.
 * The viewBox is cropped to drawn content; the old one left ~150px dead margin.
 */

const NODES = [
  { x: 16, w: 81, cx: 56, label: 'Idea', num: '01' },
  { x: 145, w: 110, cx: 200, label: 'Architecture', num: '02' },
  { x: 303, w: 110, cx: 358, label: 'Build', num: '03' },
  { x: 461, w: 81, cx: 501, label: 'Ship', num: '04' },
] as const;

const CONNECTORS = [
  { x1: 97, x2: 145, cx: 121, label: 'Discovery', delay: '0.1s' },
  { x1: 255, x2: 303, cx: 279, label: 'RAG · Next.js', delay: '0.4s' },
  { x1: 413, x2: 461, cx: 437, label: 'CI/CD', delay: '0.7s' },
] as const;

export function HeroDiagram() {
  return (
    <svg
      viewBox="8 98 544 146"
      role="img"
      aria-labelledby="pipeline-title pipeline-desc"
      className="block h-auto w-full"
    >
      <title id="pipeline-title">The idea-to-ship delivery pipeline</title>
      <desc id="pipeline-desc">
        A four-stage pipeline: Idea, then Architecture via a discovery call, then Build using RAG
        and Next.js, then Ship through CI/CD - architected and built by one person, with no bench
        and no handoffs.
      </desc>

      <g aria-hidden="true" fontFamily="var(--font-mono)">
        {CONNECTORS.map((c) => (
          <g key={c.label}>
            <line
              x1={c.x1}
              y1="150"
              x2={c.x2}
              y2="150"
              stroke="var(--color-blueprint-light)"
              strokeWidth="1.6"
              className="draw"
              style={{ animationDelay: c.delay }}
            />
            <text
              x={c.cx}
              y="110"
              fill="var(--color-inverse)"
              fillOpacity="0.6"
              fontSize="9"
              letterSpacing="0.5"
              textAnchor="middle"
            >
              {c.label.toUpperCase()}
            </text>
          </g>
        ))}

        {NODES.map((n) => (
          <g key={n.num}>
            <rect
              x={n.x}
              y="120"
              width={n.w}
              height="60"
              rx="3"
              fill="var(--color-inverse)"
              fillOpacity="0.03"
              stroke="var(--color-blueprint-light)"
              strokeWidth="1.2"
            />
            <text
              x={n.cx}
              y="141"
              fill="var(--color-inverse)"
              fontSize="10"
              letterSpacing="0.5"
              textAnchor="middle"
            >
              {n.label.toUpperCase()}
            </text>
            <text
              x={n.cx}
              y="157"
              fill="var(--color-inverse)"
              fillOpacity="0.6"
              fontSize="8"
              textAnchor="middle"
            >
              {n.num}
            </text>
          </g>
        ))}

        <text
          x="280"
          y="230"
          fill="var(--color-inverse)"
          fillOpacity="0.55"
          fontSize="10"
          letterSpacing="1"
          textAnchor="middle"
        >
          ARCHITECTED &amp; BUILT BY ONE PERSON - NO BENCH, NO HANDOFFS
        </text>
      </g>
    </svg>
  );
}
