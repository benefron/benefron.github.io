import { publications } from "@/content/data";
import Link from "next/link";

export function Publications() {
  return (
    <section className="section" id="publications">
      <div className="section-heading">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Selected Publications</h2>
        <p className="section-subtitle">Neural coding in behavior, multimodal experiments, and systems-level modeling.</p>
      </div>
      <div className="space-y-4 md:space-y-6">
        {publications.map((paper) => (
          <article key={paper.title} className="card-glow gradient-ring rounded-2xl bg-white/5 p-5 backdrop-blur md:rounded-3xl md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-2 md:gap-3">
              <h3 className="text-base font-semibold text-white md:text-lg lg:text-xl">{paper.title}</h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-ink-300 md:text-xs">{paper.venue}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-200 md:mt-4 md:text-sm">{paper.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 md:mt-5 md:gap-3">
              {paper.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/50 hover:text-white md:px-4 md:py-2 md:text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
