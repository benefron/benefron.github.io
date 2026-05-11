import { projects, otherRepos } from "@/content/data";

export function Projects() {
  return (
    <section className="border-t border-ink/10" id="projects">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">Projects</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink mb-4"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            Selected Work
          </h2>
          <p className="font-body text-[16px] text-ink-muted leading-[1.7] max-w-[560px]">
            Active projects bridging systems neuroscience, neuromorphic engineering, and closed-loop control.
          </p>
        </div>

        {/* Featured projects grid */}
        <div className="border border-ink/10 rounded-[6px] overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="p-9 flex flex-col gap-3.5 hover:bg-bg-card transition-colors duration-200"
            >
              {/* Index */}
              <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>

              {/* Name */}
              <h3 className="font-display text-[21px] leading-[1.2] text-ink">
                {project.name}
              </h3>

              {/* Period + org meta */}
              <div className="flex flex-col gap-0.5" style={{ marginTop: "-6px" }}>
                <span className="font-mono uppercase text-ink-muted leading-[1.5]" style={{ fontSize: "10.5px" }}>
                  {project.period}
                </span>
                <span className="font-mono uppercase text-ink-muted leading-[1.5]" style={{ fontSize: "10.5px" }}>
                  {project.org}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-[14px] leading-[1.7] text-ink-muted flex-1">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-[0.07em] px-2.5 py-1 border border-ink/10 rounded-[3px] text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link or private badge */}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--accent-str)] no-underline"
                >
                  View on GitHub
                  <span className="ml-1.5 transition-[margin] duration-200 group-hover:ml-2.5">→</span>
                </a>
              ) : project.visibility ? (
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: "var(--ink-muted)", opacity: 0.4 }}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted">
                    {project.visibility}
                  </span>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {/* More public repositories */}
        <div className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted pb-3.5 border-b border-ink/10">
            More public repositories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {otherRepos.map((repo, i) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className={`grid gap-5 px-5 py-4 hover:bg-bg-card transition-colors duration-200 border-b border-ink/10 ${i % 2 === 0 ? "md:border-r md:border-ink/10" : ""}`}
                style={{ gridTemplateColumns: "minmax(140px, auto) 1fr" }}
              >
                <span className="font-mono text-[13px] font-medium text-ink">{repo.name}</span>
                <span className="font-body text-[13px] text-ink-muted leading-[1.55]">{repo.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
