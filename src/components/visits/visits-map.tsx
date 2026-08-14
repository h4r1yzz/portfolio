"use client";

import { useEffect, useRef } from "react";
import type { Map, Popup } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { VisitsSnapshot } from "@/lib/visits-types";
import { centroidByCode } from "@/lib/country-centroids";

type Props = {
  countries: VisitsSnapshot["countries"];
};

const STYLE =
  process.env.NEXT_PUBLIC_MAP_STYLE_URL ??
  "https://tiles.openfreemap.org/styles/dark";

const ACCENT = "#c8ff00";

const radius = (min: number, max: number) =>
  [
    "interpolate",
    ["linear"],
    ["sqrt", ["get", "visits"]],
    1,
    min,
    20,
    max,
  ] as unknown as never;

export default function VisitsMap({ countries }: Readonly<Props>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const popupRef = useRef<Popup | null>(null);

  // ponytail: serialized deps so the 60s refresh only rebuilds the map when the numbers change.
  const key = JSON.stringify(countries.map((c) => [c.code, c.visits]));

  useEffect(() => {
    if (!containerRef.current) return;

    const rows = (JSON.parse(key) as [string, number][]).map(
      ([code, visits]) => ({ code, visits }),
    );

    let cancelled = false;

    void import("maplibre-gl").then(
      ({ Map: MapLibreMap, NavigationControl: NavControl, Popup: MapPopup }) => {
        if (cancelled || !containerRef.current) return;

        const features = rows
          .map((c) => {
            const meta = centroidByCode.get(c.code.toUpperCase());
            if (!meta) return null;
            return {
              type: "Feature" as const,
              geometry: {
                type: "Point" as const,
                coordinates: [meta.lng, meta.lat] as [number, number],
              },
              properties: { visits: Number(c.visits) || 0, name: meta.name },
            };
          })
          .filter((f): f is NonNullable<typeof f> => f != null);

        const top = features.reduce<(typeof features)[number] | null>(
          (best, f) => (!best || f.properties.visits > best.properties.visits ? f : best),
          null,
        );

        const map = new MapLibreMap({
          container: containerRef.current,
          style: STYLE,
          center: top?.geometry.coordinates ?? [20, 20],
          zoom: features.length === 1 ? 3.4 : 1.2,
          attributionControl: false,
        });

        map.addControl(new NavControl({ showCompass: false }), "bottom-right");
        mapRef.current = map;

        const onReady = () => {
          map.resize();

          if (map.getSource("visits")) return;

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
            id: "visits-glow",
            type: "circle",
            source: "visits",
            paint: {
              "circle-color": ACCENT,
              "circle-opacity": 0.25,
              "circle-blur": 1,
              "circle-radius": radius(26, 60),
            },
          });

          map.addLayer({
            id: "clusters",
            type: "circle",
            source: "visits",
            filter: ["has", "point_count"],
            paint: {
              "circle-color": ACCENT,
              "circle-opacity": 0.95,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#0a0a0a",
              "circle-radius": radius(13, 34),
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
            paint: { "text-color": "#0a0a0a" },
          });

          map.addLayer({
            id: "unclustered",
            type: "circle",
            source: "visits",
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-color": ACCENT,
              "circle-opacity": 0.95,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#0a0a0a",
              "circle-radius": radius(8, 20),
            },
          });

          if (top && !popupRef.current) {
            const { name, visits } = top.properties;
            popupRef.current = new MapPopup({
              closeButton: false,
              closeOnClick: false,
              className: "visits-popup",
              offset: 18,
              focusAfterOpen: false,
            })
              .setLngLat(top.geometry.coordinates)
              .setHTML(
                `<span class="visits-popup__name">${name}</span><span class="visits-popup__value">${visits.toLocaleString()}</span><span class="visits-popup__unit">${
                  visits === 1 ? "visit" : "visits"
                }</span>`,
              )
              .addTo(map);
          }
        };

        map.on("load", onReady);
        // ponytail: style/tile flakiness sometimes skips a clean load; idle covers late layout.
        map.once("idle", () => {
          map.resize();
          onReady();
        });
      },
    );

    return () => {
      cancelled = true;
      popupRef.current?.remove();
      popupRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [key]);

  return <div ref={containerRef} className="visits-map" />;
}
