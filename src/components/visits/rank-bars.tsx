import { flagEmoji } from "@/lib/visits-format";

type Row = { label: string; visits: number; code?: string };

type Props = {
  countries: Row[];
  pages: Row[];
};

function BarList({
  title,
  unit,
  rows,
}: Readonly<{ title: string; unit: string; rows: Row[] }>) {
  const max = Math.max(...rows.map((r) => r.visits), 1);
  const top = rows.slice(0, 8);

  return (
    <div className="visits-ranks__col">
      <p className="visits-ranks__title">{title}</p>
      <div className="visits-ranks__head">
        <span>{unit}</span>
        <span className="visits-ranks__head-right">Visits</span>
      </div>
      {top.length === 0 ? (
        <p className="visits-ranks__empty">No data yet</p>
      ) : (
        <ol className="visits-ranks__list">
          {top.map((row, i) => {
            const flag = flagEmoji(row.code);
            return (
              <li key={row.label} className="visits-ranks__row">
                <span className="visits-ranks__rank">{i + 1}</span>
                <span className="visits-ranks__label">
                  {flag && (
                    <span className="visits-ranks__flag" aria-hidden>
                      {flag}
                    </span>
                  )}
                  {row.label}
                </span>
                <span className="visits-ranks__bar-wrap">
                  <span
                    className="visits-ranks__bar"
                    style={{ width: `${(row.visits / max) * 100}%` }}
                  />
                </span>
                <span className="visits-ranks__count">
                  {row.visits.toLocaleString()}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

export default function RankBars({ countries, pages }: Readonly<Props>) {
  return (
    <div className="visits-ranks">
      <BarList title="Top countries" unit="Country" rows={countries} />
      <BarList title="Top pages" unit="Page" rows={pages} />
    </div>
  );
}
