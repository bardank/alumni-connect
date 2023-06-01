/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E9105",
        secondary: "#337AB7",
        primary: "#0E9105",
        customGray: {
          dark: "#373737",
        },
      },
      height: {
        vh: "80vh",
      },
    },
  },
  plugins: [],
};
