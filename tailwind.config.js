/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#4E46B4",
      "light-purple": "#A56CBD",
      "light-green": "#2ECC71",
      "light-red": "#FE4A51",
      "light-blue": "#0088FF",
      "light-brown": "#997C00",
      "light-brown": "#997C00",
      "light-light-blue": "#49CFE8",
    },
    extend: {
      fontFamily: {
        roboto: ["ROBOTO"],
        oswald: ["OSWALD"],
      },
    },
  },
  plugins: [],
};
