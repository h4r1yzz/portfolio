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
  badge?: string;
};

export default function ProjectRow({
  id,
  year,
  title,
  summary,
  href,
  image,
  badge,
}: Readonly<Props>) {
  const [hovered, setHovered] = useState(false);
  const comingSoon = Boolean(badge) || href === "#";
  const isExternal = !comingSoon && href.startsWith("http");
  const target = isExternal ? href : `/projects#${id}`;

  const body = (
    <>
      {image && (
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
      )}
      <span className="project-row__year">{year}</span>
      <span className="project-row__heading">
        <span className="link-title">{title}</span>
        {badge && <span className="project-row__badge">{badge}</span>}
        {!comingSoon && (
          <ExternalLinkIcon
            className="project-row__icon"
            size={14}
            active={hovered}
          />
        )}
      </span>
      <span className="project-row__summary">{summary}</span>
    </>
  );

  const hoverProps = comingSoon
    ? {}
    : {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onFocus: () => setHovered(true),
        onBlur: () => setHovered(false),
      };

  if (comingSoon) {
    return <div className="project-row project-row--soon">{body}</div>;
  }

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
