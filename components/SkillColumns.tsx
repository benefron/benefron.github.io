import { skills } from "@/content/data";
import { Section } from "@/components/ui/Section";

export function SkillColumns() {
  return (
    <Section id="skills" eyebrow="Skills" heading="Technical range">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skills.map((group) => (
          <div key={group.title} className="p-7 bg-bg-card border border-ink/10 rounded-[8px]">
            <h3 className="font-display text-h4 text-ink mb-5">{group.title}</h3>
            <ul>
              {group.items.map((skill, i) => (
                <li
                  key={skill}
                  className={`font-body text-small text-ink-mid py-2.5 ${
                    i < group.items.length - 1 ? "border-b border-ink/10" : ""
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
