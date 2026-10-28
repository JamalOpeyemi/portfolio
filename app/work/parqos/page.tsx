import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";
import { Reveal, Frame, NaturalFrame, Eyebrow, Heading, Flow } from "../../components/CaseKit";

export const metadata: Metadata = {
  title: "ParqOS",
};

const img = (name: string) => `/work/parqos/${name}.png`;

// EDIT HERE: the handover line (delete it if it isn't accurate)
const handover =
  "I was brought in mid-project to complete the design and flow, working within an existing design system.";

const focus = [
  ["Information hierarchy", "Important information is easy to scan, and detail stays accessible."],
  ["Connected workflows", "Clear paths between overviews, detailed views and actions."],
  ["Interface consistency", "Coherent patterns across tables, modals, side sheets and messages."],
];

export default function ParqOSPage() {
  const index = projects.findIndex((p) => p.slug === "parqos");
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      {/* 1. Hero */}
      <section className="px-6 pb-16 pt-12 md:px-16">
        <Link
          href="/#work"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent"
        >
          ← All work
        </Link>
        <p className="mt-10 font-mono text-sm uppercase tracking-widest text-foreground/60">
          Selected work / Product design
        </p>
        <h1 className="mt-4 text-[18vw] font-medium uppercase leading-[0.9] tracking-tighter md:text-[13vw]">
          Parq
          <span className="font-serif font-normal normal-case italic text-accent">OS.</span>
        </h1>
        <p className="mt-6 max-w-4xl text-2xl font-medium leading-snug md:text-5xl">
          Designing for the complexity of parking operations.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-xl text-lg leading-snug text-foreground/70">
            ParqOS is a parking operations platform that brings operators,
            sites, equipment, pricing and access into one interface. My work
            focused on making that information easier to navigate, with
            consistent patterns for viewing and managing it.
          </p>
          <dl className="grid gap-4 font-mono text-xs uppercase tracking-widest">
            {[
              ["Discipline", "UX/UI Design"],
              ["Project type", "Enterprise SaaS"],
              ["Focus", "Administrative interfaces, information architecture, interaction design"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-line pt-3">
                <dt className="text-foreground/50">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="mt-14">
          <Frame src={img("final-look")} label="ParqOS sign-up page on a laptop" ratio="16/9" fit="contain" />
        </Reveal>
      </section>

      {/* 2. Challenge (overview merged in) */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>The challenge</Eyebrow>
        <Heading>
          Complexity is unavoidable.{" "}
          <span className="font-serif font-normal normal-case italic">Confusion isn&apos;t.</span>
        </Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-16">
          <p className="max-w-xl text-lg leading-snug text-foreground/70">
            Operators work across sites, equipment, pricing, back-office
            information and user access. The aim was an interface that feels
            organised and connected without hiding what each task needs.
          </p>
          <p className="max-w-xl text-lg leading-snug text-foreground/70">{handover}</p>
        </div>
        <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {focus.map(([title, text]) => (
            <li key={title} className="bg-background p-6">
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-foreground/70">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. The system: the spine of the page */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>The system</Eyebrow>
        <Heading>Connected screens. Distinct responsibilities.</Heading>

        <div className="mt-14 space-y-4">
          {/* Operator */}
          <Reveal className="grid gap-8 md:grid-cols-[5fr_7fr] md:gap-14">
            <div>
              <Flow
                title="Operator management"
                nodes={["Operator overview", "Operator Info", "View more", ["Edit Operator", "Edit Branding"]]}
              />
              <p className="max-w-md text-lg leading-snug text-foreground/70">
                A concise summary is the entry point, and a side sheet opens
                deeper details without losing the page behind it. Edit Operator
                and Edit Branding are separate routes for different jobs.
              </p>
            </div>
            <Frame src={img("operator-overview")} label="Operator Info overview" ratio="16/10" caption="Operator Info" />
          </Reveal>

          {/* Site */}
          <Reveal className="grid gap-8 pt-10 md:grid-cols-[5fr_7fr] md:gap-14">
            <div>
              <Flow
                title="Site management"
                nodes={["Operator's site list", "Site Info", ["LPR Cameras", "Payment Terminals", "Barriers", "View Tariffs"]]}
              />
              <p className="max-w-md text-lg leading-snug text-foreground/70">
                A site&apos;s core information and tariff summary sit beside the
                equipment that runs it: cameras, payment terminals and barriers.
                One place to move between a site and its parts.
              </p>
            </div>
            <Frame src={img("site-info")} label="Site Info" ratio="16/10" caption="Site Info" />
          </Reveal>

          {/* Tariffs */}
          <Reveal className="pt-10">
            <div className="grid gap-8 md:grid-cols-[5fr_7fr] md:gap-14">
              <div>
                <Flow
                  title="Tariffs and pricing"
                  nodes={["Tariff Plans", "Tariff details", "Pricing Rules"]}
                />
                <p className="max-w-md text-lg leading-snug text-foreground/70">
                  Pricing configuration and its rules, made easier to scan
                  within the existing design system.
                </p>
              </div>
              <Frame src={img("tariff-plans")} label="Tariff Plans" ratio="16/10" caption="Tariff Plans" />
            </div>
            <div className="mt-8">
              <Frame src={img("pricing-rules")} label="Pricing Rules table" ratio="21/8" caption="Pricing Rules" />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest">
                <span className="mr-3 bg-accent px-2 py-1 text-background">End Time</span>
                <span className="text-foreground/60">
                  Each rule&apos;s end time is visible alongside its other fields.
                </span>
              </p>
            </div>
          </Reveal>

          {/* Back office + Users: supporting, one line each */}
          <Reveal className="grid gap-4 pt-10 md:grid-cols-2 md:gap-14">
            <div>
              <Flow
                title="Back office"
                nodes={["All Back Offices", "Back Office Info", "Edit Back Office"]}
              />
              <p className="max-w-md text-foreground/70">
                The same administrative structure carries over, so a new area
                feels familiar.
              </p>
            </div>
            <div>
              <Flow
                title="User and access (tabs in one view)"
                nodes={["Users", "Roles", "Permissions", "User Assignment"]}
              />
              <p className="max-w-md text-foreground/70">
                Users, roles, permissions and assignment live together as four
                tabs in one management view.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Details */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Details: modal, side sheet, toast</Eyebrow>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
          <NaturalFrame src={img("detail-modal")} label="Modal with title and subtitle" caption="Modal" />
          <NaturalFrame src={img("detail-side-sheet")} label="Side sheet with its parent screen" caption="Side sheet" />
          <NaturalFrame src={img("detail-toast")} label="Toast notification" caption="Toast notification" />
        </div>
      </section>

      {/* 5. Reflection */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Reflection</Eyebrow>
        <Heading size="md">Designing beyond the screen.</Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
          Working across ParqOS meant thinking about more than individual
          layouts. Clear hierarchy, connected workflows and consistent patterns
          matter most in complex administrative software.
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