import { hero, stats } from "@/content/data";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-0 pb-12 pt-16 md:px-6 md:pb-16 md:pt-24" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="mx-auto h-full max-w-5xl rounded-3xl bg-gradient-to-br from-brand-800/40 via-brand-700/25 to-brand-600/20 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="max-w-xl space-y-4 md:space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink-300 md:px-4 md:text-xs">
            {hero.name}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">{hero.title}</h1>
          <p className="text-base text-ink-200 md:text-lg">{hero.summary}</p>
          <div className="flex flex-wrap gap-3 pt-2 md:gap-4 md:pt-4">
            <Link
              href={hero.ctaPrimary.href}
              className="rounded-full bg-brand-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 md:px-6 md:py-3 md:text-sm"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/60 hover:text-white md:px-6 md:py-3 md:text-sm"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {stats.map((item) => (
            <div key={item.label} className="card-glow gradient-ring rounded-2xl bg-white/5 p-5 backdrop-blur md:rounded-3xl md:p-6">
              <p className="font-display text-2xl text-white md:text-3xl">{item.value}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-ink-300 md:text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
