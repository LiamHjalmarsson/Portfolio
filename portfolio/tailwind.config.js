/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red_primary: "#ff4b57",
        bluePrimary: "#4bfff3",
      },
      boxShadow: {
        middle: "0px 0px 50px 25px",
        sm_middle: "0px 0px 6px 2px",
      },
    },
    plugins: [],
    darkMode: 'selector',
  }
}