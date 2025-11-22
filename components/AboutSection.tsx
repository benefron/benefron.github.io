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
                            <div className="aspect-[3/4] relative">
                                <Image
                                    src="/images/combined.png"
                                    alt="Neural Reconstruction Analysis"
                                    fill
                                    className="object-contain"
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
                                I’m a systems neuroscientist working at the intersection of brain-inspired tech and adaptive computation. My current research at the University of Liège focuses on decoding neural circuits and turning biological insights into smarter sensing and control systems. I enjoy bridging experimental work with computational modeling and engineering—pushing new boundaries in how artificial and natural systems learn, adapt, and sense their worlds.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-4">
                            {[
                                "Neural Dynamics",
                                "Adaptive Control",
                                "Smart Sensing",
                                "Bio-Engineering"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
                                    <span className="text-sm font-medium text-cool-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Impact Metrics */}
                        <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-2xl font-bold text-white">7+</p>
                                <p className="text-xs text-cool-400 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">PhD</p>
                                <p className="text-xs text-cool-400 uppercase tracking-wider">Systems Neuroscience</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">3</p>
                                <p className="text-xs text-cool-400 uppercase tracking-wider">Partner Institutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
