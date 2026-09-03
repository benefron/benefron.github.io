import { projects, otherRepos } from "@/content/data";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      heading="Things I have built"
      intro="Research platforms, acquisition hardware, estimation algorithms, and LLM pipelines. Where the source is private, the running system is linked instead."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      <div className="mt-14">
        <p className="font-mono text-micro uppercase tracking-[0.15em] text-ink-muted pb-3.5 border-b border-ink/10">
          More public repositories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {otherRepos.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className={`grid grid-cols-1 sm:grid-cols-[minmax(140px,auto)_1fr] gap-1 sm:gap-5 px-0 sm:px-5 py-4 hover:bg-bg-card transition-colors duration-200 border-b border-ink/10 ${
                i % 2 === 0 ? "md:border-r md:border-ink/10" : ""
              }`}
            >
              <span className="font-mono text-small font-medium text-ink">{repo.name}</span>
              <span className="font-body text-small text-ink-muted">{repo.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
