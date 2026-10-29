import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";
import { PhonePreview } from "../../components/SitePreviews";

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

// EDIT HERE when the site changes
const decisions = [
  {
    before: "Every section had a numbered tag: 01 / Work, 02 / Story.",
    after: "Plain labels only. The structure is clear without counting.",
  },
  {
    before: "The footer headline was stacked and centred, with an orange hover and a flip.",
    after: "Restaged in the hero's pattern: one line left, one right, and a small lift on hover.",
  },
  {
    before: "A conventional contact page.",
    after: "An oversized headline that fills the screen, with a full-width form waiting below the fold.",
  },
  {
    before: "Services were five cards on the landing page.",
    after: "Each card now jumps to its own process on a full Services page.",
  },
  {
    before: "The hero title was crowded on phones.",
    after: "It shortens to “UI/UX Designer” on small screens and keeps the full line on larger ones.",
  },
];

// EDIT HERE when you add animations
const motion = [
  [
    "Entrance",
    "The hero name slides up from behind a mask, then everything else fades in, in sequence.",
  ],
  [
    "Scroll",
    "Sections rise and fade in as you reach them. The story pins in place and lights up word by word, and About wipes a headline into its own code.",
  ],
  [
    "Hover",
    "Headlines flip typeface, project screenshots follow the cursor in the Work list, and the cursor ring grows over links.",
  ],
  [
    "Navigation",
    "A dark curtain rises with the page name on every move between pages, and the Services heading stays pinned while its cards scroll.",
  ],
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
          href="/work"
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

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest md:grid-cols-3">
          {[
            ["Role", project.role],
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
          A portfolio is the one project with no client to hide behind. I set
          myself a brief: say who I am through type, motion and restraint, and
          make it work on every screen.
        </p>
      </section>

      {/* Direction */}
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

        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-4">
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
          <div className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Mark
            </p>
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="mt-6 h-16 w-16 md:h-20 md:w-20"
            >
              <rect width="32" height="32" rx="7" fill="#151516" stroke="#2a2a2c" />
              <rect x="10" y="8" width="4" height="16" fill="#ff4d1f" />
              <rect x="10" y="8" width="13" height="4" fill="#ff4d1f" />
              <rect x="10" y="14" width="10" height="4" fill="#ff4d1f" />
              <rect x="10" y="20" width="13" height="4" fill="#ff4d1f" />
            </svg>
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

      {/* Responsive */}
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
              This phone is the real site, running at iPhone 15 Pro size.
              Scroll it, open the menu, tap around. The hero name is sized from
              the screen width, so it fits on one line at every size.
            </p>
            <Link
              href="/"
              className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent"
            >
              Open full site →
            </Link>
          </div>

          <PhonePreview />
        </div>
      </section>

      {/* What I learned + still to do */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          What I learned
        </p>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          Responsive design is a system, not a fix. Sizing type from the screen
          width solved problems that breakpoints kept patching.
        </p>

        <p className="mt-16 font-mono text-sm uppercase tracking-widest text-foreground/60">
          Still to do
        </p>
        <ul className="mt-4 space-y-2 text-lg text-foreground/70">
          <li>Accessibility and speed checks</li>
          <li>Moving to a host that allows commercial use</li>
        </ul>
      </section>

      {/* Next project */}
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