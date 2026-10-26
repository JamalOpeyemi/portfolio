import type { Metadata } from "next";
import ServicesPage from "../components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}