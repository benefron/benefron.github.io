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
  title: "Ben Efron, PhD — Systems Neuroscientist & R&D Engineer",
  description:
    "Systems neuroscientist and R&D engineer. Nine years of neural computation, electrophysiology and statistical modelling, and the sensing hardware, real-time control and applied-AI systems built to test it.",
  icons: { icon: "/images/favicon.svg" },
  openGraph: {
    title: "Ben Efron, PhD — Systems Neuroscientist & R&D Engineer",
    description:
      "Neural computation, electrophysiology and statistical modelling, alongside real-time systems and applied AI. Based in Leuven, Belgium.",
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
