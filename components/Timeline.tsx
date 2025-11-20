"use client";

import { useMemo } from "react";
import { timeline } from "@/content/data";
import { motion } from "framer-motion";

type TimelineNode = (typeof timeline)[number] & {
  side: "left" | "right";
  delay: number;
};

export function Timeline() {
  const nodes: TimelineNode[] = useMemo(() => {
    return timeline.map((entry, index) => ({
      ...entry,
      side: index % 2 === 0 ? "left" : "right",
      delay: index * 0.12
    }));
  }, []);

  return (
    <section className="section relative" id="timeline">
      <div className="section-heading text-center">
        <p className="section-subtitle">Trajectory</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Experience</h2>
        <p className="text-cool-300 max-w-2xl mx-auto mt-4">
          Milestones linking experimental neuroscience, computation, and collaborative system design.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl px-4">
        {/* Central Line */}
        <div className="absolute inset-y-0 left-0 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-ice-400 via-fire-500 to-cool-800 opacity-30 md:block hidden" />
        <div className="absolute inset-y-0 left-8 w-0.5 bg-gradient-to-b from-ice-400 via-fire-500 to-cool-800 opacity-30 md:hidden" />

        <div className="space-y-12 md:space-y-24">
          {nodes.map((node) => (
            <motion.article
              key={node.year}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: node.delay, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${node.side === "left" ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cool-950 border-2 border-ice-400 z-10 mt-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

              {/* Content Side */}
              <div className={`md:w-1/2 ${node.side === "left" ? "md:pr-12 pl-16 md:pl-0" : "md:pl-12 pl-16"}`}>
                <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-ice-500/5 to-fire-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span className="inline-block px-3 py-1 rounded-full bg-cool-800/50 border border-white/10 text-xs font-semibold text-ice-400 mb-3">
                    {node.year}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ice-200 transition-colors">
                    {node.label}
                  </h3>

                  <p className="text-sm leading-relaxed text-cool-300">
                    {node.description}
                  </p>
                </div>
              </div>

              {/* Empty Side for spacing */}
              <div className="hidden md:block md:w-1/2" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
