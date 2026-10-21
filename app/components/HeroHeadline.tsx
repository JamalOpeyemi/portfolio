"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FlipText from "./FlipText";

const lines = [
  { text: "Elijah", align: "" },
  { text: "Opeyemi", align: "md:ml-auto" },
];

export default function HeroHeadline() {
  const reduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [size, setSize] = useState<number | null>(null);

  // Work out the biggest font size where the widest line fits the screen
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const fit = () => {
      const lineEls = Array.from(
        heading.querySelectorAll<HTMLElement>("[data-fit]")
      );
      if (lineEls.length === 0) return;

      const current = parseFloat(getComputedStyle(heading).fontSize);
      const widest = Math.max(
        ...lineEls.map((el) => el.getBoundingClientRect().width)
      );
      const byWidth = (heading.clientWidth / (widest / current)) * 0.995;

      // On desktop, also keep the whole hero inside one screen height
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      const byHeight = (window.innerHeight - 288) / 1.8;

      setSize(Math.floor(isDesktop ? Math.min(byWidth, byHeight) : byWidth));
    };

    fit();
    document.fonts.ready.then(fit);

    const observer = new ResizeObserver(fit);
    observer.observe(heading);
    window.addEventListener("resize", fit);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      style={size ? { fontSize: `${size}px` } : undefined}
      className={`relative z-10 w-full text-[18vw] font-bold uppercase leading-[1] tracking-tighter md:leading-[0.9] ${
        size ? "" : "invisible"
      }`}
    >
      {lines.map((line, i) => (
        <span key={line.text} className="block overflow-hidden pb-[0.05em]">
          <motion.span
            data-fit
            className={`block w-max ${line.align}`}
            initial={{ y: "110%" }}
            animate={{ y: size ? 0 : "110%" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.9,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            <FlipText text={line.text} />
          </motion.span>
        </span>
      ))}
    </h1>
  );
}