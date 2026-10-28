"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Screenshot frame. No src = labelled placeholder with the same aspect ratio. */
export function Frame({
  src,
  label,
  ratio = "16/10",
  fit = "top",
  caption,
}: {
  src: string;
  label: string;
  ratio?: string;
  fit?: "top" | "contain";
  caption?: string;
}) {
  return (
    <figure>
      <div
        className="relative w-full overflow-hidden border border-foreground/25 bg-[#151516]"
        style={{ aspectRatio: ratio }}
      >
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            unoptimized
            sizes="(min-width: 768px) 60vw, 100vw"
            className={fit === "top" ? "object-cover object-top" : "object-contain"}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4 text-center font-mono text-xs uppercase tracking-widest text-foreground/50">
            {label}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">
      {children}
    </p>
  );
}

export function Heading({
  children,
  size = "lg",
}: {
  children: React.ReactNode;
  size?: "lg" | "md";
}) {
  return (
    <h2
      className={`mt-8 max-w-4xl font-medium uppercase leading-[0.95] tracking-tighter ${
        size === "lg" ? "text-4xl md:text-7xl" : "text-3xl md:text-5xl"
      }`}
    >
      {children}
    </h2>
  );
}

/* Minimal flow: a row of nodes. An array inside the list means parallel branches. */
export function Flow({
  title,
  nodes,
}: {
  title: string;
  nodes: (string | string[])[];
}) {
  const chip =
    "border border-line bg-[#151516] px-4 py-3 font-mono text-xs uppercase tracking-widest";
  return (
    <div className="border-t border-line py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
        {title}
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <span aria-hidden="true" className="text-foreground/40">
                →
              </span>
            )}
            {Array.isArray(node) ? (
              <div className="flex flex-col gap-2">
                {node.map((n) => (
                  <span key={n} className={chip}>
                    {n}
                  </span>
                ))}
              </div>
            ) : (
              <span className={chip}>{node}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}