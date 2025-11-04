import { skills } from "@/content/data";

export function SkillColumns() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Technical Range</h2>
        <p className="section-subtitle">Systems neuroscience, quantitative modeling, and integrated experimentation.</p>
      </div>
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <article key={group.title} className="card-glow rounded-2xl bg-white/5 p-5 backdrop-blur md:rounded-3xl md:p-6">
            <h3 className="text-base font-semibold text-white md:text-lg">{group.title}</h3>
            <ul className="mt-3 space-y-1.5 text-xs text-ink-200 md:mt-4 md:space-y-2 md:text-sm">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1 w-6 flex-shrink-0 rounded bg-brand-400 md:h-1.5 md:w-8" />
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
