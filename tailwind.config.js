/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-100": "#fff",
        "grey-200": "#f9f9f9",
        "grey-300": "#f0f0f0",
        "grey-400": "#e3e5e5",
        "grey-500": "#c6cacc",
        "grey-600": "#778085",
        "grey-700": "#434c52",
        "grey-800": "#354047",
        primary: "#212c33",
        secondary: "#778085",
        tertiary: "#c6cacc",
      },
    },
  },
  plugins: [],
};
