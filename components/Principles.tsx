import { principles } from "@/content/data";
import { Section } from "@/components/ui/Section";

export function Principles() {
  return (
    <Section
      id="approach"
      eyebrow="Approach"
      heading="How I work"
      intro="The habits that carry across a recording rig, an estimation algorithm and an LLM pipeline."
      spacing="compact"
    >
      <div>
        {principles.map((p, i) => (
          <div
            key={p.title}
            className={`grid grid-cols-1 md:grid-cols-[40px_240px_1fr] gap-2 md:gap-8 py-6 border-t border-ink/10 ${
              i === principles.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <span className="font-mono text-micro tracking-[0.1em] text-accent md:pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-h4 text-ink">{p.title}</h3>
            <p className="font-body text-small text-ink-mid">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
