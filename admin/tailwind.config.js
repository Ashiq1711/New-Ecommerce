/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
      colors: {
        primary: "#262626",
        secondary: "#6D6D6D",
          default: "#b91c1c",
        
        },
        boxShadow: {
          testShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        },
    },
  },
  plugins: [],
}
