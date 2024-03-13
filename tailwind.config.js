/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f6f6f6",
        card: "#FFF",
        secondary: {
          100: "#506384",
          200: "#b1b1a7",
        },
        color: "#f6f5ef",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
