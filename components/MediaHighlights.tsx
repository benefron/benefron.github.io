import Link from "next/link";
import { mediaFeatures } from "@/content/data";

export function MediaHighlights() {
  return (
    <section className="section" id="media">
      <div className="section-heading">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">In the Media</h2>
        <p className="section-subtitle">Coverage highlighting active sensing and neural coding research.</p>
      </div>
      <div className="space-y-3 md:space-y-4">
        {mediaFeatures.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="card-glow block rounded-2xl bg-white/5 p-4 text-left text-white transition hover:-translate-y-1 md:rounded-3xl md:p-5"
          >
            <p className="text-xs font-semibold md:text-sm">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
