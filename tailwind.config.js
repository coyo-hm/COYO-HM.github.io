/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {
      padding: {
        "header-1": "4px",
        "header-2": "8px",
        "header-3": "12px",
        "header-4": "16px",
        "header-5": "20px",
        "header-6": "24px",
      },
    },
  },
  plugins: [],
};
