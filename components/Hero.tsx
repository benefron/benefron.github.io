import { hero } from "@/content/data";

export function Hero() {
  return (
    <section style={{ paddingTop: "60px", background: "var(--bg)" }}>
      {/* Hero card */}
      <div
        style={{
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          background: "var(--bg)",
          padding: "72px 80px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "64px",
          alignItems: "start",
          maxWidth: "100%",
        }}
      >
        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px" style={{ background: "var(--accent)" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.15em", color: "var(--accent)" }}
            >
              Systems Neuroscientist
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display leading-none tracking-[-0.02em] text-ink mb-3"
            style={{ fontSize: "clamp(52px, 5.5vw, 80px)" }}
          >
            Ben Efron,<br />
            <em style={{ color: "var(--ink-mid)" }}>PhD</em>
          </h1>

          {/* Tagline */}
          <p
            className="font-body uppercase text-ink-muted mb-8"
            style={{ fontSize: "13px", letterSpacing: "0.06em", lineHeight: "1.8" }}
          >
            Neural Computation · Adaptive Dynamics · Bio-Inspired Design
          </p>

          {/* Summary */}
          <p
            className="font-body text-ink-mid mb-10"
            style={{
              fontSize: "17px",
              lineHeight: "1.75",
              maxWidth: "560px",
              borderLeft: "2px solid var(--accent)",
              paddingLeft: "20px",
            }}
          >
            I study how neural circuits compute and adapt, translating these principles
            into strategies for{" "}
            <strong>sensing, representation, and closed-loop control.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="px-7 py-3.5 text-white font-semibold uppercase rounded-[4px] transition-colors duration-200 hover:bg-ink"
              style={{ fontSize: "12px", letterSpacing: "0.1em", background: "var(--accent-str)" }}
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="px-7 py-3.5 text-ink-mid font-medium uppercase rounded-[4px] border border-ink/10 transition-colors duration-200 hover:border-ink-mid hover:text-ink"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Right — circular photo */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            width: "300px",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/headshot_matched.png"
            alt="Ben Efron"
            style={{
              width: "280px",
              height: "280px",
              objectFit: "cover",
              objectPosition: "center 18%",
              borderRadius: "50%",
              border: "1px solid var(--rule)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
