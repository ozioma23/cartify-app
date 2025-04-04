/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      colors: {
        primary: "#111850",
        secondary: "#1593DB",
fadedGrey: "#A39E9E",
white: "#FFFFFF",
black: "#000000",
      }
    },
  },
  plugins: [],
};



