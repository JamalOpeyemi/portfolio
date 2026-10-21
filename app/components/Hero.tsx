import HeroHeadline from "./HeroHeadline";
import Marquee from "./Marquee";

// PLACEHOLDERS: replace with your own words and your real resume link.
const resumeUrl = "#"; // paste your resume link here
const intro =
  "Placeholder: one or two sentences on what you do and who you do it for.";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col px-6 pt-8 md:px-16">
      {/* Info row */}
      <div className="grid grid-cols-2 gap-y-2 font-mono text-xs uppercase tracking-widest text-foreground/60 md:grid-cols-3">
        <span className="whitespace-nowrap">Portfolio — Issue 01</span>
        <span className="order-3 col-span-2 whitespace-nowrap md:order-none md:col-span-1 md:text-center">
          UI/UX Designer / Vibe Coder
        </span>
        <span className="whitespace-nowrap text-right">Based in Malaysia</span>
      </div>

      {/* Name, centered in the remaining space */}
      <div className="flex flex-1 items-center py-8">
        <HeroHeadline />
      </div>

      {/* Intro, scroll cue, buttons */}
      <div className="grid items-end gap-6 pb-8 md:grid-cols-3">
        <p className="max-w-sm text-base leading-snug text-foreground/70 md:text-lg">
          {intro}
        </p>

        <div
          aria-hidden="true"
          className="hidden justify-center font-mono text-xs uppercase tracking-widest text-foreground/50 md:flex"
        >
          Scroll <span className="scroll-cue-arrow ml-2">↓</span>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Resume ↗
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/40 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            See work ↓
          </a>
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="-mx-6 md:-mx-16">
        <Marquee />
      </div>
    </section>
  );
}