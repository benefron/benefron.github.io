import Link from "next/link";
import { mediaFeatures } from "@/content/data";

export function MediaHighlights() {
  return (
    <section className="section" id="media">
      <div className="section-heading text-center">
        <p className="section-subtitle">Press</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">In the Media</h2>
        <p className="text-cool-300 max-w-2xl mx-auto mt-4">
          Coverage highlighting active sensing and neural coding research.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {mediaFeatures.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-cool-800/50 text-ice-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-cool-500 group-hover:text-ice-400 transition-colors">Read Article</span>
            </div>

            <p className="text-base font-medium text-white group-hover:text-ice-200 transition-colors">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
