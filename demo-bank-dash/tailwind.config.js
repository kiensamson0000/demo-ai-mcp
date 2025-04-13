/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#4880ff",
        secondary: "#202224",
        "primary-text": "#202224",
        "secondary-text": "#646464",
        "light-bg": "#f5f6fa",
        "border-color": "#d5d5d5",
        "divider-color": "#e0e0e0",
        "delete-red": "#ef3826",
        "badge-red": "#f93c65",
      },
      spacing: {
        sidebar: "260px",
        header: "70px",
      },
      margin: {
        sidebar: "260px",
      },
      inset: {
        sidebar: "260px",
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "19px",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
