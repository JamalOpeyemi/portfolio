"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import FlipText from "./FlipText";
import { services } from "../data/services";

const lines = [
  { text: "What I", align: "" },
  { text: "Do.", align: "text-right" },
];

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

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
    <>
      {/* Top: label + headline in the hero style */}
      <section className="px-6 pb-16 pt-6 md:px-16 md:pb-24 md:pt-8">
        <motion.p
          {...fadeUp(0.1)}
          className="font-mono text-xs uppercase tracking-widest text-foreground/60"
        >
          Services
        </motion.p>

        <h1 className="mt-10 w-full whitespace-nowrap text-[length:calc((100vw_-_3rem)/5.2)] font-medium uppercase leading-[1] tracking-tighter md:mt-14 md:text-[length:calc((100vw_-_8rem)/6)] md:leading-[0.9]">
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

        <motion.p
          {...fadeUp(0.6)}
          className="mt-8 max-w-md text-lg leading-snug text-foreground/70 md:mt-10"
        >
          Five ways I can help, and how each one works.
        </motion.p>
      </section>

      {/* One section per service. The id lets the landing page jump straight here. */}
      {services.map((service) => (
        <motion.section
          key={service.slug}
          id={service.slug}
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="scroll-mt-16 border-t border-line px-6 py-16 md:scroll-mt-20 md:px-16 md:py-24"
        >
          <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-16">
            {/* Left: number, title, description */}
            <div className="md:sticky md:top-32 md:self-start">
              <span
                aria-hidden="true"
                className="block font-mono text-sm text-foreground/50"
              >
                {service.number}
              </span>
              <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                {service.title}
              </h2>
              <p className="mt-6 max-w-sm text-lg leading-snug text-foreground/70">
                {service.description}
              </p>
            </div>

            {/* Right: how it works */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                How it works
              </p>
              <ol className="mt-6 border-t border-line">
                {service.steps.map((step, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-6 md:grid-cols-[4rem_1fr]"
                  >
                    <span className="font-mono text-sm text-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-base leading-snug text-foreground/70">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Closing link */}
      <section className="border-t border-line px-6 py-16 md:px-16 md:py-24">
        <Link
          href="/contact"
          className="group inline-flex items-baseline gap-4 text-3xl font-medium tracking-tight transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent md:text-6xl"
        >
          Start a project
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-2"
          >
            →
          </span>
        </Link>
      </section>
    </>
  );
}