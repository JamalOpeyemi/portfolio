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
  image?: string;
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
      image: "/work/mimar-tech/new-dashboard.png",
  },
      {
    slug: "parqos",
    id: "03",
    title: "ParqOS",
    type: "Enterprise SaaS / UX/UI Design",
    year: "2026", // PLACEHOLDER: add the real year
    role: "UX/UI Designer",
    timeline: "Timeline — placeholder",
    tools: "Figma",
    summary:
      "A parking operations platform that brings operators, sites, equipment, pricing and access into one interface. I refined how its complex administrative information is organised and connected.",
      image: "/work/parqos/operator-overview.png",
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
      image: "/work/this-site/cover.png",
  },
];