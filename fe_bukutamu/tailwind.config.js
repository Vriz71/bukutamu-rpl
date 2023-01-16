/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#019EFF',
        'main-menu': '#76797C',
        'menu-text': '#1E1E1E', 
        'green-bg': '#C0FFD2'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'Poppins': ['Poppins', 'sans-serif']
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      spacing: {
        '54': '13.5rem',
      },
    },
  },
  plugins: [],
}
