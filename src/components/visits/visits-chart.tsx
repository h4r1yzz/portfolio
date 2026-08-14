type Point = { date: string; visits: number };

type Props = {
  series: Point[];
};

export default function VisitsChart({ series }: Props) {
  if (series.length === 0) {
    return (
      <div className="visits-chart">
        <h2 className="visits-section-label">Last 30 days</h2>
        <div className="visits-chart__empty">No visits yet</div>
      </div>
    );
  }

  const width = 640;
  const height = 160;
  const pad = { top: 12, right: 8, bottom: 24, left: 8 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const maxY = Math.max(...series.map((p) => p.visits), 1);

  const points = series.map((p, i) => {
    const x = pad.left + (i / Math.max(series.length - 1, 1)) * innerW;
    const y = pad.top + innerH - (p.visits / maxY) * innerH;
    return { x, y };
  });

  const line = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="visits-chart">
      <h2 className="visits-section-label">Last 30 days</h2>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="visits-chart__svg"
        aria-hidden
      >
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line
            key={t}
            x1={pad.left}
            x2={width - pad.right}
            y1={pad.top + innerH * (1 - t)}
            y2={pad.top + innerH * (1 - t)}
            className="visits-chart__grid"
          />
        ))}
        <polyline points={line} className="visits-chart__line" fill="none" />
      </svg>
    </div>
  );
}
