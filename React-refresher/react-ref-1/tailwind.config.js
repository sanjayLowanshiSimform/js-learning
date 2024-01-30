/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "960px",
        desktop: "1248px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          tablet: "1.5rem",
        },
      },
      colors: {
        myBg:"#34495e",
        myBlue: "#3498db",
        myRed: "#e74c3c",
        myYellow: "#f1c40f",
      },
    },
  },
  plugins: [],
}

