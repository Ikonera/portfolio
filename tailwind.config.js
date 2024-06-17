/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,jsx}"],
  darkMode: ["selector", '[data-mod="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: "Overlock",
        body: "Lato",
      },
      animation: {
        scrollLeft: "scrollLeft 10s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          from: { right: "-100px" },
          to: { left: "-100px" },
        },
      },
    },
  },
  plugins: [],
};
