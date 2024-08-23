export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#24A7A5'
      },
      fontFamily: {
        sans: ['Franklin Gothic'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,  // Ensure this matches what you expect for 'semi-bold'
        bold: 700
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
      },
    },
  },
  plugins: [],
}
