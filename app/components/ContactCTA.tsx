import Link from "next/link";
import FlipText from "./FlipText";

const email = "elijahtemiye46@gmail.com";

// All three use the same style. Email is first, then the social links.
const links = [
  { label: email, href: `mailto:${email}`, external: false },
  {
    label: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/jamalopeyemi",
    external: true,
  },
  // PLACEHOLDER: replace YOUR-USERNAME with your real GitHub username
  {
    label: "GitHub ↗",
    href: "https://github.com/YOUR-USERNAME",
    external: true,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="border-t border-line px-6 py-16 md:px-16 md:py-20"
    >
      {/* Tag stays on the left */}
      <p className="font-mono text-sm uppercase tracking-widest text-accent">
        Open invitation
      </p>

      {/* Everything below is centered */}
      <div className="mt-10 flex flex-col items-center text-center md:mt-12">
        {/* The big text is a link to the Contact page */}
        <Link
          href="/contact"
          aria-label="Let's make something. Go to the contact page"
          className="block text-[length:calc((100vw_-_3rem)/5.4)] font-medium leading-[0.9] tracking-tight transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent md:text-[length:calc((100vw_-_8rem)/5.6)]"
        >
          <span className="block">
            <FlipText text="Let's make" />
          </span>
          <span className="block font-serif font-normal italic text-accent">
            something.
          </span>
        </Link>

        {/* Email, LinkedIn, GitHub: same style, same row */}
        <ul className="mt-10 flex flex-col items-center gap-4 font-mono text-sm uppercase tracking-widest md:mt-14 md:flex-row md:justify-center md:gap-0 md:divide-x md:divide-line">
          {links.map((link) => (
            <li key={link.label} className="md:px-8">
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="break-all transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}