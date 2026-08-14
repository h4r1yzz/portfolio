const REVALIDATE = 60;

type UmamiConfig = {
  apiUrl: string;
  username: string;
  password: string;
  websiteId: string;
  timezone: string;
  homeLat: number;
  homeLng: number;
};

export type ExpandedMetric = {
  name: string;
  pageviews: number;
  visitors: number;
  visits: number;
  bounces: number;
  totaltime: number;
};

export type UmamiStats = {
  pageviews: number;
  visitors: number;
  visits: number;
  bounces: number;
  totaltime: number;
};

export type UmamiSession = {
  country?: string;
  city?: string;
  lastAt?: string;
};

export type UmamiDateRange = {
  startDate: string;
  endDate: string;
};

export type UmamiPageviewsSeries = {
  pageviews: { x: string; y: number }[];
  sessions: { x: string; y: number }[];
};

export function getUmamiConfig(): UmamiConfig | null {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const apiUrl = process.env.UMAMI_API_URL;
  const username = process.env.UMAMI_USERNAME;
  const password = process.env.UMAMI_PASSWORD;
  if (!websiteId || !apiUrl || !username || !password) return null;

  return {
    apiUrl: apiUrl.replace(/\/$/, ""),
    username,
    password,
    websiteId,
    timezone: process.env.VISITS_TIMEZONE ?? "Asia/Hong_Kong",
    homeLat: Number(process.env.VISITS_HOME_LAT ?? "3.139"),
    homeLng: Number(process.env.VISITS_HOME_LNG ?? "101.6869"),
  };
}

// ponytail: module token cache is fine on serverless; ceiling = cold starts re-login. Upgrade: short-lived Redis/KV if auth becomes hot.
let tokenCache: { key: string; token: string; expiresAt: number } | null = null;

async function login(config: UmamiConfig): Promise<string> {
  const key = `${config.apiUrl}:${config.username}`;
  if (tokenCache && tokenCache.key === key && tokenCache.expiresAt > Date.now()) {
    return tokenCache.token;
  }

  const res = await fetch(`${config.apiUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: config.username,
      password: config.password,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Umami login: ${res.status}`);
  }

  const data = (await res.json()) as { token?: string };
  if (!data.token) throw new Error("Umami login: missing token");

  tokenCache = {
    key,
    token: data.token,
    expiresAt: Date.now() + REVALIDATE * 1000,
  };

  return data.token;
}

async function umamiFetch<T>(
  path: string,
  params?: Record<string, string | number>,
): Promise<T> {
  const config = getUmamiConfig();
  if (!config) throw new Error("Umami not configured");

  const token = await login(config);
  const url = new URL(`${config.apiUrl}${path}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, String(v));
    }
  }

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    throw new Error(`Umami ${path}: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

function websitePath(suffix: string, config: UmamiConfig) {
  return `/websites/${config.websiteId}${suffix}`;
}

export async function fetchDateRange(config: UmamiConfig) {
  return umamiFetch<UmamiDateRange>(websitePath("/daterange", config));
}

export async function fetchStats(config: UmamiConfig, startAt: number, endAt: number) {
  return umamiFetch<UmamiStats>(websitePath("/stats", config), { startAt, endAt });
}

export async function fetchExpandedMetrics(
  config: UmamiConfig,
  type: string,
  startAt: number,
  endAt: number,
  limit = 500,
) {
  return umamiFetch<ExpandedMetric[]>(websitePath("/metrics/expanded", config), {
    type,
    startAt,
    endAt,
    limit,
  });
}

export async function fetchPageviewsSeries(
  config: UmamiConfig,
  startAt: number,
  endAt: number,
) {
  return umamiFetch<UmamiPageviewsSeries>(websitePath("/pageviews", config), {
    startAt,
    endAt,
    unit: "day",
    timezone: config.timezone,
  });
}

type SessionsResponse = {
  data: UmamiSession[];
};

export async function fetchLatestSession(config: UmamiConfig, startAt: number, endAt: number) {
  const res = await umamiFetch<SessionsResponse>(websitePath("/sessions", config), {
    startAt,
    endAt,
    page: 1,
    pageSize: 50,
  });
  const sorted = [...(res.data ?? [])].sort(
    (a, b) => new Date(b.lastAt ?? 0).getTime() - new Date(a.lastAt ?? 0).getTime(),
  );
  return sorted[0];
}

export function msRange(start: Date, end: Date) {
  return { startAt: start.getTime(), endAt: end.getTime() };
}

export function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}
