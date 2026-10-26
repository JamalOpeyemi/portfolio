"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import FlipText from "./FlipText";

const email = "elijahtemiye46@gmail.com";
const linkedin = "https://www.linkedin.com/in/jamalopeyemi";

// PLACEHOLDER: rewrite this invitation in your own voice
const invitation =
  "Whether you're building something new, hiring, or simply curious about how I work, I'd love to hear about it. Send a note and let's talk.";

export default function ContactHero() {
  const reduceMotion = useReducedMotion();

  // Fade + slide up. Change the delay number to change when a piece appears.
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  // Headline line reveal: slides up from behind a mask
  const lineReveal = (i: number) => ({
    initial: reduceMotion ? (false as const) : { y: "110%" },
    animate: { y: 0 },
    transition: {
      duration: 0.9,
      delay: 0.15 + i * 0.14,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] flex-col px-6 pb-8 pt-6 md:min-h-[calc(100svh-4rem)] md:px-16 md:pb-12 md:pt-8">
      {/* Top labels */}
      <motion.div
        {...fadeUp(0.1)}
        className="flex items-center justify-between font-mono text-xs uppercase tracking-widest"
      >
        <span className="text-accent">Contact</span>
        <span className="text-foreground/60">Based in Malaysia</span>
      </motion.div>

      {/* Headline: the centerpiece */}
      <div className="flex flex-1 items-center py-10 md:py-8">
        <h1 className="w-full text-[length:calc((100vw_-_3rem)/4.6)] font-medium uppercase leading-[0.92] tracking-tighter md:text-[length:min(calc((100vw_-_8rem)/4.8),calc((100svh_-_15rem)/2.7))]">
          {/* Line 1: left */}
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span className="block whitespace-nowrap" {...lineReveal(0)}>
              <FlipText text="Have a" />
            </motion.span>
          </span>

          {/* Line 2: right-aligned, italic serif, accent */}
          <span className="block overflow-hidden pb-[0.14em] text-right">
            <motion.span
              className="block whitespace-nowrap font-serif font-normal normal-case italic tracking-tight text-accent"
              {...lineReveal(1)}
            >
              good
            </motion.span>
          </span>

          {/* Line 3: left, orange question mark */}
          <span className="block overflow-hidden pb-[0.05em]">
            <motion.span className="block whitespace-nowrap" {...lineReveal(2)}>
              <FlipText text="Idea" />
              <span className="text-accent">?</span>
            </motion.span>
          </span>
        </h1>
      </div>

      {/* Invitation + actions */}
      <div className="grid gap-10 border-t border-line pt-8 md:grid-cols-[4fr_8fr] md:gap-16 md:pt-10">
        <motion.p
          {...fadeUp(0.7)}
          className="max-w-sm text-lg leading-snug text-foreground/70"
        >
          {invitation}
        </motion.p>

        <div className="flex flex-col gap-8">
          {/* Primary: email */}
          <motion.div {...fadeUp(0.85)}>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="group relative inline-flex max-w-full items-baseline gap-3 pb-2 text-2xl font-semibold tracking-tight transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-5xl"
            >
              <span className="break-all">{email}</span>
              <span
                aria-hidden="true"
                className="inline-block text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>
              {/* Underline: grey base, orange draws in on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground/30"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </a>
          </motion.div>

          {/* Secondary: LinkedIn, plus a way back */}
          <motion.div
            {...fadeUp(1.0)}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/40 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              LinkedIn
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
            <Link
              href="/#work"
              className="px-3 py-3 font-mono text-xs uppercase tracking-widest text-foreground/50 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
            >
              Back to work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}