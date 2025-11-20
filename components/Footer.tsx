import { contact } from "@/content/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-cool-950 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-white">Ben Efron</p>
          <p className="text-sm text-cool-400 mt-1">Systems Neuroscience & Neural Computation</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={`mailto:${contact.email}`} className="text-cool-400 hover:text-ice-400 transition-colors text-sm font-medium uppercase tracking-wider">
            Email
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-cool-400 hover:text-ice-400 transition-colors text-sm font-medium uppercase tracking-wider">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="text-cool-400 hover:text-ice-400 transition-colors text-sm font-medium uppercase tracking-wider">
            GitHub
          </a>
        </div>

        <div className="text-xs text-cool-600 md:text-right">
          &copy; {new Date().getFullYear()} Ben Efron. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
