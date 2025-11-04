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
    <main className="space-y-16 pb-16 md:space-y-24 md:pb-24">
      <Hero />
      <section className="section" id="about">
        <div className="section-heading">
          <h2>About</h2>
        </div>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-200">
          I am an experimental systems neuroscientist studying how neural populations compute, adapt, and reorganize activity. My current work focuses on population dynamics, closed‑loop control, and translating biological computation into adaptive sensing and system design. I integrate large‑scale neural recordings, circuit perturbations, and analysis pipelines to understand how structure and dynamics shape computation. I collaborate across neuroscience, computation, and engineering to turn biological principles—such as pathway separation, temporal filtering, receptive field structure, labeled‑line encoding, and spatio‑temporal compression—into practical strategies for sensing, representation, and control.
        </p>
      </section>
      <section className="section" id="research">
        <div className="section-heading">
          <h2>Current Focus</h2>
          <p className="section-subtitle">Linking active sensing, neural coding, and system-level design principles.</p>
        </div>
        <div className="rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(67,56,202,0.35),_rgba(8,47,73,0.2))] p-1">
          <div className="rounded-[calc(24px-1px)] border border-white/10 bg-slate-950/60 p-6 backdrop-blur sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              <div className="space-y-6 lg:w-1/2">
                <h3 className="text-2xl font-semibold text-white">Systems‑Level Neural Computation & Adaptive Circuit Dynamics</h3>
                <p className="text-sm leading-relaxed text-ink-200">
                  My current research focuses on how neural circuits compute, adapt, and reorganize activity patterns, and how these dynamics can be leveraged for closed‑loop control, algorithm design, and neuro‑inspired computation. This work integrates large‑scale neural recordings, circuit perturbations, and system‑level modeling to understand how structure and dynamics interact to shape computation.
                </p>
                <ul className="space-y-3 text-sm text-ink-200">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>
                      <strong className="font-semibold text-white">Neural Population Dynamics & Computation.</strong> Studying how population activity patterns emerge, stabilize, and adapt under different input conditions, and how these dynamics relate to coding, information flow, and computational flexibility.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>
                      <strong className="font-semibold text-white">Bio-Inspired Sensing &amp; Computation.</strong> Applying systems‑level organizational principles—pathway separation, temporal filtering, receptive field structure, labeled‑line encoding, and spatio‑temporal compression—to inform adaptive sensing, representation learning, and efficient communication in artificial systems.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                    <span>
                      <strong className="font-semibold text-white">Collaboration with imec.</strong> Providing biological insight to guide system‑level architecture in neuromorphic engineering and silicon–neural interfacing; working with imec teams on closed‑loop control, neural system optimization, and cross‑disciplinary algorithm development.
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
          <a href={`mailto:${contact.email}`} className="card-glow rounded-3xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 sm:p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-400">Email</p>
            <p className="mt-4 text-lg font-semibold">{contact.email}</p>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-glow rounded-3xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-ink-400">LinkedIn</p>
            <p className="mt-4 text-lg font-semibold">ben-efron</p>
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="card-glow rounded-3xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 sm:p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-400">GitHub</p>
            <p className="mt-4 text-lg font-semibold">github.com/benefron</p>
          </a>
        </div>
      </section>
    </main>
  );
}
