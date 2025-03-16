/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#8FDBC2',
      },
      fontFamily: {
        'acorn': ['Acorn', 'sans-serif'],
        'comic-neue': ['var(--font-comic-neue)', 'cursive'],
      },
    },
  },
  plugins: [],
} 