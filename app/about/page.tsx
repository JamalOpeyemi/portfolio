import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "../components/ContactCTA";
import RevealBlock from "../components/RevealBlock";
import AboutCreative from "../components/AboutCreative";

export const metadata: Metadata = {
  title: "About",
};

const toolGroups = [
  { label: "Design", tools: ["Figma"] },
  { label: "Development", tools: ["Next.js", "React", "Tailwind CSS"] },
  { label: "AI workflows", tools: ["ChatGPT", "Claude"] },
  { label: "Build & ship", tools: ["VS Code", "Git", "GitHub", "Vercel"] },
];

export default function AboutPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="px-6 pb-20 pt-12 md:px-16 md:pb-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          About
        </p>
        <h1 className="mt-6 text-[10vw] font-medium uppercase leading-[0.92] tracking-tighter md:text-[6.5vw]">
          I like ideas better when they{" "}
          <span className="font-serif font-normal normal-case italic">
            exist.
          </span>
        </h1>

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-[1fr_2fr] md:items-end">
          <RevealBlock className="relative aspect-[3/4] w-full max-w-xs overflow-hidden border border-foreground/30 bg-[#1c1c1e]">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Elijah Opeyemi"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
              priority
            />
          </RevealBlock>

          <div className="max-w-2xl space-y-6">
            <p className="text-2xl font-medium leading-snug md:text-4xl">
              I’m a designer and creative developer driven by curiosity and the
              desire to bring ideas to life.
            </p>
            <p className="text-lg leading-snug text-foreground/70 md:text-xl">
              I explore the space between visual design, code, and AI-assisted
              workflows — turning ideas into digital experiences that are
              thoughtful, expressive, and functional.
            </p>
          </div>
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