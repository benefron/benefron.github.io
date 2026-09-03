import type { Config } from "tailwindcss";

/**
 * Colour values live in app/globals.css as channel triples (--*-rgb).
 * Referencing them through <alpha-value> keeps opacity modifiers working
 * (border-ink/10, hover:border-accent/40) with a single source of truth.
 */
const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg-rgb"),
        "bg-alt": withAlpha("--bg-alt-rgb"),
        "bg-card": withAlpha("--bg-card-rgb"),
        ink: withAlpha("--ink-rgb"),
        "ink-mid": withAlpha("--ink-mid-rgb"),
        "ink-muted": withAlpha("--ink-muted-rgb"),
        accent: withAlpha("--accent-rgb"),
        "accent-str": withAlpha("--accent-str-rgb")
      },
      fontFamily: {
        display: ["var(--font-display)", "DM Serif Display", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"]
      },
      fontSize: {
        eyebrow: ["10px", { letterSpacing: "0.18em", lineHeight: "1.4" }],
        micro: ["11px", { letterSpacing: "0.08em", lineHeight: "1.45" }],
        small: ["13px", { lineHeight: "1.65" }],
        body: ["15px", { lineHeight: "1.75" }],
        "body-lg": ["17px", { lineHeight: "1.8" }],
        h4: ["20px", { lineHeight: "1.25" }],
        h3: ["clamp(1.3rem, 1.7vw, 1.45rem)", { lineHeight: "1.25" }],
        h2: ["clamp(2.25rem, 3.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.75rem, 5.5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        stat: ["clamp(2rem, 3vw, 3.25rem)", { lineHeight: "1" }]
      },
      spacing: {
        section: "100px",
        "section-sm": "64px"
      },
      maxWidth: {
        shell: "1100px",
        prose: "640px"
      }
    }
  },
  plugins: []
};

export default config;
