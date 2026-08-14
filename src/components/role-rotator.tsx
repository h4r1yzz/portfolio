"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Props = {
  roles: readonly string[];
  location: string;
  intervalMs?: number;
};

export default function RoleRotator({
  roles,
  location,
  intervalMs = 2800,
}: Props) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || roles.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, roles.length, intervalMs]);

  const role = roles[index] ?? roles[0];

  return (
    <p className="hero-role mt-3">
      {reduceMotion ? (
        <span>{roles[0]}</span>
      ) : (
        <motion.span
          className="role-rotator"
          layout
          transition={{ duration: 0.35, ease: "easeInOut" }}
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={role}
              className="role-rotator__item"
              initial={{ y: "0.4em", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-0.4em", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {role}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      )}
      {" / "}
      {location}
    </p>
  );
}
