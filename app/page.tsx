import Image from "next/image";
import { Hero } from "@/components/Hero";
import { FocusGrid } from "@/components/FocusGrid";
import { Timeline } from "@/components/Timeline";
import { Publications } from "@/components/Publications";
import { SkillColumns } from "@/components/SkillColumns";
import { MediaHighlights } from "@/components/MediaHighlights";
import { contact } from "@/content/data";

export default function HomePage() {
  return (
    <main className="space-y-24 pb-24">
      <Hero />
      <section className="section" id="about">
        <div className="section-heading">
          <h2>About</h2>
        </div>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-200">
          I am an experimental systems neuroscientist studying how neural populations encode information and how neuronal networks organize. My work integrates
          neural recordings, behavioral measurements, and sensory context to reveal how circuits extract structure from the world. I&apos;m now extending
          these principles toward bio-inspired sensing and computation, applying systems-level insight (pathway separation, adaptation, redundancy
          reduction) to guide sensing and processing strategies in artificial systems. I enjoy collaborating across neuroscience, computation, and
          engineering to turn biological understanding into practical system design.
        </p>
      </section>
      <section className="section" id="research">
        <div className="section-heading">
          <h2>Current Focus</h2>
          <p className="section-subtitle">Linking active sensing, neural coding, and system-level design principles.</p>
        </div>
        <div className="rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(67,56,202,0.35),_rgba(8,47,73,0.2))] p-1">
          <div className="rounded-[calc(24px-1px)] border border-white/10 bg-slate-950/60 p-8 backdrop-blur">
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="space-y-6 lg:w-1/2">
                <h3 className="text-2xl font-semibold text-white">Active Sensing Across Auditory and Somatosensory Cortices</h3>
                <p className="text-sm leading-relaxed text-ink-200">
                  Doctoral research examine how whisker-generated sensory events are encoded during natural exploration, integrating neural,
                  behavioral, and sensory data streams to follow information as it is used online.
                </p>
                <ul className="space-y-3 text-sm text-ink-200">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>
                      <strong className="font-semibold text-white">Neural Coding in Active Sensing.</strong> Investigating how neuronal populations encode
                      sensory input during behavior by combining electrophysiology, whisker and auditory signals, and video tracking to understand how
                      information is represented and used online.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>
                      <strong className="font-semibold text-white">Bio-Inspired Sensing &amp; Computation.</strong> Exploring how pathway separation,
                      adaptation, redundancy reduction, and context-dependent modulation can guide sensing and processing strategies in artificial systems.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>
                      <strong className="font-semibold text-white">Collaboration with imec.</strong> Serving as the coordination link between the
                      Brain-Inspired Computing Lab and imec Life Science Technologies, refining recording systems and closed-loop experiment workflows and
                      mentoring interns.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative flex justify-center lg:w-1/2">
                <div className="absolute -inset-6 rounded-full bg-brand-500/30 blur-3xl" />
                <Image
                  src="/images/chipImage.jpeg"
                  width={540}
                  height={540}
                  alt="Neural coding and behavior - systems neuroscience and bio-inspired sensing"
                  className="relative rounded-[32px] border border-white/10 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FocusGrid />
      <Timeline />
      <Publications />
      <MediaHighlights />
      <SkillColumns />
      <section className="section" id="contact">
        <div className="section-heading">
          <h2>Connect</h2>
          <p className="section-subtitle">Let&apos;s explore collaborations in systems neuroscience, sensory coding, and adaptive sensing strategies.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <a href={`mailto:${contact.email}`} className="card-glow rounded-3xl bg-white/5 p-6 text-left text-white transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-400">Email</p>
            <p className="mt-4 text-lg font-semibold">{contact.email}</p>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-glow rounded-3xl bg-white/5 p-6 text-left text-white transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-ink-400">LinkedIn</p>
            <p className="mt-4 text-lg font-semibold">ben-efron</p>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="card-glow rounded-3xl bg-white/5 p-6 text-left text-white transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-400">GitHub</p>
            <p className="mt-4 text-lg font-semibold">github.com/benefron</p>
          </a>
        </div>
      </section>
    </main>
  );
}
