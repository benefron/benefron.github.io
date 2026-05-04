import { timeline } from "@/content/data";

export function Timeline() {
  return (
    <section className="border-t border-ink/10" id="timeline">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">Trajectory</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline list */}
        <div>
          {timeline.map((item, i) => (
            <div
              key={item.year}
              className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10 py-10 border-t border-ink/10 ${i === timeline.length - 1 ? "border-b border-ink/10" : ""}`}
            >
              {/* Year */}
              <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] pt-1">
                {item.year}
              </p>

              {/* Content */}
              <div>
                <h3 className="font-display text-[22px] leading-[1.3] text-ink mb-3">
                  {item.title}<br />
                  <span className="font-body text-[14px] font-normal text-ink-muted">{item.org}</span>
                </h3>
                <p className="font-body text-[15px] leading-[1.75] text-ink-mid">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
