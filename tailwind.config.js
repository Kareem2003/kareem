/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      dark: "#191919",
      primary: "#2196F3",
      white: "#ffffff",
      gray: "#4B4242",
      textGray: "#D3D3D3AA",
      red: "#ff0000",
    },
    fontFamily: {
      JetBrains: ["JetBrains Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
