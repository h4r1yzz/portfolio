type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ title, children, className = "" }: Props) {
  return (
    <section className={`section-gap ${className}`}>
      <h2 className="section-label">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
