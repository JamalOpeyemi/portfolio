"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroHeadline from "./HeroHeadline";

// PLACEHOLDER: paste your real resume link here
const resumeUrl = "https://canva.link/w3cok10c5xd1f77";
const intro =
  "Somewhere between human behaviour, thoughtful design, and technology — that’s where my work begins.";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Fade + slide up. Change the delay number to change when each piece appears.
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] flex-col px-6 pb-6 pt-6 md:min-h-[calc(100svh-4rem)] md:px-16 md:pb-0 md:pt-8">
      {/* Info row: one line on every screen size */}
      <motion.div
        {...fadeUp(0.2)}
        className="flex items-center justify-between gap-1 font-mono text-[9px] uppercase tracking-normal text-foreground/60 md:grid md:grid-cols-3 md:text-xs md:tracking-widest"
      >
        <span className="whitespace-nowrap">Portfolio</span>
                <span className="whitespace-nowrap md:text-center">
          UI/UX Designer<span className="hidden md:inline"> / Creative Developer</span>
        </span>
        <span className="whitespace-nowrap md:text-right">
          <span className="hidden md:inline">Based in </span>Malaysia
        </span>
      </motion.div>

      {/* Name (and, on phones only, the intro right beneath it) */}
      <div className="flex flex-1 flex-col justify-center gap-8 py-8">
        <HeroHeadline />
        <motion.p
          {...fadeUp(0.7)}
          className="max-w-sm text-lg leading-snug text-foreground/70 md:hidden"
        >
          {intro}
        </motion.p>
      </div>

      {/* Desktop intro, scroll cue, buttons */}
      <div className="grid items-end gap-6 md:grid-cols-3 md:pb-10">
        <motion.p
          {...fadeUp(0.7)}
          className="hidden max-w-sm text-lg leading-snug text-foreground/70 md:block"
        >
          {intro}
        </motion.p>

        <motion.div
          {...fadeUp(0.9)}
          aria-hidden="true"
          className="hidden justify-center font-mono text-xs uppercase tracking-widest text-foreground/50 md:flex"
        >
          Scroll <span className="scroll-cue-arrow ml-2">↓</span>
        </motion.div>

        <motion.div
          {...fadeUp(1.0)}
          className="flex justify-center gap-3 md:justify-end"
        >
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Resume ↗
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            See work ↓
          </a>
        </motion.div>
      </div>

      {/* Phone-only scroll cue */}
      <motion.div
        {...fadeUp(1.0)}
        aria-hidden="true"
        className="mt-6 flex justify-center font-mono text-[10px] uppercase tracking-widest text-foreground/50 md:hidden"
      >
        Scroll <span className="scroll-cue-arrow ml-2">↓</span>
      </motion.div>
    </section>
  );
}