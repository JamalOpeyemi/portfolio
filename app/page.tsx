import WorkList from "./components/WorkList";
import StoryReveal from "./components/StoryReveal";
import ContactCTA from "./components/ContactCTA";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* The "Work" nav link jumps here */}
      <section id="work" className="px-6 py-24 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Selected Work
        </p>
        <WorkList />
      </section>

      <section id="story" className="px-6 pb-24 pt-24 md:px-16">
        <p className="mb-10 font-mono text-sm uppercase tracking-widest text-accent">
          Story
        </p>
        <StoryReveal />
      </section>
      <Services />

      <ContactCTA />
    </main>
  );
}