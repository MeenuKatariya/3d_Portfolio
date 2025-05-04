// tailwind.config.js
module.exports = {
  darkMode: "class", // important
  theme: {
    extend: {
      colors: {
        blackTheme: {
          background: "#000000",
          foreground: "#FFFFFF",
        },
        whiteTheme: {
          // background: "#FFFFFF",
          foreground: "#000000",
        },
      },
    },
  },
  plugins: [],
};
