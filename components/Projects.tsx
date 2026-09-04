import { projects } from "@/content/data";
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

      <p className="mt-12 pt-6 border-t border-ink/10 font-body text-small text-ink-muted">
        Other public repositories, including the simulation environment and the lab tooling, are on{" "}
        <a
          href="https://github.com/benefron"
          target="_blank"
          rel="noreferrer"
          className="text-accent-str underline decoration-accent/30 underline-offset-4 hover:decoration-accent rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}
