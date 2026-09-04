import { contact } from "@/content/data";

const contactLinks = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: contact.linkedin },
  { label: "GitHub", value: "github.com/benefron", href: contact.github },
  { label: "Google Scholar", value: "Publications and citations", href: contact.scholar },
  { label: "ORCID", value: "0009-0006-5875-6056", href: contact.orcid }
];

export function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 py-section" style={{ background: "var(--ink)" }}>
      <div className="max-w-shell mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="font-display text-h2 text-white mb-4">
            Let&apos;s work
            <br />
            <em>together.</em>
          </h2>
          <p className="font-body text-body" style={{ color: "rgba(255,255,255,0.6)" }}>
            Open to R&amp;D and research engineering, applied AI, and research positions at
            institutes working on bio-inspired and event-based systems. Based in Leuven, Belgium.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto") ? undefined : "noreferrer"}
              className="flex items-center justify-between gap-4 px-6 py-5 rounded-[6px] border border-white/15 transition-all duration-200 hover:border-white/50 hover:bg-white/5 rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:outline-offset-2"
            >
              <div className="min-w-0">
                <p
                  className="font-mono text-eyebrow uppercase mb-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {item.label}
                </p>
                <p className="font-body text-body text-white truncate">{item.value}</p>
              </div>
              <span className="text-[18px] shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
