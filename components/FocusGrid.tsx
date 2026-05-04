import { focusAreas } from "@/content/data";

export function FocusGrid() {
  return (
    <section className="border-t border-ink/10" id="research">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">Research</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink mb-4"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            Current Focus
          </h2>
          <p className="font-body text-[16px] text-ink-muted leading-[1.7] max-w-[560px]">
            Linking active sensing, neural coding, and system-level design principles.
          </p>
        </div>

        {/* Cards grid */}
        <div className="border border-ink/10 rounded-[6px] overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className="p-9 hover:bg-bg-card transition-colors duration-200"
            >
              <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--accent)] mb-4">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-[22px] leading-[1.25] text-ink mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[14px] leading-[1.7] text-ink-muted mb-5">
                {item.description}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-[10px] border-t border-ink/10 py-1.5"
                  >
                    <span className="text-[var(--accent)] text-[11px] flex-shrink-0 mt-0.5">→</span>
                    <span className="font-body text-[13px] text-ink-mid leading-[1.5]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
