"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation, useReducedMotion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

function labelFor(pathname: string) {
  const last = pathname.split("/").filter(Boolean).pop();
  if (!last) return "Home";
  return last.replace(/-/g, " ");
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const busy = useRef(false);
  const [label, setLabel] = useState("");

  // Slide the curtain away (called once the new page is ready)
  async function reveal() {
    if (!busy.current) return;
    await new Promise((r) => setTimeout(r, 350));
    await controls.start({ y: "-100%", transition: { duration: 0.7, ease } });
    controls.set({ y: "100%" });
    busy.current = false;
  }

  // New page arrived: reveal it
  useEffect(() => {
    reveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Catch clicks on internal links
  useEffect(() => {
    if (reduceMotion) return;

    async function onClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest("a");
      if (!link) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page: normal behaviour
      if (busy.current) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      busy.current = true;
      setLabel(labelFor(url.pathname));

      await controls.start({ y: 0, transition: { duration: 0.6, ease } });
      router.push(url.pathname + url.search + url.hash);

      // Safety net: never leave the curtain stuck
      setTimeout(() => reveal(), 3000);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, router]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ y: "100%" }}
      animate={controls}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#151516]"
    >
      <span className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-foreground">
        <span className="block h-2 w-2 rounded-full bg-accent" />
        {label}
      </span>
      <span className="absolute inset-x-0 top-0 h-px bg-accent" />
    </motion.div>
  );
}