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
    <section className="section" id="timeline">
      <div className="section-heading">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Trajectory</h2>
        <p className="section-subtitle">Milestones linking experimental neuroscience, computation, and collaborative system design.</p>
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-y-0 left-1/2 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-300 via-white/40 to-brand-600 md:block" />
        <div className="space-y-4 md:space-y-10">
          {nodes.map((node) => (
            <motion.article
              key={node.year}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: node.delay, ease: "easeOut" }}
              className={`relative flex flex-col gap-3 rounded-2xl bg-white/6 p-4 backdrop-blur-xl md:w-[calc(50%_-_1rem)] md:gap-4 md:rounded-3xl md:p-6 ${
                node.side === "left" ? "timeline-left" : "timeline-right"
              }`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-200 md:text-sm">{node.year}</span>
              <h3 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">{node.label}</h3>
              <p className="text-xs leading-relaxed text-ink-200 md:text-sm">{node.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
