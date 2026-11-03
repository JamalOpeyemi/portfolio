import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";
import { Reveal, Frame, Eyebrow, Heading } from "../../components/CaseKit";
import Walkthrough, { type WalkthroughStep } from "../../components/Walkthrough";
import {
  ProblemCard,
  Personas,
  JourneyMap,
  PageSpeed,
  ContrastDemo,
  DeviceHero,
} from "../../components/ElysianVisuals";

export const metadata: Metadata = {
  title: "Elysian",
};

const demoUrl = "https://elysian-self.vercel.app/";

// Files live in public/work/elysian/ (for example hero.png)
const shot = (name: string) => `/work/elysian/${name}.png`;

const walkthrough: WalkthroughStep[] = [
  {
    title: "A hero that fills the screen",
    caption:
      "One scent, one line, one action. The text sits on the quiet side of the photo so the product is never covered.",
    image: shot("walk-1-hero"),
    alt: "Elysian home page hero",
  },
  {
    title: "The range in three cards",
    caption:
      "One bestseller from each collection, so a first-time visitor sees the whole range at a glance. Cards are separated by colour, not shadows.",
    image: shot("walk-2-bestsellers"),
    alt: "Three bestseller product cards",
  },
  {
    title: "A short story, early",
    caption:
      "Mrs. Bello wants to know who is behind a small brand before she pays. The story sits right under the products, short and warm.",
    image: shot("walk-3-story"),
    alt: "Brand story section",
  },
  {
    title: "Shop by collection",
    caption:
      "The brand’s own three collections, one at a time. The slider moves on its own, pauses on hover and can be swiped on a phone.",
    image: shot("walk-4-collections"),
    alt: "Collection slider",
  },
  {
    title: "Social proof, kept editorial",
    caption:
      "Sample quotes in a magazine style, with no review-widget cards. In a live version these would be real customer words.",
    image: shot("walk-5-quotes"),
    alt: "Customer quotes section",
  },
  {
    title: "Back to where customers start",
    caption:
      "An Instagram strip closes the loop with the place customers already discover the brand. In this demo it is a static set of images.",
    image: shot("walk-6-instagram"),
    alt: "Instagram strip",
  },
];

const decisions = [
  {
    title: "Collections, not moods",
    text: "My first idea was “shop by mood.” When the real catalog arrived, the founder’s three collections, Perfect Genesis, Imprint and Memory, were already the brand’s own structure. I rebuilt the section as “shop by collection.”",
  },
  {
    title: "Built for a small brand",
    text: "No accounts, a cart drawer instead of a cart page, and a one-page checkout. For a brand with a handful of products, fewer steps means fewer places to drop off.",
  },
  {
    title: "One product page, three types",
    text: "Every scent comes in three formats: diffuser, room spray and car diffuser. My first version treated the car diffuser as a size, and it read wrongly. I rebuilt it as a Type selector that changes the photos and the price together.",
  },
  {
    title: "Readable colour",
    text: "The soft palette looked right but the small text was too faint. By my calculation, the gold text was about 2.4:1 against the ivory background and the grey about 3.6:1; guidance asks for 4.5:1. I kept the palette for lines and surfaces and added deeper text shades, raising both to about 6:1.",
  },
  {
    title: "Calm motion",
    text: "Reveals, a word-by-word heading entrance and a drifting product image give the site a slow, candlelit feel. Everything respects the visitor’s “reduce motion” setting.",
  },
];

const palette = [
  { name: "Ivory", hex: "#F5F0E8", text: "#2C1A0E" },
  { name: "Blush", hex: "#EDD9C8", text: "#2C1A0E" },
  { name: "Deep mocha", hex: "#2C1A0E", text: "#F5F0E8" },
  { name: "Terracotta", hex: "#C4714A", text: "#2C1A0E" },
  { name: "Muted gold", hex: "#B89A6A", text: "#2C1A0E" },
];

const learned = [
  "Design against the real catalog as early as possible; my first structure changed twice.",
  "Keep the data layer swappable. It let me pause the store without losing the work.",
  "Small details carry the feel: slow motion, readable colour, a calm loading state.",
];

