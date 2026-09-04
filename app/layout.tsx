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
  metadataBase: new URL("https://benefron.github.io"),
  title: "Ben Efron, PhD | R&D Engineer & Systems Neuroscientist",
  description:
    "I study how neural circuits encode and adapt, and I build the systems that test it: biologically inspired algorithms, event-based sensing, real-time control, and the analysis that says what the data supports. Based in Leuven, Belgium.",
  icons: { icon: "/images/favicon.svg" },
  openGraph: {
    title: "Ben Efron, PhD | R&D Engineer & Systems Neuroscientist",
    description:
      "Biologically inspired algorithms, event-based sensing and real-time systems, built end to end. Based in Leuven, Belgium.",
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
