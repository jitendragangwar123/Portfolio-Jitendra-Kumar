import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        color1: "#11071F",
        color2: "#1A0B2E",
        color3: "#4f22b6",
        background: "#000000",
        error: "#E42929",
        warning: "#E4CE06",
        success: "#56E39F",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#A0AEC0",
        transparent: "transparent",
        commandResult: "#94a3b8",
      },
      keyframes: {
        "slide-in-from-bottom-full": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out-to-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      fontFamily: {
        trLarabie: ["var(--font-trLarabie)", "sans-serif"],
        videoType: ["var(--font-videoType)","sans-serif"],
      },
      animation: {
        "slide-in-from-bottom-full":
          "slide-in-from-bottom-full 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-out-to-bottom":
          "slide-out-to-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
