export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          rosewood: '#984062', // Rosewood / Dark Raspberry
          mulberry: '#7E4A5F', // Rich mauve-burgundy, still soft but clearly different from rosewood
          aqua: '#A8F9FF', // Icy Aqua / Frosted Cyan
          buttercream: '#FAF2A1', // Light Buttercream / Pale Maize
          indigo: '#5863F8', // Electric Indigo / Ultrablue
          lavenderGray: '#A09EBB', // Lavender Gray / Dusty Periwinkle
          mist: '#CECAFA', // Lavender Mist / Iris Whisper
          charcoalTeal: '#12303B', // Charcoal Teal / Deep Sea
          pine: '#1B7B4E', // Verdant Pine / Botanical Emerald
        },
        neutral: {
          900: '#1c1c1e',
          800: '#2e2e2e',
          100: '#f7f7f5',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'], // Futura analog
        body: ['"Crimson Pro"', 'serif'], // Palatino analog
        quote: ['"Playfair Display"', 'serif'], // Didot italic analog
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
