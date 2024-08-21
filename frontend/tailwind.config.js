/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Franklin Gothic'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      width: {
        '128': '32rem',    // 512 pixels
        '144': '36rem',    // 576 pixels
        '160': '40rem',    // 640 pixels
        '176': '44rem',    // 704 pixels
        '192': '48rem',    // 768 pixels
        '208': '52rem',    // 832 pixels
        '224': '56rem',    // 896 pixels
        '240': '60rem',    // 960 pixels
        '256': '64rem',    // 1024 pixels
      },
    },
  },
  plugins: [],
}
