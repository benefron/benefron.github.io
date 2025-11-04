import { focusAreas } from "@/content/data";

export function FocusGrid() {
  return (
    <section className="section" id="focus">
      <div className="section-heading">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Focus Areas</h2>
        <p className="section-subtitle">Capabilities across systems neuroscience, modeling, and experiment integration.</p>
      </div>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {focusAreas.map((item) => (
          <article key={item.title} className="card-glow gradient-ring rounded-2xl bg-white/5 p-5 backdrop-blur md:rounded-3xl md:p-8">
            <h3 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">{item.title}</h3>
            <p className="mt-4 text-xs leading-relaxed text-ink-200 md:mt-6 md:text-sm">{item.description}</p>
            <ul className="mt-4 space-y-2 text-xs text-ink-200 md:mt-6 md:space-y-3 md:text-sm">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 md:gap-3">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400 md:h-2.5 md:w-2.5" />
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
