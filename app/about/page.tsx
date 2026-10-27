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
      {/* Introduction: headline and portrait side by side */}
      <section className="px-6 pb-20 pt-12 md:px-16 md:pb-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          About
        </p>

        <div className="mt-6 grid gap-10 md:mt-10 md:grid-cols-[3fr_2fr] md:items-end md:gap-12">
          <h1 className="text-[10vw] font-medium uppercase leading-[0.92] tracking-tighter md:text-[4.6vw]">
            I like ideas better when they{" "}
            <span className="font-serif font-normal normal-case italic text-accent">
              exist.
            </span>
          </h1>

          <RevealBlock className="relative aspect-[3/4] w-full max-w-sm overflow-hidden border border-foreground/30 bg-[#1c1c1e] md:justify-self-end">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Elijah Opeyemi"
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover"
              priority
            />
          </RevealBlock>
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