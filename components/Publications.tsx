import { publications } from "@/content/data";
import Link from "next/link";

export function Publications() {
  return (
    <section className="section" id="publications">
      <div className="section-heading text-center">
        <p className="section-subtitle">Selected Work</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Publications</h2>
        <p className="text-cool-300 max-w-2xl mx-auto mt-4">
          Neural coding in behavior, multimodal experiments, and systems-level modeling.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((paper, index) => (
          <article
            key={paper.title}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ice-500/5 to-fire-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cool-800/50 border border-white/10 text-ice-400 font-mono text-sm">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-cool-400 bg-white/5 px-3 py-1 rounded-full">
                  {paper.venue}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-ice-200 transition-colors leading-tight">
                {paper.title}
              </h3>

              <p className="text-sm leading-relaxed text-cool-300">
                {paper.summary}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap gap-3">
              {paper.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice-500/10 text-ice-400 text-xs font-semibold uppercase tracking-wider hover:bg-ice-500/20 transition-colors"
                >
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
