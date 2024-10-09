/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {fontFamily: {
      primary: 'Saira',
    },

    backgroundImage:{
      'hero1':"url('./public/img/ROOMDESİGN3.jpg')",
      'NewsLetter':"url('./public/img/ROOMDESİGN3.jpg')"

    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        // lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }, dropShadow: {
      primary: '0px 4px 10px rgba(15, 27, 51, 0.05);',
    },},
  },
  plugins: [],
}

