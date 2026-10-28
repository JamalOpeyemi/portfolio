import Link from "next/link";
import WorkList from "./components/WorkList";
import StoryReveal from "./components/StoryReveal";
import Services from "./components/Services";
import ContactCTA from "./components/ContactCTA";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* The "See work" button jumps here */}
      <section id="work" className="px-6 py-24 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
          Selected Work
        </p>
        <WorkList />
        <Link
          href="/work"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-accent"
        >
          See all work →
        </Link>
      </section>

      <section id="story" className="px-6 pb-24 pt-24 md:px-16">
        <p className="mb-10 font-mono text-sm uppercase tracking-widest text-foreground/60">
          Story
        </p>
        <StoryReveal />
      </section>

      <Services />

      <ContactCTA />
    </main>
  );
}