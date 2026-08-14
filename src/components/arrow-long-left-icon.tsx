"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";

const ARROW_HEAD_VARIANTS: Variants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const LINE_VARIANTS: Variants = {
  normal: { d: "M3 12h18" },
  animate: {
    d: ["M3 12h18", "M6 12h15", "M3 12h18"],
    transition: {
      duration: 0.4,
    },
  },
};

type Props = {
  size?: number;
  className?: string;
  /** When true (e.g. parent link hovered), play the arrow nudge. */
  active?: boolean;
};

export default function ArrowLongLeftIcon({
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
          d="M6.75 15.75 3 12m0 0 3.75-3.75"
          variants={ARROW_HEAD_VARIANTS}
          animate={active ? "animate" : "normal"}
        />
        <motion.path
          d="M3 12h18"
          variants={LINE_VARIANTS}
          animate={active ? "animate" : "normal"}
        />
      </svg>
    </span>
  );
}
