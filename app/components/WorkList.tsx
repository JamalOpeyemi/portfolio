"use client";

import { useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const projects = [
  { id: "01", title: "Project One", type: "Discipline — placeholder", year: "20XX" },
  { id: "02", title: "Project Two", type: "Discipline — placeholder", year: "20XX" },
  { id: "03", title: "Project Three", type: "Discipline — placeholder", year: "20XX" },
];

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
    // When entering the list from outside, place the card at the cursor
    // instantly so it doesn't fly in from the corner of the screen.
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
            {/* href="#" is temporary; real case study links come later */}
            <a
              href="#"
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
            </a>
          </li>
        ))}
      </ul>

      {/* Floating preview card: desktop only, hidden if motion is reduced */}
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