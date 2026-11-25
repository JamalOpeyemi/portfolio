"use client";

import Image from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { CHAPTERS, GG } from "./tokens";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOAL = 2000;

/* ---------- Which chapter is on screen ---------- */

const StoryContext = createContext<{
  active: number;
  setActive: (i: number) => void;
}>({ active: 0, setActive: () => {} });

export function StoryProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  return (
    <StoryContext.Provider value={{ active, setActive }}>{children}</StoryContext.Provider>
  );
}

/* A chapter becomes active when it crosses the middle of the screen */
export function Chapter({
  index,
  children,
  className = "",
}: {
  index: number;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { setActive } = useContext(StoryContext);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(index);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, setActive]);

  return (
    <section ref={ref} id={CHAPTERS[index].id} className={`scroll-mt-28 ${className}`}>
      {children}
    </section>
  );
}

/* ---------- The ring ---------- */

function Ring({
  size,
  stroke,
  progress,
  color,
}: {
  size: number;
  stroke: number;
  progress: ReturnType<typeof useSpring>;
  color: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = useTransform(progress, (p) => c * (1 - Math.min(p, 1)));
  const visible = useTransform(progress, (p) => (p > 0.004 ? 1 : 0));
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={GG.track} strokeWidth={stroke} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        style={{ strokeDashoffset: offset, opacity: visible }}
        animate={{ stroke: color }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  );
}

function Confetti({ count = 16, spread = 110 }: { count?: number; spread?: number }) {
  const colours = [GG.blue, GG.green, GG.red, "#F5B700"];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const dist = spread * (0.75 + ((i * 37) % 10) / 25);
        return (
          <motion.span
            key={i}
            className="absolute block h-2 w-1 rounded-[1px]"
            style={{ backgroundColor: colours[i % colours.length] }}
            initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist + 24,
              opacity: [0, 1, 1, 0],
              rotate: (i % 2 ? 1 : -1) * 220,
            }}
            transition={{ duration: 1.6, ease: EASE, delay: (i % 4) * 0.04 }}
          />
        );
      })}
    </div>
  );
}

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

