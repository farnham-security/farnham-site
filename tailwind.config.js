module.exports = {
  content: ["./*.html", "./src/assets/**/*.js"],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px"
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        body: "#637381",
        grey: "#F9FAFB",
        primary: "#1E2952",
        secondary: "#2C3C77"
      },
      boxShadow: {
        box: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
