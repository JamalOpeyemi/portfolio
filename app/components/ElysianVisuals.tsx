"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ---------- Problem statement ---------- */

export function ProblemCard() {
  return (
    <div className="border border-foreground/25 bg-[#151516] p-6 md:p-10">
      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
        Problem statement
      </p>
      <p className="mt-4 text-lg leading-snug text-foreground/80">
        Elysian has a quality product and a growing social media presence, but
        potential customers drop off because there is no website to land on.
        Without a central place to browse products, check prices and order
        with confidence, buyers, especially first-timers, lose trust and
        abandon the purchase.
      </p>
      <div className="mt-8 border-t border-line pt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          How might we
        </p>
        <p className="mt-4 text-2xl font-medium leading-snug md:text-3xl">
          Create a website for Elysian that builds trust, shows the products
          beautifully, and makes ordering so easy that no customer drops off
          before completing a purchase?
        </p>
      </div>
    </div>
  );
}

/* ---------- Personas ---------- */

const personas = [
  {
    initial: "A",
    name: "Ama",
    age: 28,
    rows: [
      ["Discovers brands", "On TikTok"],
      ["Likes", "The look of Elysian"],
      ["Gets stuck", "Has to DM to order, so she gives up"],
    ],
  },
  {
    initial: "B",
    name: "Mrs. Bello",
    age: 44,
    rows: [
      ["Discovers brands", "Through friends"],
      ["Wants", "A proper website before she will pay a small business"],
    ],
  },
];

