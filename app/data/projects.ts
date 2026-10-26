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
    title: "Project One",
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
    title: "Project Two",
    type: "Discipline — placeholder",
    year: "2025",
    role: "Role — placeholder",
    timeline: "Timeline — placeholder",
    tools: "Tools — placeholder",
    summary:
      "Placeholder summary. One or two sentences on the problem and your contribution.",
  },
  {
    slug: "project-three",
    id: "03",
    title: "Project Three",
    type: "Discipline — placeholder",
    year: "20XX",
    role: "Role — placeholder",
    timeline: "Timeline — placeholder",
    tools: "Tools — placeholder",
    summary:
      "Placeholder summary. One or two sentences on the problem and your contribution.",
  },
];