/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayf4: "#F4F4F4",
        grayfc: "#FCFCFC",
        gray80: "#808191",
        graye4: "#e4e4e4",
        primaryText: "#11142D",
        primary: "#475BE8",
        secondary: "#2ED480",
      },
      spacing: {
        c10: "10px",
      },
    },
  },
  plugins: [],
};
