/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4EF',
        cream: '#EDE7DD',
        beige: '#D8CDBD',
        sand: '#C9BCA6',
        taupe: '#A89884',
        charcoal: '#2B2825',
        ink: '#1A1816',
        stone: {
          50: '#FAF8F5',
          100: '#F2EEE7',
          200: '#E5DDD0',
          300: '#D8CDBD',
          400: '#C9BCA6',
          500: '#A89884',
          600: '#8A7B68',
          700: '#6B5E50',
          800: '#4A4138',
          900: '#2B2825',
          950: '#1A1816',
        },
        gold: {
          light: '#D4C4A0',
          DEFAULT: '#C0A87E',
          dark: '#A89070',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'wider-2': '0.25em',
      },
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up': 'fadeUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
