/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      animation: {
        'fade': 'fade 1s ease ',
        'right':'right 1s ease',
        'left':'left 1s ease'
      }
    },
  },
  plugins: [],
}

