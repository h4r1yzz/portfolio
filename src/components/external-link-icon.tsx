"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";

const ARROW_VARIANTS: Variants = {
  normal: {
    scale: 1,
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, -2, 0],
    originX: 1,
    originY: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

type Props = {
  size?: number;
  className?: string;
  /** When true (e.g. parent row hovered), play the arrow nudge. */
  active?: boolean;
};

export default function ExternalLinkIcon({
  size = 14,
  className = "",
  active = false,
}: Props) {
  return (
    <span className={className} aria-hidden>
      <svg
        fill="none"
        height={size}
        width={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5" />
        <motion.path
          d="M7.5 16.5L21 3m0 0h-5.25M21 3v5.25"
          variants={ARROW_VARIANTS}
          animate={active ? "animate" : "normal"}
        />
      </svg>
    </span>
  );
}
