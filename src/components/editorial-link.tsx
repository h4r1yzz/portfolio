"use client";

import Link from "next/link";
import { useState } from "react";
import ChevronRightIcon from "@/components/chevron-right-icon";
import ExternalLinkIcon from "@/components/external-link-icon";

type Props = {
  title: string;
  meta: string;
  href: string;
  external?: boolean;
  layout?: "stack" | "row";
  /** Hover-revealed icon beside the title. */
  icon?: "chevron" | "external";
};

export default function EditorialLink({
  title,
  meta,
  href,
  external,
  layout = "stack",
  icon,
}: Readonly<Props>) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");
  const isMailto = href.startsWith("mailto:");
  const isPlaceholder = href === "#";
  const className = `editorial-link${layout === "row" ? " editorial-link--row" : ""}`;

  // Not every visitor has a mail client registered for mailto:, so also put the
  // address on the clipboard instead of letting the click do nothing.
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(href.replace(/^mailto:/, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable; the mailto default action is the only path left.
    }
  };

  const hoverProps = icon
    ? {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onFocus: () => setHovered(true),
        onBlur: () => setHovered(false),
      }
    : {};

  const trailing =
    icon === "chevron" ? (
      <ChevronRightIcon
        size={14}
        className="editorial-link__icon text-accent"
        active={hovered}
      />
    ) : icon === "external" ? (
      <ExternalLinkIcon
        size={14}
        className="editorial-link__icon text-accent"
        active={hovered}
      />
    ) : null;

  const body = (
    <>
      {trailing ? (
        <span className="editorial-link__start">
          <span className="link-title">{title}</span>
          {trailing}
        </span>
      ) : (
        <span className="link-title">{title}</span>
      )}
      <span className="meta">{copied ? "address copied" : meta}</span>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className={className} {...hoverProps}>
        {body}
      </div>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        {...hoverProps}
        {...(isMailto
          ? { onClick: copyAddress }
          : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...hoverProps}>
      {body}
    </Link>
  );
}
