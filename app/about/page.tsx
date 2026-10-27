import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "../components/ContactCTA";
import RevealBlock from "../components/RevealBlock";
import AboutCreative from "../components/AboutCreative";

export const metadata: Metadata = {
  title: "About",
};

const toolGroups = [
  { label: "Design", tools: ["Figma", "Framer"] },
  { label: "Development", tools: ["Next.js", "React", "Tailwind CSS"] },
  { label: "AI workflows", tools: ["ChatGPT", "Claude"] },
];

export default function AboutPage() {
  return (
    <main>
      {/* Introduction: portrait on the left, headline fills the space beside it */}
      <section className="px-6 pb-20 pt-12 md:px-16 md:pb-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          About
        </p>

        <div className="mt-6 grid gap-10 md:mt-10 md:grid-cols-[26rem_1fr] md:items-center md:gap-20">
          <RevealBlock className="relative order-2 aspect-[3/4] w-full max-w-sm overflow-hidden border border-foreground/30 bg-[#1c1c1e] md:order-1 md:max-w-none">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Elijah Opeyemi"
              fill
              sizes="(min-width: 768px) 416px, 100vw"
              className="object-cover"
              priority
            />
          </RevealBlock>

          {/* Size = space left beside the portrait, divided by the longest line */}
          <h1 className="order-1 whitespace-nowrap text-[length:calc((100vw_-_3rem)/9.6)] font-medium uppercase leading-[1.08] tracking-tighter md:order-2 md:text-[length:calc((100vw_-_39rem)/7)]">
            <span className="block">I like ideas</span>
            <span className="block">better when</span>
            <span className="block">
              they{" "}
              <span className="font-serif font-normal normal-case italic text-accent">
                exist.
              </span>
            </span>
          </h1>
        </div>
      </section>

      {/* My creative practice */}
      <AboutCreative />

      {/* Tools & playground */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <h2 className="text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-[5vw]">
          Tools &amp; Playground
        </h2>
        <p className="mt-6 max-w-md text-lg leading-snug text-foreground/70">
          The tools I use to explore, design, and build.
        </p>

        <div className="mt-12 border-t border-line md:mt-16">
          {toolGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-4 border-b border-line py-6 md:grid-cols-[1fr_2fr] md:gap-16 md:py-8"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 md:pt-3">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-2 text-3xl font-medium tracking-tight md:text-5xl">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="transition-colors duration-300 hover:text-accent"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact: flows straight into the existing section */}
      <ContactCTA />
    </main>
  );
}