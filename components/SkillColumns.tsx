import { skills } from "@/content/data";

export function SkillColumns() {
  return (
    <section className="border-t border-ink/10" id="skills">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">Expertise</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            Technical Range
          </h2>
        </div>

        {/* Cards grid */}
        <div className="border border-ink/10 rounded-[6px] overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {skills.map((group) => (
            <div key={group.title} className="p-9">
              <h3 className="font-display text-[20px] text-ink mb-5">{group.title}</h3>
              <ul>
                {group.items.map((skill, i) => (
                  <li
                    key={skill}
                    className={`font-body text-[14px] text-ink-mid py-[9px] leading-[1.4] ${i < group.items.length - 1 ? "border-b border-ink/10" : ""}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
