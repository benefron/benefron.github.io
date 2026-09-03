import { principles } from "@/content/data";
import { Section, IndexMark } from "@/components/ui/Section";

export function Principles() {
  return (
    <Section
      id="approach"
      eyebrow="Approach"
      heading="How I work"
      intro="The habits that carry across a recording rig, an estimation algorithm, and an LLM pipeline."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {principles.map((p, i) => (
          <article
            key={p.title}
            className="p-7 bg-bg-card border border-ink/10 rounded-[8px] transition-colors duration-200 hover:border-accent/40"
          >
            <IndexMark n={i + 1} />
            <h3 className="font-display text-h4 text-ink mt-3 mb-2.5">{p.title}</h3>
            <p className="font-body text-small text-ink-muted">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
