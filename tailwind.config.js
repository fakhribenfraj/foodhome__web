/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { light: "#e5383b", main: "#8dc73f" },
        secondary: { light: "#fbc8ad" },
      },
    },
  },
  plugins: [],
};
