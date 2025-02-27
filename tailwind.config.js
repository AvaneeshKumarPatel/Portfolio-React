/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        onyx: "#181818",
        darkgray: "#808080",
        mediumgray: "rgba(128, 128, 128, 0.5)",
        lightgray: "#C5C5C5",
        lightblue: "rgba(63, 100, 234, 0.43)",
        cardborder: "#383737",
        lightred: "rgba(233, 63, 64, 0.43)",
        lightyellow: "rgba(255, 184, 0, 0.43)",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(to bottom, #1A1A1A, #131313)",  
      },
    },
  },
  plugins: [],
};
