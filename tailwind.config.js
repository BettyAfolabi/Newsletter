/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Tomato: "hsl(4, 100%, 67%)",
        Grey: "hsl(231, 7%, 60%)",
        CharcoalGrey: "hsl(235, 18%, 26%)",
        White: "hsl(0, 0%, 100%)",
        attribution: "hsl(228, 45%, 44%)",
      },
      textColor: {
        DarkGrey: "hsl(234, 29%, 20%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(231, 7%, 60%)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
