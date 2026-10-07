/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Trebuchet MS', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(54, 24, 99, 0.10)',
      },
    },
  },
  plugins: [],
}
