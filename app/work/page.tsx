import type { Metadata } from "next";
import WorkList from "../components/WorkList";
import ContactCTA from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main>
      <section className="px-6 pb-20 pt-10 md:px-16 md:pb-28 md:pt-12">
        <h1 className="text-4xl font-medium uppercase leading-[0.95] tracking-tighter md:text-6xl">
          Selected work
        </h1>
        <WorkList />
      </section>

      <ContactCTA />
    </main>
  );
}