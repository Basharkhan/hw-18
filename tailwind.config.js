/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        contactUsButtonBorderColor: 'rgba(244, 246, 252, 0.20)',
        viewWorkButtonBgColor: '#FCD980'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}