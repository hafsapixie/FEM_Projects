/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        black: "hsl(212, 21%, 14%)",
        gray: "hsl(228, 12%, 48%)",
        cream: "hsl(30, 38%, 92%)",
        white: "hsl(0, 0%, 100%)",
        greem: {
          500: "hsl(158, 36%, 37%)",
          700: "hsl(158, 42%, 18%)",
        },
      },
      fontFamily:{
        montserrat:['Montserrat'],
        fraunces:['Fraunces'],
      },
    },
  },
  plugins: [],
}

