export function About() {
  return (
    <section className="border-t border-ink/10" id="about">
      <div className="max-w-[1100px] mx-auto px-10 py-[100px]">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-[10px] mb-3">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-muted">About</span>
            <span className="flex-1 max-w-[60px] h-px bg-ink/10" />
          </div>
          <h2
            className="font-display leading-[1.1] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(36px, 3.5vw, 56px)" }}
          >
            Bridging biology<br />and adaptive systems
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — text */}
          <div>
            <p className="font-body text-[17px] leading-[1.8] text-ink-mid mb-6">
              I&apos;m a systems neuroscientist working at the intersection of brain-inspired
              technology and adaptive computation. My current research at the University of
              Liège focuses on decoding neural circuits and translating biological insights
              into smarter sensing and control systems.
            </p>
            <p className="font-body text-[17px] leading-[1.8] text-ink-mid">
              I enjoy bridging experimental work with computational modeling and engineering
              — pushing new boundaries in how artificial and natural systems learn, adapt,
              and sense their worlds.
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Neural Dynamics", "Adaptive Control", "Smart Sensing", "Bio-Engineering", "HD-MEA", "Neuromorphic Computing"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] tracking-[0.08em] px-3.5 py-1.5 border border-ink/10 rounded-[3px] text-ink-mid"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — metrics */}
          <div>
            {[
              { value: "7+", label: "Years of experimental & computational neuroscience research" },
              { value: "PhD", label: "Systems Neuroscience — Weizmann Institute of Science" },
              { value: "3", label: "Partner institutes across Europe and Israel" }
            ].map((metric, i) => (
              <div key={i} className={`pb-6 ${i < 2 ? "mb-6 border-b border-ink/10" : ""}`}>
                <p className="font-display text-[52px] leading-none text-ink mb-1.5">{metric.value}</p>
                <p className="font-body text-[13px] text-ink-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
