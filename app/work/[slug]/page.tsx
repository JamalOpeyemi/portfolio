import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

const sections = [
  "Challenge",
  "Research insights",
  "Flows & wireframes",
  "Final screens",
  "Outcome",
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

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

        <p className="mt-10 font-mono text-sm uppercase tracking-widest text-accent">
          Case study {project.id}
        </p>
        <h1 className="mt-4 text-[13vw] font-bold leading-[0.88] tracking-tight md:text-[9vw]">
          {project.title}
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

      {/* Hero mockup */}
      <section className="px-6 md:px-16">
        <div className="flex aspect-[16/9] w-full items-center justify-center border border-foreground/30 bg-[#1c1c1e] font-mono text-sm uppercase tracking-widest text-foreground/60">
          Hero mockup — placeholder
        </div>
      </section>

      {/* Story sections */}
      {sections.map((title, i) => (
        <section key={title} className="px-6 py-20 md:px-16 md:py-28">
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            0{i + 1} / {title}
          </p>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Placeholder: one concise sentence connecting the visual below. Add
            only real findings and results.
          </p>
          <div className="mt-10 flex aspect-[16/9] w-full items-center justify-center border border-foreground/30 bg-[#1c1c1e] font-mono text-sm uppercase tracking-widest text-foreground/60">
            {title} visual — placeholder
          </div>
        </section>
      ))}

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