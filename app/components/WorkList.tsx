const projects = [
  { id: "01", title: "Project One", type: "Discipline — placeholder", year: "20XX" },
  { id: "02", title: "Project Two", type: "Discipline — placeholder", year: "20XX" },
  { id: "03", title: "Project Three", type: "Discipline — placeholder", year: "20XX" },
];

export default function WorkList() {
  return (
    <ul className="mt-12 border-t border-line">
      {projects.map((project) => (
        <li key={project.id} className="border-b border-line">
          {/* href="#" is temporary; real case study links come later */}
          <a
            href="#"
            className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 py-8 focus-visible:outline-2 focus-visible:outline-accent md:grid-cols-[5rem_1fr_18rem_6rem]"
          >
            <span className="font-mono text-sm text-foreground/50">
              {project.id}
            </span>
            <span className="text-5xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-4 group-hover:text-accent md:text-7xl">
              {project.title}
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-widest text-foreground/60 md:block">
              {project.type}
            </span>
            <span className="hidden text-right font-mono text-xs uppercase tracking-widest text-foreground/60 md:block">
              {project.year}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}