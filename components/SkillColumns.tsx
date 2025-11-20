import { skills } from "@/content/data";

export function SkillColumns() {
  return (
    <section className="section" id="skills">
      <div className="section-heading text-center">
        <p className="section-subtitle">Expertise</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Technical Range</h2>
        <p className="text-cool-300 max-w-2xl mx-auto mt-4">
          Systems neuroscience, quantitative modeling, and integrated experimentation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, index) => (
          <article
            key={group.title}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${index === 0 ? 'from-ice-400 to-ice-600' :
              index === 1 ? 'from-fire-400 to-fire-600' :
                'from-cool-400 to-cool-600'
              } opacity-50 group-hover:opacity-100 transition-opacity`} />

            <h3 className="text-lg font-bold text-white mb-6 group-hover:text-ice-200 transition-colors">
              {group.title}
            </h3>

            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm text-cool-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-ice-400' :
                    index === 1 ? 'bg-fire-400' :
                      'bg-cool-400'
                    }`} />
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
