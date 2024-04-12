/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Sarabun"', 'sans-serif'],
        'body': ['"Inter Tight"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

