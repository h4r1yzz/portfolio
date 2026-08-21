// Run with: node src/lib/visits-format.check.ts
import assert from "node:assert/strict";
import { CHART, chartGeometry, flagEmoji, niceMax, pageLabel } from "./visits-format.ts";

assert.equal(niceMax(0), 2);
assert.equal(niceMax(1), 2);
assert.equal(niceMax(7), 8);
assert.equal(niceMax(10), 10);
assert.equal(niceMax(37), 40);
assert.equal(niceMax(42), 50);
assert.ok(Number.isInteger(niceMax(120) / 2), "midpoint tick stays whole");

const one = chartGeometry([{ date: "2026-08-14", visits: 1 }]);
assert.equal(one.points.length, 2, "single day is duplicated");
assert.equal(one.points[0].y, one.points[1].y, "single day renders flat");
assert.equal(one.points[0].x, CHART.pad.left);
assert.equal(one.points[1].x, CHART.width - CHART.pad.right);
assert.equal(one.xLabels.length, 1, "repeated day is labelled once");

const month = Array.from({ length: 30 }, (_, i) => ({
  date: `2026-07-${String(i + 1).padStart(2, "0")}`,
  visits: i === 9 ? 42 : i,
}));
const many = chartGeometry(month);
assert.equal(many.peak.visits, 42);
assert.equal(many.peak.date, "2026-07-10");
assert.equal(many.maxY, 50);
assert.ok(many.xLabels.length <= 6, "at most ~5 date labels");
assert.equal(
  new Set(many.xLabels.map((p) => p.date)).size,
  many.xLabels.length,
  "date labels are unique",
);
assert.equal(many.points[0].y, many.baseline, "zero sits on the baseline");
assert.ok(many.area.startsWith(`${CHART.pad.left},${many.baseline}`));

assert.equal(pageLabel("/"), "home");
assert.equal(pageLabel(""), "home");
assert.equal(pageLabel("/photos"), "photos");
assert.equal(pageLabel("/visits/"), "analytic");
assert.equal(pageLabel("/projects"), "projects");

assert.equal(flagEmoji("sg"), "\u{1F1F8}\u{1F1EC}");
assert.equal(flagEmoji("MY"), "\u{1F1F2}\u{1F1FE}");
assert.equal(flagEmoji(undefined), null);
assert.equal(flagEmoji("XYZ"), null);
assert.equal(flagEmoji("/photos"), null);

console.log("visits-format: all checks passed");
