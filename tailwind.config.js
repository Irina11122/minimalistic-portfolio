/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-purple': '#C370FF',
        'dark-purple': '#434242',
        'neon-purple': '#9500FF',
        'gray-purple': '#44446E',
      },
      width: { 'w-90%': '90%' },
    },
  },
  plugins: [],
};
