import { contact } from "@/content/data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:py-12">
        <div>
          <p className="font-display text-lg text-white">Let&apos;s collaborate</p>
          <p className="mt-2 max-w-md text-sm text-ink-300">
            I&apos;m interested in systems neuroscience collaborations, neural coding projects, and bio-inspired sensing strategies. Reach out for opportunities to connect experiments with computation.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink-200 md:text-right">
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
            {contact.email}
          </a>
          <a href={contact.linkedin} className="transition-colors hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.github} className="transition-colors hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.resume} className="transition-colors hover:text-white" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
