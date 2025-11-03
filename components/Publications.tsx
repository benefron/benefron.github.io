import { publications } from "@/content/data";
import Link from "next/link";

export function Publications() {
  return (
    <section className="section" id="publications">
      <div className="section-heading">
        <h2>Selected Publications</h2>
        <p className="section-subtitle">Neural coding in behavior, multimodal experiments, and systems-level modeling.</p>
      </div>
      <div className="space-y-6">
        {publications.map((paper) => (
          <article key={paper.title} className="card-glow gradient-ring rounded-3xl bg-white/5 p-7 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{paper.title}</h3>
              <span className="text-xs uppercase tracking-[0.35em] text-ink-300">{paper.venue}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-200">{paper.summary}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {paper.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/50 hover:text-white"
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
