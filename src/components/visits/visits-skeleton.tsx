"use client";

import { Skeleton } from "boneyard-js/react";
import VisitsContent from "@/components/visits/visits-content";
import { VISITS_FIXTURE } from "@/components/visits/visits-fixture";
import visitsBones from "@/bones/visits-dashboard.bones.json";

type Props = {
  /** When true, show the skeleton; when false, render children. */
  loading?: boolean;
  children?: React.ReactNode;
};

const fixture = <VisitsContent data={VISITS_FIXTURE} capture />;

export default function VisitsSkeleton({
  loading = true,
  children = null,
}: Readonly<Props>) {
  return (
    <div className="visits-skeleton dark">
      <Skeleton
        name="visits-dashboard"
        loading={loading}
        initialBones={visitsBones}
        select="viewport"
        color="#1c1c1c"
        darkColor="#1c1c1c"
        animate="shimmer"
        fixture={fixture}
      >
        {/*
          Boneyard overlays bones with position:absolute. If children are null while
          loading, the container height is 0 and nothing is visible. Keep the fixture
          mounted (visibility:hidden under the overlay) so the box keeps its height.
        */}
        {loading ? fixture : children}
      </Skeleton>
    </div>
  );
}
