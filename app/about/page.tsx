import type { Metadata } from "next";
import ContactCTA from "../components/ContactCTA";
import RevealBlock from "../components/RevealBlock";

export const metadata: Metadata = {
  title: "About — Elijah Opeyemi",
};

// PLACEHOLDERS: replace with your real content.
const principles = [
  "Placeholder: a design principle you believe in.",
  "Placeholder: another principle, ideally one only you would say.",
  "Placeholder: a third principle.",
];

const background = [
  { period: "20XX", text: "Placeholder: a relevant milestone." },
  { period: "20XX", text: "Placeholder: another milestone." },
  { period: "20XX", text: "Placeholder: where you are now." },
];

export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <section className="px-6 pb-20 pt-12 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          About
        </p>
        <h1 className="mt-6 text-[13vw] font-bold leading-[0.88] tracking-tight md:text-[9vw]">
          Placeholder headline{" "}
          <span className="font-serif font-normal italic text-accent">
            about you
          </span>
        </h1>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_2fr]">
          <RevealBlock className="aspect-[3/4] w-full max-w-xs border border-foreground/30 bg-[#1c1c1e]">
            <div className="flex h-full flex-col items-center justify-center gap-1 text-center font-mono text-sm uppercase tracking-widest text-foreground/80">
              <span>Portrait</span>
              <span className="text-foreground/50">Placeholder</span>
            </div>
          </RevealBlock>

          <div className="max-w-2xl space-y-6 text-lg text-foreground/70 md:text-xl">
            <p>
              Placeholder: introduce yourself in two or three sentences, in
              your own voice.
            </p>
            <p>
              Placeholder: what drives your work, and what you want to build
              next.
            </p>
          </div>
        </div>
      </section>

      {/* Design philosophy */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          01 / Design philosophy
        </p>
        <ol className="mt-10 space-y-8">
          {principles.map((principle, i) => (
            <li key={i} className="flex gap-6 border-t border-line pt-6">
              <span className="font-mono text-sm text-foreground/50">
                0{i + 1}
              </span>
              <span className="max-w-3xl text-2xl font-semibold leading-snug md:text-4xl">
                {principle}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Background */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          02 / Background
        </p>
        <ul className="mt-10">
          {background.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[6rem_1fr] gap-4 border-t border-line py-5"
            >
              <span className="font-mono text-sm text-foreground/50">
                {item.period}
              </span>
              <span className="text-lg">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Beyond design */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          03 / Beyond design
        </p>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
          Placeholder: the personal experiences and interests that shape how
          you see and make things.
        </p>
      </section>

      <ContactCTA />
    </main>
  );
}