import Link from "next/link";
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
      className="border-t border-line px-6 py-24 md:px-16 md:py-32"
    >
      {/* Tag stays on the left */}
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        Open invitation
      </p>

      {/* Everything below is centered */}
      <div className="mt-16 flex flex-col items-center text-center md:mt-24">
        {/* The big text is a link to the Contact page */}
        <Link
          href="/contact"
          aria-label="Let's make something. Go to the contact page"
          className="block text-[15vw] font-medium leading-[0.9] tracking-tight transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent md:whitespace-nowrap md:text-[length:calc((100vw_-_8rem)/10.5)]"
        >
          <span className="block md:inline">
            <FlipText text="Let's make" />
          </span>{" "}
          <span className="block font-serif font-normal italic text-accent md:inline">
            something.
          </span>
        </Link>

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
      </div>
    </section>
  );
}