import { publications } from "@/content/data";

export function Publications() {
  return (
    <section className="border-t border-ink/10" id="publications">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">Selected Work</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            Publications
          </h2>
        </div>

        {/* Publications list */}
        <div>
          {publications.map((paper, index) => (
            <div
              key={paper.title}
              className={`grid items-start gap-6 py-8 border-t border-ink/10 ${index === publications.length - 1 ? "border-b border-ink/10" : ""}`}
              style={{ gridTemplateColumns: "48px 1fr auto" }}
            >
              {/* Index */}
              <span className="font-mono text-[11px] text-ink-muted text-right pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Body */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent)] mb-2">
                  {paper.venue}
                </p>
                <h3 className="font-body text-[17px] font-medium text-ink leading-[1.45] mb-1.5">
                  {paper.title}
                </h3>
                <p className="font-body text-[13px] text-ink-muted leading-[1.65]">
                  {paper.summary}
                </p>
              </div>

              {/* Link */}
              <div className="pt-1">
                {paper.links.length > 0 ? (
                  <a
                    href={paper.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent-str)] no-underline whitespace-nowrap transition-all duration-200"
                  >
                    {paper.links[0].label}
                    <span className="ml-1.5 transition-[margin] duration-200 group-hover:ml-2.5">→</span>
                  </a>
                ) : (
                  <div />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
