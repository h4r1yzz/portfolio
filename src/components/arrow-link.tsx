"use client";

import Link from "next/link";
import { useState } from "react";
import ExternalLinkIcon from "@/components/external-link-icon";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ArrowLink({
  href,
  children,
  className = "",
}: Readonly<Props>) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`arrow-link inline-flex items-center gap-1.5 no-underline ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <span className="link-title">{children}</span>
      <ExternalLinkIcon
        className="arrow-link__icon text-accent"
        size={14}
        active={hovered}
      />
    </Link>
  );
}
