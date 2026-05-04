import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5f3ee',
        'bg-alt': '#ede9e2',
        'bg-card': '#ffffff',
        ink: '#1a1714',
        'ink-mid': '#4a4540',
        'ink-muted': '#8a8278',
        accent: '#2a7a6f',
        'accent-str': '#1f6055',
      },
      fontFamily: {
        display: ['var(--font-display)', 'DM Serif Display', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'DM Mono', 'monospace'],
      },
    }
  },
  plugins: []
};

export default config;
