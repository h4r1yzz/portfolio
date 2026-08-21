import { LuCalendar, LuEye, LuGlobe, LuNavigation } from "react-icons/lu";
import FunFacts from "@/components/visits/fun-facts";
import RankBars from "@/components/visits/rank-bars";
import StatCard from "@/components/visits/stat-card";
import VisitsChart from "@/components/visits/visits-chart";
import VisitsMap from "@/components/visits/visits-map";
import { pageLabel } from "@/lib/visits-format";
import type { VisitsSnapshot } from "@/lib/visits-types";

type Props = {
  data: VisitsSnapshot;
  /** Skip MapLibre so boneyard can capture a stable layout. */
  capture?: boolean;
};

export default function VisitsContent({ data, capture = false }: Readonly<Props>) {
  const lastFrom = data.lastVisitor
    ? `Last from ${[data.lastVisitor.city, data.lastVisitor.country]
        .filter(Boolean)
        .join(" · ")}`
    : "No sessions yet";

  return (
    <>
      {!data.configured && (
        <p className="visits-notice">Tracking starting up…</p>
      )}

      <section className="visits-hero">
        {capture ? (
          <div className="visits-map" aria-hidden />
        ) : (
          <VisitsMap countries={data.countries} />
        )}
        <div className="visits-hero__rail">
          <StatCard
            icon={LuEye}
            label="Total visits"
            value={data.totalVisits.toLocaleString()}
            sub={lastFrom}
          />
          <StatCard
            icon={LuGlobe}
            label="Countries"
            value={data.countriesReached.toLocaleString()}
            sub="Across the map"
          />
          <StatCard
            icon={LuCalendar}
            label="Busiest day"
            value={data.busiestDay?.date ?? "—"}
            sub={
              data.busiestDay
                ? `${data.busiestDay.visits.toLocaleString()} visits`
                : "Last 30 days"
            }
          />
          <StatCard
            icon={LuNavigation}
            label="Farthest"
            value={data.farthest ? `${data.farthest.km.toLocaleString()} km` : "—"}
            sub={data.farthest?.country ?? "Approximate"}
          />
        </div>
      </section>

      <FunFacts data={data} />
      <VisitsChart series={data.series30d} />
      <RankBars
        countries={data.countries.map((c) => ({
          label: c.name,
          visits: c.visits,
          code: c.code,
        }))}
        pages={data.pages.map((p) => ({
          label: pageLabel(p.path),
          visits: p.visits,
        }))}
      />
    </>
  );
}
