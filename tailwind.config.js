/** @models {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/constants/*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
