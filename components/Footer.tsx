export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-shell mx-auto px-6 sm:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-0">
        <span className="font-mono text-micro" style={{ color: "rgba(255,255,255,0.5)" }}>
          Ben Efron, PhD · Leuven, Belgium
        </span>
        <span className="font-mono text-micro" style={{ color: "rgba(255,255,255,0.5)" }}>
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
