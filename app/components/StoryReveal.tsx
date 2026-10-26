"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

// Your story, one line per entry.
const lines = [
  "My curiosity about people shapes the way I see the world.",
  "It drives me to question, explore, and understand problems more deeply.",
  "Through design, I turn those insights into meaningful digital experiences.",
  "Always balancing purpose, function, and visual expression.",
];

// SPEED SETTING: how much scrolling the reveal takes.
// Bigger number = slower reveal. Try 300 or 400 if it's still too fast.
const scrollLength = "h-[260vh] md:h-[320vh]";

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
    reduceMotion ? [1, 1] : [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

export default function StoryReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const allWords = lines.map((line) => line.split(" "));
  const total = allWords.flat().length;

  let counter = 0;

  return (
    <div ref={ref} className={`relative ${scrollLength}`}>
      <div className="sticky top-24 md:top-32">
        <div className="max-w-5xl space-y-5 text-2xl font-semibold leading-tight tracking-tight md:space-y-8 md:text-5xl">
          {allWords.map((words, lineIndex) => (
            <p key={lineIndex}>
              {words.map((word, wordIndex) => {
                const i = counter++;
                // Words light up between 5% and 90% of the scroll,
                // each one overlapping the next a little.
                const start = 0.05 + (i / total) * 0.85;
                const end = start + (2 / total) * 0.85;
                return (
                  <Word
                    key={wordIndex}
                    progress={scrollYProgress}
                    range={[start, Math.min(end, 0.95)]}
                    reduceMotion={reduceMotion}
                  >
                    {word}
                  </Word>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}