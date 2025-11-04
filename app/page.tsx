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
    <main className="space-y-12 pb-12 md:space-y-24 md:pb-24">
      <Hero />
      <section className="section" id="about">
        <div className="section-heading">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">About</h2>
        </div>
        <p className="mx-auto max-w-3xl text-xs leading-relaxed text-ink-200 md:text-sm">
          I am an experimental systems neuroscientist studying how neural populations compute, adapt, and reorganize activity. My current work focuses on population dynamics, closed‑loop control, and translating biological computation into adaptive sensing and system design. I integrate large‑scale neural recordings, circuit perturbations, and analysis pipelines to understand how structure and dynamics shape computation. I collaborate across neuroscience, computation, and engineering to turn biological principles—such as pathway separation, temporal filtering, receptive field structure, labeled‑line encoding, and spatio‑temporal compression—into practical strategies for sensing, representation, and control.
        </p>
      </section>
      <section className="section" id="research">
        <div className="section-heading">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Current Focus</h2>
          <p className="section-subtitle">Linking active sensing, neural coding, and system-level design principles.</p>
        </div>
        <div className="overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(67,56,202,0.35),_rgba(8,47,73,0.2))] p-0.5 md:rounded-3xl md:p-1">
          <div className="rounded-[calc(16px-2px)] border border-white/10 bg-slate-950/60 p-5 backdrop-blur md:rounded-[calc(24px-1px)] md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              <div className="space-y-4 md:space-y-6 lg:w-1/2">
                <h3 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">Systems‑Level Neural Computation & Adaptive Circuit Dynamics</h3>
                <p className="text-xs leading-relaxed text-ink-200 md:text-sm">
                  My current research focuses on how neural circuits compute, adapt, and reorganize activity patterns, and how these dynamics can be leveraged for closed‑loop control, algorithm design, and neuro‑inspired computation. This work integrates large‑scale neural recordings, circuit perturbations, and system‑level modeling to understand how structure and dynamics interact to shape computation.
                </p>
                <ul className="space-y-2.5 text-xs text-ink-200 md:space-y-3 md:text-sm">
                  <li className="flex gap-2.5 md:gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400 md:h-2 md:w-2" />
                    <span>
                      <strong className="font-semibold text-white">Neural Population Dynamics & Computation.</strong> Studying how population activity patterns emerge, stabilize, and adapt under different input conditions, and how these dynamics relate to coding, information flow, and computational flexibility.
                    </span>
                  </li>
                  <li className="flex gap-2.5 md:gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400 md:h-2 md:w-2" />
                    <span>
                      <strong className="font-semibold text-white">Bio-Inspired Sensing &amp; Computation.</strong> Applying systems‑level organizational principles—pathway separation, temporal filtering, receptive field structure, labeled‑line encoding, and spatio‑temporal compression—to inform adaptive sensing, representation learning, and efficient communication in artificial systems.
                    </span>
                  </li>
                  <li className="flex gap-2.5 md:gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400 md:h-2 md:w-2" />
                    <span>
                      <strong className="font-semibold text-white">Collaboration with imec.</strong> Providing biological insight to guide system‑level architecture in neuromorphic engineering and silicon–neural interfacing; working with imec teams on closed‑loop control, neural system optimization, and cross‑disciplinary algorithm development.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative flex justify-center lg:w-1/2">
                <div className="absolute -inset-4 rounded-full bg-brand-500/30 blur-2xl md:-inset-6 md:blur-3xl" />
                <Image
                  src="/images/chipImage.jpeg"
                  width={540}
                  height={540}
                  alt="Neural coding and behavior - systems neuroscience and bio-inspired sensing"
                  className="relative max-h-64 rounded-2xl border border-white/10 object-cover md:max-h-none md:rounded-[32px]"
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Connect</h2>
          <p className="section-subtitle">Let&apos;s explore collaborations in systems neuroscience, sensory coding, and adaptive sensing strategies.</p>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          <a href={`mailto:${contact.email}`} className="card-glow rounded-2xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 md:rounded-3xl md:p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink-400 md:text-xs">Email</p>
            <p className="mt-3 text-base font-semibold md:mt-4 md:text-lg">{contact.email}</p>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-glow rounded-2xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 md:rounded-3xl md:p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink-400 md:text-xs">LinkedIn</p>
            <p className="mt-3 text-base font-semibold md:mt-4 md:text-lg">ben-efron</p>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="card-glow rounded-2xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 md:rounded-3xl md:p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-ink-400 md:text-xs">GitHub</p>
            <p className="mt-3 text-base font-semibold md:mt-4 md:text-lg">github.com/benefron</p>
          </a>
        </div>
      </section>
    </main>
  );
}
