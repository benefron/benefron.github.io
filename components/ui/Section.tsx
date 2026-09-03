import type { ReactNode } from "react";

export interface SectionProps {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  intro?: ReactNode;
  /** `compact` is the de-emphasis lever for credential sections. */
  spacing?: "default" | "compact";
  className?: string;
  children: ReactNode;
}

/**
 * The shared page-section shell: firm top rule, centred shell, eyebrow + heading.
 * Replaces the header block that used to be copy-pasted across seven components.
 */
export function Section({
  id,
  eyebrow,
  heading,
  intro,
  spacing = "default",
  className = "",
  children
}: SectionProps) {
  const pad = spacing === "compact" ? "py-section-sm" : "py-section";

  return (
    <section
      id={id}
      className={`border-t ${className}`}
      style={{ borderColor: "var(--rule-strong)" }}
    >
      <div className={`max-w-shell mx-auto px-6 sm:px-10 ${pad}`}>
        <div className="mb-12 sm:mb-14 max-w-prose">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-eyebrow font-medium uppercase text-ink-muted">
              {eyebrow}
            </span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2 className="font-display text-h2 text-ink">{heading}</h2>
          {intro ? (
            <p className="font-body text-body text-ink-muted mt-4">{intro}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

/** Mono index numeral, used wherever the site enumerates. */
export function IndexMark({ n }: { n: number }) {
  return (
    <span className="font-mono text-micro tracking-[0.1em] text-accent">
      {String(n).padStart(2, "0")}
    </span>
  );
}

export function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.07em] px-2.5 py-1 border border-ink/10 rounded-[3px] text-ink-muted">
      {children}
    </span>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "accent"
}: {
  href: string;
  children: ReactNode;
  tone?: "accent" | "muted";
}) {
  const color = tone === "accent" ? "text-accent-str" : "text-ink-muted";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center font-mono text-micro uppercase no-underline ${color}`}
    >
      {children}
      <span className="ml-1.5 transition-[margin] duration-200 group-hover:ml-2.5">→</span>
    </a>
  );
}
