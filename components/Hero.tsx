import { hero, stats } from "@/content/data";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-ice-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fire-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto lg:mx-0 w-fit animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-ice-400 animate-pulse" />
                <span className="text-xs font-medium tracking-widest uppercase text-cool-300">
                  Systems Neuroscientist
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white animate-slide-up [animation-delay:200ms] leading-[1.1]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-300 to-electric-500">
                  Exploring Neural Coding
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-ice-400">
                  for Next-Gen Sensing
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-ice-400 to-cool-300">
                  & Adaptive Systems
                </span>
              </h1>

              <p className="text-lg md:text-xl text-cool-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up [animation-delay:400ms] font-medium">
                &ldquo;Bridging the gap between biological intelligence and artificial systems.&rdquo;
              </p>
              <p className="text-lg text-cool-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up [animation-delay:500ms]">
                {hero.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-slide-up [animation-delay:600ms]">
              <Link
                href={hero.ctaPrimary.href}
                className="group relative px-8 py-4 rounded-full bg-white text-cool-950 font-semibold tracking-wide overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">{hero.ctaPrimary.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-ice-400 to-fire-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>

              <Link
                href={hero.ctaSecondary.href}
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium tracking-wide backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                {hero.ctaSecondary.label}
              </Link>

              <a
                href="/documents/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium tracking-wide backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20 flex items-center gap-2"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5 animate-slide-up [animation-delay:800ms]">
              {stats.map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <p className="text-xl md:text-2xl font-bold text-white leading-tight">{item.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-cool-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Headshot */}
          <div className="lg:w-1/3 relative animate-fade-in [animation-delay:400ms]">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ice-500 to-fire-600 blur-2xl opacity-20 animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-cool-800/50 backdrop-blur-sm">
                <Image
                  src="/images/headshot.jpg"
                  alt="Ben Efron"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-cool-900/80 backdrop-blur-md border border-white/10 shadow-xl animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
