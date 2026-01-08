import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        founder: {
          light: "#6EE7B7",
          DEFAULT: "#10B981",
          dark: "#059669",
        },
        developer: {
          light: "#93C5FD",
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        researcher: {
          light: "#C4B5FD",
          DEFAULT: "#8B5CF6",
          dark: "#7C3AED",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
