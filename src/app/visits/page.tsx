import { Suspense } from "react";
import { LuCalendar } from "react-icons/lu";
import Footer from "@/components/footer";
import PageHeader from "@/components/page-header";
import VisitsDashboard from "@/components/visits/visits-dashboard";
import VisitsRefresh from "@/components/visits/visits-refresh";
import VisitsSkeleton from "@/components/visits/visits-skeleton";

export default function VisitsPage() {
  return (
    <main className="page">
      <VisitsRefresh />
      <PageHeader label="Analytics" title="Analytic" />

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
            Live
          </span>
        </div>
      </div>

      <Suspense fallback={<VisitsSkeleton />}>
        <VisitsDashboard />
      </Suspense>

      <Footer />
    </main>
  );
}
