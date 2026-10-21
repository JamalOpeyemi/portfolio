export default function FlipText({ text }: { text: string }) {
  return (
    <span>
      {/* Hidden text for screen readers */}
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {text.split(" ").map((word, w) => (
          <span key={w}>
            {w > 0 && " "}
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, i) => (
                <span
                  key={i}
                  className="group/letter relative inline-grid cursor-default justify-items-center"
                >
                  <span className="col-start-1 row-start-1 transition-all duration-300 motion-reduce:transition-none group-hover/letter:-translate-y-[12%] group-hover/letter:opacity-0">
                    {char}
                  </span>
                  <span className="col-start-1 row-start-1 translate-y-[12%] font-serif font-normal italic text-accent opacity-0 transition-all duration-300 motion-reduce:transition-none group-hover/letter:translate-y-0 group-hover/letter:opacity-100">
                    {char}
                  </span>
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}