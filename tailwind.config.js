/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#07352E",
          secondary: "#47B26B",
          50: '#E9FFE8',
          100: '#80CB7B'
        },
        gray: {
          primary: "#849A97"
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}