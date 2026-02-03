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
    extend: {
      colors: {
        dark: "#0f172a", // Updated to matches CSS
        primary: "#3b82f6", // Updated to match CSS
        secondary: "#8b5cf6",
        textGray: "#9ca3af",
      },
      fontFamily: {
        JetBrains: ["JetBrains Mono", "monospace"],
        Inter: ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
