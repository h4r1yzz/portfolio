export const CHART = {
  width: 720,
  height: 220,
  pad: { top: 16, right: 12, bottom: 28, left: 34 },
};

export type ChartPoint = { date: string; visits: number };

/** Axis maximum rounded up so that both it and its midpoint stay whole numbers. */
export function niceMax(value: number) {
  if (value <= 10) return Math.max(2, Math.ceil(value / 2) * 2);
  const step = 10 ** Math.floor(Math.log10(value));
  return Math.ceil(value / step) * step;
}

export function shortDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function flagEmoji(code?: string) {
  if (!code || !/^[a-z]{2}$/i.test(code)) return null;
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
  );
}

export function chartGeometry(series: ChartPoint[]) {
  const { width, height, pad } = CHART;
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;
  const baseline = pad.top + innerH;

  // ponytail: a single day is duplicated so the line stays flat instead of drawing a wedge.
  const data = series.length === 1 ? [series[0], series[0]] : series;
  const maxY = niceMax(Math.max(...data.map((p) => p.visits)));
  const stepX = innerW / (data.length - 1);

  const points = data.map((p, i) => ({
    ...p,
    x: pad.left + i * stepX,
    y: baseline - (p.visits / maxY) * innerH,
  }));

  const line = points.map((p) => `${p.x},${p.y}`).join(" ");

  // ponytail: ~5 evenly spaced date labels, deduped so a repeated day is not printed twice.
  const every = Math.max(1, Math.ceil(points.length / 5));
  const xLabels = points
    .filter((p, i) => i % every === 0 || i === points.length - 1)
    .filter((p, i, arr) => arr.findIndex((o) => o.date === p.date) === i);

  return {
    baseline,
    maxY,
    points,
    line,
    area: `${pad.left},${baseline} ${line} ${pad.left + innerW},${baseline}`,
    yTicks: [0, maxY / 2, maxY],
    xLabels,
    peak: points.reduce((best, p) => (p.visits > best.visits ? p : best)),
  };
}
