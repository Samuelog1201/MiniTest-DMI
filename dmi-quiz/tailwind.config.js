/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // Colores principales Icesi
        'icesi-blue': '#5454E9',
        'icesi-purple': '#865CF0',
        'icesi-green': '#4CB979',
        'icesi-orange': '#E9683B',
        'icesi-yellow': '#E4EB60',
        'icesi-gray-1': '#88898C',
        'icesi-gray-2': '#CECFD4',
      },
      backgroundImage: {
        'gradient-icesi': 'linear-gradient(135deg, #5454E9 0%, #865CF0 100%)',
        'gradient-ux': 'linear-gradient(135deg, #4CB979 0%, #2d8052 100%)',
        'gradient-ui': 'linear-gradient(135deg, #865CF0 0%, #5a3fa0 100%)',
        'gradient-dev': 'linear-gradient(135deg, #E9683B 0%, #c0401f 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(84, 84, 233, 0.3)',
        'glow-purple': '0 0 20px rgba(134, 92, 240, 0.3)',
        'glow-green': '0 0 20px rgba(76, 185, 121, 0.3)',
        'glow-orange': '0 0 20px rgba(233, 104, 59, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [forms],
}
