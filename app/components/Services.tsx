"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="border-t border-line px-6 py-24 md:px-16 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        {/* Left: stays pinned on desktop while the cards scroll past */}
        <div className="md:sticky md:top-32 md:self-start">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Services
          </p>
          <h2 className="mt-8 text-[13vw] font-medium leading-[0.9] tracking-tight md:text-[5.5vw]">
            What I{" "}
            <span className="font-serif font-normal italic text-accent">
              do
            </span>
            .
          </h2>
          <Link
            href="/services"
            className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            See all services →
          </Link>
        </div>

        {/* Right: each card links to its section on the Services page */}
        <ul className="flex flex-col gap-4 md:gap-5">
          {services.map((service) => (
            <motion.li
              key={service.number}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services#${service.slug}`}
                className="group block border border-line bg-[#151516] p-6 transition-colors duration-300 hover:border-accent focus-visible:outline-2 focus-visible:outline-accent md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden="true"
                    className="block text-6xl font-bold leading-none text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_rgba(242,240,235,0.4)] group-hover:text-accent group-hover:[-webkit-text-stroke-color:#ff4d1f] md:text-7xl"
                  >
                    {service.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xl text-foreground/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-bold tracking-tight md:mt-14 md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-snug text-foreground/70 md:text-lg">
                  {service.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}