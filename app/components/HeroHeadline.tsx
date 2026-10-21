"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  <>Interfaces</>,
  <>
    with a{" "}
    <span className="font-serif font-normal italic text-accent">point</span>
  </>,
  <>of view.</>,
];

export default function HeroHeadline() {
  const reduceMotion = useReducedMotion();

  return (
    <h1 className="relative z-10 mt-10 text-[13vw] font-bold leading-[0.88] tracking-tight md:mt-16 md:text-[11.5vw]">
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className="block"
            initial={reduceMotion ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1 + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}