import Link from "next/link";

type Props = {
  title: string;
  meta: string;
  href: string;
  external?: boolean;
  layout?: "stack" | "row";
};

export default function EditorialLink({
  title,
  meta,
  href,
  external,
  layout = "stack",
}: Props) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");
  const isMailto = href.startsWith("mailto:");
  const isPlaceholder = href === "#";
  const className = `editorial-link${layout === "row" ? " editorial-link--row" : ""}`;

  const body = (
    <>
      <span className="link-title">{title}</span>
      <span className="meta">{meta}</span>
    </>
  );

  if (isPlaceholder) {
    return <div className={className}>{body}</div>;
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        {...(!isMailto && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
