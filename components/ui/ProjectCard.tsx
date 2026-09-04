import type { Project } from "@/content/data";
import { IndexMark, TagPill, ArrowLink } from "@/components/ui/Section";
import { ResultClip } from "@/components/ui/ResultClip";

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

function TechnicalDetail({ detail }: { detail: NonNullable<Project["detail"]> }) {
  return (
    <details className="group border-t border-ink/10 pt-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-[2px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 [&::-webkit-details-marker]:hidden [&::marker]:content-none">
        <span>Technical detail</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-[13px] transition-transform duration-200 group-open:rotate-180"
        >
          ⌄
        </span>
      </summary>
      <div className="pt-4">
        {detail.summary ? (
          <p className="font-body text-small text-ink-mid mb-4">{detail.summary}</p>
        ) : null}
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {detail.specs.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                {s.label}
              </dt>
              <dd className="font-mono text-[13px] leading-[1.4] text-ink mt-1">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </details>
  );
}

function CardBody({ project, index }: { project: Project; index: number }) {
  return (
    <>
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

      <p className="font-body text-body text-ink">{project.claim}</p>
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

      {project.detail ? <TechnicalDetail detail={project.detail} /> : null}

      {project.links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-1">
          {project.links.map((l) => (
            <ArrowLink key={l.href} href={l.href} tone={l.kind === "live" ? "accent" : "muted"}>
              {l.label}
            </ArrowLink>
          ))}
        </div>
      ) : null}
    </>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = project.layout === "featured" && project.media;

  return (
    <article
      className={`flex flex-col gap-4 p-7 sm:p-8 bg-bg-card border border-ink/10 rounded-[8px] transition-colors duration-200 hover:border-accent/40 ${
        featured ? "md:col-span-2 border-t-2 border-t-accent" : ""
      }`}
    >
      {featured ? (
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-start">
          <div className="flex flex-col gap-4 min-w-0">
            <CardBody project={project} index={index} />
          </div>
          <div className="flex flex-col gap-6 min-w-0">
            {project.media?.figures?.map((fig) => (
              <figure key={fig.src} className="m-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={fig.src}
                  alt={fig.alt}
                  width={fig.width}
                  height={fig.height}
                  loading="lazy"
                  className="w-full h-auto rounded-[6px] border border-ink/10 bg-bg-card"
                />
                {fig.caption ? (
                  <figcaption className="font-body text-[12px] leading-[1.5] text-ink-muted mt-2.5">
                    {fig.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
            {project.media?.clip ? <ResultClip {...project.media.clip} /> : null}
            {project.media?.credit ? (
              <p className="font-mono text-[10.5px] leading-[1.5] text-ink-muted">
                {project.media.credit}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <CardBody project={project} index={index} />
      )}
    </article>
  );
}
