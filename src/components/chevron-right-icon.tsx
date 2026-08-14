"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";

const VARIANTS: Variants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

type Props = {
  size?: number;
  className?: string;
  /** When true (e.g. parent row hovered), play the chevron nudge. */
  active?: boolean;
};

export default function ChevronRightIcon({
  size = 14,
  className = "",
  active = false,
}: Readonly<Props>) {
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
        <motion.path
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
          variants={VARIANTS}
          animate={active ? "animate" : "normal"}
        />
      </svg>
    </span>
  );
}
