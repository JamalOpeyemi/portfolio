export type Project = {
  slug: string;
  id: string;
  title: string;
  type: string;
  year: string;
  role: string;
  timeline: string;
  tools: string;
  summary: string;
};

// PLACEHOLDERS: replace with your real projects later.
export const projects: Project[] = [
  {
    slug: "Elysian",
    id: "01",
    title: "Elysian",
    type: "Discipline — placeholder",
    year: "2026",
    role: "Role — placeholder",
    timeline: "Timeline — placeholder",
    tools: "Tools — placeholder",
    summary:
      "Placeholder summary. One or two sentences on the problem and your contribution.",
  },
    {
    slug: "mimar-tech",
    id: "02",
    title: "Mimar Tech",
    type: "Product / UI/UX Design",
    year: "2025",
    role: "UI/UX Designer (sole designer)",
    timeline: "March to May 2025",
    tools: "Figma",
    summary:
      "Redesigning a BIM collaboration platform that had been coded without any UI/UX design: a dashboard that fits on one screen, and onboarding for invited teams.",
  },
    {
    slug: "parqos",
    id: "03",
    title: "ParqOS",
    type: "Product / UI/UX Design",
    // PLACEHOLDER: add the real year
    year: "2026",
    role: "Product Designer (brought in to complete the design and flow)",
    // PLACEHOLDER: add the real timeline
    timeline: "Timeline — placeholder",
    // PLACEHOLDER: confirm your tools
    tools: "Figma",
    summary:
      "A parking management system with three views: Operator, Back office and Admin. I was brought in to finish a design that had stalled, and to connect it into one working flow.",
  },
    {
    slug: "this-site",
    id: "04",
    title: "This Site",
    type: "Portfolio / Development",
    year: "2026",
    role: "Designer & Developer (solo)",
    // PLACEHOLDER: replace with your real timeline, e.g. "X weeks"
    timeline: "Timeline — placeholder",
    tools: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
    summary:
      "My own portfolio, designed and built end to end: a dark editorial identity, expressive motion, and a responsive site shipped with AI-assisted workflows.",
  },
];