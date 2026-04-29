/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        /** Match `public/home.html`: Inter Tight body, Newsreader display, Fraunces wordmark */
        tomo: [
          '"Inter Tight"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        'tomo-display': ['Newsreader', 'Georgia', 'serif'],
        'tomo-logo': ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
