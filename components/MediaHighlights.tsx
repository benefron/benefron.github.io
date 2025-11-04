import Link from "next/link";
import { mediaFeatures } from "@/content/data";

export function MediaHighlights() {
  return (
    <section className="section" id="media">
      <div className="section-heading">
        <h2>In the Media</h2>
        <p className="section-subtitle">Coverage highlighting active sensing and neural coding research.</p>
      </div>
      <div className="space-y-4">
        {mediaFeatures.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="card-glow block rounded-3xl bg-white/5 p-5 text-left text-white transition hover:-translate-y-1 sm:p-6"
          >
            <p className="text-sm font-semibold">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
