const email = "elijahtemiye46@gmail.com";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jamalopeyemi" },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="border-t border-line px-6 py-24 md:px-16 md:py-32"
    >
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        03 / Contact
      </p>

      {/* Placeholder wording: rewrite in your own voice */}
      <h2 className="mt-8 text-[13vw] font-bold leading-[0.88] tracking-tight md:text-[9vw]">
        Let&apos;s make{" "}
        <span className="font-serif font-normal italic text-accent">
          something
        </span>
        .
      </h2>

      <a
        href={`mailto:${email}`}
        className="mt-12 inline-block break-all border-b-2 border-foreground pb-1 text-xl font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent md:text-4xl"
      >
        {email}
      </a>

      <ul className="mt-10 flex gap-8 font-mono text-sm uppercase tracking-widest">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}