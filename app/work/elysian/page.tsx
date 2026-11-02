import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../data/projects";
import { Reveal, Frame, Eyebrow, Heading } from "../../components/CaseKit";
import Walkthrough, { type WalkthroughStep } from "../../components/Walkthrough";

export const metadata: Metadata = {
  title: "Elysian",
};

const demoUrl = "https://elysian-self.vercel.app/";

/* IMAGES: after you add a file to public/work/elysian/, add its name here (no .png).
   Example: const uploaded = ["hero", "personas"]; */
const uploaded: string[] = [];

const shot = (name: string) =>
  uploaded.includes(name) ? `/work/elysian/${name}.png` : "";

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
    text: "The soft palette looked right but the small text was too faint. By my calculation, the gold text was about 2.4:1 against the cream background and the grey about 3.6:1; guidance asks for 4.5:1. I kept the palette for lines and surfaces and added deeper text shades, raising both to about 6:1.",
  },
  {
    title: "Calm motion",
    text: "Reveals, a word-by-word heading entrance and a drifting product image give the site a slow, candlelit feel. Everything respects the visitor’s “reduce motion” setting.",
  },
];

// PLACEHOLDER: add the real hex codes from your Elysian design
const palette = [
  { name: "Ivory", hex: "" },
  { name: "Blush", hex: "" },
  { name: "Deep mocha", hex: "" },
  { name: "Terracotta", hex: "" },
  { name: "Muted gold", hex: "" },
];

const sample = [
  "Product photos are AI-generated from references of the real products.",
  "Prices, customer quotes, the founder note, FAQ answers and contact details are sample content.",
  "The checkout takes no payment and stores nothing.",
  "The Instagram strip is a static set of images, not a live feed.",
];

const learned = [
  "Design against the real catalog as early as possible; my first structure changed twice.",
  "Keep the data layer swappable. It let me pause the store without losing the work.",
  "Small details carry the feel: slow motion, readable colour, a calm loading state.",
  "Being open about what was sample or AI-generated builds more trust than hiding it.",
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
            ["Status", "Concept. The founder postponed the launch."],
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
          <Frame
            src={shot("hero")}
            label="The finished home page, on a laptop and a phone"
            ratio="16/9"
            fit="contain"
          />
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
          <div className="space-y-6 text-lg leading-snug text-foreground/70">
            <p>
              Elysian is a home fragrance brand run by a founder I know well:
              my sister. Customers found it on TikTok and Instagram, then had to
              send a direct message to ask for prices and check stock. Some
              never got a quick reply and moved on.
            </p>
            <p className="text-foreground">
              How might we create a website for Elysian that builds trust, shows
              the products beautifully, and makes ordering so easy that no
              customer drops off before completing a purchase?
            </p>
          </div>
          <Frame src={shot("problem")} label="Problem statement and HMW" ratio="4/3" />
        </div>
      </section>

      {/* 3. Who I designed for */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>Who I designed for</Eyebrow>
        <Heading size="md">Two people, one frustration.</Heading>
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Ama, 28
            </p>
            <p className="mt-4 text-lg leading-snug text-foreground/80">
              Finds brands on TikTok, loves the look of Elysian, but gives up
              when she has to DM to order.
            </p>
          </div>
          <div className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              Mrs. Bello, 44
            </p>
            <p className="mt-4 text-lg leading-snug text-foreground/80">
              Hears about brands through friends and wants a proper website
              before she will pay a small business.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-foreground/60">
          To be clear about their basis: these are proto-personas, built from
          first-hand knowledge of the brand and what the founder told me, not
          from formal interviews. I treated them as hypotheses to test, and a
          usability study with real customers is the first thing I would add.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Frame src={shot("personas")} label="Both personas side by side" ratio="4/3" caption="Personas" />
          <Frame src={shot("journey-map")} label="Ama's journey map, from discovery to drop-off" ratio="4/3" caption="Journey map" />
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-snug text-foreground/70">
          Mapping Ama’s journey showed the exact moment to design for: the
          second she looks for a link and finds only a DM.
        </p>
      </section>

      {/* 4. Decisions + walkthrough: the centrepiece */}
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
          <div className="space-y-6 text-lg leading-snug text-foreground/70">
            <p>
              I built the high-fidelity design in Framer first. It has no native
              commerce, so I needed a paid plugin, and wiring collections,
              filters and carts through it took more effort than the design
              itself. I decided to build the storefront in code, which gave me
              full control over the design I had already made.
            </p>
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
          <div className="space-y-6">
            <Frame src={shot("framer-design")} label="The Framer design" ratio="16/10" caption="Framer" />
            <Frame src={shot("coded-home")} label="The coded site" ratio="16/10" caption="Code" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Frame src={shot("pagespeed-home")} label="PageSpeed Insights: home page, 96 on mobile" ratio="4/3" caption="Home page: 96 on mobile" />
          <Frame src={shot("pagespeed-product")} label="PageSpeed Insights: product page, 97 on mobile" ratio="4/3" caption="Product page: 97 on mobile" />
        </div>
        <p className="mt-6 max-w-2xl text-foreground/60">
          I got there after fixing how the main product image loads. I also
          added skip links, visible focus styles, labelled forms and
          reduced-motion support.
        </p>

        {/* The pivot, folded in */}
        <div className="mt-16 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
            The pivot
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-snug text-foreground/70">
            Two things changed during the build. The real catalog was
            diffusers, room sprays and car diffusers, not candles, and the
            founder postponed the launch. I finished the project as a complete,
            clickable demo: the catalog and photos are saved into the project,
            the cart lives in the browser, and the checkout takes no payment.
          </p>
        </div>

        {/* Visual system, built in code */}
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
                style={c.hex ? { backgroundColor: c.hex } : undefined}
                className="flex aspect-square flex-col justify-end bg-[#151516] p-4 font-mono text-xs uppercase tracking-widest"
              >
                <span className="mix-blend-difference">{c.name}</span>
                <span className="mt-1 opacity-60 mix-blend-difference">{c.hex || "add hex"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What is real and what is sample */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <Eyebrow>What is real and what is sample</Eyebrow>
        <Heading size="md">To keep this honest.</Heading>
        <ul className="mt-10 border-t border-line">
          {sample.map((s) => (
            <li key={s} className="border-b border-line py-5 text-lg text-foreground/80">
              {s}
            </li>
          ))}
        </ul>
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