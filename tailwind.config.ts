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
        // McCaulley Deck Co. brand palette (see BRAND.md)
        charcoal: "#20211F",
        "charcoal-light": "#33342F",
        paper: "#F3F1EA",
        "paper-dark": "#E5E1D6",
        timber: "#D29A55",
        "timber-light": "#DDAF74",
        bronze: "#B0763B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms ease-out",
        "marquee-left": "marquee-left linear infinite",
        "marquee-right": "marquee-right linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
