import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        orbit: {
          background: "#0c1510",
          card: "#111f16",
          accent: "#3DEB7A",
          text: "#e8f0eb",
          muted: "#6b8c73"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
