import { focusAreas } from "@/content/data";

export function FocusGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {focusAreas.map((item, index) => (
        <article
          key={item.title}
          className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 overflow-hidden"
        >
          {/* Gradient Glow */}
          <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${index === 0 ? 'bg-ice-500' : index === 1 ? 'bg-fire-500' : 'bg-cool-400'
            }`} />

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ice-200 transition-colors">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-cool-300 mb-6">
              {item.description}
            </p>

            <ul className="space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-cool-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ice-400 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
