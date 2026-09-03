import type { Project } from "@/content/data";
import { IndexMark, TagPill, ArrowLink } from "@/components/ui/Section";

function StatusBadge({ status }: { status: Project["status"] }) {
  const label =
    status === "open-source" ? "Open source" : status === "live" ? "Live" : "Source private";
  const dot = status === "private" ? "bg-ink-muted/40" : "bg-accent";

  return (
    <span className="inline-flex items-center gap-2 shrink-0">
      <span className={`inline-block w-1.5 h-1.5 rounded-full ${dot}`} />
      <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-ink-muted whitespace-nowrap">
        {label}
      </span>
    </span>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex flex-col gap-4 p-7 sm:p-8 bg-bg-card border border-ink/10 rounded-[8px] transition-colors duration-200 hover:border-accent/40">
      <div className="flex items-start justify-between gap-4">
        <IndexMark n={index + 1} />
        <StatusBadge status={project.status} />
      </div>

      <div>
        <h3 className="font-display text-h3 text-ink">{project.name}</h3>
        <p className="font-mono text-[10.5px] uppercase text-ink-muted leading-[1.5] mt-1.5">
          {project.period} · {project.org}
        </p>
      </div>

      <p className="font-body text-small text-ink-mid">{project.desc}</p>

      {project.metrics.length > 0 ? (
        <dl className="grid grid-cols-2 gap-x-5 gap-y-4 border-y border-ink/10 py-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                {m.label}
              </dt>
              <dd className="font-display text-[19px] leading-[1.2] text-ink mt-1">{m.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>

      {project.links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-1">
          {project.links.map((l) => (
            <ArrowLink key={l.href} href={l.href} tone={l.kind === "live" ? "accent" : "muted"}>
              {l.label}
            </ArrowLink>
          ))}
        </div>
      ) : null}
    </article>
  );
}
