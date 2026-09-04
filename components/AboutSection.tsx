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

        <div className="flex flex-wrap gap-2 mt-8">
          {about.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-micro px-3.5 py-1.5 border border-ink/10 rounded-[3px] text-ink-mid"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-10 border-t border-ink/10 flex flex-col gap-7">
        {about.skillGroups.map((group) => (
          <div key={group.title} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8">
            <h3 className="font-mono text-micro uppercase tracking-[0.1em] text-ink-muted md:pt-1.5">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-body text-[13px] px-3 py-1.5 rounded-[3px] bg-bg-card border border-ink/10 text-ink-mid"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
