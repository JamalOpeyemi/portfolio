"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Every section except the first (the first has its own load animation)
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    ).slice(1);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );

    sections.forEach((section) => {
      // Already on screen: leave it alone
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      section.classList.add("reveal-section");
      io.observe(section);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}