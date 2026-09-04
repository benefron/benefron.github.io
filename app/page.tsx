"use client";

import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/AboutSection";
import { Principles } from "@/components/Principles";
import { Projects } from "@/components/Projects";
import { FocusGrid } from "@/components/FocusGrid";
import { Timeline } from "@/components/Timeline";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />

      <div className="reveal"><About /></div>
      <div className="reveal"><FocusGrid /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Principles /></div>
      <div className="reveal"><Timeline /></div>
      <div className="reveal"><Publications /></div>
      <div className="reveal"><Contact /></div>
    </main>
  );
}
