/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
      },
      colors: {
        ink: '#0b0906',
        'ink-2': '#161008',
        'ink-3': '#1e150b',
        parchment: '#f2e4c4',
        'parchment-dim': '#b8a07a',
        amber: '#b55829',
        'amber-bright': '#d4752e',
        gold: '#c9953a',
        'gold-dim': '#8a6a2a',
        'gold-pale': '#e8c87a',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(181,88,41,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(181,88,41,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
