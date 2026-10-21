// PLACEHOLDER words: edit freely.
const items = ["UX/UI Designer", "Elijah the Great", "Portfolio 2026"];

// Repeat enough times to fill wide screens
const half = Array.from({ length: 4 }, () => items).flat();

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line py-3"
    >
      <div className="marquee-track flex w-max whitespace-nowrap font-mono text-xs uppercase tracking-widest text-foreground/70">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {half.map((item, i) => (
              <span key={i} className="px-6">
                {item} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}