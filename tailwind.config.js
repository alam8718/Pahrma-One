/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      s: "320px",
      m: "375px",
      l: "425px",
      sm: '640px',
      md: '768px',
      lg: '976px',
      mlg: '1024px',
      sxl: "1280px",
      xl: '1440px',
      xxl: '1920px'
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}