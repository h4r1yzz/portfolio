type Row = { label: string; visits: number };

type Props = {
  countries: Row[];
  pages: Row[];
};

function BarList({ title, rows }: { title: string; rows: Row[] }) {
  const max = Math.max(...rows.map((r) => r.visits), 1);
  const top = rows.slice(0, 8);

  return (
    <div className="visits-ranks__col">
      <h3 className="visits-ranks__title">{title}</h3>
      <ul className="visits-ranks__list">
        {top.length === 0 ? (
          <li className="visits-ranks__empty">—</li>
        ) : (
          top.map((row) => (
            <li key={row.label} className="visits-ranks__row">
              <span className="visits-ranks__label">{row.label}</span>
              <span className="visits-ranks__bar-wrap">
                <span
                  className="visits-ranks__bar"
                  style={{ width: `${(row.visits / max) * 100}%` }}
                />
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default function RankBars({ countries, pages }: Props) {
  return (
    <div className="visits-ranks">
      <BarList
        title="Top countries"
        rows={countries.map((c) => ({ label: c.label, visits: c.visits }))}
      />
      <BarList
        title="Top pages"
        rows={pages.map((p) => ({ label: p.label, visits: p.visits }))}
      />
    </div>
  );
}
