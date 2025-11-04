"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Timeline", href: "#timeline" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="#" className="font-display text-lg font-semibold tracking-wide text-white">
          Ben Efron
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-widest text-ink-200 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="relative transition-colors hover:text-white">
              {link.label}
              <span className="absolute inset-x-0 -bottom-2 h-[2px] origin-center scale-x-0 bg-accent transition-transform duration-200 ease-out hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 text-sm uppercase tracking-widest text-ink-200 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 transition-colors hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
