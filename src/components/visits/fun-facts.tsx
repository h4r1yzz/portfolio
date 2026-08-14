import type { VisitsSnapshot } from "@/lib/visits-types";

type Props = {
  data: VisitsSnapshot;
};

export default function FunFacts({ data }: Props) {
  const facts = [
    {
      label: "Countries",
      value: String(data.countriesReached),
      sub: "across the map",
    },
    {
      label: "Busiest day",
      value: data.busiestDay ? String(data.busiestDay.visits) : "—",
      sub: data.busiestDay?.date ?? "last 30 days",
    },
    {
      label: "Farthest",
      value: data.farthest ? `${data.farthest.km.toLocaleString()} km` : "—",
      sub: data.farthest?.country ?? "approximate",
    },
    {
      label: "Top referrer",
      value: data.topReferrer?.name ?? "—",
      sub: data.topReferrer
        ? `${data.topReferrer.visits.toLocaleString()} visits`
        : "direct / unknown",
    },
    {
      label: "Mobile",
      value: `${data.devices.mobilePct}%`,
      sub: `${data.devices.desktopPct}% desktop`,
    },
    {
      label: "Total",
      value: data.totalVisits.toLocaleString(),
      sub: "tracked visits",
    },
  ];

  return (
    <div className="visits-facts">
      <h2 className="visits-section-label">Fun facts</h2>
      <div className="visits-facts__grid">
        {facts.map((fact) => (
          <div key={fact.label} className="visits-fact">
            <p className="visits-fact__label">{fact.label}</p>
            <p className="visits-fact__value">{fact.value}</p>
            <p className="visits-fact__sub">{fact.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
