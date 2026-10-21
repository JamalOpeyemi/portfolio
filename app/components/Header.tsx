import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-line px-6 py-5 md:px-16">
      <Link
        href="/"
        className="font-mono text-sm uppercase tracking-widest focus-visible:outline-2 focus-visible:outline-accent"
      >
        Elijah Opeyemi
      </Link>
      <nav aria-label="Main">
        <ul className="flex gap-6 font-mono text-sm uppercase tracking-widest">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}