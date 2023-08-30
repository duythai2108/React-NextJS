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
        grayf4: "#F4F4F4",
        grayfc: "#fcfcfc",
        primaryText: "#11142D",
        gray80: "#808191",
        primary: "#475BE8",
      },
      spacing: {
        c10: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
