import {
  CHART,
  chartGeometry,
  shortDate,
  type ChartPoint,
} from "@/lib/visits-format";

type Props = {
  series: ChartPoint[];
};

export default function VisitsChart({ series }: Readonly<Props>) {
  if (series.length === 0) {
    return (
      <section className="visits-chart">
        <p className="visits-chart__label">Visits · last 30 days</p>
        <div className="visits-chart__empty">No visits yet</div>
      </section>
    );
  }

  const { width, height, pad } = CHART;
  const { baseline, maxY, line, area, yTicks, xLabels, peak } =
    chartGeometry(series);

  return (
    <section className="visits-chart">
      <p className="visits-chart__label">Visits · last 30 days</p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="visits-chart__svg"
        role="img"
        aria-label={`Visits over the last ${series.length} days, peaking at ${peak.visits} on ${peak.date}`}
      >
        <defs>
          <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => {
          const y = baseline - (tick / maxY) * (baseline - pad.top);
          return (
            <g key={tick}>
              <line
                x1={pad.left}
                x2={width - pad.right}
                y1={y}
                y2={y}
                className="visits-chart__grid"
              />
              <text
                x={pad.left - 8}
                y={y + 3.5}
                textAnchor="end"
                className="visits-chart__axis"
              >
                {Number.isInteger(tick) ? tick : tick.toFixed(1)}
              </text>
            </g>
          );
        })}

        <polygon points={area} fill="url(#visitsFill)" />
        <polyline points={line} className="visits-chart__line" fill="none" />
        <circle cx={peak.x} cy={peak.y} r={3.5} className="visits-chart__peak" />

        {xLabels.map((p) => (
          <text
            key={p.date}
            x={p.x}
            y={height - 8}
            textAnchor="middle"
            className="visits-chart__axis"
          >
            {shortDate(p.date)}
          </text>
        ))}
      </svg>
    </section>
  );
}
