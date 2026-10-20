import type { Metadata } from "next";
import ContactCTA from "../components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact — Elijah the Great",
};

export default function ContactPage() {
  return (
    <main>
      <ContactCTA />
    </main>
  );
}