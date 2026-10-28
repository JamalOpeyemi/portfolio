import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";
import { Reveal, Frame, Eyebrow, Heading, Flow } from "../../components/CaseKit";

export const metadata: Metadata = {
  title: "ParqOS",
};

/* IMAGES: when you add a file to public/work/parqos/, add its name here (no .png).
   Example: after adding operator-info.png, write "operator-info" in the list. */
const uploaded: string[] = [];

const shot = (name: string) =>
  uploaded.includes(name) ? `/work/parqos/${name}.png` : "";

const focus = [
  ["Information hierarchy", "Making important information easier to scan while keeping detailed operational data accessible."],
  ["Connected workflows", "Clear relationships between overview screens, detailed views, and actions such as editing or reviewing tariffs."],
  ["Interface consistency", "Coherent patterns across tables, modals, side sheets, and feedback messages."],
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
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1fr] md:gap-16">
          <p className="max-w-xl text-lg leading-snug text-foreground/70">
            ParqOS is a parking operations management platform that brings
            operator information, site management, equipment, pricing, and
            access administration into one interface. My work focused on making
            that complex information easier to navigate, with more consistent
            patterns for viewing and managing operational data.
          </p>
          <dl className="grid grid-cols-1 gap-4 font-mono text-xs uppercase tracking-widest">
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

        {/* Hero visual: one large screen, two smaller overlapping on desktop */}
        <Reveal className="relative mt-14">
          <Frame src={shot("hero-operator-info")} label="Operator Info (large)" ratio="16/9" caption="Operator Info" />
          <div className="absolute -bottom-6 right-4 hidden w-[34%] md:block">
            <Frame src={shot("hero-site-info")} label="Site Info" ratio="16/10" />
          </div>
          <div className="absolute -bottom-12 right-[38%] hidden w-[26%] md:block">
            <Frame src={shot("hero-tariff-plans")} label="Tariff Plans" ratio="16/10" />
          </div>
        </Reveal>
      </section>

      {/* 2. Overview */}
      <section className="mt-12 border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Overview</Eyebrow>
        <Heading>One platform. Multiple layers of operation.</Heading>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 text-lg leading-snug text-foreground/70">
            <p>
              Managing parking operations involves more than a single dashboard.
              Operators work across sites, equipment, pricing configurations,
              back-office information, and user access.
            </p>
            <p>
              The design challenge was to make these areas feel organised and
              connected, while keeping the information and controls each task
              needs.
            </p>
            {/* DELETE this paragraph if it isn't accurate */}
            <p>
              I joined to carry the design and flow forward after another
              designer had begun it.
            </p>
          </div>
          <Frame src={shot("overview-admin")} label="Main administrative interface" ratio="4/3" caption="The administrative interface" />
        </div>
      </section>

      {/* 3. Challenge */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>The challenge</Eyebrow>
        <Heading>
          Complexity is unavoidable.{" "}
          <span className="font-serif font-normal normal-case italic">Confusion isn&apos;t.</span>
        </Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
          Several interconnected areas of administration, each with its own
          tables, controls, and workflows. The aim: a structured, consistent
          interface that doesn&apos;t hide important information or overwhelm
          with detail.
        </p>
        <ol className="mt-12 border-t border-line">
          {focus.map(([title, text], i) => (
            <li key={title} className="grid gap-3 border-b border-line py-6 md:grid-cols-[4rem_1fr_1fr] md:gap-8">
              <span className="font-mono text-sm text-foreground/50">0{i + 1}</span>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h3>
              <p className="max-w-md text-foreground/70">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Design decisions */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Design decisions</Eyebrow>
        <p className="mt-8 max-w-2xl text-lg leading-snug text-foreground/70">
          Rather than treating each screen as isolated, I worked across related
          areas, considering how information is presented, how details are
          accessed, and how actions fit into the wider experience.
        </p>

        {/* Story A: Operator (paired screens) */}
        <Reveal className="mt-20">
          <Heading size="md">A clearer view of operator information.</Heading>
          <div className="mt-10 grid gap-10 md:grid-cols-[7fr_5fr] md:gap-14">
            <Frame src={shot("operator-overview")} label="Operator Info overview" ratio="16/10" caption="Overview" />
            <div className="flex flex-col justify-between gap-8">
              <p className="max-w-md text-lg leading-snug text-foreground/70">
                A concise summary is the entry point, while a side sheet opens
                deeper details without losing the context of the main page.
                Edit Operator and Edit Branding are separate routes for managing
                different parts of the operator.
              </p>
              <Frame src={shot("operator-side-sheet")} label="Operator detail side sheet" ratio="4/3" caption="Detail side sheet" />
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Frame src={shot("operator-sites")} label="Associated sites table" ratio="16/7" caption="Associated sites" />
            <Frame src={shot("operator-edit")} label="Edit Operator / Edit Branding" ratio="16/7" caption="Edit routes" />
          </div>
        </Reveal>

        {/* Story B: Site (large + crops) */}
        <Reveal className="mt-28">
          <Heading size="md">Bringing site information into focus.</Heading>
          <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
            Site management connects a site&apos;s core information and tariff
            summary with the equipment that runs it: LPR cameras, payment
            terminals, and barriers. Keeping these together gives a clear
            structure for moving between a site and its components.
          </p>
          <div className="mt-10">
            <Frame src={shot("site-info")} label="Site Info" ratio="21/9" caption="Site information and tariff summary" />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Frame src={shot("site-lpr")} label="LPR Cameras table" ratio="4/3" caption="LPR cameras" />
            <Frame src={shot("site-terminals")} label="Payment Terminals (crop)" ratio="4/3" caption="Payment terminals" />
            <Frame src={shot("site-barriers")} label="Barriers (crop)" ratio="4/3" caption="Barriers" />
          </div>
        </Reveal>

        {/* Story C: Tariffs (close-up) */}
        <Reveal className="mt-28">
          <Heading size="md">Making pricing information easier to read.</Heading>
          <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
            Tariffs add another layer: pricing configurations and the rules
            that decide how they apply. The direction was to reduce unnecessary
            separation between related information and make details easier to
            scan, staying within the existing design system.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Frame src={shot("tariff-plans")} label="Tariff Plans overview" ratio="4/3" caption="Tariff plans" />
            <Frame src={shot("tariff-details")} label="Tariff details" ratio="4/3" caption="Tariff details" />
          </div>
          <div className="mt-6">
            <Frame src={shot("pricing-rules")} label="Pricing Rules table (close-up)" ratio="21/8" caption="Pricing rules" />
            <p className="mt-4 font-mono text-xs uppercase tracking-widest">
              <span className="mr-3 bg-accent px-2 py-1 text-background">End Time</span>
              <span className="text-foreground/60">
                The pricing-rules table shows each rule&apos;s end time alongside the other fields.
              </span>
            </p>
          </div>
        </Reveal>

        {/* Stories D and E: supporting */}
        <Reveal className="mt-28">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            Also across the platform
          </p>
          <div className="mt-6 grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
                A consistent structure for back offices.
              </h3>
              <p className="mt-4 max-w-md text-foreground/70">
                An All Back Offices view and a Back Office Info view keep a
                familiar administrative structure as users move between areas,
                with editing organised around the selected back office.
              </p>
              <div className="mt-6 space-y-6">
                <Frame src={shot("backoffice-info")} label="Back Office Info" ratio="16/10" caption="Back Office Info" />
                <Frame src={shot("backoffice-edit")} label="Edit Back Office modal" ratio="16/8" caption="Edit modal" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
                User administration, brought together.
              </h3>
              <p className="mt-4 max-w-md text-foreground/70">
                Managing users, defining roles, configuring permissions, and
                assigning users sit in one management experience, organised as
                four tabs: Users, Roles, Permissions, and User Assignment.
              </p>
              <div className="mt-6 space-y-6">
                <Frame src={shot("users-main")} label="User Management" ratio="16/10" caption="User Management" />
                <Frame src={shot("users-assignment")} label="User Assignment tab" ratio="16/8" caption="User Assignment" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. System flows */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>The system</Eyebrow>
        <Heading>Connected screens. Distinct responsibilities.</Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
          Each area supports a different responsibility, but the experience
          depends on how users move between overviews, details, and actions.
        </p>
        <div className="mt-12">
          <Flow title="Operator management" nodes={["Operator overview", "Operator Info", "View more", ["Edit Operator", "Edit Branding"]]} />
          <Flow title="Site management" nodes={["Operator's site list", "Site Info", ["LPR Cameras", "Payment Terminals", "Barriers", "View Tariffs"]]} />
          <Flow title="Tariffs and pricing" nodes={["Tariff Plans", "Tariff details", "Pricing Rules"]} />
          <Flow title="Back office" nodes={["All Back Offices", "Back Office Info", "Edit Back Office"]} />
          <Flow title="User and access (tabs in one view)" nodes={["Users", "Roles", "Permissions", "User Assignment"]} />
        </div>
      </section>

      {/* 6. Interaction details */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Interaction details</Eyebrow>
        <Heading>Consistency lives in the details.</Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
          Recurring patterns (tables, modals, side sheets, and toast
          notifications) each serve a different role across the product.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Frame src={shot("detail-modal")} label="Modal with title and subtitle" ratio="4/3" caption="Modal" />
          <Frame src={shot("detail-side-sheet")} label="Side sheet with its parent screen" ratio="4/3" caption="Side sheet" />
          <Frame src={shot("detail-toast")} label="Toast notification" ratio="4/3" caption="Toast notification" />
          <Frame src={shot("detail-table")} label="Table or form detail" ratio="4/3" caption="Table detail" />
        </div>
      </section>

      {/* 7. Selected screens */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Selected screens</Eyebrow>
        <Heading>The experience, across the platform.</Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
          From operator and site information to pricing and access
          administration, one connected interface.
        </p>
        <div className="mt-12 space-y-6">
          <Reveal><Frame src={shot("gallery-operator")} label="Operator Info (final)" ratio="16/9" /></Reveal>
          <div className="grid gap-6 md:grid-cols-[5fr_7fr]">
            <Reveal><Frame src={shot("gallery-site")} label="Site Info (final)" ratio="4/3" /></Reveal>
            <Reveal delay={0.1}><Frame src={shot("gallery-pricing")} label="Tariffs and Pricing Rules (final)" ratio="16/10" /></Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-[7fr_5fr]">
            <Reveal><Frame src={shot("gallery-backoffice")} label="Back Office Info (final)" ratio="16/10" /></Reveal>
            <Reveal delay={0.1}><Frame src={shot("gallery-users")} label="User Management (final)" ratio="4/3" /></Reveal>
          </div>
        </div>
      </section>

      {/* 8. Reflection */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Reflection</Eyebrow>
        <Heading>Designing beyond the screen.</Heading>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-lg text-lg leading-snug text-foreground/70">
            Working across ParqOS meant considering more than individual
            layouts. The work reinforced the importance of clear information
            hierarchy, connected workflows, and consistent interface patterns
            in complex administrative software.
          </p>
          <p className="max-w-lg text-lg leading-snug text-foreground/70">
            If the project continued, the next step would be to validate key
            workflows with users and stakeholders, find points of friction, and
            use those findings to guide further refinement.
          </p>
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