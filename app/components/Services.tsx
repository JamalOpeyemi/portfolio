"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "UI/UX & Product Design",
    description:
      "Creating intuitive, user-centred digital products that balance real needs with thoughtful design.",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Designing bold, responsive websites that combine visual storytelling with seamless experiences.",
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Building consistent, scalable design systems that bring clarity and cohesion to digital products.",
  },
  {
    number: "04",
    title: "Creative Development",
    description:
      "Turning design concepts into functional digital experiences through code and AI-assisted workflows.",
  },
  {
    number: "05",
    title: "Interaction & Motion",
    description:
      "Bringing interfaces to life through purposeful animations, micro-interactions, and fluid transitions.",
  },
];

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
        </div>

        {/* Right: the cards */}
        <ul className="flex flex-col gap-4 md:gap-5">
          {services.map((service) => (
            <motion.li
              key={service.number}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-line bg-[#151516] p-6 transition-colors duration-300 hover:border-accent md:p-8"
            >
              {/* Outlined number: fills with orange on hover */}
              <span
                aria-hidden="true"
                className="block text-6xl font-bold leading-none text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_rgba(242,240,235,0.4)] group-hover:text-accent group-hover:[-webkit-text-stroke-color:#ff4d1f] md:text-7xl"
              >
                {service.number}
              </span>

              <h3 className="mt-10 text-2xl font-bold tracking-tight md:mt-14 md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-snug text-foreground/70 md:text-lg">
                {service.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}