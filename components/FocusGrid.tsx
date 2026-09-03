import { focusAreas } from "@/content/data";
import { Section, IndexMark } from "@/components/ui/Section";

export function FocusGrid() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      heading="Research focus"
      intro="Linking active sensing, neural coding, and system-level design principles."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {focusAreas.map((item, index) => (
          <article
            key={item.title}
            className="p-7 bg-bg-card border border-ink/10 rounded-[8px] transition-colors duration-200 hover:border-accent/40"
          >
            <IndexMark n={index + 1} />
            <h3 className="font-display text-h3 text-ink mt-3 mb-3">{item.title}</h3>
            <p className="font-body text-small text-ink-muted mb-5">{item.description}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-[10px] border-t border-ink/10 py-2">
                  <span className="text-accent text-micro shrink-0 mt-0.5">→</span>
                  <span className="font-body text-small text-ink-mid">{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
