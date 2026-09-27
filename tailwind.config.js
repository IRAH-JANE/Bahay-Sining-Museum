/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Capiz: the pearled shell used to glaze bahay-na-bato windows —
        // the warm, translucent "wall" of the museum by day.
        capiz: '#F4EDE0',
        pearl: '#FBF7ED',
        abaca: '#E6D9BF',
        // Narra: the national hardwood — deep ink and frame tones.
        narra: '#241713',
        kalamansi: '#2E1F17',
        // Accents drawn from land, sea and harvest.
        terracotta: '#BD5B34',
        azure: '#1E6E73',
        gold: '#C99A3E',
        sagingdaan: '#5C6B3F',
        dilim: '#0B0908',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        plaque: '0.16em',
        wall: '0.32em',
      },
      maxWidth: {
        reading: '64ch',
      },
      transitionTimingFunction: {
        gallery: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'label-rise': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'label-rise': 'label-rise 420ms cubic-bezier(0.22,1,0.36,1) both',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
