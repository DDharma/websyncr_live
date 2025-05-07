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
        red:'#F00',
        white: '#FFFFFF',
        lightBlue: '#80E1FF',  // Lighter shade of primaryBlue
        darkBlue: '#004B61',   // Darker shade of primaryDarkBlue
        skyBlue: '#B3EBFF',    // Very light blue
        navy: '#003A4F',       // Very dark blue
        gray: '#D4D4D4'        // Neutral gray
      },
      screens: {
        'xs':'320px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        'xxl':'1536px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
