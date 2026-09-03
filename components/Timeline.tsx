import { timeline } from "@/content/data";
import { Section } from "@/components/ui/Section";

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="Trajectory" heading="Experience">
      <div>
        {timeline.map((item, i) => (
          <div
            key={item.year}
            className={`grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-10 py-8 border-t border-ink/10 ${
              i === timeline.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-accent md:pt-1">
              {item.year}
            </p>
            <div>
              <h3 className="font-display text-h3 text-ink mb-2">
                {item.title}
                <br />
                <span className="font-body text-[14px] font-normal text-ink-muted">{item.org}</span>
              </h3>
              <p className="font-body text-body text-ink-mid">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