/* The goal ring that stays pinned while you read, filling chapter by chapter */
export function StoryRail() {
  const { active } = useContext(StoryContext);
  const reduce = useReducedMotion();
  const amount = useSpring(0, { stiffness: 70, damping: 22 });
  const progress = useTransform(amount, (a) => a / GOAL);
  const progressSpring = useSpring(progress, { stiffness: 200, damping: 30 });
  const label = useTransform(amount, money);
  const pct = useTransform(amount, (a) => `${Math.round(a / 20)}%`);
  const done = active === CHAPTERS.length - 1;

  useEffect(() => {
    if (reduce) amount.jump(CHAPTERS[active].amount);
    else amount.set(CHAPTERS[active].amount);
  }, [active, amount, reduce]);

  const colour = done ? GG.green : GG.blue;

  return (
    <>
      {/* Desktop: pinned beside the story */}
      <div className="sticky top-28 hidden lg:block">
        <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: GG.muted }}>
          Amira&rsquo;s Paris trip
        </p>
        <div className="relative mt-5 h-[168px] w-[168px]">
          <Ring size={168} stroke={14} progress={progressSpring} color={colour} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span className="text-[28px] font-bold tracking-tight" style={{ color: GG.ink }}>
              {label}
            </motion.span>
            <span className="text-xs" style={{ color: GG.muted }}>
              of $2,000 · <motion.span>{pct}</motion.span>
            </span>
          </div>
          <AnimatePresence>{done && !reduce && <Confetti key="c" />}</AnimatePresence>
        </div>

        <ol className="mt-8 space-y-1">
          {CHAPTERS.map((ch, i) => (
            <li key={ch.id}>
              <a
                href={`#${ch.id}`}
                className="flex items-center gap-3 py-1 text-sm transition-colors"
                style={{ color: i === active ? GG.ink : GG.muted, fontWeight: i === active ? 600 : 400 }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-colors"
                  style={{ backgroundColor: i <= active ? colour : GG.border }}
                />
                {ch.label}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Mobile and tablet: a slim bar under the site header */}
      <div
        className="sticky top-14 z-30 -mx-6 flex items-center gap-3 border-b px-6 py-2.5 backdrop-blur md:top-16 md:-mx-16 md:px-16 lg:hidden"
        style={{ backgroundColor: "rgba(246,247,251,0.9)", borderColor: GG.border }}
      >
        <div className="relative h-9 w-9 shrink-0">
          <Ring size={36} stroke={4} progress={progressSpring} color={colour} />
        </div>
        <motion.span className="text-base font-bold" style={{ color: GG.ink }}>
          {label}
        </motion.span>
        <span className="text-sm" style={{ color: GG.muted }}>
          of $2,000
        </span>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-widest" style={{ color: GG.muted }}>
          {CHAPTERS[active].label}
        </span>
      </div>
    </>
  );
}

/* ---------- Simple reveal on scroll ---------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Phone screen ---------- */

export function Phone({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 22vw, 60vw",
  preload = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[9%/4.2%] bg-white ${className}`}
      style={{
        aspectRatio: "750/1624",
        boxShadow: "0 30px 60px -30px rgba(15,23,42,0.35), 0 0 0 1px rgba(15,23,42,0.06)",
      }}
    >
      <Image src={src} alt={alt} fill unoptimized preload={preload} sizes={sizes} className="object-cover object-top" />
    </div>
  );
}

/* ---------- Add money, rebuilt live in code ----------
   Built on top of the real exported screens: the sheet and toast are
   slices of the Figma frames, the ring and the counter are drawn live. */

type Phase = "idle" | "press" | "sheet" | "confirm" | "added";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function AddMoneyDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [run, setRun] = useState(0);
  const amount = useMotionValue(1240);
  const progress = useTransform(amount, (a) => a / GOAL);
  const label = useTransform(amount, money);
  const pct = useTransform(amount, (a) => `of $2,000 · ${Math.round(a / 20)}%`);

  useEffect(() => {
    if (reduce) {
      amount.set(1290);
      setPhase("added");
      return;
    }
    if (!inView) return;
    let cancelled = false;
    (async () => {
      while (!cancelled) {
        setPhase("idle");
        animate(amount, 1240, { duration: 0.4 });
        await wait(1400);
        if (cancelled) return;
        setPhase("press");
        await wait(250);
        if (cancelled) return;
        setPhase("sheet");
        await wait(1700);
        if (cancelled) return;
        setPhase("confirm");
        await wait(250);
        if (cancelled) return;
        setPhase("added");
        await wait(350);
        if (cancelled) return;
        animate(amount, 1290, { duration: 1.4, ease: EASE });
        await wait(3600);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [inView, reduce, amount, run]);

  const sheetOpen = phase === "sheet" || phase === "confirm";
  const added = phase === "added";

  // Ring geometry measured from the 750 × 1624 export:
  // centre (375, 477), stroke 28px, middle of the stroke at 186px.
  // The overlay box is 435px square, so everything is scaled to a 100-unit viewBox.
  const ringR = (186 / 435) * 100;
  const ringStroke = (28 / 435) * 100;
  const ringC = 2 * Math.PI * ringR;
  const ringOffset = useTransform(progress, (p) => ringC * (1 - p));

  return (
    <div ref={ref} className="w-full">
      <div
        className="relative w-full overflow-hidden rounded-[9%/4.2%] bg-white"
        style={{
          aspectRatio: "750/1624",
          containerType: "inline-size",
          boxShadow: "0 40px 80px -30px rgba(15,23,42,0.4), 0 0 0 1px rgba(15,23,42,0.06)",
        }}
      >
        {/* Before and after screens */}
        <Image src="/work/goalguide/goal-detail.png" alt="" fill unoptimized sizes="360px" className="object-cover object-top" />
        <motion.div className="absolute inset-0" animate={{ opacity: added ? 1 : 0 }}
          transition={{ duration: 0.4, delay: added ? 0.6 : 0 }}
        >
          <Image src="/work/goalguide/money-added.png" alt="" fill unoptimized sizes="360px" className="object-cover object-top" />
        </motion.div>

        {/* The live ring, drawn over the screenshot's ring */}
        <div className="absolute" style={{ left: "21%", width: "58%", top: `${(259.5 / 1624) * 100}%`, aspectRatio: "1" }}>
          <div className="absolute inset-0 rounded-full bg-white" />
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
            <circle cx="50" cy="50" r={ringR} fill="none" stroke={GG.track} strokeWidth={ringStroke} />
            <motion.circle
              cx="50"
              cy="50"
              r={ringR}
              fill="none"
              stroke={GG.blue}
              strokeWidth={ringStroke}
              strokeDasharray={ringC}
              style={{ strokeDashoffset: ringOffset }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span className="font-bold tracking-tight" style={{ color: GG.ink, fontSize: "8.4cqw", lineHeight: 1.1 }}>
              {label}
            </motion.span>
            <motion.span style={{ color: GG.muted, fontSize: "3.5cqw", marginTop: "1.2cqw" }}>{pct}</motion.span>
          </div>
        </div>

        {/* Button press */}
        <motion.div
          className="pointer-events-none absolute rounded-[3cqw] bg-white"
          style={{ left: "4.3%", width: "44.3%", top: `${(1014 / 1624) * 100}%`, height: `${(108 / 1624) * 100}%` }}
          animate={{ opacity: phase === "press" ? 0.25 : 0 }}
          transition={{ duration: 0.15 }}
        />

        {/* Dim behind the sheet */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: "rgba(15,23,42,0.45)" }}
          animate={{ opacity: sheetOpen ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* The sheet: a slice of the Add money frame */}
        <motion.div
          className="absolute inset-x-0 bottom-0 overflow-hidden"
          style={{
            top: `${(754 / 1624) * 100}%`,
            backgroundImage: "url(/work/goalguide/add-money.png)",
            backgroundSize: "100% auto",
            backgroundPosition: "bottom",
          }}
          initial={{ y: "101%" }}
          animate={{ y: sheetOpen ? "0%" : "101%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          <motion.div
            className="absolute rounded-[3cqw] bg-white"
            style={{ left: "4.3%", right: "4.3%", top: `${((1452 - 754) / 870) * 100}%`, height: `${(108 / 870) * 100}%` }}
            animate={{ opacity: phase === "confirm" ? 0.25 : 0 }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>

        {/* The toast: a slice of the Money added frame */}
        <motion.div
          className="absolute inset-x-0"
          style={{
            top: `${(96 / 1624) * 100}%`,
            height: `${(120 / 1624) * 100}%`,
            backgroundImage: "url(/work/goalguide/money-added.png)",
            backgroundSize: "100% auto",
            backgroundPosition: "0 -12.8cqw",
          }}
          initial={{ y: "-180%", opacity: 0 }}
          animate={{ y: added ? "0%" : "-180%", opacity: added ? 1 : 0 }}
          transition={
            added
              ? { type: "spring", stiffness: 300, damping: 28, delay: 0.15 }
              : { opacity: { duration: 0.4 }, y: { duration: 0, delay: 0.4 } }
          }
        />
      </div>

      <div className="mt-5 flex items-center justify-end gap-4">
        {!reduce && (
          <button
            type="button"
            onClick={() => setRun((n) => n + 1)}
            className="rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: GG.blueSoft, color: GG.blue }}
          >
            Replay
          </button>
        )}
      </div>
    </div>
  );
}
