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
        background: "var(--background)",
        foreground: "var(--foreground)",
        White: "#FFFEFE", // Off White
        Black: "#1D1C1C", // Black For background
        Blue: "#00FFFF", // Neon Blue
        Pink: "#FF007F", // Complementary Neon Pink
        Green: "#39FF14", // Vibrant Neon Green
        Yellow: "#FFFF00", // Vibrant Neon Yellow
      },
    },
  },
  plugins: [],
};
