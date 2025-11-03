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
        <h2>Trajectory</h2>
        <p className="section-subtitle">Milestones linking experimental neuroscience, computation, and collaborative system design.</p>
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-300 via-white/40 to-brand-600" />
        <div className="space-y-10">
          {nodes.map((node) => (
            <motion.article
              key={node.year}
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: node.delay, ease: "easeOut" }}
              className={`relative flex flex-col gap-4 rounded-3xl bg-white/6 p-6 backdrop-blur-xl md:w-[calc(50%_-_1rem)] ${
                node.side === "left" ? "timeline-left" : "timeline-right"
              }`}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-200">{node.year}</span>
              <h3 className="text-2xl font-semibold text-white">{node.label}</h3>
              <p className="text-sm leading-relaxed text-ink-200">{node.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
