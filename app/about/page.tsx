import type { Metadata } from "next";
import ContactCTA from "../components/ContactCTA";
import RevealBlock from "../components/RevealBlock";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const principles = [
  {
    title: "Make the abstract tangible.",
    text: "I enjoy turning ideas into experiences. For me, design is a way to explore possibilities, give shape to thoughts and make something that didn’t exist before.",
  },
  {
    title: "Function with feeling.",
    text: "An experience can be useful without feeling ordinary. I want the things I create to work intuitively while having a distinct visual character.",
  },
  {
    title: "Stay curious.",
    text: "I started learning because I wanted to understand more. I want to keep that curiosity alive, exploring different approaches, experimenting with ideas and discovering what is possible.",
  },
];

const journey = [
  "My journey in design is driven less by a fixed destination and more by the desire to keep learning and creating.",
  "Every project is an opportunity to explore an idea, develop my thinking and turn what I’ve learned into something tangible.",
  "I’m particularly interested in the relationship between design and development: not just imagining what an experience could be, but exploring how to bring it to life.",
];

const beyond = [
  "Outside design, football is a big part of what I enjoy. I’m also drawn to experimentation and the possibilities of technology.",
  "I like exploring different worlds, learning new things and finding connections between ideas. That curiosity is part of what I bring to my creative work, too.",
];

export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <section className="px-6 pb-20 pt-12 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          About
        </p>
        <h1 className="mt-6 text-[10vw] font-medium uppercase leading-[0.92] tracking-tighter md:text-[6.5vw]">
          I like ideas better when they{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            exist.
          </span>
        </h1>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_2fr]">
          {/* PORTRAIT: placeholder box. Swap for your image (see steps below). */}
          <RevealBlock className="aspect-[3/4] w-full max-w-xs border border-foreground/30 bg-[#1c1c1e]">
            <div className="flex h-full flex-col items-center justify-center gap-1 text-center font-mono text-sm uppercase tracking-widest text-foreground/80">
              <span>Portrait</span>
              <span className="text-foreground/50">Placeholder</span>
            </div>
          </RevealBlock>

          <div className="max-w-2xl space-y-6 text-lg text-foreground/70 md:text-xl">
            <p className="text-2xl font-medium leading-snug text-foreground md:text-3xl">
              I’m a UI/UX designer driven by curiosity and the desire to bring
              ideas to life.
            </p>
            <p>
              I got into design simply because I wanted to learn. What keeps me
              interested is the process of taking something that exists only as
              an idea and shaping it into a digital experience: something
              people can see, interact with and use.
            </p>
            <p>
              I’m drawn to the space where thoughtful design meets visual
              expression, and where an idea can become something real.
            </p>
          </div>
        </div>
      </section>

      {/* How I see design */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          How I see design
        </p>
        <ol className="mt-10 space-y-8">
          {principles.map((principle, i) => (
            <li
              key={principle.title}
              className="grid gap-4 border-t border-line pt-6 md:grid-cols-[4rem_1fr_1fr] md:gap-8"
            >
              <span className="font-mono text-sm text-foreground/50">
                0{i + 1}
              </span>
              <h2 className="text-2xl font-semibold uppercase leading-snug tracking-tight md:text-4xl">
                {principle.title}
              </h2>
              <p className="max-w-md text-lg leading-snug text-foreground/70">
                {principle.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* The journey */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          The journey
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <h2 className="text-3xl font-medium uppercase leading-[1] tracking-tighter md:text-6xl">
            Still exploring. Always making.
          </h2>
          <div className="max-w-xl space-y-6 text-lg text-foreground/70 md:text-xl">
            {journey.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the screen */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Beyond the screen
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <h2 className="text-3xl font-medium uppercase leading-[1] tracking-tighter md:text-6xl">
            Different worlds. Different perspectives.
          </h2>
          <div className="max-w-xl space-y-6 text-lg text-foreground/70 md:text-xl">
            {beyond.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}