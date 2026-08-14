import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  value: string;
  sub?: string;
};

export default function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: Readonly<Props>) {
  return (
    <div className="visits-stat">
      <p className="visits-stat__label">
        <Icon size={13} aria-hidden />
        {label}
      </p>
      <p className="visits-stat__value">{value}</p>
      {sub && <p className="visits-stat__sub">{sub}</p>}
    </div>
  );
}
