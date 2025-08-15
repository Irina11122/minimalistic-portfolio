/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { pastel: "#D2E0FB", "dark-purple": "#8EACCD" },
    },
  },
  plugins: [],
};
