"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import FlipText from "./FlipText";
import ContactForm from "./ContactForm";
import { Reveal } from "./CaseKit";

const email = "elijahtemiye46@gmail.com";
const linkedin = "https://www.linkedin.com/in/jamalopeyemi";

// PLACEHOLDER: rewrite this invitation in your own voice
const invitation =
  "Building something new, hiring, or just curious how I work? Send a note and let's talk.";

const lines = [
  { text: "Have a good", align: "" },
  { text: "Idea?", align: "text-right" },
];

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

  return (
    <section className="px-6 pb-16 pt-6 md:px-16 md:pb-24 md:pt-8">
      {/* Hero: fills exactly one screen, so the form starts below the fold */}
      <div className="flex min-h-[calc(100svh-9rem)] flex-col md:min-h-[calc(100svh-10rem)]">
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          Contact
        </motion.p>

        {/* Headline sits in the middle of the available space */}
        <div className="flex flex-1 flex-col justify-center py-8">
          <h1 className="w-full whitespace-nowrap text-[length:calc((100vw_-_3rem)/7.6)] font-medium uppercase leading-[1] tracking-tighter md:text-[length:calc((100vw_-_8rem)/7.8)] md:leading-[0.9]">
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
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <FlipText text={line.text} />
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Invitation with a scroll cue beside it, pinned to the bottom of the hero */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg leading-snug text-foreground/70">
            {invitation}
          </p>
          <div
            aria-hidden="true"
            className="font-mono text-xs uppercase tracking-widest text-foreground/50"
          >
            Scroll <span className="scroll-cue-arrow ml-2">↓</span>
          </div>
        </motion.div>
      </div>

      {/* Full-width form: only visible after scrolling */}
      <Reveal className="mt-16 border-t border-line pt-10 md:mt-20 md:pt-14">
        <ContactForm />
      </Reveal>

      {/* Quiet direct routes: email first */}
            <Reveal className="mt-16 flex flex-col gap-4 border-t border-line pt-8 font-mono text-xs uppercase tracking-widest md:mt-24 md:flex-row md:items-center md:justify-between">
        <p className="flex flex-wrap items-center gap-x-6 gap-y-3 text-foreground/60">
          <span>Or write directly</span>
          <a
            href={`mailto:${email}`}
            className="break-all text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            {email}
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            LinkedIn ↗
          </a>
        </p>
        <Link
          href="/work"
          className="text-foreground/50 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
        >
          Back to work
        </Link>
      </Reveal>
    </section>
  );
}