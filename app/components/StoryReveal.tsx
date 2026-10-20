"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

// PLACEHOLDER: replace with 2-3 sentences in your own voice.
const text =
  "Placeholder story. Write two or three sentences here about how you think about design and who you design for. Each word lights up as you scroll.";

function Word({
  children,
  progress,
  range,
  reduceMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduceMotion: boolean;
}) {
  const opacity = useTransform(
    progress,
    range,
    reduceMotion ? [1, 1] : [0.25, 1]
  );

  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

export default function StoryReveal() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight md:text-6xl"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            reduceMotion={reduceMotion}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}