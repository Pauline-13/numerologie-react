/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover-Button' : '#B898A3',
        'color-Button' : '#554E55',
      },
    },
  },
  plugins: [],
}

