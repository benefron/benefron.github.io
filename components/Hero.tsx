import { hero } from "@/content/data";

export function Hero() {
  return (
    <section className="pt-[60px] bg-bg">
      <div
        className="border-y px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-[72px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start"
        style={{ borderColor: "var(--rule-strong)" }}
      >
        {/* Text */}
        <div className="flex flex-col order-2 lg:order-1 min-w-0">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-accent" />
            <span className="font-mono uppercase text-eyebrow text-accent">{hero.eyebrow}</span>
          </div>

          <h1 className="font-display text-h1 text-ink mb-3">
            Ben Efron,
            <br />
            <em className="text-ink-mid">PhD</em>
          </h1>

          <p className="font-body uppercase text-micro text-ink-muted mb-3">{hero.tagline}</p>

          <p className="font-mono text-[11px] text-ink-muted mb-8">{hero.location}</p>

          <p className="font-body text-body-lg text-ink-mid mb-9 max-w-[560px] border-l-2 border-accent pl-5">
            {hero.summary}
          </p>

          <dl className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 pb-8 border-b border-ink/10 max-w-[560px]">
            {hero.metrics.map((m) => (
              <div key={m.value}>
                <dt className="font-display text-[clamp(24px,3vw,34px)] leading-none text-ink">{m.value}</dt>
                <dd className="font-body text-[12px] leading-[1.45] text-ink-muted mt-2">{m.label}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto text-center px-7 py-3.5 text-white font-semibold uppercase text-[12px] tracking-[0.1em] rounded-[4px] bg-accent-str transition-colors duration-200 hover:bg-ink"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="w-full sm:w-auto text-center px-7 py-3.5 text-ink-mid font-medium uppercase text-[12px] tracking-[0.08em] rounded-[4px] border border-ink/10 transition-colors duration-200 hover:border-ink-mid hover:text-ink"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headshot_matched.png"
            alt="Ben Efron"
            className="rounded-full object-cover border border-ink/10 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
            style={{ objectPosition: "center 18%" }}
          />
        </div>
      </div>
    </section>
  );
}
