import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { projects } from "../../data/projects";
import { AddMoneyDemo, Chapter, Phone, Reveal, StoryProvider, StoryRail } from "./Story";
import { GG } from "./tokens";

// GoalGuide's own interface font, loaded on this page only
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "GoalGuide",
  description:
    "A savings app case study told as one journey: Amira saves $2,000 for a trip to Paris, from day one to goal reached.",
};

/* Images from the original case study. Each one appears once its file is added. */
function has(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public/work/goalguide", file));
}

const PROTOTYPE =
  "https://www.figma.com/proto/8pObec7UvEDsKrhZdb8okN/Goal-Guide?node-id=843-1354&starting-point-node-id=843%3A1354&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1";

/* ---------- Content ---------- */

const painPoints = [
  ["Budgeting", "Planning and tracking spending felt like a chore, so people overspent and stressed about it."],
  ["Saving", "Putting money aside every month was the first thing to slip."],
  ["Security", "Linking a bank account to a new app felt risky."],
  ["Accountability", "Nothing kept them going once the first excitement wore off."],
];

const personas = [
  ["Elliot, 44", "Line cook, studying data analytics", "Wants to cut food and transport costs while juggling work, a bootcamp and family."],
  ["Henry, 24", "Final-year student and intern", "Wants to budget properly and finally save enough to travel."],
];

const findings = [
  {
    quote: "“How far along am I?”",
    problem: "Users lost track of where they were during sign-up.",
    fix: "A progress indicator on every onboarding screen. Today it’s a labelled stepper: Step 2 of 3.",
    before: "wf-link-bank-before.png",
    after: "wf-link-bank-after.png",
  },
  {
    quote: "“Did that actually save?”",
    problem: "After creating a goal or a budget, users weren’t sure it had worked.",
    fix: "A confirmation screen for every goal and budget. Today it spells out the plan in one sentence.",
    before: null,
    after: null,
  },
  {
    quote: "“Where are the settings?”",
    problem: "The settings icon was hard to find.",
    fix: "First moved into the menu. In the redesign, settings live in one predictable place: the Me tab.",
    before: null,
    after: null,
  },
];

const wireframes = [
  ["wf-signup.png", "Sign up"],
  ["wf-link-bank-after.png", "Link bank"],
  ["wf-goal.png", "Savings goal"],
  ["wf-budget.png", "Budget"],
  ["wf-dashboard.png", "Dashboard"],
  ["wf-withdraw.png", "Withdraw"],
];

/* The main journey, and the paths that branch off it */
const mainFlow = ["Welcome", "Sign up", "Link bank", "Create goal", "Goal created", "Home", "Auto-save", "Goal detail", "Add money", "Goal reached"];
const sideFlows = [
  ["Returning user", ["Log in", "Face ID", "Home"]],
  ["Budget", ["Budget", "Over-budget nudge", "Edit budget"]],
  ["Taking money out", ["Goal detail", "Withdraw", "Error with a fix", "Done"]],
  ["Staying informed", ["Notifications", "Goal detail"]],
] as const;

const motions = [
  {
    title: "Welcome",
    from: "kf-welcome-intro.png",
    to: "welcome.png",
    how: "Smart Animate, 1s, gentle spring, then a slow float loop (1.6s ease in and out).",
    why: "Before reading a word, people see what the app does: goals filling up.",
  },
  {
    title: "Onboarding steps",
    from: "signup.png",
    to: "link-bank.png",
    how: "Smart Animate, 0.45s ease in and out. The stepper keeps its layer names, so the bar fills instead of jumping.",
    why: "It answers the first usability finding: you always know how far is left.",
  },
  {
    title: "Goal created",
    from: "kf-goal-created-intro.png",
    to: "goal-created.png",
    how: "Smart Animate, 0.6s bouncy, 0.25s after the screen loads.",
    why: "The check pops in to confirm it worked. That was the second finding.",
  },
  {
    title: "Goal reached",
    from: "kf-goal-reached-intro.png",
    to: "goal-reached.png",
    how: "Smart Animate, 1.3s gentle spring. The ring closes, turns green and the confetti falls in.",
    why: "Seven months of saving deserves a moment. The finish should feel like one.",
  },
];

