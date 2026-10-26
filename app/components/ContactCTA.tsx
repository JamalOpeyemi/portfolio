import FlipText from "./FlipText";

const email = "elijahtemiye46@gmail.com";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jamalopeyemi" },
  // PLACEHOLDER: replace YOUR-USERNAME with your real GitHub username
  { label: "GitHub", href: "https://github.com/YOUR-USERNAME" },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center border-t border-line px-6 py-28 text-center md:px-16 md:py-40"
    >
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        Open invitation
      </p>

      <h2 className="mt-10 text-[15vw] font-medium leading-[0.9] tracking-tight md:mt-14 md:text-[12vw]">
        <span className="block">
          <FlipText text="Let's make" />
        </span>
        <span className="block font-serif font-normal italic text-accent">
          something.
        </span>
      </h2>

      <a
        href={`mailto:${email}`}
        className="mt-14 inline-block break-all border-b-2 border-foreground pb-1 text-xl font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent md:mt-20 md:text-4xl"
      >
        {email}
      </a>

      <ul className="mt-12 flex items-center justify-center divide-x divide-line font-mono text-sm uppercase tracking-widest">
        {links.map((link) => (
          <li key={link.label} className="px-6 md:px-8">
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