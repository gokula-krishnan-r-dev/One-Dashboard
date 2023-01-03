/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#007AFF"
        },
        gray: {
          400: "#13131380"
        }
      },
      fontFamily: {
        play: ["Play", "Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
}
