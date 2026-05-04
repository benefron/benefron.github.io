import { Hero } from "@/components/Hero";
import { About } from "@/components/AboutSection";
import { FocusGrid } from "@/components/FocusGrid";
import { Timeline } from "@/components/Timeline";
import { Publications } from "@/components/Publications";
import { SkillColumns } from "@/components/SkillColumns";
import { Projects } from "@/components/Projects";
import { MediaHighlights } from "@/components/MediaHighlights";
import { contact } from "@/content/data";

const contactLinks = [
  { label: "Email",            value: "benefron@gmail.com",      href: `mailto:${contact.email}`, arrow: "→" },
  { label: "LinkedIn",         value: "Connect on LinkedIn",      href: contact.linkedin,          arrow: "→" },
  { label: "GitHub",           value: "github.com/benefron",      href: contact.github,            arrow: "→" },
  { label: "Curriculum Vitae", value: "Download PDF",             href: contact.resume,            arrow: "↓" }
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FocusGrid />
      <Timeline />
      <Publications />
      <SkillColumns />
      <Projects />
      <MediaHighlights />

      {/* Contact Section */}
      <section
        id="contact"
        style={{ background: "var(--ink)" }}
        className="px-10 py-[100px]"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <h2
              className="font-display text-white leading-[1.1] mb-4"
              style={{ fontSize: "clamp(36px, 3vw, 52px)" }}
            >
              Let&apos;s work<br /><em>together.</em>
            </h2>
            <p
              className="font-body text-[15px] leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Open to collaborations in systems neuroscience, sensory coding,
              and adaptive sensing strategies.
            </p>
          </div>

          {/* Right — contact links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="flex items-center justify-between px-6 py-5 rounded-[6px] border border-white/15 transition-all duration-200 hover:border-white/50 hover:bg-white/5"
              >
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item.label}
                  </p>
                  <p className="font-body text-[15px] text-white">{item.value}</p>
                </div>
                <span className="text-[18px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {item.arrow}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
