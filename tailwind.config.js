/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "pr": ["Poppins", "sans-serif"],
        "pts": ["PT Sans", "sans-serif"],
        "sans": ['Genos', 'sans-serif'],
      },
      colors:{
        primaryBlue:'#00C2FF',
        primaryDarkBlue:"#006585",
        red:'#F00'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
