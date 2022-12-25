/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#9768D1",
          600: "#553285",
          800: "#36175E",
          900: "#25064C",
        },
        blue: {
          600: "#0083CB",
          700: "#014ed4",
          800: "#0F2851",
        },
      },
    },
  },
  plugins: [],
};
