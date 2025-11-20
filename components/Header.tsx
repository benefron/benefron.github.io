"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Timeline", href: "#timeline" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 bg-cool-950/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/20" : "py-6 bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-ice-400 to-fire-500 p-[1px]">
            <div className="h-full w-full rounded-[7px] bg-cool-950 flex items-center justify-center">
              <span className="font-display font-bold text-white">B</span>
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-wide text-white group-hover:text-ice-400 transition-colors">
            Ben Efron
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium uppercase tracking-wider text-cool-300 transition-colors hover:text-white group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ice-400 transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden relative z-50 p-2 text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-full border-b border-white/10 bg-cool-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-cool-200 hover:text-ice-400 transition-colors"
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
