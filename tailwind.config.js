const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-main": "#febf5e",
        "purple-main": "#444bff",
        "purple-secondary": "#aa52ff",
        "blue-secondary": "#38a7ff",
        "yellow-secondary": "#faff2b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
