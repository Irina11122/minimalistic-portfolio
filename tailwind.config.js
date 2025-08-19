/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-black',
    'bg-white',
    'bg-gradient-to-r',
    'from-yellow-500',
    'to-orange-500',
  ],
  theme: {
    extend: {
      colors: {
        'my-purple': '#CDC8FF',
        'dark-purple': '#8477FA',
        'neon-purple': '#9500FF',
        'gray-purple': '#2E2E2F',
      },
      width: { 'w-90%': '98%' },
    },
  },
  plugins: [],
};
