import { skills } from "@/content/data";

export function SkillColumns() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2>Technical Range</h2>
        <p className="section-subtitle">Systems neuroscience, quantitative modeling, and integrated experimentation.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <article key={group.title} className="card-glow rounded-3xl bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-200">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1.5 w-8 rounded bg-brand-400" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
