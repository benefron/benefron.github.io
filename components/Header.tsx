"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Work", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Experience", href: "#timeline" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center border-b border-ink/10"
      style={{ background: "rgba(245,243,238,0.85)", backdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex w-full max-w-shell items-center justify-between px-6 sm:px-10">
        <Link href="#" className="font-display text-[18px] text-ink">
          Ben Efron, <em>PhD</em>
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[12px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 text-ink focus:outline-none"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-full border-b border-ink/10 md:hidden transition-all duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(245,243,238,0.95)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium uppercase tracking-[0.1em] text-ink-muted hover:text-ink transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
