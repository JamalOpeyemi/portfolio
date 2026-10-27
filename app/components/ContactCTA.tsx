"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const email = "elijahtemiye46@gmail.com";

// All three use the same style. Email first, then the social links.
const links = [
  { label: email, href: `mailto:${email}`, external: false },
  {
    label: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/jamalopeyemi",
    external: true,
  },
  // PLACEHOLDER: replace YOUR-USERNAME with your real GitHub username
  {
    label: "GitHub ↗",
    href: "https://github.com/YOUR-USERNAME",
    external: true,
  },
];

export default function ContactCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="border-t border-line px-6 py-16 md:px-16 md:py-20"
    >
      {/* Tag: normal colour, stays on the left */}
      <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
        Open invitation
      </p>

      {/* Headline: links to /contact, rises on hover */}
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -14 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="mt-10 md:mt-12"
      >
        <Link
          href="/contact"
          aria-label="Let's make something. Go to the contact page"
          className="block w-full whitespace-nowrap text-[length:calc((100vw_-_3rem)/7.2)] font-medium uppercase leading-[1] tracking-tighter focus-visible:outline-2 focus-visible:outline-accent md:text-[length:calc((100vw_-_8rem)/7.4)] md:leading-[0.9]"
        >
          <span className="block pb-[0.05em]">Let's make</span>
          <span className="block pb-[0.05em] text-right font-serif font-normal normal-case italic text-accent">
            something.
          </span>
        </Link>
      </motion.div>

      {/* Email, LinkedIn, GitHub: same style, same row */}
      <ul className="mt-12 flex flex-col items-start gap-4 font-mono text-sm uppercase tracking-widest md:mt-16 md:flex-row md:items-center md:gap-0 md:divide-x md:divide-line">
        {links.map((link, i) => (
          <li key={link.label} className={i === 0 ? "md:pr-8" : "md:px-8"}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="break-all transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}