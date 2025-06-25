/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
    colors:{
       white: "hsl(0, 0%, 100%)",
       cyan:{
         400: " hsl(178, 100%, 50%)"},
       blue:{
         500: "hsl(215, 51%, 70%)",
         950: "hsl(217, 54%, 11%)",
         900: " hsl(216, 50%, 16%)",
         800: "hsl(215, 32%, 27%)",
        },
    },
    fontFamily:{
          outfit: ['Outfit' , 'sans-serif'],
        },
      },
  },
plugins: [],
}
