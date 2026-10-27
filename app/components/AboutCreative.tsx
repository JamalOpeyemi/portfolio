"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function AboutCreative() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // 0 when the headline enters the lower part of the screen, 1 when it reaches the upper part
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.35"],
  });

  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const edge = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const edgeOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 0.97, 1],
    [0, 1, 1, 0]
  );

  return (
    <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
      <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
        My creative practice
      </p>

      {/* The headline, with a code version that is wiped in on scroll */}
      <div ref={ref} className="relative mt-10 grid md:mt-14">
        <h2 className="col-start-1 row-start-1 text-[11vw] font-medium uppercase leading-[0.92] tracking-tighter md:text-[7.5vw]">
          Design is where it starts.
        </h2>

        {!reduceMotion && (
          <>
            <motion.div
              aria-hidden="true"
              style={{ clipPath: clip }}
              className="col-start-1 row-start-1 flex flex-col justify-center bg-background font-mono text-[5vw] leading-snug text-foreground md:text-[3vw]"
            >
              <p className="text-accent">{"<h2>"}</p>
              <p className="pl-[2ch]">
                Design is where
                <br />
                it starts.
              </p>
              <p className="text-accent">{"</h2>"}</p>
            </motion.div>

            <motion.span
              aria-hidden="true"
              style={{ left: edge, opacity: edgeOpacity }}
              className="pointer-events-none absolute inset-y-0 w-px bg-accent"
            />
          </>
        )}
      </div>

      <p className="mt-10 max-w-xl text-lg leading-snug text-foreground/70 md:mt-14 md:text-xl">
        I’m interested in what happens when design moves beyond the screen —
        through interaction, code, and experimentation. I use design tools and
        AI-assisted workflows to explore possibilities, prototype ideas, and
        bring digital experiences to life.
      </p>
    </section>
  );
}