  import HeroHeadline from "./components/HeroHeadline";
    import RevealBlock from "./components/RevealBlock";
      import WorkList from "./components/WorkList";
        import StoryReveal from "./components/StoryReveal";
          import ContactCTA from "./components/ContactCTA";
export default function Home() {
  return (
    <main>
      <section className="relative min-h-[85vh] px-6 pb-10 pt-8 md:min-h-[max(85vh,calc(37.4vw_+_8rem))] md:px-16">
        {/* Top label row */}
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-foreground/60">
          <span>Portfolio — Issue 01</span>
          <span>Based in Malaysia</span>
        </div>

        {/* Portrait placeholder: replace with your photo later */}
         <RevealBlock
    delay={0.3}
    className="relative z-0 mt-10 aspect-[3/4] w-full max-w-xs border border-foreground/30 bg-[#1c1c1e] md:absolute md:right-16 md:top-24 md:mt-0 md:w-[28vw] md:max-w-none"
  >
    <div className="flex h-full flex-col items-center justify-center gap-1 text-center font-mono text-sm uppercase tracking-widest text-foreground/80">
      <span>Portrait</span>
      <span className="text-foreground/50">Placeholder</span>
    </div>
  </RevealBlock>

        {/* Headline (placeholder wording, rewrite it in your own voice) */}
          <HeroHeadline />

        <p className="relative z-10 mt-10 font-mono text-xs uppercase tracking-widest text-foreground/60">
          UX/UI Designer
        </p>
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