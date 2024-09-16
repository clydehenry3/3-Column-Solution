/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "#e38b2d", // Bright orange
          darkCyan: "#006971", // Dark cyan
          veryDarkCyan: "#00383a", // Very dark cyan
        },
        neutral: {
          transparentWhite: "rgba(255, 255, 255, 0.75)", // Transparent white
          lightGray: "#f2f2f2", // Very light gray
        },
      },
      fontFamily: {
        "big-shoulders": ['"Big Shoulders Display"', "sans-serif"],
        "lexend-deca": ['"Lexend Deca"', "sans-serif"],
      },
      fontWeight: {
        "extra-light": 100,
        light: 300,
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
