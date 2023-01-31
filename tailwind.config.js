/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        postcard: "repeat(5, 200px)",
      },
    },
  },
  plugins: [],
};
