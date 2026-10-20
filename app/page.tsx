export default function Home() {
  return (
    <main>
      <section className="relative min-h-[85vh] overflow-hidden px-6 pb-10 pt-8 md:px-16">
        {/* Top label row */}
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-foreground/60">
          <span>Portfolio — Issue 01</span>
          <span>Based in Malaysia</span>
        </div>

        {/* Portrait placeholder: replace with your photo later */}
        <div className="mt-10 aspect-[3/4] w-full max-w-xs border border-line bg-surface md:absolute md:right-16 md:top-24 md:mt-0 md:w-[28vw] md:max-w-none">
          <div className="flex h-full items-end p-4 font-mono text-xs uppercase tracking-widest text-foreground/50">
            Portrait — placeholder
          </div>
        </div>

        {/* Headline (placeholder wording, rewrite it in your own voice) */}
        <h1 className="relative z-10 mt-10 text-[13vw] font-bold leading-[0.88] tracking-tight md:mt-16 md:text-[10vw]">
          Interfaces
          <br />
          with a{" "}
          <span className="font-serif font-normal italic text-accent">
            point
          </span>
          <br />
          of view.
        </h1>

        <p className="relative z-10 mt-10 font-mono text-xs uppercase tracking-widest text-foreground/60">
          UX/UI Designer
        </p>
      </section>

      {/* Work section placeholder: the "Work" nav link jumps here */}
      <section id="work" className="min-h-screen px-6 py-24 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          01 / Selected Work
        </p>
      </section>
    </main>
  );
}