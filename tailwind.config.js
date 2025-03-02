/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',//#3b82f6
        'primary-light': '#8b5cf6c4',
        secondary: '#424242'
      },
    },
  },
  plugins: [],
}