import { Hero } from "@/components/Hero";
import { About } from "@/components/AboutSection";
import { FocusGrid } from "@/components/FocusGrid";
import { Timeline } from "@/components/Timeline";
import { Publications } from "@/components/Publications";
import { SkillColumns } from "@/components/SkillColumns";
import { MediaHighlights } from "@/components/MediaHighlights";
import { SectionDivider, GeometricDivider } from "@/components/SectionDivider";
import { contact } from "@/content/data";

export default function HomePage() {
  return (
    <main className="bg-surface-300 min-h-screen selection:bg-electric-500/30">
      <Hero />

      {/* About Section - Darker Background */}
      <div className="bg-surface-200 border-y border-white/5">
        <About />
      </div>

      <SectionDivider />

      {/* Research Section - Base Background */}
      <section className="section relative" id="research">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-heading text-center mb-16">
            <p className="section-subtitle text-electric-400">Research Areas</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Current Focus</h2>
            <p className="text-cool-300 max-w-2xl mx-auto mt-4 text-lg">
              Linking active sensing, neural coding, and system-level design principles.
            </p>
          </div>
          <FocusGrid />
        </div>
      </section>

      <GeometricDivider />

      {/* Timeline Section - Darker Background */}
      <div className="bg-surface-200 border-y border-white/5">
        <Timeline />
      </div>

      {/* Publications & Media - Base Background */}
      <div className="py-24 space-y-24">
        <Publications />
        <MediaHighlights />
        <SkillColumns />
      </div>

      {/* Contact Section - Darker Background */}
      <section className="py-24 bg-surface-200 border-t border-white/5" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-heading text-center mb-16">
            <p className="section-subtitle text-electric-400">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Connect</h2>
            <p className="text-cool-300 max-w-2xl mx-auto mt-4 text-lg">
              Let&apos;s explore collaborations in systems neuroscience, sensory coding, and adaptive sensing strategies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <a href={`mailto:${contact.email}`} className="group card-glow rounded-3xl bg-surface-300 p-8 border border-white/10 transition-all hover:-translate-y-1 hover:bg-surface-100">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-electric-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-widest text-cool-400 mb-2">Email</p>
              <p className="text-lg font-semibold text-white group-hover:text-electric-400 transition-colors">{contact.email}</p>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group card-glow rounded-3xl bg-surface-300 p-8 border border-white/10 transition-all hover:-translate-y-1 hover:bg-surface-100"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-electric-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-electric-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-widest text-cool-400 mb-2">LinkedIn</p>
              <p className="text-lg font-semibold text-white group-hover:text-electric-400 transition-colors">Connect on LinkedIn</p>
            </a>

            <a href={contact.github} target="_blank" rel="noreferrer" className="group card-glow rounded-3xl bg-surface-300 p-8 border border-white/10 transition-all hover:-translate-y-1 hover:bg-surface-100">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-electric-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-electric-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-widest text-cool-400 mb-2">GitHub</p>
              <p className="text-lg font-semibold text-white group-hover:text-electric-400 transition-colors">View Projects</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
