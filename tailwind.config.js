/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "375px",
        // => @media (max-width: 375px) { ... }

        sm: "640px",
        // => @media (max-width: 640px) { ... }

        md: "768px",
        // => @media (max-width: 768px) { ... }

        lg: "1024px",
        // => @media (max-width: 1024px) { ... }

        xl: "1200px",
        // => @media (max-width: 1128px) { ... }

        // "2xl": "1440px",
        // => @media (max-width: 1440px) { ... }

        // "3xl": "1536px",
        // // => @media (max-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {
        woodsmoke: {
          50: "#f6f6f7",
          100: "#e2e3e5",
          200: "#c4c6cb",
          300: "#9fa0a9",
          400: "#7b7b86",
          500: "#61616b",
          600: "#4c4c55",
          700: "#3f4046",
          800: "#35353a",
          900: "#18181a",
        },
      },
    },
  },
};
