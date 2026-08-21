import VisitsContent from "@/components/visits/visits-content";
import VisitsSkeleton from "@/components/visits/visits-skeleton";
import { getVisitsSnapshot } from "@/lib/visits";

export default async function VisitsDashboard() {
  const data = await getVisitsSnapshot();

  // Skeleton stays in the tree so `npx boneyard-js build` can capture the fixture.
  return (
    <VisitsSkeleton loading={false}>
      <VisitsContent data={data} />
    </VisitsSkeleton>
  );
}
