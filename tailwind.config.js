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
      animation: {
        scrollLeft: "scrollLeft 180s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-100%, 0, 0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
