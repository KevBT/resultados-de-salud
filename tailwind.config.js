/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extends: {},
    screens: {
      'sm': '400px',
      '2xl': '1536px'
    },
  },
  plugins: [],
}

