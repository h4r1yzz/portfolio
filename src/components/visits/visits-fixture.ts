import type { VisitsSnapshot } from "@/lib/visits-types";

/** Representative layout data for boneyard bone capture — never shown in production. */
export const VISITS_FIXTURE: VisitsSnapshot = {
  configured: true,
  totalVisits: 1284,
  lastVisitor: {
    countryCode: "SG",
    country: "Singapore",
    city: "Singapore",
  },
  series30d: Array.from({ length: 30 }, (_, i) => ({
    date: `2026-07-${String(i + 1).padStart(2, "0")}`,
    visits: [2, 5, 3, 8, 4, 6, 9, 3, 5, 7, 4, 8, 6, 2, 5, 7, 9, 4, 6, 8, 3, 5, 7, 4, 6, 8, 5, 3, 7, 4][i] ?? 3,
  })),
  countries: [
    { code: "SG", name: "Singapore", visits: 42 },
    { code: "MY", name: "Malaysia", visits: 28 },
    { code: "HK", name: "Hong Kong", visits: 19 },
    { code: "US", name: "United States", visits: 14 },
    { code: "JP", name: "Japan", visits: 9 },
  ],
  pages: [
    { path: "/", visits: 80 },
    { path: "/photos", visits: 36 },
    { path: "/visits", visits: 24 },
    { path: "/projects", visits: 18 },
    { path: "/about", visits: 12 },
  ],
  devices: { mobilePct: 38, desktopPct: 62 },
  busiestDay: { date: "2026-07-18", visits: 9 },
  farthest: { country: "United States", km: 15_120, approximate: true },
  countriesReached: 5,
};
