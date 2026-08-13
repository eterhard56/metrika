import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C1210",
        mist: "#E8EEE9",
        fog: "#F4F7F4",
        moss: "#1F4D3A",
        signal: "#E85D04",
        brass: "#B8A078",
        stone: "#8A918A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        lift: "0 24px 60px rgba(12, 18, 16, 0.12)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(12,18,16,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,18,16,0.05) 1px, transparent 1px)",
        "hero-wash":
          "radial-gradient(120% 80% at 80% 20%, rgba(232,93,4,0.18), transparent 45%), linear-gradient(135deg, #0C1210 0%, #1F4D3A 52%, #0C1210 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
} satisfies Config;
