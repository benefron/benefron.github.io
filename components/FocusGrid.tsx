import { focusAreas } from "@/content/data";

export function FocusGrid() {
  return (
    <section className="section" id="focus">
      <div className="section-heading">
        <h2>Focus Areas</h2>
        <p className="section-subtitle">Capabilities across systems neuroscience, modeling, and experiment integration.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {focusAreas.map((item) => (
          <article key={item.title} className="card-glow gradient-ring rounded-3xl bg-white/5 p-6 backdrop-blur sm:p-7 md:p-8">
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-200 sm:mt-6">{item.description}</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-200 sm:mt-6">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
