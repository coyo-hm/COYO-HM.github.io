/** @models {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/constants/*.ts",
  ],
  theme: {
    extend: {
      rotateY: {},
      keyframes: {
        scrollLeft: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-100%, 0, 0)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 180s linear infinite",
        slideIn: "slideIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
