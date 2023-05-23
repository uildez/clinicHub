/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
