/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        Mons: ['Montserrat'], // Default sans-serif font
        sans: ['sans-serif'], // Default sans-serif font
        bebas: ['Bebas Neue', 'cursive'], // Specific font family for headings
        pops: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',               // Safari and Chrome
        },
      });
    },
  ],
};
