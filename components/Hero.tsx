import { hero } from "@/content/data";

export function Hero() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 pt-[60px]"
      style={{ minHeight: "100vh" }}
      id="hero"
    >
      {/* Left column — text */}
      <div className="flex flex-col justify-center px-6 py-16 lg:pl-20 lg:pr-16 lg:py-20 border-b lg:border-b-0 lg:border-r border-ink/10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[var(--accent)]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
            Systems Neuroscientist
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display leading-none tracking-[-0.02em] text-ink mb-2"
          style={{ fontSize: "clamp(52px, 5.5vw, 80px)" }}
        >
          Ben Efron,<br />
          <em className="text-ink-mid">PhD</em>
        </h1>

        {/* Title line */}
        <p className="font-body text-[14px] font-normal uppercase tracking-[0.06em] text-ink-muted leading-[1.8] mb-9">
          Neural Computation · Adaptive Dynamics · Bio-Inspired Design
        </p>

        {/* Summary */}
        <p
          className="font-body text-[17px] leading-[1.75] text-ink-mid max-w-[480px] border-l-2 border-[var(--accent)] pl-5 mb-12"
        >
          I study how neural circuits compute and adapt, translating these principles
          into strategies for{" "}
          <strong>sensing, representation, and closed-loop control.</strong>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={hero.ctaPrimary.href}
            className="px-7 py-3.5 bg-[var(--accent-str)] text-white text-[12px] font-semibold uppercase tracking-[0.1em] rounded-[4px] transition-colors duration-200 hover:bg-ink"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="px-7 py-3.5 border border-ink/10 text-ink-mid text-[12px] font-medium uppercase tracking-[0.08em] rounded-[4px] transition-colors duration-200 hover:border-ink-mid hover:text-ink"
          >
            {hero.ctaSecondary.label}
          </a>
          <a
            href="/documents/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 border border-ink/10 text-ink-mid text-[12px] font-medium uppercase tracking-[0.08em] rounded-[4px] transition-colors duration-200 hover:border-ink-mid hover:text-ink"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right column — photo */}
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{ background: "var(--bg-alt)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/headshot.jpg"
          alt="Ben Efron"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom pointer-events-none"
          style={{
            mixBlendMode: "multiply",
            width: "85%",
            maxWidth: "420px"
          }}
        />
      </div>
    </section>
  );
}
