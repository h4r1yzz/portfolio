import { LuCalendar, LuEye, LuGlobe, LuNavigation } from "react-icons/lu";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import FunFacts from "@/components/visits/fun-facts";
import RankBars from "@/components/visits/rank-bars";
import StatCard from "@/components/visits/stat-card";
import VisitsChart from "@/components/visits/visits-chart";
import VisitsMap from "@/components/visits/visits-map";
import VisitsRefresh from "@/components/visits/visits-refresh";
import { getVisitsSnapshot } from "@/lib/visits";

export default async function VisitsPage() {
  const data = await getVisitsSnapshot();

  const lastFrom = data.lastVisitor
    ? `Last from ${[data.lastVisitor.city, data.lastVisitor.country]
        .filter(Boolean)
        .join(" · ")}`
    : "No sessions yet";

  return (
    <main className="page">
      <VisitsRefresh />
      <PageHeader label="Analytics" title="Visits" />

      <div className="visits-topbar">
        <p className="visits-subtitle">
          A live map of where people land on this site.
        </p>
        <div className="visits-topbar__meta">
          <span className="visits-range">
            <LuCalendar size={13} aria-hidden />
            Last 30 days
          </span>
          <span className="visits-live">
            <span className="visits-live__dot" aria-hidden />
            Live · updating now
          </span>
        </div>
      </div>

      {!data.configured && (
        <p className="visits-notice">Tracking starting up…</p>
      )}

      <section className="visits-hero">
        <VisitsMap countries={data.countries} />
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
        pages={data.pages.map((p) => ({ label: p.path, visits: p.visits }))}
      />

      <Footer />
    </main>
  );
}
