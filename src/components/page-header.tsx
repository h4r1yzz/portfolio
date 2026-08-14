"use client";

import Link from "next/link";
import { useState } from "react";
import ArrowLongLeftIcon from "@/components/arrow-long-left-icon";

type Props = {
  label: string;
  title: string;
};

export default function PageHeader({ label, title }: Readonly<Props>) {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted no-underline hover:text-foreground transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <ArrowLongLeftIcon size={14} active={hovered} />
        Harry Chandra
      </Link>
      <p className="section-label mt-6 mb-0">{label}</p>
      <h1 className="mt-2 text-[32px] leading-tight font-medium tracking-tight">
        {title}
      </h1>
    </header>
  );
}
