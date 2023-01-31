/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      width: {
        900: "900px",
      },
      gridTemplateColumns: {
        postcard: "repeat(5, 200px)",
      },
    },
  },
  plugins: [],
};
