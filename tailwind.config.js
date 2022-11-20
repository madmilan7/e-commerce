/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '36rem',
        '100': '32rem'
      },
      maxWidth: {
        '82': '82rem'
      }
    },
  },
  plugins: [],
}
