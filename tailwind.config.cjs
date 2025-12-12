/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F3EFE3",
          100: "#E7E1D0",
          200: "#D8CCB0",
          300: "#CFC4A3",
          400: "#C0C3B9",
          500: "#A5B1A4",
          600: "#769382",
          700: "#5D7467",
          800: "#405348"
        },
        brand: {
          sage: "#769382",
          sand: "#D8CCB0",
          mist: "#C0C3B9",
          linen: "#F3EFE3",
          ink: "#1F2A23"
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};


