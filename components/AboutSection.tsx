import Image from "next/image";

export function About() {
    return (
        <section className="section relative" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image/Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-r from-ice-500/20 to-fire-500/20 rounded-[2rem] blur-2xl" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-cool-900/50 backdrop-blur-sm">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/sensory_bio_to_tech.png"
                                    alt="Biological Sensing to Adaptive Control"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 md:p-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <span className="text-2xl">🧠</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Systems Neuroscience</h3>
                                        <p className="text-sm text-cool-400">Neural Computation & Dynamics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-ice-400 to-fire-500 rounded-full" />
                        </div>

                        <div className="space-y-6 text-cool-300 leading-relaxed">
                            <p>
                                I work at the intersection of systems neuroscience, computational modeling, and engineering. My research focuses on how neural populations compute, adapt, and reorganize, translating these biological principles into robust strategies for sensing and closed-loop control.
                            </p>
                            <p>
                                I integrate large‑scale neural recordings, circuit perturbations, and analysis pipelines to understand how structure and dynamics shape computation. By combining experimental insights with computational theory, I aim to explore how neuronal systems can inform us about the design principles of adaptive systems and apply them to build smarter, more resilient systems.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                "Neural Dynamics",
                                "Closed-loop Control",
                                "Adaptive Sensing",
                                "System Design"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-ice-400" />
                                    <span className="text-sm font-medium text-cool-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
