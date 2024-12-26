/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        bgGray: "#F5F5F5",
        altGray: "#FAFAFA",
        borderGray: "#D5D7DA",
        primaryBlue: "#1570EF",
        lightBlue: "#B2DDFF",
        altText: "#414651",
        secondaryBlue: "#0049C6",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
