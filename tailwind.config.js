/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#02EF60",
          200: "#7C31FF",
        },
        secondary: {
          100: "#FAFBFB",
          200: "#21314A",
          300: "#00081D",
        },
        dark: {
          100: "#20232A",
          200: "#33373E",
        },
      },
      fontFamily: {
        body: ["open-sans"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
