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

      <div className="mt-12">
        <p className="font-mono text-micro uppercase tracking-[0.15em] text-ink-muted pb-3.5 border-b border-ink/10">
          Also featured in
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {mediaFeatures.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="block px-5 py-5 bg-bg-card border border-ink/10 rounded-[8px] transition-colors duration-200 hover:border-accent/40"
            >
              <p className="font-mono text-eyebrow uppercase text-accent mb-2.5">{item.source}</p>
              <p className="font-body text-small text-ink">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
