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
        brand: {
          50: "#f5f5ff",
          100: "#ebe9ff",
          200: "#d4cfff",
          300: "#b3a5ff",
          400: "#8a6cff",
          500: "#6b46ff",
          600: "#5935db",
          700: "#4528b5",
          800: "#35208c",
          900: "#2b1c6f"
        },
        accent: "#facc15",
        ink: {
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#e5e7eb",
          400: "#d1d5db",
          500: "#9ca3af",
          600: "#6b7280",
          700: "#4b5563",
          800: "#1f2937",
          900: "#111827"
        }
      },
      fontFamily: {
        display: ["Poppins", "var(--font-sans)"],
        body: ["Inter", "var(--font-sans)"]
      }
    }
  },
  plugins: []
};

export default config;
