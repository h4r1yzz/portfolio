import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import FunFacts from "@/components/visits/fun-facts";
import RankBars from "@/components/visits/rank-bars";
import VisitsChart from "@/components/visits/visits-chart";
import VisitsMap from "@/components/visits/visits-map";
import VisitsRefresh from "@/components/visits/visits-refresh";
import { getVisitsSnapshot } from "@/lib/visits";

export default async function VisitsPage() {
  const data = await getVisitsSnapshot();

  const lastLine = data.lastVisitor
    ? `${data.totalVisits.toLocaleString()} visits · last from ${[
        data.lastVisitor.city,
        data.lastVisitor.country,
      ]
        .filter(Boolean)
        .join(" · ")}`
    : `${data.totalVisits.toLocaleString()} tracked visits`;

  return (
    <main className="page">
      <VisitsRefresh />
      <PageHeader label="Analytics" title="Visits" />
      <p className="visits-subtitle">
        A live map of where people land on this site.
      </p>

      {!data.configured && (
        <p className="visits-notice">Tracking starting up…</p>
      )}

      <section className="visits-map-wrap">
        <VisitsMap countries={data.countries} />
        <p className="visits-total">{lastLine}</p>
      </section>

      <FunFacts data={data} />
      <VisitsChart series={data.series30d} />
      <RankBars
        countries={data.countries.map((c) => ({
          label: c.name,
          visits: c.visits,
        }))}
        pages={data.pages.map((p) => ({ label: p.path, visits: p.visits }))}
      />

      <Footer />
    </main>
  );
}
