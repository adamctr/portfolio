/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFF",
      grey: "#E5E5E5",
      blue: "#14213D",
      yellow: "#FCA311",
      beige: "#EED7C5",
      pink: "#C89F9C",
      orange: "#C97C5D",
      red: "#B36A5E",
    },
    extend: {
      fontFamily: {
        harmond: ["harmond", "cursive"],
        superduper: ["superduper", "sans-serif"],
      },
    },
  },
  plugins: [],
};
