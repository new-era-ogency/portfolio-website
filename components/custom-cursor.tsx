"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export type CursorVariant = "default" | "cta" | "gallery";

type CustomCursorProps = {
  variant: CursorVariant;
};

export function CustomCursor({ variant }: CustomCursorProps) {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 45, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 45, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.classList.add("mehana-custom-cursor");
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("mehana-custom-cursor");
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[300]"
      style={{ x: springX, y: springY }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        className="-translate-x-1/2 -translate-y-1/2 overflow-visible"
      >
        {variant === "cta" ? (
          <motion.g
            initial={false}
            animate={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          >
            <circle
              cx="32"
              cy="32"
              r="22"
              fill="rgba(253, 186, 116, 0.2)"
              stroke="rgb(45, 27, 20)"
              strokeWidth="1.5"
              className="drop-shadow-md"
            />
            <circle cx="32" cy="32" r="4" fill="rgb(45, 27, 20)" />
          </motion.g>
        ) : variant === "gallery" ? (
          <motion.g
            initial={false}
            animate={{ rotate: 45, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            style={{ transformOrigin: "32px 32px" }}
          >
            <rect
              x="14"
              y="14"
              width="36"
              height="36"
              rx="4"
              fill="rgba(249, 249, 247, 0.12)"
              stroke="rgb(45, 27, 20)"
              strokeWidth="1.5"
              className="drop-shadow-[0_4px_12px_rgba(45,27,20,0.25)]"
            />
            <circle cx="32" cy="32" r="3" fill="rgb(253, 186, 116)" />
          </motion.g>
        ) : (
          <motion.g
            initial={false}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            <circle
              cx="32"
              cy="32"
              r="16"
              fill="rgba(249, 249, 247, 0.85)"
              stroke="rgb(45, 27, 20)"
              strokeWidth="1.15"
              className="drop-shadow-md"
            />
            <circle cx="32" cy="32" r="2.5" fill="rgb(45, 27, 20)" />
          </motion.g>
        )}
      </svg>
    </motion.div>
  );
}
