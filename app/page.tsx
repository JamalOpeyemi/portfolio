export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        Portfolio — Issue 01
      </p>
      <h1 className="mt-6 text-[14vw] font-bold leading-[0.9] tracking-tight">
        Elijah{" "}
        <span className="font-serif font-normal italic text-accent">the</span>{" "}
        Great
      </h1>
      <p className="mt-8 max-w-xl text-lg text-foreground/70">
        Test page. If you can see three different typefaces and an orange-red
        accent, the setup works.
      </p>
    </main>
  );
}