"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type Mode = "default" | "link" | "text";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [pressed, setPressed] = useState(false);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });

  // Only turn on for devices with a real mouse (not phones/tablets)
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-cursor='text']")) setMode("text");
      else if (target?.closest("a, button, [data-cursor='link']"))
        setMode("link");
      else setMode("default");
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    root.addEventListener("mouseleave", onLeave);
    root.addEventListener("mouseenter", onEnter);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringSize = mode === "text" ? 96 : mode === "link" ? 56 : 32;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{ x: reduceMotion ? x : ringX, y: reduceMotion ? y : ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-white"
          animate={{
            width: ringSize,
            height: ringSize,
            opacity: visible ? 1 : 0,
            backgroundColor:
              mode === "text" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>

      {/* Dot that follows the mouse exactly */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x, y }}
      >
        <motion.div
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-accent"
          animate={{
            scale: pressed ? 0.6 : mode === "text" ? 0 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}