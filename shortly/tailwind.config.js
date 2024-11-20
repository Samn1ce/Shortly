/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        700: "700px",
      },
      backgroundColor: {
        dark: "#3b3054",
      },
    },
  },
  plugins: [],
};
