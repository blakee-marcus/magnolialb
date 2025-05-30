export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#984062', // Deep magenta - theatrical accent
          secondary: '#FAF2A1', // Creamy yellow - warmth and accessibility
          dark: '#2d1b25', // Optional deep background color
          light: '#fffaf0', // Optional light section background
        },
        neutral: {
          900: '#1c1c1e',
          800: '#2e2e2e',
          100: '#f7f7f5',
        },
        emerald: '#42675a', // Optional calming green for recipes/game night
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        fancy: ['"Libre Bodoni"', '"serif"'], // Extra drama option
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.06)',
        dramatic: '0 6px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        'curtain-reveal': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        'curtain-in': 'curtain-reveal 0.6s ease-out forwards',
        sparkle: 'sparkle 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
