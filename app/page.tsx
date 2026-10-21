  import HeroHeadline from "./components/HeroHeadline";
      import WorkList from "./components/WorkList";
        import StoryReveal from "./components/StoryReveal";
          import ContactCTA from "./components/ContactCTA";
            import Marquee from "./components/Marquee";
export default function Home() {
  return (
    <main>
            <section className="relative flex min-h-[85vh] flex-col px-6 pb-10 pt-8 md:px-16">
        {/* Top label row */}
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-foreground/60">
          <span>Portfolio — Issue 01</span>
          <span>Based in Malaysia</span>
        </div>

        {/* Headline (placeholder wording, rewrite it in your own voice) */}
        <HeroHeadline />

        {/* Scrolling strip, pinned to the bottom of the hero */}
        <div className="-mx-6 mt-auto pt-16 md:-mx-16">
          <Marquee />
        </div>
      </section>

      {/* Work section placeholder: the "Work" nav link jumps here */}
        <section id="work" className="px-6 py-24 md:px-16">
    <p className="font-mono text-sm uppercase tracking-widest text-accent">
      01 / Selected Work
    </p>
    <WorkList />
  </section>
    <section id="story" className="px-6 pb-24 pt-24 md:px-16">
    <p className="mb-10 font-mono text-sm uppercase tracking-widest text-accent">
      02 / Story
    </p>
       <StoryReveal />
  </section>
  <ContactCTA />
    </main>
  );
}