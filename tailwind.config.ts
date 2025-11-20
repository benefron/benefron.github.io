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
        // Cool (Slate/Dark Blue)
        cool: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        // Ice (Cool Accent - Cyan/Teal)
        ice: {
          400: "#22d3ee", // Cyan 400
          500: "#06b6d4", // Cyan 500
          600: "#0891b2", // Cyan 600
        },
        // Fire (Warm Accent - Orange/Amber)
        fire: {
          400: "#fb923c", // Orange 400
          500: "#f97316", // Orange 500
          600: "#ea580c", // Orange 600
        },
        // Electric (Deep Accent - Violet/Indigo)
        electric: {
          400: "#a78bfa", // Violet 400
          500: "#8b5cf6", // Violet 500
          600: "#7c3aed", // Violet 600
          900: "#4c1d95", // Violet 900
        },
        // Surface (Alternating backgrounds)
        surface: {
          50: "#f8fafc",
          100: "#1e293b", // Slate 800
          200: "#0f172a", // Slate 900
          300: "#020617", // Slate 950
        },
        brand: { // Mapping brand to cool
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: "#22d3ee", // Updated to Ice
        ink: { // Mapping ink to cool
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        }
      },
      fontFamily: {
        display: ["Poppins", "var(--font-sans)", "sans-serif"],
        body: ["Inter", "var(--font-sans)", "sans-serif"]
      },
      backgroundImage: {
        'storm-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    }
  },
  plugins: []
};

export default config;
