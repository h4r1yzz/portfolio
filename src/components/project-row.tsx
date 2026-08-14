"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ExternalLinkIcon from "@/components/external-link-icon";

type Props = {
  id: string;
  year: string;
  title: string;
  summary: string;
  href: string;
  image: string;
};

export default function ProjectRow({
  id,
  year,
  title,
  summary,
  href,
  image,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith("http");
  const target = isExternal ? href : `/projects#${id}`;

  const body = (
    <>
      <div className="project-row__preview" aria-hidden="true">
        <Image
          src={image}
          alt=""
          width={320}
          height={200}
          unoptimized
          className="project-row__preview-img"
        />
      </div>
      <span className="project-row__year">{year}</span>
      <span className="project-row__heading">
        <span className="link-title">{title}</span>
        <ExternalLinkIcon
          className="project-row__icon"
          size={14}
          active={hovered}
        />
      </span>
      <span className="project-row__summary">{summary}</span>
    </>
  );

  const hoverProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  if (isExternal) {
    return (
      <a
        href={target}
        className="project-row"
        target="_blank"
        rel="noopener noreferrer"
        {...hoverProps}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={target} className="project-row" {...hoverProps}>
      {body}
    </Link>
  );
}
