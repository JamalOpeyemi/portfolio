"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { projects } from "../data/projects";
import FlipText from "./FlipText";

export default function WorkList() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  function handleMove(e: React.MouseEvent) {
    x.set(e.clientX + 190);
    y.set(e.clientY);
  }

  function handleEnter(e: React.MouseEvent, index: number) {
    if (active === null) {
      x.set(e.clientX + 190);
      y.set(e.clientY);
      springX.jump(e.clientX + 190);
      springY.jump(e.clientY);
    }
    setActive(index);
  }

  return (
    <>
      <ul
        className="mt-12 border-t border-line"
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((project, i) => (
          <li key={project.id} className="border-b border-line">
            <Link
              href={`/work/${project.slug}`}
              onMouseEnter={(e) => handleEnter(e, i)}
              className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 py-8 focus-visible:outline-2 focus-visible:outline-accent md:grid-cols-[5rem_1fr_18rem_6rem]"
            >
              <span className="font-mono text-sm text-foreground/50">
                {project.id}
              </span>
              <span className="text-5xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-4 group-hover:text-accent md:text-7xl">
                <FlipText text={project.title} />
              </span>
              <span className="hidden font-mono text-xs uppercase tracking-widest text-foreground/60 md:block">
                {project.type}
              </span>
              <span className="hidden text-right font-mono text-xs uppercase tracking-widest text-foreground/60 md:block">
                {project.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-20 hidden h-48 w-72 overflow-hidden border border-foreground/30 bg-[#1c1c1e] md:block"
          style={{ x: springX, y: springY, marginLeft: -144, marginTop: -96 }}
          // Starts hidden, so it never flashes on page load
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: active === null ? 0 : 1,
            scale: active === null ? 0.85 : 1,
          }}
          transition={{ duration: 0.25 }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-300 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="288px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-foreground/50">
                  Preview placeholder
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-background/80 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                {project.title}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
}