/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "1200px",
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xsm: "12px",
      xxs: "11px",
    },

    extend: {
      colors: {
        red: { 500: "#ff1d23" },
        origin: { 500: "#ff7913" },
        grey: { 600: "#f3f3f3" },
      },
    },
  },
  plugins: [],
};
