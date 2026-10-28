"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";


const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const reduceMotion = useReducedMotion();

  // While the menu is open: lock page scroll and let Escape close it
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-background px-6 md:h-16 md:px-16"
      >
        {/* Logo: ELIJAH with an orange paint splash behind the E */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Elijah, home"
          className="flex items-center text-xl font-bold uppercase tracking-tight focus-visible:outline-2 focus-visible:outline-accent md:text-2xl"
        >
          <span className="relative inline-block px-[0.04em]">
            {/* The splash. Sized in em, so it scales with the text. */}
            <svg
              aria-hidden="true"
              viewBox="0 0 44 48"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[2.3em] w-[1.6em] -translate-x-1/2 -translate-y-[46%] overflow-visible"
            >
              {/* Main blob */}
              <path
                d="M20 3 C26 1 33 5 35 11 C38 15 37 21 34 25 C35 30 31 34 27 33 C26 37 22 39 20 35 C17 39 12 38 12 33 C7 33 3 28 5 23 C1 18 4 11 9 9 C11 4 16 4 20 3 Z"
                fill="#ff4d1f"
              />
              {/* Drip */}
              <path
                d="M21 32 L21 42 A1.7 1.7 0 0 0 24.4 42 L24.4 32 Z"
                fill="#ff4d1f"
              />
              {/* Specks */}
              <circle cx="7" cy="5" r="1.6" fill="#ff4d1f" />
              <circle cx="39" cy="30" r="1.3" fill="#ff4d1f" />
              <circle cx="33" cy="3" r="1" fill="#ff4d1f" />
              <circle cx="4" cy="36" r="1.1" fill="#ff4d1f" />
            </svg>
            <span className="relative text-background">E</span>
          </span>
          <span>LIJAH</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 font-mono text-sm uppercase tracking-widest">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="relative transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative -mr-2 h-10 w-10 focus-visible:outline-2 focus-visible:outline-accent md:hidden"
        >
          <span
            className={`absolute left-1/2 top-1/2 -ml-3 block h-px w-6 bg-foreground transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 -ml-3 block h-px w-6 bg-foreground transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-14 z-40 bg-background px-6 pt-8 md:hidden"
          >
            <ul>
              {links.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-6 text-5xl font-bold uppercase tracking-tight transition-colors hover:text-accent"
                  >
                    {isActive(link.href) && (
                      <span aria-hidden="true" className="h-3 w-3 rounded-full bg-accent" />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}