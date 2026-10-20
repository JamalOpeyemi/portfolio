"use client";

import { useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { projects } from "../data/projects";

export default function WorkList() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  function handleMove(e: React.MouseEvent) {
    x.set(e.clientX + 160);
    y.set(e.clientY);
  }

  function handleEnter(e: React.MouseEvent, index: number) {
    if (active === null) {
      x.set(e.clientX + 160);
      y.set(e.clientY);
      springX.jump(e.clientX + 160);
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
                {project.title}
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
          className="pointer-events-none fixed left-0 top-0 z-20 hidden h-64 w-48 flex-col items-center justify-center gap-1 border border-foreground/30 bg-[#1c1c1e] text-center font-mono text-xs uppercase tracking-widest text-foreground/80 md:flex"
          style={{ x: springX, y: springY, marginLeft: -96, marginTop: -128 }}
          animate={{
            opacity: active === null ? 0 : 1,
            scale: active === null ? 0.85 : 1,
          }}
          transition={{ duration: 0.25 }}
        >
          <span>{active !== null ? projects[active].title : ""}</span>
          <span className="text-foreground/50">Preview placeholder</span>
        </motion.div>
      )}
    </>
  );
}