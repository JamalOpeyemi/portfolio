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
  ["“How far along am I?”", "Users lost track during sign-up.", "A labelled stepper on every onboarding screen: Step 1 of 3."],
  ["“Did that actually save?”", "Users weren’t sure a goal had been created.", "A confirmation screen that spells out the plan."],
  ["“Where are the settings?”", "The settings icon was hard to find.", "Settings live in one predictable place, the Me tab."],
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
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#2F6BFF]"
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
                GoalGuide turns “I want to save for something” into a plan that runs itself. This case study follows one
                person, Amira, from her first tap to her goal. Watch the ring fill as you scroll.
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
                <Kicker n="01" label="Day 1" />
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

                <p className="mt-20 font-mono text-xs uppercase tracking-widest" style={{ color: GG.muted }}>
                  What usability testing changed
                </p>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                  {findings.map(([quote, problem, fix]) => (
                    <Card key={quote}>
                      <p className="text-xl font-bold tracking-tight">{quote}</p>
                      <p className="mt-3 text-sm" style={{ color: GG.muted }}>
                        {problem}
                      </p>
                      <p
                        className="mt-5 rounded-2xl px-4 py-3 text-sm font-medium"
                        style={{ backgroundColor: GG.greenSoft, color: "#0F5132" }}
                      >
                        ✓ {fix}
                      </p>
                    </Card>
                  ))}
                </div>
              </Chapter>

              {/* Chapter 2 */}
              <Chapter index={2} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="02" label="Week 1" />
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
              <Chapter index={3} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="03" label="Halfway" />
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
              <Chapter index={4} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <Kicker n="04" label="Bad days" />
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
              <Chapter index={5} className="border-t border-[#E2E8F0] py-24 md:py-32">
                <div className="grid items-center gap-14 md:grid-cols-[1fr_320px]">
                  <div>
                    <Kicker n="05" label="Month 7" />
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
