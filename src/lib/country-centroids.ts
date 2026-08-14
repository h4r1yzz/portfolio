import centroids from "@/data/country-centroids.json";

export type CountryCentroid = {
  code: string;
  name: string;
  lat: number;
  lng: number;
};

export const countryCentroids = centroids as CountryCentroid[];

export const centroidByCode = new Map(
  countryCentroids.map((c) => [c.code.toUpperCase(), c]),
);