export default function ElysianPage() {
  const index = projects.findIndex((p) => p.slug === "elysian");
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      {/* 1. Opening */}
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
        <h1 className="mt-4 text-[16vw] font-medium uppercase leading-[0.9] tracking-tighter md:text-[11vw]">
          Elysian
          <span className="font-serif font-normal normal-case italic text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl font-medium leading-snug md:text-4xl">
          I took a brand that sold through Instagram DMs and designed and built
          a store customers can trust.
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest md:grid-cols-4">
          {[
            ["Role", project.role],
            ["Tools", project.tools],
            ["Year", project.year],
            ["Status", "Concept, launch postponed. Includes placeholder content."],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-foreground/50">{k}</dt>
              <dd className="mt-2 normal-case tracking-normal">{v}</dd>
            </div>
          ))}
        </dl>

        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Live demo ↗
        </a>

        <Reveal className="mt-14">
          <DeviceHero url={demoUrl} />
        </Reveal>
      </section>

      {/* 2. The problem */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>The problem</Eyebrow>
        <Heading>
          No website to land on,{" "}
          <span className="font-serif font-normal normal-case italic">so buyers left.</span>
        </Heading>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-xl text-lg leading-snug text-foreground/70">
            Elysian is a home fragrance brand building its audience on TikTok
            and Instagram. Customers who found it there had to send a direct
            message to ask for prices and check stock. Some never got a quick
            reply and moved on.
          </p>
          <Reveal>
            <ProblemCard />
          </Reveal>
        </div>
      </section>

      {/* 3. Who I designed for */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Who I designed for</Eyebrow>
        <Heading size="md">Two people, one frustration.</Heading>
        <div className="mt-10">
          <Personas />
        </div>
        <p className="mt-6 max-w-2xl text-foreground/60">
          I started with the Empathize phase: tracing the path customers
          already take, from discovering Elysian on TikTok and Instagram to
          messaging for prices and stock, and looking for where that path
          breaks. The founder&apos;s account of her customers added detail on
          top. From this I wrote two proto-personas. They are hypotheses, not
          findings: they don&apos;t come from formal interviews, and a
          usability study with real customers is the first thing I would add.
        </p>
        <div className="mt-12">
          <JourneyMap />
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-snug text-foreground/70">
          Mapping Ama’s journey showed the exact moment to design for: the
          second she looks for a link and finds only a DM.
        </p>
      </section>

      {/* 4. Decisions + walkthrough */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Decisions that shaped the product</Eyebrow>
        <Heading>Five calls that changed the design.</Heading>
        <p className="mt-8 max-w-xl text-lg leading-snug text-foreground/70">
          I worked in five phases: empathize, define, ideate, validate,
          prototype. Digital wireframes for all six pages came first, then a
          clickable prototype. I used AI to speed up drafting, not to decide.
        </p>

        <div className="mt-12 border-t border-line">
          {decisions.map((d, i) => (
            <div
              key={d.title}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-[4rem_1fr_1.4fr] md:gap-10"
            >
              <span className="font-mono text-sm text-foreground/50">0{i + 1}</span>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{d.title}</h3>
              <p className="max-w-xl text-foreground/70">{d.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 font-mono text-xs uppercase tracking-widest text-foreground/50">
          Readable colour, before and after
        </p>
        <div className="mt-4">
          <ContrastDemo />
        </div>

        <p className="mt-20 font-mono text-xs uppercase tracking-widest text-foreground/50">
          The home page, section by section
        </p>
        <Walkthrough steps={walkthrough} />
      </section>

      {/* 5. Design to code */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>From design to code</Eyebrow>
        <Heading>
          Designed in Framer.{" "}
          <span className="font-serif font-normal normal-case italic">Built in code.</span>
        </Heading>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-xl text-lg leading-snug text-foreground/70">
            I built the high-fidelity design in Framer first, which let me
            settle the look quickly. A store also needs collections, filters
            and a cart working with real product data, so I carried the design
            into code. That gave me one system for both design and commerce,
            with full control over performance, accessibility and how the data
            connects.
          </p>
          <div className="space-y-6 text-lg leading-snug text-foreground/70">
            <p>
              The result is a Next.js storefront with collection pages and
              filters, a slider, product pages with the Type selector, a cart
              drawer, search, a checkout and confirmation flow, a branded 404
              and loading skeletons.
            </p>
            <p>
              I designed every screen and made every product decision. I used
              Claude as a pair programmer to write the code step by step, and I
              tested, questioned and redirected each step.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <PageSpeed />
        </div>
        <p className="mt-6 max-w-2xl text-foreground/60">
          I got there after fixing how the main product image loads. I also
          added skip links, visible focus styles, labelled forms and
          reduced-motion support.
        </p>

        <div className="mt-16 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            The pivot
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-snug text-foreground/70">
            Two things changed during the build. The initial catalog turned out
            to be diffusers, room sprays and car diffusers, and the founder
            postponed the launch. I finished the project as a complete,
            clickable demo: the catalog and photos are saved into the project,
            the cart lives in the browser, and the checkout takes no payment.
          </p>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            The visual system
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-snug text-foreground/70">
            A warm palette with Playfair Display for headings and DM Sans for
            everything else, two weights only, no bold. Corners are 8px on
            cards and 4px on buttons, and cards are separated by colour, not
            shadows. The goal was luxury-cozy, and quiet.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-5">
            {palette.map((c) => (
              <div
                key={c.name}
                style={{ backgroundColor: c.hex, color: c.text }}
                className="flex aspect-square flex-col justify-end p-4 font-mono text-xs uppercase tracking-widest"
              >
                <span>{c.name}</span>
                <span className="mt-1 opacity-70">{c.hex}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. Outcome, learned, next */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Outcome and next steps</Eyebrow>
        <Heading size="md">Ready for the founder’s restart.</Heading>
        <p className="mt-8 max-w-2xl text-lg leading-snug text-foreground/70">
          A complete, fast, accessible store experience. Next: a usability test
          of the order flow with five real customers, real product photography,
          payments through Paystack, a domain, and real reviews.
        </p>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/40 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Live demo ↗
        </a>

        <p className="mt-16 font-mono text-xs uppercase tracking-widest text-foreground/50">
          What I learned
        </p>
        <ul className="mt-4 max-w-2xl space-y-3 text-lg leading-snug text-foreground/70">
          {learned.map((l) => (
            <li key={l}>{l}</li>
          ))}
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