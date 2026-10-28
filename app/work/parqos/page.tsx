import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "ParqOS",
};

// IMAGES: leave "" until you have the file. Then write the path,
// for example "/work/parqos/operator.png". Empty ones show a placeholder box.
const images = {
  handover: "",
  operator: "",
  backOffice: "",
  admin: "",
  flow: "",
};

/* A screenshot frame. Shows a labelled placeholder until you add the image path. */
function Frame({
  src,
  label,
  ratio = "16/10",
}: {
  src: string;
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden border border-foreground/30 bg-[#1c1c1e]"
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          unoptimized
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <div className="flex h-full items-center justify-center p-4 text-center font-mono text-xs uppercase tracking-widest text-foreground/60">
          {label} — placeholder
        </div>
      )}
    </div>
  );
}

// PLACEHOLDER: describe who uses each view and what they do, in your words
const views = [
  {
    name: "Operator",
    line: "Placeholder: who uses this view and what they need to do quickly.",
    image: images.operator,
  },
  {
    name: "Back office",
    line: "Placeholder: who uses this view and what they manage.",
    image: images.backOffice,
  },
  {
    name: "Admin",
    line: "Placeholder: who uses this view and what they control.",
    image: images.admin,
  },
];

// PLACEHOLDER: the steps of the flow you completed
const flowSteps = [
  "Placeholder: first step",
  "Placeholder: second step",
  "Placeholder: third step",
  "Placeholder: final step",
];

export default function ParqOSPage() {
  const index = projects.findIndex((p) => p.slug === "parqos");
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
          Parq
          <span className="font-serif font-normal normal-case italic text-accent">
            OS.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-2xl">
          {project.summary}
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest md:grid-cols-4">
          {[
            ["Role", project.role],
            ["Duration", project.timeline],
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

      {/* The handover */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          The handover
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-7xl">
          A design that started, then{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            stalled.
          </span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 text-lg text-foreground/70">
            <p>
              ParqOS is a parking management system. Another designer had begun
              the design and got stuck on the flow, and I was brought in to
              complete it.
            </p>
            <p>
              {/* PLACEHOLDER: what exactly was missing or broken when you arrived */}
              Placeholder: what you found when you arrived, and what was
              missing or unresolved.
            </p>
          </div>
          <figure>
            <Frame src={images.handover} label="What I inherited" />
            <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
              What I inherited
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Three views */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          The system
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-7xl">
          Three views, one{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            system.
          </span>
        </h2>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {views.map((view, i) => (
            <div key={view.name} className="bg-background p-6 md:p-8">
              <p className="font-mono text-sm text-foreground/50">0{i + 1}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {view.name}
              </h3>
              <p className="mt-4 text-foreground/70">{view.line}</p>
              <div className="mt-6">
                <Frame src={view.image} label={view.name} ratio="4/3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Working inside a design system */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Working inside a system
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Someone else&apos;s rules, my decisions.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          The project came with an existing design system, so my job was to
          design within it rather than around it.
        </p>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          {/* PLACEHOLDER: what you reused, extended or had to add, only real details */}
          Placeholder: what you reused from the system, and where you extended
          it or made a judgement call.
        </p>
      </section>

      {/* The flow */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          The flow
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          The part that was stuck.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          {/* PLACEHOLDER: what the flow is and how you resolved it */}
          Placeholder: the flow you completed, and how you got it moving.
        </p>

        <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-4">
          {flowSteps.map((step, i) => (
            <li key={i} className="bg-background p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Step 0{i + 1}
              </p>
              <p className="mt-6 text-xl font-semibold leading-snug">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6">
          <Frame src={images.flow} label="Full flow" ratio="21/9" />
        </div>
      </section>

      {/* Outcome */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Outcome
        </p>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          {/* PLACEHOLDER: only real, verified results. If you don't know, say so honestly. */}
          Placeholder: what was delivered, and only results you can stand
          behind.
        </p>
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