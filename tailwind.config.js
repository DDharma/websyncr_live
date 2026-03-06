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
        "pr": ["'Clash Display'", "sans-serif"],
        "pts": ["'Satoshi'", "sans-serif"],
        "sans": ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        primary: '#00C2FF',
        primaryLight: '#80E1FF',
        primaryDark: '#0090CC',
        midnight: '#060B14',
        surface: '#0C1220',
        surfaceLight: '#131D2E',
        surfaceHover: '#1A2640',
        textPrimary: '#E8EDF5',
        textMuted: '#6B7A99',
        borderColor: '#1A2640',
        success: '#00D68F',
        warm: '#FF8A50',
        white: '#FFFFFF',
        red: '#F00',
        gray: '#D4D4D4',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1536px'
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
