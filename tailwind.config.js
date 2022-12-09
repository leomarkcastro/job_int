/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Alegreya: ["Alegreya"],
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["corporate"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "d-",
    darkTheme: "corporate",
  },
};
