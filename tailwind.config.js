/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables dark mode toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // includes TS/TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
