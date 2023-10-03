module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0000FF",
          dark: "#00008B",
          light: "#ADD8E6",
        },
        secondary: {
          DEFAULT: "#808080",
          dark: "#696969",
          light: "#A9A9A9",
        },
        tertiary: {
          DEFAULT: "#FF0000",
          dark: "#8B0000",
          light: "#FF6347",
        },
      },
    },
  },
  plugins: [],
}