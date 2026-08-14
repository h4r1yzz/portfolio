"use client";

import { useEffect, useRef } from "react";
import type { Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { VisitsSnapshot } from "@/lib/visits-types";
import { centroidByCode } from "@/lib/country-centroids";

type Props = {
  countries: VisitsSnapshot["countries"];
};

const STYLE =
  process.env.NEXT_PUBLIC_MAP_STYLE_URL ??
  "https://tiles.openfreemap.org/styles/dark";

export default function VisitsMap({ countries }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    void import("maplibre-gl").then(({ Map: MapLibreMap, NavigationControl: NavControl }) => {
      if (cancelled || !containerRef.current) return;

      const features = countries
        .map((c) => {
          const meta = centroidByCode.get(c.code.toUpperCase());
          if (!meta) return null;
          return {
            type: "Feature" as const,
            geometry: {
              type: "Point" as const,
              coordinates: [meta.lng, meta.lat],
            },
            properties: { visits: c.visits, name: meta.name },
          };
        })
        .filter(Boolean);

      const map = new MapLibreMap({
        container: containerRef.current,
        style: STYLE,
        center: [20, 20],
        zoom: 1.2,
        attributionControl: false,
      });

      map.addControl(new NavControl({ showCompass: false }), "bottom-right");
      mapRef.current = map;

      map.on("load", () => {
        map.addSource("visits", {
          type: "geojson",
          data: { type: "FeatureCollection", features },
          cluster: true,
          clusterMaxZoom: 6,
          clusterRadius: 50,
          clusterProperties: {
            visits: ["+", ["get", "visits"]],
          },
        });

        map.addLayer({
          id: "clusters",
          type: "circle",
          source: "visits",
          filter: ["has", "point_count"],
          paint: {
            "circle-color": "#c8ff00",
            "circle-opacity": 0.85,
            "circle-radius": [
              "step",
              ["get", "visits"],
              14,
              50,
              20,
              200,
              28,
              500,
              36,
            ],
          },
        });

        map.addLayer({
          id: "cluster-count",
          type: "symbol",
          source: "visits",
          filter: ["has", "point_count"],
          layout: {
            "text-field": ["to-string", ["round", ["get", "visits"]]],
            "text-size": 11,
          },
          paint: {
            "text-color": "#0a0a0a",
          },
        });

        map.addLayer({
          id: "unclustered",
          type: "circle",
          source: "visits",
          filter: ["!", ["has", "point_count"]],
          paint: {
            "circle-color": "#c8ff00",
            "circle-opacity": 0.9,
            "circle-radius": [
              "step",
              ["get", "visits"],
              8,
              20,
              12,
              100,
              18,
            ],
          },
        });
      });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [countries]);

  return <div ref={containerRef} className="visits-map" aria-hidden />;
}
