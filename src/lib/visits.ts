import { centroidByCode } from "@/lib/country-centroids";
import {
  daysAgo,
  fetchDateRange,
  fetchExpandedMetrics,
  fetchLatestSession,
  fetchPageviewsSeries,
  fetchStats,
  getUmamiConfig,
  msRange,
  type ExpandedMetric,
} from "@/lib/umami";
import {
  emptyVisitsSnapshot,
  type VisitsSnapshot,
} from "@/lib/visits-types";

function countryName(code: string, fallback?: string) {
  return centroidByCode.get(code.toUpperCase())?.name ?? fallback ?? code;
}

function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const r = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return r * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function asVisits(value: unknown) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function mapCountries(rows: ExpandedMetric[]) {
  return rows
    .map((row) => {
      const code = row.name.length === 2 ? row.name.toUpperCase() : row.name;
      const meta = centroidByCode.get(code);
      return {
        code,
        name: meta?.name ?? row.name,
        visits: asVisits(row.visits),
      };
    })
    .filter((c) => c.visits > 0)
    .sort((a, b) => b.visits - a.visits);
}

function mapPages(rows: ExpandedMetric[]) {
  return rows
    .map((row) => ({ path: row.name || "/", visits: asVisits(row.visits) }))
    .filter((p) => p.visits > 0)
    .sort((a, b) => b.visits - a.visits);
}

function devicePercents(rows: ExpandedMetric[]) {
  const totals = rows.reduce(
    (acc, row) => {
      const key = row.name.toLowerCase();
      acc[key] = (acc[key] ?? 0) + row.visits;
      acc.all += row.visits;
      return acc;
    },
    { all: 0 } as Record<string, number>,
  );

  if (totals.all === 0) return { mobilePct: 0, desktopPct: 0 };

  const mobile =
    (totals.mobile ?? 0) + (totals["mobile device"] ?? 0) + (totals.phone ?? 0);
  const tablet = totals.tablet ?? 0;
  const desktop = totals.all - mobile - tablet;

  return {
    mobilePct: Math.round((mobile / totals.all) * 100),
    desktopPct: Math.round((desktop / totals.all) * 100),
    tabletPct: tablet > 0 ? Math.round((tablet / totals.all) * 100) : undefined,
  };
}

function topReferrer(rows: ExpandedMetric[]) {
  const sorted = [...rows].sort((a, b) => b.visits - a.visits);
  const top = sorted.find((r) => r.name && r.name !== "(none)");
  return top ? { name: top.name, visits: top.visits } : undefined;
}

function busiestDay(series: { date: string; visits: number }[]) {
  if (series.length === 0) return undefined;
  return series.reduce((best, row) => (row.visits > best.visits ? row : best));
}

function farthestCountry(
  countries: { code: string; name: string; visits: number }[],
  homeLat: number,
  homeLng: number,
) {
  let best: { country: string; km: number } | undefined;

  for (const c of countries) {
    const meta = centroidByCode.get(c.code.toUpperCase());
    if (!meta) continue;
    const km = Math.round(haversineKm(homeLat, homeLng, meta.lat, meta.lng));
    if (!best || km > best.km) {
      best = { country: meta.name, km };
    }
  }

  return best ? ({ ...best, approximate: true as const }) : undefined;
}

function formatSeriesDate(iso: string, timezone: string) {
  return new Date(iso).toLocaleDateString("en-CA", { timeZone: timezone });
}

export async function getVisitsSnapshot(): Promise<VisitsSnapshot> {
  const config = getUmamiConfig();
  if (!config) return emptyVisitsSnapshot();

  try {
    const now = new Date();
    const range30Start = daysAgo(30);
    const { startAt: start30, endAt: end30 } = msRange(range30Start, now);

    const daterange = await fetchDateRange(config);
    const allStart = new Date(daterange.startDate);
    const { startAt: startAll, endAt: endAll } = msRange(allStart, now);

    const [
      stats,
      countryRows,
      pathRows,
      referrerRows,
      deviceRows,
      pageviews,
      latestSession,
    ] = await Promise.all([
      fetchStats(config, startAll, endAll),
      fetchExpandedMetrics(config, "country", startAll, endAll),
      fetchExpandedMetrics(config, "path", startAll, endAll),
      fetchExpandedMetrics(config, "referrer", startAll, endAll),
      fetchExpandedMetrics(config, "device", startAll, endAll),
      fetchPageviewsSeries(config, start30, end30),
      fetchLatestSession(config, startAll, endAll),
    ]);

    const countries = mapCountries(countryRows);
    const pages = mapPages(pathRows);

    const series30d = (pageviews.sessions ?? []).map((row) => ({
      date: formatSeriesDate(row.x, config.timezone),
      visits: asVisits(row.y),
    }));

    const lastVisitor = latestSession?.country
      ? {
          countryCode: latestSession.country,
          country: countryName(latestSession.country),
          city: latestSession.city || undefined,
        }
      : undefined;

    return {
      configured: true,
      totalVisits: asVisits(stats.visits),
      lastVisitor,
      series30d,
      countries,
      pages,
      devices: devicePercents(deviceRows),
      topReferrer: topReferrer(referrerRows),
      busiestDay: busiestDay(series30d),
      farthest: farthestCountry(countries, config.homeLat, config.homeLng),
      countriesReached: countries.length,
    };
  } catch {
    return { ...emptyVisitsSnapshot(), configured: true };
  }
}
