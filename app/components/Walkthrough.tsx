"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type WalkthroughStep = {
  title: string;
  caption: string;
  image: string; // "" shows a placeholder
  alt: string;
};

function Placeholder({ alt }: { alt: string }) {
  return (
    <div className="flex h-full min-h-40 items-center justify-center p-4 text-center font-mono text-xs uppercase tracking-widest text-foreground/50">
      {alt}
    </div>
  );
}

export default function Walkthrough({
  steps,
  label = "Home page walkthrough",
}: {
  steps: WalkthroughStep[];
  label?: string;
}) {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLLIElement | null)[]>([]);

  // The caption crossing the middle of the screen becomes the active one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    blocks.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div aria-label={label} className="mt-12">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        {/* Pinned browser frame: large screens only */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="overflow-hidden border border-foreground/25 bg-[#151516]">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-foreground/20" />
                <span className="h-2 w-2 rounded-full bg-foreground/20" />
                <span className="h-2 w-2 rounded-full bg-foreground/20" />
              </div>
              <div className="relative aspect-[16/10] bg-[#F5F0E8]">
                {steps.map((step, i) => (
                  <div
                    key={step.title}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {step.image ? (
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        unoptimized
                        sizes="55vw"
                        className="object-contain"
                      />
                    ) : (
                      <Placeholder alt={step.alt} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/50">
              {pad(active + 1)} / {pad(steps.length)}
            </p>
          </div>
        </div>

        {/* Captions */}
        <ol className="space-y-12 lg:space-y-0">
          {steps.map((step, i) => (
            <li
              key={step.title}
              ref={(el) => {
                blocks.current[i] = el;
              }}
              data-index={i}
              className="lg:flex lg:min-h-[80vh] lg:items-center"
            >
              <div
                className={`lg:transition-opacity lg:duration-500 motion-reduce:lg:transition-none ${
                  i === active ? "lg:opacity-100" : "lg:opacity-30"
                }`}
              >
                {/* Whole image, inline on phones and tablets */}
                <div className="mb-6 overflow-hidden border border-foreground/25 bg-[#F5F0E8] lg:hidden">
                  {step.image ? (
                    <Image
                      src={step.image}
                      alt={step.alt}
                      width={0}
                      height={0}
                      unoptimized
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  ) : (
                    <Placeholder alt={step.alt} />
                  )}
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                  {pad(i + 1)}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md leading-snug text-foreground/70">
                  {step.caption}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}