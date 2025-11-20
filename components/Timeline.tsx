"use client";

import { timeline } from "@/content/data";
import { motion } from "framer-motion";

export function Timeline() {
  return (
    <section className="section relative" id="timeline">
      <div className="section-heading text-center mb-16">
        <p className="section-subtitle">Trajectory</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Experience</h2>
        <p className="text-cool-300 max-w-2xl mx-auto mt-4">
          Milestones linking experimental neuroscience, computation, and collaborative system design.
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-ice-400 via-fire-500 to-cool-800 opacity-30" />

        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute inset-y-0 left-8 w-0.5 bg-gradient-to-b from-ice-400 via-fire-500 to-cool-800 opacity-30" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {timeline.map((node, index) => (
            <motion.div
              key={node.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col items-center text-center h-full pt-8">
                {/* Dot on the line */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cool-950 border-2 border-ice-400 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] group-hover:scale-125 transition-transform duration-300" />

                {/* Content below the line */}
                <div className="mt-8 w-full h-full">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <span className="inline-block px-3 py-1 rounded-full bg-cool-800/50 border border-white/10 text-xs font-semibold text-ice-400 mb-3 mx-auto">
                      {node.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ice-200 transition-colors">
                      {node.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-cool-300">
                      {node.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex gap-8 pl-16 relative">
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-cool-950 border-2 border-ice-400 z-10 mt-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="inline-block px-3 py-1 rounded-full bg-cool-800/50 border border-white/10 text-xs font-semibold text-ice-400 mb-3">
                    {node.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {node.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-cool-300">
                    {node.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
