"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* ---------- The self-scrolling tour ---------- */

type Stop = {
  label: string;
  target: (win: Window, doc: Document) => number;
  duration: number; // ms to scroll there
  dwell: number; // ms to rest there
  linear?: boolean;
};

const top = (doc: Document, win: Window, id: string) => {
  const el = doc.getElementById(id);
  return el ? el.getBoundingClientRect().top + win.scrollY - 64 : 0;
};

// EDIT HERE when the site changes: add, remove or reorder stops
const stops: Stop[] = [
  { label: "Hero", target: () => 0, duration: 1600, dwell: 2600 },
  { label: "Work", target: (w, d) => top(d, w, "work"), duration: 1800, dwell: 2600 },
  { label: "Story", target: (w, d) => top(d, w, "story"), duration: 1800, dwell: 600 },
  {
    label: "Story",
    target: (w, d) => {
      const el = d.getElementById("story");
      return el ? el.getBoundingClientRect().top + w.scrollY + el.offsetHeight - w.innerHeight : 0;
    },
    duration: 8000,
    dwell: 1200,
    linear: true,
  },
  { label: "Services", target: (w, d) => top(d, w, "services"), duration: 1800, dwell: 3200 },
  { label: "Contact", target: (w, d) => top(d, w, "contact"), duration: 1800, dwell: 3000 },
];

function tween(win: Window, to: number, ms: number, linear: boolean, dead: () => boolean) {
  return new Promise<void>((resolve) => {
    const from = win.scrollY;
    const start = performance.now();
    const step = (now: number) => {
      if (dead()) return resolve();
      const t = Math.min(1, (now - start) / ms);
      const e = linear ? t : t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      win.scrollTo(0, from + (to - from) * e);
      if (t < 1) requestAnimationFrame(step);
      else resolve();
    };
    requestAnimationFrame(step);
  });
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function SiteTour() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [width, setWidth] = useState(0);
  const [label, setLabel] = useState("Hero");
  const [loaded, setLoaded] = useState(false);

  // Measure the available width
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Run the tour once the site inside has loaded
  useEffect(() => {
    if (!loaded || reduceMotion) return;
    const win = frameRef.current?.contentWindow;
    const doc = frameRef.current?.contentDocument;
    if (!win || !doc) return;

    let dead = false;
    (async () => {
      await wait(1500);
      while (!dead) {
        for (const stop of stops) {
          if (dead) return;
          setLabel(stop.label);
          await tween(win, stop.target(win, doc), stop.duration, !!stop.linear, () => dead);
          await wait(stop.dwell);
        }
      }
    })();

    return () => {
      dead = true;
    };
  }, [loaded, reduceMotion]);

  const mobile = width > 0 && width < 640;
  const vw = mobile ? 390 : 1280;
  const vh = mobile ? 780 : 720;
  const shownWidth = mobile ? Math.min(width, 300) : width;
  const scale = width ? shownWidth / vw : 1;

  return (
    <div ref={wrapRef} className="w-full">
      {width > 0 && (
        <div
          className="mx-auto overflow-hidden border border-foreground/30 bg-[#151516]"
          style={{ width: shownWidth }}
        >
          {/* Browser bar */}
          <div className="flex h-8 items-center justify-between border-b border-line px-3 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="block h-2 w-2 rounded-full bg-foreground/20" />
              <i className="block h-2 w-2 rounded-full bg-foreground/20" />
              <i className="block h-2 w-2 rounded-full bg-foreground/20" />
            </span>
            <span aria-live="off">{reduceMotion ? "Preview" : `Now showing: ${label}`}</span>
          </div>

          {/* The live site, scaled down. pointer-events-none keeps your cursor smooth. */}
          <div style={{ width: shownWidth, height: vh * scale }} className="relative overflow-hidden">
            <iframe
              ref={frameRef}
              src="/"
              title="Automatic tour of this portfolio"
              tabIndex={-1}
              aria-hidden="true"
              onLoad={() => setLoaded(true)}
              className="pointer-events-none absolute left-0 top-0 border-0 bg-background"
              style={{
                width: vw,
                height: vh,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- The interactive phone ---------- */

export function PhonePreview() {
  return (
    <div className="mx-auto w-[300px] rounded-[2.5rem] border border-foreground/30 bg-[#151516] p-3">
      <iframe
        src="/"
        title="Live preview of this portfolio at phone width"
        loading="lazy"
        className="h-[560px] w-full rounded-[1.8rem] bg-background"
        onLoad={(e) => {
          const frame = e.currentTarget;
          const doc = frame.contentDocument;
          if (!doc) return;

          // Inside the phone: hide the native pointer and the site's own cursor,
          // so only your main cursor is visible.
          const style = doc.createElement("style");
          style.textContent =
            "html, body, * { cursor: none !important; } .fixed.pointer-events-none { display: none !important; }";
          doc.head.appendChild(style);

          // Pass the mouse position from inside the phone to your page,
          // so your cursor keeps following smoothly.
          const forward = (ev: MouseEvent) => {
            const box = frame.getBoundingClientRect();
            document.dispatchEvent(
              new MouseEvent("mousemove", {
                clientX: box.left + ev.clientX,
                clientY: box.top + ev.clientY,
                bubbles: true,
              })
            );
          };
          doc.addEventListener("mousemove", forward);
        }}
      />
    </div>
  );
}