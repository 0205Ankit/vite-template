/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",

        // color according to your theme settings
        "dark-primary": "#2E3139",
        "dark-secondary": "#22252D",
        "dark-text": "#fefefe",
        "dark-secondary-text": "#4E535F",

        "light-primary": "#FFFFFF",
        "light-secondary": "#F0F3F2",
        "light-text": "#000000",
        "light-secondary-text": "#5C6C75",

        "theme-green": "#38B432",
      },
    },
  },
  plugins: [],
};
