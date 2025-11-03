import { hero, stats } from "@/content/data";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-24" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto h-full max-w-5xl rounded-3xl bg-gradient-to-br from-brand-800/40 via-brand-700/25 to-brand-600/20 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-ink-300">
            {hero.name}
          </span>
          <h1>{hero.title}</h1>
          <p className="text-lg text-ink-200">{hero.summary}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href={hero.ctaPrimary.href}
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white/80 transition hover:border-white/60 hover:text-white"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="card-glow gradient-ring rounded-3xl bg-white/5 p-6 backdrop-blur">
              <p className="font-display text-3xl text-white">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-ink-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