const motionRules = [
  ["Smart Animate · 0.45s", "Moving forward inside a flow, so shared elements carry over."],
  ["Move in · 0.3s", "Opening a detail screen. Move out goes back the same way."],
  ["Dissolve · 0.25s", "Switching tabs and showing results, where nothing needs to travel."],
];

const contrast = [
  ["White on brand blue", "#2F6BFF", "#2457E6", "4.5 → 5.9", "#FFFFFF"],
  ["Blue on light blue", "#2F6BFF", "#2457E6", "3.9 → 5.0", "#E6EEFF"],
  ["Grey text on background", "#64748B", "#5B6B80", "4.45 → 5.1", "#F6F7FB"],
  ["Green amounts on white", "#16A34A", "#157A3A", "3.3 → 5.4", "#FFFFFF"],
  ["Red amounts on white", "#E5484D", "#C81E1E", "3.9 → 5.7", "#FFFFFF"],
] as const;

/* Amira's journey: how she feels at each stage (1 to 5), and what the design does about it */
const journeyMap = [
  { stage: "Decides to save", feel: 3, thought: "I want Paris, but I never stick to saving.", answer: "One goal, one clear plan" },
  { stage: "Links her bank", feel: 1.8, thought: "Is it safe to connect my bank?", answer: "Log in on the bank’s own page" },
  { stage: "Sets the goal", feel: 4, thought: "So that’s $286 a month. I can do that.", answer: "The app does the maths" },
  { stage: "First weeks", feel: 3.2, thought: "I’ll forget by next month.", answer: "Auto-save on the 1st" },
  { stage: "Overspends", feel: 1.6, thought: "I’ve blown it this month.", answer: "A nudge with the fix" },
  { stage: "Goal reached", feel: 5, thought: "I didn’t even have to think about it.", answer: "A moment to celebrate" },
];

const dayOne = [
  ["signup.png", "Create account", "Three short steps, with progress always visible."],
  ["link-bank.png", "Link your bank", "You log in on your bank’s own page. The app never sees your password."],
  ["create-goal.png", "Set a goal", "Pick what, how much and how long. The app works out $286 a month."],
  ["goal-created.png", "Confirmed", "A clear yes, the plan in one sentence, and one next step."],
];

const badDays = [
  [
    "budget-nudge.png",
    "Over budget",
    "Food goes $30 over. Instead of a red warning, the app suggests moving $30 from Fun and shows both new limits before you agree.",
  ],
  [
    "withdraw.png",
    "Taking money out",
    "Withdrawing is allowed, but you see the cost first: your goal drops to 73% and needs about one extra month.",
  ],
  [
    "withdraw-error.png",
    "Asking for too much",
    "The error doesn’t just turn red. It says what’s available and offers the corrected amount in one tap.",
  ],
];

const system = [
  ["Variables", "13 colour tokens. Green always means money in, red always means money out."],
  ["Type styles", "Inter in eight styles, with a dedicated style for amounts."],
  ["Components", "Buttons, inputs, stepper, goal card, ring and nav, each with variants."],
  ["Auto layout", "Every screen is built with auto layout, ready for developer handoff."],
];

/* ---------- Small pieces ---------- */

