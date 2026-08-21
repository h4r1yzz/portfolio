export type VisitsSnapshot = {
  configured: boolean;
  totalVisits: number;
  lastVisitor?: {
    countryCode: string;
    country: string;
    city?: string;
  };
  series30d: { date: string; visits: number }[];
  countries: { code: string; name: string; visits: number }[];
  pages: { path: string; visits: number }[];
  devices: { mobilePct: number; desktopPct: number; tabletPct?: number };
  busiestDay?: { date: string; visits: number };
  farthest?: { country: string; km: number; approximate: true };
  countriesReached: number;
};

export const emptyVisitsSnapshot = (): VisitsSnapshot => ({
  configured: false,
  totalVisits: 0,
  series30d: [],
  countries: [],
  pages: [],
  devices: { mobilePct: 0, desktopPct: 0 },
  countriesReached: 0,
});
