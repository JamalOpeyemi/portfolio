"use client";

import { motion, useReducedMotion } from "framer-motion";
import FlipText from "./FlipText";

const lines = [
  { text: "Elijah", align: "" },
  { text: "Opeyemi", align: "md:text-right" },
];

export default function HeroHeadline() {
  const reduceMotion = useReducedMotion();

  return (
    <h1 className="relative z-10 w-full whitespace-nowrap text-[length:calc((100vw_-_3rem)/4.7)] font-bold uppercase leading-[1] tracking-tighter md:text-[length:min(calc((100vw_-_8rem)/4.8),calc((100svh_-_18rem)/1.9))] md:leading-[0.9]">
      {lines.map((line, i) => (
        <span
          key={line.text}
          className={`block overflow-hidden pb-[0.05em] ${line.align}`}
        >
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
            <FlipText text={line.text} />
          </motion.span>
        </span>
      ))}
    </h1>
  );
}