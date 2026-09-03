import { publications, mediaFeatures } from "@/content/data";
import { Section, ArrowLink } from "@/components/ui/Section";

export function Publications() {
  return (
    <Section id="publications" eyebrow="Record" heading="Publications & talks">
      <div>
        {publications.map((paper, index) => (
          <div
            key={paper.title}
            className={`grid grid-cols-1 sm:grid-cols-[40px_1fr] md:grid-cols-[48px_1fr_auto] items-start gap-x-5 gap-y-2 py-7 border-t border-ink/10 ${
              index === publications.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <span className="hidden sm:block font-mono text-micro text-ink-muted text-right pt-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <p className="font-mono text-micro uppercase text-accent mb-2">{paper.venue}</p>
              <h3 className="font-body text-body-lg font-medium text-ink mb-1.5">{paper.title}</h3>
              <p className="font-body text-small text-ink-muted">{paper.summary}</p>
            </div>

            <div className="sm:col-start-2 md:col-start-3 md:pt-1 flex flex-row md:flex-col flex-wrap gap-x-5 gap-y-2">
              {paper.links.map((link) => (
                <ArrowLink key={link.href} href={link.href}>
                  {link.label}
                </ArrowLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Press coverage, as a trailing strip rather than its own section */}
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
