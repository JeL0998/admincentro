/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
    },
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [require("daisyui")],
}

