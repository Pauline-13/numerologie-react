/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover-button' : '#B898A3',
        'color-button' : '#554E55',
      },
         fontFamily: {
        poppins: ['Italiana', 'serif'],
    },
  },
},
  plugins: [],
}

