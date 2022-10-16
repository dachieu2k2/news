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
      "text-color-2d": "#2D2D2D",
      "text-color-39": "#393939",
      "text-color-f6": "#F65050",
    },
    extend: {
      fontFamily: {
        roboto: ["ROBOTO"],
        oswald: ["OSWALD"],
      },
      backgroundImage: {
        "ads-image":
          "url('https://s3-alpha-sig.figma.com/img/14bd/f024/c53c927ee94e5e15ae14e2c57b766994?Expires=1666569600&Signature=dK2YFL8uhyg5jC-axLpsEUuPWGSwy8P1T5iTFzCYh2~BvcToCJOT6czY1vvU7xfhOdstiz0UR9KJqwzRr3Ate7SIBGMuU5tdFvROVCkL5xMhvE~GW7hjKx4OL7OPdM7m7MHJAg2kaKC0gEtFiPw91wWnKxzbU71ypjRfWJpPaMIKKLEfx9Pnu9Ofh-e~WX44QqZvsVj16-z0txLR0li5L9nviWWvwV3o9vlPDp5Id2GV42CrReAIvh-F385W9brSmJ8vJdmNX1G5NyFKHqt7WcUqTMYOgBPNYeJfieoY3aRFqqOMm0J0Au1FP7p8FWWptNSnZHUuBxOXU3VwMM9RSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
      },
    },
  },
  plugins: [],
};
