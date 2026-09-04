import { focusAreas, focusQuestion } from "@/content/data";
import { Section } from "@/components/ui/Section";

export function FocusGrid() {
  return (
    <Section id="research" eyebrow="Research" heading="Research focus">
      <div className="mb-10 pb-10 border-b border-ink/10">
        <p className="font-mono text-eyebrow uppercase text-accent mb-4">{focusQuestion.eyebrow}</p>
        <p className="font-display text-h3 leading-snug text-ink max-w-[760px]">
          {focusQuestion.question}
        </p>
        <p className="font-body text-body text-ink-mid mt-5 max-w-prose">{focusQuestion.framing}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {focusAreas.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-h4 text-ink mb-2">{item.title}</h3>
            <p className="font-body text-small text-ink-muted mb-3">{item.description}</p>
            <p className="font-body text-small text-ink-mid">{item.bullets.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
