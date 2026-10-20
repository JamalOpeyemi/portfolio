type Ratio = "16/9" | "4/3" | "1/1";

const ratioClass: Record<Ratio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
};

function Placeholder({
  label,
  ratio = "16/9",
}: {
  label: string;
  ratio?: Ratio;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center border border-foreground/30 bg-[#1c1c1e] text-center font-mono text-xs uppercase tracking-widest text-foreground/60 md:text-sm ${ratioClass[ratio]}`}
    >
      {label}
    </div>
  );
}

/* A chapter of the story: numbered label, one short intro line, then visuals */
export function Chapter({
  number,
  title,
  intro,
  children,
}: {
  number: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-20 md:px-16 md:py-28">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        {number} / {title}
      </p>
      <p className="mt-6 max-w-xl text-lg text-foreground/70">{intro}</p>
      <div className="mt-10 space-y-6">{children}</div>
    </section>
  );
}

/* One large visual with an optional caption */
export function Visual({
  label,
  caption,
  ratio = "16/9",
}: {
  label: string;
  caption?: string;
  ratio?: Ratio;
}) {
  return (
    <figure>
      <Placeholder label={label} ratio={ratio} />
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Two visuals side by side: before/after, wireframe/final, version A/B */
export function Compare({
  leftLabel,
  rightLabel,
}: {
  leftLabel: string;
  rightLabel: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <figure>
        <Placeholder label={`${leftLabel} — placeholder`} ratio="4/3" />
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
          {leftLabel}
        </figcaption>
      </figure>
      <figure>
        <Placeholder label={`${rightLabel} — placeholder`} ratio="4/3" />
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/50">
          {rightLabel}
        </figcaption>
      </figure>
    </div>
  );
}

/* Research insights as numbered cards */
export function Insights({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="bg-background p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Insight 0{i + 1}
          </p>
          <p className="mt-6 text-xl font-semibold leading-snug md:text-2xl">
            Placeholder: add a real finding from your research.
          </p>
        </div>
      ))}
    </div>
  );
}

/* A screen with numbered notes explaining key decisions */
export function Annotated({ notes }: { notes: string[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
      <Placeholder label="Final screen — placeholder" ratio="4/3" />
      <ol className="space-y-6">
        {notes.map((note, i) => (
          <li key={i} className="flex gap-4 border-t border-line pt-4">
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <span className="text-foreground/80">{note}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}