function Kicker({ n, label }: { n: string; label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest" style={{ color: GG.blue }}>
      Chapter {n} <span style={{ color: GG.muted }}>· {label}</span>
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl" style={{ color: GG.ink }}>
      {children}
    </h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: GG.muted }}>
      {children}
    </p>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl bg-white p-6 md:p-8 ${className}`} style={{ boxShadow: `0 0 0 1px ${GG.border}` }}>
      {children}
    </div>
  );
}

function JourneyMap() {
  const W = 1200;
  const H = 150;
  const step = W / journeyMap.length;
  const pts = journeyMap.map((j, i) => [step * i + step / 2, H - 20 - ((j.feel - 1) / 4) * (H - 40)]);
  const d = pts
    .map(([x, y], i) => {
      if (i === 0) return `M ${x} ${y}`;
      const [px, py] = pts[i - 1];
      const cx = (px + x) / 2;
      return `C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`;
    })
    .join(" ");
  return (
    <div className="mt-6 overflow-x-auto rounded-3xl bg-white" style={{ boxShadow: `0 0 0 1px ${GG.border}` }}>
      <div className="min-w-[880px] p-6 md:p-8">
        <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest" style={{ color: GG.muted }}>
          <span>How she feels</span>
          <span>Good ↑ · Bad ↓</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 h-auto w-full" aria-hidden="true">
          <line x1="0" x2={W} y1={H / 2} y2={H / 2} stroke={GG.border} strokeDasharray="4 6" />
          <path d={d} fill="none" stroke={GG.blue} strokeWidth="3" strokeLinecap="round" />
          {pts.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="8"
              fill={journeyMap[i].feel < 2.5 ? GG.red : journeyMap[i].feel >= 4 ? GG.green : GG.blue}
              stroke="#fff"
              strokeWidth="3"
            />
          ))}
        </svg>
        <ol className="mt-4 grid grid-cols-6 gap-4">
          {journeyMap.map((j, i) => (
            <li key={j.stage} className="border-t pt-4" style={{ borderColor: GG.border }}>
              <p className="font-mono text-[10px]" style={{ color: GG.blue }}>
                0{i + 1}
              </p>
              <p className="mt-1 text-sm font-bold">{j.stage}</p>
              <p className="mt-2 text-sm italic leading-snug" style={{ color: GG.muted }}>
                “{j.thought}”
              </p>
              <p
                className="mt-3 rounded-xl px-3 py-2 text-xs font-semibold"
                style={{ backgroundColor: GG.blueSoft, color: GG.blue }}
              >
                {j.answer}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function GoalGuidePage() {
  const index = projects.findIndex((p) => p.slug === "goalguide");
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <div className={inter.className} style={{ backgroundColor: GG.bg, color: GG.ink }}>
        {/* Opening */}
        <section className="px-6 pb-20 pt-12 md:px-16 md:pb-28">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#2457E6]"
            style={{ color: GG.muted }}
          >
            ← All work
          </Link>

          <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest" style={{ color: GG.muted }}>
                Case study {project.id} · Savings app
              </p>
              <h1 className="mt-5 text-[17vw] font-bold leading-[0.9] tracking-[-0.05em] md:text-[10vw] lg:text-[8.5vw]">
                Goal<span style={{ color: GG.blue }}>Guide</span>
              </h1>
              <p className="mt-8 max-w-2xl text-2xl font-semibold leading-snug md:text-3xl">
                Saving fails quietly. People don’t quit their goals, they just stop showing up.
              </p>
              <p className="mt-5 max-w-xl text-lg" style={{ color: GG.muted }}>
                An easy-to-use savings and budgeting app that makes managing money simple, shaped by what users needed.
                This case study follows one person, Amira, from her first tap to her goal.
              </p>

              <dl
                className="mt-12 grid grid-cols-2 gap-6 border-t pt-6 font-mono text-xs uppercase tracking-widest md:grid-cols-4"
                style={{ borderColor: GG.border }}
              >
                {[
                  ["Role", project.role],
                  ["Research", project.timeline],
                  ["Tools", project.tools],
                  ["Year", project.year],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt style={{ color: GG.muted }}>{label}</dt>
                    <dd className="mt-2 normal-case tracking-normal" style={{ color: GG.ink }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Reveal className="mx-auto w-full max-w-[300px] lg:max-w-none">
              <Phone src="/work/goalguide/welcome.png" alt="GoalGuide welcome screen: Save for what matters" preload />
            </Reveal>
          </div>
        </section>

        {/* The story, with the ring pinned beside it */}
        <StoryProvider>
          <div className="px-6 md:px-16 lg:grid lg:grid-cols-[200px_1fr] lg:gap-16 xl:gap-24">
            <aside className="contents lg:block lg:pt-24">
              <StoryRail />
            </aside>

            <div>
              {/* Chapter 0 */}
              <Chapter index={0} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="00" label="Before day 1" />
                <H2>Why people stop saving.</H2>
                <Lead>
                  I spent eight weeks on research: user interviews, surveys and a look at existing apps. Four pain points
                  kept coming up.
                </Lead>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                  {painPoints.map(([title, text], i) => (
                    <Reveal key={title} delay={i * 0.06}>
                      <Card className="h-full">
                        <span className="font-mono text-xs" style={{ color: GG.blue }}>
                          0{i + 1}
                        </span>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight">{title}</h3>
                        <p className="mt-2" style={{ color: GG.muted }}>
                          {text}
                        </p>
                      </Card>
                    </Reveal>
                  ))}
                </div>

                <p className="mt-16 font-mono text-xs uppercase tracking-widest" style={{ color: GG.muted }}>
                  Who I designed for
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {personas.map(([name, role, goal]) => (
                    <Card key={name}>
                      <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: GG.muted }}>
                        {role}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold tracking-tight">{name}</h3>
                      <p className="mt-3" style={{ color: GG.muted }}>
                        {goal}
                      </p>
                    </Card>
                  ))}
                </div>

                <Reveal>
                  <div className="mt-16 flex items-center gap-5 rounded-3xl p-6 md:p-8" style={{ backgroundColor: GG.blue, color: "#fff" }}>
                    <span
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                      style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
                    >
                      AR
                    </span>
                    <p className="text-xl font-semibold leading-snug md:text-2xl">
                      Meet Amira. She wants $2,000 for a trip to Paris. The rest of this page is her journey.
                    </p>
                  </div>
                </Reveal>
              </Chapter>

              {/* Chapter 1 */}
              <Chapter index={1} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="01" label="Shaping it" />
                <H2>From sketches to a tested flow.</H2>
                <Lead>
                  Before anything looked good, it had to work. I mapped the key moments, sketched, built a clickable
                  greyscale prototype and put it in front of users.
                </Lead>

                <ol className="mt-10 flex flex-wrap gap-2 text-sm font-medium">
                  {["Journey map", "Paper wireframes", "Digital wireframes", "Low-fi prototype", "Usability study", "Hi-fi design"].map(
                    (step, i) => (
                      <li
                        key={step}
                        className="rounded-full px-4 py-2"
                        style={{ backgroundColor: i === 5 ? GG.blue : "#fff", color: i === 5 ? "#fff" : GG.ink, boxShadow: `0 0 0 1px ${GG.border}` }}
                      >
                        <span className="mr-2 font-mono text-xs" style={{ color: i === 5 ? "rgba(255,255,255,0.7)" : GG.blue }}>
                          0{i + 1}
                        </span>
                        {step}
                      </li>
                    ),
                  )}
                </ol>

                <h3 className="mt-14 text-xl font-bold">Amira’s journey map</h3>
                <p className="mt-2 max-w-2xl text-sm" style={{ color: GG.muted }}>
                  Built from the research journey maps: one line per stage, with how she feels, what she’s thinking and
                  what the design does about it. The low points became the features.
                </p>
                <JourneyMap />

                <div className="mt-16 grid items-center gap-10 md:grid-cols-[1fr_320px]">
                  <div>
                    <h3 className="text-xl font-bold">Paper wireframes</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed" style={{ color: GG.muted }}>
                      I sketched five ideas for each screen on paper, then combined the strongest parts of each into one
                      version. Paper keeps it cheap to throw ideas away.
                    </p>
                  </div>
                  {has("paper-1.png") && (
                    <Reveal>
                      <Image
                        src="/work/goalguide/paper-1.png"
                        alt="Paper wireframe sketches for sign up, link bank and set a goal"
                        width={720}
                        height={960}
                        unoptimized
                        className="h-auto w-full rounded-2xl"
                        style={{ boxShadow: "0 30px 60px -30px rgba(15,23,42,0.35)" }}
                      />
                    </Reveal>
                  )}
                </div>

                <h3 className="mt-16 text-xl font-bold">Digital wireframes, wired into a low-fi prototype</h3>
                <p className="mt-2 max-w-2xl text-sm" style={{ color: GG.muted }}>
                  The sketches became greyscale screens, linked together so people could click through the core flow
                  before any colour or copy existed.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
                  {wireframes.map(([src, label], i) => (
                    <Reveal key={src} delay={i * 0.05}>
                      <div
                        className="relative w-full overflow-hidden rounded-xl bg-white"
                        style={{ aspectRatio: "440/956", boxShadow: `0 0 0 1px ${GG.border}` }}
                      >
                        <Image src={`/work/goalguide/${src}`} alt={`${label} wireframe`} fill unoptimized sizes="160px" className="object-cover" />
                      </div>
                      <p className="mt-2 text-xs" style={{ color: GG.muted }}>
                        {label}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <h3 className="mt-16 text-xl font-bold">What the usability study changed</h3>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {findings.map((f) => (
                    <Card key={f.quote}>
                      <p className="text-xl font-bold tracking-tight">{f.quote}</p>
                      <p className="mt-3 text-sm" style={{ color: GG.muted }}>
                        {f.problem}
                      </p>
                      {f.before && f.after && (
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          {[
                            [f.before, "Before"],
                            [f.after, "After"],
                          ].map(([src, label]) => (
                            <figure key={label}>
                              <div
                                className="relative w-full overflow-hidden rounded-lg"
                                style={{ aspectRatio: "440/300", boxShadow: `0 0 0 1px ${GG.border}` }}
                              >
                                <Image src={`/work/goalguide/${src}`} alt={`${label}: link bank wireframe`} fill unoptimized sizes="160px" className="object-cover object-top" />
                              </div>
                              <figcaption className="mt-1.5 font-mono text-[10px] uppercase tracking-widest" style={{ color: GG.muted }}>
                                {label}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      )}
                      <p className="mt-5 rounded-2xl px-4 py-3 text-sm font-medium" style={{ backgroundColor: GG.greenSoft, color: "#0F5132" }}>
                        ✓ {f.fix}
                      </p>
                    </Card>
                  ))}
                </div>

                <h3 className="mt-16 text-xl font-bold">One journey, with paths branching off it</h3>
                <p className="mt-2 max-w-2xl text-sm" style={{ color: GG.muted }}>
                  The first prototype was a set of separate screens. For the redesign I organised everything around one
                  main journey, from welcome to goal reached, with the other tasks branching off where they happen.
                </p>
                <Card className="mt-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: GG.blue }}>
                    Main journey
                  </p>
                  <ol className="mt-4 flex flex-wrap items-center gap-y-3 text-sm font-semibold">
                    {mainFlow.map((step, i) => (
                      <li key={step} className="flex items-center">
                        <span className="rounded-full px-3.5 py-2" style={{ backgroundColor: GG.blue, color: "#fff" }}>
                          {step}
                        </span>
                        {i < mainFlow.length - 1 && (
                          <span aria-hidden="true" className="px-1.5" style={{ color: GG.blue }}>
                            →
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 grid gap-6 border-t pt-6 md:grid-cols-2" style={{ borderColor: GG.border }}>
                    {sideFlows.map(([name, steps]) => (
                      <div key={name}>
                        <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: GG.muted }}>
                          {name}
                        </p>
                        <ol className="mt-3 flex flex-wrap items-center gap-y-2 text-sm font-medium">
                          {steps.map((step, i) => (
                            <li key={step + i} className="flex items-center">
                              <span className="rounded-full px-3 py-1.5" style={{ backgroundColor: GG.bg, boxShadow: `0 0 0 1px ${GG.border}` }}>
                                {step}
                              </span>
                              {i < steps.length - 1 && (
                                <span aria-hidden="true" className="px-1.5" style={{ color: GG.muted }}>
                                  →
                                </span>
                              )}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </Card>
              </Chapter>

              {/* Chapter 2 */}
              <Chapter index={2} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="02" label="Day 1" />
                <H2>From download to a real plan in three steps.</H2>
                <Lead>
                  The first version asked for a full budget during sign-up. Now onboarding is three light steps, and
                  budgeting waits until people need it.
                </Lead>

                <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
                  {dayOne.map(([src, title, text], i) => (
                    <Reveal key={src} delay={i * 0.08}>
                      <Phone src={`/work/goalguide/${src}`} alt={`${title} screen`} />
                      <p className="mt-4 text-sm font-bold">
                        <span style={{ color: GG.blue }}>0{i + 1}</span> {title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: GG.muted }}>
                        {text}
                      </p>
                    </Reveal>
                  ))}
                </div>

</Chapter>

              {/* Chapter 2 */}
              <Chapter index={3} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="03" label="Week 1" />
                <H2>Make it automatic, so nobody has to remember.</H2>
                <Lead>
                  Accountability was the pain point people felt most. My answer was to take willpower out of it: one clear
                  next step on an empty home screen, then auto-save that does the work every month.
                </Lead>

                <div className="mt-14 grid items-start gap-8 md:grid-cols-3">
                  <Reveal>
                    <Phone src="/work/goalguide/home-empty.png" alt="New user home with a first deposit prompt and a set-up checklist" />
                    <p className="mt-4 text-sm" style={{ color: GG.muted }}>
                      <b style={{ color: GG.ink }}>An empty state with a job.</b> A new user sees one next step and a short
                      set-up checklist, not a blank dashboard.
                    </p>
                  </Reveal>
                  <Reveal delay={0.08} className="md:mt-16">
                    <Phone src="/work/goalguide/autosave-setup.png" alt="Auto-save setup with amount, frequency and a skip if balance is low switch" />
                    <p className="mt-4 text-sm" style={{ color: GG.muted }}>
                      <b style={{ color: GG.ink }}>Show the payoff.</b> Changing the amount instantly shows when you’ll
                      reach the goal. “Skip if my balance is low” removes the fear of overdrafts.
                    </p>
                  </Reveal>
                  <Reveal delay={0.16} className="md:mt-32">
                    <Phone src="/work/goalguide/autosave-on.png" alt="Auto-save is on, with the next three deposits" />
                    <p className="mt-4 text-sm" style={{ color: GG.muted }}>
                      <b style={{ color: GG.ink }}>Show the future.</b> The next three deposits, and the moment the goal
                      is reached.
                    </p>
                  </Reveal>
                </div>
              </Chapter>

              {/* Chapter 3 */}
              <Chapter index={4} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="04" label="Halfway" />
                <H2>Staying on track, without opening the app every day.</H2>
                <Lead>
                  Months later, Amira mostly hears from GoalGuide through notifications. When she does open it, adding a
                  little extra takes two taps, and she sees the effect before she confirms.
                </Lead>

                <div className="mt-14 grid items-center gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1.15fr]">
                  <div className="grid grid-cols-2 gap-5">
                    <Reveal>
                      <Phone src="/work/goalguide/notifications.png" alt="Notifications: auto-save complete, over halfway to Paris" />
                      <p className="mt-4 text-sm" style={{ color: GG.muted }}>
                        Progress and wins come to her.
                      </p>
                    </Reveal>
                    <Reveal delay={0.08}>
                      <Phone src="/work/goalguide/goal-detail.png" alt="Paris trip goal detail at 62%" />
                      <p className="mt-4 text-sm" style={{ color: GG.muted }}>
                        One ring, one status, two actions.
                      </p>
                    </Reveal>
                  </div>

                  <div className="mx-auto w-full max-w-[340px]">
                    <AddMoneyDemo />
                    <p className="mt-6 text-lg font-semibold leading-snug">See the impact before you act.</p>
                    <p className="mt-2" style={{ color: GG.muted }}>
                      The sheet says “After this you’ll be at 65%” before she taps. Then the ring fills, the total
                      counts up and a toast confirms it. Progress should feel like a small reward.
                    </p>
                  </div>
                </div>
              </Chapter>

              {/* Chapter 4 */}
              <Chapter index={5} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="05" label="Bad days" />
                <H2>Bad days are part of the journey.</H2>
                <Lead>
                  Real saving isn’t a straight line. People overspend, need their money back, or make mistakes. These
                  screens inform rather than block: good friction, not punishment.
                </Lead>

                <div className="mt-14 grid gap-10 md:grid-cols-3">
                  {badDays.map(([src, title, text], i) => (
                    <Reveal key={src} delay={i * 0.08}>
                      <Phone src={`/work/goalguide/${src}`} alt={`${title} screen`} />
                      <p className="mt-5 text-lg font-bold">{title}</p>
                      <p className="mt-2 text-sm leading-relaxed" style={{ color: GG.muted }}>
                        {text}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </Chapter>

              {/* Chapter 5 */}
              <Chapter index={6} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <div className="grid items-center gap-14 md:grid-cols-[1fr_320px]">
                  <div>
                    <Kicker n="06" label="Month 7" />
                    <H2>
                      Paris trip <span style={{ color: GG.green }}>complete.</span>
                    </H2>
                    <Lead>
                      $2,000 saved, without Amira having to remember a single deposit. The ring closes, the confetti
                      drops, and the app points straight to what’s next: a new goal, or withdrawing for the trip.
                    </Lead>
                    <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                      {[
                        ["7", "months"],
                        ["$286", "a month"],
                        ["8", "deposits"],
                      ].map(([v, l]) => (
                        <div key={l} className="rounded-2xl bg-white p-5 text-center" style={{ boxShadow: `0 0 0 1px ${GG.border}` }}>
                          <p className="text-3xl font-bold tracking-tight">{v}</p>
                          <p className="mt-1 text-sm" style={{ color: GG.muted }}>
                            {l}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Reveal className="mx-auto w-full max-w-[320px]">
                    <Phone src="/work/goalguide/goal-reached.png" alt="Paris trip complete, goal reached celebration" />
                  </Reveal>
                </div>
              </Chapter>
            </div>
          </div>
        </StoryProvider>

        {/* Motion */}
        <section className="border-t border-[#E2E8F0] px-6 py-24 md:px-16 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: GG.muted }}>
            Motion
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
            Every animation has a job.
          </h2>
          <p className="mt-6 max-w-2xl text-lg" style={{ color: GG.muted }}>
            I prototyped the motion in Figma with Smart Animate, using matching layer names so elements move between
            screens instead of cutting. Each one either shows progress, confirms an action or rewards a milestone.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {motions.map((m) => (
              <Reveal key={m.title}>
                <Card className="h-full">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <Phone src={`/work/goalguide/${m.from}`} alt={`${m.title}: start of the animation`} sizes="200px" />
                    <span aria-hidden="true" className="text-2xl" style={{ color: GG.blue }}>
                      →
                    </span>
                    <Phone src={`/work/goalguide/${m.to}`} alt={`${m.title}: end of the animation`} sizes="200px" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{m.title}</h3>
                  <p className="mt-3 text-sm" style={{ color: GG.muted }}>
                    <b style={{ color: GG.ink }}>How:</b> {m.how}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: GG.muted }}>
                    <b style={{ color: GG.ink }}>Why:</b> {m.why}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <h3 className="mt-16 text-xl font-bold">Three transition rules for the whole app</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {motionRules.map(([rule, use]) => (
              <div key={rule} className="rounded-3xl bg-white p-6" style={{ boxShadow: `0 0 0 1px ${GG.border}` }}>
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: GG.blue }}>
                  {rule}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: GG.muted }}>
                  {use}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Behind it: the system */}
      <section className={`${inter.className} bg-white px-6 py-24 md:px-16 md:py-32`} style={{ color: GG.ink }}>
        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: GG.muted }}>
          Behind it
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
          A small system, built to hand off.
        </h2>
        <p className="mt-6 max-w-2xl text-lg" style={{ color: GG.muted }}>
          Blue builds trust in a money app. Everything else is calm, so the amounts do the talking.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {system.map(([title, text]) => (
            <div key={title} className="rounded-3xl p-6" style={{ backgroundColor: GG.bg }}>
              <p className="text-lg font-bold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: GG.muted }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="relative w-full overflow-hidden rounded-3xl" style={{ aspectRatio: "2864/1596", boxShadow: `0 0 0 1px ${GG.border}` }}>
              <Image
                src="/work/goalguide/foundations.png"
                alt="GoalGuide foundations: colour variables and type styles"
                fill
                unoptimized
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div
              className="relative h-full min-h-[360px] w-full overflow-hidden rounded-3xl"
              style={{ boxShadow: `0 0 0 1px ${GG.border}` }}
            >
              <Image
                src="/work/goalguide/components.png"
                alt="GoalGuide components: icons, buttons, inputs, stepper, goal card, progress ring and navigation"
                fill
                unoptimized
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{ background: "linear-gradient(to bottom, rgba(246,247,251,0), #F6F7FB)" }}
              />
            </div>
          </Reveal>
        </div>
        {/* Accessibility */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Accessibility check</h3>
            <p className="mt-3" style={{ color: GG.muted }}>
              I checked every text colour against WCAG AA, which asks for at least 4.5:1 for normal text. Five pairs
              were at or below the line, so I darkened four colours just enough to pass with room to spare. The look
              barely changes.
            </p>
            <ul className="mt-6 space-y-3 text-sm" style={{ color: GG.muted }}>
              <li>
                <b style={{ color: GG.ink }}>Never colour alone.</b> Money in and out also differ by + or − and by icon,
                so they read without colour.
              </li>
              <li>
                <b style={{ color: GG.ink }}>Tap targets.</b> Every button, chip, tab and back button is at least 44px.
              </li>
              <li>
                <b style={{ color: GG.ink }}>One typeface.</b> Inter only, with hierarchy from size and weight.
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl" style={{ boxShadow: `0 0 0 1px ${GG.border}` }}>
            {contrast.map(([name, before, after, ratio, bg]) => {
              const onColour = name.startsWith("White");
              const swatch = (c: string) => (
                <span
                  className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                  style={{
                    backgroundColor: onColour ? c : bg,
                    color: onColour ? "#FFFFFF" : c,
                    boxShadow: `0 0 0 1px ${GG.border}`,
                  }}
                >
                  Aa
                </span>
              );
              return (
                <div key={name} className="flex items-center gap-3 border-b px-5 py-4 last:border-b-0" style={{ borderColor: GG.border }}>
                  {swatch(before)}
                  <span aria-hidden="true" style={{ color: GG.muted }}>
                    →
                  </span>
                  {swatch(after)}
                  <span className="ml-2 flex-1 text-sm font-medium">{name}</span>
                  <span className="hidden font-mono text-xs sm:inline">{ratio}</span>
                  <span
                    className="w-14 rounded-full py-1 text-center text-xs font-semibold"
                    style={{ backgroundColor: GG.greenSoft, color: "#0F5132" }}
                  >
                    Pass
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prototype */}
      <section className={`${inter.className} px-6 py-20 md:px-16 md:py-24`} style={{ backgroundColor: GG.blue, color: "#fff" }}>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
              Prototype
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              Follow Amira’s journey yourself.
            </h2>
            <p className="mt-4 max-w-xl text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
              The full Figma prototype, from welcome to goal reached. Other flows are in the sidebar.
            </p>
          </div>
          <a
            href={PROTOTYPE}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-7 py-4 text-base font-semibold transition-transform hover:scale-[1.03]"
            style={{ color: GG.blue }}
          >
            Open the prototype ↗
          </a>
        </div>
      </section>

      {/* Reflection, back in the site's own style */}
      <section className="border-t border-line px-6 py-20 md:px-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">What I learned</p>
            <p className="mt-8 max-w-md text-lg text-foreground/70">
              A savings app isn’t judged on one screen. It’s judged on whether people are still using it months later.
              Designing around one complete journey, including the bad days, made every screen easier to justify.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">What’s next</p>
            <p className="mt-8 max-w-md text-lg text-foreground/70">
              Test this flow with five people, measure how long it takes to set up a first goal, and explore shared
              goals for friends and couples saving together.
            </p>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-line px-6 py-20 md:px-16">
        <p className="font-mono text-sm uppercase tracking-widest text-foreground/60">Next project</p>
        <Link
          href={`/work/${next.slug}`}
          className="mt-4 inline-block text-5xl font-bold tracking-tight transition-colors hover:text-accent md:text-8xl"
        >
          {next.title} →
        </Link>
      </section>
    </main>
  );
}
