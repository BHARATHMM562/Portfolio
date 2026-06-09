import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:     "#00ff88",
        background: "#0a0a0a",
        terminal:   "#0d1117",
        muted:      "#6b7280",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow:      "0 0 8px #00ff88",
        "glow-lg": "0 0 20px #00ff88",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee:       "marquee 30s linear infinite",
        blink:         "blink 1s step-end infinite",
        "bounce-slow": "bounce 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
