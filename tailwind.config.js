/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        NoteSansJP: ['NoteSansJP', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}