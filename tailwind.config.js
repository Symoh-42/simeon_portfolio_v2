/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f1ea",
        paper2: "#ece9df",
        card: "#faf8f2",
        ink: "#16140e",
        "ink-soft": "#44423a",
        faint: "#8b887c",
        line: "#16140e",
        accent: {
          DEFAULT: "#2440ff",
          soft: "#e7e9ff",
          ink: "#16236b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        mono: "0.18em",
        wide2: "0.12em",
      },
      maxWidth: { shell: "1240px", prose2: "640px" },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
      },
      animation: {
        rise: "rise 0.85s cubic-bezier(0.16,1,0.3,1) both",
        fade: "fade 1s ease both",
        marquee: "marquee 32s linear infinite",
        pulse2: "pulse2 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
