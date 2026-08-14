import centroids from "@/data/country-centroids.json";

type CountryCentroid = {
  code: string;
  name: string;
  lat: number;
  lng: number;
};

const countryCentroids = centroids as CountryCentroid[];

export const centroidByCode = new Map(
  countryCentroids.map((c) => [c.code.toUpperCase(), c]),
);