export function Personas() {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {personas.map((p, i) => (
          <motion.div
            key={p.name}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease }}
            className="bg-background p-6 md:p-8"
          >
            <div className="flex items-start justify-between">
              <span
                aria-hidden="true"
                className="block text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(242,240,235,0.4)] md:text-8xl"
              >
                {p.initial}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Proto-persona
              </span>
            </div>
            <h3 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">
              {p.name}, {p.age}
            </h3>
            <dl className="mt-6 border-t border-line">
              {p.rows.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-3"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                    {k}
                  </dt>
                  <dd className="text-foreground/80">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col gap-2 border border-t-0 border-line px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">
          Shared frustration
        </span>
        <span className="text-lg font-medium">
          No trustworthy place to buy.
        </span>
      </motion.div>
    </div>
  );
}

/* ---------- Journey map ---------- */

const stages = [
  { title: "Discovers", sub: "Finds Elysian on TikTok or Instagram.", x: 12.5, y: 40 },
  { title: "Loves the look", sub: "Likes the brand and its products.", x: 37.5, y: 20 },
  { title: "Looks for a link", sub: "Finds only a DM.", x: 62.5, y: 80, key: true },
  { title: "Gives up", sub: "Drops off rather than DM to order.", x: 87.5, y: 90 },
];

export function JourneyMap() {
  const reduce = useReducedMotion();
  return (
    <div className="border border-foreground/25 bg-[#151516] p-6 md:p-10">
      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
        Ama&apos;s journey, from discovery to drop-off
      </p>

      <div className="relative mt-8 h-40 md:h-56">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <motion.path
            d="M12.5 40 C 25 40, 25 20, 37.5 20 C 50 20, 50 80, 62.5 80 C 75 80, 75 90, 87.5 90"
            fill="none"
            stroke="#f2f0eb"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: reduce ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>

        {stages.map((s, i) => (
          <span
            key={s.title}
            aria-hidden="true"
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <motion.span
              className={`block rounded-full ${
                s.key ? "h-4 w-4 bg-accent" : "h-3 w-3 bg-foreground"
              }`}
              initial={reduce ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.5, ease }}
            />
          </span>
        ))}
      </div>

      <ol className="mt-6 grid grid-cols-4">
        {stages.map((s, i) => (
          <li key={s.title} className="px-1 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 md:text-xs">
              0{i + 1}
            </p>
            <p
              className={`mt-2 text-sm font-semibold leading-tight md:text-xl ${
                s.key ? "text-foreground" : "text-foreground/80"
              }`}
            >
              {s.title}
            </p>
            <p className="mt-2 hidden text-sm leading-snug text-foreground/60 md:block">
              {s.sub}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-8 border-t border-line pt-4 font-mono text-xs uppercase tracking-widest text-foreground/50">
        The moment to design for: step 03. Illustrative curve, built from the
        persona, not measured data.
      </p>
    </div>
  );
}

/* ---------- PageSpeed counters ---------- */

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{n}</span>
      <span className="sr-only">{to}</span>
    </span>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-20 w-20 md:h-28 md:w-28">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="h-full w-full -rotate-90"
        >
          <circle cx="50" cy="50" r="44" fill="none" stroke="#2a2a2c" strokeWidth="4" />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#f2f0eb"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? value / 100 : 0 }}
            whileInView={{ pathLength: value / 100 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-medium tracking-tighter md:text-4xl">
          <CountUp to={value} />
        </div>
      </div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-foreground/60 md:text-xs">
        {label}
      </p>
    </div>
  );
}

const pageSpeed = [
  {
    name: "Home page",
    scores: [
      ["Performance", 97],
      ["Accessibility", 96],
      ["Best practices", 100],
    ],
  },
  {
    name: "Product page",
    scores: [
      ["Performance", 96],
      ["Accessibility", 96],
      ["Best practices", 100],
    ],
  },
] as const;

export function PageSpeed() {
  return (
    <div>
      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {pageSpeed.map((g) => (
          <div key={g.name} className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              {g.name}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {g.scores.map(([label, value]) => (
                <Score key={label} label={label} value={value} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/50">
        PageSpeed Insights, mobile
      </p>
    </div>
  );
}

/* ---------- Readable colour: before / after, from the real CSS ---------- */

const contrast = [
  { label: "Before", hex: "#B89A6A", ratio: "2.4:1", name: "Gold" },
  { label: "After", hex: "#6F5628", ratio: "6.1:1", name: "Bronze" },
];

export function ContrastDemo() {
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-2">
      {contrast.map((c) => (
        <div
          key={c.label}
          className="p-6 md:p-8"
          style={{ backgroundColor: "#F5F0E8" }}
        >
          <p
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "#2C1A0E", opacity: 0.5 }}
          >
            {c.label}
          </p>
          <p
            className="mt-6 text-[13px] font-medium uppercase tracking-[2px]"
            style={{ color: c.hex }}
          >
            Our story
          </p>
          <p
            className="mt-6 font-mono text-xs uppercase tracking-widest"
            style={{ color: "#2C1A0E" }}
          >
            {c.name} {c.hex} · {c.ratio} on ivory
          </p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Hero: the live site in a laptop and a phone ---------- */

export function DeviceHero({ url }: { url: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true });
  const [w, setW] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Load the live site a moment after the mockup is on screen
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, [inView]);

  // Laptop: screen renders at 1440x900. Phone: 393x852.
  const laptopW = w * 0.82;
  const lsw = laptopW - 14;
  const lScale = lsw / 1440;
  const lsh = lsw * 0.625;
  const laptopH = lsh + 14 + 10;

  const phoneW = w * 0.19;
  const psw = phoneW - 12;
  const pScale = psw / 393;
  const psh = psw * (852 / 393);

  const frameProps = {
    src: url,
    tabIndex: -1,
    scrolling: "no",
    loading: "lazy" as const,
    className: "pointer-events-none absolute left-0 top-0 border-0 bg-white",
  };

  return (
    <div
      role="img"
      aria-label="The live Elysian home page on a laptop and a phone"
      className="border border-foreground/25 bg-[#151516] p-4 md:p-10"
    >
      <div ref={wrapRef} className="relative w-full" style={{ height: w ? laptopH : 0 }}>
        {w > 0 && (
          <>
            {/* Laptop */}
            <div className="absolute left-0 top-0" style={{ width: laptopW }}>
              <div className="overflow-hidden rounded-t-lg border border-foreground/30 bg-black p-[6px]">
                <div
                  className="relative overflow-hidden bg-[#F5F0E8]"
                  style={{ width: lsw, height: lsh }}
                >
                  {ready && (
                    <iframe
                      {...frameProps}
                      title="Elysian home page on a laptop"
                      style={{
                        width: 1460,
                        height: 900,
                        transform: `scale(${lScale})`,
                        transformOrigin: "top left",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="-mx-3 h-[10px] rounded-b-xl bg-foreground/20" />
            </div>

            {/* Phone */}
            <div
              className="absolute bottom-0 right-0 rounded-[1.4rem] border border-foreground/30 bg-black p-[6px]"
              style={{ width: phoneW }}
            >
              <div
                className="relative overflow-hidden rounded-[1rem] bg-[#F5F0E8]"
                style={{ width: psw, height: psh }}
              >
                {ready && (
                  <iframe
                    {...frameProps}
                    title="Elysian home page on a phone"
                    style={{
                      width: 413,
                      height: 852,
                      transform: `scale(${pScale})`,
                      transformOrigin: "top left",
                    }}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}