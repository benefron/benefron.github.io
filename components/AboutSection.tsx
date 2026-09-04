import { about } from "@/content/data";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      heading={
        <>
          {about.heading[0]}
          <br />
          {about.heading[1]}
        </>
      }
      spacing="compact"
    >
      <div className="max-w-prose">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className={`font-body text-body-lg text-ink-mid ${i < about.paragraphs.length - 1 ? "mb-6" : ""}`}
          >
            {p}
          </p>
        ))}


      </div>

      <div className="mt-10 pt-8 border-t border-ink/10 flex flex-col gap-4">
        {about.skillGroups.map((group) => (
          <div key={group.title} className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-1 md:gap-8">
            <h3 className="font-mono text-micro uppercase tracking-[0.1em] text-ink-muted">
              {group.title}
            </h3>
            <p className="font-body text-small text-ink-mid">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
