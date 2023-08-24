/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oxygen", "Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        syne: ['syne', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
      },
      colors: {
        'cyan': '#A8DADC',
        'red': '#E63946',
        'lightred': '#F36670',
        'darkred': '#da0c1c',
        'offwhite': '#F1FAEE',
        'blue': '#457B9D',
        'darkblue': '#1D3557',
        'gray': '#4E4E4E',
        'black': '#161615',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
