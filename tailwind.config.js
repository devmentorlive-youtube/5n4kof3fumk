module.exports = {
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#999999",
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#D6D6D6",
          300: "#C2C2C2",
          400: "#ADADAD",
          500: "#999999",
          600: "#787878",
          700: "#575757",
          800: "#363636",
          900: "#141414",
        },
        blue: {
          DEFAULT: "#0CD1EE",
          50: "#B6F2FB",
          100: "#A3EFFA",
          200: "#7CE8F8",
          300: "#55E2F6",
          400: "#2EDBF4",
          500: "#0CD1EE",
          600: "#09A2B9",
          700: "#077383",
          800: "#04444E",
          900: "#011518",
        },
        red: {
          DEFAULT: "#F7083A",
          50: "#FDBAC8",
          100: "#FCA6B8",
          200: "#FB7F99",
          300: "#FA5779",
          400: "#F8305A",
          500: "#F7083A",
          600: "#C1062D",
          700: "#8A0420",
          800: "#540314",
          900: "#1E0107",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
