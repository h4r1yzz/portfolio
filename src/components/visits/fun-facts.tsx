import { LuFileText, LuLink, LuMonitor } from "react-icons/lu";
import StatCard from "@/components/visits/stat-card";
import type { VisitsSnapshot } from "@/lib/visits-types";
import { pageLabel } from "@/lib/visits-format";

type Props = {
  data: VisitsSnapshot;
};

export default function FunFacts({ data }: Readonly<Props>) {
  const topPage = data.pages[0];

  return (
    <div className="visits-facts">
      <div className="visits-facts__grid">
        <StatCard
          icon={LuLink}
          label="Top referrer"
          value={data.topReferrer?.name ?? "—"}
          sub={
            data.topReferrer
              ? `${data.topReferrer.visits.toLocaleString()} visits`
              : "direct / unknown"
          }
        />
        <StatCard
          icon={LuMonitor}
          label="Device"
          value={`${data.devices.mobilePct}% mobile`}
          sub={`${data.devices.desktopPct}% desktop`}
        />
        <StatCard
          icon={LuFileText}
          label="Top page"
          value={topPage ? pageLabel(topPage.path) : "—"}
          sub={topPage ? `${topPage.visits.toLocaleString()} visits` : "no data"}
        />
      </div>
    </div>
  );
}
