/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        pt: '"PT Sans", sans-serif',
        potta: '"Potta One", sans-serif',
      },
    },
  },
  plugins: [],
};
