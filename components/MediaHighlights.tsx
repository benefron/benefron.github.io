import { mediaFeatures } from "@/content/data";

export function MediaHighlights() {
  return (
    <section className="border-t border-ink/10" id="media">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">Press</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            In the Media
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mediaFeatures.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group block px-6 py-7 bg-bg-card border border-ink/10 rounded-[6px] transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--accent)] mb-3">
                {item.source}
              </p>
              <p className="font-body text-[14px] text-ink leading-[1.55]">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
