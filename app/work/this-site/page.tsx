import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "This Site",
};

const swatches = [
  { name: "Background", hex: "#0b0b0c", text: "text-foreground" },
  { name: "Surface", hex: "#151516", text: "text-foreground" },
  { name: "Line", hex: "#2a2a2c", text: "text-foreground" },
  { name: "Text", hex: "#f2f0eb", text: "text-[#0b0b0c]" },
  { name: "Accent", hex: "#ff4d1f", text: "text-[#0b0b0c]" },
];

const decisions = [
  {
    before: "Every section had a numbered tag: 01 / Work, 02 / Story.",
    after: "Plain labels only. The structure is clear without counting.",
  },
  {
    before: "Orange on labels, headlines and hovers.",
    after: "Orange as a signal: one italic word per page, plus hover states.",
  },
  {
    before: "Footer headline stacked and centred, with an orange hover.",
    after: "Restaged in the hero's pattern: left line, right line, a small lift on hover.",
  },
  {
    before: "A conventional contact page.",
    after: "An oversized headline and a full-width form that waits below the fold.",
  },
  {
    before: "One list of services.",
    after: "A Services page where each card jumps to its own process section.",
  },
];

const motion = [
  ["Hero", "Name slides up from behind a mask, then everything else fades in, in sequence."],
  ["Hover flip", "Headlines swap typeface on hover."],
  ["Story", "Text pins in place and lights up word by word as you scroll."],
  ["About", "A design-to-code wipe turns a headline into its own markup."],
];

export default function ThisSitePage() {
  const index = projects.findIndex((p) => p.slug === "this-site");
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      {/* Opening */}
      <section className="px-6 pb-16 pt-12 md:px-16">
        <Link
          href="/#work"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent"
        >
          ← All work
        </Link>

        <p className="mt-10 font-mono text-sm uppercase tracking-widest text-foreground/60">
          Case study {project.id}
        </p>
        <h1 className="mt-4 text-[13vw] font-medium uppercase leading-[0.92] tracking-tighter md:text-[9vw]">
          This{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            site.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-2xl">
          {project.summary}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest md:grid-cols-4">
          {[
            ["Role", project.role],
            ["Timeline", project.timeline],
            ["Tools", project.tools],
            ["Year", project.year],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-foreground/50">{label}</dt>
              <dd className="mt-2">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The brief */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          The brief
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-7xl">
          A portfolio that proves the idea{" "}
          <span className="font-serif font-normal normal-case italic">exists.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          {/* PLACEHOLDER: write 1-2 sentences in your own words on why you built it */}
          Placeholder: why you built this site and what it needed to say about you.
        </p>
      </section>

      {/* Direction: palette + type, built live */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Direction
        </p>
        <h2 className="mt-8 text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Dark, editorial, loud type.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-5">
          {swatches.map((s) => (
            <div
              key={s.name}
              style={{ backgroundColor: s.hex }}
              className={`flex aspect-square flex-col justify-end p-4 font-mono text-xs uppercase tracking-widest ${s.text}`}
            >
              <span>{s.name}</span>
              <span className="mt-1 opacity-60">{s.hex}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-3">
          <div className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Display: Archivo
            </p>
            <p className="mt-6 text-6xl font-medium uppercase tracking-tighter md:text-7xl">
              Aa
            </p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Accent: Instrument Serif
            </p>
            <p className="mt-6 font-serif text-6xl italic text-accent md:text-7xl">
              Aa
            </p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Labels: JetBrains Mono
            </p>
            <p className="mt-6 font-mono text-5xl md:text-6xl">Aa</p>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Decisions
        </p>
        <h2 className="mt-8 text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Less, on purpose.
        </h2>

        <div className="mt-12 border-t border-line">
          {decisions.map((d, i) => (
            <div
              key={i}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[4rem_1fr_1fr] md:gap-10"
            >
              <span className="font-mono text-sm text-foreground/50">
                0{i + 1}
              </span>
              <p className="text-foreground/50 line-through decoration-foreground/20">
                {d.before}
              </p>
              <p className="text-xl font-semibold leading-snug md:text-2xl">
                {d.after}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Motion */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Motion
        </p>
        <h2 className="mt-8 text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Motion with a reason.
        </h2>
        <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {motion.map(([name, text]) => (
            <li key={name} className="bg-background p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                {name}
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/50">
          All of it switches off for visitors who prefer reduced motion.
        </p>
      </section>

      {/* Responsive: the live site in a phone */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center md:gap-20">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
              Responsive
            </p>
            <h2 className="mt-8 text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
              Try it. It&apos;s{" "}
              <span className="font-serif font-normal normal-case italic text-accent">
                live.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-lg text-foreground/70">
              This phone is the real site, running at phone width. Scroll it,
              open the menu, tap around. The hero name is sized from the
              screen width, so it fits on one line at every size.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent"
            >
              Open full site →
            </Link>
          </div>

          {/* Phone frame */}
          <div className="mx-auto w-[300px] rounded-[2.5rem] border border-foreground/30 bg-[#151516] p-3">
            <iframe
              src="/"
              title="Live preview of this portfolio at phone width"
              loading="lazy"
              className="h-[560px] w-full rounded-[1.8rem] bg-background"
            />
          </div>
        </div>
      </section>

      {/* Insights + Next */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          What I learned
        </p>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          {/* PLACEHOLDER: your real lessons, e.g. building with AI-assisted workflows */}
          Placeholder: what building this with AI-assisted workflows taught you.
        </p>

        <p className="mt-16 font-mono text-sm uppercase tracking-widest text-foreground/60">
          Still to do
        </p>
        <ul className="mt-4 space-y-2 text-lg text-foreground/70">
          <li>Accessibility and speed checks</li>
          <li>Moving to a host that allows commercial use</li>
        </ul>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Next project
        </p>
        <Link
          href={`/work/${next.slug}`}
          className="mt-4 inline-block text-5xl font-bold tracking-tight transition-colors hover:text-accent md:text-8xl"
        >
          {next.title} →
        </Link>
      </section>
    </main>
  );
}