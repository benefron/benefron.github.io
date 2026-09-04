import { publications, mediaFeatures, formatCitation, publicationTypeLabel } from "@/content/data";
import type { Publication } from "@/content/data";
import { Section, ArrowLink } from "@/components/ui/Section";

function TypeBadge({ type }: { type: Publication["type"] }) {
  const accent = type === "upcoming" || type === "fellowship";
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-[0.06em] px-2 py-0.5 rounded-[3px] border whitespace-nowrap ${
        accent ? "border-accent/40 text-accent" : "border-ink/10 text-ink-muted"
      }`}
    >
      {publicationTypeLabel[type]}
    </span>
  );
}

export function Publications() {
  return (
    <Section id="publications" eyebrow="Record" heading="Publications & talks">
      <div>
        {publications.map((pub, index) => (
          <div
            key={pub.title}
            className={`grid grid-cols-1 sm:grid-cols-[40px_1fr] md:grid-cols-[48px_1fr_auto] items-start gap-x-5 gap-y-2 py-7 border-t border-ink/10 ${
              index === publications.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <span className="hidden sm:block font-mono text-micro text-ink-muted text-right pt-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <div className="flex items-center flex-wrap gap-2.5 mb-2">
                <TypeBadge type={pub.type} />
                <span className="font-mono text-micro uppercase text-accent">{pub.venue}</span>
              </div>
              <h3 className="font-body text-body-lg font-medium text-ink mb-1.5">{pub.title}</h3>
              <p className="font-body text-small text-ink-muted">{formatCitation(pub)}</p>
              {pub.summary ? (
                <p className="font-body text-small text-ink-mid mt-2">{pub.summary}</p>
              ) : null}
            </div>

            <div className="sm:col-start-2 md:col-start-3 md:pt-1 flex flex-row md:flex-col flex-wrap gap-x-5 gap-y-2">
              {pub.links.map((link) => (
                <ArrowLink key={link.href} href={link.href}>
                  {link.label}
                </ArrowLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-ink/10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
        <p className="font-mono text-micro uppercase tracking-[0.15em] text-ink-muted shrink-0">
          Also featured in
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {mediaFeatures.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="font-body text-small text-ink-mid underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-accent rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {item.source}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
