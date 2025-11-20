import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-display" });

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

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="bg-slate-950 text-ink-100 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#2b1c6f_0%,rgba(17,24,39,0)_55%),radial-gradient(circle_at_bottom,#6b46ff33_0%,rgba(15,23,42,0)_60%)]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
