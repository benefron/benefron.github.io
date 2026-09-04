"use client";

import { useEffect, useRef, useState } from "react";

export function ResultClip({
  src,
  poster,
  caption,
  width,
  height
}: {
  src: string;
  poster: string;
  caption: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  // Default to not autoplaying until we have confirmed the user allows motion.
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion) {
      el.pause();
    } else {
      el.play().catch(() => {
        /* autoplay may still be blocked; native controls remain the fallback */
      });
    }
  }, [reduceMotion]);

  return (
    <figure className="m-0">
      <video
        ref={ref}
        className="w-full h-auto rounded-[6px] border border-ink/10 bg-bg-alt"
        width={width}
        height={height}
        poster={poster}
        muted
        loop
        playsInline
        controls
        preload="none"
        aria-label={caption}
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="font-body text-[12px] leading-[1.5] text-ink-muted mt-2.5">
        {caption}
      </figcaption>
    </figure>
  );
}
