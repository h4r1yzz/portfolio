import Link from "next/link";

type Props = {
  label: string;
  title: string;
};

export default function PageHeader({ label, title }: Props) {
  return (
    <header className="mb-6">
      <Link
        href="/"
        className="text-sm text-muted no-underline hover:text-foreground transition-colors"
      >
        ← Harry Chandra
      </Link>
      <p className="section-label mt-6 mb-0">{label}</p>
      <h1 className="mt-2 text-[32px] leading-tight font-medium tracking-tight">
        {title}
      </h1>
    </header>
  );
}
