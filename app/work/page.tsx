import type { Metadata } from "next";
import WorkList from "../components/WorkList";
import { Reveal } from "../components/CaseKit";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main>
      <section className="px-6 pb-24 pt-6 md:px-16 md:pb-32 md:pt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
          Selected work
        </p>

        <Reveal>
          <h1 className="mt-10 w-full whitespace-nowrap text-[length:calc((100vw_-_3rem)/5.6)] font-medium uppercase leading-[1] tracking-tighter md:mt-14 md:text-[length:calc((100vw_-_8rem)/5.8)] md:leading-[0.9]">
            <span className="block">Selected</span>
            <span className="block text-right">Work</span>
          </h1>
        </Reveal>

        <WorkList />
      </section>
    </main>
  );
}