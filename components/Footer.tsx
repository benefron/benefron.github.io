export function Footer() {
  return (
    <footer
      className="px-20 py-6 flex items-center justify-between"
      style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <span className="font-mono text-[11px] tracking-[0.06em]" style={{ color: "rgba(255,255,255,0.35)" }}>
        Ben Efron, PhD · Systems Neuroscience
      </span>
      <span className="font-mono text-[11px] tracking-[0.06em]" style={{ color: "rgba(255,255,255,0.35)" }}>
        © 2025
      </span>
    </footer>
  );
}
