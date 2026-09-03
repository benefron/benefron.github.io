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
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
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

        <div>
          {about.metrics.map((metric, i) => (
            <div
              key={metric.value}
              className={`pb-6 ${i < about.metrics.length - 1 ? "mb-6 border-b border-ink/10" : ""}`}
            >
              <p className="font-display text-stat text-ink mb-1.5">{metric.value}</p>
              <p className="font-body text-small text-ink-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
