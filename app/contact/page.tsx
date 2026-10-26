import type { Metadata } from "next";
import ContactHero from "../components/ContactHero";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
    </main>
  );
}