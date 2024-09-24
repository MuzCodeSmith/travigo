/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textBlack: '#343432',
        colorPrimary:'#FF3000',
        colorPrimaryDark:'#f62e02'
      },
      fontFamily: {
        chivo: ['"Chivo"', 'sans-serif'],
        abril: ['"Abril Fatface"', 'cursive']
      },
    },
  },
  plugins: [],
}

