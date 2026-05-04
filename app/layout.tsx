import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600"]
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"]
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Systems Neuroscientist | Neural Coding & Behavior | Bio-Inspired Sensing & Adaptive Systems — Ben Efron",
  description:
    "I study how neural systems encode and act on sensory information, and explore how biological design principles can inform efficient, robust, and adaptive artificial systems.",
  openGraph: {
    title: "Systems Neuroscientist | Neural Coding & Behavior | Bio-Inspired Sensing & Adaptive Systems — Ben Efron",
    description:
      "I study how neural systems encode and act on sensory information, and explore how biological design principles can inform efficient, robust, and adaptive artificial systems.",
    url: "https://benefron.github.io",
    siteName: "Ben Efron",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
