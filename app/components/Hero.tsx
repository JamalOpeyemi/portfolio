import HeroHeadline from "./HeroHeadline";

// PLACEHOLDERS: replace with your own words and your real resume link.
const resumeUrl = "#"; // paste your resume link here
const intro =
  "Placeholder: one or two sentences on what you do and who you do it for.";

export default function Hero() {
  return (
    <section className="flex flex-col px-6 pb-12 pt-6 md:min-h-[calc(100svh-4rem)] md:px-16 md:pb-0 md:pt-8">
      {/* Info row: one line on every screen size */}
      <div className="flex items-center justify-between gap-1 font-mono text-[9px] uppercase tracking-normal text-foreground/60 md:grid md:grid-cols-3 md:text-xs md:tracking-widest">
        <span className="whitespace-nowrap">
          Portfolio<span className="hidden md:inline"> — Issue 01</span>
        </span>
        <span className="whitespace-nowrap md:text-center">
          UI/UX Designer / Vibe Coder
        </span>
        <span className="whitespace-nowrap md:text-right">
          <span className="hidden md:inline">Based in </span>Malaysia
        </span>
      </div>

      {/* Name (and, on phones only, the intro right beneath it) */}
      <div className="mt-10 flex flex-col gap-8 md:mt-0 md:flex-1 md:justify-center md:py-8">
        <HeroHeadline />
        <p className="max-w-xs text-base leading-snug text-foreground/70 md:hidden">
          {intro}
        </p>
      </div>

      {/* Desktop intro, scroll cue, buttons */}
      <div className="mt-10 grid items-end gap-6 md:mt-0 md:grid-cols-3 md:pb-10">
        <p className="hidden max-w-sm text-lg leading-snug text-foreground/70 md:block">
          {intro}
        </p>

        <div
          aria-hidden="true"
          className="hidden justify-center font-mono text-xs uppercase tracking-widest text-foreground/50 md:flex"
        >
          Scroll <span className="scroll-cue-arrow ml-2">↓</span>
        </div>

        <div className="flex justify-center gap-3 md:justify-end">
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
    </section>
  );
}