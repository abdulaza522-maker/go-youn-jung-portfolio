/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        zedian: {
          bg: '#0d1116',
          'bg-alt': '#14181f',
          accent: '#00df8f',
          'accent-dark': '#00b373',
          text: '#ffffff',
          'text-muted': '#9ca3af',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, #00df8f, #00b373)',
      },
    },
  },
  plugins: [],
}
