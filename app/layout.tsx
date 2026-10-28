import type { Metadata } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";

const bricolage = Archivo({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Change this when you move to a custom domain or a different host
const siteUrl = "https://portfolio-nine-ruddy-32.vercel.app";

// PLACEHOLDER: rewrite this description in your own words
const description = "Portfolio of Elijah Opeyemi, UI/UX designer.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elijah Opeyemi — Portfolio",
    template: "%s — Elijah Opeyemi",
  },
  description,
  openGraph: {
    title: "Elijah Opeyemi — Portfolio",
    description,
    url: siteUrl,
    siteName: "Elijah Opeyemi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah Opeyemi — Portfolio",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
            <body className="antialiased">
        <PageTransition />
        <Header />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}