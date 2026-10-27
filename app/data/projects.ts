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
    slug: "Mimar-Tech",
    id: "02",
    title: "Mimar Tech",
    type: "Discipline — placeholder",
    year: "2025",
    role: "Role — placeholder",
    timeline: "Timeline — placeholder",
    tools: "Tools — placeholder",
    summary:
      "Placeholder summary. One or two sentences on the problem and your contribution.",
  },
  {
    slug: "ParqOS",
    id: "03",
    title: "ParqOS",
    type: "Discipline — placeholder",
    year: "20XX",
    role: "Role — placeholder",
    timeline: "Timeline — placeholder",
    tools: "Tools — placeholder",
    summary:
      "Placeholder summary. One or two sentences on the problem and your contribution.",
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