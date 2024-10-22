/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 0 10px 0 rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
