import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter, Oxanium } from "next/font/google";
import { projects } from "../../data/projects";

// Mimar's own fonts, loaded on this page only
const oxanium = Oxanium({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Mimar Tech",
};

const LIME = "#B7F415";

/* A screenshot inside a frame. fit="top" crops from the top, fit="contain" shows it whole. */
function Shot({
  src,
  alt,
  ratio,
  fit = "top",
  className = "",
}: {
  src: string;
  alt: string;
  ratio: string;
  fit?: "top" | "contain";
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-black/15 bg-[#f1f1ee] ${className}`}
      style={{ aspectRatio: ratio }}
    >
            <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(min-width: 768px) 50vw, 100vw"
        className={fit === "top" ? "object-cover object-top" : "object-contain"}
      />
    </div>
  );
}

const problems = [
  ["No onboarding", "New users had no guided way into the platform."],
  ["No UI/UX behind it", "The first version was only coded. It wasn’t user friendly, and the interface showed it."],
  ["A dashboard like a PDF", "Everything was on one page at once, so users scrolled endlessly."],
];

const paths = [
  {
    title: "A new user",
    steps: ["Invited by email", "Urged to sign up", "Lands in the team that invited them"],
    image: "/work/mimar-tech/onboarding-invite.png",
    alt: "Onboarding screen prompting the user to accept an invite through email",
  },
  {
    title: "An existing user",
    steps: ["Invited to another team", "Prompted to join that team", "Continues with their account"],
    image: "/work/mimar-tech/onboarding-join.png",
    alt: "Onboarding screen where the user joins their team",
  },
];

export default function MimarTechPage() {
  const index = projects.findIndex((p) => p.slug === "mimar-tech");
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      {/* Opening (your dark style) */}
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
          Mimar{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            Tech.
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

      {/* The product */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          The product
        </p>
        <p className="mt-8 max-w-3xl text-2xl font-medium leading-snug md:text-4xl">
          Mimar Tech is a brand of Bimwedo Technology Sdn Bhd. Its platform uses
          BIM (Building Information Modelling) so architecture and engineering
          teams can build a project virtually before the real build, together.
        </p>
      </section>

      {/* The problem */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          The problem
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-7xl">
          It looked like no designer was ever{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            involved.
          </span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <ul className="border-t border-line">
            {problems.map(([title, text], i) => (
              <li key={title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-line py-6">
                <span className="font-mono text-sm text-foreground/50">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
                  <p className="mt-2 text-foreground/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <figure>
            <Shot
              src="/work/mimar-tech/old-page.png"
              alt="A page from the original version of the platform"
              ratio="4/3"
              fit="contain"
            />
            <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
              The original version
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Centerpiece: before / after, in Mimar's own look */}
      <section className={`${inter.className} bg-white px-6 py-20 text-black md:px-16 md:py-28`}>
        <p className="font-mono text-sm uppercase tracking-widest text-black/60">
          The redesign
        </p>
        <h2 className={`${oxanium.className} mt-8 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl`}>
          From PDF to{" "}
          <span className="px-2" style={{ backgroundColor: LIME }}>
            dashboard.
          </span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
          <figure>
            <div className="relative">
              <Shot
                src="/work/mimar-tech/old-dashboard.png"
                alt="The original dashboard, a very long page with everything at once"
                ratio="16/11"
              />
              {/* Fade out: it keeps going */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
              <span className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-widest text-black/70">
                …and it keeps going
              </span>
            </div>
            <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-black/60">
              Before: everything at once
            </figcaption>
          </figure>

          <figure>
            <Shot
              src="/work/mimar-tech/new-dashboard.png"
              alt="The redesigned dashboard, sectioned so the key information fits on one screen"
              ratio="16/11"
            />
            <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-black/60">
              After: what matters, in one screen
            </figcaption>
          </figure>
        </div>

        <p className="mt-10 max-w-xl text-lg leading-snug text-black/70">
          I broke the dashboard into sections and placed the most important
          things where they fit without scrolling: the project timeline and the
          people on the project.
        </p>
      </section>

      {/* How I decided */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          How I decided what mattered
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Ask the person who uses it.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          My supervisor is an architect who also uses a platform like this. I
          spoke with him and did some research, so the priorities came from a
          real user, not from guesswork.
        </p>
      </section>

      {/* Onboarding */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Onboarding
        </p>
        <h2 className="mt-8 max-w-4xl text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Two ways in, one{" "}
          <span className="font-serif font-normal normal-case italic text-accent">
            team.
          </span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-foreground/70">
          People collaborate in teams, and you invite someone by email. The
          platform had no onboarding, so I designed the path for both kinds of
          person who might arrive.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          {paths.map((path) => (
            <div key={path.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                {path.title}
              </p>
              <ol className="mt-4 border-t border-line">
                {path.steps.map((step, i) => (
                  <li key={step} className="grid grid-cols-[3rem_1fr] border-b border-line py-4">
                    <span className="font-mono text-sm text-foreground/50">0{i + 1}</span>
                    <span className="text-lg font-semibold">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 bg-white p-3">
                <Shot src={path.image} alt={path.alt} ratio="4/3" fit="contain" className="!border-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual language, in Mimar's look */}
      <section className={`${inter.className} bg-white px-6 py-20 text-black md:px-16 md:py-28`}>
        <p className="font-mono text-sm uppercase tracking-widest text-black/60">
          Visual language
        </p>
        <h2 className={`${oxanium.className} mt-8 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl`}>
          Their brand, followed.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-black/70">
          Mimar already had brand colours, so I followed them: lime, white and
          black, with Inter for the interface and Oxanium for headers, as in
          their logo.
        </p>

        <div className="mt-12 grid gap-px border border-black/15 bg-black/15 md:grid-cols-3">
          <div className="flex aspect-[4/3] flex-col justify-end p-5 font-mono text-xs uppercase tracking-widest" style={{ backgroundColor: LIME }}>
            <span>Lime</span>
            <span className="mt-1 opacity-60">{LIME}</span>
          </div>
          <div className="flex aspect-[4/3] flex-col justify-end bg-white p-5 font-mono text-xs uppercase tracking-widest">
            <span>White</span>
            <span className="mt-1 opacity-60">Background</span>
          </div>
          <div className="flex aspect-[4/3] flex-col justify-end bg-black p-5 font-mono text-xs uppercase tracking-widest text-white">
            <span>Black</span>
            <span className="mt-1 opacity-60">Text</span>
          </div>
        </div>

        <div className="mt-6 grid gap-px border border-black/15 bg-black/15 md:grid-cols-2">
          <div className="bg-white p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-black/50">Headers: Oxanium</p>
            <p className={`${oxanium.className} mt-6 text-6xl font-bold md:text-7xl`}>Aa</p>
          </div>
          <div className="bg-white p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-black/50">Interface: Inter</p>
            <p className={`${inter.className} mt-6 text-6xl font-semibold md:text-7xl`}>Aa</p>
          </div>
        </div>
      </section>

      {/* Constraints + outcome */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
              Constraints
            </p>
            <p className="mt-8 max-w-md text-lg text-foreground/70">
              I was the only designer, with a short timeline, because the team
              wanted to ship faster. About twenty screens, designed in Figma,
              alongside supervisors who were also developers.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
              Outcome
            </p>
            <p className="mt-8 max-w-md text-lg text-foreground/70">
              The platform has changed a lot since my internship, so I can’t
              point to results. What I can show is the thinking: finding what
              mattered, and giving a coded-only product a clear structure.
            </p>
          </div>
        </div>
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