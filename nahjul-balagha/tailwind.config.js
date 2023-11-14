module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen/1": "10vh",
        "screen/9": "90vh",
      }),
    },
  },
  variants: {
    fill: ["hover", "focus"],
    extend: {},
  },
  plugins: [],
};
