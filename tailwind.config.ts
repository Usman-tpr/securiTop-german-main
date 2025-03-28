import type { Config } from "tailwindcss";
import { theme } from "./src/config/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      animation: theme.animation,
      keyframes: theme.keyframes,
      boxShadow: theme.boxShadow,
    },
  },
  plugins: [],
};

export default config; 